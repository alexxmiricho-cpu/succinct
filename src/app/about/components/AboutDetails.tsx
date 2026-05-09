'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutDetails() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* CEO Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Meet Our CEO</h2>
          <div className="flex flex-col items-center gap-6">
            <AppImage
              src="/assets/images/asset1.jpeg"
              alt="Harold Omondi - CEO of Succinct Integrated Systems"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-primary">CEO/Founder: Dr,Hon Harold Omondi Omollo PhD,Hsc</h3>
            <p className="text-lg text-text-secondary max-w-2xl">
              Leading Succinct Integrated Systems with a vision to innovate and provide cutting-edge technology solutions.
            </p>
          </div>
        </div>

        {/* CTO & CFO Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Meet the Team</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-12">

            {/* CTO */}
            <div className="flex flex-col items-center gap-6">
              <AppImage
                src="/assets/images/asset3.jpeg"
                alt="CTO of Succinct Integrated Systems"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-primary">BCom. Finance & Administration Manager: Herine Adhiambo</h3>
              <p className="text-lg text-text-secondary max-w-sm">
                Managing the financial strategy and ensuring the fiscal health of Succinct Integrated Systems.
              </p>

            </div>

            {/* CFO */}
            <div className="flex flex-col items-center gap-6">
              <AppImage
                src="/assets/images/asset2.jpeg"
                alt="CFO of Succinct Integrated Systems"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-primary">Operations Manager: Dickens Ojijo</h3>
              <p className="text-lg text-text-secondary max-w-sm">
                Oversees the day-to-day running of a business, ensuring processes, people, and resources work efficiently to meet organizational goals.
               </p>
            </div>

          </div>
        </div>

        {/* Vision, Mission, Goal */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
            <p className="text-text-secondary">
              To be a global village machine learning solutions provider through application of leading Innovation and inventions for posterity.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
            <p className="text-text-secondary">
              To provide current and future solutions founded on new technologies. <br/>We ensure that the "future" is accessible to everyone today.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4">Goal</h3>
            <p className="text-text-secondary">
              To mainstream technology for posterity within communities, by providing current and future solutions founded on new technologies that empower communities from the ground up
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">General Objective</h3>
          <p className="text-lg text-text-secondary text-center max-w-4xl mx-auto mb-12">
            To partner with Global solution providers in addressing local problems.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Specific Objectives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-text-secondary">
                1. To provide tailor made and bespoke services to disadvantaged communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-text-secondary">
                2. To exchange global ideas for local and international experiential learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-text-secondary">
                3. To provide all inclusive IT platform for future skills progression.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-text-secondary">
                4. To customize, adopt and implement new ideologies at local and international levels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <p className="text-text-secondary">
                5. To foster catalytic role of IT service providers as future communities problem solver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}