import type { MobileMenuProps } from './types';

/**
 * Mobile menu overlay with fullscreen navigation
 * Features animated navigation links and language selector
 */
const MobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navigationItems,
  activeSection,
  setActiveSection,
  languages,
  currentLang,
  setCurrentLang,
}: MobileMenuProps) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Background overlay */}
      <div
        className="animate-fade-in absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menu content - Centrage parfait */}
      <div className="animate-slide-down-fade relative z-50 flex h-screen w-screen flex-col items-center justify-center bg-neutral-900/80 backdrop-blur-md">
        {/* Close button en haut à droite */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="animate-scale-in absolute top-8 right-8 cursor-pointer p-2 text-neutral-300 transition-all duration-200 hover:scale-110 hover:text-white"
          style={{ animationDelay: '100ms' }}>
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center justify-center space-y-8">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`mobile-nav-link cursor-pointer text-4xl font-bold opacity-0 transition-all duration-300 ease-out ${
                activeSection === item.id ? 'text-white' : 'text-neutral-400 hover:text-white'
              } animate-slide-up-fade`}
              style={{
                animationDelay: `${200 + index * 150}ms`,
                textShadow: activeSection === item.id ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
              }}>
              {item.label.toUpperCase()}
            </button>
          ))}

          {/* Contact link */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="animate-slide-up-fade mobile-nav-link cursor-pointer text-4xl font-bold text-neutral-400 opacity-0 transition-all duration-300 ease-out hover:text-white"
            style={{ animationDelay: `${200 + navigationItems.length * 150}ms` }}>
            CONTACT
          </button>
        </nav>

        {/* Language Selector Mobile avec animation bounce */}
        <div
          className="animate-bounce-in mt-12 flex items-center space-x-4 opacity-0"
          style={{ animationDelay: '800ms' }}>
          {languages.map((lang, index) => (
            <button
              key={lang}
              onClick={() => setCurrentLang(lang)}
              className={`animate-scale-in mobile-lang-button cursor-pointer rounded-full px-4 py-2 text-lg font-medium opacity-0 transition-all duration-200 ${
                currentLang === lang
                  ? 'bg-white text-black'
                  : 'border border-neutral-600 text-neutral-400 hover:border-neutral-400 hover:text-white'
              } `}
              style={{ animationDelay: `${900 + index * 100}ms` }}>
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
