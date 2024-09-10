import { cn } from '@/lib/utils'; 
import { IoCheckmark } from "react-icons/io5";
import { FC } from 'react'

interface IProductIngridientProps {
    imageUrl: string;
    name: string;
    price: number;
    active?: boolean;
    className?: string;
    onClick?: () => void;
}

export const ProductIngridient:FC<IProductIngridientProps> = ({imageUrl, name, price, active, onClick, className }) => {
    return (
        <div className={cn('flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white', {
            'border border-primary': active
        }, className)}
        onClick={onClick}
        >
            {active && <IoCheckmark className='absolute top-2 right-2 text-primary' />}
            <img width={110} height={110} src={imageUrl} alt={name} />
            <span className='text-xs mb-1'>{name}</span>
            <span className='font-bold'>{price} ₴</span>
        </div>
    )
}
