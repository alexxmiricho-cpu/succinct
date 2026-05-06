'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
 
 export default function AboutHero() {
   return (
     <section
       className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden"
       aria-label="Our Clients hero section"
     >
       <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/60" aria-hidden="true" />
       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
         <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10">
           <Icon name="StarIcon" size={12} variant="solid" />
           Partner with Us
         </span>
         <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-6">
           About 
           <span className="gradient-text"> Us </span>
         </h1>
         <p className="text-white/70 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            At Succinct, We believe that the most powerful technologies are those that serve the many, not just the few. Our journey began with a simple but ambitious vision: to transform the world into a global village powered by machine learning solutions that don't just innovate, but endure for posterity.
         </p>
         <div className="flex flex-wrap justify-center gap-3 mt-8">
           {['Providng Current & Future Solutions', 'Innovations', 'Empowering Future Generations', 'Catalytic Problem Solvers']?.map((badge) => (
             <span key={badge} className="px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold">
               {badge}
             </span>
           ))}
         </div>
       </div>
     </section>
   );
 }