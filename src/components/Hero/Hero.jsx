import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import arrow from '../assets/arrow.png';
import NAV from '../assets/NAV.jpg';
import MEN from '../assets/MEN.jpeg';

const Hero = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <h2>Trouvez votre bonheur </h2>
        <p>faites le plein de tendances avec Beauté </p>
        <p>collection pour tous</p>
        <Link to="/collection" style={{textDecoration:'none'}}>
          <div className="header_btn">
            <div>Dernière collection</div>
            <img src={arrow} alt="Arrow" />
          </div>
        </Link>
      </div>

      <div className='header_right'>
        <img className='blurb' src={NAV} alt="NAV" />
        <img className='rect' src={MEN} alt="MEN" />
      </div>
    </div>
  );
};

export default Hero;
