import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  Download, 
  Printer, 
  Edit, 
  Save, 
  X, 
  Plus 
} from 'lucide-react';
import { 
  CLASS_LEVELS, 
  DAYS_OF_WEEK, 
  TIME_PERIODS, 
  PRIMARY_SUBJECTS, 
  JSS_SUBJECTS, 
  SSS_SUBJECTS
} from '../../constants';

const TimetablePage: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [editMode, setEditMode] = useState(false);

  const getSubjectsByLevel = (level: string) => {
    if (level.startsWith('pri')) {
      return PRIMARY_SUBJECTS;
    } else if (level.startsWith('jss')) {
      return JSS_SUBJECTS;
    } else if (level.startsWith('sss')) {
      return SSS_SUBJECTS;
    }
    return [];
  };

  // Sample timetable data structure
  const timetableData = {
    Monday: {
      1: { subject: 'Mathematics', teacher: 'Mr. Adebayo' },
      2: { subject: 'English Language', teacher: 'Mrs. Okafor' },
      3: { subject: 'Civic Education', teacher: 'Mr. Nnamdi' },
      5: { subject: 'Basic Science', teacher: 'Mrs. Ahmed' },
      6: { subject: 'Social Studies', teacher: 'Mr. Ibrahim' },
      7: { subject: 'Computer Studies', teacher: 'Ms. Chukwu' },
      9: { subject: 'Creative Arts', teacher: 'Mrs. Adeleke' },
      10: { subject: 'Physical Education', teacher: 'Mr. Okoro' },
    },
    Tuesday: {
      1: { subject: 'English Language', teacher: 'Mrs. Okafor' },
      2: { subject: 'Mathematics', teacher: 'Mr. Adebayo' },
      3: { subject: 'Basic Science', teacher: 'Mrs. Ahmed' },
      5: { subject: 'Social Studies', teacher: 'Mr. Ibrahim' },
      6: { subject: 'Yoruba Language', teacher: 'Mrs. Adeyemi' },
      7: { subject: 'Agricultural Science', teacher: 'Mr. Danladi' },
      9: { subject: 'Religious Studies', teacher: 'Mrs. Mohammed' },
      10: { subject: 'Computer Studies', teacher: 'Ms. Chukwu' },
    },
    Wednesday: {
      1: { subject: 'Mathematics', teacher: 'Mr. Adebayo' },
      2: { subject: 'English Language', teacher: 'Mrs. Okafor' },
      3: { subject: 'Creative Arts', teacher: 'Mrs. Adeleke' },
      5: { subject: 'Agricultural Science', teacher: 'Mr. Danladi' },
      6: { subject: 'Physical Education', teacher: 'Mr. Okoro' },
      7: { subject: 'Basic Science', teacher: 'Mrs. Ahmed' },
      9: { subject: 'Social Studies', teacher: 'Mr. Ibrahim' },
      10: { subject: 'Civic Education', teacher: 'Mr. Nnamdi' },
    },
    Thursday: {
      1: { subject: 'English Language', teacher: 'Mrs. Okafor' },
      2: { subject: 'Mathematics', teacher: 'Mr. Adebayo' },
      3: { subject: 'Religious Studies', teacher: 'Mrs. Mohammed' },
      5: { subject: 'Computer Studies', teacher: 'Ms. Chukwu' },
      6: { subject: 'Basic Science', teacher: 'Mrs. Ahmed' },
      7: { subject: 'Yoruba Language', teacher: 'Mrs. Adeyemi' },
      9: { subject: 'Creative Arts', teacher: 'Mrs. Adeleke' },
      10: { subject: 'Social Studies', teacher: 'Mr. Ibrahim' },
    },
    Friday: {
      1: { subject: 'Mathematics', teacher: 'Mr. Adebayo' },
      2: { subject: 'English Language', teacher: 'Mrs. Okafor' },
      3: { subject: 'Agricultural Science', teacher: 'Mr. Danladi' },
      5: { subject: 'Civic Education', teacher: 'Mr. Nnamdi' },
      6: { subject: 'Religious Studies', teacher: 'Mrs. Mohammed' },
      7: { subject: 'Physical Education', teacher: 'Mr. Okoro' },
      9: { subject: 'Computer Studies', teacher: 'Ms. Chukwu' },
      10: { subject: 'Creative Arts', teacher: 'Mrs. Adeleke' },
    },
  };
  
  return (
    <Routes>
      <Route path="/" element={
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-900">Timetable Management</h1>
            <p className="text-neutral-500">
              View and manage class timetables and schedules
            </p>
          </div>

          {/* Filters and actions */}
          <div className="bg-white p-5 rounded-lg shadow-card mb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="md:flex-1">
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
              
              <div className="flex space-x-2">
                {editMode ? (
                  <>
                    <button 
                      className="btn-primary flex items-center"
                      onClick={() => setEditMode(false)}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </button>
                    <button 
                      className="btn-outline flex items-center"
                      onClick={() => setEditMode(false)}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className="btn-outline flex items-center"
                      onClick={() => setEditMode(true)}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </button>
                    <button className="btn-outline flex items-center">
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
          </div>

          {/* Timetable */}
          <div className="bg-white rounded-lg shadow-card mb-6">
            <div className="p-5 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">
                {selectedClass 
                  ? `Timetable for ${CLASS_LEVELS.find(cls => cls.id === selectedClass)?.name}` 
                  : 'Class Timetable'}
              </h2>
            </div>
            
            <div className="p-5 overflow-x-auto">
              {!selectedClass ? (
                <div className="text-center py-8">
                  <p className="text-neutral-500">
                    Please select a class to view its timetable.
                  </p>
                </div>
              ) : (
                <table className="min-w-full border border-neutral-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 border-b border-r border-neutral-200 bg-neutral-50 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Time
                      </th>
                      {DAYS_OF_WEEK.map((day) => (
                        <th key={day} className="px-4 py-3 border-b border-r border-neutral-200 bg-neutral-50 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TIME_PERIODS.map((period) => (
                      <tr key={period.id} className={period.name.includes('Break') || period.name.includes('Lunch') ? 'bg-neutral-100' : ''}>
                        <td className="px-4 py-3 border-b border-r border-neutral-200 text-xs">
                          <div className="font-medium">{period.name}</div>
                          <div className="text-neutral-500">{period.startTime} - {period.endTime}</div>
                        </td>
                        {DAYS_OF_WEEK.map((day) => {
                          const cellData = timetableData[day as keyof typeof timetableData]?.[period.id as keyof typeof timetableData[typeof day]];
                          
                          if (period.name.includes('Break') || period.name.includes('Lunch')) {
                            return (
                              <td key={`${day}-${period.id}`} className="px-4 py-3 border-b border-r border-neutral-200 text-center text-xs font-medium bg-neutral-100">
                                {period.name}
                              </td>
                            );
                          }
                          
                          return (
                            <td key={`${day}-${period.id}`} className="px-4 py-3 border-b border-r border-neutral-200">
                              {editMode ? (
                                <div className="flex flex-col space-y-2">
                                  <select
                                    className="text-xs py-1 px-2 border border-neutral-300 rounded"
                                    defaultValue={cellData?.subject || ''}
                                  >
                                    <option value="">- Select Subject -</option>
                                    {getSubjectsByLevel(selectedClass).map((subject) => (
                                      <option key={subject.id} value={subject.name}>
                                        {subject.name}
                                      </option>
                                    ))}
                                  </select>
                                  <select
                                    className="text-xs py-1 px-2 border border-neutral-300 rounded"
                                    defaultValue={cellData?.teacher || ''}
                                  >
                                    <option value="">- Select Teacher -</option>
                                    <option>Mr. Adebayo</option>
                                    <option>Mrs. Okafor</option>
                                    <option>Mr. Nnamdi</option>
                                    <option>Mrs. Ahmed</option>
                                    <option>Mr. Ibrahim</option>
                                  </select>
                                </div>
                              ) : cellData ? (
                                <div className="text-xs">
                                  <div className="font-medium text-neutral-800">{cellData.subject}</div>
                                  <div className="text-neutral-500">{cellData.teacher}</div>
                                </div>
                              ) : editMode ? null : (
                                <div className="flex items-center justify-center h-full">
                                  <span className="text-neutral-300">-</span>
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          
          {/* Other schedules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-card overflow-hidden">
              <div className="px-5 py-4 bg-primary-50 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary-800">Examination Timetable</h3>
                <button className="text-primary-600 hover:text-primary-800">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="p-5">
                <div className="text-center py-4">
                  <p className="text-neutral-500">
                    First Term Examination Timetable will be available from November 20, 2024.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-card overflow-hidden">
              <div className="px-5 py-4 bg-secondary-50 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-secondary-800">Extra-Curricular Activities</h3>
                <button className="text-secondary-600 hover:text-secondary-800">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="divide-y divide-neutral-200">
                <div className="p-4 hover:bg-neutral-50">
                  <h4 className="text-sm font-semibold text-neutral-900">Football Practice</h4>
                  <p className="text-xs text-neutral-500 mt-1">Every Monday and Wednesday, 3:30 PM - 5:00 PM</p>
                  <p className="text-xs text-neutral-500 mt-1">School Football Field</p>
                </div>
                <div className="p-4 hover:bg-neutral-50">
                  <h4 className="text-sm font-semibold text-neutral-900">Debate Club</h4>
                  <p className="text-xs text-neutral-500 mt-1">Every Tuesday, 3:30 PM - 4:30 PM</p>
                  <p className="text-xs text-neutral-500 mt-1">School Hall</p>
                </div>
                <div className="p-4 hover:bg-neutral-50">
                  <h4 className="text-sm font-semibold text-neutral-900">Cultural Dance</h4>
                  <p className="text-xs text-neutral-500 mt-1">Every Thursday, 3:30 PM - 5:00 PM</p>
                  <p className="text-xs text-neutral-500 mt-1">Multi-Purpose Hall</p>
                </div>
                <div className="p-4 hover:bg-neutral-50">
                  <h4 className="text-sm font-semibold text-neutral-900">Science Club</h4>
                  <p className="text-xs text-neutral-500 mt-1">Every Friday, 2:30 PM - 3:30 PM</p>
                  <p className="text-xs text-neutral-500 mt-1">Science Laboratory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default TimetablePage;