// import React, { useState } from 'react';
import { Home, Book, BookmarkCheck, Phone, ChefHat, User, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';
// import { Button } from './Button';

export function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Book, label: 'My Recipes' },
    { icon: BookmarkCheck, label: 'Saved Recipes' },
    { icon: Phone, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">DevCOOKS</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <User className="h-6 w-6" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                {[
                  { icon: User, label: 'Account' },
                  { icon: Settings, label: 'Settings' },
                  { icon: LogOut, label: 'Logout' },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}