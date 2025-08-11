---
applyTo: '**'
---

# Project Overview

Portfolio web moderne pour présenter le travail d’un·e graphiste, mettant en valeur ses projets, ses compétences et ses coordonnées.  
Application purement **frontend** construite avec **React**, **Vite**, **Tailwind CSS** et **TypeScript**.  
Objectif : offrir une expérience fluide, responsive et esthétique avec un chargement rapide et un code maintenable.

## Folder Structure

- `/src`: code source principal du frontend.
  - `/components`: composants réutilisables.
  - `/pages`: pages du site (Home, Portfolio, Contact, etc.).
  - `/assets`: images, polices, icônes.
  - `/styles`: styles globaux si nécessaire.
  - `/types`: définitions de types TypeScript partagés.
- `/public`: ressources statiques servies directement.
- `/docs`: documentation, wireframes, moodboards.

## Libraries and Frameworks

- **React** 18.x pour le rendu UI.
- **Vite** pour le bundling et le dev server rapide.
- **Tailwind CSS** 3.x pour le style utilitaire.
- **TypeScript** 5.x pour la sécurité de typage.
- **Lucide-react** ou équivalent pour les icônes vectorielles.

## Coding Standards

- Utiliser **TypeScript strict** (`"strict": true` dans tsconfig).
- Nommage : `PascalCase` pour composants, `camelCase` pour fonctions/variables, `SCREAMING_SNAKE_CASE` pour constantes globales.
- Composants **function-based** uniquement.
- Typage explicite des props (`interface` ou `type`).
- Utiliser les hooks React modernes (`useState`, `useEffect`, `useMemo`, etc.).
- Préférer `const` et `let` plutôt que `var`.
- Importer en chemins relatifs courts ou alias (`@/components/...`) si configuré.
- Respecter une indentation de **2 espaces**.
- Utiliser **ESLint + Prettier** pour le lint et le formatage auto.
- Groupement : imports externes, internes, puis styles.
- **Documenter chaque composant et fonction** avec un commentaire JSDoc/TSDoc clair indiquant son rôle, ses paramètres et sa valeur de retour.

## UI Guidelines

- Design responsive mobile-first.
- Palette et style cohérents avec la charte graphique du portfolio.
- Utiliser Tailwind pour le maximum de styles ; styles personnalisés en dernier recours.
- Gestion des états interactifs (`hover`, `focus`, `active`, `dark`) via classes Tailwind.
- Optimisation des images (formats WebP/AVIF si possible).
- Animations légères avec `framer-motion` si besoin.
- Palettes de couleurs et typographie définies dans le fichier `tailwind.config.ts`.
- Design et style modernes, professionnels dignes d'un portfolio de graphiste.
