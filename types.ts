import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies?: string[];
  demoUrl?: string;
  longDescription?: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}