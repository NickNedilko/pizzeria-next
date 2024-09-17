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
import toast from 'react-hot-toast';



interface IChooseProductModalProps {
    product: IProduct;
    className?: string
}

 export const ChooseProductModal: React.FC<IChooseProductModalProps> = ({className, product}) => {
     const router = useRouter();
     const firstItem = product.items[0]
     const isPizzaForm = Boolean(firstItem.pizzaType);

     const [addCartItem, loading] = useCartStore(state=>[state.addCartItem, state.loading])
     
     const onAddProduct = () => {
         addCartItem({
             productItemId: firstItem.id
         })
      }
     const onAddPizza = async (productItemId: number, ingridients: number[]) => {
        try {
             await addCartItem({
             productItemId: firstItem.id,
             ingridients
             })
            toast.success('Товар успішно додано до корзини')
            router.back();
        } catch (error) {
            console.log(error);
            toast.error('Товар не додано до корзини')
        }
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
                     loading = {loading}
                 /> :
                     <ChooseProductForm
                         className='flex'
                         name={product.name}
                         imageUrl={product.imageUrl}
                         onSubmit={onAddProduct}
                         price={firstItem.price}
                         loading = {loading}

                     />}
             </DialogContent> 
      </Dialog>
  ) ;
};


