import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ProductCategories from './components/ProductCategories';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <ProductCategories />
        <AboutUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;