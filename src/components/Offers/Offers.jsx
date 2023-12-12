import React, { useState } from 'react';
import './offers.css';
import offer from '../assets/Banner.jpg';
import offer1 from '../assets/Banner2.jpg';
import offer2 from '../assets/Banner3.jpg';
import { Link } from 'react-router-dom';

const Offers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="offers">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offres pour vous</h1>
        <p>UNIQUEMENT SUR LES PRODUITS LES PLUS VENDEURS</p>
        <Link to="/collection">
          <button>Vérifiez maintenant</button>
        </Link>     
      </div>
      <div className="offers_right">
        <div className="slideshow">
          <div className={`slide ${activeIndex === 0 ? 'active' : ''}`}>
            <img src={offer} alt="Offer 1" />
          </div>
          <div className={`slide ${activeIndex === 1 ? 'active' : ''}`}>
            <img src={offer1} alt="Offer 2" />
          </div>
          <div className={`slide ${activeIndex === 2 ? 'active' : ''}`}>
            <img src={offer2} alt="Offer 3" />
          </div>
        </div>
        <div className="pagination">
          <button onClick={() => handleButtonClick(0)}><span>1</span></button>
          <button onClick={() => handleButtonClick(1)}><span>2</span></button>
          <button onClick={() => handleButtonClick(2)}><span>3</span></button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
