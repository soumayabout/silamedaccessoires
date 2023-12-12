import React, { useState } from 'react';
import './Newletter.css';
import ico from '../assets/icon.png';

const Newletter = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    window.location.href = '/login';
  };

  return (
    <div className='letter'>
      <h1>Suivez-nous</h1>
      <p>Tendances, nouveautés, bons plans, inscrivez-vous vite à la newsletter et profitez de réductions exclusives! 20% offerts sur votre première commande.</p>
      <div className='letter_form'>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='entrez votre email' value={email} onChange={handleInputChange} />
          <button type="submit">
            <img src={ico} style={{ width: '20px' }} alt="Submit" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newletter;
