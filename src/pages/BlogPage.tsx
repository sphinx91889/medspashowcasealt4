import React from 'react';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-24">
        <Blog />
        <Newsletter />
      </main>
    </div>
  );
};

export default BlogPage;
