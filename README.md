# Sudheer Kumar Ganti — React + TypeScript Portfolio

A responsive portfolio website built with React, TypeScript, Vite, and Lucide icons. It uses a dark navy theme with violet/cyan accents and is configured for GitHub Pages deployment using GitHub Actions.

## 1. Run locally

Install Node.js 20+ (Node.js 22 is recommended), then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

To verify the production build:

```bash
npm run build
npm run preview
```

## 2. Personalize before publishing

Edit `src/data.ts` and update:
- `email`
- `linkedin`
- `github`
- Project descriptions, links, and tags
- AWS services to match your actual hands-on experience (for example, Lambda, S3, SQS, API Gateway, and CloudWatch)
- Any experience details you want to make more specific

The project cards are intentionally written conservatively. Only add public links, metrics, or achievements you can discuss confidently in an interview. Do not publish confidential employer/client code or data.

## 3. Publish with GitHub Pages

1. Create a new **public** GitHub repository, for example `sudheer-portfolio`.
2. Extract this project ZIP and open a terminal in the extracted project folder.
3. Initialize and push the code (replace `YOUR-GITHUB-USERNAME` with your username):

```bash
git init
git add .
git commit -m "Build React TypeScript portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/sudheer-portfolio.git
git push -u origin main
```

If your repository has a different name, that's fine: the GitHub Actions workflow derives the Vite base path from the repository name automatically.

4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish successfully.
7. Your site will be published at:

`https://YOUR-GITHUB-USERNAME.github.io/sudheer-portfolio/`

Replace the username and repository name with your actual values. For a repository named `YOUR-GITHUB-USERNAME.github.io`, the URL is instead `https://YOUR-GITHUB-USERNAME.github.io/`.

## Included sections

- Hero with immediate-joiner availability
- About
- Skills
- Experience at Prodapt Solutions / Tes product work
- Project showcase
- Contact section
- Responsive mobile navigation
- GitHub Actions deployment workflow

## Before sharing with recruiters

- Confirm your notice period / joining status is accurate.
- Replace placeholder contact links.
- Add your real GitHub repositories and project demos.
- Check the published site on both mobile and desktop.
