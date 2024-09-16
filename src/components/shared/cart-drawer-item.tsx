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

export const CartDrawerItem: FC<Props> = ({
    id,
    imageUrl,
    name,
    price,
    quantity,
    details,
    onClickCountButton,
    onClickDelete,
    className }) => {
    console.log(quantity)
    return (
        <div className={cn('flex bg-white p-5 gap-6', className)}>
            <CartItemDetailsImage src={imageUrl} />
            <div className='flex-1'>
                <CartItemInfo details={details} name={name} />
                <hr className='my-3' />
                <div className='flex items-center justify-between'>
                    <CountButton onClick={onClickCountButton} value={quantity}/>
                    <div className='flex items-center gap-4'>
                        <CartItemDetailsPrice price={price} />
                        <RiDeleteBin6Line
                            onClick={onClickDelete}
                            size={16}
                            className='text-gray-400 cursor-pointer hover:text-gray-600'
                        />
                </div>
                </div>
            </div>
        </div>
    )
}
