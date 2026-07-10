import { siteConfig } from '@/config/site.config';
import { AppointmentService } from '@/services/AppointmentService';
import { MedicineService } from '@/services/MedicineService';
import { ContactService } from '@/services/ContactService';

export interface FormPayload {
  [key: string]: any;
}

export class FormSubmissionService {
  static async submit(
    payload: FormPayload, 
    formConfig: any
  ): Promise<boolean> {
    const integration = formConfig.integration;

    // Enhance payload
    const enrichedPayload = {
      ...payload,
      _metadata: {
        formId: formConfig.id,
        timestamp: new Date().toISOString(),
        source: 'Website'
      }
    };

    console.log(`[FormEngine] Submitting to ${integration}`, enrichedPayload);

    try {
      if (integration === 'whatsapp') {
        return this.submitToWhatsApp(enrichedPayload, formConfig);
      } else if (integration === 'api') {
        if (formConfig.id === 'appointment') {
          await AppointmentService.submit(enrichedPayload);
        } else if (formConfig.id === 'medicine-order') {
          await MedicineService.submit(enrichedPayload);
        } else {
          await ContactService.submit(enrichedPayload);
        }
        return true;
      }
      throw new Error("Invalid integration type");
    } catch (error: any) {
      console.error("[FormEngine] Submission failed:", error);
      throw error;
    }
  }

  private static submitToWhatsApp(payload: FormPayload, formConfig: any): boolean {
    if (!siteConfig.social.whatsapp) {
      console.error("WhatsApp number not configured.");
      return false;
    }

    const phone = siteConfig.social.whatsapp.replace(/[^0-9]/g, '');
    let message = `*New ${formConfig.title}*\n\n`;

    formConfig.fields.forEach((field: any) => {
      const value = payload[field.id];
      if (value) {
        message += `*${field.label}:* ${value}\n`;
      }
    });

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    return true;
  }
}

