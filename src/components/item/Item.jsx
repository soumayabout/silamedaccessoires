import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='section_item'>
      <Link to={`/Product/${props.id}`}>
        <img src={props.image} onClick={() => window.scrollTo(0, 0)} />
      </Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='price-new'>{props.new_price} DH</div>
        <div className='price-old'>{props.old_price} DH</div>
      </div>
    </div>
  );
};

export default Item;
