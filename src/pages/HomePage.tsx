import type { PageProps } from './types';

/**
 * Page d'accueil du portfolio
 */
const HomePage = ({ className = '' }: PageProps) => {
  return (
    <main className={`relative z-10 pt-20 ${className}`}>
      {/* Contenu temporaire pour voir le footer */}
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Portfolio Designer</h1>
          <p className="max-w-md text-neutral-400">
            Contenu principal du portfolio à venir. Scroll vers le bas pour voir le footer avec
            ses animations.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
