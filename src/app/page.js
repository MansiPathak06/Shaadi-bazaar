import React from 'react';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import OutfitsCollection from './components/OutfitsCollection';
import FootwearCollection from './components/FootwearCollection';
import Accessories from './components/Accessories';
import Testimonials from './components/TestimonialsPage';
import Footer from './components/Footer';



const page = () => {
  return (
    <div className='bg-gradient-to-b from-rose-100 to-white'>
      <HeroPage />
      <OutfitsCollection />
      <FootwearCollection/>
      <Accessories/>
      <Testimonials />
    </div>

  );
}

export default page;
