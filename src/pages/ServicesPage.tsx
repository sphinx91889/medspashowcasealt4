import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import BeautyExperts from '../components/BeautyExperts';
import Newsletter from '../components/Newsletter';

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="pt-24">
          <Services />
        </div>
        <BeautyExperts />
        <Newsletter />
      </main>
    </div>
  );
};

export default ServicesPage;
