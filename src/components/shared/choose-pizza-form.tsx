'use client'

import {useState} from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { Title } from './title';
import { PizzaImage} from './pizza-image';
import { GroupVariants } from './group-variants';
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from '@/constants/pizza';
import { Ingridient } from '@prisma/client';
import { ProductIngridient } from './product-ingridient';
import { useSet } from 'react-use';


interface IChoosePizzaFormProps {
    imageUrl: string;
    name: string;
    className?: string;
    ingridients: Ingridient[];
    items?: any[];
    onClickAdd?: () => void;
}

export const ChoosePizzaForm: React.FC<IChoosePizzaFormProps> = ({name, imageUrl, ingridients, items, onClickAdd, className}) => {
    const textDetails = '30 см, традиційне тісто 30'
    const totalPrice = 275;
    const [size, setSize] = useState<PizzaSize>(20);
    const [type, setType] = useState<PizzaType>(1);

   const [selectedIngridient, {toggle: addIngridient}] = useSet(new Set<number>([]))

    return (
        <div className={cn('flex, flex-1', className)}>
            
            <PizzaImage imageUrl={imageUrl} name={name} size={size}  />
    
            <div className='w-[490px]  bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold m-1' />
                <p className='text-gray-400'>{textDetails}</p>

                <div className='flex flex-col gap-4 mt-5'>
                     <GroupVariants items={pizzaSizes} value={String(size) }
                    onChange={(value) => setSize(Number(value) as PizzaSize)} />
                <GroupVariants items={pizzaTypes} value={String(type)}
                    onChange={(value) => setType(Number(value) as PizzaType)} />
                </div>
             
                <div className='bg-gray-50 mt-5 p-5 rounded-md h-[420px] overflow-auto scrollbar'>
                     <div className='grid grid-cols-3 gap-3'>
                       {ingridients.map(ingridient => (
                           <ProductIngridient
                               key={ingridient.id}
                               imageUrl={ingridient.imageUrl}
                               name={ingridient.name}
                               price={ingridient.price}
                               onClick={()=>addIngridient(ingridient.id)}
                               active={selectedIngridient.has(ingridient.id)}
                           />
                ))}
                </div> 
               </div>
                <Button
                    className='h-[55px] px-10  mt-5 text-base rounded-[18px] w-full'>
                    Додати до корзини за {totalPrice} ₴
                </Button>
            </div>
        </div>

  ) ;
};

