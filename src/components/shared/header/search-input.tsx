'use client'

import {useState} from 'react';
import { cn } from '@/lib/utils';
import { IoSearchOutline } from "react-icons/io5";
import { DividerHorizontalIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { useDebounce } from 'react-use';

interface ISearchInputProps {
    className?: string
}

export const SearchInput: React.FC<ISearchInputProps> = ({className}) => {
    const [focused, setFocused] = useState<boolean>(false)
    const [query, setQuery] = useState<string>('');
    const [searchProducts, setSearchProducts] = useState<Product[]>([]);


    useDebounce(async () => {
        try {
            const products = await Api.products.search(query)
              setSearchProducts(products)
        } catch (error) {
            console.log(error)
        }
        }
        
    , 250,
        [query]);
    
    const onClickItem = () => {
        setFocused(false);
        setQuery('');
        setSearchProducts([])
    }

    return (
        <>
            {focused && <div className=' fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' onClick={()=>setFocused(false)} ></div>}
           <div className='mx-10 flex-1'>
            <div className={className}>
                <div className={cn('flex rounded-2xl justify-between relative h-11 z-30', className)}>
                    <IoSearchOutline className='absolute top-4 left-5 text-gray-500' />
                    <input
                        type='text'
                        placeholder='Пошук'
                        value={query}
                        className='rounded-2xl outline-none w-full  bg-gray-50 pl-11'
                        onFocus={()=>setFocused(true)}
                        onChange={(e)=>setQuery(e.target.value)}
                        /> 
                        <div className={cn('absolute w-full bg-white rounded-xl py2 top-13 shadow-md transition-all duration-200 invisible z-30 opacity-0',
                            focused &&  'visible opacity-100 top-12' 
                        )}>
                           {searchProducts?.map(product => (
                               <Link
                                   onClick={onClickItem}
                                   key={product.id}
                                   href={`/product/${product.id}`}
                                   className='flex gap-2 items-center w-full px-3 py-2 hover:bg-primary/20'>
                                <img className='rounded-sm h-8 w-8 ' src={product.imageUrl} alt={product.name} />
                                <span>{product.name}</span>
                            </Link>
                            )   
                           )}
                        </div>
                </div>
            </div>
        </div>
        </>
  ) ;
};


