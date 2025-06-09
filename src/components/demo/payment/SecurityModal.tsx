"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/ui/dialog";
import  Button  from "@/ui/Button";

interface SecurityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SecurityModal({ open, onOpenChange }: SecurityModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>How XtoPay Keeps Your Money Safe</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
          <p>
            We use bank-grade encryption, fraud detection, and secure tokenization to protect your financial data.
          </p>
          <p>
            All transactions are PCI-DSS compliant and monitored in real-time for suspicious behavior.
          </p>
          <p>
            Your money is held in secure virtual wallets until confirmed, with no access by third parties.
          </p>
        </div>
        <Button onClick={() => onOpenChange(false)} className="mt-4 w-full">
          Got it
        </Button>
      </DialogContent>
    </Dialog>
  );
}
