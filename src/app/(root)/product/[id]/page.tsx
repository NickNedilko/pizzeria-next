import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import * as React from 'react';
import { prisma } from '../../../../../prisma/prisma-client';
import { Container, GroupVariants, PizzaImage, Title } from '@/components';
import { notFound } from 'next/navigation';

interface IProductPageProps {
    params: Params
}

const ProductPage: React.FC<IProductPageProps> = async ({ params }) => {
    const id = params.id

    const product = await prisma.product.findFirst({
        where:{id: Number(id)}
    })
    if (!product) {
        return notFound()
    }

    return (
        <Container className='flex flex-col my-10'>
            <div className='flex flex-1'>
                <PizzaImage imageUrl={product.imageUrl} name={product.name} size={40} />
                <div className='w-[490px] bg-[#FCFCFC] p-7'>
                    <Title text={product.name} size='md' className='font-extrabold mb-1' />
                    <p className='text-gray-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat, voluptate necessitatibus, esse iusto provident deserunt vel architecto numquam ipsam cupiditate vero nesciunt, sint ab accusantium. Itaque sunt ipsum molestias.</p>
                    <GroupVariants
                        value='2'
                        items={[
                        {
                            name: 'Маленька',
                            value: '1'
                        },
                         {
                            name: 'Середня',
                            value: '1'
                        },
                          {
                            name: 'Велика',
                              value: '1',
                            disabled: true
                        }
                    ] } />
                </div>            
            </div>
        </Container>
  );
};

export default ProductPage;
