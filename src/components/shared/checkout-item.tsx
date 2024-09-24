'use client'
import { cn } from '@/lib/utils';
import React, { FC } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartItemDetailsImage } from './cart-item-details/cart-item-details-image';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { CartItemInfo } from './cart-item-details/cart-item-info';
import { CountButton } from './count-button';
import { CartItemDetailsPrice } from './cart-item-details/cart-item-details-price';

interface Props extends CartItemProps {
    details: string;
    onClickCountButton?: (type: 'plus' | 'minus') => void;
    onClickDelete?: () => void;
    className?: string;
    
}

export const CheckoutItem: FC<Props> = ({
    imageUrl,
    name,
    price,
    quantity,
    details,
    onClickCountButton,
    onClickDelete,
     }) => {
    
    return ( 
    
        <div className={cn('flex items-center justify-between')}>
            <div className='flex items-center gap-5 flex-1'>
                <CartItemDetailsImage src={imageUrl} />
            <CartItemInfo details={details} name={name} />
         </div>
            <CartItemDetailsPrice price={price} />

                <div className='flex items-center gap-5 ml-20'>
                <CountButton
                    onClick={onClickCountButton}
                     value={quantity} />
                    <div className='flex items-center gap-4'>
                        <RiDeleteBin6Line
                            onClick={onClickDelete}
                            size={16}
                            className='text-gray-400 cursor-pointer hover:text-gray-600'
                        />
                </div>
            </div>
        </div>
    )
}
