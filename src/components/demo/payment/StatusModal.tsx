"use client";
import React, { useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StatusModalProps {
  isOpen: boolean;
  status: "success" | "failed" | "insufficient";
  title: string;
  description: string;
  onClose: () => void;
  onAction?: () => void;
}

const icons = {
  success: <CheckCircle className="h-10 w-10 text-green-500" />,
  failed: <XCircle className="h-10 w-10 text-red-500" />,
  insufficient: <AlertCircle className="h-10 w-10 text-yellow-500" />,
};

const StatusModal: React.FC<StatusModalProps> = ({
  isOpen,
  status,
  title,
  description,
  onClose,
  onAction,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-sm rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <div className="mb-4 flex justify-center">{icons[status]}</div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">{description}</p>

            <div className="flex justify-center gap-4">
              {status === "success" && (
                <button
                  onClick={onAction}
                  className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  Continue
                </button>
              )}
              {status === "failed" && (
                <button
                  onClick={onAction}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Try Again
                </button>
              )}
              {status === "insufficient" && (
                <>
                  <button
                    onClick={onAction}
                    className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                  >
                    Add Funds
                  </button>
                </>
              )}
              <button
                onClick={onClose}
                className="rounded-lg border px-4 py-2 text-gray-700 dark:text-gray-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatusModal;
