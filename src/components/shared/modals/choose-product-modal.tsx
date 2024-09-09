'use client'

import { Dialog } from '@/components/ui';
import { DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';

import * as React from 'react';


interface IChooseProductModalProps {
    product: Product
    className?: string
}

 export const ChooseProductModal: React.FC<IChooseProductModalProps> = ({className, product}) => {
     const router = useRouter();
    
     return (
         <Dialog open={Boolean(product)} onOpenChange={()=>router.back()}>
             <DialogContent className={cn('p-0 w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
                 <DialogTitle>{product.name }</DialogTitle>
             </DialogContent>
      </Dialog>
  ) ;
};


