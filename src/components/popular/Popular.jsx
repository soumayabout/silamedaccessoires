import React from 'react'
import './Popular.css'
import Product_women from '../../datas/Product_women';
import Item from '../item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Populaire chez les femmes</h1>
      <hr/>
      <div className='popular_item'>
          {Product_women.map((item,i)=>{
            return(
              <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            )
           })}
      </div>
      
    </div>
    
  );
};
      
export default Popular;
