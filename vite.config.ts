import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Actions automatically sets GITHUB_REPOSITORY to "owner/repository".
// This makes the same source work locally and on a GitHub Pages project site.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_ACTIONS && repositoryName
  ? `/${repositoryName}/`
  : '/'

export default defineConfig({
  plugins: [react()],
  base,
})