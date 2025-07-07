import React, { useState } from 'react';
import { Ship, Package, Truck, Globe, CheckCircle, X, ArrowRight, Star, Clock, Shield } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  detailedInfo: string;
  price: string;
  duration: string;
  rating: number;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { showPopup } = usePopup();

  const services: Service[] = [
    {
      id: 'import',
      icon: Ship,
      title: 'Import Services',
      description: 'Comprehensive import solutions for businesses seeking quality products from global markets.',
      features: ['Custom Clearance', 'Quality Inspection', 'Documentation', 'Logistics Coordination', 'Risk Management', 'Compliance Support'],
      detailedInfo: 'Our import services cover everything from sourcing premium products worldwide to ensuring they reach your doorstep safely. We handle all documentation, customs clearance, and quality checks to guarantee smooth operations.',
      price: 'Starting from $500',
      duration: '7-14 days',
      rating: 4.9
    },
    {
      id: 'export',
      icon: Package,
      title: 'Export Services',
      description: 'Expand your business globally with our expert export services and international partnerships.',
      features: ['Market Analysis', 'Export Documentation', 'International Shipping', 'Trade Compliance', 'Partner Network', 'Sales Support'],
      detailedInfo: 'Take your products to international markets with confidence. Our export services include market research, regulatory compliance, shipping arrangements, and ongoing support to help your business thrive globally.',
      price: 'Starting from $750',
      duration: '10-21 days',
      rating: 4.8
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Logistics & Shipping',
      description: 'End-to-end logistics solutions ensuring your products reach their destination safely and on time.',
      features: ['Freight Forwarding', 'Warehousing', 'Track & Trace', 'Insurance Coverage', 'Last Mile Delivery', '24/7 Support'],
      detailedInfo: 'Our comprehensive logistics network ensures efficient transportation of your goods. From warehousing to last-mile delivery, we provide complete visibility and control over your shipments.',
      price: 'Starting from $300',
      duration: '3-10 days',
      rating: 4.9
    },
    {
      id: 'consulting',
      icon: Globe,
      title: 'Trade Consulting',
      description: 'Expert advice and strategic guidance for international trade operations and market expansion.',
      features: ['Market Research', 'Regulatory Guidance', 'Risk Assessment', 'Strategic Planning', 'Training Programs', 'Ongoing Support'],
      detailedInfo: 'Navigate the complexities of international trade with our expert consulting services. We provide strategic insights, market intelligence, and regulatory guidance to optimize your global trade operations.',
      price: 'Starting from $200/hour',
      duration: 'Flexible',
      rating: 5.0
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

  const handleGetQuote = (service: Service) => {
    showPopup(
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Quote Request Sent!</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Thank you for your interest in our {service.title}. Our team will contact you within 24 hours with a detailed quote.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Reference ID: NS-{Date.now().toString().slice(-6)}
        </p>
      </div>,
      'success'
    );
    closeModal();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive import-export solutions tailored to your business needs, 
              backed by years of experience and global partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-white to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in border border-blue-100 dark:border-blue-800"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(service)}
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">
                        {service.rating}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {service.price}
                    </div>
                  </div>

                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Trusted & Secure</h3>
              <p className="text-slate-600 dark:text-slate-300">
                15+ years of experience with 99.9% success rate in international trade operations.
              </p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Global Network</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Extensive partnerships across 50+ countries ensuring seamless operations worldwide.
              </p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">24/7 Support</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Round-the-clock customer support to assist you at every step of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <selectedService.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {selectedService.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(selectedService.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-slate-600 dark:text-slate-300">
                        {selectedService.rating} rating
                      </span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    {selectedService.detailedInfo}
                  </p>

                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center text-slate-600 dark:text-slate-300">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      <span>{selectedService.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {selectedService.price}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    What's Included
                  </h4>

                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {selectedService.features.map((feature) => (
                      <div key={feature} className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => handleGetQuote(selectedService)}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Get Quote Now
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;