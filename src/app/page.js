import React from 'react';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import OutfitsCollection from './components/OutfitsCollection';
import Accessories from './components/Accessories';


const page = () => {
  return (
    <div>
      <Navbar />
    <HeroPage/>
    <OutfitsCollection/>
    <Accessories />
    </div>
    
  );
}

export default page;
