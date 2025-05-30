import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    isChecked: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, isChecked: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://form.sagewflowers.com/send-email.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: formData.name,
            company: formData.company,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const text = await response.text();

      if (response.ok && text.toLowerCase().includes('success')) {
        alert('Your message was sent successfully!');
      } else {
        console.error('Server response:', text);
        alert('An error occurred while sending your message.');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('An unexpected error occurred.');
    }

    setFormData({
      name: '',
      company: '',
      email: '',
      message: '',
      isChecked: false,
    });
  };

  return (
    <section id="contact" className="section bg-neutral-100">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left info panel */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-sage" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Office Location</h4>
                    <p className="mt-1 text-neutral-600">
                      123 Nature Way, Suite 101<br />
                      Portland, Oregon 97205<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-sage" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Phone</h4>
                    <p className="mt-1 text-neutral-600">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-sage" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="mt-1 text-neutral-600">
                      Please use the Contact Form
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Business Hours</h4>
                <p className="text-neutral-600">
                  Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Company/Organization*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent resize-none"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.isChecked}
                      onChange={handleCheckbox}
                      required
                      className="mt-1 h-4 w-4 text-sage focus:ring-sage border-neutral-300 rounded"
                    />
                    <label
                      htmlFor="privacy"
                      className="ml-2 block text-sm text-neutral-600"
                    >
                      I agree to the processing of my data according to the privacy
                      policy.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2 bg-sage text-white rounded-md hover:bg-sage-dark"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
