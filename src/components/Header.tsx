import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Home, Settings } from 'lucide-react';

function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ServiceBook</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className={`flex items-center space-x-1 ${isActive('/')}`}>
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/services" className={`flex items-center space-x-1 ${isActive('/services')}`}>
              <Calendar className="w-5 h-5" />
              <span>Services</span>
            </Link>
            <Link to="/admin" className={`flex items-center space-x-1 ${isActive('/admin')}`}>
              <Settings className="w-5 h-5" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header