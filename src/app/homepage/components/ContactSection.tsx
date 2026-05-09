'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleReveal, { passive: true });
    handleReveal();
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point — connect to your preferred email/CRM service
    const msg = encodeURIComponent(`Hello, I'm ${formData.name}. I'm interested in ${formData.service || 'your services'}. ${formData.message}`);
    window.open(`https://wa.me/254711617610?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-primary overflow-hidden relative" aria-labelledby="contact-heading">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal opacity-100">
          <h2 id="contact-heading" className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight">
            Ready to Secure
            <br />
            <span className="gradient-text">What Matters Most?</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Reach out via WhatsApp, Facebook, or fill in the form below. Our team responds within 30 minutes during business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Contact Info + CTAs */}
          <div className="space-y-8 reveal opacity-100">
            {/* Big CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/254711617610?text=Hello%2C%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-accent text-primary font-bold px-6 py-4 rounded-2xl hover:bg-accent/90 transition-all duration-300 shadow-glow text-sm sm:text-base"
                aria-label="Chat with us on WhatsApp"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
                WhatsApp Chat
              </a>
              <a
                href="https://web.facebook.com/harold.omollo.1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 border-2 border-white/20 text-white font-bold px-6 py-4 rounded-2xl hover:border-accent hover:text-accent transition-all duration-300 text-sm sm:text-base"
                aria-label="Visit our Facebook page"
              >
              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                              </svg>                Facebook Page
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Icon name="PhoneIcon" size={18} variant="solid" className="text-accent" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Phone</div>
                  <a href="tel:+254711617610" className="text-white font-semibold text-base hover:text-accent transition-colors">
                    0711 617 610
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Icon name="EnvelopeIcon" size={18} variant="solid" className="text-accent" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Email</div>
                  <a href="mailto:info@succinctis.co.ke" className="text-white font-semibold text-base hover:text-white/70 transition-colors">
                    succinctc@yahoo.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPinIcon" size={18} variant="solid" className="text-accent" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Location</div>
                  <span className="text-white font-semibold text-base">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 reveal opacity-100"
            aria-label="Contact form"
          >
            {/* Backend integration point: connect form submission to your CRM or email service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-white/70 text-xs uppercase tracking-widest block mb-1.5">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Kamau"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors text-sm"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-white/70 text-xs uppercase tracking-widest block mb-1.5">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0711 617 610"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-white/70 text-xs uppercase tracking-widest block mb-1.5">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.co.ke"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="service" className="text-white/70 text-xs uppercase tracking-widest block mb-1.5">Service of Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm appearance-none"
              >
                <option value="" className="bg-primary">Select a service...</option>
                <option value="School Fleet Management" className="bg-primary">School Fleet Management</option>
                <option value="Satellite Asset Tracking" className="bg-primary">Satellite Asset Tracking</option>
                <option value="Radio Communication" className="bg-primary">Satellite Radio Communication</option>
                <option value="Radio Communication" className="bg-primary">Radio Frequency Asset Tagging</option>
                <option value="Radio Communication" className="bg-primary">Remote Communities Live Radio Broadcast System</option>
                <option value="Radio Communication" className="bg-primary">Tours and Travel Services, IATA certified</option>


                <option value="Laptop Tracker" className="bg-primary">Laptop Tracker & Remote Wipe</option>
                <option value="Airline Baggage Tracking" className="bg-primary">Airline Baggage Tracking</option>
                <option value="Student ID Tags" className="bg-primary">Student ID Tags</option>
                <option value="Mass Emergency Communication" className="bg-primary">Mass Emergency Communication</option>
                <option value="Other" className="bg-primary">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-white/70 text-xs uppercase tracking-widest block mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your needs..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-accent text-primary font-bold px-6 py-4 rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-glow text-sm sm:text-base"
              aria-label="Send your message via WhatsApp"
            >
              <Icon name="PaperAirplaneIcon" size={18} variant="solid" />
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}