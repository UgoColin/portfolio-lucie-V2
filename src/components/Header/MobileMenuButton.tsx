interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  isLoaded: boolean;
}

/**
 * Mobile menu toggle button (hamburger/close icon)
 * Only visible on mobile devices
 */
const MobileMenuButton = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isLoaded,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className={`cursor-pointer p-2 text-neutral-300 transition-colors duration-200 hover:text-white md:hidden ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} `}
      style={{ transitionDelay: '600ms' }}>
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        {isMobileMenuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
};

export default MobileMenuButton;
