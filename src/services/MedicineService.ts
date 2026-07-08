export class MedicineService {
  static async submit(data: any) {
    const response = await fetch('/api/medicine', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit medicine order');
    }
    
    return response.json();
  }
}

