'use client'

import { cn } from '@/lib/utils';
import * as React from 'react';

export type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
}

interface IGroupVariantsProps {
    items: readonly Variant[];
    onChange?: (value: Variant['value']) => void;
    value?: Variant['value'];
    className?: string;
}

export const GroupVariants: React.FC<IGroupVariantsProps> = ({items, onChange, value, className}) => {
    return (
        <div className={cn('flex justify-between bg-[#F3F3F3] rounded-3xl p-1 select-none ', className)}>
            {items.map(item => (
                <button key={item.name}
                    className={cn('flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
                        {
                            'bg-white shadow': item.value === value,
                            'text-gray-500 opacity-50 pointer-events-none' : item.disabled
                      }   
                    )}        
                    onClick={() => onChange?.(item.value)}> 
                    {item.name}
                </button>
            
            ))}
      </div>
  ) ;
};


