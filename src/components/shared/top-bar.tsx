import { cn } from '@/lib/utils';
import * as React from 'react';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';
import { Category } from '@prisma/client';

interface ITopBarProps {
  categories: Category[]
}

export const TopBar: React.FC<ITopBarProps> = ({categories}) => {
    return <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10')}>
    <Container className='flex items-center justify-between'>
      <Categories items={categories} />
      <SortPopup/>
    </Container>
    </div>;
};


