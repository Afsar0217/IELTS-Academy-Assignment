import React, { Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load components for better performance
const LazyFeatures = React.lazy(() => import('./components/Features'));
const LazyTestimonials = React.lazy(() => import('./components/Testimonials'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main>
          <Hero />
          
          <Suspense fallback={<LoadingSpinner />}>
            <LazyFeatures />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <LazyTestimonials />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;