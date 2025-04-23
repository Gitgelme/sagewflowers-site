import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  isOpen, 
  toggleAccordion 
}) => {
  return (
    <div className="mb-4">
      <button
        className="accordion-button"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isOpen && (
        <div className="accordion-panel">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer: "Our standard MOQ is 50 units per product type. For custom/private label orders, the MOQ is 100 units. Volume discounts are available for orders over 500 units."
    },
    {
      question: "Do you offer private labeling services?",
      answer: "Yes, we offer comprehensive private labeling services including custom packaging, branded labels, and personalized inserts. Please contact us for detailed information and pricing."
    },
    {
      question: "What are your shipping options and timeframes?",
      answer: "We ship worldwide via express courier (DHL, FedEx) and standard postal services. Delivery timeframes range from 3-5 business days for domestic orders and 7-14 business days for international shipments. Rush shipping is available upon request."
    },
    {
      question: "How long do your products stay fresh?",
      answer: "Our smudge sticks have a shelf life of approximately 2 years when stored properly in a cool, dry place. Palo Santo has an indefinite shelf life due to its natural oils, which actually enhance over time."
    },
    {
      question: "Are your products ethically sourced?",
      answer: "Absolutely. All our products are ethically and sustainably sourced. Our sage is either wildcrafted with permits or grown on dedicated farms. Our Palo Santo is harvested only from naturally fallen trees, in compliance with international regulations to protect this precious resource."
    },
    {
      question: "Do you offer samples before placing a bulk order?",
      answer: "Yes, we offer sample packs containing our main product range for a nominal fee plus shipping. The sample fee is credited toward your first order when you place a bulk purchase."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;