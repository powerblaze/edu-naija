import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Calendar, Filter, Download, Save, Check, X, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { CLASS_LEVELS, ATTENDANCE_STATUS } from '../../constants';

const AttendancePage: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [attendanceMode, setAttendanceMode] = useState<'view' | 'edit'>('view');
  
  // Sample attendance data
  const attendanceData = [
    {
      studentId: 'STD001',
      name: 'Chinedu Okonkwo',
      class: 'JSS 2A',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      status: 'present',
      time: '07:45 AM',
    },
    {
      studentId: 'STD002',
      name: 'Amina Ibrahim',
      class: 'SSS 1B',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      status: 'present',
      time: '07:50 AM',
    },
    {
      studentId: 'STD003',
      name: 'Emeka Eze',
      class: 'Primary 5',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      status: 'absent',
      time: null,
    },
    {
      studentId: 'STD004',
      name: 'Ngozi Adeyemi',
      class: 'SSS 3A',
      photo: 'https://randomuser.me/api/portraits/women/4.jpg',
      status: 'present',
      time: '07:55 AM',
    },
    {
      studentId: 'STD005',
      name: 'Yusuf Mohammed',
      class: 'JSS 1C',
      photo: 'https://randomuser.me/api/portraits/men/5.jpg',
      status: 'late',
      time: '08:15 AM',
    },
    {
      studentId: 'STD006',
      name: 'Fatima Abubakar',
      class: 'Primary 6',
      photo: 'https://randomuser.me/api/portraits/women/6.jpg',
      status: 'present',
      time: '07:48 AM',
    },
    {
      studentId: 'STD007',
      name: 'Oluwaseun Adeleke',
      class: 'SSS 2B',
      photo: 'https://randomuser.me/api/portraits/men/7.jpg',
      status: 'excused',
      time: null,
      notes: 'Medical appointment',
    },
    {
      studentId: 'STD008',
      name: 'Chioma Nnamdi',
      class: 'JSS 3A',
      photo: 'https://randomuser.me/api/portraits/women/8.jpg',
      status: 'present',
      time: '07:52 AM',
    },
  ];
  
  // Filter attendance data by class
  const filteredAttendance = selectedClass 
    ? attendanceData.filter(student => student.class === selectedClass)
    : attendanceData;
  
  // Calculate attendance statistics
  const totalStudents = filteredAttendance.length;
  const presentCount = filteredAttendance.filter(s => s.status === 'present').length;
  const absentCount = filteredAttendance.filter(s => s.status === 'absent').length;
  const lateCount = filteredAttendance.filter(s => s.status === 'late').length;
  const excusedCount = filteredAttendance.filter(s => s.status === 'excused').length;
  
  const attendanceRate = totalStudents > 0 
    ? ((presentCount + lateCount) / totalStudents) * 100 
    : 0;
  
  // Handle student status change in edit mode
  const [studentStatus, setStudentStatus] = useState(
    attendanceData.reduce((acc, student) => {
      acc[student.studentId] = student.status;
      return acc;
    }, {} as Record<string, string>)
  );
  
  const handleStatusChange = (studentId: string, status: string) => {
    setStudentStatus(prev => ({
      ...prev,
      [studentId]: status,
    }));
  };
  
  const saveAttendance = () => {
    // Here you would save the attendance data to your backend
    // For this demo, we'll just switch back to view mode
    setAttendanceMode('view');
  };
  
  return (
    <Routes>
      <Route path="/" element={
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-900">Attendance Management</h1>
            <p className="text-neutral-500">
              Track and manage student attendance records
            </p>
          </div>

          {/* Filters and actions */}
          <div className="bg-white p-5 rounded-lg shadow-card mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="class" className="form-label">Class</label>
                <select
                  id="class"
                  className="form-select"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="">All Classes</option>
                  {CLASS_LEVELS.map((cls) => (
                    <option key={cls.id} value={cls.name}>
                      {cls.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="form-label">Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    className="pl-10 form-input"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-end space-x-2">
                {attendanceMode === 'view' ? (
                  <>
                    <button 
                      className="btn-primary flex-1 flex items-center justify-center"
                      onClick={() => setAttendanceMode('edit')}
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Take Attendance
                    </button>
                    <button className="btn-outline flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className="btn-primary flex-1 flex items-center justify-center"
                      onClick={saveAttendance}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Attendance
                    </button>
                    <button 
                      className="btn-outline flex items-center"
                      onClick={() => setAttendanceMode('view')}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Attendance Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 rounded-md bg-primary-100">
                  <Calendar className="h-5 w-5 text-primary-600" />
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-neutral-500">Total Students</p>
                  <p className="text-lg font-semibold text-neutral-900">{totalStudents}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 rounded-md bg-green-100">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-neutral-500">Present</p>
                  <p className="text-lg font-semibold text-neutral-900">{presentCount}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 rounded-md bg-red-100">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-neutral-500">Absent</p>
                  <p className="text-lg font-semibold text-neutral-900">{absentCount}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 rounded-md bg-yellow-100">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-neutral-500">Late</p>
                  <p className="text-lg font-semibold text-neutral-900">{lateCount}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 rounded-md bg-blue-100">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-neutral-500">Attendance Rate</p>
                  <p className="text-lg font-semibold text-neutral-900">{attendanceRate.toFixed(1)}%</p>
                </div>
              </div>
              <div className="mt-2 w-full bg-neutral-200 rounded-full h-2">
                <div 
                  className="bg-primary-500 h-2 rounded-full" 
                  style={{ width: `${attendanceRate}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Attendance List */}
          <div className="bg-white rounded-lg shadow-card overflow-hidden">
            <div className="p-5 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">
                Attendance Record - {format(new Date(selectedDate), 'MMMM d, yyyy')}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Class
                    </th>
                    {attendanceMode === 'view' ? (
                      <>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Time
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Notes
                        </th>
                      </>
                    ) : (
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Mark Attendance
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {filteredAttendance.map((student) => (
                    <tr key={student.studentId} className="hover:bg-neutral-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={student.photo} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-neutral-900">
                              {student.name}
                            </div>
                            <div className="text-xs text-neutral-500">
                              {student.studentId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                        {student.class}
                      </td>
                      
                      {attendanceMode === 'view' ? (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              student.status === 'present' 
                                ? 'bg-green-100 text-green-800' 
                                : student.status === 'absent'
                                  ? 'bg-red-100 text-red-800'
                                  : student.status === 'late'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-blue-100 text-blue-800'
                            }`}>
                              {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                            {student.time || '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                            {student.notes || '-'}
                          </td>
                        </>
                      ) : (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            {ATTENDANCE_STATUS.map((status) => (
                              <button
                                key={status.id}
                                className={`px-3 py-1 rounded-md text-xs font-medium ${
                                  studentStatus[student.studentId] === status.id
                                    ? `bg-${status.color}-100 text-${status.color}-800 border-2 border-${status.color}-500`
                                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                }`}
                                onClick={() => handleStatusChange(student.studentId, status.id)}
                              >
                                {status.name}
                              </button>
                            ))}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default AttendancePage;