import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Shopdetail from '../components/details/Shopdetail';
import Display, { RelatedProduct } from '../components/productDisplay/Display';
import { ShopContext } from '../components/Shopcontext';

const Product = () => {
  const { All_Product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = All_Product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Shopdetail product={product} />
      <Display product={product} />
      <RelatedProduct category={product.category} />
    </div>
  );
};

export default Product;
