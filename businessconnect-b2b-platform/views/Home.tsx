
import React from 'react';
import { ArrowRight, CheckCircle, BarChart3, Globe, Shield, Users, Zap } from 'lucide-react';
import { DBService } from '../store';

export const Home: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const services = DBService.getServices();
  const cases = DBService.getCaseStudies();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                Leading Enterprise Partner
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                Transform Your <span className="text-blue-600">Enterprise</span> for the Future.
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Strategic consulting and technology solutions tailored to help SMEs and corporate giants scale with precision and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
                >
                  Request a Demo <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all"
                >
                  View Solutions
                </button>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Google_Logo.svg" alt="Client" className="h-6 grayscale hover:grayscale-0 transition-all" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="Client" className="h-6 grayscale hover:grayscale-0 transition-all" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Client" className="h-5 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070"
                alt="Business dashboard"
                className="rounded-2xl shadow-2xl border-4 border-white relative z-10"
              />
              <div className="absolute bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">ROI Increased</div>
                    <div className="text-lg font-bold text-slate-900">+124%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">What We Do</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive B2B Solutions</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We provide the tools and expertise needed to survive and thrive in today's digital landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon === 'Zap' && <Zap size={28} />}
                  {service.icon === 'TrendingUp' && <BarChart3 size={28} />}
                  {service.icon === 'Shield' && <Shield size={28} />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button onClick={() => onNavigate('services')} className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                alt="Strategy session"
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>
            <div>
              <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Why Partner With Us?</h2>
              <h3 className="text-4xl font-bold mb-8 leading-tight">Engineered for Efficiency, Built for Scale.</h3>
              <div className="space-y-8">
                {[
                  { title: 'Data-Driven Insights', desc: 'Every decision we make is backed by deep analytical research and real-time market data.', icon: <BarChart3 className="text-blue-400" /> },
                  { title: 'Security First Architecture', desc: 'Protecting your enterprise data is our top priority. We implement military-grade encryption.', icon: <Shield className="text-blue-400" /> },
                  { title: 'Global Deployment', desc: 'Scale your operations across continents with our distributed infrastructure solutions.', icon: <Globe className="text-blue-400" /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
              <h3 className="text-4xl font-bold text-slate-900">Companies Scaling with BusinessConnect</h3>
            </div>
            <button onClick={() => onNavigate('cases')} className="text-blue-600 font-bold hover:underline mb-2">View All Case Studies</button>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {cases.map((cs) => (
              <div key={cs.id} className="group cursor-pointer" onClick={() => onNavigate('cases')}>
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={cs.image}
                    alt={cs.client}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                    <div>
                      <div className="text-blue-400 font-bold text-sm mb-2">{cs.client}</div>
                      <h4 className="text-2xl font-bold text-white">{cs.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cs.results.map((res, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                      <CheckCircle size={12} className="text-green-500" /> {res}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 500+ enterprises who have already streamlined their operations with our platform.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl"
          >
            Schedule a Demo Now
          </button>
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-blue-100/80">
            <span className="flex items-center gap-2"><CheckCircle size={18} /> No upfront setup fee</span>
            <span className="flex items-center gap-2"><CheckCircle size={18} /> 24/7 dedicated support</span>
          </div>
        </div>
      </section>
    </div>
  );
};
