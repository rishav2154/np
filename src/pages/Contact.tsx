import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageCircle,
  Globe,
  CheckCircle,
  Building,
  Calendar,
  Star
} from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

const Contact: React.FC = () => {
  const { showPopup } = usePopup();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showPopup(
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Thank you for your interest. We'll get back to you within 24 hours.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Reference ID: NS-{Date.now().toString().slice(-6)}
        </p>
      </div>,
      'success'
    );
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@neosankalp.com', 'support@neosankalp.com'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Trade Center Blvd', 'New York, NY 10001, USA'],
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'text-amber-500',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20'
    }
  ];

  const offices = [
    {
      city: 'New York',
      country: 'USA',
      address: '123 Trade Center Blvd',
      phone: '+1 (555) 123-4567',
      email: 'ny@neosankalp.com'
    },
    {
      city: 'London',
      country: 'UK',
      address: '456 Commerce Street',
      phone: '+44 20 7123 4567',
      email: 'london@neosankalp.com'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Business District',
      phone: '+65 6123 4567',
      email: 'sg@neosankalp.com'
    },
    {
      city: 'Mumbai',
      country: 'India',
      address: '321 Export Plaza',
      phone: '+91 22 1234 5678',
      email: 'mumbai@neosankalp.com'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Global Tech Solutions',
      message: 'Neosankalp made our international expansion seamless. Their expertise is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Pacific Imports',
      message: 'Outstanding service and support. They handle everything with professionalism.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      company: 'European Exports Ltd',
      message: 'Reliable, efficient, and always available when we need them. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to expand your business globally? Contact us today to discuss your 
              import-export needs and discover how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-2xl shadow-2xl p-8 animate-fade-in border border-blue-100 dark:border-blue-800">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Service Interest
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="import">Import Services</option>
                      <option value="export">Export Services</option>
                      <option value="logistics">Logistics & Shipping</option>
                      <option value="consulting">Trade Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in delay-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className={`${info.bgColor} rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-100 dark:border-blue-800`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center mb-4 shadow-md`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-slate-600 dark:text-slate-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Global Offices */}
              <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-800">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Our Global Offices
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {offices.map((office, index) => (
                    <div
                      key={`${office.city}-${office.country}`}
                      className="p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors duration-200"
                    >
                      <h5 className="font-semibold text-slate-900 dark:text-white">
                        {office.city}, {office.country}
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {office.address}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                        {office.phone}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {office.email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 animate-fade-in border border-blue-100 dark:border-blue-800"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Global Trade Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join thousands of satisfied clients who trust Neosankalp Co. for their international trade needs. 
              Let's discuss how we can help your business thrive globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
                <Calendar className="h-5 w-5 inline mr-2" />
                Schedule Consultation
              </button>
              <button className="px-10 py-5 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;