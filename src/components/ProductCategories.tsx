import React from 'react';

interface ProductCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="card card-hover group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-charcoal mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <a 
          href="#contact" 
          className="inline-block text-sage font-medium hover:underline"
        >
          View Details →
        </a>
      </div>
    </div>
  );
};

const ProductCategories: React.FC = () => {
  const products = [
    {
      title: "White Sage Smudge Sticks",
      imageUrl: "/white-sage-smudge-stick.jpg",
      description: "Premium white sage bundles for purification and cleansing, available in various sizes."
    },
    {
      title: "Lavender Smudge Sticks",
      imageUrl: "/lavender-smudge-stick.jpg",
      description: "Calming lavender bundles with aromatherapeutic properties, perfect for relaxation rituals."
    },
    {
      title: "Rosemary Smudge Sticks",
      imageUrl: "/rosemary-smudge-stick.jpg",
      description: "Purifying rosemary bundles for mental clarity and enhanced focus during meditation."
    },
    {
      title: "Palo Santo Sticks",
      imageUrl: "/palo-santo-wood-stick.jpg",
      description: "Ethically harvested Palo Santo wood for spiritual cleansing and energy balancing."
    }
  ];

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title">Our Product Range</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
