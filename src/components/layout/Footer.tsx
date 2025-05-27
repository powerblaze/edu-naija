import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} EduNaija School Management System
          </div>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a href="#" className="text-neutral-500 hover:text-primary-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-primary-600 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-500 hover:text-primary-600 text-sm">
              Help & Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;