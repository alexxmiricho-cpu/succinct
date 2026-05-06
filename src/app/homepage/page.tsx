import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import IndustriesStrip from './components/IndustriesStrip';
import SocialProofSection from './components/SocialProofSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyBar from './components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Succinct Integrated Systems | Satellite Tracking, Fleet Management & Radio Communication Kenya',
  description: "Kenya's leading satellite solutions provider. Real-time vehicle tracking, school bus fleet management, luggage tracking, satellite radio comms & more. No SIM. No base station. Call 0711617610.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/homepage`,
  },
};

export default function HomepagePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <IndustriesStrip />
      <SocialProofSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}