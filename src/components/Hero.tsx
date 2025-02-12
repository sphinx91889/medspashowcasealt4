import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Pause } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.5)' }}
      >
        <source 
          src="https://videos.pexels.com/video-files/4824010/4824010-uhd_2560_1440_24fps.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Video Playback Toggle */}
      <button 
        onClick={toggleVideoPlayback}
        className="absolute top-8 right-8 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all"
        aria-label={isPlaying ? "Pause Video" : "Play Video"}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-sm text-white tracking-wider">
              Wellness Reimagined
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-playfair font-semibold text-white mb-6 leading-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
              Natural Beauty
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover personalized aesthetic treatments that harmonize science, artistry, and your unique wellness journey.
          </p>

          <div className="flex justify-center space-x-4">
            <Link 
              to="/services"
              className="group inline-flex items-center px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Treatments
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="group inline-flex items-center px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 shadow-md"
            >
              Book Consultation
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
