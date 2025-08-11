import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook pour mettre à jour le titre de la page en fonction de la route actuelle
 * @param customTitle - Titre personnalisé optionnel
 */
export const usePageTitle = (customTitle?: string) => {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = () => {
      if (customTitle) {
        return `${customTitle} - Lucie Portfolio`;
      }

      switch (location.pathname) {
        case '/':
          return 'Lucie - Portfolio Graphiste';
        case '/portfolio':
          return 'Portfolio - Lucie Graphiste';
        case '/services':
          return 'Services - Lucie Graphiste';
        case '/about':
          return 'À propos - Lucie Graphiste';
        case '/contact':
          return 'Contact - Lucie Graphiste';
        default:
          return 'Lucie - Portfolio Graphiste';
      }
    };

    document.title = getPageTitle();
  }, [location.pathname, customTitle]);
};

/**
 * Hook pour mettre à jour les meta tags en fonction de la page
 * @param description - Description personnalisée pour la page
 */
export const usePageMeta = (description?: string) => {
  const location = useLocation();

  useEffect(() => {
    const getPageDescription = () => {
      if (description) {
        return description;
      }

      switch (location.pathname) {
        case '/':
          return 'Portfolio de Lucie - Graphiste créative spécialisée en design moderne et identité visuelle';
        case '/portfolio':
          return 'Découvrez mes projets de design graphique, créations visuelles et réalisations créatives';
        case '/services':
          return 'Services de design graphique : identité visuelle, branding, design web et print';
        case '/about':
          return 'En savoir plus sur mon parcours de graphiste et ma passion pour le design créatif';
        case '/contact':
          return 'Contactez-moi pour vos projets de design graphique et créations visuelles';
        default:
          return 'Portfolio de Lucie - Graphiste créative spécialisée en design moderne et identité visuelle';
      }
    };

    // Mettre à jour la meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', getPageDescription());
    }

    // Mettre à jour les Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', document.title);
    }
    
    if (ogDescription) {
      ogDescription.setAttribute('content', getPageDescription());
    }
  }, [location.pathname, description]);
};
