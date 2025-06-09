import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9\s-]+$/, "Invalid phone number"),
  subject: z.string().min(5, "Subject too short"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // TODO: Replace with your email service (e.g., SendGrid, AWS SES, etc.)
    // For now, we'll just log the data
    console.log('Contact form submission:', validatedData);

    // Here you would typically:
    // 1. Send an email to your support team
    // 2. Store the message in your database
    // 3. Send an auto-reply to the user

    return NextResponse.json({ 
      success: true, 
      message: 'Message received successfully' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}