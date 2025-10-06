import React from 'react';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import OutfitsCollection from './components/OutfitsCollection';


const page = () => {
  return (
    <div>
      <Navbar />
    <HeroPage/>
    <OutfitsCollection/>
    </div>
    
  );
}

export default page;
