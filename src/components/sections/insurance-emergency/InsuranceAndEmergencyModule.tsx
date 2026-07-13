"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Ambulance, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { fadeUp } from '@/lib/animations';

export function InsuranceAndEmergencyModule() {
  const config = siteConfig;
  const openingHours = config.openingHours;
  const emergency = config.emergency;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Emergency Panel */}
          <motion.div 
            className="lg:col-span-12 max-w-2xl mx-auto w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="bg-slate-900 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              <div className="relative z-10 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold text-xs tracking-wider uppercase mb-8 border border-white/10 backdrop-blur-sm">
                  Accessible, Reliable Local Healthcare
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
                      <h4 className="text-lg font-bold mb-2">Clinic & Pharmacy Hours</h4>
                      <div className="space-y-1 text-gray-300 font-light">
                        <p className="flex justify-between w-64"><span>Monday – Sunday:</span> <span>7:00 AM - 10:00 PM</span></p>
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
                      </div>
                    </div>
                  )}
                </div>

                <h4 className="text-lg font-bold mb-4 text-white">Contact & Bookings</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+917994289210" 
                    className="flex items-center justify-center w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-red-600 transition-colors shadow-[0_8px_30px_rgb(229,57,53,0.4)] hover:-translate-y-1 group"
                  >
                    <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                    +91 79942 89210
                  </a>
                  <a 
                    href="tel:+919447229973" 
                    className="flex items-center justify-center w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-red-600 transition-colors shadow-[0_8px_30px_rgb(229,57,53,0.4)] hover:-translate-y-1 group"
                  >
                    <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                    +91 94472 29973
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



