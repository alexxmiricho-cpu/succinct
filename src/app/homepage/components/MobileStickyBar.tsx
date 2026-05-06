'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-primary border-t border-white/10 px-4 py-3 flex gap-3">
      <a
        href="tel:+254711617610"
        className="flex-1 flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm py-3 rounded-xl"
        aria-label="Call us at 0711 617 610"
      >
        <Icon name="PhoneIcon" size={16} variant="solid" />
        Call Now
      </a>
      <a
        href="https://wa.me/254711617610?text=Hello%2C%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-accent text-primary font-bold text-sm py-3 rounded-xl shadow-glow"
        aria-label="Chat with us on WhatsApp"
      >
        <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
        WhatsApp
      </a>
    </div>
  );
}