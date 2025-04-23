import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-gray py-10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Soul & Soap Co</h3>
            <p className="mb-4 max-w-md">
              Premium wholesale supplier of ethically sourced smudge sticks and Palo Santo for retailers, spas, and wellness centers.
            </p>
            <p className="text-sm opacity-75">
              © {currentYear} Soul & Soap Co. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links & Social */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-sage transition-colors duration-200">Home</a></li>
                <li><a href="#products" className="hover:text-sage transition-colors duration-200">Products</a></li>
                <li><a href="#about" className="hover:text-sage transition-colors duration-200">About Us</a></li>
                <li><a href="#faq" className="hover:text-sage transition-colors duration-200">FAQ</a></li>
                <li><a href="#contact" className="hover:text-sage transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="hover:text-sage transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-sage transition-colors duration-200">Terms of Use</a></li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center hover:bg-sage/40 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center hover:bg-sage/40 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Newsletter</h4>
                <p className="text-sm mb-3">Subscribe for wholesale updates</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-2 w-full rounded-l-md focus:outline-none text-charcoal"
                  />
                  <button className="bg-sage text-charcoal px-4 py-2 rounded-r-md hover:bg-sage/90 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;