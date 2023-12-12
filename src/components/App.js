import React from 'react';
import Navbar from './Header/Navbar';
import Home from '../datas/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categorie from '../datas/Categorie';
import Cart from '../datas/Cart';
import Login from '../datas/Login';
import menBanner from './assets/men.jpg';
import womenBanner from './assets/women.jpeg';
import Footer from './Footer/Footer';
import Product from '../datas/ProductDetaill';
import Collection from './Collection/Collection';
import Newletter from './Contact/Newletter';
import Signup from '../datas/Signup';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/mens" element={<Categorie banner={menBanner} category="men" />} />
          <Route path="/shop/womens" element={<Categorie banner={womenBanner} category="women" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path="/Newletter" element={<Newletter />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
