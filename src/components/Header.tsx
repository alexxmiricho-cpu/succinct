'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/homepage#services' },
  { label: 'Why Us', href: '/homepage#why-us' },
  { label: 'Industries', href: '/industries-we-serve' },
  { label: 'Clients', href: '/our-clients' },
  { label: 'Contact', href: '/homepage#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleMenuClose = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/homepage"
            className="flex items-center gap-2.5 group"
            aria-label="Succinct Integrated Systems - Home"
          >
            <AppLogo size={36} className="flex-shrink-0" />
            <span className="font-bold text-white text-sm sm:text-base leading-tight hidden sm:block">
              <span className="block text-accent text-xs font-semibold tracking-widest uppercase">Succinct</span>
              <span className="block">Integrated Systems</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks?.map((link) => (
              <Link key={link?.label} href={link?.href} className="nav-link">
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://web.facebook.com/harold.omollo.1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent transition-colors"
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
              {/* <Icon name="GlobeAltIcon" size={20} variant="outline" /> */}
            </a>
            <a
              href="https://wa.me/254711617610?text=Hello%2C%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent text-primary font-bold text-sm px-5 py-2.5 rounded-full hover:bg-accent/90 transition-all duration-300 shadow-glow"
              aria-label="Get a free consultation via WhatsApp"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
              Get Free Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-xl flex flex-col pt-24 px-6 mobile-menu-open"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.label}
                href={link?.href}
                onClick={handleMenuClose}
                className="text-white/80 hover:text-accent text-2xl font-semibold py-4 border-b border-white/10 transition-colors duration-200"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://wa.me/254711617610?text=Hello%2C%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMenuClose}
              className="flex items-center justify-center gap-2 bg-accent text-primary font-bold text-base px-6 py-4 rounded-full shadow-glow"
              aria-label="Get a free consultation via WhatsApp"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
              Get Free Consultation
            </a>
            <a
              href="tel:+254711617610"
              onClick={handleMenuClose}
              className="flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-base px-6 py-4 rounded-full"
              aria-label="Call us at 0711 617 610"
            >
              <Icon name="PhoneIcon" size={20} variant="outline" />
              Call 0711 617 610
            </a>
          </div>
        </div>
      )}
    </>
  );
}