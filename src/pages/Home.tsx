import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, TrendingUp, Shield, Users, Ship, Package, Truck, Award } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

const Home: React.FC = () => {
  const { showPopup } = usePopup();

  const stats = [
    { icon: Globe, label: 'Countries Reached', value: '50+', color: 'text-emerald-500' },
    { icon: TrendingUp, label: 'Years Experience', value: '15+', color: 'text-amber-500' },
    { icon: Shield, label: 'Trusted Partners', value: '200+', color: 'text-purple-500' },
    { icon: Users, label: 'Happy Clients', value: '1000+', color: 'text-orange-500' },
  ];

  const features = [
    {
      icon: Ship,
      title: 'Import Excellence',
      description: 'Premium import services with global reach',
      details: 'Our comprehensive import services ensure quality products reach you safely and efficiently from worldwide suppliers.'
    },
    {
      icon: Package,
      title: 'Export Solutions',
      description: 'Expand your business to international markets',
      details: 'Take your products global with our expert export services, market analysis, and international partnerships.'
    },
    {
      icon: Truck,
      title: 'Logistics Network',
      description: 'End-to-end logistics and shipping solutions',
      details: 'Complete logistics management from warehousing to last-mile delivery with real-time tracking and insurance.'
    },
    {
      icon: Award,
      title: 'Trade Consulting',
      description: 'Expert guidance for international trade',
      details: 'Strategic consulting services to help you navigate complex international trade regulations and opportunities.'
    }
  ];

  const handleFeatureClick = (feature: typeof features[0]) => {
    showPopup(
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <feature.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{feature.details}</p>
        <Link
          to="/services"
          className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200"
        >
          Learn More <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>,
      'info'
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-8 animate-fade-in">
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                Neosankalp Co.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed animate-fade-in delay-200">
              Your trusted partner in international import and export operations. 
              We connect businesses worldwide with premium products and seamless logistics solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-400">
              <Link 
                to="/about"
                className="group px-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
              >
                <span className="text-lg">Discover Our Story</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link 
                to="/contact"
                className="px-10 py-5 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 font-semibold rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in delay-600">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-emerald-100 dark:border-emerald-800"
              >
                <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`} />
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2">
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

      {/* Features Section */}
      <section className="py-24 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Neosankalp?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Experience excellence in international trade with our comprehensive solutions and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                onClick={() => handleFeatureClick(feature)}
                className="group p-8 bg-gradient-to-br from-white to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-emerald-100 dark:border-emerald-800 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Expand Globally?
            </h2>
            <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
              Join thousands of satisfied clients who trust Neosankalp Co. for their international trade needs. 
              Let's discuss how we can help your business thrive in the global marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-emerald-600 font-semibold rounded-2xl hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg"
              >
                Start Your Journey
              </Link>
              <Link
                to="/services"
                className="px-10 py-5 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;