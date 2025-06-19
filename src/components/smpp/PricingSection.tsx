import { Badge } from '@/ui/badge'
import  Button  from '@/ui/Button'
import { CheckCircle2, ChevronRight } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      description: "For small businesses and startups",
      features: [
        "Up to 100,000 messages/month",
        "2 SMPP connections",
        "Basic analytics",
        "Email support"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$999",
      description: "For growing businesses",
      features: [
        "Up to 1M messages/month",
        "5 SMPP connections",
        "Advanced analytics",
        "Priority support",
        "99.9% uptime SLA"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For mission-critical operations",
      features: [
        "Unlimited volume",
        "Dedicated SMPP servers",
        "Custom routing logic",
        "24/7 premium support",
        "99.99% uptime SLA",
        "Dedicated account manager"
      ],
      cta: "Contact Sales"
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-purple-50 via-blue-100 to-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600">
          Pay only for what you need with volume-based pricing
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`border rounded-xl p-8 relative ${plan.popular ? 'border-blue-300 shadow-lg' : 'border-gray-200 shadow-sm'}`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                Most Popular
              </Badge>
            )}
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              size="lg" 
              className={`w-full ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
            >
              {plan.cta}
              <ChevronRight className="w-4 h-4 ml-2 text-white" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}