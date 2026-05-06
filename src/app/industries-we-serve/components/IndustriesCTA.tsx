import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function IndustriesCTA() {
  return (
    <section className="py-16 sm:py-24 bg-primary relative overflow-hidden" aria-label="Industries call to action">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-4">
          Don&apos;t  See  Your  Industry?
        </h2>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
          Our satellite solutions are adaptable to virtually any organization. If you need reliable tracking, communication, or security — we have a solution for you. Contact us for a custom consultation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/254711617610?text=Hello%2C%20I'm%20interested%20in%20a%20custom%20solution%20for%20my%20organization."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-primary font-bold px-7 py-4 rounded-full hover:bg-accent/90 transition-all duration-300 shadow-glow text-sm sm:text-base w-full sm:w-auto justify-center"
            aria-label="Get a custom consultation via WhatsApp"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={18} variant="solid" />
            Get a Custom Consultation
          </a>
          <Link
            href="/our-clients"
            className="flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-7 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
            aria-label="See who we have already served"
          >
            <Icon name="UserGroupIcon" size={18} variant="outline" />
            See Our Clients
          </Link>
        </div>
      </div>
    </section>
  );
}