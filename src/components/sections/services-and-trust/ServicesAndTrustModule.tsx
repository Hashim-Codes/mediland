"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { IconResolver } from '@/lib/IconResolver';
import { fadeUp, slideRight, staggerContainer, scaleIn } from '@/lib/animations';



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

          {/* Top Tier: Core Services */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {servicesContent.items.slice(0, 3).map((service: any, idx: number) => (
              <motion.div 
                key={service.id}
                variants={fadeUp}
                className="group relative rounded-[20px] md:rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-[280px] md:h-[400px] flex flex-col justify-end p-6 md:p-8"
              >
                {/* Background Image */}
                {service.image && (
                  <>
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    {/* Dark Overlay Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />
                  </>
                )}

                <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-wide text-white drop-shadow-md">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-200 font-medium leading-relaxed drop-shadow-sm line-clamp-2 md:line-clamp-none">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Secondary Tier: Other Specialties */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {servicesContent.items.slice(3).map((service: any, idx: number) => (
              <motion.div 
                key={service.id}
                variants={fadeUp}
                className="group relative rounded-[16px] md:rounded-[20px] p-4 md:p-5 shadow-sm hover:shadow-2xl border border-gray-800 bg-gray-900 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-end h-full min-h-[160px] md:min-h-[200px] overflow-hidden"
              >
                {/* Background Image */}
                {service.image && (
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-40 group-hover:opacity-50"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/10 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] md:rounded-[14px] flex items-center justify-center mb-auto shrink-0 transition-transform duration-500 group-hover:scale-110 bg-white/10 backdrop-blur-sm text-white border border-white/10"
                  >
                    <IconResolver name={service.iconName} className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  
                  <div className="mt-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-sm md:text-base font-bold text-white mb-1 tracking-wide group-hover:text-primary transition-colors line-clamp-1 drop-shadow-md">{service.title}</h3>
                    <p className="text-[10px] md:text-xs text-gray-300 font-medium leading-relaxed line-clamp-2 drop-shadow-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ============================== */}
        {/* BLOCK 2: WHY CHOOSE MEDILAND   */}
        {/* ============================== */}
        <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-12 lg:pt-24">
          
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              {whyChoose.headingLine1} <br />
              <span style={{ color: primaryColor }}>{whyChoose.headingHighlight}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg font-medium leading-relaxed mb-10">
              {whyChoose.description}
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {whyChoose.features.map((feature: any, idx: number) => (
                <motion.div 
                  key={idx} 
                  variants={fadeUp}
                  className="group relative rounded-[20px] p-6 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-end min-h-[220px]"
                >
                  {feature.image && (
                    <Image 
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-70"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      unoptimized
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-500 group-hover:scale-110 text-white"
                    >
                      <IconResolver name={feature.iconName} className="w-6 h-6" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2 drop-shadow-md">{feature.title}</h4>
                    <p className="text-sm text-gray-300 font-medium leading-relaxed drop-shadow-sm line-clamp-2">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </motion.div>

          {/* Center Column: Image (Col Span 5) */}
          <motion.div 
            className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-[4/5] max-w-lg mx-auto"
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
            <div className="bg-slate-900 rounded-[24px] p-8 md:p-10 shadow-2xl h-full flex flex-col justify-center gap-8 md:gap-10">
              {stats.slice(0, 4).map((stat: any, i: number) => {
                return (
                  <div key={i} className={`relative ${i !== 0 ? 'pt-8 border-t border-white/10' : ''}`}>
                    <div className="relative z-10">
                      <div className="text-3xl md:text-5xl font-black text-white mb-2 flex items-baseline gap-1">
                        {stat.number}
                      </div>
                      <div className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-widest mb-1">{stat.title}</div>
                      <div className="text-[10px] md:text-sm text-white/60 font-medium leading-tight">{stat.description}</div>
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



