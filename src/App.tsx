import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, Star, Calendar, Users, Sparkles, 
  Facebook, Instagram, Twitter, Linkedin, Youtube 
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Form from './components/Form';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';

// Page Imports
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  const socialLinks = [
    { 
      icon: Facebook, 
      href: '#', 
      label: 'Facebook' 
    },
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram' 
    },
    { 
      icon: Twitter, 
      href: '#', 
      label: 'Twitter' 
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn' 
    },
    { 
      icon: Youtube, 
      href: '#', 
      label: 'YouTube' 
    }
  ];

  const policyLinks = [
    { 
      name: 'Privacy Policy', 
      href: '#privacy-policy' 
    },
    { 
      name: 'Terms & Conditions', 
      href: '#terms-conditions' 
    },
    { 
      name: 'Cancellation Policy', 
      href: '#cancellation-policy' 
    },
    { 
      name: 'Refund & Return', 
      href: '#refund-return' 
    },
    { 
      name: 'Liability Waiver', 
      href: '#liability-waiver' 
    }
  ];

  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        <div
          className="custom-cursor hidden lg:block"
          style={{
            transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
          }}
        />

        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Hero />
                <Services />
                <Reviews />
                <Team />
                <Blog />
                <Form />
                <Newsletter />
              </main>

              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-playfair text-2xl mb-4">Examplus Medical Spa</h3>
                    <p className="text-gray-400">Experience transformative wellness in a luxurious setting.</p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold mb-4">Contact</h4>
                    <p className="text-gray-400">123 Luxury Lane</p>
                    <p className="text-gray-400">Beverly Hills, CA 90210</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold mb-4">Hours</h4>
                    <p className="text-gray-400">Mon-Fri: 9AM - 8PM</p>
                    <p className="text-gray-400">Sat: 10AM - 6PM</p>
                    <p className="text-gray-400">Sun: Closed</p>
                  </div>
                </div>
              </div>

              <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Social Links */}
                    <div>
                      <h4 className="font-montserrat font-semibold mb-4">Connect With Us</h4>
                      <div className="flex space-x-4">
                        {socialLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors duration-300"
                            aria-label={link.label}
                          >
                            <link.icon size={24} />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Policy Links */}
                    <div>
                      <h4 className="font-montserrat font-semibold mb-4">Policies</h4>
                      <div className="space-y-2">
                        {policyLinks.map((link, index) => (
                          <Link
                            key={index}
                            to={link.href}
                            className="block text-white/70 hover:text-white transition-colors duration-300"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                      <h4 className="font-montserrat font-semibold mb-4">Stay Updated</h4>
                      <p className="text-white/70 mb-4">
                        Subscribe to our newsletter for exclusive offers and wellness tips.
                      </p>
                      <form className="flex">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 bg-gray-800 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button
                          type="submit"
                          className="bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 transition-colors"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Examplus Medical Spa. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </>
          } />
          
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
