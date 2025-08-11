import { useState, useEffect } from 'react';
import {
  DesktopNavigation,
  LanguageSelector,
  MobileMenu,
  MobileMenuButton,
  LogoSection,
  type NavigationItem,
} from './Header/index';

/**
 * Header component with navigation and language selector
 * Features smooth animations and modern design
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('portfolio');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');
  const [showBorderAnimation, setShowBorderAnimation] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Border animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setShowBorderAnimation(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems: NavigationItem[] = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À propos' },
  ];

  const languages = ['FR', 'EN'];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 py-10 transition-all duration-500 ease-out ${
        isScrolled ? 'bg-neutral-950/90 backdrop-blur-md' : 'bg-transparent'
      } ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} `}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <LogoSection isLoaded={isLoaded} />

          {/* Navigation centrale */}
          <DesktopNavigation
            navigationItems={navigationItems}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isLoaded={isLoaded}
          />

          {/* Contact et Language Selector */}
          <LanguageSelector
            languages={languages}
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
            isLoaded={isLoaded}
          />

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isLoaded={isLoaded}
          />
        </div>
      </div>

      {/* Animated bottom border */}
      <div className="absolute right-0 bottom-0 left-0 h-px">
        {/* Base border line when scrolled */}
        {isScrolled && <div className="h-full bg-neutral-800/50"></div>}

        {/* Animated gradient line */}
        <div
          className={`absolute top-0 left-1/2 h-full -translate-x-1/2 transform bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-600 transition-all duration-1000 ease-out ${showBorderAnimation ? 'animate-separator' : 'w-0 opacity-0'} `}></div>

        {/* Subtle glow effect */}
        <div
          className={`via-primary-500/20 absolute top-0 left-1/2 h-full -translate-x-1/2 transform bg-gradient-to-r from-transparent to-transparent transition-all delay-500 duration-1000 ease-out ${showBorderAnimation ? 'animate-separator opacity-50' : 'w-0 opacity-0'} `}></div>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navigationItems={navigationItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        languages={languages}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />
    </header>
  );
};

export default Header;
