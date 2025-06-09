"use client";
import { motion } from 'framer-motion';
import { InteractiveMap } from '@/components/payments/shared/InteractiveMap';
import { CreditCard, Smartphone, Banknote, QrCode } from 'lucide-react';
import { Container } from '@/layout/Container';

const paymentMethods = [
  {
    icon: <CreditCard className="w-6 h-6 text-blue-400" />,
    name: "Credit/Debit Cards",
    coverage: "Global"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    name: "Mobile Wallets",
    coverage: "50+ countries"
  },
  {
    icon: <Banknote className="w-6 h-6 text-blue-400" />,
    name: "Bank Transfers",
    coverage: "30+ countries"
  },
  {
    icon: <QrCode className="w-6 h-6 text-blue-400" />,
    name: "QR Payments",
    coverage: "15+ countries"
  }
];

export const PaymentMethods = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto">
        <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Accept <span className="text-blue-400">Every Payment Method</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Support all the ways your customers want to pay, in every market you operate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-400/30 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-blue-900/20 mr-4">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{method.name}</h3>
                  </div>
                  <div className="text-sm text-blue-300 font-mono">
                    Coverage: {method.coverage}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Local Payment Expertise</h3>
              <p className="text-gray-400 mb-4">
                We optimize for local payment preferences in each market:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {['Alipay (China)', 'iDEAL (Netherlands)', 'PIX (Brazil)', 
                  'UPI (India)', 'Klarna (Europe)', 'Boleto (Brazil)'].map((method, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                    <span className="text-gray-300">{method}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="h-[500px] rounded-xl overflow-hidden border border-gray-800">
            <InteractiveMap 
              data={[]} 
              color="blue"
            />
          </div>
        </div>
        </Container>
      </div>
    </section>
  );
};