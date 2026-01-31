export interface InfoCardData {
  type: 'note' | 'tip' | 'important' | 'warning';
  title?: string;
  content: string;
}

export interface Subsection {
  heading: string;
  description?: string;
  points?: string[];
  code?: string;
  language?: string;
  info?: InfoCardData;
}

export interface ContentItem {
  heading: string;
  description?: string;
  points?: string[];
  code?: string;
  language?: string;
  info?: InfoCardData;
  subsections?: Subsection[];
}

export interface Section {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  content: ContentItem[];
}
