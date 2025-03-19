import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    features: ['Basic Features', '5 Projects', '2GB Storage', 'Email Support'],
  },
  {
    name: 'Professional',
    price: 99,
    features: ['Advanced Features', 'Unlimited Projects', '20GB Storage', '24/7 Support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 299,
    features: ['Custom Solutions', 'Dedicated Server', 'Unlimited Storage', 'Priority Support'],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.popular
                  ? 'bg-blue-600 text-white transform scale-105'
                  : 'bg-gray-50'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition duration-300 ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};