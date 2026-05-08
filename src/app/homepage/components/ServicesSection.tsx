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
    description: 'Affordable and reliable school bus tracking for safer student transport. Cheapest satellite-powered fleet management system allowing parents to log in via app or web to track buses in real time. Cost-effective, long-lasting, and easily available with simplest global coverage — no SIM, no delays.',
    badge: 'Most Popular',
  },
  {
    icon: 'BellAlertIcon',
    title: 'Automatic SMS Bus Alerts for Parents',
    description: 'Reliable and cost-effective automatic bus location alerts. Cheapest SMS alert system sending parents real-time bus location and ETA updates. Affordable, long-lasting, and easily available solution that gives parents peace of mind on every school journey.',
  },
  {
    icon: 'ComputerDesktopIcon',
    title: 'Laptop Tracker & Remote Wipe',
    description: 'Affordable and reliable laptop tracking with instant remote wipe. Cheapest professional laptop security solution for tracking stolen devices and remotely wiping sensitive data. Cost-effective, long-lasting, and easily available protection for corporate and institutional use worldwide.',
    badge: 'Most Popular',

  },
  {
    icon: 'MapPinIcon',
    title: 'Motor Vehicle Tracking and Immobilizers',
    description: 'Cheapest GPS-based monitoring with real-time location updates, theft prevention, and engine immobilization. Ideal for Toyota Premio, Axio, Fielder, CX5, Harrier, TX, and Land Cruiser V8 owners. These cars are hotcakes for vandalism and theft. Cost-effective, long-lasting, and easily available for personal, fleet, and commercial vehicles worldwide.',
    badge: 'No SIM',
  },
  {
    icon: 'EyeIcon',
    title: 'Laptop Spyware Solutions',
    description: 'Reliable and cost-effective laptop monitoring for organizations. We offer affordable advanced monitoring software for idividual, corporate and institutional laptop fleets. Easily available, long-lasting solution to track usage, monitor activity logs, and prevent data breaches using simplest global deployment.',
  },
  {
    icon: 'SatelliteDishIcon',
    title: 'Satellite GPS Radio Communication',
    description: 'Get the cheapest remote radio communication via satellite. Reliable, cost-effective voice communication using GPS radio technology. No SIM required, easily available, long-lasting, and ideal for remote teams, logistics, emergency response, and field operations.',
    badge: 'Free Setup',
  },
  {
    icon: 'SignalIcon',
    title: 'Remote Internet Connections',
    description: 'Affordable remote internet connectivity anywhere on the planet. Cheapest satellite-based internet for off-grid locations. Reliable, cost-effective, long-lasting connectivity with global coverage—perfect for NGOs, rural communities, expeditions, and emergency deployments.',
    badge: 'Free Setup',
  },
  {
    icon: 'ArchiveBoxIcon',
    title: 'Airline Baggage & Cargo Tracking',
    description: 'Cheapest and most reliable real-time baggage and cargo tracking. Affordable satellite-based tracking that shows exact cargo and luggage location globally. Cost-effective, long-lasting, and easily available — no server required, no hidden costs, simplest global logistics visibility.',
    badge: 'Ksh. 1000/unit',
  },
  {
    icon: 'IdentificationIcon',
    title: 'Satellite Student ID Tags for Schools',
    description: 'Affordable and reliable satellite student ID tracking. Cheapest student ID satellite tags for real-time attendance monitoring and emergency geo-location. Cost-effective, long-lasting, and easily available solution for schools with simplest global coverage.',
  },
  {
    icon: 'MegaphoneIcon',
    title: 'Mass Emergency Communication',
    description: 'Reliable and cost-effective mass emergency communication system. Cheapest bulk communication platform for SACCOs, unions, churches, schools, and organizations. Easily available, long-lasting system that converts standard phones into satellite radio units with simplest global reach.',
  },
  {
    icon: 'CalendarDaysIcon',
    title: 'Online Booking System, For Tours and Travel',
    description: 'Affordable and reliable  global traveling agency, with online booking for tours and travel services. We offer the cheapest flights globally, and simplest global booking solutions for tours, transport, and travel experiences. Cost-effective, long-lasting, and easily available platforms that help customers book faster while helping operators manage reservations efficiently worldwide. IATA certified',
  },
  {
    icon: 'MegaphoneIcon',
    title: 'Community Live Broadcast',
    description: 'Reliable and affordable community-wide live broadcasting. Get the simplest global broadcasting solution for announcements, education, and emergency alerts. Cost-effective, long-lasting, and easily available for rural communities, institutions, and local organizations.',
  },
  {
    icon: 'HeartIcon',
    title: 'Community Health Management Systems',
    description: 'Affordable and reliable digital health management for communities. Cost-effective, long-lasting health systems for patient tracking, reporting, and coordination. Easily available solutions designed for NGOs, clinics, and rural health programs with reliable global support.',
  },
  {
    icon: 'AnchorIcon',
    title: 'Satellite Fishing Technology',
    description: 'Cheapest and most reliable satellite technology for fishing operations. Affordable, long-lasting satellite solutions for vessel tracking, safety alerts, and communication at sea. Cost-effective and easily available, supporting fishermen with reliable global coverage.',
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
            <span className="text-muted-foreground font-light text-2xl sm:text-4xl"></span>
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