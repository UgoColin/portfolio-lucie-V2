import { Link, useLocation } from 'react-router-dom';
import type { NavigationItem } from './types';

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  isLoaded: boolean;
}

/**
 * Desktop navigation component with gradient border and navigation links
 */
const DesktopNavigation = ({
  navigationItems,
  activeSection,
  setActiveSection,
  isLoaded,
}: DesktopNavigationProps) => {
  const location = useLocation();

  const handleNavClick = (item: NavigationItem) => {
    if (item.href && !item.isExternal) {
      // Pour la navigation React Router, on laisse Link gérer
      setActiveSection(item.id);
    } else if (!item.href) {
      // Pour les anchors dans la même page
      setActiveSection(item.id);
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (item: NavigationItem) => {
    if (item.href) {
      return location.pathname === item.href;
    }
    return activeSection === item.id;
  };

  return (
    <div
      className={`hidden items-center transition-all duration-700 ease-out md:flex ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: '400ms' }}>
      <div
        className={`w-full rounded-full bg-gradient-to-r from-[#EBC9A4] via-[#C6D290] via-[#DC706B] via-[#E5E6D8] to-[#E1877F] p-[2px] transition-all duration-700 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        style={{ transitionDelay: '400ms' }}>
        <nav className="flex w-full items-center space-x-6 rounded-full bg-neutral-900 px-4 py-2 backdrop-blur-sm">
          {navigationItems.map((item) => {
            const active = isActive(item);

            if (item.href && !item.isExternal) {
              // Navigation avec React Router
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`group text-md relative cursor-pointer rounded-full px-8 py-3 font-medium transition-all duration-300 ease-out ${
                    active
                      ? 'bg-white text-black shadow-lg'
                      : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
                  } `}>
                  <span className="relative z-10">{item.label}</span>

                  {/* Active indicator */}
                  {active && <div className="absolute inset-0 rounded-full"></div>}

                  {/* Hover effect */}
                  <div className="from-primary-400/10 to-primary-500/10 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Link>
              );
            } else {
              // Bouton pour liens externes ou anchors
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`group text-md relative cursor-pointer rounded-full px-8 py-3 font-medium transition-all duration-300 ease-out ${
                    active
                      ? 'bg-white text-black shadow-lg'
                      : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
                  } `}>
                  <span className="relative z-10">{item.label}</span>

                  {/* Active indicator */}
                  {active && <div className="absolute inset-0 rounded-full"></div>}

                  {/* Hover effect */}
                  <div className="from-primary-400/10 to-primary-500/10 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              );
            }
          })}
        </nav>
      </div>
    </div>
  );
};

export default DesktopNavigation;
