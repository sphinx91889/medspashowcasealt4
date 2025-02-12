import React from 'react';
import { ArrowRight } from 'lucide-react';

const BeautyExperts = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMzBjMCAxNi41Ny0xMy40MyAzMC0zMCAzMFMwIDQ2LjU3IDAgMzAgMTMuNDMgMCAzMCAwczMwIDEzLjQzIDMwIDMweiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-10 rotate-45"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          {/* Image Section */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000"
              alt="Beauty Expert Treatment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="font-playfair text-4xl mb-6">
              Your Beauty Experts in Placentia, CA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At OC Skin Medspa, we focus on helping you look and feel your best with treatments designed just for you. Our experienced team is passionate about combining the latest technology with personalized care to ensure every visit meets your unique needs.
            </p>
            <button className="group inline-flex items-center space-x-2 text-teal-600 font-medium hover:text-teal-700 transition-colors duration-300">
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyExperts;
