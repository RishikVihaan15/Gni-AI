
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Case Studies', path: 'cases' },
    { name: 'Blog', path: 'blog' },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">B</div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">BusinessConnect</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPath === link.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              Get Started <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleNav('admin')}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              title="Admin Panel"
            >
              <span className="text-xs uppercase tracking-widest font-bold border border-slate-200 px-2 py-1 rounded">Admin</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-center mt-4 bg-blue-600 text-white px-3 py-2 rounded-md font-semibold"
            >
              Get Started
            </button>
            <button
              onClick={() => handleNav('admin')}
              className="w-full text-center mt-2 border border-slate-200 text-slate-600 px-3 py-2 rounded-md font-medium"
            >
              Admin Dashboard
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
