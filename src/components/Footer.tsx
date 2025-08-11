import { useState, useEffect } from 'react';
import { FooterLogo, FooterNavigation, SocialLinks, FooterBottom } from './Footer/index';

/**
 * Footer component with logo, navigation, social links and legal information
 * Features smooth scroll-triggered animations and modern design with animated top border
 */
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBorderAnimation, setShowBorderAnimation] = useState(false);

  // Intersection Observer pour les animations au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Déclenche l'animation de la bordure après que le footer soit visible
            setTimeout(() => setShowBorderAnimation(true), 300);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      },
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer
      id="footer"
      className="relative bg-neutral-950">
      {/* Animated top border */}
      <div className="absolute top-0 right-0 left-0 h-px">
        {/* Base border line */}
        <div className="h-full bg-neutral-800/50"></div>

        {/* Animated gradient line */}
        <div
          className={`absolute top-0 left-1/2 h-full -translate-x-1/2 transform bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-600 transition-all duration-1000 ease-out ${showBorderAnimation ? 'animate-separator' : 'w-0 opacity-0'} `}></div>

        {/* Subtle glow effect */}
        <div
          className={`via-primary-500/20 absolute top-0 left-1/2 h-full -translate-x-1/2 transform bg-gradient-to-r from-transparent to-transparent transition-all delay-500 duration-1000 ease-out ${showBorderAnimation ? 'animate-separator opacity-50' : 'w-0 opacity-0'} `}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Left section: Logo and contact info */}
            <div className="lg:col-span-1">
              <FooterLogo isVisible={isVisible} />
            </div>

            {/* Center section: Navigation */}
            <div className="lg:col-span-1">
              <FooterNavigation isVisible={isVisible} />
            </div>

            {/* Right section: Social links */}
            <div className="lg:col-span-1">
              <SocialLinks isVisible={isVisible} />
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright and legal */}
        <FooterBottom isVisible={isVisible} />

        {/* Padding bottom */}
        <div className="pb-6"></div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary-500/5 absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"></div>
        <div className="bg-primary-400/3 absolute top-20 right-1/4 h-60 w-60 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
