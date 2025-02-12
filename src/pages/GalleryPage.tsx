import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const galleryImages = [
  'https://images.unsplash.com/photo-1515377905703-c4e0869c0d5f?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1576016770956-1a4c43fdafcb?auto=format&fit=crop&q=80&w=2069',
  'https://images.unsplash.com/photo-1600334129128-685c5afcbdd1?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1519823551278-64f0a1d1e9f0?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1600334129128-685c5afcbdd1?auto=format&fit=crop&q=80&w=2070',
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <Navbar />
      <main className="pt-24 container mx-auto px-4">
        <h1 className="section-title text-center mb-12">Our Gallery</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-[90vh]">
              <img 
                src={selectedImage} 
                alt="Selected gallery image" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        )}

        <Newsletter />
      </main>
    </div>
  );
};

export default GalleryPage;
