import React from 'react';
import { IProduct } from '../../../../data/products';
import ProductCard from './product-card';

const Products = ({ data }: { data: IProduct[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <li key={product.id}>
          <ProductCard data={product}/>
        </li>
      ))}
    </div>
  );
};

export default Products;
