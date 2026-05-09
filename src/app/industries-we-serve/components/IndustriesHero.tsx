import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function IndustriesHero() {
  return (
    <section
      className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden"
      aria-label="Industries We Serve hero section"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/60" aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10">
          <Icon name="BuildingOffice2Icon" size={12} variant="solid" />
          Who We Serve
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-6">
          Industries
          <br />
          <span className="gradient-text">We Serve</span>
        </h1>
        <p className="text-white/70 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          From school buses in Nairobi to emergency responders in Kisumu - our cheapest and affordable satellite solutions power safety and communication for organizations across every sector in Kenya. 
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {['11 Sectors', 'All 47 Counties', 'No SIM Required', '24/7 Coverage']?.map((badge) => (
            <span key={badge} className="px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}