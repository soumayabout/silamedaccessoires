import React from 'react';
import './Collection.css';
import New_collection from '../../datas/New_collection';
import Item from '../item/Item';
const Collection = () => {
  return (
    <div className='New-collection'>
        <h1>Nouvelle collection</h1>
        <hr />
        <div className="collections">
            {New_collection.map((coll,i)=>{
                return(
                    <Item key={i} id={coll.id} name={coll.name} image={coll.image} new_price={coll.new_price} old_price={coll.old_price}/>
                )                
             })}
        </div>
    </div>
  )
}

export default Collection;
