"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, ArrowRight, Loader2 } from 'lucide-react';
import { FormConfig, FormFieldConfig } from '@/types';
import { siteConfig as tenantConfig } from '@/config/site.config';
import { FormSubmissionService, FormPayload } from './FormSubmissionService';
import { fadeUp, scaleIn } from '@/lib/animations';

interface FormEngineProps {
  config: FormConfig;
  
}

export function FormEngine({ config }: FormEngineProps) {
  const [payload, setPayload] = useState<FormPayload>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const primaryColor = tenantConfig.branding.primaryColor || "#D62828";

  // Initialize payload based on required fields and defaults if needed
  useEffect(() => {
    const initial: FormPayload = {};
    config.fields.forEach(field => {
      initial[field.id] = '';
    });
    setPayload(initial);
  }, [config]);

  const handleChange = (id: string, value: string | boolean) => {
    setPayload(prev => {
      const next = { ...prev, [id]: value };
      
      // Handle dependent fields reset
      // E.g., if department changes, reset doctor
      config.fields.forEach(field => {
        if (field.dependsOn === id) {
          next[field.id] = '';
        }
      });
      return next;
    });
  };

  const getFieldOptions = (field: FormFieldConfig) => {
    if (field.dependencyMap && field.dependsOn) {
      const parentValue = payload[field.dependsOn];
      if (typeof parentValue === 'string' && field.dependencyMap[parentValue]) {
        return field.dependencyMap[parentValue];
      }
      return []; // empty if parent not selected
    }
    return field.options || [];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const success = await FormSubmissionService.submit(payload, config);
    
    setIsSubmitting(false);
    if (success) {
      setIsSuccess(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial="hidden" animate="show" variants={scaleIn}
        className="bg-white rounded-[24px] p-8 md:p-12 shadow-2xl border border-gray-100 max-w-2xl mx-auto text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-green-500" />
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{config.successScreen.title}</h3>
        
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
          <h4 className="font-bold text-gray-900 mb-4">What happens next?</h4>
          <div className="space-y-4">
            {config.successScreen.timeline.map((step, idx) => (
              <div key={idx} className="flex items-start">
                <div className="flex flex-col items-center mr-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${idx === 0 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {idx === 0 ? '✓' : idx + 1}
                  </div>
                  {idx < config.successScreen.timeline.length - 1 && (
                    <div className="w-0.5 h-6 bg-gray-200 my-1" />
                  )}
                </div>
                <div className={`pt-0.5 font-medium ${idx === 0 ? 'text-green-700' : 'text-gray-600'}`}>
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {config.successScreen.primaryAction && (
            <a 
              href={`tel:${tenantConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors flex justify-center items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {config.successScreen.primaryAction.label}
            </a>
          )}
          {config.successScreen.secondaryAction && tenantConfig.social.whatsapp && (
            <a 
              href={`https://wa.me/${tenantConfig.social.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold hover:bg-[#25D366]/20 transition-colors flex justify-center items-center gap-2"
            >
              {config.successScreen.secondaryAction.label}
            </a>
          )}
          {config.successScreen.tertiaryAction && (
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-6 py-3 rounded-xl text-gray-500 font-bold hover:bg-gray-50 transition-colors"
            >
              {config.successScreen.tertiaryAction.label}
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      variants={fadeUp}
      initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-[24px] shadow-2xl border border-gray-100 p-6 md:p-10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: primaryColor }} />
      
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-900 mb-2">{config.title}</h2>
        <p className="text-gray-500 font-medium">{config.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {config.fields.map(field => {
          const colSpan = field.width === 'full' ? 'col-span-1 md:col-span-2' : 'col-span-1';
          const baseInputClass = "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all outline-none font-medium text-gray-900";
          
          return (
            <div key={field.id} className={colSpan}>
              {field.type !== 'checkbox' && (
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
              )}

              {/* Render Field Based on Type */}
              {field.type === 'text' || field.type === 'tel' || field.type === 'email' || field.type === 'number' ? (
                <input 
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  min={field.min}
                  max={field.max}
                  className={baseInputClass}
                  value={(payload[field.id] as string) || ''}
                  onChange={e => handleChange(field.id, e.target.value)}
                />
              ) : field.type === 'date' || field.type === 'time' ? (
                <input 
                  type={field.type}
                  required={field.required}
                  className={baseInputClass}
                  value={(payload[field.id] as string) || ''}
                  onChange={e => handleChange(field.id, e.target.value)}
                  min={field.type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
                />
              ) : field.type === 'textarea' ? (
                <textarea 
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={3}
                  className={`${baseInputClass} resize-none`}
                  value={(payload[field.id] as string) || ''}
                  onChange={e => handleChange(field.id, e.target.value)}
                />
              ) : field.type === 'select' ? (
                <select 
                  required={field.required}
                  className={baseInputClass}
                  value={(payload[field.id] as string) || ''}
                  onChange={e => handleChange(field.id, e.target.value)}
                >
                  <option value="" disabled>Select {field.label}</option>
                  {getFieldOptions(field).map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              ) : field.type === 'radio' ? (
                <div className="flex gap-4">
                  {field.options?.map(opt => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 flex-1">
                      <input 
                        type="radio"
                        name={field.id}
                        value={opt.value}
                        checked={payload[field.id] === opt.value}
                        onChange={e => handleChange(field.id, e.target.value)}
                        required={field.required}
                        className="w-4 h-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                        style={{ accentColor: primaryColor }}
                      />
                      <span className="text-sm font-bold text-gray-700">{opt.label}</span>
                    </label>
                  ))}
                </div>
              ) : field.type === 'checkbox' ? (
                <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 mt-2">
                  <input 
                    type="checkbox"
                    required={field.required}
                    checked={payload[field.id] === true}
                    onChange={e => handleChange(field.id, e.target.checked)}
                    className="mt-0.5 w-5 h-5 text-[var(--color-primary)] focus:ring-[var(--color-primary)] rounded"
                    style={{ accentColor: primaryColor }}
                  />
                  <span className="text-sm font-bold text-gray-700 leading-tight">{field.label}</span>
                </label>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-100">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto md:min-w-[200px] px-8 py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed sticky bottom-4 z-30 md:relative md:bottom-auto"
          style={{ backgroundColor: primaryColor }}
        >
          {isSubmitting ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              {config.submitLabel}
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}




