export interface Character {
  id: string;
  name: string;
  russianName?: string;
  role: string;
  species: string;
  age: number | string;
  gender: 'Male' | 'Female';
  mbti: string;
  height: string;
  physique: string;
  description: string;
  quote?: string;
  tags: string[];
}

export interface WorldEntity {
  id: string;
  name: string;
  originalName?: string;
  description: string;
  type: 'Location' | 'Organization' | 'Group';
  imageUrl: string;
}

export interface StoryPhase {
  phase: string;
  title: string;
  description: string;
  color: string;
}