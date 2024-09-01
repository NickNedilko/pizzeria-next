import { cn } from '@/lib/utils';
import * as React from 'react';

import { Container, HeaderNav, Logo } from '..';







interface IHeaderProps {
    className?: string;
}

export const Header: React.FunctionComponent<IHeaderProps> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <Logo/>
                <HeaderNav/>
            </Container>
      </header>
  );
};


