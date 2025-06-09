"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";

interface WalletPaymentFormProps {
  onPaymentInitiated: () => void;
}

interface WalletPaymentData {
  walletProvider: string;
  phoneNumber: string;
}

const WalletPaymentForm: React.FC<WalletPaymentFormProps> = ({ onPaymentInitiated }) => {
  const [formData, setFormData] = useState<WalletPaymentData>({
    walletProvider: "sendexa",
    phoneNumber: "",
  });

  const isSendexa = formData.walletProvider === "sendexa";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { phoneNumber } = formData;

    if (isSendexa) {
      if (!/^\d{8}$/.test(phoneNumber)) return;
    } else {
      if (!/^0\d{9}$/.test(phoneNumber)) return;
    }

    onPaymentInitiated();
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Digital Wallet Payment
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 grid grid-cols-1 gap-4">
          {/* Wallet Provider */}
          <div>
            <label htmlFor="walletProvider" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Wallet Provider*
            </label>
            <div className="relative">
              {/* Left Logo */}
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Image 
                  src={`/brands/${formData.walletProvider}.svg`} 
                  alt={formData.walletProvider} 
                  width={20} 
                  height={20} 
                  className="h-5 w-5 object-contain"
                />
              </div>

              <select
                id="walletProvider"
                className="block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 pr-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={formData.walletProvider}
                onChange={handleChange}
                required
              >
                <option value="sendexa">Sendexa</option>
                <option value="hubtel">Hubtel</option>
                <option value="gmoney">GMoney</option>
                <option value="zeepay">Zeepay</option>
                
              </select>

              {/* Right Dropdown */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>

          {/* Phone/Account Number */}
          <div>
            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              {isSendexa ? "Sendexa Account Number*" : "Phone Number*"}
            </label>
            <div className="relative">
              {/* Left Icon */}
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>

              <input
                type="tel"
                id="phoneNumber"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder={isSendexa ? "e.g. 08012345" : "e.g. 0244123456"}
                value={formData.phoneNumber}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, '');
                  setFormData(prev => ({
                    ...prev,
                    phoneNumber: isSendexa ? cleaned.slice(0, 8) : cleaned.slice(0, 10)
                  }));
                }}
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pay with Digital Wallet
        </button>
      </form>
    </div>
  );
};

export default WalletPaymentForm;
