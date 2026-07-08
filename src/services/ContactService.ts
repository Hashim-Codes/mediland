export class ContactService {
  static async submit(data: any) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }
    
    return response.json();
  }
}

