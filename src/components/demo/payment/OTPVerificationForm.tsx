"use client";
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";

interface OTPVerificationFormProps {
  onComplete: (otp: string) => void;
  onResend: () => void;
  otpValue?: string; // Changed from any to optional string
}

const OTPVerificationForm: React.FC<OTPVerificationFormProps> = ({
  onComplete,
  onResend,
  otpValue = "", // Default value for otpValue
}) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize with otpValue if provided
  useEffect(() => {
    if (otpValue && otpValue.length === 6 && /^\d+$/.test(otpValue)) {
      setOtp(otpValue.split(""));
    }
  }, [otpValue]);

  // Focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Handle countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if a digit was entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // If all digits are filled, trigger completion
    if (newOtp.every((digit) => digit) && newOtp.length === 6) {
      handleSubmit(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").slice(0, 6);
    if (/^\d+$/.test(pasteData)) {
      const newOtp = [...otp];
      for (let i = 0; i < pasteData.length && i < 6; i++) {
        newOtp[i] = pasteData[i];
      }
      setOtp(newOtp);
      if (pasteData.length === 6) {
        handleSubmit(newOtp.join(""));
      } else {
        inputRefs.current[pasteData.length]?.focus();
      }
    }
  };

  const handleSubmit = (otpValue: string) => {
    setIsSubmitting(true);
    onComplete(otpValue);
  };

  const handleResend = () => {
    if (countdown === 0) {
      setCountdown(30);
      onResend();
    }
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <h2 className="mb-6 text-2xl font-medium text-gray-900 dark:text-white">
        Verify Your Payment
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        We&apos;ve sent a 6-digit verification code to your mobile number ending
        with <span className="font-semibold">****45</span>
      </p>

      <div className="mb-8 flex justify-center gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="h-12 w-11 rounded-lg border border-gray-300 bg-gray-50 text-center text-2xl font-bold text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-900"
            disabled={isSubmitting}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={() => handleSubmit(otp.join(""))}
          disabled={otp.some((d) => !d) || isSubmitting}
          className="flex w-80 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isSubmitting ? (
            <>
              <svg
                className="mr-2 h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Verifying...
            </>
          ) : (
            "Verify & Complete Payment"
          )}
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Didn&apos;t receive the code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={countdown > 0}
            className={`font-medium ${
              countdown > 0
                ? "text-gray-400 dark:text-gray-500"
                : "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            }`}
          >
            {countdown > 0 ? `Resend in ${countdown}s` : "Resend OTP"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default OTPVerificationForm;
