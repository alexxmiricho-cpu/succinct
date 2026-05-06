'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  avatar: string;
  avatarAlt: string;
  stars: number;
}

const testimonials: Testimonial[] = [
{
  name: 'Grace Wanjiku',
  role: 'Head Teacher',
  organization: 'St. Mary\'s Primary School, Nairobi',
  quote: 'The school bus tracking system has completely transformed how we manage student safety. Parents used to call constantly — now they just check the app. It works even in areas with no mobile signal.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5c84a8b-1772712488589.png",
  avatarAlt: 'Kenyan woman school administrator smiling in professional setting',
  stars: 5
},
{
  name: 'James Kamau',
  role: 'Fleet Operations Manager',
  organization: 'Equity Bank Kenya',
  quote: 'We\'ve tracked over 80 vehicles across all our branches using Succinct\'s satellite system. No SIM cards means no airtime costs and no dead zones. The ROI was evident within the first month.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a2d9e96c-1767709454729.png",
  avatarAlt: 'Kenyan man in business attire at office desk',
  stars: 5
},
{
  name: 'Dr. Amina Hassan',
  role: 'Emergency Response Coordinator',
  organization: 'Kenya Red Cross Society',
  quote: 'The satellite radio communication system has been invaluable during disaster response. We can coordinate across remote areas where no cellular network exists. It\'s saved lives in Turkana and Marsabit.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1823d71c5-1763299188021.png",
  avatarAlt: 'African woman medical professional in humanitarian organization uniform',
  stars: 5
}];


const clientLogos = [
{ name: 'Equity Bank', category: 'Vehicle Tracking' },
{ name: 'Kenya Red Cross', category: 'Radio Comms' },
{ name: 'I&M Bank', category: 'Asset Tracking' },
{ name: 'KCB', category: 'Vehicle Tracking' },
{ name: 'Ministry of Defence', category: 'Asset Tagging' },
{ name: 'Africa Union Security', category: 'Radio Comms' }];


export default function SocialProofSection() {
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
    <section id="social-proof" className="py-20 sm:py-28 bg-muted/40" aria-labelledby="social-proof-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14 reveal opacity-100">
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5">
            Trusted By Kenya
          </span>
          <h2 id="social-proof-heading" className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tighter leading-tight mt-3">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, index) =>
          <article
            key={t.name}
            className="bg-white rounded-2xl p-6 border border-border shadow-card reveal opacity-100 flex flex-col"
            style={{ animationDelay: `${index * 120}ms` }}
            aria-label={`Testimonial from ${t.name}`}>

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, i) =>
              <Icon key={i} name="StarIcon" size={14} variant="solid" className="text-amber-400" />
              )}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={t.avatar}
                  alt={t.avatarAlt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover" />

                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}, {t.organization}</div>
                </div>
              </div>
            </article>
          )}
        </div>

        {/* Client Logos Strip */}
        <div className="reveal opacity-100">
          <p className="text-center text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-6">
            Trusted by leading organizations across Kenya
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clientLogos.map((client) =>
            <div
              key={client.name}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-border">

                <div className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                <span className="font-semibold text-foreground text-sm">{client.name}</span>
                <span className="text-muted-foreground text-xs">· {client.category}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}