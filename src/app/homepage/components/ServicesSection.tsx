'use client';

import React, { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

const services: Service[] = [
  {
    icon: 'TruckIcon',
    title: 'School Fleet Management System',
    description: 'Parents log in via app or web to track school buses in real time. Frequent location alerts via satellite — seamless, no delays, no SIM required.',
    badge: 'Most Popular',
  },
  {
    icon: 'BellAlertIcon',
    title: 'Automatic SMS Bus Alerts for Parents',
    description: 'Auto SMS to parents showing exact bus location and ETA. Peace of mind for every school journey — parents always know where their child is.',
  },
  {
    icon: 'ComputerDesktopIcon',
    title: 'Laptop Tracker & Remote Wipe',
    description: 'Professional installation of laptop tracking and remote wipe technology. Recover stolen devices instantly and protect sensitive corporate data.',
    badge: 'Most Popular',

  },
  {
    icon: 'MapPinIcon',
    title: 'Satellite Asset Tracking',
    description: 'Track all assets from your phone. Ideal for Toyota Premio, Axio, Fielder, CX5, Harrier, TX, and Land Cruiser V8 owners. These cars are hotcakes for vandalism and theft. No SMS. No airtime. No credit needed.',
    badge: 'No SIM',
  },
  {
    icon: 'EyeIcon',
    title: 'Laptop Spyware Solutions',
    description: 'Advanced monitoring software for corporate and institutional laptop fleets. Monitor device usage, activity logs, and prevent data breaches remotely.',
  },
  {
    icon: 'SignalIcon',
    title: 'Satellite Radio Communication',
    description: 'FREE remote radio communication via satellite. No base station. No SIM. Unlimited coverage. Ideal for emergency services, NGOs, logistics, convoys, and tourism. Units available for hire.',
    badge: 'Free Setup',
  },
  {
    icon: 'ArchiveBoxIcon',
    title: 'Airline Baggage & Cargo Tracking',
    description: 'Real-time luggage and cargo location. Know exactly which country it\'s in, its check-in status, and who to contact. Eliminates misrouting. Only $1.50 per unit — no server, no hidden costs.',
    badge: 'Ksh. 1000/unit',
  },
  {
    icon: 'IdentificationIcon',
    title: 'Satellite Student ID Tags for Schools',
    description: 'Attach satellite tags to student ID cards. See real-time attendance — when students arrive and leave. Geo-locate students in emergencies. Contact: 0711 617 610.',
  },
  {
    icon: 'MegaphoneIcon',
    title: 'Mass Emergency Communication',
    description: 'Bulk communication for SACCOs, unions, clubs, churches, and schools during emergencies. Standard phones can be converted into satellite radio units.',
  },
  {
    icon: 'VehicleIcon',
    title: 'Succinct Travel Agencies',
    description: 'We redefine high-end travel by curating exclusive, tailor-made escapes where every detail is perfected, so you can simply arrive and indulge. Making your dream destination a reality today',
  },
];

export default function ServicesSection() {
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
    <section id="services" className="py-20 sm:py-28 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14 reveal opacity-100">
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5">
            Our Solutions
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tighter leading-tight mt-3">
            Satellite-Grade Services
            <br />
            <span className="text-muted-foreground font-light text-2xl sm:text-4xl">Built for Kenya</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Every solution works without SIM cards or base stations — powered entirely by satellite for true nationwide coverage across all 47 counties.
          </p>
        </div>

        {/* Services Grid — 3 cols desktop, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card group relative reveal opacity-100"
              style={{ animationDelay: `${index * 80}ms` }}
              aria-label={service.title}
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/25">
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                <Icon name={service.icon as 'TruckIcon'} size={22} variant="outline" className="text-primary group-hover:text-accent transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-foreground mb-2 leading-snug pr-12">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href="https://web.facebook.com/harold.omollo.1"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-3 transition-all duration-300 group/link"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}