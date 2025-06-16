import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false // Only use this in development
  }
});

// Verify SMTP connection configuration
transporter.verify(function (error) {
  if (error) {
    console.log('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to take our messages');
  }
});

export async function POST(request: Request) {
  try {
    const { to, subject, message } = await request.json();

    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: 'Recipient email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Sendexa" <${process.env.SMTP_FROM_EMAIL}>`,
      to,
      subject,
      text: message,
      html: message.replace(/\n/g, '<br>'),
    });

    console.log('Message sent:', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please check your SMTP configuration.' },
      { status: 500 }
    );
  }
} 