export const NIGERIAN_GRADES = [
  { grade: 'A', minScore: 70, maxScore: 100, remark: 'Excellent' },
  { grade: 'B', minScore: 60, maxScore: 69, remark: 'Very Good' },
  { grade: 'C', minScore: 50, maxScore: 59, remark: 'Good' },
  { grade: 'D', minScore: 45, maxScore: 49, remark: 'Fair' },
  { grade: 'E', minScore: 40, maxScore: 44, remark: 'Pass' },
  { grade: 'F', minScore: 0, maxScore: 39, remark: 'Fail' },
];

export const SCHOOL_LEVELS = [
  { id: 'pri', name: 'Primary' },
  { id: 'jss', name: 'Junior Secondary' },
  { id: 'sss', name: 'Senior Secondary' },
];

export const CLASS_LEVELS = [
  { id: 'pri1', name: 'Primary 1', level: 'Primary' },
  { id: 'pri2', name: 'Primary 2', level: 'Primary' },
  { id: 'pri3', name: 'Primary 3', level: 'Primary' },
  { id: 'pri4', name: 'Primary 4', level: 'Primary' },
  { id: 'pri5', name: 'Primary 5', level: 'Primary' },
  { id: 'pri6', name: 'Primary 6', level: 'Primary' },
  { id: 'jss1', name: 'JSS 1', level: 'Junior Secondary' },
  { id: 'jss2', name: 'JSS 2', level: 'Junior Secondary' },
  { id: 'jss3', name: 'JSS 3', level: 'Junior Secondary' },
  { id: 'sss1', name: 'SSS 1', level: 'Senior Secondary' },
  { id: 'sss2', name: 'SSS 2', level: 'Senior Secondary' },
  { id: 'sss3', name: 'SSS 3', level: 'Senior Secondary' },
];

export const PRIMARY_SUBJECTS = [
  { id: 'eng', name: 'English Language' },
  { id: 'math', name: 'Mathematics' },
  { id: 'sci', name: 'Basic Science' },
  { id: 'socstud', name: 'Social Studies' },
  { id: 'crs', name: 'Christian Religious Studies' },
  { id: 'irs', name: 'Islamic Religious Studies' },
  { id: 'civics', name: 'Civic Education' },
  { id: 'health', name: 'Health Education' },
  { id: 'ca', name: 'Creative Arts' },
  { id: 'agric', name: 'Agricultural Science' },
  { id: 'handw', name: 'Handwriting' },
  { id: 'comp', name: 'Computer Studies' },
  { id: 'phys', name: 'Physical & Health Education' },
  { id: 'yoruba', name: 'Yoruba Language' },
  { id: 'igbo', name: 'Igbo Language' },
  { id: 'hausa', name: 'Hausa Language' },
];

export const JSS_SUBJECTS = [
  { id: 'eng', name: 'English Language' },
  { id: 'math', name: 'Mathematics' },
  { id: 'bsci', name: 'Basic Science' },
  { id: 'btech', name: 'Basic Technology' },
  { id: 'socstud', name: 'Social Studies' },
  { id: 'crs', name: 'Christian Religious Studies' },
  { id: 'irs', name: 'Islamic Religious Studies' },
  { id: 'civics', name: 'Civic Education' },
  { id: 'ca', name: 'Cultural and Creative Arts' },
  { id: 'agric', name: 'Agricultural Science' },
  { id: 'bs', name: 'Business Studies' },
  { id: 'home', name: 'Home Economics' },
  { id: 'pe', name: 'Physical Education' },
  { id: 'comp', name: 'Computer Studies' },
  { id: 'yoruba', name: 'Yoruba Language' },
  { id: 'igbo', name: 'Igbo Language' },
  { id: 'hausa', name: 'Hausa Language' },
  { id: 'french', name: 'French Language' },
  { id: 'arabic', name: 'Arabic Language' },
];

export const SSS_SUBJECTS = [
  { id: 'eng', name: 'English Language' },
  { id: 'math', name: 'Mathematics' },
  { id: 'bio', name: 'Biology' },
  { id: 'chem', name: 'Chemistry' },
  { id: 'phy', name: 'Physics' },
  { id: 'agric', name: 'Agricultural Science' },
  { id: 'econ', name: 'Economics' },
  { id: 'govt', name: 'Government' },
  { id: 'lit', name: 'Literature in English' },
  { id: 'geog', name: 'Geography' },
  { id: 'crs', name: 'Christian Religious Studies' },
  { id: 'irs', name: 'Islamic Religious Studies' },
  { id: 'hist', name: 'History' },
  { id: 'civics', name: 'Civic Education' },
  { id: 'acct', name: 'Financial Accounting' },
  { id: 'comm', name: 'Commerce' },
  { id: 'comp', name: 'Computer Science' },
  { id: 'tech', name: 'Technical Drawing' },
  { id: 'fm', name: 'Further Mathematics' },
  { id: 'yoruba', name: 'Yoruba Language' },
  { id: 'igbo', name: 'Igbo Language' },
  { id: 'hausa', name: 'Hausa Language' },
  { id: 'french', name: 'French Language' },
  { id: 'music', name: 'Music' },
  { id: 'food', name: 'Food and Nutrition' },
];

export const TERMS = [
  { id: 'first', name: 'First Term' },
  { id: 'second', name: 'Second Term' },
  { id: 'third', name: 'Third Term' },
];

export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];

export const TIME_PERIODS = [
  { id: 1, name: '1st Period', startTime: '08:00', endTime: '08:45' },
  { id: 2, name: '2nd Period', startTime: '08:45', endTime: '09:30' },
  { id: 3, name: '3rd Period', startTime: '09:30', endTime: '10:15' },
  { id: 4, name: 'Break', startTime: '10:15', endTime: '10:45' },
  { id: 5, name: '4th Period', startTime: '10:45', endTime: '11:30' },
  { id: 6, name: '5th Period', startTime: '11:30', endTime: '12:15' },
  { id: 7, name: '6th Period', startTime: '12:15', endTime: '13:00' },
  { id: 8, name: 'Lunch', startTime: '13:00', endTime: '13:45' },
  { id: 9, name: '7th Period', startTime: '13:45', endTime: '14:30' },
  { id: 10, name: '8th Period', startTime: '14:30', endTime: '15:15' },
];

export const FEE_TYPES = [
  { id: 'tuition', name: 'Tuition Fee' },
  { id: 'development', name: 'Development Levy' },
  { id: 'pta', name: 'PTA Levy' },
  { id: 'boarding', name: 'Boarding Fee' },
  { id: 'uniform', name: 'Uniform' },
  { id: 'books', name: 'Books and Supplies' },
  { id: 'sports', name: 'Sports Fee' },
  { id: 'exam', name: 'Examination Fee' },
  { id: 'others', name: 'Others' },
];

export const PAYMENT_METHODS = [
  { id: 'cash', name: 'Cash' },
  { id: 'transfer', name: 'Bank Transfer' },
  { id: 'cheque', name: 'Cheque' },
  { id: 'online', name: 'Online Payment' },
];

export const ATTENDANCE_STATUS = [
  { id: 'present', name: 'Present', color: 'success' },
  { id: 'absent', name: 'Absent', color: 'error' },
  { id: 'late', name: 'Late', color: 'warning' },
  { id: 'excused', name: 'Excused', color: 'info' },
];

export const MOCK_CURRENT_TERM = {
  id: 'term1',
  name: 'First Term',
  academicYear: '2024/2025',
  startDate: new Date('2024-09-01'),
  endDate: new Date('2024-12-15'),
};