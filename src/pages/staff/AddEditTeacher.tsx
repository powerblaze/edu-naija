import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X } from 'lucide-react';

interface TeacherFormData {
  firstName: string;
  lastName: string;
  middleName: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  staffId: string;
  position: string;
  department: string;
  qualification: string;
  subjectsTaught: string[];
  address: string;
  phoneNumber: string;
  email: string;
  dateEmployed: string;
  status: 'active' | 'inactive' | 'onLeave';
}

const AddEditTeacher: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<TeacherFormData>({
    firstName: '',
    lastName: '',
    middleName: '',
    gender: 'male',
    dateOfBirth: '',
    staffId: '',
    position: '',
    department: '',
    qualification: '',
    subjectsTaught: [],
    address: '',
    phoneNumber: '',
    email: '',
    dateEmployed: '',
    status: 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to save the teacher data
    console.log('Form submitted:', formData);
    navigate('/teachers');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setFormData(prev => ({
      ...prev,
      subjectsTaught: selectedOptions
    }));
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">
          {isEditing ? 'Edit Teacher' : 'Add New Teacher'}
        </h1>
        <p className="text-neutral-500">
          {isEditing ? 'Update teacher information' : 'Register a new teacher'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-neutral-900">Personal Information</h2>
            
            <div>
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="middleName" className="form-label">Middle Name</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="form-input"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="gender" className="form-label">Gender</label>
              <select
                id="gender"
                name="gender"
                className="form-select"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="form-input"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Employment Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-neutral-900">Employment Information</h2>
            
            <div>
              <label htmlFor="staffId" className="form-label">Staff ID</label>
              <input
                type="text"
                id="staffId"
                name="staffId"
                className="form-input"
                value={formData.staffId}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="position" className="form-label">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                className="form-input"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="department" className="form-label">Department</label>
              <select
                id="department"
                name="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Sciences">Sciences</option>
                <option value="Languages">Languages</option>
                <option value="Social Sciences">Social Sciences</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Arts">Arts</option>
                <option value="Physical Education">Physical Education</option>
              </select>
            </div>

            <div>
              <label htmlFor="qualification" className="form-label">Qualification</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="form-input"
                value={formData.qualification}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="dateEmployed" className="form-label">Date Employed</label>
              <input
                type="date"
                id="dateEmployed"
                name="dateEmployed"
                className="form-input"
                value={formData.dateEmployed}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="status" className="form-label">Status</label>
              <select
                id="status"
                name="status"
                className="form-select"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="onLeave">On Leave</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-neutral-900">Contact Information</h2>
            
            <div>
              <label htmlFor="address" className="form-label">Address</label>
              <textarea
                id="address"
                name="address"
                rows={3}
                className="form-input"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-input"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Subjects Taught */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-neutral-900">Subjects Taught</h2>
            
            <div>
              <label htmlFor="subjectsTaught" className="form-label">Select Subjects</label>
              <select
                id="subjectsTaught"
                name="subjectsTaught"
                multiple
                className="form-select h-48"
                value={formData.subjectsTaught}
                onChange={handleSubjectsChange}
                required
              >
                <option value="English Language">English Language</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Literature">Literature</option>
                <option value="Government">Government</option>
                <option value="Economics">Economics</option>
                <option value="Geography">Geography</option>
                <option value="Agricultural Science">Agricultural Science</option>
                <option value="French">French</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Basic Science">Basic Science</option>
                <option value="Basic Technology">Basic Technology</option>
                <option value="Social Studies">Social Studies</option>
                <option value="Civic Education">Civic Education</option>
                <option value="Physical Education">Physical Education</option>
              </select>
              <p className="text-sm text-neutral-500 mt-1">Hold Ctrl/Cmd to select multiple subjects</p>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/teachers')}
            className="btn-outline flex items-center"
          >
            <X className="mr-2 h-4 w-4" />
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary flex items-center"
          >
            <Save className="mr-2 h-4 w-4" />
            {isEditing ? 'Update Teacher' : 'Add Teacher'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditTeacher;