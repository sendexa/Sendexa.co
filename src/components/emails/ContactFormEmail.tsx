// components/emails/ContactFormEmail.tsx
import React from 'react';
import { Html, Head, Body, Container, Section, Heading, Text, Link } from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  phone,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <title>{subject} - Sendexa Contact Form</title>
      </Head>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>New Contact Form Submission</Heading>
          
          <Section style={sectionStyle}>
            <Text style={labelStyle}>From:</Text>
            <Text style={textStyle}>
              {name} (<Link href={`mailto:${email}`} style={linkStyle}>{email}</Link>)
            </Text>
          </Section>

          <Section style={sectionStyle}>
            <Text style={labelStyle}>Phone:</Text>
            <Text style={textStyle}>
              <Link href={`tel:${phone}`} style={linkStyle}>
                {phone}
              </Link>
            </Text>
          </Section>

          <Section style={sectionStyle}>
            <Text style={labelStyle}>Subject:</Text>
            <Text style={textStyle}>{subject}</Text>
          </Section>

          <Section style={sectionStyle}>
            <Text style={labelStyle}>Message:</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              This message was sent via the Sendexa contact form on {new Date().toLocaleDateString()}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Email styles (same as before)
const bodyStyle = {
  backgroundColor: '#f9fafb',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: 0,
  padding: 0,
  color: '#111827',
};

const containerStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  margin: '2rem auto',
  maxWidth: '600px',
  padding: '2rem',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  color: '#0066ff',
  fontSize: '1.5rem',
  fontWeight: '600',
  margin: '0 0 1.5rem',
  lineHeight: '1.25',
};

const sectionStyle = {
  margin: '0 0 1.25rem',
};

const labelStyle = {
  color: '#6b7280',
  fontSize: '0.875rem',
  fontWeight: '600',
  margin: '0 0 0.25rem',
  display: 'block',
};

const textStyle = {
  fontSize: '1rem',
  margin: '0',
  lineHeight: '1.5',
  color: '#111827',
};

const messageStyle = {
  ...textStyle,
  whiteSpace: 'pre-line',
  padding: '0.75rem',
  backgroundColor: '#f3f4f6',
  borderRadius: '0.375rem',
};

const linkStyle = {
  color: '#0066ff',
  textDecoration: 'underline',
};

const footerStyle = {
  borderTop: '1px solid #e5e7eb',
  marginTop: '1.5rem',
  paddingTop: '1.5rem',
};

const footerTextStyle = {
  fontSize: '0.75rem',
  color: '#9ca3af',
  margin: '0',
};