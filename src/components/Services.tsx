import React, { useState } from 'react';
import { Ship, Package, Truck, Globe, CheckCircle, X, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  detailedInfo: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 'import',
      icon: Ship,
      title: 'Import Services',
      description: 'Comprehensive import solutions for businesses seeking quality products from global markets.',
      features: ['Custom Clearance', 'Quality Inspection', 'Documentation', 'Logistics Coordination'],
      detailedInfo: 'Our import services cover everything from sourcing premium products worldwide to ensuring they reach your doorstep safely. We handle all documentation, customs clearance, and quality checks to guarantee smooth operations.'
    },
    {
      id: 'export',
      icon: Package,
      title: 'Export Services',
      description: 'Expand your business globally with our expert export services and international partnerships.',
      features: ['Market Analysis', 'Export Documentation', 'International Shipping', 'Trade Compliance'],
      detailedInfo: 'Take your products to international markets with confidence. Our export services include market research, regulatory compliance, shipping arrangements, and ongoing support to help your business thrive globally.'
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Logistics & Shipping',
      description: 'End-to-end logistics solutions ensuring your products reach their destination safely and on time.',
      features: ['Freight Forwarding', 'Warehousing', 'Track & Trace', 'Insurance Coverage'],
      detailedInfo: 'Our comprehensive logistics network ensures efficient transportation of your goods. From warehousing to last-mile delivery, we provide complete visibility and control over your shipments.'
    },
    {
      id: 'consulting',
      icon: Globe,
      title: 'Trade Consulting',
      description: 'Expert advice and strategic guidance for international trade operations and market expansion.',
      features: ['Market Research', 'Regulatory Guidance', 'Risk Assessment', 'Strategic Planning'],
      detailedInfo: 'Navigate the complexities of international trade with our expert consulting services. We provide strategic insights, market intelligence, and regulatory guidance to optimize your global trade operations.'
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive import-export solutions tailored to your business needs, 
            backed by years of experience and global partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openModal(service)}
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <selectedService.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                </div>
                
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedService.detailedInfo}
              </p>

              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {selectedService.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200">
                  Get Quote
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;