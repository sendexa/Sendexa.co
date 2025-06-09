// components/contact/ContactInfo.tsx
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Contact Information</h2>
      <div className="space-y-6">
        {/* Office Location */}
        <div className="flex items-start gap-4">
          <MapPin className="h-5 w-5 mt-1 text-blue-400" />
          <div>
            <h3 className="font-medium text-gray-100">Ghana Headquarters</h3>
            <p className="text-gray-300">
              123 API Street, Digital District<br />
              Accra, Ghana
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-blue-400" />
            <div>
              <h3 className="font-medium text-gray-100">Phone</h3>
              <p className="text-gray-300">
                +233 555 539 152
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-blue-400" />
            <div>
              <h3 className="font-medium text-gray-100">Email</h3>
              <p className="text-gray-300">
                hello@sendexa.co
              </p>
            </div>
          </div>
        </div>

        {/* Support Hours */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex items-start gap-4">
            <Clock className="h-5 w-5 mt-1 text-blue-400" />
            <div className="flex-1">
              <h3 className="font-medium text-gray-100 mb-3">Support Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="font-medium text-gray-100">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Weekends</span>
                  <span className="font-medium text-gray-100">24/7</span>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-400">
                    Enterprise customers receive dedicated support with 15-minute response SLA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}