
import { Lead, Service, BlogPost, CaseStudy, SiteConfig } from './types';
import { INITIAL_SERVICES, INITIAL_CASE_STUDIES, INITIAL_BLOG, DEFAULT_CONFIG } from './constants';

const STORAGE_KEY = 'business_connect_db';

interface DB {
  leads: Lead[];
  services: Service[];
  blogs: BlogPost[];
  cases: CaseStudy[];
  config: SiteConfig;
}

const getDB = (): DB => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    const initialDB: DB = {
      leads: [],
      services: INITIAL_SERVICES,
      blogs: INITIAL_BLOG,
      cases: INITIAL_CASE_STUDIES,
      config: DEFAULT_CONFIG
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialDB));
    return initialDB;
  }
  return JSON.parse(data);
};

const saveDB = (db: DB) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
};

export const DBService = {
  getLeads: () => getDB().leads,
  addLead: (lead: Omit<Lead, 'id' | 'date' | 'status'>) => {
    const db = getDB();
    const newLead: Lead = {
      ...lead,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      status: 'new'
    };
    db.leads.unshift(newLead);
    saveDB(db);
    return newLead;
  },
  updateLeadStatus: (id: string, status: Lead['status']) => {
    const db = getDB();
    db.leads = db.leads.map(l => l.id === id ? { ...l, status } : l);
    saveDB(db);
  },
  getBlogs: () => getDB().blogs,
  addBlog: (post: BlogPost) => {
    const db = getDB();
    db.blogs.unshift(post);
    saveDB(db);
  },
  deleteBlog: (id: string) => {
    const db = getDB();
    db.blogs = db.blogs.filter(b => b.id !== id);
    saveDB(db);
  },
  getServices: () => getDB().services,
  getCaseStudies: () => getDB().cases,
  getConfig: () => getDB().config,
  updateConfig: (config: SiteConfig) => {
    const db = getDB();
    db.config = config;
    saveDB(db);
  }
};
