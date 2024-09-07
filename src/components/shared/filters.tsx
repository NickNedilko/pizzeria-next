'use client'

import {useState} from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { CheckboxFilterGroup } from './checkbox-filters-group';
import { useIngridients } from '@/hooks/use-Ingridients';
import { useSet } from 'react-use';


interface IFiltersProps {
    className?: string
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}


export const Filters: React.FC<IFiltersProps> = ({ className }) => {
      const { ingridients, loading, onAddId, selectedIds } = useIngridients();
      const [prices, setPrice] = useState<PriceProps>({priceFrom:0, priceTo:500})  

    const [sizes, { toggle: toggleSizes }] = useSet<string>(new Set([]));
    const [types, { toggle: toggleTypes }] = useSet<string>(new Set([]));

    
    
     const allIngridients = ingridients.map((item) => ({ value: String(item.id), text: item.name }));

     
    
    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]:value
         })
     }      
    return (
        <div className={className}>
            <Title text='Фільтрація' size='sm' className='font-bold mb-5' />
              <CheckboxFilterGroup
                    title='Тип тіста'
                    name='type'
                    className='mb-5'
                onClickCheckbox={toggleTypes}
                selectedIds={types}
                items={[
                    {text: 'Тонке', value: "1" },
                    {text:'Товсте', value: "2"}
            ]}  
             />  

            <CheckboxFilterGroup
                    title='Розміри'
                    name='sizes'
                    className='mb-5'
                onClickCheckbox={toggleSizes}
                selectedIds={sizes}
                items={[
                { text: "20 см", value: "20" },
                {text: "30 см", value: "30"},
                {text: "40 см", value: "40"},
            ]}  
             />       
            <div className='mt-6 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3 '>Ціна від і до:</p>
                <div className='flex gap-3 mb-5 '>
                    <Input
                        type='number'
                        placeholder='0'
                        min={0}
                        max={500}
                        value={String(prices.priceFrom)}
                    onChange={(e)=>updatePrice('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type='number'
                        min={100}
                        placeholder='500'
                        max={500}
                        value={String(prices.priceTo)}
                        onChange={(e)=>updatePrice('priceTo', Number(e.target.value))}
                    />
                </div>

                <CheckboxFilterGroup
                    title='Інгрідієнти'
                    name='ingridients'
                    className='mt-5 border-y border-y-neutral-100 py-6 pb-7'
                    limit={6}
                    defaultItems={allIngridients.slice(0,6)}
                    items={allIngridients}
                    loading={loading}
                    onClickCheckbox={onAddId}
                    selectedIds={selectedIds}
                />
            </div>
        </div>
  );
};


