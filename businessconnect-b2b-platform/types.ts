
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  summary: string;
  image: string;
  results: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  date: string;
}

export interface SiteConfig {
  primaryColor: string;
  companyName: string;
  contactEmail: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
}
