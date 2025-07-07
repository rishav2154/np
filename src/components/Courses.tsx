import React from 'react';
import { Clock, Users, Star, ChevronRight } from 'lucide-react';

interface CoursesProps {
  isDarkMode: boolean;
}

const Courses: React.FC<CoursesProps> = ({ isDarkMode }) => {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Master HTML, CSS, JavaScript, React, Node.js and build real-world projects",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12 weeks",
      students: "15,234",
      rating: 4.9,
      price: "$99",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Learn Python, pandas, sklearn, and build ML models from scratch",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "16 weeks",
      students: "8,492",
      rating: 4.8,
      price: "$129",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      description: "Complete guide to SEO, Social Media, PPC, and Content Marketing",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8 weeks",
      students: "12,876",
      rating: 4.7,
      price: "$79",
      level: "Beginner"
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      description: "Learn design principles, Figma, prototyping, and user research",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "10 weeks",
      students: "9,341",
      rating: 4.9,
      price: "$89",
      level: "Beginner to Intermediate"
    }
  ];

  return (
    <section id="courses" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'} mb-4`}>
            Popular Courses
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Choose from our carefully curated selection of courses designed by industry experts
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-indigo-100'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border`}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">
                    {course.price}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'} mb-2`}>
                    {course.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                    {course.description}
                  </p>
                </div>

                <div className={`flex items-center justify-between text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Enroll Now</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className={`${isDarkMode ? 'bg-gray-800 text-indigo-400 hover:bg-gray-700' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'} px-8 py-3 rounded-lg font-semibold transition-colors duration-200`}>
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;