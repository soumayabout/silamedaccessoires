import React, { useContext } from 'react';
import './Style/Cart.css';
import { ShopContext } from '../components/Shopcontext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { All_Product, cart, addtoCart, removeCart } = useContext(ShopContext);
  const calculateTotal = () => {
    return All_Product.reduce((total, product) => {
      const quantity = cart[product.id] || 0;
      return total + quantity * product.new_price;
    }, 0);
  };

  const totalPrice = calculateTotal(); 

  return (
    <div className="cart">
      <div className="cart_main">
        <h1>Votre panier</h1>
        <table>
          <thead>
            <tr>
              <th>Produit</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Prix total</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {All_Product.map((product) => {
              const quantity = cart[product.id] || 0;
              const total = quantity * product.new_price;

              if (quantity > 0) {
                return (
                  <tr key={product.id}>
                    <td><img src={product.image} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{product.new_price} DH</td>
                    <td>
                      <div className='cart-items'>
                        <button className='cart-items-add' onClick={() => addtoCart(product.id)}>+</button>
                        <p>{quantity}</p>
                        <button className='cart-items-remove' onClick={() => removeCart(product.id)}>-</button>
                      </div>
                    </td>
                    <td>{total} DH</td>
                    <td>
                      <button id='btn' onClick={() => removeCart(product.id)}>Supprimer</button>
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="cart_valide">
     <h2>Prix Total: {totalPrice} DH</h2>
     <p>Complétez votre panier</p>
     <Link to='/login' style={{textDecoration:'none'}} ><button >Valider mon Panier</button></Link>
    </div>
    <hr />
    </div>  
    );   
};

export default Cart;
