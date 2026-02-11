
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl">⭐</span>
            <h1 className="text-2xl font-bold brand-font tracking-wide">Grammar Stars</h1>
          </Link>
          {!isHome && (
            <Link 
              to="/" 
              className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-sm"
            >
              Back to Weeks
            </Link>
          )}
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-blue-100 p-6 text-center text-blue-800">
        <p className="font-semibold">UKS2 Grammar Mastery • 10 Minute Daily Starters</p>
      </footer>
    </div>
  );
};
