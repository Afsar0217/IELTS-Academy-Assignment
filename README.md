# Elite IELTS Academy - Professional React.js Homepage

A high-quality, professional React.js application for Elite IELTS Academy, a fictional IELTS preparation institute. This project showcases modern React development skills, TypeScript, accessibility, performance optimizations, and real-world best practices.

![Elite IELTS Academy](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop&crop=center)

## 🚀 Live Demo

**[View Live Demo](https://your-username.github.io/elite-ielts-academy)**

## ✨ Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Complete dark/light theme with system preference detection
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Lazy loading, memoization, and code splitting
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Animations**: Smooth micro-interactions with Framer Motion

### Sections
- **Hero Section**: Compelling headline with email signup form
- **Features Section**: Dynamic data loading with 6 key features
- **Testimonials**: Carousel with student success stories
- **Footer**: Contact information and newsletter signup

### Technical Highlights
- **React 18+**: Concurrent rendering and Suspense
- **Custom Hooks**: useScroll, useTheme, useIntersectionObserver
- **Context API**: Global theme management
- **Form Handling**: React Hook Form with validation
- **Mock API**: Simulated data loading with realistic delays
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: React Hook Form
- **Testing**: Vitest + React Testing Library
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/elite-ielts-academy.git
   cd elite-ielts-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deployment

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run lint         # Check code quality
npm run format       # Format code
```

### Production Build
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### GitHub Pages Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch and "/ (root)" folder
   - Save the settings

3. **Automated deployment with GitHub Actions** (Optional)
   - The project includes a GitHub Actions workflow for automatic deployment
   - Push to main branch to trigger deployment

## 🎨 Customization

### Colors & Theming
The color scheme is defined in `tailwind.config.js`:
- Primary: Blue (#1e40af)
- Success: Green (#10b981)
- Dark mode colors are automatically generated

### Content Updates
- **Features**: Edit `public/features.json`
- **Testimonials**: Edit `public/testimonials.json`
- **Contact Info**: Update `src/components/Footer.tsx`

### Adding New Sections
1. Create component in `src/components/`
2. Add to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
npm run test         # Run all tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
```

### Test Structure
- **Unit Tests**: Component behavior and props
- **Integration Tests**: Theme context and hooks
- **Accessibility Tests**: Keyboard navigation and ARIA labels

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects user preferences

## 🚀 Performance Optimizations

- **Code Splitting**: Lazy loading of components
- **Image Optimization**: Lazy loading and proper sizing
- **Bundle Analysis**: Optimized bundle size
- **Memoization**: React.memo for expensive components
- **Efficient Re-renders**: Optimized state management

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Development Guidelines

### Code Style
- ESLint with Airbnb configuration
- Prettier for code formatting
- TypeScript strict mode enabled

### Component Structure
```
src/
├── components/          # Reusable UI components
├── contexts/           # React Context providers
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── assets/             # Static assets and mock data
```

### Best Practices
- Use functional components with hooks
- Implement proper error boundaries
- Follow accessibility guidelines
- Write meaningful tests
- Document complex logic

## 📊 Performance Metrics

Target Lighthouse scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [Unsplash](https://unsplash.com/) - Images

## 📞 Support

For support, email info@eliteielts.com or create an issue in the repository.

---

**Built with ❤️ for the React community**

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/your-username/elite-ielts-academy.git
cd elite-ielts-academy
npm install

# Start development
npm run dev

# Build for production
npm run build
```

**Ready to deploy to GitHub Pages!** 🎉