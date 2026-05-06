'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import dynamic from 'next/dynamic';

const GlobeAnimation = dynamic(() => import('./GlobeAnimation'), { ssr: false });

const trustBadges = [
  { icon: 'GlobeAltIcon', label: 'Serving Kenya & East Africa' },
  { icon: 'SignalIcon', label: 'No SIM Required' },
  { icon: 'ShieldCheckIcon', label: '24/7 Monitoring' },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

    setTimeout(handleReveal, 100);
    window.addEventListener('scroll', handleReveal, { passive: true });
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient"
      aria-label="Hero section"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/80" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" aria-hidden="true" />

      {/* Hero Content — two-column on large screens */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left: text content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10 reveal opacity-100">
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold tracking-wide"
              >
                <Icon name={badge.icon as 'GlobeAltIcon'} size={12} variant="solid" />
                {badge.label}
              </span>
            ))}
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[0.9] tracking-tighter mb-6 reveal opacity-100">
            Satellite-Powered
            <br />
            <span className="gradient-text">Intelligence.</span>
            <br />
            <span className="text-white/70 font-light italic text-3xl sm:text-5xl md:text-6xl">Real-Time. Everywhere.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 reveal opacity-100">
            Track assets, protect children, and communicate across Kenya — with{' '}
            <strong className="text-accent font-semibold">zero SIM cards</strong>,{' '}
            <strong className="text-accent font-semibold">zero base stations</strong>, and{' '}
            <strong className="text-accent font-semibold">zero limits</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 reveal opacity-100">
            <Link
              href="/homepage#services"
              className="flex items-center gap-2 bg-accent text-primary font-bold px-7 py-4 rounded-full hover:bg-accent/90 transition-all duration-300 shadow-glow text-sm sm:text-base w-full sm:w-auto justify-center"
              aria-label="Explore our satellite services"
            >
              <Icon name="RocketLaunchIcon" size={18} variant="solid" />
              Explore Our Services
            </Link>
            <a
              href="https://wa.me/254711617610?text=Hello%2C%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-white/30 text-white font-bold px-7 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
              aria-label="Chat with us on WhatsApp"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} variant="outline" />
              WhatsApp Us Now
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center lg:items-start gap-2 animate-bounce reveal opacity-100">
            <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
            <Icon name="ChevronDownIcon" size={20} variant="outline" className="text-white/30" />
          </div>
        </div>

        {/* Right: Globe */}
<div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
  <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] flex items-center justify-center">

    {/* Outer glow ring */}
    <div
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(0,198,167,0.08) 0%, rgba(0,198,167,0.03) 60%, transparent 80%)',
      }}
      aria-hidden="true"
    />

    {/* Rotating dashed orbit ring */}
    <div
      className="absolute inset-[-12px] rounded-full border border-dashed border-accent/20 pointer-events-none"
      style={{ animation: 'spin 30s linear infinite' }}
      aria-hidden="true"
    />

    {/* Satellite dot on orbit */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(0,198,167,0.7)] pointer-events-none"
      style={{ animation: 'spin 30s linear infinite', transformOrigin: '50% calc(50% + 12px + 50%)' }}
      aria-hidden="true"
    />

    {/* ✅ Clip wrapper — hides the canvas corners so the dark bg fill doesn't show */}
    <div className="w-full h-full rounded-full overflow-hidden">
      {/* ✅ No drop-shadow here — it would box-shadow the entire canvas rect */}
      <GlobeAnimation className="w-full h-full" />
    </div>

  </div>
</div>
      </div>
    </section>
  );
}