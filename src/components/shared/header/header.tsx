
import { cn } from '@/lib/utils';
import * as React from 'react';

import { Container, HeaderNav, Logo, SearchInput } from '..';



interface IHeaderProps {
    hasSearch?: boolean;
    hasCart?: boolean;
    className?: string;
}

export const Header: React.FunctionComponent<IHeaderProps> = ({className, hasSearch, hasCart}) => {
   
    
    return (
        <header className={cn('border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <Logo />
                {hasSearch && <SearchInput/>}
                <HeaderNav cart={hasCart } />
            </Container>
      </header>
  );
};


