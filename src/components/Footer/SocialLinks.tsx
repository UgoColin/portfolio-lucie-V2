import { FaDribbble, FaBehance, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

interface SocialLinksProps {
  isVisible: boolean;
}

/**
 * Social media links with hover animations using react-icons
 */
const SocialLinks = ({ isVisible }: SocialLinksProps) => {
  const socialLinks = [
    {
      id: 'dribbble',
      label: 'Dribbble',
      href: '#',
      icon: <FaDribbble className="h-5 w-5" />,
    },
    {
      id: 'behance',
      label: 'Behance',
      href: '#',
      icon: <FaBehance className="h-5 w-5" />,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: '#',
      icon: <FaInstagram className="h-5 w-5" />,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: '#',
      icon: <FaLinkedin className="h-5 w-5" />,
    },
    {
      id: 'github',
      label: 'GitHub',
      href: '#',
      icon: <FaGithub className="h-5 w-5" />,
    },
  ];

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: '800ms' }}>
      <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Suivez-moi</h3>

      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={social.id}
            href={social.href}
            aria-label={social.label}
            className={`group hover:border-primary-400/50 hover:bg-primary-400/10 hover:text-primary-400 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800/50 text-neutral-400 transition-all duration-300 ease-out hover:scale-110 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: `${1000 + index * 100}ms`,
            }}>
            {social.icon}

            {/* Hover glow effect */}
            <div className="bg-primary-400/20 absolute inset-0 rounded-full opacity-0 blur-sm transition-all duration-300 group-hover:scale-150 group-hover:opacity-100"></div>

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-neutral-800 px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
