'use client'

import {useEffect, useRef} from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/category';
import { IProduct } from '@/@types/prisma';

interface IProductsGroupListProps {
    title: string;
    products: IProduct[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<IProductsGroupListProps> = ({ title, products, className, listClassName, categoryId }) => {
    const setActiveId = useCategoryStore((state)=>state.setActiveId)
    
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveId(categoryId);
    }
    }, [intersection?.isIntersecting, title, categoryId, setActiveId])

   
    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className='font-extrabold mb-5'/> 
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                        ingridients={product.ingridients}
                    />
                ))}
          </div>
        </div>
  ) ;
};


