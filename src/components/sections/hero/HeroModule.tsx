"use client";

import React from 'react';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Shield, Phone, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { IconResolver } from '@/lib/IconResolver';
import { fadeUp, slideLeft, staggerContainer } from '@/lib/animations';

export function HeroModule() {
  const config = siteConfig;
  const { hero, branding } = config;
  
  if (!hero) return null;
  const primaryColor = branding.primaryColor || "#D62828";

  return (
    <section className="relative min-h-[100dvh] lg:min-h-[95vh] bg-[var(--color-background)] overflow-hidden flex items-center pt-28 pb-20">
      {/* Premium subtle background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          
          {/* Left Side: Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-start"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "50px" }}
            variants={staggerContainer}
          >
            {/* Trust Badge */}
            <motion.div 
              variants={fadeUp} 
              className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-gray-100"
            >
              <Shield className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm font-bold tracking-wide text-gray-800">
                {hero.trustBadge}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={fadeUp} 
              className="text-5xl md:text-6xl lg:text-[72px] font-black text-[var(--color-secondary)] leading-[1.1] tracking-tight mb-6 font-heading"
            >
              {hero.headingLine1} <br />
              <span className="text-[var(--color-primary)]">{hero.headingHighlight}</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeUp} 
              className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-xl mb-12"
            >
              {hero.description}
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#appointment"
                className="px-8 py-4 rounded-[16px] text-white font-bold text-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                style={{ backgroundColor: primaryColor }}
              >
                <Calendar className="w-5 h-5" />
                {hero.primaryCtaLabel}
              </a>
              <a 
                href="#doctors"
                className="px-8 py-4 rounded-[16px] text-[var(--color-secondary)] font-bold text-lg bg-white border border-gray-200 hover:border-[var(--color-primary)] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                {hero.secondaryCtaLabel}
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Image & Floating Cards */}
          <div className="w-full lg:w-1/2 relative lg:mt-0">
            {/* Soft backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <motion.div 
              className="relative w-full max-w-[600px] mx-auto"
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Premium Glass Frame */}
              <div className="relative p-3 md:p-4 rounded-[40px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                {/* Inner Image Container */}
                <div className="relative rounded-[32px] overflow-hidden shadow-inner bg-gray-50">
                  <img 
                    src={hero.heroImage}
                    alt={`${branding.name} Building`}
                    fetchPriority="high"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 block"
                  />
                  {/* Subtle vignette for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/40 via-transparent to-transparent pointer-events-none mix-blend-multiply opacity-70" />
                </div>
              </div>
              
              {/* Premium Anniversary Badge */}
              <motion.div 
                className="absolute -top-4 -right-2 md:-top-10 md:-right-4 lg:-right-10 z-20 animate-float"
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "50px" }}
                transition={{ delay: 0.6 }}
              >
                <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/30 overflow-hidden bg-white border-[3px] md:border-[4px] border-white group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600" />
                  
                  {/* Decorative dashed circle */}
                  <div className="absolute inset-1.5 md:inset-2 border border-dashed border-white/60 rounded-full group-hover:rotate-180 transition-transform duration-[3000ms] ease-in-out" />

                  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white drop-shadow-md">
                    <span className="text-[6px] md:text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase opacity-95 mb-0.5">
                      Celebrating
                    </span>
                    <div className="flex items-start drop-shadow-lg">
                      <span className="text-2xl md:text-4xl lg:text-5xl font-black font-heading leading-none">
                        {hero.anniversaryBadge.years}
                      </span>
                      <span className="text-xs md:text-lg lg:text-xl font-bold ml-0.5 leading-none">nd</span>
                    </div>
                    <span className="text-[6px] md:text-[9px] lg:text-[10px] font-bold tracking-[0.1em] uppercase mt-0.5 md:mt-1 opacity-95">
                      Year of Trust
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Floating Card (Emergency/Hours) */}
              <motion.div 
                className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:-bottom-8 lg:-left-12 z-20 bg-white/20 border border-white/40 text-gray-900 rounded-[20px] p-3 sm:p-5 lg:p-6 shadow-2xl shadow-black/10 w-[95%] sm:w-max max-w-[600px] backdrop-blur-xl flex flex-row items-center justify-between sm:justify-start gap-2 sm:gap-6"
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "50px" }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center sm:justify-start">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/40 flex items-center justify-center shrink-0 border border-white/60">
                    <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">{hero.infoBar.opdDays}</div>
                    <div className="text-[10px] sm:text-sm font-bold text-gray-900 whitespace-nowrap">{hero.infoBar.opdTimings}</div>
                  </div>
                </div>
                
                <div className="w-px h-10 sm:h-14 bg-gradient-to-b from-transparent via-gray-400 to-transparent shrink-0" />
                
                <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center sm:justify-start">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30 border border-white/50" style={{ backgroundColor: primaryColor }}>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">{hero.infoBar.emergencyText}</div>
                    <div className="text-[10px] sm:text-sm font-bold tracking-wide text-gray-900 whitespace-nowrap">{hero.infoBar.emergencyContact}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <motion.div 
          className="mt-32 lg:mt-32 w-full bg-white rounded-[24px] shadow-sm border border-gray-100 p-6 lg:p-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "50px" }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {hero.features.map((feature: any, idx: number) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group">
                <div className="w-14 h-14 rounded-[16px] bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--color-primary)] transition-all duration-300">
                  <IconResolver name={feature.iconName} className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-[var(--color-secondary)] font-bold mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500 font-medium">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}



