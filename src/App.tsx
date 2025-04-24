import './index.css'; // bu satır her zaman en üstte
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';

function App() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Wholesale Smudge Sticks & Palo Santo | Sage & Flowers</title>
          <meta
            name="description"
            content="Trusted B2B supplier of bulk sage bundles, palo santo sticks, white sage, and more. Export-ready for USA, UK, Germany and beyond."
          />
          <link rel="canonical" href="https://www.sagewflowers.com/" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        </Helmet>

        <Hero />
        <ProductCategories />
        <WhyChooseUs />
        <Contact />
      </>
    </HelmetProvider>
  );
}

export default App;
