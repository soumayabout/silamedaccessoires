import React, { useContext } from 'react';
import './Style/Categorie.css';
import Item from '../components/item/Item';
import { ShopContext } from '../components/Shopcontext';
import { Link } from 'react-router-dom';

const Categorie = (props) => {
  const { All_Product } = useContext(ShopContext);

  return (
    <div className='shop_category'>
      <img src={props.banner}/>
        <div className="index">
          <p>
            <span>Profitez de nos promos</span> avant qu'il soit trop tard.
          </p>
        </div>
      
      <div className="category_pruduct">
        {All_Product.map((item, id)=>{
          if (props.category === item.category) {
            return (
              <Item
                key={id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <Link to='/collection'><div className='Explore_more'>
        Explore More
      </div></Link>
    </div>
  );
};

export default Categorie;
