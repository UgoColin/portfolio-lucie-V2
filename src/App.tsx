import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Main App component
 */
function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />

      {/* Main content avec padding pour le header fixe */}
      <main className="relative z-10 pt-20">
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

      <Footer />
    </div>
  );
}

export default App;
