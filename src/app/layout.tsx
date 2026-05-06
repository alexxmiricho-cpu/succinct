import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Succinct Integrated Systems | Satellite Tracking, Fleet Management & Radio Communication Kenya',
  description: "Kenya's leading satellite solutions provider. Real-time vehicle tracking, school bus fleet management, luggage tracking, satellite radio comms & more. No SIM. No base station. Call 0711617610.",
  keywords: 'satellite tracking Kenya, school bus tracking system Kenya, vehicle tracker Nairobi, fleet management system Kenya, laptop tracker Kenya, satellite radio communication Kenya, asset tracking Kenya, student ID tracking, no SIM tracker Kenya',
  openGraph: {
    title: 'Succinct Integrated Systems | Satellite Tracking Kenya',
    description: "Kenya's leading satellite solutions provider. Real-time tracking, no SIM required. Call 0711617610.",
    type: 'website',
    locale: 'en_KE',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630, alt: 'Succinct Integrated Systems - Satellite Solutions Kenya' }],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Succinct Integrated Systems',
              description: "Kenya's leading satellite solutions provider offering real-time vehicle tracking, school bus fleet management, satellite radio communication, and asset tracking.",
              telephone: '+254711617610',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Nairobi',
                addressCountry: 'KE',
              },
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              sameAs: ['https://www.facebook.com/SuccinctIntegratedSystems'],
              areaServed: 'Kenya',
              serviceType: ['Satellite Tracking', 'Fleet Management', 'Radio Communication', 'Asset Tracking'],
            }),
          }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fsuccinctis7331back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}