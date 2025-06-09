// app/demo/payments/page.tsx
"use client";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import {
  CreditCard,
  Wallet,
  Banknote,
  Code,
  CheckCircle,
  Smartphone,
} from "lucide-react";
import Button from "@/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { Input } from "@/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { useState } from "react";

export default function PaymentsDemoPage() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("GHS");
  const [paymentMethod, setPaymentMethod] = useState("mobile_money");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const generateTransactionId = () => {
    return "txn_" + Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handlePayment = () => {
    setIsProcessing(true);
    const txnId = generateTransactionId();
    setTransactionId(txnId);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const codeExample = `curl -X POST "https://api.sendexa.com/v1/payments/collect" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": ${amount || "100"},
    "currency": "${currency}",
    "payment_method": "${paymentMethod}",
    "phone_number": "${phoneNumber || "+233XXXXXXXXX"}",
    "reference": "order_12345",
    "callback_url": "https://yourwebsite.com/webhook"
  }'`;

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 pt-28 pb-20 border-b border-gray-800">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/40 text-green-300 mb-6 mx-auto border border-green-800/50"
            >
              <CreditCard className="w-4 h-4" />
              <span className="text-sm font-medium">Payments API Demo</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400"
            >
              Seamless Payments for Africa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Collect and disburse payments across Ghana with our secure,
              developer-friendly API
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Demo Section */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-900/30 text-green-300">
                  <Wallet className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Test Payment Collection
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Amount
                    </label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="100"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="currency"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Currency
                    </label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="GHS" className="hover:bg-gray-700">
                          GHS (₵)
                        </SelectItem>
                        <SelectItem value="USD" className="hover:bg-gray-700">
                          USD ($)
                        </SelectItem>
                        <SelectItem value="NGN" className="hover:bg-gray-700">
                          NGN (₦)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="paymentMethod"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Payment Method
                  </label>
                  <Select
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem
                        value="mobile_money"
                        className="hover:bg-gray-700"
                      >
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4" />
                          Mobile Money
                        </div>
                      </SelectItem>
                      <SelectItem value="card" className="hover:bg-gray-700">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          Card Payment
                        </div>
                      </SelectItem>
                      <SelectItem
                        value="bank_transfer"
                        className="hover:bg-gray-700"
                      >
                        <div className="flex items-center gap-2">
                          <Banknote className="w-4 h-4" />
                          Bank Transfer
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {paymentMethod === "mobile_money" && (
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+233XXXXXXXXX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                )}

                {isSuccess && (
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-3 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <div>
                        <p className="font-medium">Payment Successful!</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Transaction ID:{" "}
                          <span className="font-mono">{transactionId}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    onClick={handlePayment}
                    disabled={
                      !amount ||
                      (paymentMethod === "mobile_money" && !phoneNumber) ||
                      isProcessing
                    }
                    className="w-full bg-green-600 hover:bg-green-500"
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
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
                        Processing Payment...
                      </span>
                    ) : isSuccess ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Payment Successful
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Initiate Payment
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Code Example */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <Tabs defaultValue="curl" className="h-full">
                <div className="flex items-center border-b border-gray-800">
                  <TabsList className="bg-transparent">
                    <TabsTrigger
                      value="curl"
                      className="data-[state=active]:bg-gray-800"
                    >
                      cURL
                    </TabsTrigger>
                    <TabsTrigger
                      value="node"
                      className="data-[state=active]:bg-gray-800"
                    >
                      Node.js
                    </TabsTrigger>
                    <TabsTrigger
                      value="python"
                      className="data-[state=active]:bg-gray-800"
                    >
                      Python
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="p-6 sm:p-8">
                  <TabsContent value="curl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-gray-800 text-gray-300">
                        <Code className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-semibold text-white">
                        API Integration
                      </h2>
                    </div>

                    <pre className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{codeExample}</code>
                    </pre>
                  </TabsContent>

                  <TabsContent value="node">
                    <pre className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{`const axios = require('axios');

const collectPayment = async () => {
  const response = await axios.post(
    'https://api.sendexa.com/v1/payments/collect',
    {
      amount: ${amount || "100"},
      currency: "${currency}",
      payment_method: "${paymentMethod}",
      phone_number: "${phoneNumber || "+233XXXXXXXXX"}",
      reference: "order_12345",
      callback_url: "https://yourwebsite.com/webhook"
    },
    {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
    }
  );
  console.log(response.data);
};

collectPayment();`}</code>
                    </pre>
                  </TabsContent>

                  <TabsContent value="python">
                    <pre className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{`import requests

url = "https://api.sendexa.com/v1/payments/collect"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "amount": ${amount || "100"},
    "currency": "${currency}",
    "payment_method": "${paymentMethod}",
    "phone_number": "${phoneNumber || "+233XXXXXXXXX"}",
    "reference": "order_12345",
    "callback_url": "https://yourwebsite.com/webhook"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`}</code>
                    </pre>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Webhook Demo */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 sm:p-10 max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Payment Webhooks
              </h2>
              <p className="text-gray-400">
                Receive real-time payment notifications
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-semibold text-white">
                  Sample Webhook Payload
                </h3>
              </div>

              <pre className="bg-gray-900 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`{
  "event": "payment.completed",
  "data": {
    "transaction_id": "${transactionId || "txn_ABC123XYZ"}",
    "amount": ${amount || "100"},
    "currency": "${currency}",
    "status": "success",
    "payment_method": "${paymentMethod}",
    "phone_number": "${phoneNumber || "+233XXXXXXXXX"}",
    "reference": "order_12345",
    "timestamp": "${new Date().toISOString()}"
  }
}`}</code>
              </pre>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
