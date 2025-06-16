import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    // Validate phone number format
    if (!phone || !phone.startsWith('233')) {
      return NextResponse.json(
        { error: 'Invalid phone number format. Must start with 233' },
        { status: 400 }
      );
    }

    // Make request to Hubtel OTP API
    const response = await fetch('https://api-otp.hubtel.com/otp/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${process.env.HUBTEL_CLIENT_ID}:${process.env.HUBTEL_CLIENT_SECRET}`).toString('base64')}`,
      },
      body: JSON.stringify({
        senderId: 'Sendexa',
        phoneNumber: phone,
        countryCode: 'GH',
        message: 'Sendexa Alert: Your OTP is {code} (Ref: {prefix}). Never disclose this code to anyone.'
      }),
    });

    const data = await response.json();

    if (data.code === '0000') {
      // Store the requestId and prefix in cookies
      const cookieStore = await cookies();
      cookieStore.set('otp_requestId', data.data.requestId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 300, // 5 minutes
        path: '/',
      });
      cookieStore.set('otp_prefix', data.data.prefix, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 300, // 5 minutes
        path: '/',
      });

      return NextResponse.json({
        success: true,
        prefix: data.data.prefix,
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to send OTP' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
} 