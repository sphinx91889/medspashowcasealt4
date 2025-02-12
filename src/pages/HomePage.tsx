import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Form from '../components/Form';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Team />
        <Blog />
        <Form />
        <Newsletter />
      </main>
    </div>
  );
};

export default HomePage;
