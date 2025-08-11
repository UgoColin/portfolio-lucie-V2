import type { PageProps } from './types';
import { usePageTitle, usePageMeta } from '@/hooks/usePageTitle';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';

/**
 * Page d'accueil du portfolio
 */
const HomePage = ({ className = '' }: PageProps) => {
  // Mettre à jour le titre et les meta tags de la page d'accueil
  usePageTitle();
  usePageMeta();

  return (
    <main className={`relative z-10 ${className}`}>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />

      {/* Contenu additionnel à venir */}
    </main>
  );
};

export default HomePage;
