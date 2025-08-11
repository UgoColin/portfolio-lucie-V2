import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { HiArrowRight, HiEye } from 'react-icons/hi2';
import { portfolioProjects } from '@/data/portfolio';

/**
 * Hook pour animer l'incrémentation des chiffres avec délai d'attente
 */
const useCountUp = (
  end: number,
  isVisible: boolean,
  delay: number = 0,
  duration: number = 2000,
) => {
  const [count, setCount] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Attendre le délai avant de commencer l'animation
    const delayTimeout = setTimeout(() => {
      setShouldStart(true);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
    };
  }, [isVisible, delay]);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Fonction d'easing pour un effet plus fluide
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOutCubic));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, shouldStart, duration]);

  return count;
};

/**
 * Section portfolio avec grille de projets et effets hover avancés
 */
const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref } = useIntersectionObserver({
    onIntersect: () => setIsVisible(true),
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:py-32">
      {/* Background avec pattern subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Pattern décoratif de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-primary-400/10 absolute top-20 left-1/4 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-secondary-400/10 absolute right-1/4 bottom-20 h-80 w-80 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header de section avec style moderne */}
        <div
          className={`mb-20 text-center opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: '0.1s' }}>
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="from-primary-400 to-secondary-400 h-1 w-12 rounded-full bg-gradient-to-r" />
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">
              Portfolio
            </span>
            <div className="from-secondary-400 to-primary-400 h-1 w-12 rounded-full bg-gradient-to-r" />
          </div>

          <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] to-[#E1877F] bg-clip-text text-transparent">
              Mes créations
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-neutral-400">
            Découvrez une sélection de projets qui illustrent ma passion pour le design et ma
            capacité à transformer des idées en réalisations visuelles impactantes.
          </p>
        </div>

        {/* Grille de projets avec disposition créative */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioProjects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              className={`relative flex flex-col overflow-hidden rounded-2xl bg-neutral-900 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{
                animationDelay: `${0.3 + index * 0.15}s`,
              }}>
              {/* Image de fond */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />

                {/* Overlay sombre permanent */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />
              </div>

              {/* Zone de contenu */}
              <div className="relative flex h-full flex-col bg-neutral-900">
                {/* Contenu de la carte - partie haute */}
                <div className="flex-grow p-4">
                  <h3 className="mb-2 text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-primary-400 mb-3 text-sm font-medium">{project.category}</p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="line-clamp-3 text-sm leading-relaxed text-neutral-300">
                    {project.description}
                  </p>
                </div>

                {/* Partie basse - toujours en bas */}
                <div className="mt-auto p-4 pt-0">
                  {/* Métadonnées */}
                  <div className="mb-4 flex items-center justify-between text-xs text-neutral-400">
                    <span>{project.year}</span>
                    <span>{project.client}</span>
                  </div>

                  {/* Bouton d'action */}
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                    <HiEye className="h-4 w-4" />
                    <span className="font-medium">Voir le projet</span>
                    <HiArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA avec design moderne */}
        <div
          className={`text-center opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: '0.9s' }}>
          {/* Statistiques rapides avec animation de compteur */}
          <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { number: 50, suffix: '+', label: 'Projets réalisés' },
              { number: 25, suffix: '+', label: 'Clients satisfaits' },
              { number: 4, suffix: '', label: "Années d'expérience" },
            ].map((stat, index) => {
              // Calculer le délai pour attendre la fin de l'animation d'apparition
              const appearanceDelay = (1.1 + index * 0.1) * 1000; // Convertir en ms

              // Hook pour animer chaque chiffre individuellement avec délai
              const animatedCount = useCountUp(
                stat.number,
                isVisible,
                appearanceDelay,
                1000 + index * 200,
              );

              return (
                <div
                  key={index}
                  className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${1.1 + index * 0.1}s` }}>
                  <div className="mb-2 text-3xl font-bold sm:text-4xl">
                    <span className="bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] to-[#E1877F] bg-clip-text text-transparent">
                      {animatedCount}
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-neutral-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Bouton principal avec effet avancé */}
          <div
            className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '1.4s' }}>
            <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] to-[#E1877F] px-8 py-4 text-lg font-bold text-neutral-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              {/* Effet de fond animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5D5B7] via-[#E89179] to-[#ED9A8C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Contenu du bouton */}
              <span className="relative z-10 flex items-center gap-3">
                <HiEye className="h-5 w-5" />
                Voir tout le portfolio
                <HiArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </span>

              {/* Particules flottantes */}
              <div className="absolute top-1/2 left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/20 blur-xl transition-all duration-700 group-hover:h-full group-hover:w-full" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
