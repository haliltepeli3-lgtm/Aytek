import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, name, phone, email, message, locale } = body;

    if (!company || !name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log to console (Resend API can be added later)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Locale:', locale);
    console.log('Company:', company);
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('===================================');

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
