/**
 * Types communs pour les pages du portfolio
 */

// Interface pour les props communes des pages
export interface PageProps {
  className?: string;
}

// Interface pour les métadonnées des pages
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

// Type pour les routes de navigation
export type RouteType = 'home' | 'portfolio' | 'about' | 'contact' | 'services';

// Interface pour la définition des routes
export interface Route {
  path: string;
  component: React.ComponentType<PageProps>;
  title: string;
  description: string;
  showInNav?: boolean;
}
