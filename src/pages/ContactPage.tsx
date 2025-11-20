
import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
// Import EmailJS
import emailjs from '@emailjs/browser';
import PageLayout from '../components/PageLayout';

const ContactPage = () => {
  // 1. Create a ref for the form so EmailJS can read it
  const form = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. Add state to handle loading and success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    // 3. READ THE ENV VARIABLES
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Safety check: Log error if keys are missing
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS environment variables are missing! Check your .env file.");
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (form.current) {
      // 4. Send the email
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log('Email sent:', result.text);
            setStatus('success');
            setIsSubmitting(false);
            // Clear form on success
            setFormData({ name: '', email: '', message: '' });
        }, (error) => {
            console.error('Email failed:', error.text);
            setStatus('error');
            setIsSubmitting(false);
        });
    }
  };

  return (
    <PageLayout
      title={<>Let's <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Connect</span></>}
      description="Ready to transform your vision into reality? Let's discuss how we can help scale your business."
    >

      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mb-20 animate-fade-in-up">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
              
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
                    <p className="text-gray-300">hello@scalable.tech</p>
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
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
                
                {/* Attach the 'ref' and 'onSubmit' here */}
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/60 border border-gray-800 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none text-white placeholder-gray-400"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  {/* Success Message */}
                  {status === 'success' && (
                    <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                        <CheckCircle size={20} />
                        <span>Message sent successfully! We'll be in touch soon.</span>
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                        <AlertCircle size={20} />
                        <span>Something went wrong. Please check your connection.</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl shadow-red-600/25 flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-red-600/40 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
    </PageLayout>
  );
};

export default ContactPage;