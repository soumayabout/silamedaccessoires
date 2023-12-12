import React from 'react';
import './Shopdetail.css';
import arrow from '../assets/arrow.png';

const Shopdetail = (props) => {
  const {product}=props;
  return (
    <div className='shopdetail'>
      Accueil <img src={arrow}/>
      {product.category} <img src={arrow}/>
      {product.name} <img src={arrow}/>
    </div>
  );
};

export default Shopdetail;
