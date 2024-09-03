import * as React from 'react';

interface IProductsGroupListProps {
    className?: string;
}

export const ProductsGroupList: React.FC<IProductsGroupListProps> = ({className}) => {
    return (
      <div className={className}></div>
  ) ;
};


