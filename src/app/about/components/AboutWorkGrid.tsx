import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  href: string;
  linkLabel: string;
  color: string;
}

const workItems: WorkItem[] = [
  {
    id: 'satellite-asset-tracking',
    title: 'Satellite Asset Tracking',
    subtitle: 'Real-time visibility for remote fleets',
    description: 'Installed end-to-end satellite trackers for transport and logistics fleets, enabling monitoring where GSM coverage is limited.',
    imageSrc: '/assets/images/asset10.jpeg',
    href: 'https://www.tiktok.com/@harold.omondi.omo/photo/7333507326344842502?is_from_webapp=1&sender_device=pc&web_id=7618496537266341383',
    linkTarget: '_blank',
    linkLabel: 'Explore Fleet Solutions',
    color: 'from-blue-500/10 to-indigo-500/5',
  },
  {
    id: 'emergency-communications',
    title: 'Emergency Communications',
    subtitle: 'Reliable satellite radios for crisis response',
    description: 'Delivered satellite radio systems and coordination support for emergency teams, events, and disaster response operations. Get quality radios using satellite technology.',
    imageSrc: '/assets/images/asset6.jpeg',
    href: 'https://web.facebook.com/share/v/18wSh25vuP/',
    linkTarget: '_blank',
    linkLabel: 'View Communication Projects',
    color: 'from-red-500/10 to-rose-500/5',
  },
  {
    id: 'cyber-device-security',
    title: 'Device Security & Tracking',
    subtitle: 'Laptop tracking, wiping, and recovery',
    description: 'Implemented device security services for enterprises, including tracking, remote wipe, and digital asset protection.',
    imageSrc: '/assets/images/asset5.jpeg',
    href: 'https://web.facebook.com/share/p/18SHHG4Rnq/',
    linkTarget: '_blank',
    linkLabel: 'Secure Your Devices',
    color: 'from-teal-500/10 to-cyan-500/5',
  },
  {
    id: 'logistics-visibility',
    title: 'Logistics Visibility',
    subtitle: 'Connected supply chains with satellite intelligence',
    description: 'Built tailored solutions for logistics and cargo operators to track shipments and vehicles across long distances.',
    imageSrc: '/assets/images/asset9.jpeg',
    href: 'https://www.tiktok.com/@harold.omondi.omo/photo/7399666358000094470?is_from_webapp=1&sender_device=pc&web_id=7618496537266341383',
    linkTarget: '_blank',
    linkLabel: 'Discover Logistics Support',
    color: 'from-amber-500/10 to-orange-500/5',
  },
  {
    id: 'logistics-visibility',
    title: 'Fleet management System',
    subtitle: 'Parents can locate their child and get frequent alerts',
    description: 'Get our fleet management system where parents can log in and locate their kids and get frequent alerts on their phones semalessly through our satellite platform.',
    imageSrc: '/assets/images/asset4.jpeg',
    href: 'https://web.facebook.com/share/p/1Cei5E24iL/',
    linkTarget: '_blank',
    linkLabel: 'Discover Fleet management',
    color: 'from-amber-500/10 to-orange-500/5',
  },
  {
    id: 'logistics-visibility',
    title: 'Hotspot Fishing Technology (Internet Fishing)',
    subtitle: 'using Internet to fish',
    description: 'Our fishing communities can now use Internet to Fish by providing condusive and attractive colours to fish,see school of fish under water via their phones,change any light of choice,play ringtones to attract fish,record areas with highest fish occurrence plus much more as you can see above.This technology is not an innovation but NEW invention which you can only find in JKUAT.We are now ahead of developed countries on this technology..',
    imageSrc: '/assets/images/image.png',
    href: 'https://web.facebook.com/share/v/1GYkzuB6uB/',
    linkTarget: '_blank',
    linkLabel: 'Discover more',
    color: 'from-amber-500/10 to-orange-500/5',
  },
];

export default function AboutWorkGrid() {
  return (
    <section className="py-16 sm:py-24 bg-background" aria-labelledby="about-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal opacity-100">
          <h2 id="about-work-heading" className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tighter">
            Work We’ve Delivered and Services We Provide
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-2xl mx-auto">
            Browse a selection of real projects and service offerings that showcase our expertise in satellite tracking, emergency communications, device security, and logistics visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workItems.map((item, index) => (
            <article
              key={item.id}
              className={`group relative bg-gradient-to-br ${item.color} border border-border rounded-2xl overflow-hidden shadow-sm reveal opacity-100 hover:shadow-card-hover transition-all duration-500`}
              style={{ animationDelay: `${index * 80}ms` }}
              aria-labelledby={`work-${item.id}-title`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 sm:p-8 bg-background/80 backdrop-blur-sm">
                <div className="mb-4">
                  <h3 id={`work-${item.id}-title`} className="font-bold text-foreground text-xl sm:text-2xl leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.subtitle}</p>
                </div>
                <p className="text-foreground/85 text-sm leading-relaxed mb-5">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-3 transition-all duration-300"
                  aria-label={item.linkLabel}
                >
                  {item.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
