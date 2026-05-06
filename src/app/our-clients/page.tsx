import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientsHero from './components/ClientsHero';
import ClientsGrid from './components/ClientsGrid';
import ProspectSection from './components/ProspectSection';
import ClientsCTA from './components/ClientsCTA';
import FloatingWhatsApp from '../homepage/components/FloatingWhatsApp';
import MobileStickyBar from '../homepage/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Our Clients | Succinct Integrated Systems Kenya',
  description: 'Succinct Integrated Systems serves Equity Bank, KCB, I&M Bank, Kenya Red Cross, Africa Union Security, Ministry of Defence, AAR, and more. Trusted satellite solutions across Kenya.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/our-clients`,
  },
  openGraph: {
    title: 'Our Clients | Succinct Integrated Systems Kenya',
    description: 'Trusted by Equity Bank, Kenya Red Cross, Africa Union Security, Ministry of Defence, and more for satellite tracking and radio communication in Kenya.',
    type: 'website',
  },
};

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <ClientsHero />
      <ClientsGrid />
      <ProspectSection />
      <ClientsCTA />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}