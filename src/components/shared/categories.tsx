'use client'
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import * as React from 'react';

interface ICategoriesProps {
    className?: string
}

const cats = ["Піцци", "Комбо", "Закуски", "Коктейлі", "Кофе", "Напої", "Десерти",  ]

export const Categories: React.FC<ICategoriesProps> = ({className}) => {
    const categoryActiveId = useCategoryStore((state)=>state.activeId)
    return <>
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map((item, idx) => {
                return (
                    <a
                        href={`#${item}`}
                        key={idx} className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        categoryActiveId === idx +1 && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}>
                        <button >{item}</button>
                    </a>
            )
            })}
        </div>
    </>;
};


