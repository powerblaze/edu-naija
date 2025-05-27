import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, Printer, ChevronDown, ChevronUp } from 'lucide-react';
import { format } from 'date-fns';
import { NIGERIAN_GRADES, MOCK_CURRENT_TERM } from '../../constants';

const ReportCardPage: React.FC = () => {
  const { studentId } = useParams();
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  // Mock student data - In production, this would come from your API
  const studentData = {
    id: 'STD001',
    name: 'Chinedu Okonkwo',
    class: 'JSS 2A',
    admissionNumber: 'ADM2023001',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    age: 13,
    gender: 'Male',
    term: MOCK_CURRENT_TERM,
    attendance: {
      daysPresent: 110,
      daysAbsent: 5,
      totalDays: 115,
    },
    subjects: [
      {
        name: 'English Language',
        ca1: 12,
        ca2: 13,
        ca3: 8,
        exam: 45,
        total: 78,
        grade: 'A',
        teacherComment: 'Excellent performance in comprehension and grammar.',
        position: 3,
        classAverage: 65,
      },
      {
        name: 'Mathematics',
        ca1: 11,
        ca2: 12,
        ca3: 9,
        exam: 42,
        total: 74,
        grade: 'A',
        teacherComment: 'Shows strong analytical skills and problem-solving ability.',
        position: 5,
        classAverage: 62,
      },
      {
        name: 'Basic Science',
        ca1: 10,
        ca2: 11,
        ca3: 7,
        exam: 38,
        total: 66,
        grade: 'B',
        teacherComment: 'Good understanding of scientific concepts.',
        position: 8,
        classAverage: 58,
      },
      {
        name: 'Social Studies',
        ca1: 13,
        ca2: 12,
        ca3: 8,
        exam: 44,
        total: 77,
        grade: 'A',
        teacherComment: 'Excellent grasp of social concepts and current affairs.',
        position: 2,
        classAverage: 63,
      },
    ],
    comments: {
      classTeacher: "Chinedu is a dedicated student who consistently shows enthusiasm for learning. His academic performance is commendable, and he actively participates in class activities.",
      principal: "Very good performance. Keep up the excellent work and maintain your focus on academic excellence.",
    },
    psychomotor: {
      handwriting: 5,
      verbal: 4,
      sports: 5,
      leadership: 4,
      creativity: 4,
    },
    affective: {
      punctuality: 5,
      neatness: 4,
      honesty: 5,
      cooperation: 4,
      self_control: 4,
    },
  };

  const calculateTotal = () => {
    return studentData.subjects.reduce((acc, subject) => acc + subject.total, 0);
  };

  const calculateAverage = () => {
    return calculateTotal() / studentData.subjects.length;
  };

  const getGradeRemark = (score: number) => {
    return NIGERIAN_GRADES.find(
      grade => score >= grade.minScore && score <= grade.maxScore
    )?.remark || '';
  };

  const toggleSubject = (subjectName: string) => {
    setExpandedSubject(expandedSubject === subjectName ? null : subjectName);
  };

  const renderRatingScale = (value: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`w-4 h-4 rounded-full ${
              num <= value ? 'bg-primary-500' : 'bg-neutral-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Student Report Card</h1>
          <p className="text-neutral-500">
            View and print detailed academic performance report
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="btn-outline flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </button>
          <button className="btn-primary flex items-center">
            <Printer className="mr-2 h-4 w-4" />
            Print Report
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card">
        {/* Header */}
        <div className="p-6 border-b border-neutral-200">
          <div className="flex justify-center mb-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary-600">EduNaija Secondary School</h2>
              <p className="text-neutral-600">Excellence and Character Formation</p>
              <p className="text-neutral-500">PMB 001, Lagos, Nigeria</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex items-center space-x-4">
              <img
                src={studentData.photo}
                alt={studentData.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-neutral-900">{studentData.name}</h3>
                <p className="text-sm text-neutral-500">Admission No: {studentData.admissionNumber}</p>
                <p className="text-sm text-neutral-500">Class: {studentData.class}</p>
              </div>
            </div>
            
            <div className="text-sm">
              <p className="mb-1">
                <span className="font-medium text-neutral-600">Term:</span>{' '}
                <span className="text-neutral-800">{studentData.term.name}</span>
              </p>
              <p className="mb-1">
                <span className="font-medium text-neutral-600">Session:</span>{' '}
                <span className="text-neutral-800">{studentData.term.academicYear}</span>
              </p>
              <p>
                <span className="font-medium text-neutral-600">Age:</span>{' '}
                <span className="text-neutral-800">{studentData.age} years</span>
              </p>
            </div>
            
            <div className="text-sm">
              <p className="mb-1">
                <span className="font-medium text-neutral-600">Days Present:</span>{' '}
                <span className="text-neutral-800">{studentData.attendance.daysPresent}</span>
              </p>
              <p className="mb-1">
                <span className="font-medium text-neutral-600">Days Absent:</span>{' '}
                <span className="text-neutral-800">{studentData.attendance.daysAbsent}</span>
              </p>
              <p>
                <span className="font-medium text-neutral-600">Total School Days:</span>{' '}
                <span className="text-neutral-800">{studentData.attendance.totalDays}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Academic Performance */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Academic Performance</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    CA1 (15%)
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    CA2 (15%)
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    CA3 (10%)
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Exam (60%)
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                {studentData.subjects.map((subject) => (
                  <React.Fragment key={subject.name}>
                    <tr className="hover:bg-neutral-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                        {subject.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-neutral-500">
                        {subject.ca1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-neutral-500">
                        {subject.ca2}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-neutral-500">
                        {subject.ca3}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-neutral-500">
                        {subject.exam}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-neutral-900">
                        {subject.total}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          subject.grade === 'A' 
                            ? 'bg-green-100 text-green-800'
                            : subject.grade === 'B'
                              ? 'bg-blue-100 text-blue-800'
                              : subject.grade === 'C'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                        }`}>
                          {subject.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-neutral-500">
                        {subject.position}
                        {subject.position === 1 
                          ? 'st' 
                          : subject.position === 2 
                            ? 'nd' 
                            : subject.position === 3 
                              ? 'rd' 
                              : 'th'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => toggleSubject(subject.name)}
                          className="text-primary-600 hover:text-primary-900"
                        >
                          {expandedSubject === subject.name ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </button>
                      </td>
                    </tr>
                    {expandedSubject === subject.name && (
                      <tr className="bg-neutral-50">
                        <td colSpan={9} className="px-6 py-4">
                          <div className="text-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="font-medium text-neutral-700 mb-1">Teacher's Comment:</p>
                                <p className="text-neutral-600">{subject.teacherComment}</p>
                              </div>
                              <div>
                                <p className="font-medium text-neutral-700 mb-1">Class Statistics:</p>
                                <p className="text-neutral-600">
                                  Class Average: {subject.classAverage}%
                                </p>
                                <div className="mt-2 w-full bg-neutral-200 rounded-full h-2">
                                  <div
                                    className="bg-primary-500 h-2 rounded-full"
                                    style={{ width: `${(subject.total / 100) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
              <tfoot className="bg-neutral-50">
                <tr>
                  <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                    Total Score: {calculateTotal()}
                  </td>
                  <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                    Average Score: {calculateAverage().toFixed(2)}% ({getGradeRemark(calculateAverage())})
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Psychomotor and Affective Domains */}
        <div className="p-6 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Psychomotor Domain</h3>
              <div className="space-y-4">
                {Object.entries(studentData.psychomotor).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-600 capitalize">
                      {key.replace('_', ' ')}:
                    </span>
                    {renderRatingScale(value)}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Affective Domain</h3>
              <div className="space-y-4">
                {Object.entries(studentData.affective).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-600 capitalize">
                      {key.replace('_', ' ')}:
                    </span>
                    {renderRatingScale(value)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="p-6 border-t border-neutral-200">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-2">Class Teacher's Comment:</h4>
              <p className="text-sm text-neutral-600 p-4 bg-neutral-50 rounded-md">
                {studentData.comments.classTeacher}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-2">Principal's Comment:</h4>
              <p className="text-sm text-neutral-600 p-4 bg-neutral-50 rounded-md">
                {studentData.comments.principal}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="border-b-2 border-neutral-900 pb-2 mb-2">
                &nbsp;
              </div>
              <p className="text-sm font-medium text-neutral-600">Class Teacher's Signature</p>
            </div>
            
            <div className="text-center">
              <div className="border-b-2 border-neutral-900 pb-2 mb-2">
                &nbsp;
              </div>
              <p className="text-sm font-medium text-neutral-600">Principal's Signature</p>
            </div>
            
            <div className="text-center">
              <div className="border-b-2 border-neutral-900 pb-2 mb-2">
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
              <p className="text-sm font-medium text-neutral-600">Date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCardPage;