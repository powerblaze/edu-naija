import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, Search, Menu, ChevronDown } from 'lucide-react';
import { MOCK_CURRENT_TERM } from '../../constants';
import { format } from 'date-fns';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const { user, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    if (notificationsOpen) setNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (userMenuOpen) setUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        className="md:hidden px-4 border-r border-neutral-200 text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" />
      </button>
      
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex items-center">
          <div className="ml-4 text-sm text-neutral-600">
            <span className="font-medium">{MOCK_CURRENT_TERM.name}</span>
            <span className="mx-2">|</span>
            <span>{MOCK_CURRENT_TERM.academicYear}</span>
            <span className="mx-2">|</span>
            <span>{format(MOCK_CURRENT_TERM.startDate, 'MMM d')} - {format(MOCK_CURRENT_TERM.endDate, 'MMM d, yyyy')}</span>
          </div>
          
          <div className="max-w-lg w-full lg:max-w-xs ml-6">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        
        <div className="ml-4 flex items-center md:ml-6">
          {/* Notification button */}
          <div className="relative">
            <button
              type="button"
              className="bg-white p-1 rounded-full text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              onClick={toggleNotifications}
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            {/* Notification badge */}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-error-500 ring-2 ring-white"></span>
            
            {/* Notifications dropdown */}
            {notificationsOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-4 py-2 border-b border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-900">Notifications</h3>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  <a href="#" className="block px-4 py-3 hover:bg-neutral-50 transition ease-in-out duration-150">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-100 rounded-full p-1">
                        <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3 w-0 flex-1">
                        <p className="text-sm font-medium text-neutral-900">Term reports ready</p>
                        <p className="text-sm text-neutral-500">First term reports are now ready for review.</p>
                        <p className="mt-1 text-xs text-neutral-400">2 hours ago</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="block px-4 py-3 hover:bg-neutral-50 transition ease-in-out duration-150">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-warning-100 rounded-full p-1">
                        <svg className="h-5 w-5 text-warning-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3 w-0 flex-1">
                        <p className="text-sm font-medium text-neutral-900">Fee payment reminder</p>
                        <p className="text-sm text-neutral-500">5 students have outstanding fees for this term.</p>
                        <p className="mt-1 text-xs text-neutral-400">1 day ago</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="border-t border-neutral-200 py-2 px-4">
                  <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-700">View all notifications</a>
                </div>
              </div>
            )}
          </div>

          {/* Profile dropdown */}
          <div className="ml-3 relative">
            <div>
              <button
                type="button"
                className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                id="user-menu"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={toggleUserMenu}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'}
                  alt=""
                />
                <span className="ml-2 hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium text-neutral-900">{user?.fullName || 'User Name'}</span>
                  <span className="text-xs text-neutral-500">{user?.role || 'Role'}</span>
                </span>
                <ChevronDown className="ml-1 h-4 w-4 text-neutral-400" />
              </button>
            </div>

            {userMenuOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  role="menuitem"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  role="menuitem"
                >
                  Settings
                </a>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  role="menuitem"
                  onClick={logout}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;