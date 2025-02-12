import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-teal-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
            Join Our Wellness Journey
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to receive exclusive offers, wellness tips, and updates on our latest treatments.
          </p>
          
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
            {isSubmitted && (
              <p className="absolute -bottom-8 left-0 right-0 text-white text-sm">
                Thank you for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
