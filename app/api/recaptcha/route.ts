// app/api/recaptcha/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, message, token } = await request.json();

  if (!token) {
    return NextResponse.json({ success: false, message: 'Missing reCAPTCHA token' }, { status: 400 });
  }

  // Verify the token
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const recaptchaResponse = await fetch(verificationUrl, { method: 'POST' });
    const recaptchaData = await recaptchaResponse.json();

    if (recaptchaData.success) {
        if (recaptchaData.score !== undefined && recaptchaData.score < 0.5) {
            // It's a v3 request with a low score
            return NextResponse.json({ success: false, message: 'reCAPTCHA score too low' }, { status: 400 });
        }
        
        // reCAPTCHA verification successful (for v2 or v3 with good score)
        console.log(`Received message from ${name}: ${message}`);
        // TODO: Process the form data
        return NextResponse.json({ success: true, message: 'Enquiry submitted successfully' });
    
    } else {
        // reCAPTCHA verification failed
        return NextResponse.json({ success: false, message: 'reCAPTCHA verification failed' }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}