'use client'

import React, { FC, PropsWithChildren } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { Button } from '../ui';
import { CartDrawerItem } from './cart-drawer-item';


interface Props {
    className?: string;
}

export const CartDrawer:FC<PropsWithChildren<Props>> = ({children, className}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className='flex flex-col w-full justify-between pb-0 bg-[#F4F1EE]'>
                <SheetHeader>
                    <SheetTitle>В кошику <span className='font-bold'>3 товара</span></SheetTitle>
                </SheetHeader>
                <div className='-mx-6 mt-5 overflow-auto flex-1'>
                    <div className='mb-2'>
                        <CartDrawerItem
                        details={'цыпля'}
                        id={0}
                        imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}
                        name={'пицца'}
                        price={10}
                        quantity={30} />
                    </div>
                   <div className='mb-2'>
                        <CartDrawerItem
                        details={'цыпля'}
                        id={0}
                        imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}
                        name={'пицца'}
                        price={10}
                        quantity={30} />
                    </div>
                    <div className='mb-2'>
                        <CartDrawerItem
                        details={'цыпля'}
                        id={0}
                        imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}
                        name={'пицца'}
                        price={10}
                        quantity={30} />
                    </div>
                    <div className='mb-2'>
                        <CartDrawerItem
                        details={'цыпля'}
                        id={0}
                        imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}
                        name={'пицца'}
                        price={10}
                        quantity={30} />
                    </div>
                    <div className='mb-2'>
                        <CartDrawerItem
                        details={'цыпля'}
                        id={0}
                        imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}
                        name={'пицца'}
                        price={10}
                        quantity={30} />
                    </div>
                </div>
                <SheetFooter className='-mx-6 bg-white p-8'>
                    <div className='w-full'>
                        <div className='flex mb-4'>
                            <span className='flex flex-1 text-lg text-neutral-500'>
                                Ітого
                                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'/>
                            </span>
                            <span className='font-bold text-lg'>567 ₴</span>
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
