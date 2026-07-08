"use client";

import React, { useState } from 'react';
import { siteConfig } from '@/config/site.config';
import { submitMedicineOrder, MedicineOrderPayload } from '@/lib/integrations/medicine';
import { UploadCloud, CheckCircle2, MessageCircle } from 'lucide-react';

export function MedicineOrderModule() {
  const config = siteConfig;
  
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<MedicineOrderPayload>({
    patientName: '',
    phone: '',
    address: '',
    medicineNotes: '',
    prescriptionImage: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, upload to storage or convert to base64. 
      // For this template, we just fake the preview URL.
      const url = URL.createObjectURL(file);
      setFormData((prev: MedicineOrderPayload) => ({ ...prev, prescriptionImage: url }));
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const success = await submitMedicineOrder(
      formData, 
      config.integrations.medicineOrderTarget as any, 
      config.integrations.webhookUrl
    );

    setIsSubmitting(false);
    if (success) {
      setStep(3);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (!config.features.medicineOrdering) return null;

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Medicine</h2>
          <p className="text-gray-600">Upload your prescription and we&apos;ll keep it ready for you.</p>
        </div>

        <div className="bg-surface rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
          {step === 1 && (
            <div className="text-center">
              <label className="cursor-pointer flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-primary/30 rounded-2xl bg-white hover:bg-primary/5 transition-colors">
                <UploadCloud className="w-12 h-12 text-primary mb-4" />
                <span className="text-lg font-medium text-gray-900 mb-1">Upload Prescription</span>
                <span className="text-sm text-gray-500">Tap to browse or take a photo</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {formData.prescriptionImage && (
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-6 border border-gray-200">
                  <img 
                    src={formData.prescriptionImage} 
                    alt="Prescription preview" 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    type="button"
                    onClick={() => {
                      setFormData((prev: MedicineOrderPayload) => ({ ...prev, prescriptionImage: '' }));
                      setStep(1);
                    }}
                    className="absolute top-2 right-2 bg-white/90 backdrop-blur text-sm font-medium px-3 py-1 rounded-full text-gray-700 shadow-sm"
                  >
                    Change Image
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Patient Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.patientName}
                    onChange={e => setFormData((prev: MedicineOrderPayload) => ({ ...prev, patientName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData((prev: MedicineOrderPayload) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="+91"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Address (Optional)</label>
                <input 
                  type="text"
                  value={formData.address}
                  onChange={e => setFormData((prev: MedicineOrderPayload) => ({ ...prev, address: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="House No, Street, Landmark"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Notes (Optional)</label>
                <textarea 
                  value={formData.medicineNotes}
                  onChange={e => setFormData((prev: MedicineOrderPayload) => ({ ...prev, medicineNotes: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none h-24"
                  placeholder="Any specific instructions..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Order'}
              </button>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Received!</h3>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                We&apos;ve received your prescription. To get instant updates on your order, please notify us on WhatsApp.
              </p>
              <a 
                href={`https://wa.me/${config.social.whatsapp?.replace(/[^0-9]/g, '')}?text=Hi, I just submitted a medicine order for ${formData.patientName}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Notify on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



