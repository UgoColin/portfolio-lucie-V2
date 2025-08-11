import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';

/**
 * Main App component
 */
function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
