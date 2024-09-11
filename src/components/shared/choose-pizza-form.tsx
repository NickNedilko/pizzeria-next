'use client'

import {useEffect, useState} from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { Title } from './title';
import { PizzaImage} from './pizza-image';
import { GroupVariants } from './group-variants';
import { mapPizzaType, PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from '@/constants/pizza';
import { Ingridient, ProductItem } from '@prisma/client';
import { ProductIngridient } from './product-ingridient';
import { useSet } from 'react-use';


interface IChoosePizzaFormProps {
    imageUrl: string;
    name: string;
    className?: string;
    ingridients: Ingridient[];
    items: ProductItem[];
    onClickAddCart?: () => void;
}

export const ChoosePizzaForm: React.FC<IChoosePizzaFormProps> = ({name, imageUrl, ingridients, items, onClickAddCart, className}) => {
    const [type, setType] = useState<PizzaType>(1);
    const [size, setSize] = useState<PizzaSize>(20);
    
    const [selectedIngridient, {toggle: addIngridient}] = useSet(new Set<number>([]))
    
    const pizzaPrice = items.find(item => item.pizzaType === type && item.size === size)?.price || 0 
    const ingridientsPrice = ingridients
        .filter((ingridient )=> selectedIngridient.has(ingridient.id))
        .reduce((acc, ingridient)=>acc+ingridient.price, 0)    

    const totalPrice = pizzaPrice+ ingridientsPrice;
    const textDetails = `${size} см, ${(mapPizzaType[type]).toLocaleLowerCase()} тісто`
    
    const handleClickAdd = () => {
        onClickAddCart?.();
        console.log({
            size,
            type,
            ingridients: selectedIngridient
        });
    }

    const availablePizzas = items.filter((item) => item.pizzaType === type);

    const availablePizzaSizes = pizzaSizes.map((item) => ({
        name: item.name,
        value: item.value,
        disabled: !availablePizzas.some((pizza)=> Number(pizza.size)===Number(item.value))
    }))

    useEffect(() => {
        const isAvailableSize = availablePizzaSizes?.find(
            (item)=>Number(item.value) === size && !item.disabled
        )
        
        const availableSize = availablePizzaSizes?.find(item => !item.disabled)
        
        if (isAvailableSize && availableSize) {
        setSize(Number(availableSize.value) as PizzaSize)
    }
    }, [type])

    return (
        <div className={cn('flex, flex-1', className)}>
            
            <PizzaImage imageUrl={imageUrl} name={name} size={size}  />
    
            <div className='w-[490px]  bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold m-1' />
                <p className='text-gray-400'>{textDetails}</p>

                <div className='flex flex-col gap-4 mt-5'>
                     <GroupVariants items={availablePizzaSizes} value={String(size) }
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
                onClick={handleClickAdd}
                    className='h-[55px] px-10  mt-5 text-base rounded-[18px] w-full'>
                    Додати до корзини за {totalPrice} ₴
                </Button>
            </div>
        </div>

  ) ;
};

