# Knowledge Base Project

This project demonstrates:

- GitHub Actions
- GitHub Pages
- Eleventy
- CI/CD automation

---

# Project Structure

```text
knowledge-base-project/
│
├── .github/
│   └── workflows/
│       └── deploy.yaml
│
├── docs/
│   ├── architecture.md
│   ├── index.md
│   ├── onboarding.md
│   └── troubleshooting.md
│
├── script/
│   ├── lint-links.js
│   ├── url-checker.js
│   └── validate-docs.js
│
├── src/
│   ├── _includes/
│   ├── _layouts/
│   ├── css/
│   ├── images/
│   └── js/
│
├── .eleventy.js
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

---

# Installation

Install dependencies:

```bash
npm install
```

---

# Run Locally

Generate the static website:

```bash
npm run eleventy:prod
```

The generated website will appear inside:

```text
_site
```

---

# Git Commands

Initialize repository:

```bash
git init
```

Rename branch to main:

```bash
git branch -M main
```

Connect repository:

```bash
git remote add origin https://github.com/fernandezdelacuestaalvaro-ai/ejemplo_git.git
```

Add files:

```bash
git add .
```

Create commit:

```bash
git commit -m "Initial GitHub Actions project"
```

Push to GitHub:

```bash
git push -u origin main
```

---

# GitHub Actions Workflow

The workflow includes:

- test job
- build job
- deploy job

The workflow automatically:

1. Validates documentation
2. Runs scripts
3. Builds the website
4. Deploys to GitHub Pages

---

# Deployment

The website is deployed automatically using:

- GitHub Actions
- GitHub Pages
- Eleventy

---

# Technologies

- Node.js
- GitHub Actions
- GitHub Pages
- Eleventy
- Markdown

---

# License

MIT License

---

# Repository URL

```text
https://github.com/fernandezdelacuestaalvaro-ai/ejemplo_git
```

---

# GitHub Pages URL

```text
https://fernandezdelacuestaalvaro-ai.github.io/ejemplo_git/
```