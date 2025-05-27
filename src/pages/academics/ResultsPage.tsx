import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Filter, Download, Printer, Upload, Save, Edit, X } from 'lucide-react';
import { TERMS, CLASS_LEVELS, NIGERIAN_GRADES } from '../../constants';

const ResultsPage: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [editMode, setEditMode] = useState(false);
  
  // Sample student results data
  const [studentResults, setStudentResults] = useState([
    {
      id: 'STD001',
      name: 'Chinedu Okonkwo',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      ca1: 12,
      ca2: 13,
      ca3: 8,
      exam: 45,
      total: 78,
      grade: 'A',
      remarks: 'Excellent'
    },
    {
      id: 'STD002',
      name: 'Amina Ibrahim',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      ca1: 11,
      ca2: 10,
      ca3: 7,
      exam: 40,
      total: 68,
      grade: 'B',
      remarks: 'Very Good'
    },
    {
      id: 'STD003',
      name: 'Emeka Eze',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      ca1: 9,
      ca2: 8,
      ca3: 6,
      exam: 33,
      total: 56,
      grade: 'C',
      remarks: 'Good'
    }
  ]);

  const handleScoreChange = (studentId: string, field: string, value: string) => {
    const numValue = parseInt(value) || 0;
    
    setStudentResults(prevResults =>
      prevResults.map(student => {
        if (student.id === studentId) {
          const updatedStudent = { ...student, [field]: numValue };
          
          // Recalculate total and grade
          const total = 
            (updatedStudent.ca1 || 0) + 
            (updatedStudent.ca2 || 0) + 
            (updatedStudent.ca3 || 0) + 
            (updatedStudent.exam || 0);
          
          const grade = NIGERIAN_GRADES.find(
            g => total >= g.minScore && total <= g.maxScore
          );

          return {
            ...updatedStudent,
            total,
            grade: grade?.grade || 'F',
            remarks: grade?.remark || 'Fail'
          };
        }
        return student;
      })
    );
  };

  const saveResults = () => {
    // Here you would typically save the results to your backend
    setEditMode(false);
    alert('Results saved successfully!');
  };

  const printResults = () => {
    window.print();
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-900">Results Management</h1>
            <p className="text-neutral-500">
              Manage examination results and student performance records
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white p-5 rounded-lg shadow-card mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="class" className="form-label">Class</label>
                <select
                  id="class"
                  className="form-select"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="">Select Class</option>
                  {CLASS_LEVELS.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="term" className="form-label">Term</label>
                <select
                  id="term"
                  className="form-select"
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(e.target.value)}
                >
                  <option value="">Select Term</option>
                  {TERMS.map((term) => (
                    <option key={term.id} value={term.id}>
                      {term.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="subject" className="form-label">Subject</label>
                <select
                  id="subject"
                  className="form-select"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  <option value="">All Subjects</option>
                  <option value="eng">English Language</option>
                  <option value="math">Mathematics</option>
                  <option value="sci">Basic Science</option>
                  <option value="socstud">Social Studies</option>
                </select>
              </div>
              
              <div className="flex items-end space-x-2">
                <button className="btn-primary flex-1">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Results Table */}
          <div className="bg-white rounded-lg shadow-card mb-6">
            <div className="p-5 border-b border-neutral-200 flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-lg font-semibold text-neutral-900">Results Table</h2>
              <div className="mt-2 md:mt-0 flex space-x-2">
                {editMode ? (
                  <>
                    <button 
                      onClick={saveResults}
                      className="btn-primary flex items-center"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Results
                    </button>
                    <button 
                      onClick={() => setEditMode(false)}
                      className="btn-outline flex items-center"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => setEditMode(true)}
                      className="btn-outline flex items-center"
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Enter Grades
                    </button>
                    <button 
                      onClick={printResults}
                      className="btn-outline flex items-center"
                    >
                      <Printer className="mr-2 h-4 w-4" />
                      Print
                    </button>
                    <button className="btn-outline flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </button>
                  </>
                )}
              </div>
            </div>
            
            <div className="p-5">
              {(!selectedClass || !selectedTerm) ? (
                <div className="text-center py-8">
                  <p className="text-neutral-500">
                    Please select a class and term to view results.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Student
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          CA1 (15%)
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          CA2 (15%)
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          CA3 (10%)
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Exam (60%)
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Grade
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Remarks
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {studentResults.map((student) => (
                        <tr key={student.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={student.photo} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-neutral-900">
                                  {student.name}
                                </div>
                                <div className="text-sm text-neutral-500">
                                  {student.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editMode ? (
                              <input
                                type="number"
                                min="0"
                                max="15"
                                className="form-input w-20"
                                value={student.ca1}
                                onChange={(e) => handleScoreChange(student.id, 'ca1', e.target.value)}
                              />
                            ) : (
                              <span className="text-sm text-neutral-500">{student.ca1}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editMode ? (
                              <input
                                type="number"
                                min="0"
                                max="15"
                                className="form-input w-20"
                                value={student.ca2}
                                onChange={(e) => handleScoreChange(student.id, 'ca2', e.target.value)}
                              />
                            ) : (
                              <span className="text-sm text-neutral-500">{student.ca2}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editMode ? (
                              <input
                                type="number"
                                min="0"
                                max="10"
                                className="form-input w-20"
                                value={student.ca3}
                                onChange={(e) => handleScoreChange(student.id, 'ca3', e.target.value)}
                              />
                            ) : (
                              <span className="text-sm text-neutral-500">{student.ca3}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editMode ? (
                              <input
                                type="number"
                                min="0"
                                max="60"
                                className="form-input w-20"
                                value={student.exam}
                                onChange={(e) => handleScoreChange(student.id, 'exam', e.target.value)}
                              />
                            ) : (
                              <span className="text-sm text-neutral-500">{student.exam}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                            {student.total}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              student.grade === 'A' 
                                ? 'bg-green-100 text-green-800' 
                                : student.grade === 'B'
                                  ? 'bg-blue-100 text-blue-800'
                                  : student.grade === 'C'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                            }`}>
                              {student.grade}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                            {student.remarks}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default ResultsPage;