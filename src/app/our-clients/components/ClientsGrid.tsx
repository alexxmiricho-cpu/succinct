'use client';

import React, { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ClientEntry {
  name: string;
  sector?: string;
}

interface ClientCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  clients: ClientEntry[];
  accentColor: string;
}

const clientCategories: ClientCategory[] = [
  {
    id: 'vehicle-tracking',
    icon: 'TruckIcon',
    title: 'Vehicle Tracking & Immobilizer Service',
    description: 'Leading financial institutions and security firms trusting our satellite vehicle tracking for their fleets across Kenya.',
    accentColor: 'text-blue-600',
    clients: [
      { name: 'Equity Bank', sector: 'Banking & Finance' },
      { name: 'Credit Bank Limited', sector: 'Banking & Finance' },
      { name: 'I&M Bank', sector: 'Banking & Finance' },
      { name: 'KCB', sector: 'Banking & Finance' },
      { name: 'Wildlife Foundation', sector: 'Conservation' },
      { name: 'Jubilee Insurance Holdings Ltd', sector: 'Insurance' },
      { name: 'BM Security', sector: 'Security Services' },
      { name: 'Fincredit Uganda', sector: 'Microfinance' },
      { name: 'Rembo SACCO', sector: 'SACCO' },
      { name: 'Matibabu Foundation Hospital', sector: 'Hospital' },
      { name: 'Kenya Commercial Bank', sector: 'Banking' },


    ],
  },
  {
    id: 'satellite-radio',
    icon: 'SignalIcon',
    title: 'Satellite Radio Call Services',
    description: 'Emergency services, humanitarian organizations, and international security bodies relying on our satellite radio for critical communications.',
    accentColor: 'text-red-600',
    clients: [
      { name: 'Kenya Red Cross Society', sector: 'Humanitarian' },
      { name: 'Emergency Medical Services — Kenya Red Cross (EMS)', sector: 'Emergency Medicine' },
      { name: 'Africa Union Security Department / UN Security Unit', sector: 'International Security' },
      { name: 'AAR Healthcare', sector: 'Healthcare' },
      { name: 'Government of South-Sudan ', sector: 'Satellite Internet' },

    ],
  },
  {
    id: 'asset-tagging',
    icon: 'ArchiveBoxIcon',
    title: 'Asset Tagging Services',
    description: 'Government ministries and leading organizations securing their physical assets with our satellite-grade tagging system.',
    accentColor: 'text-emerald-600',
    clients: [
      { name: 'Ministry of Defence (DESACCO)', sector: 'Government' },
      { name: 'Red Cross Society of Kenya', sector: 'Humanitarian' },
      { name: 'AGRA Africa', sector: 'Agriculture Development' },
      { name: 'Schindler Lifts Ltd', sector: 'Engineering' },
      { name: 'Muthaiga Golf Club', sector: 'Sports' },
      { name: 'Bank of Africa', sector: 'Banking' },


    ],
  },
];

function ClientCard({ client, index }: { client: ClientEntry; index: number }) {
  const initials = client.name
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <div
      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-accent/40 hover:shadow-card transition-all duration-300 group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Avatar */}
      <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
        <span className="font-bold text-primary text-xs group-hover:text-accent transition-colors">{initials}</span>
      </div>
      <div className="min-w-0">
        <div className="font-semibold text-foreground text-sm leading-snug truncate">{client.name}</div>
        {client.sector && (
          <div className="text-muted-foreground text-xs mt-0.5">{client.sector}</div>
        )}
      </div>
      <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-accent flex-shrink-0 ml-auto" />
    </div>
  );
}

export default function ClientsGrid() {
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
    <section className="py-16 sm:py-24 bg-background" aria-labelledby="clients-grid-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal opacity-100">
          <h2 id="clients-grid-heading" className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tighter">
            Organizations That Trust Us
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-2xl mx-auto">
            Our clients span banking, government, humanitarian, security, and healthcare sectors — all requiring the reliability that only satellite can deliver.
          </p>
        </div>

        <div className="space-y-12">
          {clientCategories.map((category, catIndex) => (
            <article
              key={category.id}
              id={category.id}
              className="reveal opacity-100"
              style={{ animationDelay: `${catIndex * 150}ms` }}
              aria-labelledby={`client-cat-${category.id}`}
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-6 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Icon name={category.icon as 'TruckIcon'} size={22} variant="outline" className="text-white" />
                </div>
                <div>
                  <h3
                    id={`client-cat-${category.id}`}
                    className="font-bold text-foreground text-lg sm:text-xl"
                  >
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 max-w-xl">{category.description}</p>
                </div>
              </div>

              {/* Clients Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.clients.map((client, i) => (
                  <ClientCard key={client.name} client={client} index={i} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}