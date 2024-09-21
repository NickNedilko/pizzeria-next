'use client'

import React, { FC } from 'react'
import { ChooseProductForm } from './choose-product-form'
import { ChoosePizzaForm } from './choose-pizza-form'
import { IProduct } from '@/@types/prisma'
import { useCartStore } from '@/store/cart'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface Props {
    product: IProduct,
    onSubmit?: VoidFunction;
}

export const ProductForm: FC<Props> = ({ product, onSubmit }) => {
   
const [addCartItem, loading] = useCartStore(state=>[state.addCartItem, state.loading])
     const firstItem = product.items[0];
     const isPizzaForm = Boolean(firstItem.pizzaType);

      const onAddProduct = async () => {
        try {
             addCartItem({
             productItemId: firstItem.id
             })
             toast.success('Товар успішно додано до корзини')
            onSubmit?.();
        } catch (error) {
            console.log(error);
            toast.error('Товар не додано до корзини')
        }
      }
     const onAddPizza = async (productItemId: number, ingridients: number[]) => {
        try {
             await addCartItem({
             productItemId: firstItem.id,
             ingridients
             })
            toast.success('Товар успішно додано до корзини')
            onSubmit?.();
        } catch (error) {
            console.log(error);
            toast.error('Товар не додано до корзини')
        }
      }
    return (
        <div>
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
        </div>
    )
}
