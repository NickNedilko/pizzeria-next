'use client'

import { Dialog } from '@/components/ui';
import { DialogContent} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';

import * as React from 'react';
import { ChooseProductForm } from '../choose-product-form';
import { IProduct } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';



interface IChooseProductModalProps {
    product: IProduct;
    className?: string
}

 export const ChooseProductModal: React.FC<IChooseProductModalProps> = ({className, product}) => {
     const router = useRouter();
     const isPizzaForm = Boolean(product.items[0].pizzaType);
     return (
         <Dialog open={Boolean(product)} onOpenChange={()=>router.back()}>
             <DialogContent className={cn('p-0 min-w-[1060px] w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
                 {isPizzaForm ? <ChoosePizzaForm className='flex' name={product.name} imageUrl={product.imageUrl} ingridients={[]}/> :
                     <ChooseProductForm className='flex' name={product.name} imageUrl={product.imageUrl}  />}
             </DialogContent> 
      </Dialog>
  ) ;
};


