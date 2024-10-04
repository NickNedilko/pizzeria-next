'use server';

import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";
import { prisma } from "../../prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";

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
    } catch (error) {
        // re_MLyVrSuF_8pFAxELYYeq8miJiv54yVWYX
    }
}
