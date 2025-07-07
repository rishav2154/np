import React from 'react';
import { BookOpen, Video, Download, Clock, Award, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Premium Study Notes",
      description: "Get access to meticulously crafted study materials by top educators and subject experts.",
      color: "bg-blue-500"
    },
    {
      icon: Video,
      title: "HD Video Lectures",
      description: "Learn from industry experts through high-quality video lectures with crystal-clear explanations.",
      color: "bg-purple-500"
    },
    {
      icon: Download,
      title: "Offline Access",
      description: "Download content and study anywhere, anytime without internet connectivity constraints.",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "24/7 Learning",
      description: "Study at your own pace with round-the-clock access to all learning materials and resources.",
      color: "bg-orange-500"
    },
    {
      icon: Award,
      title: "Certified Courses",
      description: "Earn valuable certificates upon course completion to boost your academic and professional profile.",
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Get guidance from experienced mentors and connect with a community of like-minded learners.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Students Choose NEOSANKALP?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've revolutionized online learning with cutting-edge features designed to maximize your academic success.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;