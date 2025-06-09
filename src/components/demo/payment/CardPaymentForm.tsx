"use client";
import React, { useState, ChangeEvent } from "react";
import { Lock, CreditCard } from "lucide-react";

interface CardPaymentFormProps {
  onPaymentInitiated: () => void;
}

interface CardPaymentData {
  fullName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

const CardPaymentForm: React.FC<CardPaymentFormProps> = ({
  onPaymentInitiated,
}) => {
  const [formData, setFormData] = useState<CardPaymentData>({
    fullName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.cardNumber ||
      !formData.expirationDate ||
      !formData.cvv
    ) {
      return;
    }
    onPaymentInitiated();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleExpirationDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    // Auto-insert slash after MM
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }

    setFormData((prev) => ({
      ...prev,
      expirationDate: value,
    }));
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Card Payment
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Full name (as displayed on card)*
            </label>
            <input
              type="text"
              id="fullName"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Collins Joe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="cardNumber"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Card number*
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardNumber"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="1234 5678 9012 3456"
                pattern="^[0-9\s]{13,19}$"
                value={formData.cardNumber}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim();
                  setFormData((prev) => ({
                    ...prev,
                    cardNumber: value,
                  }));
                }}
                required
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <CreditCard className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label
                htmlFor="expirationDate"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Expiration date*
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="expirationDate"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="MM/YY"
                  maxLength={5}
                  value={formData.expirationDate}
                  onChange={handleExpirationDateChange}
                  required
                />
              </div>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="cvv"
                className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                CVV*
                <button
                  data-tooltip-target="cvv-desc"
                  data-tooltip-trigger="hover"
                  className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                  type="button"
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="cvv"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="123"
                  maxLength={4}
                  value={formData.cvv}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setFormData((prev) => ({
                      ...prev,
                      cvv: value,
                    }));
                  }}
                  required
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <Lock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CardPaymentForm;
