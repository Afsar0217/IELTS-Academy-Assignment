import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';
import { loadTestimonials } from '../utils/dataLoader';
import type { TestimonialsData } from '../types/testimonial.types';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Testimonials: React.FC = () => {
  const [testimonialsData, setTestimonialsData] = useState<TestimonialsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await loadTestimonials();
        setTestimonialsData(data);
      } catch (err) {
        setError('Failed to load testimonials. Please try again later.');
        console.error('Error loading testimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    if (testimonialsData) {
      setCurrentSlide((prev) => 
        prev === testimonialsData.testimonials.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (testimonialsData) {
      setCurrentSlide((prev) => 
        prev === 0 ? testimonialsData.testimonials.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <section id="testimonials" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex items-center justify-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="text-primary-600 dark:text-primary-400"
            >
              <FaSpinner size={32} />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="testimonials" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Unable to load testimonials
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6"
          >
            What Our{' '}
            <span className="gradient-text">Students Say</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Here's what our successful students have to say about their IELTS journey with us.
          </motion.p>
        </motion.div>

        {testimonialsData && (
          <>
            {/* Desktop Grid View */}
            <div className="hidden lg:block">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {testimonialsData.testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>

            {/* Mobile/Tablet Carousel */}
            <div className="lg:hidden">
              <div className="relative">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="px-4"
                >
                  <TestimonialCard
                    testimonial={testimonialsData.testimonials[currentSlide]}
                    index={0}
                  />
                </motion.div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="text-gray-600 dark:text-gray-400" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonialsData.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentSlide
                        ? 'bg-primary-600 dark:bg-primary-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-success-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">Successful Students</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-lg opacity-90">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
