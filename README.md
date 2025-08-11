# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Portfolio Personnel

Portfolio moderne développé avec React, TypeScript et Tailwind CSS.

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <your-repo-url>
cd portfolio

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts disponibles

```bash
npm run dev          # Serveur de développement (port 5173)
npm run build        # Build de production
npm run preview      # Prévisualiser le build
npm run lint         # Vérifier le code
npm run lint:fix     # Corriger automatiquement
npm run format       # Formater le code
npm run format:check # Vérifier le formatage
```

## 🛠️ Stack technique

- ⚛️ **React 18** - Bibliothèque UI
- 🔷 **TypeScript** - Typage statique
- ⚡ **Vite** - Build tool ultra-rapide
- 🎨 **Tailwind CSS 4** - Framework CSS utilitaire
- 🎯 **Lucide React** - Icônes modernes
- 📏 **ESLint + Prettier** - Qualité de code

## 📁 Structure du projet

```
src/
├── components/    # Composants réutilisables
├── pages/         # Pages du site
├── types/         # Types TypeScript
├── styles/        # Styles globaux
└── assets/        # Ressources statiques
```

## 🎨 Design System

### Couleurs

- **Primary** : Palette de bleus
- **Secondary** : Palette de gris

### Typographie

- **Primary** : Inter
- **Monospace** : JetBrains Mono

## 📚 Documentation

Voir le dossier [`docs/`](./docs/) pour plus d'informations :

- [Structure détaillée](./docs/STRUCTURE.md)

## 🚀 Déploiement

Le projet est optimisé pour un déploiement sur :

- Vercel
- Netlify
- GitHub Pages
- Tout hébergeur statique

```bash
npm run build  # Génère le dossier dist/
```

## 📝 License

MIT

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
