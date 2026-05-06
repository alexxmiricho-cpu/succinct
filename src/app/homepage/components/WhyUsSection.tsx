'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: 380, suffix: '+', label: 'Assets Tracked', icon: 'MapPinIcon' },
  { value: 94, suffix: '+', label: 'Schools Served', icon: 'AcademicCapIcon' },
  { value: 99.9, suffix: '%', label: 'Uptime', icon: 'SignalIcon' },
  { value: 45, suffix: '', label: 'Counties Covered', icon: 'GlobeAltIcon' },
];

const features = [
  {
    icon: 'SignalIcon',
    title: 'No SIM Required',
    description: 'Pure satellite connectivity — works anywhere in Kenya, even in remote areas with no mobile coverage.',
  },
  {
    icon: 'MapPinIcon',
    title: 'Real-Time Satellite Tracking',
    description: 'Live location updates every few seconds via our dedicated satellite network — not dependent on cellular infrastructure.',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Kenya-Wide Coverage',
    description: 'Covering all 47 counties from Mandera to Mombasa — if you can see the sky, we can track it.',
  },
  {
    icon: 'ClockIcon',
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and customer support. Our team is always on standby for your emergencies.',
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);
  const displayCount = stat.value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-3">
        <Icon name={stat.icon as 'MapPinIcon'} size={22} variant="solid" className="text-accent" />
      </div>
      <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter stat-counter">
        {displayCount}{stat.suffix}
      </div>
      <div className="text-white/60 text-sm font-medium mt-1">{stat.label}</div>
    </div>
  );
}

export default function WhyUsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('active');
        }
      });

      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && !statsActive) {
          setStatsActive(true);
        }
      }
    };

    window.addEventListener('scroll', handleReveal, { passive: true });
    handleReveal();
    return () => window.removeEventListener('scroll', handleReveal);
  }, [statsActive]);

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-primary overflow-hidden" aria-labelledby="why-us-heading">
      {/* Stats Strip */}
      <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal opacity-100">
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10">
            Why Choose Us
          </span>
          <h2 id="why-us-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tighter leading-tight mt-3">
            Trusted Across Kenya
            <br />
            <span className="text-white/50 font-light text-2xl sm:text-4xl">Proven. Reliable. Satellite-Native.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 rounded-2xl overflow-hidden mb-16 reveal opacity-100">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`${i < stats.length - 1 ? 'border-r border-white/10' : ''} ${i >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''}`}>
              <StatCard stat={stat} active={statsActive} />
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 reveal opacity-100 hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <Icon name={feature.icon as 'SignalIcon'} size={20} variant="solid" className="text-accent" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission paragraph */}
        <div className="mt-14 text-center max-w-3xl mx-auto reveal opacity-100">
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Succinct Integrated Systems was founded with a singular mission: to bring satellite-grade intelligence to every Kenyan business, school, and family, regardless of location. We believe that safety and connectivity should not be limited by cellular infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}