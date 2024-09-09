'use client'
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import * as React from 'react';

interface ICategoriesProps {
    items: Category[]
    className?: string
}



export const Categories: React.FC<ICategoriesProps> = ({items, className}) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId)
    
    return <>
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {items.map((item) => {
                return (
                    <a
                        href={`#${item.name}`}
                        key={item.id} className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        categoryActiveId === item.id +1 && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}>
                        <button >{item.name}</button>
                    </a>
            )
            })}
        </div>
    </>;
};


