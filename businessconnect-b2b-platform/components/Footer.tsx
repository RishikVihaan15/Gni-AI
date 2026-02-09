
import React from 'react';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold">B</div>
              <span className="text-xl font-bold text-white tracking-tight">BusinessConnect</span>
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Providing enterprise-grade solutions for growing businesses. We empower teams with strategic consulting and robust technology infrastructures.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">Digital Transformation</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">Growth Strategy</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">Enterprise Cloud</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">Business Intelligence</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-blue-400 transition-colors">Blog & Insights</button></li>
              <li><button onClick={() => onNavigate('cases')} className="hover:text-blue-400 transition-colors">Case Studies</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-blue-400 transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Mail size={16} /> hello@businessconnect.com</li>
              <li className="flex items-center gap-3"><Phone size={16} /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> 100 Innovation Way, San Francisco</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} BusinessConnect. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300">Terms of Service</button>
            <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
