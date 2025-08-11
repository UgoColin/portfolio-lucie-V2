/**
 * Types pour les composants du Footer
 */

export interface FooterLinkItem {
  id: string;
  label: string;
  href?: string;
}

export interface FooterSectionProps {
  title: string;
  links: FooterLinkItem[];
  isVisible: boolean;
  animationDelay?: string;
}

export interface SocialLinkItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface FooterLogoProps {
  isVisible: boolean;
}

export interface FooterBottomProps {
  isVisible: boolean;
}
