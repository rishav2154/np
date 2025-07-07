import React, { useState } from 'react';
import { X, Play, Clock, Users, Star, Filter, Search, Eye, Download } from 'lucide-react';

interface LectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LectureModal: React.FC<LectureModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  if (!isOpen) return null;

  const lectures = [
    {
      id: 1,
      title: "Advanced Calculus - Integration by Parts",
      instructor: "Dr. Rajesh Kumar",
      subject: "Mathematics",
      level: "Advanced",
      duration: "45 min",
      views: 12500,
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master the technique of integration by parts with practical examples and applications.",
      uploadDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Quantum Mechanics Fundamentals",
      instructor: "Prof. Anita Sharma",
      subject: "Physics",
      level: "Intermediate",
      duration: "52 min",
      views: 8900,
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Explore the fascinating world of quantum mechanics and its fundamental principles.",
      uploadDate: "2024-01-12"
    },
    {
      id: 3,
      title: "Organic Chemistry Reaction Mechanisms",
      instructor: "Dr. Vikram Patel",
      subject: "Chemistry",
      level: "Advanced",
      duration: "38 min",
      views: 15200,
      rating: 4.7,
      thumbnail: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Deep dive into organic reaction mechanisms with step-by-step explanations.",
      uploadDate: "2024-01-10"
    },
    {
      id: 4,
      title: "Cell Biology and Genetics",
      instructor: "Dr. Meera Joshi",
      subject: "Biology",
      level: "Beginner",
      duration: "41 min",
      views: 9700,
      rating: 4.6,
      thumbnail: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Understanding the basics of cell structure and genetic inheritance patterns.",
      uploadDate: "2024-01-08"
    },
    {
      id: 5,
      title: "Data Structures and Algorithms",
      instructor: "Mr. Arjun Mehta",
      subject: "Computer Science",
      level: "Intermediate",
      duration: "55 min",
      views: 11300,
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master essential data structures and algorithmic thinking for programming.",
      uploadDate: "2024-01-05"
    },
    {
      id: 6,
      title: "Shakespeare's Literary Techniques",
      instructor: "Ms. Priya Singh",
      subject: "English",
      level: "Advanced",
      duration: "33 min",
      views: 6800,
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Analyze the literary devices and techniques used in Shakespeare's masterpieces.",
      uploadDate: "2024-01-03"
    }
  ];

  const filteredLectures = lectures.filter(lecture => {
    const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecture.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || lecture.subject.toLowerCase() === selectedSubject;
    const matchesLevel = selectedLevel === 'all' || lecture.level.toLowerCase() === selectedLevel;
    
    return matchesSearch && matchesSubject && matchesLevel;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-modal">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Video Lectures</h2>
                <p className="text-blue-100">Access our comprehensive library of expert-led lectures</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search lectures..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
                <option value="computer science">Computer Science</option>
                <option value="english">English</option>
              </select>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Lectures Grid */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-240px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLectures.map((lecture) => (
                <div key={lecture.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={lecture.thumbnail} 
                      alt={lecture.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-blue-600 p-3 rounded-full transition-all transform hover:scale-110">
                        <Play className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {lecture.duration}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {lecture.subject}
                      </span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {lecture.level}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {lecture.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3">
                      by {lecture.instructor}
                    </p>
                    
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                      {lecture.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {lecture.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-3 h-3 mr-1 text-yellow-400" />
                          {lecture.rating}
                        </span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredLectures.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No lectures found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureModal;