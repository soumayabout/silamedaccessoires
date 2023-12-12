import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/Popular';
import Offers from '../components/Offers/Offers';
import Collection from '../components/Collection/Collection';
import PeopleOpinions from '../components/People/PeopleOpinions';
const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Collection/>
      <PeopleOpinions/>
    </div>
  )
}

export default Home;
