import { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { HiMail } from 'react-icons/hi';
import ppImage from '@/assets/pp.webp';
import { skills } from '@/data/skills';

/**
 * Section hero de la page d'accueil avec photo, texte avec gradient, toggle dark/light mode et bouton contact
 */
const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée au montage du composant
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Ici on pourrait implémenter la logique de changement de thème global
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-48 pb-12 sm:px-6">
      {/* Background gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Contenu principal */}
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Colonne de gauche - Texte */}
        <div
          className={`flex flex-col justify-center space-y-6 opacity-0 lg:space-y-8 lg:pr-8 ${
            isVisible ? 'animate-slide-in-left' : ''
          }`}>
          {/* Titre principal avec gradient */}
          <div className="space-y-3 lg:space-y-4">
            <h2
              className={`bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] via-[#E5E6D8] via-[#E1877F] to-[#C6D290] bg-clip-text text-xl leading-tight font-bold text-transparent opacity-0 sm:text-2xl lg:text-3xl xl:text-4xl ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: isVisible ? '0.2s' : undefined }}>
              Vous recherchez une
            </h2>
            <h1
              className={`bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] via-[#E5E6D8] via-[#E1877F] to-[#C6D290] bg-clip-text text-4xl leading-tight font-bold text-transparent opacity-0 sm:text-5xl lg:text-6xl xl:text-7xl ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: isVisible ? '0.7s' : undefined }}>
              Directrice Artistique
            </h1>
            {/* Slogan secondaire avec gradient */}
            <h2
              className={`bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] via-[#E5E6D8] via-[#E1877F] to-[#C6D290] bg-clip-text text-xl leading-tight font-bold text-transparent opacity-0 sm:text-2xl lg:text-3xl xl:text-4xl ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: isVisible ? '1.2s' : undefined }}>
              À la rescousse de votre com'
            </h2>
          </div>

          {/* Compétences/Tags */}
          <div className="flex flex-wrap gap-3">
            {skills.slice(0, 4).map((skill, index) => (
              <span
                key={skill.id}
                className={`border-primary-400/30 bg-primary-400/10 text-primary-200 hover:border-primary-400/60 hover:bg-primary-400/25 hover:shadow-primary-400/20 rounded-full border px-4 py-2 text-sm opacity-0 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-lg ${
                  isVisible ? 'animate-bounce-in' : ''
                }`}
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                {skill.name}
              </span>
            ))}
          </div>

          {/* Bouton Contact */}
          <div
            className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '1.4s' }}>
            <button className="group shadow-primary-400/20 hover:shadow-primary-400/30 relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] to-[#E1877F] px-4 py-3 text-lg font-semibold text-neutral-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="relative z-10 flex items-center gap-3">
                <HiMail className="h-5 w-5" />
                Me contacter
              </span>

              {/* Effet de survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5D5B7] via-[#E89179] to-[#ED9A8C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>

        {/* Colonne de droite - Photo et Dark Mode Toggle */}
        <div
          className={`relative mt-8 flex flex-col items-center justify-center opacity-0 lg:mt-0 ${
            isVisible ? 'animate-slide-in-right' : ''
          }`}
          style={{ animationDelay: '0.2s' }}>
          {/* Container de la photo sans bordure */}
          <div className="relative">
            {/* Cercle de fond avec gradient léger */}
            <div className="from-primary-400/10 via-secondary-400/10 to-primary-400/10 absolute -inset-4 rounded-full bg-gradient-to-r blur-xl" />

            {/* Photo sans bordure - taille réduite sur mobile */}
            <img
              src={ppImage}
              alt="Portrait de la designer"
              className="relative h-72 w-72 object-cover transition-transform duration-500 hover:scale-105 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem]"
            />

            {/* Dark Mode Toggle repositionné en bas à droite */}
            <div
              className={`absolute -right-2 -bottom-2 opacity-0 sm:-right-4 sm:-bottom-4 ${
                isVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleDarkMode}
                  className="group relative inline-flex h-10 w-20 items-center justify-center rounded-full bg-neutral-800/90 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-700/90">
                  {/* Slider background */}
                  <div className="absolute inset-1 rounded-full bg-neutral-900/50" />

                  {/* Slider thumb - style similaire au header avec texte noir sur fond blanc */}
                  <div
                    className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all duration-300 ${
                      isDarkMode ? 'left-1' : 'left-[calc(100%-2.25rem)]'
                    }`}>
                    {isDarkMode ? (
                      <HiMoon className="h-3 w-3 text-neutral-900" />
                    ) : (
                      <HiSun className="h-3 w-3 text-neutral-900" />
                    )}
                  </div>

                  {/* Icons de fond */}
                  <div className="relative z-0 flex w-full items-center justify-between px-2">
                    <HiMoon
                      className={`h-3 w-3 transition-colors duration-300 ${!isDarkMode ? 'text-neutral-400' : 'text-transparent'}`}
                    />
                    <HiSun
                      className={`h-3 w-3 transition-colors duration-300 ${isDarkMode ? 'text-neutral-400' : 'text-transparent'}`}
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Éléments décoratifs flottants */}
            <div className="bg-primary-400 absolute -top-4 -left-4 h-6 w-6 animate-pulse rounded-full opacity-60" />
            <div
              className="bg-secondary-400 absolute -bottom-6 -left-6 h-4 w-4 animate-pulse rounded-full opacity-40"
              style={{ animationDelay: '0.5s' }}
            />

            {/* Étoiles brillantes en haut à gauche */}
            <div className="absolute top-4 left-16">
              {/* Étoile 1 */}
              <div
                className="animate-twinkle absolute"
                style={{ animationDelay: '0s' }}>
                <svg
                  className="h-3 w-3 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Étoile 2 */}
              <div
                className="animate-twinkle absolute top-2 left-6"
                style={{ animationDelay: '0.5s' }}>
                <svg
                  className="h-2 w-2 text-yellow-200"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Étoile 3 */}
              <div
                className="animate-twinkle absolute top-6 left-2"
                style={{ animationDelay: '1s' }}>
                <svg
                  className="h-2.5 w-2.5 text-yellow-100"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
