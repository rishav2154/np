import React, { useState } from 'react';
import { Search, Filter, Download, BookOpen, Clock, Tag } from 'lucide-react';

interface NotesProps {
  isDarkMode: boolean;
}

const Notes: React.FC<NotesProps> = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const notes = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      subject: "Web Development",
      category: "programming",
      downloadCount: 1234,
      date: "2024-01-15",
      pages: 45,
      description: "Complete guide to JavaScript basics, ES6+ features, and modern development practices"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      category: "programming",
      downloadCount: 2156,
      date: "2024-01-12",
      pages: 78,
      description: "Comprehensive notes on DSA with examples in Python and Java"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      subject: "Marketing",
      category: "business",
      downloadCount: 987,
      date: "2024-01-10",
      pages: 32,
      description: "Modern digital marketing techniques and campaign strategies"
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      subject: "Data Science",
      category: "science",
      downloadCount: 1876,
      date: "2024-01-08",
      pages: 56,
      description: "Introduction to ML algorithms, supervised and unsupervised learning"
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      subject: "Design",
      category: "design",
      downloadCount: 1543,
      date: "2024-01-05",
      pages: 41,
      description: "Design fundamentals, user research, and prototyping techniques"
    },
    {
      id: 6,
      title: "Financial Analysis",
      subject: "Finance",
      category: "business",
      downloadCount: 876,
      date: "2024-01-03",
      pages: 38,
      description: "Financial statements analysis and investment evaluation methods"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'programming', label: 'Programming' },
    { value: 'business', label: 'Business' },
    { value: 'design', label: 'Design' },
    { value: 'science', label: 'Science' }
  ];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="notes" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'} mb-4`}>
            Study Notes & Resources
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Access comprehensive study materials, notes, and resources for all your courses
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'} rounded-xl shadow-lg p-6 mb-8 border`}>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Box with Icon */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
              </div>
              <input
                type="text"
                placeholder="Search notes by title or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200`}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`pl-10 pr-8 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-w-48`}
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-indigo-100'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border`}
            >
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Tag className="h-4 w-4" />
                    <span className="capitalize">{note.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'} mb-2`}>
                    {note.title}
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium mb-2">
                    {note.subject}
                  </p>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
                    {note.description}
                  </p>
                </div>

                {/* Stats */}
                <div className={`flex items-center justify-between text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{note.pages} pages</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{note.downloadCount} downloads</span>
                  </div>
                </div>

                {/* Download Button */}
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Notes</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className={`h-16 w-16 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'} mx-auto mb-4`} />
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No notes found matching your criteria</p>
            <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-2`}>Try adjusting your search or filter options</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Notes;