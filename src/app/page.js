import React from 'react';


import FootwearCollection from './components/FootwearCollection';
import Accessories from './components/Accessories';
import Testimonials from './components/TestimonialsPage';
import OutfitsCollection from './components/OutfitsCollection';
import Hero from './components/Hero';
import AccessoriesCollection from "./components/AccessoriesCollection";
import CateringCollection from './components/CateringCollection'





const page = () => {
  return (
    <div className='bg-gradient-to-b from-rose-100 to-white'>
      <Hero />
      <AccessoriesCollection />
      <CateringCollection />
      <OutfitsCollection />
      <FootwearCollection />
      <Accessories />
      <Testimonials />

    </div>

  );
}

export default page;
