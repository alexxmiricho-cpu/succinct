'use client';

import React, { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const prospects = [
  { name: 'KWFT', sector: 'Microfinance' },
  { name: 'Muthaiga Golf Club', sector: 'Recreation' },
  { name: 'Kenya Railways Golf Club', sector: 'Recreation' },
  { name: 'SASRA', sector: 'Regulation' },
  { name: 'Kenya Power & Lighting', sector: 'Utilities' },
  { name: 'ICT Authority', sector: 'Government' },
  { name: 'Your Organization or Business', sector: 'Could be next' },
];

export default function ProspectSection() {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals?.forEach((el) => {
        const rect = el?.getBoundingClientRect();
        if (rect?.top < window.innerHeight * 0.92) {
          el?.classList?.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleReveal, { passive: true });
    handleReveal();
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-muted/40" aria-labelledby="prospects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 reveal opacity-100">
          <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5">
            <Icon name="RocketLaunchIcon" size={12} variant="solid" />
            Growing Pipeline
          </span>
          <h2 id="prospects-heading" className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tighter mt-2">
            Potential Prospects
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto">
            Organizations we are actively engaging — and where we see a clear fit for our satellite solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal opacity-100">
          {prospects?.map((prospect, index) => (
            <div
              key={prospect?.name}
              className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${
                prospect?.name === 'Your Organization or Business' ?'border-accent/40 bg-accent/5 hover:bg-accent/10' :'border-border bg-white hover:border-accent/30 hover:shadow-card'
              }`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                prospect?.name === 'Your Organization or Business' ?'bg-accent/15' :'bg-primary/8'
              }`}>
                {prospect?.name === 'Your Organization or Business' ? (
                  <Icon name="PlusIcon" size={18} variant="outline" className="text-accent" />
                ) : (
                  <Icon name="BuildingOffice2Icon" size={18} variant="outline" className="text-primary" />
                )}
              </div>
              <div>
                <div className={`font-semibold text-sm leading-snug ${
                  prospect?.name === 'Your Organization or Business' ? 'text-accent' : 'text-foreground'
                }`}>
                  {prospect?.name}
                </div>
                <div className="text-muted-foreground text-xs mt-0.5">{prospect?.sector}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center reveal opacity-100">
          <p className="text-muted-foreground text-sm">
            Also actively pursuing opportunities in{' '}
            <strong className="text-foreground">Bulk SMS Services</strong> —
            now waiting for any low-hanging fruit 🍓🍑 to fall our way.
          </p>
        </div>
      </div>
    </section>
  );
}