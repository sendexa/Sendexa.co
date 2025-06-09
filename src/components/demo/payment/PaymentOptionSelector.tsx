"use client";
import React, { useState } from "react";
import CardPaymentForm from "./CardPaymentForm";
import MobileMoneyPaymentForm from "./MobileMoneyPaymentForm";
import WalletPaymentForm from "./WalletPaymentForm";
import OTPVerificationForm from "./OTPVerificationForm";
import SecurityModal from "./SecurityModal";
import StatusModal from "./StatusModal";
import {
  Lock,
  // ShieldCheck,
  ArrowLeft,
  ChevronRight,
  CreditCard,
  Smartphone,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

type PaymentMethod = "card" | "mobileMoney" | "wallet";

interface PaymentDetails {
  merchantName: string;
  merchantLogo: string;
  amount: number;
  currency: string;
}

const PaymentOptionSelector: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null
  );
  const [showOtp, setShowOtp] = useState(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    status: "success" as "success" | "failed" | "insufficient",
    title: "",
    description: "",
  });

  const paymentDetails: PaymentDetails = {
    merchantName: "Sendexa Cares",
    merchantLogo: "/hero/slider-1.webp",
    amount: 2.99,
    currency: "GHS",
  };

  const handlePaymentInitiated = () => {
    setShowOtp(true);
  };

  const handleOtpComplete = () => {
    // Removed unused otp parameter
    setShowOtp(false);
    setTimeout(() => {
      const status =
        Math.random() > 0.5
          ? "success"
          : Math.random() > 0.5
          ? "failed"
          : "insufficient";
      setModalState({
        isOpen: true,
        status,
        title:
          status === "success"
            ? "Payment Successful"
            : status === "failed"
            ? "Verification Failed"
            : "Insufficient Funds",
        description:
          status === "success"
            ? "Your payment has been verified and completed successfully."
            : status === "failed"
            ? "Oops! The code you entered is invalid. Try again."
            : "You don't have enough funds to complete this transaction.",
      });
    }, 1500);
  };

  const handleOtpResend = () => {
    console.log("Resending OTP...");
  };

  const SecurityBadge = () => (
    <motion.div
      className="mt-6 flex flex-col items-center justify-center gap-2 text-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/50 rounded-full shadow-sm backdrop-blur-sm text-gray-600 dark:text-gray-300">
        <Lock className="h-4 w-4 text-green-500" />
        <span>
          Secured by <span className="font-semibold text-primary">Sendexa</span>
        </span>
      </div>
      {/* <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
        <ShieldCheck className="h-4 w-4 text-blue-500" />
        <span>
          Your money is safe.{" "}
          <button
            onClick={() => setIsSecurityModalOpen(true)}
            className="underline text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
          >
            See how.
          </button>
        </span>
      </div> */}
    </motion.div>
  );

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <div className="mt-6 sm:mt-8 lg:flex lg:items-center lg:justify-center lg:gap-12">
            <div className="w-full max-w-md">
              {/* Enhanced Payment Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ x: 2 }}
                    className="flex items-center gap-4"
                  >
                    {paymentDetails.merchantLogo && (
                      <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-blue-100 dark:border-blue-900/50 shadow-sm">
                        <Image
                          src={paymentDetails.merchantLogo}
                          alt={paymentDetails.merchantName}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-full border border-white/30 dark:border-gray-700/30" />
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        Paying to
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {paymentDetails.merchantName}
                      </h3>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="text-right"
                  >
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Amount to pay
                    </p>
                    <div className="flex items-center justify-end gap-1">
                      <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                        {paymentDetails.currency}
                      </span>
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 dark:text-white"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        {paymentDetails.amount.toFixed(2)}
                      </motion.h3>
                    </div>
                    <div className="mt-1 h-0.5 w-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 dark:from-blue-400/10 dark:to-blue-600/10" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10" />
              </motion.div>

              {showOtp ? (
                <div className="w-full">
                  <OTPVerificationForm
                    onComplete={handleOtpComplete}
                    onResend={handleOtpResend}
                    otpValue={undefined}
                  />
                  <SecurityBadge />
                </div>
              ) : !selectedMethod ? (
                <div className="w-full">
                  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                    <h2 className="mb-6 text-2xl font-medium text-gray-900 dark:text-white text-left">
                      Pay With
                    </h2>
                    <div className="space-y-3">
                      {/* Payment method options with enhanced design */}
                      {[
                        {
                          method: "card",
                          title: "Credit/Debit Card",
                          description: "Pay with Visa or Mastercard",
                          icon: (
                            <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                          ),
                          brands: ["visa", "mastercard"],
                          color: "blue",
                        },
                        {
                          method: "mobileMoney",
                          title: "Mobile Money",
                          description:
                            "Pay with MTN MoMo, Telecel Cash or AT Money",
                          icon: (
                            <Smartphone className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                          ),
                          brands: ["momo", "telecel", "at"],
                          color: "purple",
                        },
                        {
                          method: "wallet",
                          title: "Digital Wallet",
                          description: "Pay with Sendexa, Hubtel or GMoney",
                          icon: (
                            <Wallet className="h-6 w-6 text-green-600 dark:text-green-300" />
                          ),
                          brands: ["sendexa","hubtel", "gmoney"],
                          color: "green",
                        },
                      ].map((option) => (
                        <motion.button
                          key={option.method}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() =>
                            setSelectedMethod(option.method as PaymentMethod)
                          }
                          className={`flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-${option.color}-500 hover:bg-${option.color}-50 hover:shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:hover:border-${option.color}-500 dark:hover:bg-gray-600`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${option.color}-100 dark:bg-${option.color}-900`}
                            >
                              {option.icon}
                            </div>
                            <div className="text-left">
                              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                {option.title}
                              </h3>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {option.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {option.brands.map((brand) => (
                              <Image
                                key={brand}
                                src={`/payments/${brand}.svg`}
                                alt={brand}
                                width={32}
                                height={20}
                                className="h-5 w-8 object-contain"
                              />
                            ))}
                            <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    {/* //cancel button */}

                    {/* <div className="mt-6 flex justify-center">
                      <button
                        onClick={() => setSelectedMethod(null)}
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 underline underline-offset-4 shadow-sm transition-colors hover:border-blue-500 hover:text-blue-600 active:bg-blue-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400 dark:active:bg-blue-900"
                      >
                        <ArrowLeft className="mr-2 h-8 w-full" />
                        Cancel
                      </button>
                    </div> */}
                  </div>

                  <SecurityBadge />
                </div>
              ) : (
                <div className="w-full">
                  <button
                    onClick={() => setSelectedMethod(null)}
                    className="mb-4 flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to payment methods
                  </button>

                  {selectedMethod === "card" ? (
                    <>
                      <CardPaymentForm
                        onPaymentInitiated={handlePaymentInitiated}
                      />
                      <SecurityBadge />
                    </>
                  ) : selectedMethod === "mobileMoney" ? (
                    <>
                      <MobileMoneyPaymentForm
                        onPaymentInitiated={handlePaymentInitiated}
                      />
                      <SecurityBadge />
                    </>
                  ) : (
                    <>
                      <WalletPaymentForm
                        onPaymentInitiated={handlePaymentInitiated}
                      />
                      <SecurityBadge />
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <SecurityModal
        open={isSecurityModalOpen}
        onOpenChange={setIsSecurityModalOpen}
      />

      <StatusModal
        isOpen={modalState.isOpen}
        status={modalState.status}
        title={modalState.title}
        description={modalState.description}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        onAction={() => {
          if (modalState.status === "success") {
            // Handle successful payment
          } else if (modalState.status === "failed") {
            setShowOtp(true);
          } else {
            // Handle insufficient funds
          }
        }}
      />
    </section>
  );
};

export default PaymentOptionSelector;
