import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Download, Filter, Plus, Search, UserPlus } from 'lucide-react';
import { format } from 'date-fns';
import StudentsList from './StudentsList';

const StudentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <Routes>
      <Route path="/" element={
        <div className="animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Students</h1>
              <p className="text-neutral-500">Manage all your student records</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link 
                to="/students/new" 
                className="btn-primary flex items-center"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Add New Student
              </Link>
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
                    placeholder="Search students by name, ID, or class..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <select
                    className="form-select appearance-none pr-10 py-2"
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  >
                    <option value="all">All Classes</option>
                    <option value="pri">Primary</option>
                    <option value="jss">Junior Secondary</option>
                    <option value="sss">Senior Secondary</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <Filter className="h-4 w-4 text-neutral-500" />
                  </div>
                </div>
                
                <button 
                  className="btn-outline flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </button>
              </div>
            </div>
          </div>

          <StudentsList searchQuery={searchQuery} selectedFilter={selectedFilter} />
        </div>
      } />
      
      <Route path="/new" element={<div>New Student Form</div>} />
      <Route path="/:id" element={<div>Student Detail</div>} />
      <Route path="/:id/edit" element={<div>Edit Student</div>} />
    </Routes>
  );
};

export default StudentsPage;