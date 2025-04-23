import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal shadow-md' : 'bg-charcoal/90'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-white font-semibold text-xl">
        Soul & Soap Co
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="nav-link">Home</a>
          
          <div className="relative group">
            <button 
              className="nav-link flex items-center"
              onClick={toggleProducts}
            >
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <a href="#products" className="block px-4 py-2 text-sm text-charcoal hover:bg-sage/20">Sage Smudge Sticks</a>
                <a href="#products" className="block px-4 py-2 text-sm text-charcoal hover:bg-sage/20">Lavender Smudge Sticks</a>
                <a href="#products" className="block px-4 py-2 text-sm text-charcoal hover:bg-sage/20">Rosemary Smudge Sticks</a>
                <a href="#products" className="block px-4 py-2 text-sm text-charcoal hover:bg-sage/20">Palo Santo</a>
              </div>
            </div>
          </div>
          
          <a href="#about" className="nav-link">About Us</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-charcoal">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 nav-link">Home</a>
            
            <div>
              <button 
                className="w-full flex justify-between items-center px-3 py-2 nav-link"
                onClick={toggleProducts}
              >
                Products <ChevronDown className={`h-4 w-4 transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsOpen && (
                <div className="pl-4 space-y-1">
                  <a href="#products" className="block px-3 py-2 text-sm text-gray hover:text-sage">Sage Smudge Sticks</a>
                  <a href="#products" className="block px-3 py-2 text-sm text-gray hover:text-sage">Lavender Smudge Sticks</a>
                  <a href="#products" className="block px-3 py-2 text-sm text-gray hover:text-sage">Rosemary Smudge Sticks</a>
                  <a href="#products" className="block px-3 py-2 text-sm text-gray hover:text-sage">Palo Santo</a>
                </div>
              )}
            </div>
            
            <a href="#about" className="block px-3 py-2 nav-link">About Us</a>
            <a href="#faq" className="block px-3 py-2 nav-link">FAQ</a>
            <a href="#contact" className="block px-3 py-2 nav-link">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;