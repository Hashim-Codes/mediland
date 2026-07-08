import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Calendar, MessageSquare, Quote, Star } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Carousel } from '@/components/ui/Carousel';
import { Testimonial } from '@/types';
import { fadeUp, staggerContainer } from '@/lib/animations';

export function TestimonialsModule() {
  const config = siteConfig;
  const content = config.testimonialsContent;
  const testimonials = config.testimonials;
  const openingHours = config.openingHours;

  if (!content || !testimonials) return null;

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Subtle Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Block 1: Patient Testimonials */}
        <div className="mb-24">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary/30" />
              <span className="text-primary font-bold text-sm tracking-widest uppercase">{content.label}</span>
              <div className="w-12 h-[1px] bg-primary/30" />
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {content.headingLine1} <br/>
              <span className="text-primary">{content.headingHighlight}</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-gray-600 font-light max-w-[700px] mx-auto leading-relaxed">
              {content.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Carousel<Testimonial>
              items={testimonials}
              autoplay={true}
              itemClassName="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
              renderItem={(testimonial) => (
                <div className="h-full px-3 py-4">
                  <div className="bg-white rounded-[24px] p-8 h-full border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden">
                    
                    <div className="absolute -top-4 -right-4 text-gray-50 opacity-50 group-hover:text-primary/5 transition-colors">
                      <Quote size={80} />
                    </div>

                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-[#FFC107] text-[#FFC107]' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-8 flex-grow relative z-10 italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto relative z-10">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                        {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </motion.div>
        </div>

        {/* Block 2: Clinic Information & Final CTA */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1: Image */}
          <motion.div variants={fadeUp} className="relative h-64 md:h-full min-h-[250px] rounded-[24px] overflow-hidden group">
            <Image 
              src={content.storefrontImage} 
              alt="Clinic Storefront" 
              fill 
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700" 
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </motion.div>

          {/* Column 2: Working Hours */}
          <motion.div variants={fadeUp} className="bg-gray-50 rounded-[24px] p-8 md:p-10 border border-gray-100 flex flex-col justify-center">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Working Hours</h3>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-gray-500 font-medium mb-1">Monday–Saturday</span>
                <span className="text-xl font-bold text-gray-900">{openingHours.weekdays}</span>
              </div>
              <div className="w-full h-px bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-gray-500 font-medium mb-1">Sunday</span>
                <span className="text-xl font-bold text-gray-900">{openingHours.weekends}</span>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Contact CTA */}
          <motion.div variants={fadeUp} className="bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center text-center items-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">We&apos;re Here for You</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Need help or want to book an appointment? Our team is just a call or message away.
            </p>
            
            <div className="w-full space-y-4">
              <button className="w-full flex items-center justify-center py-4 px-6 rounded-xl bg-primary text-white font-bold hover:bg-red-600 transition-colors shadow-[0_8px_20px_rgb(229,57,53,0.3)] hover:-translate-y-1 group">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
                <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </button>
              
              <button className="w-full flex items-center justify-center py-4 px-6 rounded-xl bg-white text-gray-900 font-bold border-2 border-gray-200 hover:bg-[#25D366]/5 hover:border-[#25D366] transition-all group">
                <MessageSquare className="w-5 h-5 mr-2 text-[#25D366]" />
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}



