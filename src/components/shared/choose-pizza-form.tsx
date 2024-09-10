'use client'

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { Title } from './title';
import { PizzaImage} from './pizza-image';

interface IChoosePizzaFormProps {
    imageUrl: string;
    name: string;
    className?: string;
    ingridients: any[];
    items?: any[];
    onClickAdd?: () => void;
}

export const ChoosePizzaForm: React.FC<IChoosePizzaFormProps> = ({name, imageUrl, ingridients, items, onClickAdd, className}) => {
    const textDetails = '30 см, традицыйне тысто 30'
    const totalPrice = 275;
    


    return (
        <div className={cn('flex, flex-1', className)}>
            
            <PizzaImage imageUrl={imageUrl} name={name} size={20} />
    
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

