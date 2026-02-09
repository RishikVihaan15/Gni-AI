
import { Service, CaseStudy, BlogPost, SiteConfig } from './types';

export const INITIAL_SERVICES: Service[] = [
  { id: '1', title: 'Operational Efficiency', description: 'Streamlining your business workflows for maximum ROI.', icon: 'Zap', slug: 'operational-efficiency' },
  { id: '2', title: 'Growth Consulting', description: 'Strategic planning to scale your market presence and revenue.', icon: 'TrendingUp', slug: 'growth-consulting' },
  { id: '3', title: 'Tech Infrastructure', description: 'Robust cloud and IT solutions designed for enterprise scale.', icon: 'Shield', slug: 'tech-infrastructure' },
];

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'FinTech Global',
    title: 'Reducing Operational Costs by 40%',
    summary: 'How we transformed a legacy banking system into a modern cloud infrastructure.',
    image: 'https://picsum.photos/800/600?random=1',
    results: ['40% Reduction in overhead', '2x faster transaction speed', 'Zero downtime transition']
  },
  {
    id: '2',
    client: 'HealthSync Systems',
    title: 'Scaling to 1M+ Monthly Active Users',
    summary: 'Building a scalable backend for one of the largest telehealth providers.',
    image: 'https://picsum.photos/800/600?random=2',
    results: ['99.99% Uptime', 'Enhanced HIPAA compliance', 'Seamless UX integration']
  }
];

export const INITIAL_BLOG: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of B2B SaaS in 2025',
    excerpt: 'Exploring how AI and automation are reshaping the enterprise software landscape.',
    author: 'Sarah Chen',
    date: 'Oct 12, 2024',
    category: 'Industry Trends',
    image: 'https://picsum.photos/800/500?random=3',
    content: 'Long form content here...'
  },
  {
    id: '2',
    title: 'Mastering the Sales Funnel',
    excerpt: 'Key strategies for converting high-value B2B leads into loyal clients.',
    author: 'James Miller',
    date: 'Nov 5, 2024',
    category: 'Sales Strategy',
    image: 'https://picsum.photos/800/500?random=4',
    content: 'Long form content here...'
  }
];

export const DEFAULT_CONFIG: SiteConfig = {
  primaryColor: '#1e3a8a',
  companyName: 'BusinessConnect',
  contactEmail: 'hello@businessconnect.com',
  socialLinks: {
    linkedin: 'linkedin.com/company/businessconnect',
    twitter: 'twitter.com/businessconnect'
  }
};
