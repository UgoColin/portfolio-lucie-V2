/**
 * Portfolio page component for displaying graphic design projects
 * Currently shows a test message to verify navigation functionality
 */
const PortfolioPage = () => {
  return (
    <main className="min-h-screen pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-8 text-6xl font-bold text-neutral-100">Hello World! 🎨</h1>
            <p className="text-xl text-neutral-300">
              Bienvenue sur la page Portfolio - Navigation fonctionnelle !
            </p>
            <p className="mt-4 text-lg text-neutral-400">
              Cette page sera bientôt remplie avec tous les projets graphiques.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
