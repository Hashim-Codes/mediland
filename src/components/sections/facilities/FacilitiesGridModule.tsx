"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { IconResolver } from '@/lib/IconResolver';
import { fadeUp, slideLeft, staggerContainer } from '@/lib/animations';

export function FacilitiesGridModule() {
  const config = siteConfig;
  const content = config.facilities;

  if (!content) return null;

  return (
    <section className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Text Introduction */}
          <motion.div 
            className="w-full lg:w-1/3 lg:sticky lg:top-32 shrink-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={slideLeft} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {content.label}
            </motion.div>
            
            <motion.h2 variants={slideLeft} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {content.headingLine1} <br/>
              <span className="text-primary">{content.headingHighlight}</span>
            </motion.h2>
            
            <motion.p variants={slideLeft} className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              {content.description}
            </motion.p>
            
          </motion.div>

          {/* Right: Facilities Grid */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {content.items.map((facility: any, index: number) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className={`group relative rounded-[20px] md:rounded-[24px] p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-end min-h-[260px] ${index === 0 ? 'sm:col-span-2' : ''}`}
                >
                  {facility.image && (
                    <Image 
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-70"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 shadow-md">
                      <IconResolver name={facility.iconName} className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-tight drop-shadow-md">{facility.title}</h3>
                    <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base drop-shadow-sm">{facility.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}



