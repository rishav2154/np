import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  CheckCircle, 
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Clock
} from 'lucide-react';

interface JoinNowProps {
  isDarkMode: boolean;
}

const JoinNow: React.FC<JoinNowProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "Access to 200+ carefully designed courses across multiple disciplines"
    },
    {
      icon: Award,
      title: "Industry Certificates",
      description: "Earn recognized certificates that boost your career prospects"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to materials"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: ''
      });
    }, 3000);
  };

  return (
    <section id="join-now" className={`py-20 ${isDarkMode ? 'bg-gradient-to-br from-indigo-900 to-gray-900' : 'bg-gradient-to-br from-indigo-600 to-indigo-800'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-indigo-100'} leading-relaxed`}>
                Join thousands of successful students who have advanced their careers 
                through our comprehensive learning platform. Start your journey today!
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${isDarkMode ? 'bg-indigo-800' : 'bg-indigo-500'} p-2 rounded-lg flex-shrink-0`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-indigo-200'} text-sm leading-relaxed`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Success Stats */}
            <div className={`${isDarkMode ? 'bg-indigo-800' : 'bg-indigo-500'} rounded-xl p-6`}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className={`${isDarkMode ? 'text-gray-300' : 'text-indigo-200'} text-sm`}>Graduates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className={`${isDarkMode ? 'text-gray-300' : 'text-indigo-200'} text-sm`}>Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className={`${isDarkMode ? 'text-gray-300' : 'text-indigo-200'} text-sm`}>Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-2xl shadow-2xl p-8 border`}>
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'} mb-2`}>
                    Start Your Journey
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Fill out the form below to get started with your learning adventure
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200`}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Interested Course
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200`}
                      required
                    >
                      <option value="">Select a course</option>
                      <option value="web-development">Web Development</option>
                      <option value="data-science">Data Science</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="mobile-development">Mobile Development</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Start Learning Today</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>

                {/* Trust Indicators */}
                <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`flex items-center justify-center space-x-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>30-day guarantee</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Instant access</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'} mb-2`}>
                  Welcome to NEOSANKALP!
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  Thank you for joining us. We'll contact you soon with course details.
                </p>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Course:</strong> {formData.course.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;