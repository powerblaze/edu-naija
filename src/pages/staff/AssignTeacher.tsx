import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, X } from 'lucide-react';

interface AssignmentFormData {
  teacherId: string;
  classId: string;
  subjects: string[];
  academicYear: string;
  term: string;
}

const AssignTeacher: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<AssignmentFormData>({
    teacherId: '',
    classId: '',
    subjects: [],
    academicYear: '2024/2025',
    term: 'First Term',
  });

  // Mock data for teachers and classes
  const teachers = [
    { id: 'TCH001', name: 'Mr. Adebayo Ogunlesi', subjects: ['Mathematics', 'Further Mathematics'] },
    { id: 'TCH002', name: 'Mrs. Ngozi Okafor', subjects: ['English Language', 'Literature'] },
    { id: 'TCH003', name: 'Mr. Ibrahim Mohammed', subjects: ['Physics', 'Chemistry'] },
  ];

  const classes = [
    { id: 'CLS001', name: 'JSS 1A' },
    { id: 'CLS002', name: 'JSS 1B' },
    { id: 'CLS003', name: 'JSS 2A' },
    { id: 'CLS004', name: 'SSS 1A' },
    { id: 'CLS005', name: 'SSS 2B' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to save the assignment
    console.log('Assignment submitted:', formData);
    navigate('/teachers');
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      subjects: selectedOptions
    }));
  };

  // Get available subjects based on selected teacher
  const getTeacherSubjects = () => {
    const selectedTeacher = teachers.find(t => t.id === formData.teacherId);
    return selectedTeacher ? selectedTeacher.subjects : [];
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Assign Teacher to Class</h1>
        <p className="text-neutral-500">Assign teachers to classes and subjects</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Assignment Details */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-neutral-900">Assignment Details</h2>
            
            <div>
              <label htmlFor="teacherId" className="form-label">Select Teacher</label>
              <select
                id="teacherId"
                name="teacherId"
                className="form-select"
                value={formData.teacherId}
                onChange={handleChange}
                required
              >
                <option value="">Choose a teacher</option>
                {teachers.map(teacher => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="classId" className="form-label">Select Class</label>
              <select
                id="classId"
                name="classId"
                className="form-select"
                value={formData.classId}
                onChange={handleChange}
                required
              >
                <option value="">Choose a class</option>
                {classes.map(cls => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="subjects" className="form-label">Assign Subjects</label>
              <select
                id="subjects"
                name="subjects"
                multiple
                className="form-select h-48"
                value={formData.subjects}
                onChange={handleSubjectsChange}
                required
              >
                {getTeacherSubjects().map(subject => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <p className="text-sm text-neutral-500 mt-1">Hold Ctrl/Cmd to select multiple subjects</p>
            </div>
          </div>

          {/* Term Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-neutral-900">Term Information</h2>
            
            <div>
              <label htmlFor="academicYear" className="form-label">Academic Year</label>
              <select
                id="academicYear"
                name="academicYear"
                className="form-select"
                value={formData.academicYear}
                onChange={handleChange}
                required
              >
                <option value="2024/2025">2024/2025</option>
                <option value="2025/2026">2025/2026</option>
              </select>
            </div>

            <div>
              <label htmlFor="term" className="form-label">Term</label>
              <select
                id="term"
                name="term"
                className="form-select"
                value={formData.term}
                onChange={handleChange}
                required
              >
                <option value="First Term">First Term</option>
                <option value="Second Term">Second Term</option>
                <option value="Third Term">Third Term</option>
              </select>
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
            Assign Teacher
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignTeacher;