'use client';

import React, { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface IndustryCategory {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  audiences: string[];
  color: string;
}

const industryCategories: IndustryCategory[] = [
  {
    id: 'parents-families',
    icon: 'HomeIcon',
    title: 'Parents & Families',
    subtitle: 'Child safety and school transport monitoring',
    color: 'from-rose-500/10 to-pink-500/5',
    audiences: [
      'Parents with children using school buses',
      'Parents who want real-time child location alerts',
      'Parents needing automatic SMS notifications for school transport',
      'Families concerned about child safety and emergency geo-location',
    ],
  },
  {
    id: 'schools',
    icon: 'AcademicCapIcon',
    title: 'Schools & Educational Institutions',
    subtitle: 'Student tracking, attendance, and transport safety',
    color: 'from-blue-500/10 to-indigo-500/5',
    audiences: [
      'School administrators',
      'Primary schools',
      'Secondary schools',
      'Learning institutions using school transport',
      'Schools using student ID satellite tags',
      'Institutions monitoring student attendance (check-in / check-out)',
      'Schools concerned about student safety and emergency tracking',
    ],
  },
  {
    id: 'fleet-transport',
    icon: 'TruckIcon',
    title: 'Fleet & Transport Operators',
    subtitle: 'Real-time fleet visibility and management',
    color: 'from-amber-500/10 to-orange-500/5',
    audiences: [
      'School transport providers',
      'Bus and van fleet owners',
      'Fleet management companies',
      'Logistics and convoy operators',
      'Transport companies needing real-time tracking and alerts',
    ],
  },
  {
    id: 'private-vehicles',
    icon: 'MapPinIcon',
    title: 'Private Vehicle Owners',
    subtitle: 'High-risk vehicles in Kenya — no SMS, no credit needed',
    color: 'from-teal-500/10 to-cyan-500/5',
    audiences: [
      'Toyota Premio owners',
      'Toyota Axio owners',
      'Toyota Fielder owners',
      'Mazda CX-5 owners',
      'Toyota Harrier owners',
      'Toyota Land Cruiser TX owners',
      'Toyota Land Cruiser V8 owners',
      'High-value private vehicle owners',
      'Car owners needing satellite asset tracking (no SMS, no credit)',
    ],
  },
  {
    id: 'businesses',
    icon: 'BriefcaseIcon',
    title: 'Businesses & Asset Owners',
    subtitle: 'Corporate asset protection and tracking',
    color: 'from-violet-500/10 to-purple-500/5',
    audiences: [
      'Companies with valuable physical assets',
      'Businesses needing satellite asset tagging',
      'Organizations tracking equipment, machinery, or vehicles',
      'Laptop owners needing laptop trackers, wipers, or spyware',
      'Corporate IT departments',
      'SMEs protecting mobile and digital assets',
    ],
  },
  {
    id: 'cyber-device',
    icon: 'ComputerDesktopIcon',
    title: 'Individuals & Organizations — Cyber / Device Security',
    subtitle: 'Laptop tracking, wiping, and surveillance',
    color: 'from-slate-500/10 to-gray-500/5',
    audiences: [
      'Laptop owners',
      'Corporates securing staff laptops',
      'Institutions needing laptop tracking, wiping, and surveillance',
      'Businesses monitoring device misuse or theft',
    ],
  },
  {
    id: 'emergency-radio',
    icon: 'SignalIcon',
    title: 'Emergency & Radio Communication Clients',
    subtitle: 'Satellite radio without SIM cards or base stations',
    color: 'from-red-500/10 to-rose-500/5',
    audiences: [
      'Emergency response teams',
      'Fire brigades',
      'County governments',
      'NGOs',
      'Logistics companies',
      'Convoy management teams',
      'Tourism operators',
      'Security teams',
      'Disaster response organizations',
      'Organizations needing satellite-only radio communication',
      'Clients needing radio calls without base stations, SIM cards, or coverage limits',
    ],
  },
  {
    id: 'events-security',
    icon: 'MicrophoneIcon',
    title: 'Events & Security Services',
    subtitle: 'Radio coordination for events and large gatherings',
    color: 'from-fuchsia-500/10 to-pink-500/5',
    audiences: [
      'Event planners',
      'Event managers',
      'Event security providers',
      'Organizations hiring or leasing radio communication equipment',
      'Large gatherings requiring secure radio coordination',
    ],
  },
  {
    id: 'airlines-aviation',
    icon: 'PaperAirplaneIcon',
    title: 'Airlines, Aviation & Cargo Companies',
    subtitle: 'Real-time luggage, cargo, and shipment tracking',
    color: 'from-sky-500/10 to-blue-500/5',
    audiences: [
      'Airline companies',
      'Airport operators',
      'Cargo handling companies',
      'Logistics firms handling international shipments',
      'Airlines tracking luggage and cargo',
      'Aviation companies needing real-time location, status, and recovery systems',
    ],
  },
  {
    id: 'institutions',
    icon: 'BuildingLibraryIcon',
    title: 'Institutions & Membership Organizations',
    subtitle: 'Mass communication for organized groups',
    color: 'from-emerald-500/10 to-green-500/5',
    audiences: [
      'SACCOs',
      'Unions',
      'Clubs',
      'Churches',
      'Schools (for mass communication)',
      'Training institutions (TVETs, colleges, STECs)',
      'Membership-based organizations needing mass emergency communication',
    ],
  },
  {
    id: 'mass-communication',
    icon: 'MegaphoneIcon',
    title: 'Mass Communication & Emergency Alert Users',
    subtitle: 'Bulk alerts and crisis coordination',
    color: 'from-orange-500/10 to-amber-500/5',
    audiences: [
      'Organizations needing bulk emergency alerts',
      'Groups converting phones into radio communication devices',
      'Institutions coordinating during crises or emergencies',
    ],
  },
];

export default function IndustriesGrid() {
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
    <section className="py-16 sm:py-24 bg-background" aria-labelledby="industries-grid-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal opacity-100">
          <h2 id="industries-grid-heading" className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tighter">
            Satellite Solutions for Every Sector
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-2xl mx-auto">
            Explore which industry category best describes your organization and see how our satellite solutions can work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industryCategories.map((category, index) => (
            <article
              key={category.id}
              id={category.id}
              className={`relative bg-gradient-to-br ${category.color} border border-border rounded-2xl p-6 sm:p-8 reveal opacity-100 hover:shadow-card-hover transition-all duration-500`}
              style={{ animationDelay: `${index * 80}ms` }}
              aria-labelledby={`industry-${category.id}-title`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon name={category.icon as 'HomeIcon'} size={20} variant="outline" className="text-primary" />
                </div>
                <div>
                  <h3
                    id={`industry-${category.id}-title`}
                    className="font-bold text-foreground text-base sm:text-lg leading-snug"
                  >
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{category.subtitle}</p>
                </div>
              </div>

              {/* Audience Tags */}
              <div className="flex flex-wrap gap-2">
                {category.audiences.map((audience) => (
                  <span
                    key={audience}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-border text-foreground text-xs font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    {audience}
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <a
                href="https://wa.me/254711617610?text=Hello%2C%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-5 hover:gap-3 transition-all duration-300"
                aria-label={`Get satellite solutions for ${category.title}`}
              >
                Get Solutions for This Sector
                <Icon name="ArrowRightIcon" size={14} variant="outline" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}