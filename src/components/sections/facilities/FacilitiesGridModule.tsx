import React from 'react';
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
            
            <motion.button variants={slideLeft} className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              {content.ctaLabel}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
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
              {content.items.map((facility, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className={`bg-white rounded-[24px] p-8 border-2 border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/20 transition-all duration-300 group hover:-translate-y-2 ${index === 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 shadow-sm">
                    <IconResolver name={facility.iconName} className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">{facility.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}



