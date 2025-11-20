
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageLayout
      title={<>Let's <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Connect</span></>}
      description="Ready to transform your vision into reality? Let's discuss how we can help scale your business."
    >

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            {/* Contact Info */}
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-red-600/10 rounded-xl p-3 group-hover:bg-red-600/20 transition-colors duration-300">
                    <Phone className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Call Us</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Available 24/7 for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-600/10 rounded-xl p-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email Us</h4>
                    <p className="text-gray-300">info@hulatechnology.com</p>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-600/10 rounded-xl p-3 group-hover:bg-green-600/20 transition-colors duration-300">
                    <MapPin className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Visit Us</h4>
                    <p className="text-gray-300">San Francisco, CA</p>
                    <p className="text-gray-400 text-sm">Remote-first, global presence</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-800/50">
                <h4 className="font-semibold mb-2 text-white">Ready to Scale?</h4>
                <p className="text-gray-300 text-sm">
                  Book a free 30-minute consultation to discuss your project and get a custom proposal.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-up">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-gray-800 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-gray-800 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/60 border border-gray-800 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none text-white placeholder-gray-400"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
    </PageLayout>
  );
};

export default ContactPage;
