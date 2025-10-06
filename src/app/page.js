import React from 'react';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import OutfitsCollection from './components/OutfitsCollection';
import FootwearCollection from './components/FootwearCollection';
import Accessories from './components/Accessories';
import TestimonialsPage from './components/TestimonialsPage';



const page = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <OutfitsCollection />
      <FootwearCollection/>
      <Accessories/>
      <TestimonialsPage/>
    </div>

  );
}

export default page;
