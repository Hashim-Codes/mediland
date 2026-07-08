export interface MedicineOrderPayload {
  patientName: string;
  phone: string;
  address: string;
  medicineNotes?: string;
  prescriptionImage?: string; // base64 or URL
}

export type IntegrationTarget = 'google_sheets' | 'email' | 'whatsapp' | 'bizonfy_crm';

export async function submitMedicineOrder(
  payload: MedicineOrderPayload,
  target: IntegrationTarget,
  webhookUrl?: string
): Promise<boolean> {
  try {
    switch (target) {
      case 'whatsapp':
        return await submitToWhatsApp(payload);
      case 'google_sheets':
        if (!webhookUrl) throw new Error("Webhook URL required for Google Sheets");
        return await submitToWebhook(payload, webhookUrl);
      case 'bizonfy_crm':
        // Placeholder for future Bizonfy CRM integration
        console.log("Submitting to Bizonfy CRM:", payload);
        return true;
      case 'email':
      default:
        console.warn(`Integration target ${target} not fully implemented yet.`);
        return true;
    }
  } catch (error) {
    console.error("Failed to submit medicine order:", error);
    return false;
  }
}

async function submitToWhatsApp(payload: MedicineOrderPayload): Promise<boolean> {
  // In a real browser environment, this would format a message and potentially redirect
  // or return the text to be opened via wa.me link.
  // For the API submission part, we just return true.
  console.log("Formatting for WhatsApp:", payload);
  return true;
}

async function submitToWebhook(payload: MedicineOrderPayload, url: string): Promise<boolean> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return response.ok;
}

