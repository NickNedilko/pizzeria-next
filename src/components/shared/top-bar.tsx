import { cn } from '@/lib/utils';
import * as React from 'react';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';

interface ITopBarProps {
}

export const TopBar: React.FC<ITopBarProps> = (props) => {
    return <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10')}>
    <Container className='flex items-center justify-between'>
      <Categories />
      <SortPopup/>
    </Container>
    </div>;
};


