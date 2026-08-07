<<<<<<< HEAD
# MyPortefolio
=======
# Portfolio — Amadou Faye Diagne

Portfolio premium construit avec Next.js (App Router), TypeScript, TailwindCSS et Framer Motion.

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Créer un fichier `.env.local` (non commité) avec :

```bash
# URL publique du site, utilisée pour le SEO (Open Graph, sitemap, robots)
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app

# Formulaire de contact (Resend — https://resend.com)
RESEND_API_KEY=
CONTACT_EMAIL_TO=
```

Sans `RESEND_API_KEY` et `CONTACT_EMAIL_TO`, le formulaire de contact reste fonctionnel côté interface mais affiche un message indiquant que l'envoi n'est pas encore configuré.

## Stack

- Next.js (App Router) + TypeScript
- TailwindCSS v4
- Framer Motion + Lenis (scroll fluide)
- react-hook-form + zod (formulaire de contact)
- Resend (envoi d'e-mails via Server Action)

## Build de production

```bash
npm run build
npm run start
```

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com/new). Penser à renseigner les variables d'environnement ci-dessus dans les paramètres du projet Vercel.
>>>>>>> 95cc4a9 (Initial commit)
