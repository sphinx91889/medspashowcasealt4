import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Benefits of Regular HydraFacial Treatments',
    excerpt: 'Discover how monthly HydraFacial treatments can transform your skin and maintain a youthful glow year-round.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2070',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Skincare',
  },
  {
    title: 'Understanding Body Contouring: Which Treatment is Right for You?',
    excerpt: 'A comprehensive guide to our body sculpting treatments and how to choose the perfect option for your goals.',
    image: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&q=80&w=2070',
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Body Treatments',
  },
  {
    title: 'Anti-Aging Secrets: Prevention vs Treatment',
    excerpt: 'Learn about the latest anti-aging strategies and how to develop a preventive skincare routine.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2070',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Anti-Aging',
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Wellness Insights</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our collection of articles on beauty, wellness, and cutting-edge treatments.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {post.readTime}
                </div>
                
                <h3 className="font-playfair text-xl mb-3 hover:text-teal-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <button className="text-teal-600 font-medium inline-flex items-center group">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
