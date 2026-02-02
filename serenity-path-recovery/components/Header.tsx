
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight leading-none">SERENITY PATH</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Recovery Centers</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:1-800-555-0199"
              className="ml-4 px-6 py-2.5 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md active:scale-95"
            >
              (800) 555-0199
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-slate-600 p-2"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:1-800-555-0199"
            className="block w-full text-center py-4 bg-emerald-600 text-white rounded-lg font-bold shadow-lg"
          >
            Call 24/7: (800) 555-0199
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
