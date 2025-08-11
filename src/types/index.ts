/**
 * Interface pour les projets du portfolio
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  thumbnail: string;
  date: Date;
  featured: boolean;
  link?: string;
  repository?: string;
}

/**
 * Interface pour les compétences
 */
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
}

/**
 * Types d'énumération pour les catégories de compétences
 */
export type SkillCategory = 'design' | 'development' | 'tools' | 'soft-skills';

/**
 * Types d'énumération pour les niveaux de compétences
 */
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

/**
 * Interface pour les informations de contact
 */
export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  social: SocialLink[];
}

/**
 * Interface pour les liens sociaux
 */
export interface SocialLink {
  platform: string;
  url: string;
  username: string;
}

/**
 * Interface pour les informations personnelles
 */
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  resume?: string;
}
