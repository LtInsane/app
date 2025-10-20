import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Publications from '../components/Publications';
import Teaching from '../components/Teaching';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Publications />
      <Teaching />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;