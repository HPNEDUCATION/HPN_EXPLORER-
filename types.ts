import React from 'react';

export type CategoryType = 
  | 'history' 
  | 'education' 
  | 'culture' 
  | 'religious' 
  | 'heritage' 
  | 'farm' 
  | 'food' 
  | 'accommodation' 
  | 'industry'
  | 'nature'
  | 'shopping';

export interface PlaceItem {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  location?: string;
  contact?: string; // For hotels/institutes
  tags?: string[];
  type?: string; // e.g., "University", "Gurudwara", "Textile Mill"
}

export interface DistrictData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  categories: {
    [key in CategoryType]?: PlaceItem[];
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
