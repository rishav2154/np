import React, { useState } from 'react';
import { X, FileText, Download, Search, Filter, Eye, Star, Calendar } from 'lucide-react';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotesModal: React.FC<NotesModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  if (!isOpen) return null;

  const notes = [
    {
      id: 1,
      title: "Complete Linear Algebra Notes",
      subject: "Mathematics",
      type: "Complete Course",
      pages: 45,
      downloads: 2300,
      rating: 4.9,
      author: "Dr. Rajesh Kumar",
      uploadDate: "2024-01-15",
      description: "Comprehensive notes covering vectors, matrices, eigenvalues, and linear transformations.",
      fileSize: "2.4 MB",
      preview: "https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 2,
      title: "Quantum Physics Summary",
      subject: "Physics",
      type: "Summary",
      pages: 32,
      downloads: 1800,
      rating: 4.8,
      author: "Prof. Anita Sharma",
      uploadDate: "2024-01-12",
      description: "Essential concepts of quantum mechanics with solved examples and applications.",
      fileSize: "1.8 MB",
      preview: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 3,
      title: "Organic Chemistry Reaction Guide",
      subject: "Chemistry",
      type: "Reference Guide",
      pages: 38,
      downloads: 2100,
      rating: 4.7,
      author: "Dr. Vikram Patel",
      uploadDate: "2024-01-10",
      description: "Detailed guide to organic reactions with mechanisms and synthetic applications.",
      fileSize: "3.1 MB",
      preview: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 4,
      title: "Cell Biology Fundamentals",
      subject: "Biology",
      type: "Complete Course",
      pages: 52,
      downloads: 1650,
      rating: 4.6,
      author: "Dr. Meera Joshi",
      uploadDate: "2024-01-08",
      description: "In-depth study of cell structure, function, and molecular biology processes.",
      fileSize: "4.2 MB",
      preview: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 5,
      title: "Data Structures Cheat Sheet",
      subject: "Computer Science",
      type: "Cheat Sheet",
      pages: 15,
      downloads: 3200,
      rating: 4.9,
      author: "Mr. Arjun Mehta",
      uploadDate: "2024-01-05",
      description: "Quick reference for all major data structures with time complexities.",
      fileSize: "0.8 MB",
      preview: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 6,
      title: "Shakespeare Analysis Notes",
      subject: "English",
      type: "Analysis",
      pages: 28,
      downloads: 950,
      rating: 4.8,
      author: "Ms. Priya Singh",
      uploadDate: "2024-01-03",
      description: "Literary analysis of major Shakespearean works with themes and techniques.",
      fileSize: "1.5 MB",
      preview: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || note.subject.toLowerCase() === selectedSubject;
    const matchesType = selectedType === 'all' || note.type.toLowerCase().includes(selectedType.toLowerCase());
    
    return matchesSearch && matchesSubject && matchesType;
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Study Notes Library</h2>
                <p className="text-green-100">Download premium study materials and notes</p>
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
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="complete">Complete Course</option>
                <option value="summary">Summary</option>
                <option value="cheat">Cheat Sheet</option>
                <option value="reference">Reference Guide</option>
                <option value="analysis">Analysis</option>
              </select>
            </div>
          </div>

          {/* Notes Grid */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-240px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note) => (
                <div key={note.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={note.preview} 
                      alt={note.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {note.type}
                    </div>
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {note.pages} pages
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {note.subject}
                      </span>
                      <span className="text-gray-500 text-xs">{note.fileSize}</span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {note.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-2">
                      by {note.author}
                    </p>
                    
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                      {note.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Download className="w-3 h-3 mr-1" />
                          {note.downloads.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-3 h-3 mr-1 text-yellow-400" />
                          {note.rating}
                        </span>
                      </div>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(note.uploadDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-3 rounded-lg text-sm transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredNotes.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;