'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/254711617610?text=Hello%2C%20I'm%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2.5 bg-accent text-primary font-bold px-4 py-3.5 rounded-full shadow-glow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 whatsapp-float"
      aria-label="Chat with Succinct Integrated Systems on WhatsApp"
    >
      <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
      <span className="hidden sm:block text-sm">WhatsApp Us</span>
    </a>
  );
}