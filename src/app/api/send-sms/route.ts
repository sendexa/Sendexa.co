import { NextResponse } from 'next/server';

const CLIENT_ID = 'oqbznbkr';
const CLIENT_SECRET = 'fafteobz';
const SENDER_ID = 'Sendexa';

export async function POST(request: Request) {
  try {
    const { phone, message } = await request.json();

    // Validate phone number format (should be in E164 format)
    if (!phone || !phone.startsWith('233')) {
      return NextResponse.json(
        { error: 'Invalid phone number. Must start with 233' },
        { status: 400 }
      );
    }

    // Validate message
    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message cannot be empty' },
        { status: 400 }
      );
    }

    // Construct the API URL
    const apiUrl = `https://smsc.hubtel.com/v1/messages/send?clientsecret=${CLIENT_SECRET}&clientid=${CLIENT_ID}&from=${SENDER_ID}&to=${phone}&content=${encodeURIComponent(message)}`;

    // Send the SMS
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle specific error cases
      if (data.statusDescription) {
        return NextResponse.json(
          { error: data.statusDescription },
          { status: response.status }
        );
      }
      return NextResponse.json(
        { error: 'Failed to send SMS' },
        { status: response.status }
      );
    }

    // Check the status from Hubtel's response
    if (data.status !== 0) {
      return NextResponse.json(
        { error: data.statusDescription || 'Failed to send SMS' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data.messageId,
      rate: data.rate,
    });
  } catch (error) {
    console.error('SMS sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send SMS. Please try again.' },
      { status: 500 }
    );
  }
} 