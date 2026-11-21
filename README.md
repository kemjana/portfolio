# Kim Janna I. Laya – Portfolio

Next.js 14 (App Router) + React + Tailwind CSS + Lucide Icons.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Edit your content
Everything lives in `data/portfolio.js` (contact info, projects, certs, tech stack).
- Replace each project's `repo` link with the real repo.
- Put your resume at `public/resume.pdf`.

## Deploy
1. Push to GitHub.
2. Go to vercel.com, then Add New > Project, then import the repo.
3. Click Deploy (no settings needed; Vercel detects Next.js).

## Contact form
Set `NEXT_PUBLIC_WEB3FORMS_KEY` (see `.env.example`) locally in `.env.local` and on Vercel under Settings > Environment Variables, then redeploy.
