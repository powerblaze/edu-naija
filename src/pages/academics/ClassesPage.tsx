import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Filter, Plus, Search, BookOpen, Users, UserPlus } from 'lucide-react';
import { CLASS_LEVELS } from '../../constants';

const ClassesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  
  // Sample classes data
  const classesData = [
    {
      id: 'class1',
      name: 'Primary 1A',
      level: 'Primary',
      section: 'A',
      classTeacher: 'Mrs. Adeyemi',
      totalStudents: 32,
      male: 17,
      female: 15,
      subjects: ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'Creative Arts', 'Religious Studies', 'Computer Studies', 'Physical Education'],
    },
    {
      id: 'class2',
      name: 'Primary 2B',
      level: 'Primary',
      section: 'B',
      classTeacher: 'Mr. Ibrahim',
      totalStudents: 28,
      male: 15,
      female: 13,
      subjects: ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'Creative Arts', 'Religious Studies', 'Computer Studies', 'Physical Education'],
    },
    {
      id: 'class3',
      name: 'JSS 1A',
      level: 'Junior Secondary',
      section: 'A',
      classTeacher: 'Mrs. Okafor',
      totalStudents: 35,
      male: 18,
      female: 17,
      subjects: ['English', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies', 'Business Studies', 'Home Economics', 'Religious Studies', 'Computer Studies', 'French', 'Physical Education'],
    },
    {
      id: 'class4',
      name: 'JSS 2C',
      level: 'Junior Secondary',
      section: 'C',
      classTeacher: 'Mr. Danladi',
      totalStudents: 33,
      male: 17,
      female: 16,
      subjects: ['English', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies', 'Business Studies', 'Home Economics', 'Religious Studies', 'Computer Studies', 'French', 'Physical Education'],
    },
    {
      id: 'class5',
      name: 'SSS 1A Science',
      level: 'Senior Secondary',
      section: 'A',
      classTeacher: 'Mrs. Ahmed',
      totalStudents: 30,
      male: 18,
      female: 12,
      subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Further Mathematics', 'Computer Science', 'Civic Education', 'Physical Education'],
    },
    {
      id: 'class6',
      name: 'SSS 2B Arts',
      level: 'Senior Secondary',
      section: 'B',
      classTeacher: 'Mr. Okoro',
      totalStudents: 26,
      male: 10,
      female: 16,
      subjects: ['English', 'Mathematics', 'Literature', 'Government', 'Economics', 'History', 'Religious Studies', 'French', 'Civic Education', 'Physical Education'],
    },
    {
      id: 'class7',
      name: 'SSS 3A Science',
      level: 'Senior Secondary',
      section: 'A',
      classTeacher: 'Mr. Adebayo',
      totalStudents: 28,
      male: 16,
      female: 12,
      subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Further Mathematics', 'Computer Science', 'Civic Education'],
    },
    {
      id: 'class8',
      name: 'SSS 3B Commercial',
      level: 'Senior Secondary',
      section: 'B',
      classTeacher: 'Mrs. Bello',
      totalStudents: 24,
      male: 9,
      female: 15,
      subjects: ['English', 'Mathematics', 'Accounting', 'Commerce', 'Economics', 'Government', 'Civic Education', 'Computer Science'],
    },
  ];
  
  // Filter classes based on search and level
  const filteredClasses = classesData.filter(cls => {
    const matchesSearch = 
      cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.classTeacher.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = 
      selectedLevel === 'all' || 
      cls.level === (
        selectedLevel === 'pri' ? 'Primary' : 
        selectedLevel === 'jss' ? 'Junior Secondary' : 
        'Senior Secondary'
      );
    
    return matchesSearch && matchesLevel;
  });
  
  // Get summary statistics
  const totalClasses = filteredClasses.length;
  const totalStudents = filteredClasses.reduce((sum, cls) => sum + cls.totalStudents, 0);
  const totalMale = filteredClasses.reduce((sum, cls) => sum + cls.male, 0);
  const totalFemale = filteredClasses.reduce((sum, cls) => sum + cls.female, 0);
  
  return (
    <Routes>
      <Route path="/" element={
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-900">Classes</h1>
            <p className="text-neutral-500">
              Manage class information, sections, and subject allocation
            </p>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-5 rounded-lg shadow-card">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 rounded-full bg-primary-100">
                  <BookOpen className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-neutral-500">Total Classes</p>
                  <h3 className="text-lg font-semibold text-neutral-900">{totalClasses}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-card">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 rounded-full bg-secondary-100">
                  <Users className="h-6 w-6 text-secondary-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-neutral-500">Total Students</p>
                  <h3 className="text-lg font-semibold text-neutral-900">{totalStudents}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-card">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-neutral-500">Male Students</p>
                  <h3 className="text-lg font-semibold text-neutral-900">{totalMale}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-card">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 rounded-full bg-pink-100">
                  <svg className="h-6 w-6 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-neutral-500">Female Students</p>
                  <h3 className="text-lg font-semibold text-neutral-900">{totalFemale}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Filters and search */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    className="form-input pl-10"
                    placeholder="Search by class name or teacher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <select
                    className="form-select appearance-none pr-10 py-2"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    <option value="all">All Levels</option>
                    <option value="pri">Primary</option>
                    <option value="jss">Junior Secondary</option>
                    <option value="sss">Senior Secondary</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <Filter className="h-4 w-4 text-neutral-500" />
                  </div>
                </div>
                
                <button className="btn-primary flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Class
                </button>
              </div>
            </div>
          </div>

          {/* Classes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((cls) => (
              <div key={cls.id} className="bg-white rounded-lg shadow-card overflow-hidden">
                <div className={`px-5 py-4 ${
                  cls.level === 'Primary' 
                    ? 'bg-green-50' 
                    : cls.level === 'Junior Secondary'
                      ? 'bg-blue-50'
                      : 'bg-purple-50'
                }`}>
                  <h3 className={`text-lg font-semibold ${
                    cls.level === 'Primary' 
                      ? 'text-green-800' 
                      : cls.level === 'Junior Secondary'
                        ? 'text-blue-800'
                        : 'text-purple-800'
                  }`}>
                    {cls.name}
                  </h3>
                  <p className={`text-sm ${
                    cls.level === 'Primary' 
                      ? 'text-green-600' 
                      : cls.level === 'Junior Secondary'
                        ? 'text-blue-600'
                        : 'text-purple-600'
                  }`}>
                    {cls.level}
                  </p>
                </div>
                
                <div className="p-5">
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-neutral-600">Class Teacher:</span>
                      <span className="text-sm text-neutral-800">{cls.classTeacher}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-neutral-600">Total Students:</span>
                      <span className="text-sm text-neutral-800">{cls.totalStudents}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-neutral-600">Gender Ratio:</span>
                      <span className="text-sm text-neutral-800">{cls.male} boys, {cls.female} girls</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-800 mb-2">Subjects</h4>
                    <div className="flex flex-wrap gap-1">
                      {cls.subjects.slice(0, 5).map((subject, index) => (
                        <span 
                          key={index} 
                          className={`px-2 py-1 text-xs rounded-md ${
                            cls.level === 'Primary' 
                              ? 'bg-green-100 text-green-800' 
                              : cls.level === 'Junior Secondary'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {subject}
                        </span>
                      ))}
                      {cls.subjects.length > 5 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 text-neutral-800">
                          +{cls.subjects.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <button className="btn-outline text-sm flex items-center">
                      <BookOpen className="mr-1 h-4 w-4" />
                      View Details
                    </button>
                    <button className="btn-outline text-sm flex items-center">
                      <UserPlus className="mr-1 h-4 w-4" />
                      Manage Students
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredClasses.length === 0 && (
              <div className="col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
                <p className="text-neutral-500">No classes found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      } />
    </Routes>
  );
};

export default ClassesPage;