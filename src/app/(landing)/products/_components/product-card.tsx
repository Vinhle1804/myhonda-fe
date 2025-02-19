import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IProduct } from '../../../../data/products';

const ProductCard = ({ data: product }: { data: IProduct }) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className='block p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow'
    >
      <div className='nameAndColor mb-4'>
        <h3 className='text-lg font-semibold'>{product.name}</h3>
      </div>

      <div className='mb-4'>
      <div className='new-product-tag'>
        <Image
          width={200}
          height={200}
          src={product.versions[0].variants[0].images[0]}
          alt={product.name}
          className='w-full h-64 object-cover rounded-md'
        />
           </div>
        <div className='price mt-2 text-lg'>
          Giá từ: <span className='font-bold'>{product.versions[0].variants[0].price}</span> VNĐ
        </div>
      </div>
{/* 
      <div className='title mt-2'>
        <div className='new-product-tag'>
          <Image
            width={200}
            height={200}
            src='https://www.honda.com.vn/images/xe-may/label-new-v1.png?v=1'
            alt='New Product'
            className='logo-new-product w-20 h-auto'
          />
        </div>
        <div className='price mt-2 text-lg'>
          Giá từ: <span className='font-bold'>{product.versions[0].variants[0].price}</span> VNĐ
        </div>
      </div> */}
    </Link>
  );
};

export default ProductCard;
