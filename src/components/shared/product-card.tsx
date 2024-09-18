
import Link from 'next/link';
import * as React from 'react';
import { GoPlus } from "react-icons/go";
import { Title } from './title';
import { Button } from '../ui';
import { IProduct } from '@/@types/prisma';
import { Ingridient } from '@prisma/client';

interface IProductCardProps {
    id: number;
    name: string;
    price: number;
    ingridients: Ingridient[];
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<IProductCardProps> = ({id, name, price, ingridients, imageUrl, className}) => {
   
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className='flex justify-center px-9 py-6 bg-secondary rounded-lg h-[260px]'>
                    <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />
                </div>
                <Title text={name} size='sm' className='mv-1 mt-3 font-bold' />

                <p className='text-sm text-gray-400'>
                {ingridients.map((ingridient)=>ingridient.name).join(', ')}
                </p>
                <div className='flex justify-between items-center mt-4'>
                    <span className='text-[20px]'>
                        від <b>{price} ₴ </b>
                    </span>

                    <Button variant='secondary' className='text-base font-bolt' >
                        <GoPlus size={12} className='mr-1' />
                        Додати
                    </Button>
                </div>
            </Link> 
      </div>
  ) ;
};


