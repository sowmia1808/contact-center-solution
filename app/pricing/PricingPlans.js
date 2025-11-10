"use client";
import { motion } from 'framer-motion';

const plans = [
  {
    title: 'Text Based',
    price: '$29',
    features: [
      'Webchat',
      'WhatsApp, Facebook Messenger, Instagram DM Integration',
      'SMS',
      'E-Mail',
      'Chat Reporting',
      'CRM',
    ],
  },
  {
    title: 'Inbound',
    price: '$59',
    features: [
      'Inbound Call Management',
      'Advanced Agent & Queue Reports',
      'Instant Monitoring Panel',
      'Embedded Webphone and Integrated CRM',
      'Advanced IVR',
      'Voice Recorder - Voice Mail',
      'VPOS – Credit Card Payment',
    ],
  },
  {
    title: 'Outbound',
    price: '$59',
    features: [
      'Preview, Progressive, and Predictive Dialer',
      'Embedded Webphone and Integrated CRM',
      'Advanced Agent & Campaign Reports',
      'Advanced IVR',
      'Voice Recorder - Voice Mail',
      'Campaign Management & Reports',
      'VPOS – Credit Card Payment',
    ],
  },
  {
    title: 'Blended',
    price: '$69',
    features: [
      'All Inbound and Outbound Features',
      'Advanced IVR',
      'Voice Recorder - Voice Mail',
      'VPOS – Credit Card Payment',
    ],
  },
  {
    title: 'Omnichannel',
    price: '$99',
    features: [
      'All Blended Features',
      'Text Based Features',
      'Requirements Management',
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="py-16 px-6 ">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
      Our Pricing Plans
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.map((plan, idx) => (
        <motion.div
          key={plan.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="flex flex-col justify-between h-full min-h-[550px] shadow-lg rounded-xl p-6 text-center 
                 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 
                 bg-white/20 backdrop-blur-lg border-2 border-pink-200">
          <h3 className="text-2xl font-semibold text-pink-700 mb-4">
            {plan.title}
          </h3>
          <p className="text-xl font-bold text-gray-800 mb-6">
            {plan.price} / Agent / Month
          </p>
          <ul className="text-left mb-6 flex-grow">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-medium text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg transition duration-300">
            Get Started
          </button>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
