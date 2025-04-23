import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-16 md:pt-20 min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/6690828/pexels-photo-6690828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 max-w-3xl mx-auto leading-tight">
          Wholesale Smudge Sticks & Palo Santo
        </h1>
        <p className="text-xl md:text-2xl text-gray mb-12 max-w-2xl mx-auto">
          Bulk Orders · Private Labeling · Worldwide Shipping
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#products" 
            className="btn btn-primary hover:translate-y-[-3px]"
          >
            View Products
          </a>
          <a 
            href="#contact" 
            className="btn btn-secondary hover:translate-y-[-3px]"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
    </section>
  );
};

export default Hero;