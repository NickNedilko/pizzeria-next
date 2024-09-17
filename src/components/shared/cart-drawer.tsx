'use client'

import React, { FC, PropsWithChildren, useEffect } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { Button } from '../ui';
import { CartDrawerItem } from './cart-drawer-item';
import { useCartStore } from '@/store/cart';
import { getCartItemDetails } from '@/lib';
import { PizzaSize, PizzaType } from '@/constants/pizza';


interface Props {
    className?: string;
}

export const CartDrawer: FC<PropsWithChildren<Props>> = ({ children, className }) => {
    const [totalAmount, fetchCartItems,  items, updateItemQuantity, deleteCartItem] = useCartStore(state =>
        [state.totalAmount, state.fetchCartItems, state.items, state.updateItemQuantity, state.deleteCartItem]);
 
    useEffect(() => {
        fetchCartItems();

    }, [fetchCartItems])
    
   const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
    
    
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className='flex flex-col w-full justify-between pb-0 bg-[#F4F1EE]'>
                <SheetHeader>
                    <SheetTitle>В кошику <span className='font-bold'>3 товара</span></SheetTitle>
                </SheetHeader>
                <div className='-mx-6 mt-5 overflow-auto flex-1'>
                    <div className='mb-2'>
                        {items.map((item) => (
                            <CartDrawerItem className='mb-2' key={item.id}
                            id={item.id}
                            imageUrl={item.imageUrl}
                            details={item.pizzaSize ? getCartItemDetails(item.pizzaType as PizzaType, item.pizzaSize as PizzaSize, item.ingridients) : ''}
                        name={item.name}
                        price={item.price}
                                quantity={item.quantity}
                                onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                                onClickDelete={()=>deleteCartItem(item.id)}
                            />
                        ))}
                    </div>
                   </div>
                       
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
                            type='submit'
                            className='w-full h-12 text-base'>
                            Оформити замовлення
                            <IoIosArrowRoundForward className='w-5 ml-2'/>
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
