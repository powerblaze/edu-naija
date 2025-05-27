import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  CalendarCheck, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  AlertCircle
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import { MOCK_CURRENT_TERM } from '../constants';
import { format } from 'date-fns';

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const DashboardPage: React.FC = () => {
  // Attendance chart data
  const attendanceData = {
    labels: ['Present', 'Absent', 'Late', 'Excused'],
    datasets: [
      {
        data: [85, 5, 7, 3],
        backgroundColor: [
          '#0a6c45', // primary
          '#dc3545', // error
          '#ffc107', // warning
          '#6c757d', // neutral
        ],
        borderWidth: 1,
      },
    ],
  };

  // Fee collection chart data
  const feeCollectionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Fee Collection (₦)',
        data: [5000000, 7500000, 10000000, 8500000, 6500000, 4000000, 3000000, 2500000, 12000000, 9500000, 8000000, 7000000],
        borderColor: '#f2c94c',
        backgroundColor: 'rgba(242, 201, 76, 0.1)',
        fill: true,
      },
    ],
  };

  // Academic performance chart data
  const performanceData = {
    labels: ['English', 'Mathematics', 'Sciences', 'Social Studies', 'Languages', 'Arts'],
    datasets: [
      {
        label: 'Average Score (%)',
        data: [72, 68, 75, 82, 65, 88],
        borderColor: '#0a6c45',
        backgroundColor: 'rgba(10, 108, 69, 0.1)',
        fill: true,
      },
    ],
  };

  // Dashboard stats
  const stats = [
    { 
      name: 'Total Students', 
      value: '1,254', 
      icon: Users, 
      change: '+3.2%',
      trend: 'up',
      link: '/students',
      color: 'primary'
    },
    { 
      name: 'Classes', 
      value: '42', 
      icon: BookOpen, 
      change: '0%',
      trend: 'neutral',
      link: '/classes',
      color: 'secondary'
    },
    { 
      name: 'Fee Collection', 
      value: '₦24.5M', 
      icon: DollarSign, 
      change: '+12.5%',
      trend: 'up',
      link: '/fees',
      color: 'success'
    },
    { 
      name: 'Attendance', 
      value: '85%', 
      icon: CalendarCheck, 
      change: '-2.1%',
      trend: 'down',
      link: '/attendance',
      color: 'warning'
    },
  ];

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      activity: 'New student registered',
      detail: 'Chinedu Okonkwo has been registered in JSS 2A',
      time: '2 hours ago'
    },
    {
      id: 2,
      activity: 'Term fee payment',
      detail: 'Ngozi Adeyemi paid ₦125,000 for First Term fees',
      time: '5 hours ago'
    },
    {
      id: 3,
      activity: 'Examination results updated',
      detail: 'SSS 3 Mock WAEC results have been uploaded',
      time: '1 day ago'
    },
    {
      id: 4,
      activity: 'Staff meeting scheduled',
      detail: 'End of term staff meeting scheduled for Friday, 2:00 PM',
      time: '1 day ago'
    },
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Inter-House Sports Competition',
      date: 'Nov 15, 2024',
      location: 'School Sports Complex'
    },
    {
      id: 2,
      title: 'Parents-Teachers Association Meeting',
      date: 'Nov 25, 2024',
      location: 'School Hall'
    },
    {
      id: 3,
      title: 'End of Term Examination',
      date: 'Dec 5-12, 2024',
      location: 'All Classrooms'
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
        <p className="text-neutral-500">
          Welcome to the EduNaija School Management System
        </p>
      </div>

      {/* Current term information */}
      <div className="bg-white p-4 rounded-lg shadow-card mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">{MOCK_CURRENT_TERM.name} - {MOCK_CURRENT_TERM.academicYear}</h2>
            <p className="text-neutral-600">
              {format(MOCK_CURRENT_TERM.startDate, 'MMMM d, yyyy')} - {format(MOCK_CURRENT_TERM.endDate, 'MMMM d, yyyy')}
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Active Term
            </span>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <Link 
            to={stat.link}
            key={stat.name} 
            className="bg-white overflow-hidden shadow-card rounded-lg hover:shadow-lg transition duration-300"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-500`} />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-neutral-500 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-lg font-semibold text-neutral-900">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className={`bg-${stat.color}-50 px-5 py-2`}>
              <div className="flex items-center">
                {stat.trend === 'up' && <ArrowUpRight className="h-4 w-4 text-success-500" />}
                {stat.trend === 'down' && <ArrowDownRight className="h-4 w-4 text-error-500" />}
                {stat.trend === 'neutral' && <TrendingUp className="h-4 w-4 text-neutral-500" />}
                <span 
                  className={`text-xs font-medium ml-1 ${
                    stat.trend === 'up' 
                      ? 'text-success-500' 
                      : stat.trend === 'down' 
                        ? 'text-error-500' 
                        : 'text-neutral-500'
                  }`}
                >
                  {stat.change} from last term
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-5 rounded-lg shadow-card">
          <h3 className="text-lg font-semibold mb-4">Today's Attendance</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="w-full max-w-xs">
              <Doughnut 
                data={attendanceData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-card">
          <h3 className="text-lg font-semibold mb-4">Fee Collection (₦ millions)</h3>
          <div className="h-64">
            <Line 
              data={feeCollectionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    ticks: {
                      callback: function(value) {
                        return '₦' + (Number(value) / 1000000) + 'M';
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-card">
          <h3 className="text-lg font-semibold mb-4">Academic Performance</h3>
          <div className="h-64">
            <Line 
              data={performanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    min: 0,
                    max: 100,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Alerts and notices */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <span className="font-medium">Attention:</span> First term examination starts on December 5th. Ensure all continuous assessments are submitted by November 30th.
            </p>
          </div>
        </div>
      </div>

      {/* Recent activities and upcoming events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="px-5 py-4 bg-primary-50">
            <h3 className="text-lg font-semibold text-primary-800">Recent Activities</h3>
          </div>
          <div className="divide-y divide-neutral-200">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="p-5 hover:bg-neutral-50 transition duration-150">
                <h4 className="text-sm font-semibold text-neutral-900">{activity.activity}</h4>
                <p className="mt-1 text-sm text-neutral-600">{activity.detail}</p>
                <p className="mt-1 text-xs text-neutral-400">{activity.time}</p>
              </div>
            ))}
            <div className="p-4">
              <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                View all activities
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="px-5 py-4 bg-secondary-50">
            <h3 className="text-lg font-semibold text-secondary-800">Upcoming Events</h3>
          </div>
          <div className="divide-y divide-neutral-200">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-5 hover:bg-neutral-50 transition duration-150">
                <h4 className="text-sm font-semibold text-neutral-900">{event.title}</h4>
                <div className="mt-1 flex items-center text-sm text-neutral-600">
                  <span>📅</span>
                  <span className="ml-1">{event.date}</span>
                </div>
                <div className="mt-1 flex items-center text-sm text-neutral-600">
                  <span>📍</span>
                  <span className="ml-1">{event.location}</span>
                </div>
              </div>
            ))}
            <div className="p-4">
              <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                View all events
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;