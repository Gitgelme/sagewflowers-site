import './index.css'; // ← bu çok kritik, en üste yaz
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

        <main className="section">
          <h1 className="section-title">
            Wholesale Smudge Sticks, Sage Bundles & Palo Santo Exporter
          </h1>
          <p className="container text-center">
            At Sage & Flowers, we specialize in providing high-quality, ethically sourced smudge sticks and sacred woods
            such as palo santo, white sage, black sage, and lavender bundles. We serve B2B clients including wellness
            shops, spas, online retailers, and wholesalers around the world. With competitive pricing, low minimum order
            quantities, and fast international delivery, our products are ideal for businesses looking to offer premium
            natural incense. Contact us today for bulk inquiries or private label options.
          </p>
        </main>
      </>
    </HelmetProvider>
  );
}

export default App;
