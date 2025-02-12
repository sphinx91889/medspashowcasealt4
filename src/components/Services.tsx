import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const treatments = [
  {
    title: 'PRP',
    heading: 'Cell Rejuvenation.',
    description: 'Harness your body\'s natural healing power with PRP treatments to rejuvenate skin, stimulate collagen, and promote a youthful glow.',
    image: 'https://lemana.com/wp-content/themes/yootheme/cache/26/shutterstock_1512230159-scaled-1-261360dc.jpeg',
  },
  {
    title: 'EXOSOME',
    heading: 'Cell Regeneration.',
    description: 'Experience advanced skin rejuvenation with exosome treatments that support cellular regeneration and enhance skin health.',
    image: 'https://www.realself.com/news/wp-content/uploads/2023/03/RS_Exosomes-NewPRP.jpg',
  },
  {
    title: 'CRYO T-SHOCK',
    heading: 'Fat Sculpting.',
    description: 'Shape and refine your body effortlessly with Cryo T-Shock, a non-invasive treatment that combines hot and cold therapy for fat reduction and skin tightening.',
    image: 'https://images.squarespace-cdn.com/content/v1/5a5923fb2aeba558f663eea9/1594331388153-6FCT9Y84JW4G7SSV94Y1/ucryo-therapy-photos-30.jpg?format=2500w',
  },
  {
    title: 'BOTOX',
    heading: 'Wrinkle Reduction.',
    description: 'Achieve a more youthful appearance with precise Botox treatments that smooth fine lines and wrinkles while maintaining natural facial expressions.',
    image: 'https://www.nyallergy.com/wp-content/uploads/Botox-Blog-Resize-scaled-1-1200x900.jpg',
  },
  {
    title: 'DERMAL FILLERS',
    heading: 'Volume Restoration.',
    description: 'Restore lost volume and enhance facial contours with premium dermal fillers that provide natural-looking results and instant rejuvenation.',
    image: 'https://www.revengemd.com/wp-content/uploads/2022/06/Dermal-Fillers-TREATMENT-AREAS-Revenge-MD-Mobile-1024x819.png',
  },
  {
    title: 'MICRONEEDLING',
    heading: 'Skin Renewal.',
    description: 'Stimulate natural collagen production and improve skin texture with advanced microneedling treatments for smoother, firmer skin.',
    image: 'https://dermavereaesthetics.com/wp-content/uploads/2024/08/shutterstock_2080362571-scaled-1.jpg',
  },
  {
    title: 'CHEMICAL PEELS',
    heading: 'Skin Resurfacing.',
    description: 'Reveal fresh, glowing skin with customized chemical peels that address multiple skin concerns from aging to hyperpigmentation.',
    image: 'https://www.datocms-assets.com/84428/1674166144-chemical-peels-banner.jpg?auto=format,compress&w=1918',
  },
  {
    title: 'LASER THERAPY',
    heading: 'Advanced Rejuvenation.',
    description: 'Target specific skin concerns with cutting-edge laser treatments that provide precise, effective results with minimal downtime.',
    image: 'https://www.inlandcosmetic.com/wp-content/uploads/2023/06/is-laser-skin-resurfacing-worth-it-plus-answers-to-6-other-laser-treatment-questions.jpg',
  },
];

const treatmentList = [
  {
    category: 'NEUROTOXINS',
    description: 'Neurotoxins are substances that interfere with nerve function, often used in medical and cosmetic treatments like Botox to reduce wrinkles, treat muscle spasms, and manage certain conditions.',
    items: ['BOTOX', 'XEOMIN', 'DYSPORT'],
  },
  {
    category: 'DERMAL FILLERS',
    description: 'Premium dermal fillers designed to restore volume, enhance facial contours, and provide natural-looking rejuvenation results.',
    items: [],
  },
  {
    category: 'EXOSOME TREATMENTS',
    description: 'Advanced cellular therapy that promotes natural healing and regeneration for both skin and hair restoration.',
    items: ['EXOSOME (HAIR)', 'EXOSOME (FACE)'],
  },
  {
    category: 'PRP TREATMENTS',
    description: 'Harness your body\'s natural healing abilities with platelet-rich plasma treatments for various aesthetic and therapeutic purposes.',
    items: ['PRP (HAIR)', 'PRP (FACE)'],
  },
  {
    category: 'MEDICAL WEIGHT LOSS',
    description: 'Medical weight loss programs provide personalized plans to help individuals achieve sustainable weight loss through doctor-supervised treatments, including dietary guidance, exercise plans, and sometimes prescription medications.',
    items: ['SEMAGLUTIDE', 'TIRZEPATIDE'],
  },
  {
    category: 'BODY TREATMENTS',
    description: 'Non-invasive body sculpting and skin tightening treatments for optimal results.',
    items: ['CRYO T-SHOCK', 'HYDRAFACIAL', 'SCLEROTHERAPY'],
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % treatments.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
  }, []);

  useEffect(() => {
    let intervalId: number;
    
    if (!isPaused) {
      intervalId = window.setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, nextSlide]);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl text-gray-800">
              Welcome to Examplus Medical Spa | Your Beauty Destination
            </h2>
            <div className="w-24 h-1 bg-teal-600 rounded-full mb-6"></div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                At Examplus , we believe everyone deserves to feel confident and comfortable in their own skin. Our expert team offers personalized treatments designed to enhance your natural beauty while ensuring you feel relaxed and cared for.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in the heart of Beverly Hills, we provide high-quality services in a welcoming atmosphere. Let us help you look and feel your best with tailored treatments that deliver noticeable results.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://cdn.prod.website-files.com/6103d7500a0d507d3f6f48a7/6662bf279d293b8b2b55ec44_The%202024%20guide%20to%20creating%20your%20medical%20spa%20business%20plan.webp"
              alt="Luxury Medspa Interior"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Services Slider */}
        <h2 className="section-title text-center mb-16">Our Premium Services</h2>
        <div 
          className="relative mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="relative h-[600px] group">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="max-w-3xl mx-auto">
                          <h3 className="text-white text-5xl font-playfair mb-4">
                            {treatment.title}
                          </h3>
                          <div className="w-full h-0.5 bg-white mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-110"></div>
                          <div className="transform transition-all duration-500 translate-y-0 group-hover:-translate-y-2">
                            <h4 className="text-white text-2xl font-playfair mb-3">
                              {treatment.heading}
                            </h4>
                            <p className="text-white/90 text-lg max-w-2xl">
                              {treatment.description}
                            </p>
                            <button className="mt-6 text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {treatments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Treatment List Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {treatmentList.map((category, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <div className="flex items-center space-x-2">
                    <ChevronDown
                      className={`w-5 h-5 text-teal-600 transition-transform duration-300 ${
                        expandedCategory === category.category ? 'rotate-180' : ''
                      }`}
                    />
                    <span className="text-lg font-playfair text-gray-800">
                      {category.category}
                    </span>
                  </div>
                </button>
                
                <div
                  className={`mt-4 transition-all duration-300 overflow-hidden ${
                    expandedCategory === category.category
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  {category.items.length > 0 && (
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-200 cursor-pointer pl-7 relative"
                        >
                          <span className="absolute left-0 w-4 h-px bg-teal-600"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={`#learn-more-${category.category.toLowerCase()}`}
                    className="inline-block mt-4 text-teal-600 hover:text-teal-700 transition-colors duration-200"
                  >
                    Learn more about {category.category}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
