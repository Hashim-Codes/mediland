import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Calendar, Heart, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { fadeUp, staggerContainer, slideLeft } from '@/lib/animations';

export function PremiumFooterModule() {
  const config = siteConfig;
  const footer = config.premiumFooter;

  if (!footer) return null;

  return (
    <footer className="w-full font-sans overflow-hidden">
      
      {/* Block 1: Newsletter & Anniversary (White Background) */}
      <div className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Newsletter */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-[32px] p-8 md:p-12 border border-gray-100 flex flex-col justify-center"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{footer.newsletter.heading}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-md">{footer.newsletter.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900"
                />
                <button className="px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-red-600 transition-colors shadow-lg shadow-primary/20 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </motion.div>

            {/* Anniversary */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900 rounded-[32px] p-8 md:p-12 relative overflow-hidden group"
            >
              {/* Confetti / Lights */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-yellow-500/30 transition-colors duration-1000" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-sm tracking-widest uppercase mb-6 border border-white/10">
                  Years of Trust
                </div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 drop-shadow-sm">{footer.anniversary.years}</span>
                  <span className="text-2xl font-bold text-white">Years</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-8 font-light max-w-md">
                  {footer.anniversary.message}
                </p>
                <a href="#about" className="inline-flex items-center text-yellow-400 font-bold hover:text-yellow-300 transition-colors w-fit group/btn">
                  {footer.anniversary.ctaLabel}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Block 2: Facilities Gallery (White Background) */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <motion.div 
              className="w-full lg:w-1/3 shrink-0 lg:sticky lg:top-32"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={slideLeft} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {footer.gallery.label}
              </motion.div>
              <motion.h2 variants={slideLeft} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {footer.gallery.headingLine1} <br/>
                <span className="text-primary">{footer.gallery.headingHighlight}</span>
              </motion.h2>
              <motion.p variants={slideLeft} className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                {footer.gallery.description}
              </motion.p>
              <a href="#facilities" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                {footer.gallery.ctaLabel}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              className="w-full lg:w-2/3 columns-2 sm:columns-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {footer.gallery.images.map((img, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeUp}
                  className="relative mb-4 break-inside-avoid rounded-[24px] overflow-hidden group shadow-md"
                >
                  {/* Using standard img for natural masonry aspect ratio instead of absolute fill */}
                  <img 
                    src={img} 
                    alt={`Facility image ${idx + 1}`} 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </div>
      </div>

      {/* Deep Footer Container */}
      <div className="bg-slate-900 pt-32 pb-12 relative">
        
        {/* Block 3: Final Call-to-Action Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="absolute left-1/2 -top-48 -translate-x-1/2 w-[90%] md:w-full max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-primary to-red-700 rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Heart className="w-10 h-10 text-white fill-white/20" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {footer.finalCta.headingLine1} {footer.finalCta.headingLine2}
                  </h3>
                  <p className="text-white/80 text-lg font-light">
                    {footer.finalCta.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 shrink-0">
                <Link href="#appointment" className="px-8 py-4 rounded-xl bg-white text-primary font-bold hover:bg-gray-50 transition-colors shadow-lg shadow-black/10 flex items-center justify-center group">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  {footer.finalCta.primaryCtaLabel}
                </Link>
                <a 
                  href={`tel:${config.contact.phone.replace(/[^0-9+]/g, '')}`} 
                  className="px-8 py-4 rounded-xl bg-transparent border-2 border-white text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {config.contact.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Block 4: Premium Footer (5 Columns) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 lg:mt-32 border-b border-gray-800 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Col 1: Branding */}
            <div className="lg:col-span-1">
              <Link href="/clinic" className="shrink-0 flex items-center gap-3 mb-6">
                {config.branding.logo && (
                  <div className="relative h-10 w-10 shrink-0">
                    <Image 
                      src={config.branding.logo} 
                      alt={config.branding.name} 
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  <span className="text-xl lg:text-2xl font-black text-white font-heading leading-none tracking-tight">
                    {config.branding.name}
                  </span>
                  <span className="text-[10px] lg:text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mt-1">
                    Medicals & Clinic
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 leading-relaxed font-light text-sm">
                {footer.missionStatement}
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
              <ul className="space-y-4">
                {config.navigation.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-light relative group">
                      {link.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Departments</h4>
              <ul className="space-y-4">
                {config.servicesContent.items.slice(0, 6).map(service => (
                  <li key={service.id}>
                    <Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-light relative group">
                      {service.title}
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact Us</h4>
              <ul className="space-y-5">
                <li className="flex items-start text-gray-400 text-sm font-light">
                  <MapPin className="w-5 h-5 mr-3 shrink-0 text-gray-500" />
                  <span className="leading-relaxed">{config.contact.address}</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm font-light">
                  <Phone className="w-5 h-5 mr-3 shrink-0 text-gray-500" />
                  <span>{config.contact.phone}</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm font-light">
                  <Mail className="w-5 h-5 mr-3 shrink-0 text-gray-500" />
                  <span>{config.contact.email}</span>
                </li>
              </ul>
            </div>

            {/* Col 5: Social */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group hover:scale-110 shadow-lg">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group hover:scale-110 shadow-lg">
                  <Instagram className="w-5 h-5" />
                </a>
                {config.social.whatsapp && (
                  <a href={`https://wa.me/${config.social.whatsapp.replace(/[^0-9]/g, '')}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 group hover:scale-110 shadow-lg">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Block 5: Copyright Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} {config.branding.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500 font-light">
            <Link href="/privacy" className="hover:text-white transition-colors relative group">
              Privacy Policy
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors relative group">
              Terms & Conditions
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}



