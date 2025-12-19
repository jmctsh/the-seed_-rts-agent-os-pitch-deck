
// Import React to provide the React namespace for type definitions
import React from 'react';

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  section: string;
  speakerNotes: string[];
  content: React.ReactNode;
  bgImage?: string;
}

export enum SectionType {
  MARKET = '痛点与市场',
  SOLUTION = '解决方案',
  BUSINESS = '落地与商业化'
}