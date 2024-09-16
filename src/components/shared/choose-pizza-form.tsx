'use client'


import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { Title } from './title';
import { PizzaImage} from './pizza-image';
import { GroupVariants } from './group-variants';
import { mapPizzaType, PizzaSize, PizzaType, pizzaTypes } from '@/constants/pizza';
import { Ingridient, ProductItem } from '@prisma/client';
import { ProductIngridient } from './product-ingridient';
import { CalcTotalPizzaPrice} from '@/lib';
import { usePizzaOptions } from '@/hooks';


interface IChoosePizzaFormProps {
    imageUrl: string;
    name: string;
    className?: string;
    ingridients: Ingridient[];
    items: ProductItem[];
    onSubmit: (itemId: number, ingridients: number[]) => void;

}

export const ChoosePizzaForm: React.FC<IChoosePizzaFormProps> = ({
    name,
    imageUrl,
    ingridients,
    items,
    onSubmit,
    className }) => {
    
    const { size, type, setSize, setType, availableSizes, selectedIngridients, addIngridient, currentItemId } = usePizzaOptions(items);
    const totalPrice = CalcTotalPizzaPrice(items, ingridients, type, size, selectedIngridients);
    const textDetails = `${size} см, ${(mapPizzaType[type]).toLocaleLowerCase()} тісто`;
    const handleClickAdd = () => {
        if (currentItemId) {
        onSubmit(currentItemId, Array.from(selectedIngridients));
        }
      
    }

 

   

    return (
        <div className={cn('flex, flex-1', className)}>
            
            <PizzaImage imageUrl={imageUrl} name={name} size={size}  />
    
            <div className='w-[490px]  bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold m-1' />
                <p className='text-gray-400'>{textDetails}</p>

                <div className='flex flex-col gap-4 mt-5'>
                     <GroupVariants items={availableSizes} value={String(size) }
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
                               active={selectedIngridients.has(ingridient.id)}
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

