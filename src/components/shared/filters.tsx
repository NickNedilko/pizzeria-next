import * as React from 'react';
import { Title } from './title';

interface IFiltersProps {
    className?: string
}

export const Filters: React.FC<IFiltersProps> = ({className}) => {
    return (
        <div className={className}>
            <Title text='Фільтрація' size='sm' className='font-bold mb-5'/>
        </div>
  );
};


