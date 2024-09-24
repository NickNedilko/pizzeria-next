'use client'

import React, { FC, PropsWithChildren, useEffect } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { Button } from '../ui';
import { CartDrawerItem } from './cart-drawer-item';
import { getCartItemDetails } from '@/lib';
import { PizzaSize, PizzaType } from '@/constants/pizza';
import Image from 'next/image';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks';
import { useRouter } from 'next/navigation';


interface Props {
    className?: string;
}

export const CartDrawer: FC<PropsWithChildren<Props>> = ({ children, className }) => {
    
    const {totalAmount,  items, onClickCountButton, deleteCartItem } = useCart();
    const router = useRouter();
 
    
    
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className='flex flex-col w-full justify-between pb-0 bg-[#F4F1EE]'>
                <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
                        {totalAmount > 0 && (
                    <SheetHeader>
                    <SheetTitle>В кошику <span className='font-bold'>3 товара</span></SheetTitle>
                </SheetHeader>
                )}
                
                {!(totalAmount > 0) && (
                    <div className='flex flex-col items-center justify-center w-72 mx-auto'>
                        <Image src='/cart.png' alt='Empty cart' width={250} height={250} />
                      <Title text='Корзина порожня' size='sm' className='text-center font-bold my-2' /> 
                        <p className='text-center text-neutral-500 mb-5'>
                            Додайте якийсь товар до корзини
                            </p>
                            <SheetClose>
                        <Button className='w-56 h-12 text-base' size='lg'>
                            Повернутись назад
                        </Button>
                    </SheetClose>
                        </div>
                        
                    )}
                    
                <div className='-mx-6 mt-5 overflow-auto flex-1'>
                    <div className='mb-2'>
                        {items.map((item) => (
                            <CartDrawerItem className='mb-2' key={item.id}
                            id={item.id}
                            imageUrl={item.imageUrl}
                            details={item.pizzaSize ? getCartItemDetails(item.pizzaType as PizzaType, item.pizzaSize as PizzaSize, item.ingridients) : ''}
                            name={item.name}
                                price={item.price}
                                disabled={item.disabled}
                                quantity={item.quantity}
                                onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                                onClickDelete={()=>deleteCartItem(item.id)}
                            />
                        ))}
                    </div>
                   </div>
                       
                {totalAmount > 0 && (
                     <SheetFooter className='-mx-6 bg-white p-8'>
                    <div className='w-full'>
                        <div className='flex mb-4'>
                            <span className='flex flex-1 text-lg text-neutral-500'>
                                Ітого
                                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'/>
                            </span>
                            <span className='font-bold text-lg'>{totalAmount} ₴</span>
                        </div>
                        <Link href='/cart'>
                                    <Button
                                        onClick={() => router.push('/checkout')}
                            type='submit'
                            className='w-full h-12 text-base'>
                            Оформити замовлення
                            <IoIosArrowRoundForward className='w-5 ml-2'/>
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>
               )}
            </div>
            </SheetContent>
        </Sheet>
    )
}
