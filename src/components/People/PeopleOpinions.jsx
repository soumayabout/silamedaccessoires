import React from 'react';
import '../People/PeopleOpinions.css'
import c1 from '../assets/Ellipse 2.png';
import c2 from '../assets/Ellipse 3.png';
import c3 from '../assets/Ellipse 4.png';
import st1 from '../assets/st1.png';
import st2 from '../assets/st1.png';
import st3 from '../assets/st1.png';

const PeopleOpinions = () => {
  return (
    <div className='PeopleOpinions'>
      <h1>Que disent les gens de nous ?</h1>
      <hr/>
        <div className="profile">
            <img src={c1} />
            <h1>Marwa</h1>
            <h2>Dentiste</h2>
            <div class="icons8-star">
              <img src={st1} />
              <img src={st2} />
              <img src={st3} />
              <img src={st2} />
            </div>
            <p>
              Commande bien reçu, 
              le site beauté elegance, 
              est un site très intéressant dans lequel je passe des commandes régulièrement. 
              Ils proposent pas de mal de produits à des prix réduits, 
              toutes au long de l'année.
            </p>
          </div>
          <div className="profile">
            <img src={c2} />
            <h1>Melissa</h1>
            <h2>Doctoresse</h2>
            <div class="icons8-star">
              <img src={st1} />
              <img src={st2} />
              <img src={st3} />
              <img src={st2} />
            </div>
            <p>
              Nouvelles marques beauté,
              marques exclusives que vous ne trouverez nulle part ailleurs,
              dernières tendances beauté à shopper d'urgence.
            </p>
          </div>
          <div className="profile">
            <img src={c3} />
            <h1>Sila</h1>
            <h2>Responsable marketing</h2>
            <div class="icons8-star">
              <img src={st1} />
              <img src={st2} />
              <img src={st3} />
              <img src={st2} />
            </div>
            <p>
              Je recommande ce site,
              les produits sont au top a des prix très attractifs..
            </p>
          </div>
    </div>
  )
};

export default PeopleOpinions;
