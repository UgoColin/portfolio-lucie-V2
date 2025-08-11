# Portfolio - Structure du projet

## 📁 Structure des dossiers

```
portfolio/
├── public/                 # Ressources statiques
├── src/                   # Code source principal
│   ├── assets/            # Images, polices, icônes
│   ├── components/        # Composants réutilisables
│   ├── pages/             # Pages du site
│   ├── styles/            # Styles globaux (si nécessaire)
│   ├── types/             # Types TypeScript partagés
│   ├── App.tsx            # Composant principal
│   ├── main.tsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── docs/                  # Documentation, wireframes
├── .prettierrc            # Configuration Prettier
├── eslint.config.js       # Configuration ESLint
├── tailwind.config.ts     # Configuration Tailwind CSS
├── tsconfig.app.json      # Configuration TypeScript (app)
├── tsconfig.json          # Configuration TypeScript (root)
└── vite.config.ts         # Configuration Vite
```

## 🛠️ Technologies utilisées

- **React** 18.x - Bibliothèque UI
- **TypeScript** 5.x - Typage statique
- **Vite** - Build tool et dev server
- **Tailwind CSS** 4.x - Framework CSS utilitaire
- **Lucide React** - Icônes vectorielles
- **ESLint** - Linter JavaScript/TypeScript
- **Prettier** - Formateur de code

## 📝 Scripts disponibles

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualise le build de production
npm run lint         # Vérifie le code avec ESLint
npm run lint:fix     # Corrige automatiquement les erreurs ESLint
npm run format       # Formate le code avec Prettier
npm run format:check # Vérifie le formatage du code
```

## 🎨 Système de design

### Couleurs

- **Primary** : Palette de bleus (thème principal)
- **Secondary** : Palette de gris (texte, backgrounds)

### Typographie

- **Sans-serif** : Inter (principal)
- **Monospace** : JetBrains Mono (code)

### Animations

- `fade-in` : Apparition en fondu
- `slide-up` : Glissement vers le haut
- `slide-down` : Glissement vers le bas

## 🔧 Configuration

### Alias de chemins

- `@/` : Raccourci vers le dossier `src/`

### ESLint

- Configuration stricte TypeScript
- Règles React Hooks
- Support React Refresh

### Prettier

- Indentation : 2 espaces
- Guillemets simples
- Point-virgules obligatoires
- Virgule trailing ES5

## 📋 Conventions de code

### Nommage

- **Composants** : `PascalCase` (ex: `ProjectCard`)
- **Fonctions/Variables** : `camelCase` (ex: `handleClick`)
- **Constantes** : `SCREAMING_SNAKE_CASE` (ex: `API_URL`)
- **Fichiers** : `kebab-case` ou `PascalCase` pour composants

### Structure des composants

```typescript
/**
 * Description du composant
 */
interface ComponentProps {
  // Props typées
}

export const Component: React.FC<ComponentProps> = ({ prop }) => {
  // Hooks
  // Fonctions
  // Render
  return (
    <div className="tailwind-classes">
      {/* JSX */}
    </div>
  );
};
```

### Imports

```typescript
// 1. Imports externes
import React from 'react';
import { Mail } from 'lucide-react';

// 2. Imports internes
import type { Project } from '@/types';
import { ProjectCard } from '@/components/ProjectCard';

// 3. Imports de styles (si nécessaire)
import './Component.css';
```
