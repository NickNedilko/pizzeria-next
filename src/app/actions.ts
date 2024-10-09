'use server';

import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";
import { prisma } from "../../prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";
import { sendEmail } from "@/lib";
import { PayOrderTemplate } from "@/components";
import { fondyPayment } from "@/lib/fondy-payment";

export async function createOrder(data: CheckoutFormValues) {
    try {
        const cookieStore = cookies();
        const cartToken = cookieStore.get('cartToken')?.value;
        if (!cartToken) {
            throw new Error('Cart token not found');
        }

        const userCart = await prisma.cart.findFirst({
            include: {
                user: true,
                items: {
                    include: {
                        ingridients: true,
                        productItem: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
            where: {
                token: cartToken,
            }
        });

        if (!userCart) {
            throw new Error('Cart not found');
        }

        if (userCart?.totalAmount === 0) {
            throw new Error('Cart is empty')
        }
        
        const order = await prisma.order.create({
            data: {
                token: cartToken,
                fullName: `${data.firstName} ${data.lastName}`,
                email: data.email,
                address: data.address,
                phone: data.phone,
                comment: data.comment,
                totalAmount: userCart.totalAmount,
                status: OrderStatus.PENDING,
                items: JSON.stringify(userCart.items)
            }
        });

   

        await prisma.cart.update({
            where: {
            id: userCart.id,
            },
            data: {
                totalAmount: 0,
            }
        })
      
        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id,
            }
        })

        const orderLink = await fondyPayment(order.id, userCart.totalAmount);

       await sendEmail(data.email, 'Pizzeria Nick / Оплатіть замовлення №' + order.id, PayOrderTemplate({
            orderId: order.id,
            totalAmount: userCart.totalAmount,
            paymentUrl: orderLink.response.checkout_url,
            
       }))
        if (orderLink.response.response_status === 'success') {
            await prisma.order.update({
                where: {
                    id: order.id
                },
                data: {
                    paymentId: orderLink.response.payment_id
                }
            })
        }
        
      return orderLink.response.checkout_url
        
    } catch (error) {
        console.log('[CreateOrder] Server error',error)
        
    }

    
}
