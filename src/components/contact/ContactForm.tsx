// components/contact/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/ui/Button';
import { Input } from '@/ui/input';
import { Textarea } from '@/ui/textarea';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9\s-]+$/, "Invalid phone number"),
  subject: z.string().min(5, "Subject too short"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus('idle');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }
      
      setSubmitStatus('success');
      setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Error sending message. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Send Us a Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            {...register('name')}
            placeholder="Full Name"
            className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.name?.message && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              {...register('email')}
              placeholder="Email Address"
              type="email"
              className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email?.message && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register('phone')}
              placeholder="Phone Number"
              className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.phone?.message && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div>
          <Input
            {...register('subject')}
            placeholder="Subject"
            className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.subject?.message && (
            <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>
        <div>
          <Textarea
            {...register('message')}
            placeholder="Your Message"
            rows={5}
            className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.message?.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        {submitStatus !== 'idle' && (
          <div className={`p-4 rounded-lg ${
            submitStatus === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}>
            {submitMessage}
          </div>
        )}
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}