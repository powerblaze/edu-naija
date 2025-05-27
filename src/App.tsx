import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import StudentsPage from './pages/students/StudentsPage';
import TeachersPage from './pages/staff/TeachersPage';
import ClassesPage from './pages/academics/ClassesPage';
import FeesPage from './pages/finance/FeesPage';
import ResultsPage from './pages/academics/ResultsPage';
import ReportCardPage from './pages/academics/ReportCardPage';
import AttendancePage from './pages/attendance/AttendancePage';
import TimetablePage from './pages/academics/TimetablePage';
import ProtectedRoute from './components/common/ProtectedRoute';
import Layout from './components/layout/Layout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard\" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="students/*" element={<StudentsPage />} />
            <Route path="teachers/*" element={<TeachersPage />} />
            <Route path="classes/*" element={<ClassesPage />} />
            <Route path="fees/*" element={<FeesPage />} />
            <Route path="results/*" element={<ResultsPage />} />
            <Route path="report-card/:studentId" element={<ReportCardPage />} />
            <Route path="attendance/*" element={<AttendancePage />} />
            <Route path="timetable/*" element={<TimetablePage />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/dashboard\" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;