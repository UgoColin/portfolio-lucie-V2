import Logo from '../Logo';
import type { FooterLogoProps } from './types';

/**
 * Footer logo section with contact information and social links
 */
const FooterLogo = ({ isVisible }: FooterLogoProps) => {
  return (
    <div
      className={`space-y-6 transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: '200ms' }}>
      {/* Logo */}
      <div className="group cursor-pointer">
        <Logo
          size={48}
          className="hover:text-primary-400 transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {/* Description */}
      <p
        className={`max-w-sm text-sm text-neutral-400 transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ transitionDelay: '400ms' }}>
        Designer graphique passionnée, créant des expériences visuelles uniques et impactantes.
      </p>

      {/* Contact Info */}
      <div
        className={`space-y-2 transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ transitionDelay: '600ms' }}>
        <div className="group flex items-center space-x-2 text-sm text-neutral-400 transition-colors duration-200 hover:text-white">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="cursor-pointer group-hover:underline">contact@designer.com</span>
        </div>

        <div className="group flex items-center space-x-2 text-sm text-neutral-400 transition-colors duration-200 hover:text-white">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Paris, France</span>
        </div>
      </div>
    </div>
  );
};

export default FooterLogo;
