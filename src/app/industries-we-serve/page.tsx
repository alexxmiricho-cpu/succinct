import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndustriesHero from './components/IndustriesHero';
import IndustriesGrid from './components/IndustriesGrid';
import IndustriesCTA from './components/IndustriesCTA';
import FloatingWhatsApp from '../homepage/components/FloatingWhatsApp';
import MobileStickyBar from '../homepage/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Industries We Serve | Succinct Integrated Systems Kenya',
  description: 'Succinct Integrated Systems serves schools, fleet operators, government agencies, NGOs, airlines, SACCOs, emergency services, and more across Kenya with satellite tracking and radio communication.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/industries-we-serve`,
  },
  openGraph: {
    title: 'Industries We Serve | Succinct Integrated Systems Kenya',
    description: 'Satellite solutions for schools, transport, government, NGOs, airlines, events, and more across Kenya.',
    type: 'website',
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesCTA />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}