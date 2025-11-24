# Muhammad Ukasha - Machine Learning Engineer Portfolio

A stunning, responsive portfolio website showcasing AI/ML projects, deep learning expertise, and data science skills. Built with Vite.js, React, TypeScript, Tailwind CSS, and Shadcn UI components.

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop)

## ✨ Features

- **Modern Tech Stack**: Built with Vite, React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Smooth Animations**: Framer Motion and custom CSS animations
- **Glassmorphism UI**: Modern glass-morphism effects throughout
- **ML Project Showcase**: Filterable gallery with detailed modals
- **Contact Form**: Fully functional contact form with validation
- **Performance Optimized**: Code splitting and lazy loading
- **SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed
- Git (optional)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd d:/portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Update Projects
Edit `src/lib/data.ts` - `projects` array with your ML/AI projects

### Update Skills
Edit `src/lib/data.ts` - `skills` array with your technical skills

### Update Experience
Edit `src/lib/data.ts` - `experiences` array with your work history

### Change Colors
Edit `src/index.css` - CSS variables in `:root` section

### Update Profile Image
Replace `public/profile.png` with your image

### Update Contact Info
- Email: 1718ukashae2@gmail.com
- Phone: +92 306 0255284
- GitHub: https://github.com/mukasha09
- LinkedIn: https://www.linkedin.com/in/mukasha09/

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile.png          # Profile image
│   └── vite.svg            # Favicon
├── src/
│   ├── components/
│   │   ├── ui/             # Shadcn UI components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Footer.tsx      # Footer
│   │   ├── Hero.tsx        # Landing section
│   │   ├── Navigation.tsx  # Header navigation
│   │   ├── ProjectCard.tsx # Project card
│   │   └── Projects.tsx    # Projects showcase
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── lib/
│   │   ├── data.ts         # Projects, skills, experience
│   │   └── utils.ts        # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 🛠️ Technologies Used

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS
- **Form Handling**: React Hooks

## 📊 Performance

- **Code Splitting**: Lazy loading for route components
- **Optimized Images**: Using Unsplash CDN with size parameters
- **Minimal Bundle**: Tree-shaking and minification
- **Fast Refresh**: Vite's lightning-fast HMR

## 📧 Contact

**Muhammad Ukasha** - Machine Learning Engineer

- Email: [1718ukashae2@gmail.com](mailto:1718ukashae2@gmail.com)
- GitHub: [@mukasha09](https://github.com/mukasha09)
- LinkedIn: [mukasha09](https://www.linkedin.com/in/mukasha09/)
- Phone: +92 306 0255284

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React and Tailwind CSS
