/**
 * Types pour les composants du Header
 */

export interface NavigationItem {
  id: string;
  label: string;
}

export interface HeaderProps {
  // Props pour le header principal si nécessaire
}

export interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  navigationItems: NavigationItem[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  languages: string[];
  currentLang: string;
  setCurrentLang: (lang: string) => void;
}

export interface LanguageSelectorProps {
  languages: string[];
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  isLoaded: boolean;
}
