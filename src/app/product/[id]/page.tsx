import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import * as React from 'react';

interface IProductPageProps {
    params: Params
}

const ProductPage: React.FC<IProductPageProps> = ({ params }) => {
    const id = params.id
    return (
        <div>Product {id}</div>
  );
};

export default ProductPage;
