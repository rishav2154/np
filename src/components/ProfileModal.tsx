import React, { useState } from 'react';
import { X, User, Mail, Calendar, Award, BookOpen, Video, Upload, Edit, Save, Camera } from 'lucide-react';
import { User as UserType } from '../App';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserType | null;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, currentUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    bio: 'Passionate learner exploring the depths of knowledge through NEOSANKALP platform.',
    location: 'Mumbai, India',
    interests: ['Mathematics', 'Physics', 'Computer Science']
  });

  if (!isOpen || !currentUser) return null;

  const handleSave = () => {
    // Here you would typically save the data to your backend
    setIsEditing(false);
    alert('Profile updated successfully! 🎉');
  };

  const achievements = [
    { title: 'First Course Completed', date: '2024-01-20', icon: BookOpen },
    { title: 'Top 10% Student', date: '2024-01-15', icon: Award },
    { title: 'Video Enthusiast', date: '2024-01-10', icon: Video },
    { title: 'Active Contributor', date: '2024-01-05', icon: Upload }
  ];

  const recentActivity = [
    { action: 'Completed', item: 'Advanced Calculus Course', date: '2 days ago' },
    { action: 'Downloaded', item: 'Quantum Physics Notes', date: '3 days ago' },
    { action: 'Watched', item: 'Organic Chemistry Lecture', date: '5 days ago' },
    { action: 'Uploaded', item: 'Linear Algebra Summary', date: '1 week ago' }
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-white text-purple-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Camera className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{currentUser.name}</h2>
                  <p className="text-purple-100 capitalize">{currentUser.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  {isEditing ? <Save className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Profile Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Basic Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.name}
                            onChange={(e) => setEditData({...editData, name: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="text-gray-900">{currentUser.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        {isEditing ? (
                          <input
                            type="email"
                            value={editData.email}
                            onChange={(e) => setEditData({...editData, email: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="text-gray-900">{currentUser.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      {isEditing ? (
                        <textarea
                          value={editData.bio}
                          onChange={(e) => setEditData({...editData, bio: e.target.value})}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-600">{editData.bio}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.location}
                            onChange={(e) => setEditData({...editData, location: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="text-gray-900">{editData.location}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                        <p className="text-gray-900">
                          {new Date(currentUser.joinDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    {isEditing && (
                      <div className="flex space-x-3 pt-4">
                        <button 
                          onClick={handleSave}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Save Changes
                        </button>
                        <button 
                          onClick={() => setIsEditing(false)}
                          className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">
                            <span className="font-medium">{activity.action}</span> {activity.item}
                          </p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Achievements */}
              <div className="space-y-6">
                {/* Stats */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Courses Enrolled</span>
                      <span className="font-bold text-purple-600">{currentUser.coursesEnrolled || 12}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Hours Watched</span>
                      <span className="font-bold text-blue-600">156</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Notes Downloaded</span>
                      <span className="font-bold text-green-600">89</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Achievements</span>
                      <span className="font-bold text-orange-600">7</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Achievements</h3>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <achievement.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                          <p className="text-xs text-gray-500">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {editData.interests.map((interest, index) => (
                      <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
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

export default ProfileModal;