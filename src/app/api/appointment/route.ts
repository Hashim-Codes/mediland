import { NextResponse } from 'next/server';
import { deployConfig } from '@/config/deploy.config';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Server-side validation
    if (!data.patientName || !data.phoneNumber || !data.department || !data.preferredDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    if (deployConfig.backend === 'google-sheets') {
      const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
      if (!scriptUrl || scriptUrl.trim() === '') {
        console.error('GOOGLE_SCRIPT_URL is not configured');
        return NextResponse.json({ error: 'System configuration error. Please try again later.' }, { status: 500 });
      }
      
      try {
        const response = await fetch(scriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'appointment', ...data })
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Google Sheets API error:', response.status, errorText);
          return NextResponse.json({ error: 'Failed to process request with database' }, { status: 502 });
        }
        
        // Ensure the Apps Script returned our success JSON
        const responseData = await response.json().catch(() => null);
        if (responseData && responseData.status === 'error') {
          console.error('Google Sheets script reported error:', responseData.message);
          return NextResponse.json({ error: 'Database rejected the submission' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
      } catch (networkError) {
        console.error('Network error calling Google Sheets:', networkError);
        return NextResponse.json({ error: 'Failed to connect to the database. Please try again.' }, { status: 502 });
      }
    }
    
    return NextResponse.json({ error: 'Backend integration not implemented' }, { status: 501 });

  } catch (error: any) {
    console.error('Appointment API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

