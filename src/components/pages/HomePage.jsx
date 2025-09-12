import React from 'react';
import Hero from '../Hero';
import Features from '../Features';
import Testimonials from '../Testimonials';
import Gallery from '../Gallery';
import Contact from '../Contact';

const HomePage = () => {
  return (
    <div className="bg-[#0a0a0a]"> {/* Base background for the page content */}
      <Hero />
      <Features />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
};

export default HomePage;