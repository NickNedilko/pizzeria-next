'use client'

import { FC, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {  CheckoutCartPrice, CheckoutItem,  CheckoutSkeleton, Container, FormInput, Input, Textarea, Title, WhiteBlock } from '@/components';
import { useCart } from '@/hooks';
import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm } from '@/components/shared/checkout';
import { checkoutFormSchema, CheckoutFormValues } from '@/components/shared/checkout/checkout-form-schema';
import { cn } from '@/lib/utils';
import { createOrder } from '@/app/actions';
import toast from 'react-hot-toast';
import { fondyPayment} from '@/lib/fondy-payment';




interface ICheckooutPageProps {
}

const CheckooutPage: FC<ICheckooutPageProps> = (props) => {
const [submitting, setSubmitting] = useState(false)
    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: '',
        }
    });
 
    const onSubmit: SubmitHandler<CheckoutFormValues> = async (data) => {

        try {
            setSubmitting(true);
            const url = await createOrder(data)
            toast.success('Заказ успішно оформлено! Перехід на оплату')

            if (url) {
                location.href = url;
            }
        } catch (error) {
            setSubmitting(false)
            toast.error('Не вийшло створити замовлення')
        } 
    }

    const {totalAmount, items, onClickCountButton, deleteCartItem, loading } = useCart();
     console.log(items)
    return (
        <Container className='mt-10'>
            <Title text='Оформлення замовлення' size='xl' className='font-extrabold mb-8' />
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                 <div className='flex gap-10'>
                <div className='flex flex-col gap-10 flex-1 mb-20'>
                    <CheckoutCart
                        items={items}
                        loading={loading}
                        onClickCountButton={onClickCountButton }
                        deleteCartItem={deleteCartItem}/>

                            <CheckoutPersonalForm className={true? 'opacity-40 pointer-events-none' : ''} />
                            <CheckoutAddressForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
                            
                </div>
                <div className='w-[450px]'>
                            <CheckoutCartPrice submitting={submitting} totalAmount={totalAmount} loading={loading} />
                </div>
            </div>
                </form>
            </FormProvider>
        </Container>
    );
};

export default CheckooutPage;
