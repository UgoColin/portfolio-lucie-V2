/**
 * Base de données des compétences/skills
 */

export interface Skill {
  id: number;
  name: string;
  category: 'design' | 'branding' | 'digital';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description?: string;
  icon?: string;
  isService?: boolean;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: 'Identité Visuelle',
    category: 'branding',
    level: 'expert',
    description:
      "Création d'identités visuelles complètes qui reflètent l'essence de votre marque et marquent les esprits.",
    icon: 'HiSparkles',
    isService: true,
  },
  {
    id: 2,
    name: 'Logo Design',
    category: 'branding',
    level: 'expert',
    description:
      "Conception de logos uniques et mémorables qui incarnent parfaitement l'ADN de votre entreprise.",
    icon: 'HiStar',
    isService: true,
  },
  {
    id: 3,
    name: 'Branding',
    category: 'branding',
    level: 'expert',
    description:
      'Développement de stratégies de marque cohérentes, du concept initial à la déclinaison complète.',
    icon: 'HiHeart',
    isService: true,
  },
  {
    id: 4,
    name: 'UI/UX Design',
    category: 'digital',
    level: 'intermediate',
    description:
      'Interface utilisateur intuitive et expérience utilisateur optimisée pour vos supports digitaux.',
    icon: 'HiDevicePhoneMobile',
    isService: true,
  },
  {
    id: 5,
    name: 'Print Design',
    category: 'design',
    level: 'advanced',
    description:
      'Conception de supports imprimés percutants : affiches, brochures, catalogues et supports événementiels.',
    icon: 'HiNewspaper',
    isService: true,
  },
  {
    id: 6,
    name: 'Packaging',
    category: 'design',
    level: 'advanced',
    description:
      "Design d'emballages créatifs qui valorisent vos produits et séduisent votre clientèle.",
    icon: 'HiCube',
    isService: true,
  },
  {
    id: 7,
    name: 'Motion Design',
    category: 'digital',
    level: 'intermediate',
    description:
      "Création d'animations et de contenus vidéo engageants pour dynamiser votre communication.",
    icon: 'HiPlay',
    isService: true,
  },
  {
    id: 8,
    name: 'Typographie',
    category: 'design',
    level: 'advanced',
    description:
      "Maîtrise de l'art typographique pour créer des compositions textuelles harmonieuses et impactantes.",
    icon: 'HiPencil',
    isService: true,
  },
  {
    id: 9,
    name: 'Photographie',
    category: 'design',
    level: 'advanced',
    description:
      'Shooting créatif et direction artistique pour sublimer vos produits et votre univers de marque.',
    icon: 'HiCamera',
    isService: true,
  },
  {
    id: 10,
    name: 'Édition',
    category: 'design',
    level: 'advanced',
    description:
      'Mise en page créative et direction éditoriale pour livres, magazines et supports de communication.',
    icon: 'HiBookOpen',
    isService: true,
  },
];

export default skills;
