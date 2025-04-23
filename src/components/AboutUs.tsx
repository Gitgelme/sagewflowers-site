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
                At Soul & Soap Co, we are dedicated to providing premium quality smudge sticks and Palo Santo products to retailers, spas, and wellness centers worldwide. Our journey began over a decade ago with a passion for natural healing traditions and sustainable harvesting practices.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Our Story</h3>
              <p className="mb-4">
                Founded in 2012, our company has grown from a small family operation to a trusted wholesale supplier of ceremonial herbs and cleansing tools. We work directly with indigenous communities and ethical farmers to ensure our products are harvested with respect for nature and ancient traditions.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Our Commitment to Sustainability</h3>
              <p className="mb-4">
                We believe in responsible sourcing and environmental stewardship. All our sage and herbs are either ethically wildcrafted or grown organically, while our Palo Santo comes only from naturally fallen branches, following strict sustainability guidelines to protect this sacred tree.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Quality Assurance</h3>
              <p className="mb-4">
                Every product undergoes rigorous quality control before packaging. We take pride in providing consistently excellent products that your customers will love and trust, batch after batch.
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