// components/contact/ContactInfo.tsx
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Our Offices</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <MapPin className="h-5 w-5 mt-1 text-primary dark:text-blue-400" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Ghana Headquarters</h3>
            <p className="text-gray-600 dark:text-gray-300">
              123 API Street, Digital District<br />
              Accra, Ghana
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="h-5 w-5 text-primary dark:text-blue-400" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">
              +233 123 456 789
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mail className="h-5 w-5 text-primary dark:text-blue-400" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">
              contact@sendexa.co
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}