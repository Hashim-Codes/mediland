"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, Ambulance, Phone, Map, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { IconResolver } from '@/lib/IconResolver';
import { fadeUp, staggerContainer } from '@/lib/animations';

export function SpecialtiesModule() {
  const config = siteConfig;
  const specialties = config.specialties;
  const openingHours = config.openingHours;
  const emergency = config.emergency;
  const location = config.locationContent;

  if (!specialties || !location) return null;

  return (
    <section className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Block 1: Specialized Departments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {specialties.label}
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              {specialties.headingLine1} <br/>
              <span className="text-primary">{specialties.headingHighlight}</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed font-light">
              {specialties.description}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {specialties.items.map((item: any, index: number) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="relative bg-gray-900 border border-gray-800 overflow-hidden rounded-[16px] md:rounded-[20px] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group flex flex-col md:block items-center text-center md:items-start md:text-left min-h-[160px] p-5 md:p-6"
                >
                  {/* Background Image */}
                  {item.image && (
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-40 group-hover:opacity-50"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-end mt-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0">
                      <IconResolver name={item.iconName} className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                      <h3 className="font-bold text-white mb-1 md:mb-2 drop-shadow-md">{item.title}</h3>
                      <p className="text-xs md:text-sm text-gray-300 drop-shadow-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[500px] rounded-[32px] overflow-hidden group shadow-2xl"
          >
            <Image 
              src={specialties.receptionImage} 
              alt="Reception" 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Block 2: Appointment & Emergency Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800 relative z-10">
            
            {/* Col 1 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left pt-0 md:pr-8">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Book Appointment</h3>
              <p className="text-gray-400 mb-8 font-light">Reserve a consultation with our experienced specialists today.</p>
              <a href="#appointment" className="w-full flex items-center justify-center py-4 rounded-xl bg-primary text-white font-bold hover:bg-red-600 transition-colors shadow-lg shadow-primary/20 mb-3">
                Consult Now
              </a>
              <a href="#facilities" className="w-full flex items-center justify-center py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-colors">
                View All Departments
              </a>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left pt-12 md:pt-0 md:px-8">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Working Hours</h3>
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-400">Mon–Sat</span>
                  <span className="text-white font-bold">{openingHours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white font-bold">{openingHours.weekends}</span>
                </div>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left pt-12 md:pt-0 md:pl-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <Ambulance className="w-8 h-8" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-4 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                24/7 Available
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Emergency Care</h3>
              <p className="text-gray-400 mb-8 font-light">Immediate emergency medical support whenever you need us.</p>
              
              <a 
                href={`tel:${emergency.phone.replace(/[^0-9+]/g, '')}`} 
                className="w-full flex items-center justify-center py-5 rounded-xl bg-white text-slate-900 font-black text-xl hover:bg-gray-100 transition-colors shadow-xl group"
              >
                <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse text-primary" />
                {emergency.phone}
              </a>
            </div>
            
          </div>
        </motion.div>

        {/* Block 3: Location & Trust Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">{location.heading}</h3>
            <div className="bg-white p-6 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="w-full h-[350px] bg-gray-100 rounded-[20px] overflow-hidden mb-6 relative">
                <iframe 
                  src={location.mapEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{config.branding.name}</h4>
                  <p className="text-gray-500">{config.contact.address}</p>
                </div>
                <a href="#appointment" className="w-14 h-14 rounded-full bg-gray-50 hover:bg-primary hover:text-white flex items-center justify-center text-gray-600 transition-colors shadow-sm">
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Trust Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {location.trustCards.map((card: any, index: number) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="group relative bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center text-center min-h-[220px]"
              >
                {card.image && (
                  <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-70"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    unoptimized
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-all duration-500 shadow-md">
                    <IconResolver name={card.iconName} className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 drop-shadow-md">{card.title}</h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light drop-shadow-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}



