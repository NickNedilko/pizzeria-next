'use client'
import { Dialog } from '@/components/ui';
import { DialogContent} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { IProduct } from '@/@types/prisma';
import { ProductForm } from '../product-form';



interface IChooseProductModalProps {
    product: IProduct;
    className?: string
}

 export const ChooseProductModal: React.FC<IChooseProductModalProps> = ({className, product}) => {
     const router = useRouter();
     return (
         <Dialog open={Boolean(product)} onOpenChange={()=>router.back()}>
             <DialogContent className={cn('p-0 min-w-[1060px] w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
                 <ProductForm product={product} onSubmit={()=>router.back()}/>
             </DialogContent> 
      </Dialog>
  ) ;
};


