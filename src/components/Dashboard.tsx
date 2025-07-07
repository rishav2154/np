import React from 'react';
import { BookOpen, Video, Upload, Users, TrendingUp, Clock, Award, FileText, Play, Download } from 'lucide-react';
import { User } from '../App';

interface DashboardProps {
  currentUser: User;
  onOpenModal: (modalType: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser, onOpenModal }) => {
  const recentLectures = [
    { id: 1, title: "Advanced Calculus - Integration Techniques", instructor: "Dr. Rajesh Kumar", duration: "45 min", views: 1250, thumbnail: "https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, title: "Quantum Physics Fundamentals", instructor: "Prof. Anita Sharma", duration: "38 min", views: 980, thumbnail: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, title: "Organic Chemistry Reactions", instructor: "Dr. Vikram Patel", duration: "52 min", views: 1450, thumbnail: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300" },
  ];

  const recentNotes = [
    { id: 1, title: "Linear Algebra Complete Notes", subject: "Mathematics", pages: 45, downloads: 2300 },
    { id: 2, title: "Modern Physics Summary", subject: "Physics", pages: 32, downloads: 1800 },
    { id: 3, title: "Inorganic Chemistry Guide", subject: "Chemistry", pages: 38, downloads: 2100 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {currentUser.name}! 🎉
              </h1>
              <p className="text-blue-100 text-lg">
                Ready to continue your learning journey? Let's make today count!
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Courses Enrolled</p>
                <p className="text-2xl font-bold text-gray-900">{currentUser.coursesEnrolled || 12}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Hours Watched</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Notes Downloaded</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Achievements</p>
                <p className="text-2xl font-bold text-gray-900">7</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <button 
            onClick={() => onOpenModal('lectures')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
          >
            <Video className="w-8 h-8 mr-4" />
            <div className="text-left">
              <h3 className="font-bold text-lg">Watch Lectures</h3>
              <p className="text-blue-100 text-sm">Access video content</p>
            </div>
          </button>

          <button 
            onClick={() => onOpenModal('notes')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
          >
            <FileText className="w-8 h-8 mr-4" />
            <div className="text-left">
              <h3 className="font-bold text-lg">Study Notes</h3>
              <p className="text-green-100 text-sm">Download materials</p>
            </div>
          </button>

          <button 
            onClick={() => onOpenModal('upload')}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
          >
            <Upload className="w-8 h-8 mr-4" />
            <div className="text-left">
              <h3 className="font-bold text-lg">Upload Content</h3>
              <p className="text-purple-100 text-sm">Share your knowledge</p>
            </div>
          </button>

          <button 
            onClick={() => onOpenModal('profile')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
          >
            <Users className="w-8 h-8 mr-4" />
            <div className="text-left">
              <h3 className="font-bold text-lg">My Profile</h3>
              <p className="text-orange-100 text-sm">Manage account</p>
            </div>
          </button>
        </div>

        {/* Recent Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Lectures */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Lectures</h2>
              <button 
                onClick={() => onOpenModal('lectures')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentLectures.map((lecture) => (
                <div key={lecture.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <img 
                    src={lecture.thumbnail} 
                    alt={lecture.title}
                    className="w-16 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">{lecture.title}</h3>
                    <p className="text-gray-600 text-xs">{lecture.instructor}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {lecture.duration}
                      </span>
                      <span className="flex items-center">
                        <Play className="w-3 h-3 mr-1" />
                        {lecture.views} views
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Notes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Notes</h2>
              <button 
                onClick={() => onOpenModal('notes')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentNotes.map((note) => (
                <div key={note.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">{note.title}</h3>
                      <p className="text-gray-600 text-xs">{note.subject}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                        <span>{note.pages} pages</span>
                        <span className="flex items-center">
                          <Download className="w-3 h-3 mr-1" />
                          {note.downloads} downloads
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;