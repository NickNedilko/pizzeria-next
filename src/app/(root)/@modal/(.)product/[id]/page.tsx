
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import * as React from 'react';
import { prisma } from '../../../../../../prisma/prisma-client';
import { Container } from 'postcss';
import { ChooseProductModal } from '@/components';
import { notFound } from 'next/navigation';
// import { prisma } from '../../../../../prisma/prisma-client';
// import { Container, GroupVariants, ProductImage, Title } from '@/components';
// import { notFound } from 'next/navigation';

interface IProductModalPageProps {
    params: Params;
}

const ProductModalPage: React.FC<IProductModalPageProps> = async ({ params }) => {
    const product = await prisma.product.findFirst({
        where: {
           id: Number(params.id),
        },
        include: {
            ingridients: true,
            items: true,
        },
   })

    if (!product) {
        return notFound();
    }
    
    return (
        <ChooseProductModal product={product}/>
       
        
  );
};

export default ProductModalPage;
