import React from 'react';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import Reviews from '../components/Reviews';
import Newsletter from '../components/Newsletter';

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-24">
        <Team />
        <Reviews />
        <Newsletter />
      </main>
    </div>
  );
};

export default TeamPage;
