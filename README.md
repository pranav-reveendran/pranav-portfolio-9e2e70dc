
# Data Engineering Portfolio

A modern, interactive data engineering portfolio website featuring dynamic visualizations, particle effects, and responsive design.

## Project info

**URL**: https://lovable.dev/projects/a418fa08-7968-4e2f-9eb2-f4bd8c486ad1

## Features

- Interactive data visualizations using Recharts
- Animated skill showcase
- Dynamic particle background
- Material Design color theme
- Responsive layout for all devices
- GitHub Pages deployment ready

## Deployment Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `insight-portfolio-haven` (or any name you prefer)
4. Choose public visibility
5. Click "Create repository"

### 2. Push Your Code to GitHub

Run the following commands in your project directory:

```bash
# Initialize git repository (if not already done)
git init

# Add all files to staging
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/insight-portfolio-haven.git

# Push code to main branch
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The GitHub Actions workflow will automatically build and deploy your site

After deployment, your site will be available at: `https://USERNAME.github.io/insight-portfolio-haven/`

## Development

```bash
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- Vite
- TypeScript
- React
- Tailwind CSS
- shadcn/ui
- React Router
- Recharts for data visualization
- Particles.js for background effects
- React Query for data fetching
