# Norafidah Kamarulzaman · Portfolio

Personal portfolio built with Next.js 15 and Tailwind CSS 4. Wine-red theme with a light/dark toggle (remembers the visitor's choice).

## Edit the content
All text lives in `content.ts`. Fill in the items marked `TODO` (email, LinkedIn, photo, CV).
Put your photo and CV PDF in `public/` and point `profile.photo` / `profile.cv` at them.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com, sign in with GitHub, click "Add New → Project", and import the repo.
3. Keep the defaults (framework: Next.js) and click Deploy. Every push to `main` redeploys.
