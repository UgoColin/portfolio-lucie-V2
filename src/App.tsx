import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PortfolioPage from '@/pages/PortfolioPage';

/**
 * Main App component with routing functionality
 */
function App() {
  return (
    <Router basename="/portfolio-lucie-V2">
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/portfolio"
            element={<PortfolioPage />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
