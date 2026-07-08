export class AppointmentService {
  static async submit(data: any) {
    const response = await fetch('/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit appointment');
    }
    
    return response.json();
  }
}

