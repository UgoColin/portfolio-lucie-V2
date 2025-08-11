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
  return (
    <div
      className={`hidden items-center transition-all duration-700 ease-out md:flex ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: '400ms' }}>
      <div
        className={`w-full rounded-full bg-gradient-to-r from-[#EBC9A4] via-[#C6D290] via-[#DC706B] via-[#E5E6D8] to-[#E1877F] p-[2px] transition-all duration-700 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        style={{ transitionDelay: '400ms' }}>
        <nav className="flex w-full items-center space-x-6 rounded-full bg-neutral-900 px-4 py-2 backdrop-blur-sm">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`group text-md relative cursor-pointer rounded-full px-8 py-3 font-medium transition-all duration-300 ease-out ${
                activeSection === item.id
                  ? 'bg-white text-black shadow-lg'
                  : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
              } `}>
              <span className="relative z-10">{item.label}</span>

              {/* Active indicator */}
              {activeSection === item.id && <div className="absolute inset-0 rounded-full"></div>}

              {/* Hover effect */}
              <div className="from-primary-400/10 to-primary-500/10 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DesktopNavigation;
