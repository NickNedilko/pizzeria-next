import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { Title } from './title';

interface IChooseProductFormProps {
    imageUrl: string;
    name: string;
    className?: string;
    ingridients: any[];
    items?: any[];
    onClickAdd?: () => void;
}

export const ChooseProductForm: React.FC<IChooseProductFormProps> = ({name, imageUrl, ingridients, items, onClickAdd, className}) => {
    const textDetails = '30 см, традицыйне тысто 30'
    const totalPrice = 275;
    
    return (
        <div className={cn('flex, flex-1', className)}>
            <div className='flex items-center justify-center flex-1 ralative w-full'>
                <img src={imageUrl} alt={name}
                className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
                />
      </div>
    
            <div className='w-[490px]  bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold m-1' />
                <p className='text-gray-400'>{textDetails}</p>
                <Button
                    className='h-[55px] px-10 text-base rounded-[18px] w-full'>
                    Додати до корзини за {totalPrice} ₴
                </Button>
            </div>
        </div>

  ) ;
};


