import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Carousel } from '@/components/ui/Carousel';
import { Doctor } from '@/types';
import { staggerContainer, slideLeft } from '@/lib/animations';

export function DoctorsCarouselModule() {
  const config = siteConfig;
  const content = config.doctorsContent;
  const doctors = config.doctors;

  if (!content || !doctors) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text Introduction */}
          <motion.div 
            className="w-full lg:w-1/3 shrink-0"
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
            
            <motion.button variants={slideLeft} className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              {content.ctaLabel}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right: Carousel */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Carousel<Doctor>
              items={doctors}
              autoplay={false}
              itemClassName="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_50%] xl:flex-[0_0_50%]"
              renderItem={(doctor) => (
                <div className="h-full px-2 py-4">
                  <div className="bg-white rounded-[20px] p-6 h-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-gray-200 transition-all duration-300 group hover:-translate-y-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gray-50 overflow-hidden shrink-0 shadow-inner group-hover:shadow-md transition-shadow">
                        {doctor.image ? (
                          <Image src={doctor.image} alt={doctor.name} width={80} height={80} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                            <span className="text-2xl font-bold">{doctor.name.charAt(4)}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{doctor.name}</h3>
                        <p className="text-primary font-medium text-sm mb-1">{doctor.specialty}</p>
                        <p className="text-gray-500 text-xs font-medium">{doctor.qualifications}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mt-auto pt-6 border-t border-gray-50">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-3 text-gray-400" />
                        {doctor.timing}
                      </div>
                      {doctor.branch && (
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                          {doctor.branch}
                        </div>
                      )}
                    </div>
                    
                    <button className="w-full mt-6 py-3 px-4 rounded-xl font-semibold text-sm bg-gray-50 text-gray-700 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      Book Consultation
                    </button>
                  </div>
                </div>
              )}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}



