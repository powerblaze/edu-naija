import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  DollarSign, 
  FileText, 
  CalendarCheck, 
  Clock, 
  MessageSquare, 
  Settings, 
  Home 
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  mobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ mobile }) => {
  const { user } = useAuth();
  
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Students', icon: Users, href: '/students' },
    { name: 'Teachers', icon: GraduationCap, href: '/teachers' },
    { name: 'Classes', icon: BookOpen, href: '/classes' },
    { name: 'Fees', icon: DollarSign, href: '/fees' },
    { name: 'Results', icon: FileText, href: '/results' },
    { name: 'Attendance', icon: CalendarCheck, href: '/attendance' },
    { name: 'Timetable', icon: Clock, href: '/timetable' },
    { name: 'Communication', icon: MessageSquare, href: '/communication' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <div className="flex flex-col h-full bg-primary-800">
      <div className="flex items-center justify-center h-16 px-4 bg-primary-900">
        <div className="flex items-center">
          <Home className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-bold text-white">EduNaija</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? 'bg-primary-700 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  : 'text-primary-100 hover:bg-primary-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              }
            >
              <item.icon className="mr-3 h-5 w-5 text-primary-200" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-primary-700">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={user?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{user?.fullName || 'User Name'}</p>
              <p className="text-xs font-medium text-primary-200">{user?.role || 'Role'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;