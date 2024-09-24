'use client'

import { FC } from 'react';
import {  CheckoutCartPrice, CheckoutItem, CheckoutItemDetails, CheckoutSkeleton, Container, Input, Textarea, Title, WhiteBlock } from '@/components';
import { useCart } from '@/hooks';
import { getCartItemDetails } from '@/lib';
import { PizzaSize, PizzaType } from '@/constants/pizza';



interface ICheckooutPageProps {
}

const CheckooutPage: FC<ICheckooutPageProps> = (props) => {

    const {totalAmount, items, onClickCountButton, deleteCartItem, loading } = useCart();

    return (
        <Container className='mt-10'>
            <Title text='Оформлення замовлення' size='xl' className='font-extrabold mb-8' />
            <div className='flex gap-10'>
                <div className='flex flex-col gap-10 flex-1 mb-20'>
                <WhiteBlock title='1. Кошик'>
                        <div className='flex flex-col gap-5'>
                            { loading && !items?.length ? (
                                    <CheckoutSkeleton/>
                                   ) :
                                 items.map((item) => (
                                     <CheckoutItem
                                    key={item.id}
                                    details={item.pizzaSize ? getCartItemDetails(item.pizzaType as PizzaType, item.pizzaSize as PizzaSize, item.ingridients) : ''}
                                         id={item.id}
                                         disabled = {item.disabled}
                                    imageUrl={item.imageUrl}
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    onClickCountButton={(type)=>onClickCountButton(item.id, item.quantity, type)}
                                    onClickDelete={()=>deleteCartItem(item.id)}
                                />
                            ))} 
                        </div>
                </WhiteBlock>

            <WhiteBlock title='2. Персональні данні'>
                <div className='grid grid-cols-2 gap-5'>
                <Input name='firstName' className='text-base' placeholder="Ім'я" />
                <Input name='lasttName' className='text-base' placeholder="Фамілія"/>
                <Input name='email' className='text-base' placeholder="E-mail"/>
                <Input name='phone' className='text-base' placeholder="Телефон"/>
                </div>
                    </WhiteBlock>
                    
                    <WhiteBlock title='3. Адреса доставки'>
                <div className='flex flex-col gap-5'>
                <Input name='adress' className='text-base' placeholder="Адреса доставки" />
                            <Textarea
                                placeholder='Комментар до замовлення'
                                className='text-base'
                            rows={5}
                            />
                </div>
            </WhiteBlock>
    
                </div>
                <div className='w-[450px]'>
                    <CheckoutCartPrice totalAmount={totalAmount}/>
                </div>
            </div>
        </Container>
    );
};

export default CheckooutPage;
