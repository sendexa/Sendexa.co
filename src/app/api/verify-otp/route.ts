import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { code } = await request.json();
    const cookieStore = await cookies();

    // Get the requestId and prefix from cookies
    const requestId = cookieStore.get('otp_requestId')?.value;
    const prefix = cookieStore.get('otp_prefix')?.value;

    if (!requestId || !prefix) {
      return NextResponse.json(
        { error: 'OTP session expired or invalid. Please request a new OTP.' },
        { status: 400 }
      );
    }

    // Validate OTP code format
    if (!code || !/^\d{4}$/.test(code)) {
      return NextResponse.json(
        { error: 'Invalid OTP code. Please enter a 4-digit code.' },
        { status: 400 }
      );
    }

    // Verify OTP with Hubtel
    const response = await fetch('https://api-otp.hubtel.com/otp/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from('oqbznbkr:fafteobz').toString('base64')}`,
      },
      body: JSON.stringify({
        requestId,
        prefix,
        code
      }),
    });

    // Create response with cleared cookies
    const responseHeaders = new Headers();
    responseHeaders.append('Set-Cookie', 'otp_requestId=; Path=/; Max-Age=0');
    responseHeaders.append('Set-Cookie', 'otp_prefix=; Path=/; Max-Age=0');

    if (response.status === 200) {
      return NextResponse.json(
        { success: true, message: 'OTP verified successfully' },
        { headers: responseHeaders }
      );
    } else {
      const data = await response.json();
      return NextResponse.json(
        { error: data.message || 'Invalid OTP code. Please try again.' },
        { status: 400, headers: responseHeaders }
      );
    }
  } catch (error) {
    console.error('OTP verification error:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP. Please try again.' },
      { status: 500 }
    );
  }
} 