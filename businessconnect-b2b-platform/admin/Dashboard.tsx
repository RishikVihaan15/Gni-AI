
import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, FileText, Settings, LogOut, ChevronRight, CheckCircle, Clock, Trash2, Plus } from 'lucide-react';
import { DBService } from '../store';
import { Lead, BlogPost } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'content' | 'settings'>('overview');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    setLeads(DBService.getLeads());
    setBlogs(DBService.getBlogs());
  }, []);

  const handleStatusUpdate = (id: string, status: Lead['status']) => {
    DBService.updateLeadStatus(id, status);
    setLeads(DBService.getLeads());
  };

  const data = [
    { name: 'Mon', leads: 4 },
    { name: 'Tue', leads: 7 },
    { name: 'Wed', leads: 5 },
    { name: 'Thu', leads: 12 },
    { name: 'Fri', leads: 9 },
    { name: 'Sat', leads: 3 },
    { name: 'Sun', leads: 2 },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 pt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:block fixed h-[calc(100vh-64px)] overflow-y-auto">
        <div className="p-6">
          <nav className="space-y-2">
            {[
              { id: 'overview', name: 'Overview', icon: <LayoutDashboard size={20} /> },
              { id: 'leads', name: 'Leads', icon: <Users size={20} /> },
              { id: 'content', name: 'Content CMS', icon: <FileText size={20} /> },
              { id: 'settings', name: 'Site Settings', icon: <Settings size={20} /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === item.id ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 w-full p-6 border-t border-slate-100">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 capitalize">{activeTab} Dashboard</h1>
          <p className="text-slate-500">Welcome back, Admin. Here is what's happening with BusinessConnect.</p>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Total Leads', value: leads.length, color: 'blue' },
                { label: 'New This Week', value: leads.filter(l => l.status === 'new').length, color: 'green' },
                { label: 'Qualified Leads', value: leads.filter(l => l.status === 'qualified').length, color: 'indigo' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <div className="text-slate-500 text-sm font-medium mb-1">{stat.label}</div>
                  <div className={`text-3xl font-bold text-slate-900`}>{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold mb-6">Lead Generation Activity</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                    <Bar dataKey="leads" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Contact</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Company</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-900">{lead.name}</div>
                        <div className="text-xs text-slate-500">{lead.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{lead.company}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                          lead.status === 'new' ? 'bg-blue-100 text-blue-700' :
                          lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-700' :
                          lead.status === 'qualified' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{new Date(lead.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-right">
                        <select
                          className="text-xs bg-white border border-slate-200 rounded px-2 py-1 outline-none"
                          onChange={(e) => handleStatusUpdate(lead.id, e.target.value as any)}
                          value={lead.status}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                  {leads.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-slate-400">No leads captured yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Manage Blog Posts</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                <Plus size={18} /> New Post
              </button>
            </div>
            <div className="grid gap-4">
              {blogs.map((post) => (
                <div key={post.id} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={post.image} className="w-16 h-12 object-cover rounded shadow-sm" alt="" />
                    <div>
                      <h4 className="font-bold text-slate-900">{post.title}</h4>
                      <p className="text-xs text-slate-500">{post.date} • {post.category}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><ChevronRight size={20} /></button>
                    <button
                      onClick={() => {
                        DBService.deleteBlog(post.id);
                        setBlogs(DBService.getBlogs());
                      }}
                      className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <h3 className="text-xl font-bold mb-6">General Configuration</h3>
             <div className="space-y-6">
               <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                 <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg" defaultValue="BusinessConnect" />
               </div>
               <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-2">Support Email</label>
                 <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg" defaultValue="hello@businessconnect.com" />
               </div>
               <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-2">Brand Primary Color</label>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-lg bg-blue-600"></div>
                   <input type="text" className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg" defaultValue="#1e3a8a" />
                 </div>
               </div>
               <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold">Save Changes</button>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};
