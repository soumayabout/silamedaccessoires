import React, { useContext } from 'react';
import './Display.css';
import { ShopContext } from '../Shopcontext';
import star from '../assets/st1.png';
import star2 from '../assets/st2.png';
import Item from '../item/Item';
import All_Product from '../../datas/All_Product';

const Display = (props) => {
  const { product } = props;
  const { addtoCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addtoCart(product.id);
  };

  return (
    <div className="display">
      <div className="display-left">
        <img src={product.image} alt={product.name} />
        <div id='main-img'>
          <img src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="icon-star">
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star2} alt="Star2" />
        </div>
        <div className="display-right-price">
          <div className='price-old'>{product.old_price} DH</div>
          <div className='price-new'>{product.new_price} DH</div>
        </div>
        <p>Description: {product.description} </p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export const RelatedProduct = ({ category }) => {
  const filteredProducts = All_Product.filter((product) => product.category === category);
  return (
    <div className="relatedProduct">
      <h1>Related Products</h1>
      <hr />
      <div className='relatedProduct-list'>
        {filteredProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Display;
