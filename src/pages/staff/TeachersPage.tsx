import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Download, Filter, Plus, Search, UserPlus, MoreHorizontal, Eye, Edit, Trash } from 'lucide-react';

// Mock data for teachers
const MOCK_TEACHERS = [
  {
    id: 'TCH001',
    staffId: 'STF2024001',
    firstName: 'Adebayo',
    lastName: 'Ogunlesi',
    position: 'Mathematics Teacher',
    department: 'Sciences',
    phoneNumber: '080-1234-5678',
    email: 'adebayo.ogunlesi@edunaija.com',
    dateEmployed: new Date('2018-09-01'),
    status: 'active',
    qualification: 'B.Sc. Mathematics',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 'TCH002',
    staffId: 'STF2024002',
    firstName: 'Ngozi',
    lastName: 'Okafor',
    position: 'English Teacher',
    department: 'Languages',
    phoneNumber: '080-2345-6789',
    email: 'ngozi.okafor@edunaija.com',
    dateEmployed: new Date('2019-09-01'),
    status: 'active',
    qualification: 'B.A. English Literature',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 'TCH003',
    staffId: 'STF2024003',
    firstName: 'Ibrahim',
    lastName: 'Mohammed',
    position: 'Social Studies Teacher',
    department: 'Social Sciences',
    phoneNumber: '080-3456-7890',
    email: 'ibrahim.mohammed@edunaija.com',
    dateEmployed: new Date('2017-09-01'),
    status: 'active',
    qualification: 'B.Sc. Sociology',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    id: 'TCH004',
    staffId: 'STF2024004',
    firstName: 'Chioma',
    lastName: 'Adeyemi',
    position: 'Biology Teacher',
    department: 'Sciences',
    phoneNumber: '080-4567-8901',
    email: 'chioma.adeyemi@edunaija.com',
    dateEmployed: new Date('2020-09-01'),
    status: 'active',
    qualification: 'B.Sc. Biology',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 'TCH005',
    staffId: 'STF2024005',
    firstName: 'Oluwaseun',
    lastName: 'Adeleke',
    position: 'Computer Studies Teacher',
    department: 'Sciences',
    phoneNumber: '080-5678-9012',
    email: 'oluwaseun.adeleke@edunaija.com',
    dateEmployed: new Date('2021-09-01'),
    status: 'active',
    qualification: 'B.Sc. Computer Science',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 'TCH006',
    staffId: 'STF2024006',
    firstName: 'Fatima',
    lastName: 'Bello',
    position: 'French Teacher',
    department: 'Languages',
    phoneNumber: '080-6789-0123',
    email: 'fatima.bello@edunaija.com',
    dateEmployed: new Date('2019-09-01'),
    status: 'active',
    qualification: 'B.A. French',
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
  {
    id: 'TCH007',
    staffId: 'STF2024007',
    firstName: 'Emeka',
    lastName: 'Eze',
    position: 'Physical Education Teacher',
    department: 'Physical Education',
    phoneNumber: '080-7890-1234',
    email: 'emeka.eze@edunaija.com',
    dateEmployed: new Date('2018-09-01'),
    status: 'onLeave',
    qualification: 'B.Sc. Physical Education',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: 'TCH008',
    staffId: 'STF2024008',
    firstName: 'Amina',
    lastName: 'Ibrahim',
    position: 'Chemistry Teacher',
    department: 'Sciences',
    phoneNumber: '080-8901-2345',
    email: 'amina.ibrahim@edunaija.com',
    dateEmployed: new Date('2020-09-01'),
    status: 'active',
    qualification: 'B.Sc. Chemistry',
    photo: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
];

const TeachersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Filter teachers based on search and department
  const filteredTeachers = MOCK_TEACHERS.filter(teacher => {
    const matchesSearch = 
      teacher.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.staffId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.position.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = 
      selectedDepartment === 'all' || 
      teacher.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <Routes>
      <Route path="/" element={
        <div className="animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Teachers</h1>
              <p className="text-neutral-500">Manage your teaching staff information</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link 
                to="/teachers/new" 
                className="btn-primary flex items-center"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Add New Teacher
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
                    placeholder="Search teachers by name, ID, or position..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <select
                    className="form-select appearance-none pr-10 py-2"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    <option value="all">All Departments</option>
                    <option value="Sciences">Sciences</option>
                    <option value="Languages">Languages</option>
                    <option value="Social Sciences">Social Sciences</option>
                    <option value="Physical Education">Physical Education</option>
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

          {/* Teachers list */}
          <div className="bg-white rounded-lg shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Teacher
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Staff ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {filteredTeachers.length > 0 ? (
                    filteredTeachers.map((teacher) => (
                      <tr key={teacher.id} className="hover:bg-neutral-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={teacher.photo} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-neutral-900">
                                {teacher.firstName} {teacher.lastName}
                              </div>
                              <div className="text-sm text-neutral-500">
                                {teacher.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                          {teacher.staffId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                          {teacher.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                          {teacher.department}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                          {teacher.phoneNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            teacher.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {teacher.status === 'active' ? 'Active' : 'On Leave'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="relative">
                            <button
                              onClick={() => toggleDropdown(teacher.id)}
                              className="text-neutral-500 hover:text-neutral-700 focus:outline-none"
                            >
                              <MoreHorizontal className="h-5 w-5" />
                            </button>
                            {activeDropdown === teacher.id && (
                              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                  <Link
                                    to={`/teachers/${teacher.id}`}
                                    className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                                    role="menuitem"
                                  >
                                    <Eye className="mr-3 h-4 w-4 text-neutral-500" />
                                    View Details
                                  </Link>
                                  <Link
                                    to={`/teachers/${teacher.id}/edit`}
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
                        No teachers found matching your criteria.
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
                    Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredTeachers.length}</span> of{' '}
                    <span className="font-medium">{filteredTeachers.length}</span> results
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
                    <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-primary-50 text-sm font-medium text-primary-600">
                      1
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
        </div>
      } />
      
      <Route path="/new" element={<div>New Teacher Form</div>} />
      <Route path="/:id" element={<div>Teacher Detail</div>} />
      <Route path="/:id/edit" element={<div>Edit Teacher</div>} />
    </Routes>
  );
};

export default TeachersPage;