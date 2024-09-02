'use client'
import { useState} from 'react';
import { FilterCheckbox, IFilterCheckboxProps } from './filter-checkbox';
import { Button, Input } from '../ui';


type Item = IFilterCheckboxProps;

interface ICheckboxFilterGroupProps {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[]
    className?: string;

}

export const CheckboxFilterGroup: React.FC<ICheckboxFilterGroupProps> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Пошук...',
    className,
    onChange,
    defaultValue
}) => {

    const [showAll, setshowAll] = useState<boolean>(false);

    const [searchVAlue, setSearchValue] = useState<string>('');

//   console.log(searchVAlue)
   const handleSearch = (value:string) => setSearchValue(value)
    
    const itemList = showAll? items: defaultItems?.slice(0, limit)

    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>

           {showAll &&  <div className='mb-5'>
                <Input onChange={(e)=>handleSearch(e.target.value)} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
            </div>}

            <div className='flex flex-col gap-4 max-h-96 overflow-auto scrollbar'>
                {itemList.map((item, idx) => (
                    <FilterCheckbox 
                        key={idx}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(idx)=>console.log(idx)}
                    />  
                ))}
                 {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setshowAll(!showAll)} className='text-primary mt-4'>
                        {showAll ? 'Скрити' : '+ Показати всі'}
                    </button>
                </div>
            ) }
            </div>
           
      </div>
  ) ;
};


