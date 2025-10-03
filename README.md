# Scriptlyfy App (Next.js for Firebase App Hosting)

This folder is a self-contained Next.js App Router project ready for Firebase App Hosting. Your static marketing site can stay on Firebase Hosting at `scriptlyfy.com`, while this deploys to `app.scriptlyfy.com` via App Hosting.

## Stack
- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- Firebase Web SDK (client)

## Quick start
1. Install deps
   npm install
2. Run locally
   npm run dev

Visit http://localhost:3001

## Pages
- `/` – minimal landing for the app
- `/bulk-social-video-transcription` – stub of the hub page
- `/api/ping` – example API route

## Firebase environment
Create `.env.local` with:
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...

## Deploy to Firebase App Hosting
- Push this folder as its own GitHub repo (or subfolder repo)
- In Firebase Console → App Hosting: Connect repository, select this folder as the root
- Default build command: `npm run build`, output: handled by Next.js runtime
- Map custom domain: `app.scriptlyfy.com`

## Notes
- Keep your current Vite site (landing) on Firebase Hosting
- You can progressively port pages/components from the existing site into this app
- Replace `Link`/routing/SEO pieces as you migrate (Next.js `<Link>` and Metadata)
