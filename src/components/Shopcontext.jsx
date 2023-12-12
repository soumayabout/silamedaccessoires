import React, { createContext, useState, useEffect } from 'react';
import All_Product from '../datas/All_Product';

export const ShopContext = createContext(null);

const ContextProvider = (props) => {
  const [cart, setCart] = useState({});

  const addtoCart = (item) => {
    setCart((prevCart) => ({ ...prevCart, [item]: (prevCart[item] || 0) + 1 }));
  };

  const removeCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart, [item]: (prevCart[item] || 0) - 1 };
      if (updatedCart[item] <= 0) {
        const { [item]: removedItem, ...rest } = updatedCart;
        return rest;
      }
      return updatedCart;
    });
  };
  const TotalCart = () => {
    let totalItem = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        totalItem += cart[item];
      }
    }
    return totalItem;
  };
  const contextValue = {TotalCart, All_Product, cart, addtoCart, removeCart };
  useEffect(() => {
  }, [cart]);
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ContextProvider;
