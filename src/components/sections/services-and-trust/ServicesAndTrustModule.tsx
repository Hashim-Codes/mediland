"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { IconResolver } from '@/lib/IconResolver';
import { fadeUp, slideRight, staggerContainer, scaleIn } from '@/lib/animations';

function Counter({ from, to }: { from: number; to: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = React.useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / (to - from)));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === to) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, from, to]);

  return <span ref={nodeRef}>{count}</span>;
}

export function ServicesAndTrustModule() {
  const config = siteConfig;
  const { branding, servicesContent, whyChoose, stats } = config;
  
  if (!servicesContent || !whyChoose) return null;
  const primaryColor = branding.primaryColor || "#E53935";

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Background Decorative Medical Graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 border-[40px] border-gray-900 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-10 w-[500px] h-[500px] border-[60px] border-gray-900 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
        
        {/* ============================== */}
        {/* BLOCK 1: OUR SERVICES          */}
        {/* ============================== */}
        <div className="mb-32">
          {/* Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gray-200"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: primaryColor }}>
                {servicesContent.label}
              </span>
              <div className="w-12 h-px bg-gray-200"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              {servicesContent.headingLine1} <br />
              <span style={{ color: primaryColor }}>{servicesContent.headingHighlight}</span>
            </h2>
            
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              {servicesContent.description}
            </p>
          </motion.div>

          {/* Services Grid (6 Columns Desktop) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {servicesContent.items.map((service) => (
              <motion.div 
                key={service.id}
                variants={fadeUp}
                className="group relative bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                style={{ '--hover-border-color': primaryColor } as React.CSSProperties}
              >
                {/* Dynamic hover border */}
                <div className="absolute inset-0 rounded-[20px] border-2 border-transparent group-hover:border-[var(--hover-border-color)] transition-colors duration-300 pointer-events-none" />
                
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                >
                  <IconResolver name={service.iconName} className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed flex-grow">{service.description}</p>
                
                <div 
                  className="mt-6 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: primaryColor }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ============================== */}
        {/* BLOCK 2: WHY CHOOSE MEDILAND   */}
        {/* ============================== */}
        <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-24 mt-[-6rem]">
          
          {/* Left Column: Text & Features (Col Span 4) */}
          <motion.div 
            className="lg:col-span-4 max-w-[500px]"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block" style={{ color: primaryColor }}>
              {whyChoose.label}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              {whyChoose.headingLine1} <br />
              <span style={{ color: primaryColor }}>{whyChoose.headingHighlight}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg font-medium leading-relaxed mb-10">
              {whyChoose.description}
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {whyChoose.features.map((feature, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                  >
                    <IconResolver name={feature.iconName} className="w-5 h-5" />
                  </div>
                  <h4 className="text-gray-900 font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              variants={fadeUp}
              className="px-8 py-4 rounded-[14px] font-bold text-lg border-2 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg"
              style={{ borderColor: primaryColor, color: primaryColor } as React.CSSProperties}
            >
              {whyChoose.ctaLabel}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Center Column: Image (Col Span 5) */}
          <motion.div 
            className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] max-w-lg mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src={whyChoose.image}
                alt="Doctor comforting an elderly patient"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Column: Statistics Panel (Col Span 3) */}
          <motion.div 
            className="lg:col-span-3 lg:ml-auto w-full max-w-sm"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
          >
            <div className="bg-slate-900 rounded-[24px] p-8 md:p-10 shadow-2xl h-full flex flex-col justify-between gap-10">
              {stats.slice(0, 4).map((stat, i) => {
                const numOnly = parseInt(stat.number.replace(/\D/g, '')) || 0;
                const suffix = stat.number.replace(/\d/g, '');
                
                return (
                  <div key={i} className={`relative ${i !== 0 ? 'pt-8 border-t border-white/10' : ''}`}>
                    {/* Removed empty absolute background circle per feedback */}
                    <div className="relative z-10">
                      <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-baseline gap-1">
                        {numOnly > 0 ? <Counter from={0} to={numOnly} /> : stat.number}
                        {suffix && <span className="text-3xl" style={{ color: primaryColor }}>{suffix}</span>}
                      </div>
                      <div className="text-base font-bold text-gray-300 mb-1 leading-tight">{stat.title}</div>
                      <div className="text-sm font-medium text-gray-500">{stat.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}



