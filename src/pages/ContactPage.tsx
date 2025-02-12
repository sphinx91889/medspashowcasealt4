import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Newsletter from '../components/Newsletter';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-24">
        <Form />
        <Newsletter />
      </main>
    </div>
  );
};

export default ContactPage;
