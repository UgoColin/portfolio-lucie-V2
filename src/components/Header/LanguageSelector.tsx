import type { LanguageSelectorProps } from './types';

/**
 * Language selector component with Contact button
 * Hidden on mobile, visible on desktop
 */
const LanguageSelector = ({
  languages,
  currentLang,
  setCurrentLang,
  isLoaded,
}: LanguageSelectorProps) => {
  return (
    <div
      className={`hidden items-center space-x-4 transition-all duration-700 ease-out md:flex ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} `}
      style={{ transitionDelay: '800ms' }}>
      {/* Contact Button */}
      <button className="hover:shadow-primary-500/10 group relative cursor-pointer overflow-hidden rounded-full border-2 border-neutral-700/50 bg-neutral-800/50 px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out hover:border-neutral-600/50 hover:bg-neutral-700/50 hover:shadow-lg">
        <span className="relative z-10">Contact</span>
        <div className="from-primary-400/20 to-primary-500/20 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </button>

      {/* Language Selector */}
      <div className="flex items-center rounded-full border-2 border-neutral-700/50 bg-neutral-800/50 p-1">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setCurrentLang(lang)}
            className={`cursor-pointer rounded-full px-3 py-2 text-xs font-medium transition-all duration-200 ${
              currentLang === lang
                ? 'bg-white text-black shadow-inner'
                : 'text-neutral-400 hover:bg-neutral-700/50 hover:text-white'
            } `}>
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
