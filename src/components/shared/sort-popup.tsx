import { cn } from '@/lib/utils';
import * as React from 'react';
import { LuArrowUpDown } from "react-icons/lu";

interface ISortPopupProps {
    className?:string
}

export const SortPopup: React.FC<ISortPopupProps> = ({className}) => {
  return (
      <div className={cn('inline-flex px-5 cursor-pointer items-center gap-1 h-[52px] rounded-2xl bg-gray-50', className)}>
          <LuArrowUpDown size={16} />
          <p>Сортування:</p>
          <p className='text-primary'>популярне</p>
    </div>
  );
};


