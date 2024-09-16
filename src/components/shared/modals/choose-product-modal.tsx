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
import { useCartStore } from '@/store/cart';



interface IChooseProductModalProps {
    product: IProduct;
    className?: string
}

 export const ChooseProductModal: React.FC<IChooseProductModalProps> = ({className, product}) => {
     const router = useRouter();
     const firstItem = product.items[0]
     const isPizzaForm = Boolean(firstItem.pizzaType);

     const addCartItem = useCartStore(state=>state.addCartItem)
     
     const onAddProduct = () => {
         addCartItem({
             productItemId: firstItem.id
         })
      }
     const onAddPizza = (productItemId: number, ingridients: number[]) => {
         addCartItem({
             productItemId: firstItem.id,
             ingridients
         })
      }

     

     return (
         <Dialog open={Boolean(product)} onOpenChange={()=>router.back()}>
             <DialogContent className={cn('p-0 min-w-[1060px] w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
                 {isPizzaForm ? <ChoosePizzaForm
                     className='flex'
                     name={product.name}
                     imageUrl={product.imageUrl}
                     items={product.items}
                     ingridients={product.ingridients}
                    onSubmit={onAddPizza}
                 /> :
                     <ChooseProductForm
                         className='flex'
                         name={product.name}
                         imageUrl={product.imageUrl}
                         onSubmit={onAddProduct}
                         price={firstItem.price}
                     />}
             </DialogContent> 
      </Dialog>
  ) ;
};


