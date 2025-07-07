import React, { useState } from 'react';
import { 
  Ship, 
  Package, 
  Truck, 
  Globe, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  Award,
  BarChart3,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

const ImportExport: React.FC = () => {
  const { showPopup } = usePopup();
  const [activeTab, setActiveTab] = useState<'import' | 'export'>('import');

  const importServices = [
    {
      icon: Ship,
      title: 'Global Sourcing',
      description: 'Connect with verified suppliers worldwide',
      features: ['Supplier Verification', 'Quality Assurance', 'Price Negotiation', 'Sample Procurement'],
      details: 'Our global sourcing network helps you find the best suppliers worldwide with verified credentials and quality products.'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Complete import documentation services',
      features: ['Bill of Lading', 'Commercial Invoice', 'Packing List', 'Certificate of Origin'],
      details: 'We handle all import documentation requirements ensuring compliance with international trade regulations.'
    },
    {
      icon: Shield,
      title: 'Customs Clearance',
      description: 'Smooth customs clearance process',
      features: ['Duty Calculation', 'Tax Optimization', 'Regulatory Compliance', 'Fast Processing'],
      details: 'Expert customs clearance services to ensure your imports clear customs quickly and efficiently.'
    },
    {
      icon: Truck,
      title: 'Logistics Management',
      description: 'End-to-end logistics solutions',
      features: ['Port Handling', 'Inland Transportation', 'Warehousing', 'Last Mile Delivery'],
      details: 'Comprehensive logistics management from port to your doorstep with real-time tracking.'
    }
  ];

  const exportServices = [
    {
      icon: Globe,
      title: 'Market Research',
      description: 'Identify profitable export markets',
      features: ['Market Analysis', 'Competitor Research', 'Demand Forecasting', 'Price Analysis'],
      details: 'Comprehensive market research to identify the most profitable export opportunities for your products.'
    },
    {
      icon: Users,
      title: 'Buyer Connection',
      description: 'Connect with international buyers',
      features: ['Buyer Database', 'Trade Shows', 'B2B Matching', 'Relationship Building'],
      details: 'Access our extensive network of international buyers and participate in global trade events.'
    },
    {
      icon: FileText,
      title: 'Export Documentation',
      description: 'Complete export paperwork',
      features: ['Export License', 'Shipping Documents', 'Insurance', 'Compliance Certificates'],
      details: 'We handle all export documentation ensuring your products meet destination country requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Support',
      description: 'Boost your export sales',
      features: ['Marketing Support', 'Sales Training', 'Digital Promotion', 'Trade Finance'],
      details: 'Comprehensive sales support to help you maximize your export revenue and market presence.'
    }
  ];

  const stats = [
    { icon: Globe, label: 'Countries Served', value: '50+', color: 'text-emerald-500' },
    { icon: Ship, label: 'Shipments Handled', value: '10K+', color: 'text-amber-500' },
    { icon: Users, label: 'Active Clients', value: '1000+', color: 'text-purple-500' },
    { icon: Award, label: 'Success Rate', value: '99.9%', color: 'text-orange-500' },
  ];

  const processes = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial consultation to understand your requirements',
      icon: Users
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Develop customized import/export strategy',
      icon: FileText
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Execute the plan with our expert team',
      icon: TrendingUp
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Successful delivery and ongoing support',
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Global Textiles Ltd.',
      message: 'Neosankalp helped us expand to 15 new countries. Their export expertise is unmatched.',
      type: 'export',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Tech Imports Inc.',
      message: 'Seamless import process with excellent documentation support. Highly recommended!',
      type: 'import',
      rating: 5
    },
    {
      name: 'Mohammed Al-Rashid',
      company: 'Middle East Trading',
      message: 'Professional service and competitive rates. They made international trade simple for us.',
      type: 'both',
      rating: 5
    }
  ];

  const handleServiceClick = (service: any) => {
    showPopup(
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <service.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{service.details}</p>
        <div className="space-y-2 mb-6">
          {service.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
        <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200">
          Get Quote
        </button>
      </div>,
      'info'
    );
  };

  const handleGetStarted = () => {
    showPopup(
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Request Submitted!</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Thank you for your interest. Our team will contact you within 24 hours to discuss your {activeTab} requirements.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Reference ID: NS-{activeTab.toUpperCase()}-{Date.now().toString().slice(-6)}
        </p>
      </div>,
      'success'
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Import & Export Solutions
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive import and export services to help your business thrive in the global marketplace. 
              From sourcing to delivery, we handle every aspect of international trade.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-emerald-100 dark:border-emerald-800 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-2 inline-flex">
              <button
                onClick={() => setActiveTab('import')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'import'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                <Ship className="h-5 w-5" />
                <span>Import Services</span>
              </button>
              <button
                onClick={() => setActiveTab('export')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'export'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                <Package className="h-5 w-5" />
                <span>Export Services</span>
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'import' ? importServices : exportServices).map((service, index) => (
              <div
                key={service.title}
                onClick={() => handleServiceClick(service)}
                className="group p-8 bg-gradient-to-br from-white to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-emerald-100 dark:border-emerald-800 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 2).map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Simple, transparent, and efficient process to get your goods moving across borders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div
                key={process.step}
                className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in border border-emerald-100 dark:border-emerald-800"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Client Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="p-8 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in border border-emerald-100 dark:border-emerald-800"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-amber-400 rounded-full mr-1"></div>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    {testimonial.type === 'both' ? 'Import & Export' : testimonial.type}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "{testimonial.message}"
                </p>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Trading Globally?
            </h2>
            <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
              Join thousands of businesses who trust Neosankalp for their international trade needs. 
              Get started today and expand your business worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleGetStarted}
                className="px-10 py-5 bg-white text-emerald-600 font-semibold rounded-2xl hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg"
              >
                Get Started Today
              </button>
              <button className="px-10 py-5 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300 text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportExport;