import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { fadeInUp, fadeInRight, staggerContainer } from '../utils/animations';

interface EmailFormData {
  email: string;
}

const Hero: React.FC = () => {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormData>();

  const onSubmit = async (data: EmailFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Email submitted:', data.email);
      setIsEmailSubmitted(true);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsEmailSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  const scrollToFeatures = () => {
    try {
      const featuresSection = document.querySelector('#features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error scrolling to features:', error);
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center"
          alt="Students studying for IELTS"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-gray-900/80 dark:via-gray-900/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isIntersecting ? "animate" : "initial"}
            className="space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight"
            >
              Ace Your{' '}
              <span className="text-green-600 dark:text-green-400">IELTS</span>{' '}
              with Elite Academy
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Personalized AI-powered prep for Band 9 scores. Join thousands of successful students who achieved their dream scores.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToFeatures}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group"
              >
                Get Started Free
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Email Signup Form */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Get your free study plan
              </h3>
              
              {isEmailSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center text-success-600 dark:text-success-400"
                >
                  <FaCheck className="mr-2" />
                  <span className="font-medium">Check your email for your personalized study plan!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Plan'}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center">
                <FaCheck className="text-success-500 mr-2" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-success-500 mr-2" />
                <span>95% Success Rate</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-success-500 mr-2" />
                <span>Free Trial</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate={isIntersecting ? "animate" : "initial"}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                alt="IELTS preparation success"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
              
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">9.2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Band Score</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl font-bold text-success-600 dark:text-success-400">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
