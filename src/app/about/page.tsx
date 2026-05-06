import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './components/AboutHero';
import AboutDetails from './components/AboutDetails';
import AboutCTA from './components/AboutCTA';
import FloatingWhatsApp from '../homepage/components/FloatingWhatsApp';
import MobileStickyBar from '../homepage/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'About Us | Succinct Integrated Systems',
  description: 'Learn about Succinct Integrated Systems, our vision, mission, and commitment to innovative technology solutions. Meet our CEO Harold Omondi.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <AboutHero />
      <AboutDetails />
      <AboutCTA />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}