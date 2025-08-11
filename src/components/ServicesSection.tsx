import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import {
  HiSparkles,
  HiStar,
  HiNewspaper,
  HiEye,
  HiArrowRight,
  HiHeart,
  HiDevicePhoneMobile,
  HiCube,
  HiPlay,
  HiPencil,
  HiCamera,
  HiBookOpen,
} from 'react-icons/hi2';
import { skills } from '@/data/skills';

/**
 * Section services avec cartes visuelles animées
 */
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const { ref } = useIntersectionObserver({
    onIntersect: () => setIsVisible(true),
    threshold: 0.1,
  });

  // Filtrer uniquement les services
  const services = skills.filter((skill) => skill.isService);

  // Mapping des icônes
  const iconMap = {
    HiSparkles,
    HiStar,
    HiNewspaper,
    HiEye,
    HiHeart,
    HiDevicePhoneMobile,
    HiCube,
    HiPlay,
    HiPencil,
    HiCamera,
    HiBookOpen,
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:py-32">
      {/* Background avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900" />

      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-primary-400/10 absolute top-32 left-1/3 h-72 w-72 rounded-full blur-3xl" />
        <div className="bg-secondary-400/10 absolute right-1/3 bottom-32 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header de section */}
        <div
          className={`mb-20 text-center opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: '0.1s' }}>
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="from-primary-400 to-secondary-400 h-1 w-12 rounded-full bg-gradient-to-r" />
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">
              Services
            </span>
            <div className="from-secondary-400 to-primary-400 h-1 w-12 rounded-full bg-gradient-to-r" />
          </div>

          <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] to-[#E1877F] bg-clip-text text-transparent">
              Mes expertises
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-neutral-400">
            Des solutions créatives sur mesure pour donner vie à votre vision et propulser votre
            marque vers de nouveaux horizons.
          </p>
        </div>

        {/* Grille de services */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const IconComponent = service.icon
              ? iconMap[service.icon as keyof typeof iconMap]
              : HiSparkles;

            return (
              <div
                key={service.id}
                className={`group relative opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}>
                {/* Carte principale */}
                <div className="hover:border-primary-400/30 hover:shadow-primary-400/10 relative h-96 overflow-hidden rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl">
                  {/* Background pattern */}
                  <div className="from-primary-400/5 to-secondary-400/5 absolute inset-0 bg-gradient-to-br" />

                  {/* Contenu de la carte */}
                  <div className="relative flex h-full flex-col p-8">
                    {/* Icône avec effet animé */}
                    <div className="mb-6">
                      <div
                        className={`from-primary-400 to-secondary-400 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-500 ${
                          hoveredService === service.id ? 'scale-110 rotate-6' : ''
                        }`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Titre */}
                    <h3 className="group-hover:text-primary-400 mb-4 text-xl font-bold text-white transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="flex-grow text-sm leading-relaxed text-neutral-400">
                      {service.description}
                    </p>

                    {/* Badge niveau */}
                    <div className="mt-6">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${
                          service.level === 'expert'
                            ? 'border border-green-400/30 bg-green-400/20 text-green-400'
                            : service.level === 'advanced'
                              ? 'border border-blue-400/30 bg-blue-400/20 text-blue-400'
                              : service.level === 'intermediate'
                                ? 'border border-yellow-400/30 bg-yellow-400/20 text-yellow-400'
                                : 'border border-gray-400/30 bg-gray-400/20 text-gray-400'
                        }`}>
                        {service.level === 'expert'
                          ? 'Expert'
                          : service.level === 'advanced'
                            ? 'Avancé'
                            : service.level === 'intermediate'
                              ? 'Intermédiaire'
                              : 'Débutant'}
                      </span>
                    </div>
                  </div>

                  {/* Effet de brillance au hover */}
                  <div
                    className={`absolute inset-0 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-700 ${
                      hoveredService === service.id ? 'translate-x-full' : '-translate-x-full'
                    }`}
                  />
                </div>

                {/* Ombre projetée animée */}
                <div
                  className={`from-primary-400/20 to-secondary-400/20 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br blur-xl transition-all duration-500 ${
                    hoveredService === service.id ? 'scale-105 opacity-50' : 'scale-95 opacity-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div
          className={`text-center opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: '0.9s' }}>
          <div className="rounded-2xl border border-neutral-700/50 bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 p-8 backdrop-blur-sm sm:p-12">
            <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Prêt·e à donner vie à votre projet ?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-400">
              Discutons ensemble de vos besoins et créons quelque chose d'exceptionnel qui fera la
              différence pour votre marque.
            </p>

            <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] to-[#E1877F] px-8 py-4 text-lg font-bold text-neutral-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              {/* Effet de fond animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5D5B7] via-[#E89179] to-[#ED9A8C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Contenu du bouton */}
              <span className="relative z-10 flex items-center gap-3">
                <HiSparkles className="h-5 w-5" />
                Démarrer un projet
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

export default ServicesSection;
