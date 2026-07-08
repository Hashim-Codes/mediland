import { NextResponse } from 'next/server';
import { deployConfig } from '@/config/deploy.config';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    if (deployConfig.backend === 'google-sheets') {
      const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
      if (!scriptUrl) {
        return NextResponse.json({ success: true, mocked: true });
      }
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...data })
      });
      
      if (!response.ok) throw new Error('Failed to save to Google Sheets');
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ success: true, message: "Reserved for Bizonfy API" });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

