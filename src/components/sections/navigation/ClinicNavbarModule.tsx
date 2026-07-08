"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { Phone, Calendar, Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ClinicNavbarModule() {
  const config = siteConfig;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { emergency } = config;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = config.navigation || [];

  const primaryColor = config.branding.primaryColor || "#D62828";


  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        {/* Top Emergency Support Panel */}
        <AnimatePresence>
          {(!isScrolled && emergency?.enabled) && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-[var(--color-primary)] text-white px-4 py-2 text-sm font-bold overflow-hidden"
            >
              <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>{emergency.label}</span>
                <a 
                  href={`tel:${emergency.phone}`} 
                  className="underline underline-offset-2 hover:text-red-100 transition-colors"
                >
                  {emergency.phone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`container mx-auto px-4 lg:px-8 max-w-[1400px] transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/clinic" className="shrink-0 flex items-center gap-3">
              {config.branding.logo && (
                <div className="relative h-10 w-10 shrink-0">
                  <Image 
                    src={config.branding.logo} 
                    alt={config.branding.name} 
                    fill
                    sizes="40px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              )}
              <div className="flex flex-col justify-center">
                <span className="text-xl lg:text-2xl font-black text-[var(--color-secondary)] font-heading leading-none tracking-tight">
                  {config.branding.name}
                </span>
                <span className="text-[10px] lg:text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mt-1">
                  Medicals & Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className="text-sm font-bold text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href={`tel:${config.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-[var(--color-secondary)] hover:bg-blue-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              {config.social.whatsapp && (
                <a 
                  href={`https://wa.me/${config.social.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                     <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z"/>
                  </svg>
                </a>
              )}
              <Link 
                href="#appointment"
                className="px-6 py-2.5 rounded-full text-white font-bold text-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 shadow-md shadow-red-500/20"
                style={{ backgroundColor: primaryColor }}
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-gray-800 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <Link 
                  href="#appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <div className="flex gap-4">
                  <a 
                    href={`tel:${config.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex-1 py-3 rounded-xl bg-blue-50 text-[var(--color-secondary)] font-bold flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                  {config.social.whatsapp && (
                    <a 
                      href={`https://wa.me/${config.social.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold flex items-center justify-center gap-2"
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



