import React from 'react';
import { Globe, Star, Tag, Leaf } from 'lucide-react';

const Feature: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-sage text-charcoal">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-charcoal">{title}</h3>
        <p className="mt-2 text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section bg-neutral-100">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Feature
            icon={<Star size={24} />}
            title="Direct Producer"
            description="Work directly with producers, ensuring authentic products at the best wholesale prices without intermediaries."
          />
          
          <Feature
            icon={<Globe size={24} />}
            title="Worldwide Shipping"
            description="Reliable international shipping with tracking and bulk discounts for larger orders to any location."
          />
          
          <Feature
            icon={<Tag size={24} />}
            title="Private Label Available"
            description="Custom packaging and branding solutions to help your business stand out in the marketplace."
          />
          
          <Feature
            icon={<Leaf size={24} />}
            title="100% Natural & Sustainable"
            description="Ethically sourced products with environmentally friendly harvesting practices and sustainable packaging."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;