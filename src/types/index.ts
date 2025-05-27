// User Types
export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  role: UserRole;
  avatar?: string;
  lastLogin?: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
  PARENT = 'parent',
}

// Student Types
export interface Student {
  id: string;
  registrationNumber: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: Date;
  gender: 'male' | 'female';
  address: string;
  phoneNumber?: string;
  email?: string;
  parentId?: string;
  classId: string;
  admissionDate: Date;
  status: 'active' | 'inactive' | 'graduated' | 'suspended' | 'withdrawn';
  photo?: string;
  boardingStatus: 'day' | 'boarding';
  medicalInformation?: string;
}

// Staff/Teacher Types
export interface Staff {
  id: string;
  staffId: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: Date;
  gender: 'male' | 'female';
  address: string;
  phoneNumber: string;
  email: string;
  qualification: string;
  position: string;
  department: string;
  dateEmployed: Date;
  subjectsTaught: string[];
  status: 'active' | 'inactive' | 'onLeave';
  photo?: string;
}

// Academic Types
export interface Class {
  id: string;
  name: string;
  level: 'Primary' | 'Junior Secondary' | 'Senior Secondary';
  section: string;
  academicYear: string;
  classTeacherId: string;
  students: string[];
  subjects: string[];
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  description?: string;
  level: 'Primary' | 'Junior Secondary' | 'Senior Secondary';
  department: string;
  teacherId: string;
}

export interface AcademicYear {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  terms: Term[];
  status: 'upcoming' | 'active' | 'completed';
}

export interface Term {
  id: string;
  name: 'First' | 'Second' | 'Third';
  startDate: Date;
  endDate: Date;
  academicYearId: string;
  status: 'upcoming' | 'active' | 'completed';
}

// Examination Types
export interface Examination {
  id: string;
  name: string;
  subjectId: string;
  classId: string;
  termId: string;
  academicYearId: string;
  examDate: Date;
  totalMarks: number;
  status: 'scheduled' | 'ongoing' | 'completed';
}

export interface Assessment {
  id: string;
  studentId: string;
  subjectId: string;
  classId: string;
  termId: string;
  academicYearId: string;
  assessmentType: 'CA1' | 'CA2' | 'CA3' | 'Exam';
  score: number;
  maxScore: number;
  date: Date;
}

export interface Result {
  id: string;
  studentId: string;
  subjectId: string;
  classId: string;
  termId: string;
  academicYearId: string;
  ca1: number;
  ca2: number;
  ca3: number;
  exam: number;
  total: number;
  grade: string;
  remarks: string;
  position: number;
  teacherComment?: string;
  principalComment?: string;
}

// Financial Types
export interface Fee {
  id: string;
  name: string;
  description: string;
  amount: number;
  dueDate: Date;
  classId?: string;
  termId: string;
  academicYearId: string;
  isCompulsory: boolean;
  feeType: 'Tuition' | 'Development' | 'PTA' | 'Boarding' | 'Uniform' | 'Books' | 'Others';
}

export interface Payment {
  id: string;
  studentId: string;
  feeId: string;
  amount: number;
  paymentDate: Date;
  paymentMethod: 'Cash' | 'Bank Transfer' | 'Cheque' | 'Online';
  receiptNumber: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  notes?: string;
}

// Attendance Types
export interface StudentAttendance {
  id: string;
  studentId: string;
  classId: string;
  date: Date;
  status: 'present' | 'absent' | 'late' | 'excused';
  notes?: string;
}

export interface StaffAttendance {
  id: string;
  staffId: string;
  date: Date;
  status: 'present' | 'absent' | 'late' | 'onLeave';
  notes?: string;
}

// Timetable Types
export interface Timetable {
  id: string;
  classId: string;
  termId: string;
  academicYearId: string;
  slots: TimetableSlot[];
}

export interface TimetableSlot {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  period: number;
  startTime: string;
  endTime: string;
  subjectId: string;
  teacherId: string;
  location?: string;
}

// Communication Types
export interface Announcement {
  id: string;
  title: string;
  content: string;
  datePosted: Date;
  postedBy: string;
  audience: ('all' | 'staff' | 'students' | 'parents')[];
  attachments?: string[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  subject: string;
  content: string;
  dateSent: Date;
  isRead: boolean;
  attachments?: string[];
}

// Boarding Types
export interface Dormitory {
  id: string;
  name: string;
  capacity: number;
  gender: 'male' | 'female';
  location: string;
  description?: string;
}

export interface BoardingAllocation {
  id: string;
  studentId: string;
  dormitoryId: string;
  bedNumber: string;
  termId: string;
  academicYearId: string;
}