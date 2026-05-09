import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const quickLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'Industries', href: '/industries-we-serve' },
  { label: 'Our Clients', href: '/our-clients' },
  { label: 'Contact', href: '/homepage#contact' },
  { label: 'TikTok', href: 'https://vm.tiktok.com/ZS9FUUNyXaJvg-7jN18/' },
  { label: 'Facebook', href: 'https://web.facebook.com/harold.omollo.1' },



  
];

const serviceLinks = [
  { label: 'School Fleet Management', href: '/homepage#services' },
  { label: 'Satellite Asset Tracking', href: '/homepage#services' },
  { label: 'Radio Communication', href: '/homepage#services' },
  { label: 'Laptop Tracker & Wipe', href: '/homepage#services' },
  { label: 'Airline Baggage Tracking', href: '/homepage#services' },
  { label: 'Student ID Tags', href: '/homepage#services' },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <AppLogo size={40} />
              <span className="font-bold text-white text-base leading-tight">
                <span className="block text-accent text-xs font-semibold tracking-widest uppercase">Succinct</span>
                <span className="block">Integrated Systems</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Kenya&apos;s leading satellite solutions provider. Real-time tracking, fleet management, and radio communication — no SIM, no limits.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://web.facebook.com/harold.omollo.1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                aria-label="Visit our Facebook page"
              >
                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                              </svg>
              </a>
              <a
                href="https://wa.me/254711617610?text=Hello%2C%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} variant="outline" />
              </a>
              <a
                href="https://vm.tiktok.com/ZS9FUUNyXaJvg-7jN18/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                aria-label="Visit our TikTok profile"
              >
                <Icon name="MusicalNoteIcon" size={16} variant="outline" />
              </a>
              <a
                href="tel:+254711617610"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                aria-label="Call us at 0711 617 610"
              >
                <Icon name="PhoneIcon" size={16} variant="outline" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Succinct Integrated Systems. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1 text-white/40 text-xs">
            <Icon name="MapPinIcon" size={12} variant="outline" />
            <span>Nairobi, Kenya</span>
            <span className="mx-2">·</span>
            <a href="tel:+254711617610" className="hover:text-accent transition-colors">0711 617 610</a>
          </div>
        </div>
      </div>
    </footer>
  );
}