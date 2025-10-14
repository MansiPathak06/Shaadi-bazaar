import React from 'react';


import FootwearCollection from './components/FootwearCollection';
import Accessories from './components/Accessories';
import Testimonials from './components/TestimonialsPage';
import OutfitsCollection from './components/OutfitsCollection';
import Hero from './components/Hero';
import RitualsAndPuja from './components/RitualsAndPuja';





const page = () => {
  return (
    <div className='bg-gradient-to-b from-rose-100 to-white'>
      <Hero />
  <OutfitsCollection />
      <FootwearCollection/>
      <Accessories/>
      <RitualsAndPuja/>
      <Testimonials />
      
    </div>

  );
}

export default page;
