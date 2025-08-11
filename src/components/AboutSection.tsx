import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { HiSparkles, HiLightBulb, HiHeart } from 'react-icons/hi2';
import boardImage from '@/assets/board.webp';

/**
 * Section "Qui suis-je ?" avec présentation personnelle et photo en contexte créatif
 */
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref } = useIntersectionObserver({
    onIntersect: () => setIsVisible(true),
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-32">
      {/* Background avec gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900" />

      {/* Éléments décoratifs de fond */}
      <div className="bg-primary-400/5 absolute top-1/4 left-10 h-32 w-32 rounded-full blur-xl" />
      <div className="bg-secondary-400/5 absolute right-10 bottom-1/4 h-40 w-40 rounded-full blur-xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header de section */}
        <div
          className={`mb-16 text-center opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: '0.1s' }}>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#EBC9A4] via-[#DC706B] to-[#E1877F] bg-clip-text text-transparent">
              Qui suis-je ?
            </span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#EBC9A4] to-[#DC706B]" />
        </div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Colonne de gauche - Photo créative */}
          <div
            className={`relative order-2 opacity-0 lg:order-1 ${isVisible ? 'animate-slide-in-left' : ''}`}
            style={{ animationDelay: '0.3s' }}>
            {/* Container principal avec effets */}
            <div className="group relative">
              {/* Cercles décoratifs */}
              <div className="from-primary-400/10 via-secondary-400/10 to-primary-400/10 absolute -inset-8 rounded-full bg-gradient-to-r blur-2xl transition-all duration-700 group-hover:blur-3xl" />
              <div className="from-primary-400/20 to-secondary-400/20 absolute -inset-4 rounded-full bg-gradient-to-br opacity-50" />

              {/* Photo principale */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={boardImage}
                  alt="Lucie en contexte créatif"
                  className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[500px]"
                />

                {/* Overlay avec effet glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />

                {/* Badge flottant */}
                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <HiSparkles className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-neutral-900">Créatrice</span>
                  </div>
                </div>
              </div>

              {/* Éléments décoratifs flottants */}
              <div
                className="absolute -top-6 -right-6 h-12 w-12 animate-bounce rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 opacity-80"
                style={{ animationDelay: '1s', animationDuration: '3s' }}
              />
              <div
                className="absolute -bottom-4 -left-4 h-8 w-8 animate-pulse rounded-full bg-gradient-to-br from-pink-400 to-purple-400 opacity-60"
                style={{ animationDelay: '1.5s' }}
              />
            </div>
          </div>

          {/* Colonne de droite - Contenu textuel */}
          <div
            className={`order-1 opacity-0 lg:order-2 ${isVisible ? 'animate-slide-in-right' : ''}`}
            style={{ animationDelay: '0.5s' }}>
            {/* Introduction */}
            <div className="space-y-6">
              <h3
                className={`mb-4 text-2xl font-bold text-white opacity-0 sm:text-3xl ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? '0.6s' : undefined }}>
                Lucie, artiste quelque chose
              </h3>

              <p
                className={`text-lg leading-relaxed text-neutral-300 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? '0.9s' : undefined }}>
                Avec plus de{' '}
                <span className="text-primary-400 font-semibold">4 ans d'expérience</span> dans
                l'univers créatif, je transforme vos idées en visuels percutants qui marquent les
                esprits.
              </p>

              <p
                className={`leading-relaxed text-neutral-400 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? '1.2s' : undefined }}>
                Diplômée d'un bachelor en direction artistique, j'ai eu la chance de collaborer avec
                des entreprises variées et des startups innovantes.
              </p>
            </div>

            {/* Points forts avec icônes */}
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: HiLightBulb,
                  title: 'Vision créative',
                  description: 'Des concepts uniques adaptés à votre identité',
                },
                {
                  icon: HiHeart,
                  title: 'Approche humaine',
                  description: "Une collaboration basée sur l'écoute et la confiance",
                },
                {
                  icon: HiSparkles,
                  title: 'Excellence technique',
                  description: 'Maîtrise des outils et tendances actuelles',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`hover:border-primary-400/30 flex items-start gap-4 rounded-xl border border-neutral-700/50 bg-neutral-800/30 p-4 opacity-0 backdrop-blur-sm transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
                  <div className="from-primary-400 to-secondary-400 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-neutral-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Citation/signature */}
            <div
              className={`from-primary-400/10 to-secondary-400/10 border-primary-400 mt-8 rounded-xl border-l-4 bg-gradient-to-r p-6 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: '1.3s' }}>
              <blockquote className="mb-2 text-lg text-neutral-300 italic">
                "Chaque projet est une nouvelle aventure créative, une occasion unique de donner vie
                à une vision et de créer du lien."
              </blockquote>
              <cite className="text-primary-400 font-semibold">— Lucie</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
