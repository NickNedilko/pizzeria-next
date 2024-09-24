'use client'
import * as React from 'react';
import { FaBox, FaPercent, FaArrowRight } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { Button, CheckoutItem, CheckoutItemDetails, Container, Input, Textarea, Title, WhiteBlock } from '@/components';
import { useCart } from '@/hooks';
import { getCartItemDetails } from '@/lib';
import { PizzaSize, PizzaType } from '@/constants/pizza';
import { Skeleton } from '@/components/ui/skeleton';


interface ICheckooutPageProps {
}

const CheckooutPage: React.FunctionComponent<ICheckooutPageProps> = (props) => {

    const {totalAmount, items, onClickCountButton, deleteCartItem, loading } = useCart();

    return (
        <Container className='mt-10'>
            <Title text='Оформлення замовлення' size='xl' className='font-extrabold mb-8' />
            <div className='flex gap-10'>
                <div className='flex flex-col gap-10 flex-1 mb-20'>
                <WhiteBlock title='1. Кошик'>
                        <div className='flex flex-col gap-5'>
                            { loading ? (
                                <div >
                                  <div className="flex items-center justify-between space-x-4">
                                       <Skeleton className="h-12 w-12 rounded-full" />
                                       <div className="space-y-2">
                                         <Skeleton className="h-4 w-[350px]" />
                                         <Skeleton className="h-4 w-[200px]" />
                                    </div>
                                     <div className="space-y-2">
                                         <Skeleton className="h-8 w-[50px]" />
                                    </div>
                                    <div className="space-y-2">
                                         <Skeleton className="h-8 w-[150px]" />
                                       </div>
                                    </div>
                                      <div className="flex items-center justify-between space-x-4">
                                       <Skeleton className="h-12 w-12 rounded-full" />
                                       <div className="space-y-2">
                                         <Skeleton className="h-4 w-[350px]" />
                                         <Skeleton className="h-4 w-[200px]" />
                                    </div>
                                     <div className="space-y-2">
                                         <Skeleton className="h-8 w-[50px]" />
                                    </div>
                                    <div className="space-y-2">
                                         <Skeleton className="h-8 w-[150px]" />
                                       </div>
                                     </div>
                                </div>
                                   ) :
                                 items.map((item) => (
                                     <CheckoutItem
                                    key={item.id}
                                    details={item.pizzaSize ? getCartItemDetails(item.pizzaType as PizzaType, item.pizzaSize as PizzaSize, item.ingridients) : ''}
                                    id={item.id}
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
                    <WhiteBlock className='p-6 sticky top-4'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-xl'>Всього:</span>
                            <span className='text-[34px] font-extrabold'>300 ₴</span>
                        </div>
                        <CheckoutItemDetails title={
                            <div className='flex items-center'>
                            <FaBox size={18} className='mr-2 text-gray-400'/> Ціна на товар:
                            </div>
                        } value={totalAmount} />
                    <CheckoutItemDetails title={
                            <div className='flex items-center'>
                            <FaPercent size={18} className='mr-2 text-gray-400'/> Податки:
                            </div>
                        } value={450}/>
                    <CheckoutItemDetails title={
                            <div className='flex items-center'>
                            <TbTruckDelivery size={20} className='mr-2 text-gray-400'/> Доставка:
                            </div>
                        } value={100}
                        />
                        <Button className='w-full h-14 rounded-2xl mt-6 text-base font-bold'>
                            Сплатити
                            < FaArrowRight className='w-5 ml-2'/>
                        </Button>
                        
                    </WhiteBlock>  
                </div>
            </div>
        </Container>
    );
};

export default CheckooutPage;
