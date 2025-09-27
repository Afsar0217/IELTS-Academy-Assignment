import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';
import FeatureCard from './FeatureCard';
import { loadFeatures } from '../utils/dataLoader';
import type { FeaturesData } from '../types/feature.types';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Features: React.FC = () => {
  const [featuresData, setFeaturesData] = useState<FeaturesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        setLoading(true);
        const data = await loadFeatures();
        setFeaturesData(data);
      } catch (err) {
        setError('Failed to load features. Please try again later.');
        console.error('Error loading features:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <section id="features" className="section-padding bg-gray-50 dark:bg-gray-800">
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
      <section id="features" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Unable to load features
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
    <section id="features" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            Why Choose{' '}
            <span className="gradient-text">Elite IELTS Academy</span>?
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our comprehensive approach combines cutting-edge AI technology with expert guidance 
            to help you achieve your target band score efficiently and effectively.
          </motion.p>
        </motion.div>

        {featuresData && (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuresData.features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
              />
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your IELTS Journey?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students and get personalized guidance to achieve your target band score.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const aboutSection = document.querySelector('#about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
