

import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import * as React from 'react';
import { prisma } from '../../../../../prisma/prisma-client';
import { ChoosePizzaForm, ChooseProductForm, Container, GroupVariants, PizzaImage, Title } from '@/components';
import { notFound } from 'next/navigation';
import { useCartStore } from '@/store/cart';
import toast from 'react-hot-toast';
import { ProductForm } from '@/components/shared/product-form';

interface IProductPageProps {
    params: Params
}

const ProductPage: React.FC<IProductPageProps> = async ({ params }) => {
    const id = params.id;
   

    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
        include: {
            ingridients: true,
            category: {
                include: {
                    products: {
                        include: {
                            items: true,
                        }
                    }
                }
            },
            items: true,
            
        }
    })
    if (!product) {
        return notFound()
    }

   
    return (
        <Container className='flex flex-col my-10'>
             <ProductForm product={product}/>
        </Container>
  );
};

export default ProductPage;
