# Cornell High Frequency Trading Club Website

A modern website for the Cornell High Frequency Trading Club (Cornell HFTC), built with Next.js and optimized for GitHub Pages deployment.

## Features

- **Home Page**: Welcome section with club overview and key activities
- **About Us**: Detailed information about the club's mission and focus areas
- **Members**: Showcase of club members and their roles
- **Modern UI**: Clean, professional design with responsive layout

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
```

This will create an `out` directory with static files ready for deployment.

## GitHub Pages Deployment

1. Build the static site:
   ```bash
   npm run build
   ```

2. The `out` directory contains all static files.

3. Configure GitHub Pages to serve from the `out` directory (or deploy the `out` folder contents to the `gh-pages` branch).

### If deploying to a subdirectory

If your repository name is not the root (e.g., `username.github.io/repo-name`), update `next.config.js`:

```javascript
basePath: '/repo-name',
assetPrefix: '/repo-name',
```

Then rebuild the site.

## Project Structure

```
.
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── about/
│   │   └── page.tsx    # About page
│   └── members/
│       └── page.tsx    # Members page
├── components/
│   └── Navigation.tsx  # Navigation component
└── next.config.js      # Next.js configuration
```

## Customization

- Update member information in `app/members/page.tsx`
- Modify club information in `app/page.tsx` and `app/about/page.tsx`
- Adjust styling in `app/globals.css`
- Update metadata in `app/layout.tsx`

## Technologies

- Next.js 14
- React 18
- TypeScript
- CSS (no external dependencies)

