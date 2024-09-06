'use client'

import * as React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { CheckboxFilterGroup } from './checkbox-filters-group';
import { useIngridients } from '@/hooks/use-Ingridients';


interface IFiltersProps {
    className?: string
}



export const Filters: React.FC<IFiltersProps> = ({ className }) => {
      const { ingridients, loading } = useIngridients();
    
    console.log(ingridients)
     const allIngridients = ingridients.map((item) => ({ value: String(item.id), text: item.name }));

    return (
        <div className={className}>
            <Title text='Фільтрація' size='sm' className='font-bold mb-5' />
            
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можна збирати' value='1' />
                <FilterCheckbox text='Новинки' value='2'/>
            </div>
            <div className='mt-6 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3 '>Ціна від і до:</p>
                <div className='flex gap-3 mb-5 '>
                    <Input type='number' placeholder='0' min={0} max={500} defaultValue={0} />
                    <Input type='number' min={100} placeholder='500' max={500}/>
                </div>

                <CheckboxFilterGroup
                    title='Інгрідієнти'
                    className='mt-5 border-y border-y-neutral-100 py-6 pb-7'
                    limit={6}
                    defaultItems={allIngridients.slice(0,6)}
                    items={allIngridients}
                    loading={loading}
                />
            </div>
        </div>
  );
};


