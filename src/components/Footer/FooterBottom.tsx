import type { FooterBottomProps } from './types';

/**
 * Footer bottom section with copyright and legal links
 */
const FooterBottom = ({ isVisible }: FooterBottomProps) => {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { id: 'privacy', label: 'Confidentialité' },
    { id: 'terms', label: 'Conditions' },
    { id: 'cookies', label: 'Cookies' },
  ];

  return (
    <div
      className={`border-t border-neutral-800/50 pt-6 transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: '1200ms' }}>
      <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        {/* Copyright */}
        <div
          className={`text-sm text-neutral-500 transition-all duration-700 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}
          style={{ transitionDelay: '1400ms' }}>
          <p>© {currentYear} Designer Portfolio. Tous droits réservés.</p>
        </div>

        {/* Legal Links */}
        <div
          className={`flex space-x-6 transition-all duration-700 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}
          style={{ transitionDelay: '1600ms' }}>
          {legalLinks.map((link, index) => (
            <button
              key={link.id}
              className={`group relative cursor-pointer text-sm text-neutral-500 transition-all duration-300 ease-out hover:text-neutral-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
              style={{
                transitionDelay: `${1800 + index * 100}ms`,
              }}>
              {link.label}

              {/* Underline effect */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-neutral-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
