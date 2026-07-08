"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { CTABanner } from '@/components/ui';
import { fadeUp } from '@/lib/animations';

export function CTASectionModule() {
  const config = siteConfig;
  const { branding, cta } = config;
  
  if (!cta) return null;
  const primaryColor = branding.primaryColor || "#E53935";

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <CTABanner 
            label={cta.label}
            heading={cta.heading}
            description={cta.description}
            primaryButtonLabel={cta.primaryButtonLabel}
            secondaryButtonLabel={cta.secondaryButtonLabel}
            primaryColor={primaryColor}
            onPrimaryClick={() => console.log('CTA Primary Clicked')}
            onSecondaryClick={() => console.log('CTA Secondary Clicked')}
          />
        </motion.div>
      </div>
    </section>
  );
}



