import React from 'react';
import { X, Award, Users, BookOpen, Target, Heart, Star, TrendingUp, Globe, Shield } from 'lucide-react';

interface CompanyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompanyInfoModal: React.FC<CompanyInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const stats = [
    { icon: Users, label: 'Active Students', value: '50,000+', color: 'text-blue-600' },
    { icon: BookOpen, label: 'Courses Available', value: '1,000+', color: 'text-green-600' },
    { icon: Award, label: 'Certified Instructors', value: '500+', color: 'text-purple-600' },
    { icon: Globe, label: 'Countries Reached', value: '25+', color: 'text-orange-600' }
  ];

  const values = [
    { icon: Target, title: 'Excellence', description: 'We strive for the highest quality in education and student experience.' },
    { icon: Heart, title: 'Passion', description: 'Our love for education drives everything we do at NEOSANKALP.' },
    { icon: Shield, title: 'Trust', description: 'Building lasting relationships through transparency and reliability.' },
    { icon: TrendingUp, title: 'Innovation', description: 'Constantly evolving our platform with cutting-edge technology.' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-modal">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">About NEOSANKALP</h2>
                <p className="text-blue-100 text-lg">Empowering Minds, Shaping Futures</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
            {/* Company Story */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2020, NEOSANKALP emerged from a simple yet powerful vision: to democratize quality education 
                and make it accessible to every ambitious learner across India. What started as a small initiative by 
                passionate educators has now grown into India's most trusted educational platform.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our name "NEOSANKALP" represents a new resolution - a commitment to transforming the educational 
                landscape through innovation, dedication, and unwavering focus on student success. We believe that 
                every student deserves access to world-class education, regardless of their geographical location or 
                economic background.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h4>
                <p className="text-blue-800 leading-relaxed">
                  To provide high-quality, accessible, and affordable education that empowers students to achieve 
                  their academic goals and unlock their full potential through innovative learning solutions.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-purple-900 mb-3">Our Vision</h4>
                <p className="text-purple-800 leading-relaxed">
                  To become the leading educational platform that transforms lives by making quality education 
                  universally accessible and creating a community of lifelong learners.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">{value.title}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    AK
                  </div>
                  <h5 className="font-bold text-gray-900 mb-1">Amit Kumar</h5>
                  <p className="text-blue-600 text-sm mb-2">Founder & CEO</p>
                  <p className="text-gray-600 text-xs">Former IIT Professor with 15+ years in education</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    PS
                  </div>
                  <h5 className="font-bold text-gray-900 mb-1">Priya Sharma</h5>
                  <p className="text-green-600 text-sm mb-2">Chief Academic Officer</p>
                  <p className="text-gray-600 text-xs">PhD in Education, curriculum design expert</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    RG
                  </div>
                  <h5 className="font-bold text-gray-900 mb-1">Rahul Gupta</h5>
                  <p className="text-purple-600 text-sm mb-2">Chief Technology Officer</p>
                  <p className="text-gray-600 text-xs">Tech innovator with expertise in EdTech solutions</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-900 mb-1">Headquarters</p>
                  <p className="text-gray-600">123 Education Hub, Knowledge City</p>
                  <p className="text-gray-600">Mumbai, Maharashtra - 400001</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Contact</p>
                  <p className="text-gray-600">Email: info@neosankalp.com</p>
                  <p className="text-gray-600">Phone: +91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoModal;