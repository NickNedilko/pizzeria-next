'use client'

import {useState} from 'react';
import { cn } from '@/lib/utils';
import { IoSearchOutline } from "react-icons/io5";
import { DividerHorizontalIcon } from '@radix-ui/react-icons';

interface ISearchInputProps {
    className?: string
}

export const SearchInput: React.FC<ISearchInputProps> = ({className}) => {
    const [focused, setFocused] = useState<boolean>(false)
    
    

    return (
        <>
            {focused && <div className=' fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' onClick={()=>setFocused(false)} ></div>}
           <div className='mx-10 flex-1'>
            <div className={className}>
                <div className={cn('flex rounded-2xl justify-between relative h-12 z-30', className)}>
                    <IoSearchOutline className='absolute top-4 left-5 text-gray-500' />
                    <input
                        type='text'
                        placeholder='Пошук'
                        onFocus={()=>setFocused(true)}
                        className='rounded-2xl outline-none w-full  bg-gray-50 pl-11' />
                </div>
            </div>
        </div>
        </>
  ) ;
};


