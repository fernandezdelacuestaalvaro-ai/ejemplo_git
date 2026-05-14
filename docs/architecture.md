# Architecture

## Project Structure

This project uses:

- GitHub Actions
- GitHub Pages
- Eleventy
- Node.js

## Main Directories

### docs

Contains markdown documentation.

### script

Contains validation scripts.

### src

Contains layouts, CSS, JavaScript and static assets.

### .github/workflows

Contains CI/CD workflows.

## Deployment Flow

1. Push to main
2. GitHub Actions runs tests
3. Build job generates static site
4. Deploy job publishes to GitHub Pages