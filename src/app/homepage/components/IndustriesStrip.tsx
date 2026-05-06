'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const industries = [
  { label: 'Schools', icon: 'AcademicCapIcon' },
  { label: 'Transport & Logistics', icon: 'TruckIcon' },
  { label: 'Government & Counties', icon: 'BuildingOffice2Icon' },
  { label: 'NGOs', icon: 'HeartIcon' },
  { label: 'Tourism', icon: 'GlobeAltIcon' },
  { label: 'Airlines', icon: 'PaperAirplaneIcon' },
  { label: 'Corporate', icon: 'BriefcaseIcon' },
  { label: 'Events', icon: 'MicrophoneIcon' },
  { label: 'Security Firms', icon: 'ShieldCheckIcon' },
  { label: 'SACCOs', icon: 'BuildingLibraryIcon' },
  { label: 'Emergency Services', icon: 'ExclamationTriangleIcon' },
];

export default function IndustriesStrip() {
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

  return (
    <section id="industries" className="py-16 sm:py-24 bg-background" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 reveal opacity-100">
          <div>
            <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5">
              Industries
            </span>
            <h2 id="industries-heading" className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tighter leading-tight mt-2">
              Industries We Serve
            </h2>
          </div>
          <Link
            href="/industries-we-serve"
            className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-4 transition-all duration-300 flex-shrink-0"
            aria-label="View all industries we serve"
          >
            View All Industries
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </Link>
        </div>

        {/* Scrollable pill tags */}
        <div
          className="flex gap-3 overflow-x-auto no-scrollbar pb-4 industries-scroll reveal opacity-100"
          role="list"
          aria-label="Industries served by Succinct Integrated Systems"
        >
          {industries.map((industry) => (
            <Link
              key={industry.label}
              href="/industries-we-serve"
              role="listitem"
              className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full border border-border bg-white hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              aria-label={`Learn more about ${industry.label} solutions`}
            >
              <div className="w-7 h-7 rounded-full bg-primary/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                <Icon name={industry.icon as 'AcademicCapIcon'} size={14} variant="outline" className="text-primary group-hover:text-accent transition-colors" />
              </div>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors whitespace-nowrap">
                {industry.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}