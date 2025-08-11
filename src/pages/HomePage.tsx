import type { PageProps } from './types';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';

/**
 * Page d'accueil du portfolio
 */
const HomePage = ({ className = '' }: PageProps) => {
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
