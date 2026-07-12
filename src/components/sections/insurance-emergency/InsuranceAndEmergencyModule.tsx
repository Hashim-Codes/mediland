"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Ambulance, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { fadeUp, staggerContainer, slideLeft, slideRight } from '@/lib/animations';

export function InsuranceAndEmergencyModule() {
  const config = siteConfig;
  const insurance = config.insurance;
  const openingHours = config.openingHours;
  const emergency = config.emergency;

  if (!insurance) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left: Insurance (Col Span 8) */}
          <motion.div 
            className="lg:col-span-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-12">
              <motion.div variants={slideLeft} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {insurance.label}
              </motion.div>
              <motion.h2 variants={slideLeft} className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                {insurance.heading}
              </motion.h2>
              <motion.p variants={slideLeft} className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
                {insurance.description}
              </motion.p>
            </div>

            <motion.div 
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              variants={fadeUp}
            >
              <p className="text-gray-700 font-medium text-lg">
                We accept major insurance plans. Contact us to verify coverage.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Emergency Panel (Col Span 4) */}
          <motion.div 
            className="lg:col-span-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
          >
            <div className="bg-slate-900 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              <div className="relative z-10 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold text-xs tracking-wider uppercase mb-8 border border-white/10 backdrop-blur-sm">
                  Always Here
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                  We&apos;re Here <br/>
                  <span className="text-gray-400 font-light">When You Need Us</span>
                </h3>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">OPD Timings</h4>
                      <div className="space-y-1 text-gray-300 font-light">
                        <p className="flex justify-between"><span>Mon – Sat:</span> <span>{openingHours.weekdays}</span></p>
                        <p className="flex justify-between"><span>Sunday:</span> <span>{openingHours.weekends}</span></p>
                      </div>
                    </div>
                  </div>

                  {emergency.enabled && (
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary shadow-inner">
                        <Ambulance className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1 text-primary">{emergency.label}</h4>
                        <p className="text-gray-300 font-light mb-2">{emergency.supportText}</p>
                        <p className="text-sm text-gray-400 leading-relaxed">Immediate emergency medical support whenever you need us.</p>
                      </div>
                    </div>
                  )}
                </div>

                <a 
                  href={`tel:${emergency.phone.replace(/[^0-9+]/g, '')}`} 
                  className="flex items-center justify-center w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-red-600 transition-colors shadow-[0_8px_30px_rgb(229,57,53,0.4)] hover:-translate-y-1 group"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                  Call {emergency.phone}
                </a>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



