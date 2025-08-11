import Logo from '../Logo';

interface LogoSectionProps {
  isLoaded: boolean;
}

/**
 * Logo section with hover effects and animations
 */
const LogoSection = ({ isLoaded }: LogoSectionProps) => {
  return (
    <div
      className={`cursor-pointer text-2xl font-bold text-white transition-all duration-700 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'} `}
      style={{ transitionDelay: '200ms' }}>
      <span className="relative flex items-center">
        <Logo
          size={64}
          className="hover:text-primary-400 transition-all duration-300"
        />
        <div className="from-primary-400 to-primary-500 absolute inset-0 -m-1 rounded-lg bg-gradient-to-r opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
      </span>
    </div>
  );
};

export default LogoSection;
