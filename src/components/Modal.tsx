import React from 'react';
import { X, Play, Download, Star, Clock, Users } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-modal">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Course Preview</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Course info */}
              <div>
                <img 
                  src="https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Course preview"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Mathematics Mastery
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Master advanced mathematical concepts with our comprehensive course designed by top educators. 
                  This course covers calculus, linear algebra, statistics, and more with practical applications 
                  that will boost your problem-solving skills.
                </p>

                {/* Course stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">4.9</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">12.5K</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">40hrs</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                </div>

                {/* What you'll learn */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Advanced calculus and differential equations
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Linear algebra and matrix operations
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Statistics and probability theory
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Real-world problem solving techniques
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right side - Enrollment */}
              <div className="lg:pl-8">
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">₹2,999</div>
                    <div className="text-gray-400 line-through">₹4,999</div>
                    <div className="text-sm text-green-600 font-medium">Save 40% - Limited Time!</div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                      Enroll Now
                    </button>
                    
                    <button className="w-full bg-white hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200 flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Preview Course
                    </button>
                    
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Sample
                    </button>
                  </div>
                </div>

                {/* Course features */}
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Lifetime access to course materials
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Certificate of completion
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    24/7 student support
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Mobile and desktop access
                  </div>
                </div>

                {/* Instructor */}
                <div className="mt-8 p-4 bg-white border border-gray-200 rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-2">Your Instructor</h5>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      DR
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Dr. Rajesh Kumar</div>
                      <div className="text-sm text-gray-600">Professor of Mathematics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;