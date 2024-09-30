'use client'

import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {  CheckoutCartPrice, CheckoutItem,  CheckoutSkeleton, Container, FormInput, Input, Textarea, Title, WhiteBlock } from '@/components';
import { useCart } from '@/hooks';
import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm } from '@/components/shared/checkout';
import { checkoutFormSchema, CheckoutFormValues } from '@/components/shared/checkout/checkout-form-schema';




interface ICheckooutPageProps {
}

const CheckooutPage: FC<ICheckooutPageProps> = (props) => {

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
 
    const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
        console.log(data)
    }

    const {totalAmount, items, onClickCountButton, deleteCartItem, loading } = useCart();

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

            <CheckoutPersonalForm />
            <CheckoutAddressForm/>
                </div>
                <div className='w-[450px]'>
                    <CheckoutCartPrice totalAmount={totalAmount}/>
                </div>
            </div>
                </form>
            </FormProvider>
        </Container>
    );
};

export default CheckooutPage;
