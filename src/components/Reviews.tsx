import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Jessica M.",
    date: "10-08-2023",
    rating: 5,
    text: "OC Skin Medspa has been amazing! My skin has never felt this smooth, and the results are unbelievable.",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Emily R.",
    date: "10-10-2023",
    rating: 5,
    text: "The staff is so welcoming and knowledgeable. My customized facial left me glowing and feeling fantastic!",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    name: "Carla D.",
    date: "10-12-2023",
    rating: 5,
    text: "I've finally found a place that delivers! Their advanced treatments have completely transformed my confidence in my skin.",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Maggie S.",
    date: "10-14-2023",
    rating: 5,
    text: "Their personalized approach made all the difference. My skin feels renewed, and I'm thrilled with the results!",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          Why People Love Examplus Medical Spa
        </h2>
        <p className="text-lg text-gray-600 mb-4">Excellent</p>
        <div className="flex justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className="w-6 h-6 text-yellow-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.09 2.66 1.22-5.28L2 7.8l5.36-.46L10 2.5l2.64 4.84L18 7.8l-4.13 4.58 1.22 5.28L10 15z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 mt-2">Based on our top Google reviews</p>
        <img
          src="https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png"
          alt="Google"
          className="mx-auto w-20 mt-4"
        />

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto mt-10">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-teal-700 text-white p-3 rounded-full hover:bg-teal-800 transition"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white shadow-lg rounded-lg p-6 mx-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.09 2.66 1.22-5.28L2 7.8l5.36-.46L10 2.5l2.64 4.84L18 7.8l-4.13 4.58 1.22 5.28L10 15z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 mt-3">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-teal-700 text-white p-3 rounded-full hover:bg-teal-800 transition"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="mt-4 flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-teal-700 w-6" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
