import type { FooterLinkItem } from './types';

interface FooterNavigationProps {
  isVisible: boolean;
}

/**
 * Footer navigation with main links organized in sections
 */
const FooterNavigation = ({ isVisible }: FooterNavigationProps) => {
  const navigationSections = [
    {
      title: 'Navigation',
      links: [
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'services', label: 'Services' },
        { id: 'about', label: 'À propos' },
        { id: 'contact', label: 'Contact' },
      ] as FooterLinkItem[],
    },
    {
      title: 'Services',
      links: [
        { id: 'branding', label: 'Identité visuelle' },
        { id: 'web-design', label: 'Design web' },
        { id: 'print', label: 'Design print' },
        { id: 'illustration', label: 'Illustration' },
      ] as FooterLinkItem[],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
      {navigationSections.map((section, sectionIndex) => (
        <div
          key={section.title}
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${400 + sectionIndex * 200}ms` }}>
          {/* Section Title */}
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
            {section.title}
          </h3>

          {/* Section Links */}
          <ul className="space-y-3">
            {section.links.map((link, linkIndex) => (
              <li key={link.id}>
                <button
                  className={`group relative cursor-pointer text-sm text-neutral-400 transition-all duration-300 ease-out hover:translate-x-1 hover:text-white ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${600 + sectionIndex * 200 + linkIndex * 100}ms`,
                  }}>
                  {/* Hover indicator */}
                  <span className="bg-primary-400 absolute top-1/2 -left-3 h-1 w-1 -translate-y-1/2 rounded-full opacity-0 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100"></span>

                  {link.label}

                  {/* Underline effect */}
                  <span className="from-primary-400 to-primary-500 absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNavigation;
