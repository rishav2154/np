import React from 'react';
import { ArrowRight, Globe, TrendingUp, Shield, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Globe, label: 'Countries Reached', value: '50+' },
    { icon: TrendingUp, label: 'Years Experience', value: '15+' },
    { icon: Shield, label: 'Trusted Partners', value: '200+' },
    { icon: Users, label: 'Happy Clients', value: '1000+' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 dark:bg-amber-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
              Neosankalp Co.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in delay-200">
            Your trusted partner in international import and export operations. 
            We connect businesses worldwide with premium products and seamless logistics solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-400">
            <a 
              href="#about"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in delay-600">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Global Trade Excellence Section */}
        <div className="mt-20 max-w-3xl mx-auto animate-fade-in delay-800">
          <div className="bg-gradient-to-r from-blue-600/10 to-amber-500/10 dark:from-blue-400/10 dark:to-amber-400/10 rounded-2xl p-8 backdrop-blur-sm border border-blue-200/20 dark:border-blue-700/20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Global Trade Excellence
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 15 years of experience in international trade, we have built a reputation for 
              excellence, reliability, and innovation. Our comprehensive approach to import-export 
              operations ensures your business success in the global marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;