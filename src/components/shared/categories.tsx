import { cn } from '@/lib/utils';
import { Span } from 'next/dist/trace';
import * as React from 'react';

interface ICategoriesProps {
    className?: string
}

const cats = ["Піцци", "Комбо", "Закуски", "Коктейлі", "Кофе", "Напої", "Десерти",  ]
const activeIdx = 0
export const Categories: React.FC<ICategoriesProps> = ({className}) => {
    return <>
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map((item, idx) => {
                return (
                <a key={idx} className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeIdx === idx && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}>
                        <button >{item}</button>
                    </a>
            )
            })}
        </div>
    </>;
};


