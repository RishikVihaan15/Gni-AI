
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { Contact } from './views/Contact';
import { AdminDashboard } from './admin/Dashboard';
import { DBService } from './store';
import { ShieldAlert, LogIn, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Simple scroll to top on nav
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass === 'admin123') { // Simple mock authentication
      setIsAdmin(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const renderContent = () => {
    if (currentPath === 'admin') {
      if (!isAdmin) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl border border-slate-200">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <ShieldAlert size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Admin Login</h2>
                <p className="text-slate-500 text-center mt-2">Access the BusinessConnect management suite.</p>
              </div>
              <form onSubmit={handleAdminLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                  <input
                    type="password"
                    autoFocus
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all ${loginError ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-200 focus:ring-2 focus:ring-blue-100'}`}
                    placeholder="Enter password (hint: admin123)"
                    value={adminPass}
                    onChange={(e) => setAdminPass(e.target.value)}
                  />
                  {loginError && <p className="text-red-500 text-xs mt-2 font-medium">Invalid credentials. Please try again.</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
                >
                  Sign In <LogIn size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPath('home')}
                  className="w-full text-slate-500 font-medium text-sm hover:underline"
                >
                  Return to Site
                </button>
              </form>
            </div>
          </div>
        );
      }
      return <AdminDashboard onLogout={() => setIsAdmin(false)} />;
    }

    switch (currentPath) {
      case 'home': return <Home onNavigate={setCurrentPath} />;
      case 'contact': return <Contact />;
      case 'about':
      case 'services':
      case 'cases':
      case 'blog':
      case 'privacy':
        return (
          <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 capitalize">{currentPath.replace('-', ' ')} Page</h1>
              <p className="text-xl text-slate-600 mb-12">This content is dynamically managed in the Admin Dashboard. Use the 'Admin' link in the navbar (password: admin123) to modify site content and view leads.</p>
              <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
                <p className="text-slate-400 font-medium italic mb-6">CMS Content Placeholder for {currentPath}...</p>
                <button
                  onClick={() => setCurrentPath('contact')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
                >
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        );
      default: return <Home onNavigate={setCurrentPath} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={setCurrentPath} currentPath={currentPath} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      {currentPath !== 'admin' && <Footer onNavigate={setCurrentPath} />}
    </div>
  );
};

export default App;
