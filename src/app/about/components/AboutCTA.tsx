import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function AboutCTA() {
  return (
    <section className="py-16 sm:py-24 bg-primary relative overflow-hidden" aria-label="About call to action">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-4">
          Ready to Innovate with Us?
          <br />
          <span className="gradient-text">Transform Your Future</span>
        </h2>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
          Discover how our cutting-edge technology solutions can drive your success. From machine learning innovations to tailored IT platforms, we're here to partner with you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/our-clients"
            className="flex items-center gap-2 bg-accent text-primary font-bold px-7 py-4 rounded-full hover:bg-accent/90 transition-all duration-300 shadow-glow text-sm sm:text-base w-full sm:w-auto justify-center"
            aria-label="Explore our solutions"
          >
            <Icon name="SparklesIcon" size={18} variant="solid" />
            See Our Clients
          </Link>
          <Link
            href="/homepage#contact"
            className="flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-7 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
            aria-label="Partner with us"
          >
            <Icon name="UserGroupIcon" size={18} variant="outline" />
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}