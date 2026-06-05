# Site BSE Connect — Next.js

Site vitrine de BSE Connect (sûreté électronique & courants faibles, Île-de-France).
Stack : Next.js 14 (App Router) · TypeScript · Tailwind CSS · Motion. Direction « sombre premium ».

## Lancer en local
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de production
```bash
npm run build && npm start
```

## Déploiement (Vercel)
1. Pousser ce dossier sur un dépôt Git (GitHub).
2. Sur vercel.com → New Project → importer le dépôt.
3. Framework détecté : Next.js. Aucune variable d'env requise.
4. Déployer → une URL de preview est générée (pour la relecture/QA), puis le domaine définitif.

## Structure
- `app/` : pages (App Router) + `layout.tsx` (SEO, JSON-LD) + `globals.css`
- `components/` : Header, Footer, Logo, motif, animations (Reveal/Motion), icônes, UI
- `lib/site.ts` : données du site (contact, métiers, marques, secteurs, mentions légales)

## À finaliser avant mise en ligne
- Logo vectoriel / favicon / image Open Graph définitifs
- N° TVA à confirmer ; adresse Vercel (hébergeur) dans les mentions légales
