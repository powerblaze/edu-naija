import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Eye, MoreHorizontal, Trash } from 'lucide-react';

// Mock data for students
const MOCK_STUDENTS = [
  {
    id: 'STD001',
    registrationNumber: 'REG2024001',
    firstName: 'Chinedu',
    lastName: 'Okonkwo',
    gender: 'male',
    class: 'JSS 2A',
    level: 'Junior Secondary',
    admissionDate: new Date('2022-09-01'),
    status: 'active',
    boardingStatus: 'boarding',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 'STD002',
    registrationNumber: 'REG2024002',
    firstName: 'Amina',
    lastName: 'Ibrahim',
    gender: 'female',
    class: 'SSS 1B',
    level: 'Senior Secondary',
    admissionDate: new Date('2023-09-01'),
    status: 'active',
    boardingStatus: 'day',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 'STD003',
    registrationNumber: 'REG2024003',
    firstName: 'Emeka',
    lastName: 'Eze',
    gender: 'male',
    class: 'Primary 5',
    level: 'Primary',
    admissionDate: new Date('2020-09-01'),
    status: 'active',
    boardingStatus: 'day',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 'STD004',
    registrationNumber: 'REG2024004',
    firstName: 'Ngozi',
    lastName: 'Adeyemi',
    gender: 'female',
    class: 'SSS 3A',
    level: 'Senior Secondary',
    admissionDate: new Date('2021-09-01'),
    status: 'active',
    boardingStatus: 'boarding',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 'STD005',
    registrationNumber: 'REG2024005',
    firstName: 'Yusuf',
    lastName: 'Mohammed',
    gender: 'male',
    class: 'JSS 1C',
    level: 'Junior Secondary',
    admissionDate: new Date('2023-09-01'),
    status: 'active',
    boardingStatus: 'day',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 'STD006',
    registrationNumber: 'REG2024006',
    firstName: 'Fatima',
    lastName: 'Abubakar',
    gender: 'female',
    class: 'Primary 6',
    level: 'Primary',
    admissionDate: new Date('2019-09-01'),
    status: 'active',
    boardingStatus: 'day',
    photo: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 'STD007',
    registrationNumber: 'REG2024007',
    firstName: 'Oluwaseun',
    lastName: 'Adeleke',
    gender: 'male',
    class: 'SSS 2B',
    level: 'Senior Secondary',
    admissionDate: new Date('2022-09-01'),
    status: 'active',
    boardingStatus: 'boarding',
    photo: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 'STD008',
    registrationNumber: 'REG2024008',
    firstName: 'Chioma',
    lastName: 'Nnamdi',
    gender: 'female',
    class: 'JSS 3A',
    level: 'Junior Secondary',
    admissionDate: new Date('2021-09-01'),
    status: 'active',
    boardingStatus: 'day',
    photo: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: 'STD009',
    registrationNumber: 'REG2024009',
    firstName: 'Ibrahim',
    lastName: 'Musa',
    gender: 'male',
    class: 'Primary 3',
    level: 'Primary',
    admissionDate: new Date('2022-09-01'),
    status: 'active',
    boardingStatus: 'day',
    photo: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 'STD010',
    registrationNumber: 'REG2024010',
    firstName: 'Aisha',
    lastName: 'Bello',
    gender: 'female',
    class: 'JSS 2B',
    level: 'Junior Secondary',
    admissionDate: new Date('2022-09-01'),
    status: 'active',
    boardingStatus: 'boarding',
    photo: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];

interface StudentsListProps {
  searchQuery: string;
  selectedFilter: string;
}

const StudentsList: React.FC<StudentsListProps> = ({ searchQuery, selectedFilter }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Filter students based on search and filter criteria
  const filteredStudents = MOCK_STUDENTS.filter(student => {
    const matchesSearch = 
      student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.class.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      selectedFilter === 'all' || 
      (selectedFilter === 'pri' && student.level === 'Primary') ||
      (selectedFilter === 'jss' && student.level === 'Junior Secondary') ||
      (selectedFilter === 'sss' && student.level === 'Senior Secondary');
    
    return matchesSearch && matchesFilter;
  });

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Student
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Registration No.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Class
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Admission Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Boarding Status
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={student.photo} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-neutral-900">
                          {student.firstName} {student.lastName}
                        </div>
                        <div className="text-sm text-neutral-500">
                          {student.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    {student.registrationNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    {student.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    {student.admissionDate.toLocaleDateString('en-GB')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.boardingStatus === 'boarding' 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {student.boardingStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(student.id)}
                        className="text-neutral-500 hover:text-neutral-700 focus:outline-none"
                      >
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                      {activeDropdown === student.id && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            <Link
                              to={`/students/${student.id}`}
                              className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                              role="menuitem"
                            >
                              <Eye className="mr-3 h-4 w-4 text-neutral-500" />
                              View Details
                            </Link>
                            <Link
                              to={`/students/${student.id}/edit`}
                              className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                              role="menuitem"
                            >
                              <Edit className="mr-3 h-4 w-4 text-neutral-500" />
                              Edit
                            </Link>
                            <button
                              className="flex w-full items-center px-4 py-2 text-sm text-red-700 hover:bg-neutral-100"
                              role="menuitem"
                            >
                              <Trash className="mr-3 h-4 w-4 text-red-500" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-neutral-500">
                  No students found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-neutral-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-neutral-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">{filteredStudents.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                1
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-primary-50 text-sm font-medium text-primary-600 hover:bg-primary-100">
                2
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                3
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsList;