import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="section bg-olive/10">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">About Us</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p className="mb-4 text-lg">
                At Soul & Soap Co., we specialize in premium-quality smudge sticks and Palo Santo sticks, crafted for retailers, spas, and wellness centers worldwide. Our journey began with a passion for ancient cleansing rituals and sustainably harvested botanicals.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Our Story</h3>
              <p className="mb-4">
                Founded in 2016, our company has grown from a small family operation into a trusted wholesale supplier of ceremonial herbs. We offer a wide variety of natural products including sage smudge sticks, lavender smudge sticks, rosemary smudge sticks, cedar, and eucalyptus smudge sticks — each harvested with care and tradition. We partner with indigenous communities and ethical farms to ensure every bundle honors the earth and its ancestral wisdom.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Our Commitment to Sustainability</h3>
              <p className="mb-4">
                We believe in conscious sourcing and environmental care. All of our herbs are wildcrafted or organically grown. Our Palo Santo is sourced exclusively from naturally fallen wood, in strict accordance with sustainability guidelines that protect this sacred resource.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Quality Assurance</h3>
              <p className="mb-4">
                Every batch is inspected for quality and freshness before packaging. We proudly serve businesses looking for bulk smudge sticks, private label options, and reliable, consistent quality that customers love and trust.
              </p>
              
              <div className="flex justify-center mt-8">
                <a 
                  href="#contact" 
                  className="btn btn-primary"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
