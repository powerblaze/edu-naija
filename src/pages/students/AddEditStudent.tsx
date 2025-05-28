import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X } from 'lucide-react';

interface StudentFormData {
  firstName: string;
  lastName: string;
  middleName: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  registrationNumber: string;
  class: string;
  boardingStatus: 'day' | 'boarding';
  address: string;
  phoneNumber: string;
  email: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  medicalInformation: string;
}

const AddEditStudent: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<StudentFormData>({
    firstName: '',
    lastName: '',
    middleName: '',
    gender: 'male',
    dateOfBirth: '',
    registrationNumber: '',
    class: '',
    boardingStatus: 'day',
    address: '',
    phoneNumber: '',
    email: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    medicalInformation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to save the student data
    console.log('Form submitted:', formData);
    navigate('/students');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">
          {isEditing ? 'Edit Student' : 'Add New Student'}
        </h1>
        <p className="text-neutral-500">
          {isEditing ? 'Update student information' : 'Register a new student'}
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

          {/* Academic Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-neutral-900">Academic Information</h2>
            
            <div>
              <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                className="form-input"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="class" className="form-label">Class</label>
              <select
                id="class"
                name="class"
                className="form-select"
                value={formData.class}
                onChange={handleChange}
                required
              >
                <option value="">Select Class</option>
                <option value="Primary 1">Primary 1</option>
                <option value="Primary 2">Primary 2</option>
                <option value="Primary 3">Primary 3</option>
                <option value="Primary 4">Primary 4</option>
                <option value="Primary 5">Primary 5</option>
                <option value="Primary 6">Primary 6</option>
                <option value="JSS 1">JSS 1</option>
                <option value="JSS 2">JSS 2</option>
                <option value="JSS 3">JSS 3</option>
                <option value="SSS 1">SSS 1</option>
                <option value="SSS 2">SSS 2</option>
                <option value="SSS 3">SSS 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="boardingStatus" className="form-label">Boarding Status</label>
              <select
                id="boardingStatus"
                name="boardingStatus"
                className="form-select"
                value={formData.boardingStatus}
                onChange={handleChange}
                required
              >
                <option value="day">Day Student</option>
                <option value="boarding">Boarding Student</option>
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
              />
            </div>
          </div>

          {/* Parent/Guardian Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-neutral-900">Parent/Guardian Information</h2>
            
            <div>
              <label htmlFor="parentName" className="form-label">Parent/Guardian Name</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                className="form-input"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="parentPhone" className="form-label">Parent/Guardian Phone</label>
              <input
                type="tel"
                id="parentPhone"
                name="parentPhone"
                className="form-input"
                value={formData.parentPhone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="parentEmail" className="form-label">Parent/Guardian Email</label>
              <input
                type="email"
                id="parentEmail"
                name="parentEmail"
                className="form-input"
                value={formData.parentEmail}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Medical Information */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Medical Information</h2>
          
          <div>
            <label htmlFor="medicalInformation" className="form-label">Medical Conditions/Allergies</label>
            <textarea
              id="medicalInformation"
              name="medicalInformation"
              rows={4}
              className="form-input"
              value={formData.medicalInformation}
              onChange={handleChange}
              placeholder="Enter any relevant medical information or allergies..."
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/students')}
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
            {isEditing ? 'Update Student' : 'Add Student'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditStudent;