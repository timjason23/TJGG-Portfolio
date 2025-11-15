import React from 'react';

export interface NavLink {
    href: string;
    label: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    email: string;
    social: {
        github: string;
        linkedin: string;
        facebook: string;
    };
    about: string[];
    imageUrl: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  location: string;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode; 
}

export interface EducationInfo {
    institution: string;
    degree: string;
    period: string;
    details: string;
}

export interface Citation {
    title: string;
    issuer: string;
    date: string;
    description?: string;
}

export interface GalleryImage {
  src: string;
  caption: string;
  category: string;
}

// To resolve TypeScript declaration conflicts, the AIStudio interface is now declared within the global scope, and the 'aistudio' property on the Window interface is marked as optional to match its runtime usage.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }
}