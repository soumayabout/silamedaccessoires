import React, { useRef } from 'react';
import './footer.css';
import logo from '../assets/logo.png';
import fac from '../assets/fac.png';
import instag from '../assets/inst.jpeg';
import whats from '../assets/what.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const facebookRef = useRef(null);
  const instagramLink = 'https://www.instagram.com/silamed_accessoires/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg==';

  const openInstagramLink = () => {
    window.location.href = instagramLink;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:soumayaboutinkhar@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+212643716387';
  };

  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt="Logo" />
        <p>Beauté</p>
      </div>
      <div className='footer-section'>
        <h2>À propos de nous</h2>
        <ul className='footer-links'>
        <Link to='/'style={{ textDecoration: 'none' }}><li>Entreprise</li></Link>
        <Link to='/Product'style={{ textDecoration: 'none' }}><li>Produits</li></Link>
        <Link to='/'style={{ textDecoration: 'none' }}><li>À propos</li></Link>
        <Link to='/Newletter'style={{ textDecoration: 'none' }}><li>Contact</li></Link>
      </ul>
      </div>
      <div className='footer-section'>
        <h2>Contactez-nous</h2>
        <p>Email : <span  onClick={handleEmailClick}>soumayaboutinkhar@gmail.com</span></p>
        <p>Téléphone : <span  onClick={handlePhoneClick}>+212 643716387</span></p>
      </div>
      <div className='fotter-social'>
        <img src={fac}  ref={facebookRef} />
        <img src={instag}  onClick={openInstagramLink}  />
        <img src={whats} onClick={handlePhoneClick} />
      </div>
      <div className='copyright'>
        <hr />
        <p>copyright @2023, Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;
