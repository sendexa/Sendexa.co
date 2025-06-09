"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";

interface MobileMoneyPaymentFormProps {
  onPaymentInitiated: () => void;
}

interface MobileMoneyPaymentData {
  phoneNumber: string;
  network: string;
}

const MobileMoneyPaymentForm: React.FC<MobileMoneyPaymentFormProps> = ({
  onPaymentInitiated,
}) => {
  const [formData, setFormData] = useState<MobileMoneyPaymentData>({
    phoneNumber: "",
    network: "momo",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phoneNumber || !formData.network) {
      return;
    }
    onPaymentInitiated();
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Mobile Money Payment
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 grid grid-cols-1 gap-4">
          {/* Network Select */}
          <div className="col-span-2">
            <label
              htmlFor="network"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Mobile Network*
            </label>
            <div className="relative">
              {/* Left Icon */}
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Image
                  src={`/brands/${formData.network}.svg`}
                  alt={formData.network}
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </div>

              {/* Select Input */}
              <select
                id="network"
                className="block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 pr-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={formData.network}
                onChange={handleChange}
                required
              >
                <option value="momo">MTN Mobile Money</option>
                <option value="telecel">Telecel Cash</option>
                <option value="at">AT Money</option>
              </select>

              {/* Right Dropdown Icon */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>

          {/* Phone Number Input */}
          <div className="col-span-2">
            <label
              htmlFor="phoneNumber"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number*
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
                placeholder="0244123456"
                value={formData.phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setFormData((prev) => ({
                    ...prev,
                    phoneNumber: value,
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
          Pay with Mobile Money
        </button>
      </form>
    </div>
  );
};

export default MobileMoneyPaymentForm;
