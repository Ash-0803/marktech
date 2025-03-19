import React from 'react';
import { Code, Rocket, Shield, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Development',
    description: 'Tailored solutions built with cutting-edge technology',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Security First',
    description: 'Enterprise-grade security for your peace of mind',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast',
    description: 'Optimized performance for the best user experience',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Scalable Solutions',
    description: 'Grow your business with confidence',
  },
];

export const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};