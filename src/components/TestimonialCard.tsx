import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    score: string;
    quote: string;
    imageUrl: string;
    rating: number;
  };
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'text-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card p-8 h-full group"
    >
      <div className="flex flex-col h-full">
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="text-primary-500 dark:text-primary-400 mb-4"
        >
          <FaQuoteLeft size={24} />
        </motion.div>

        {/* Quote */}
        <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1 text-lg">
          "{testimonial.quote}"
        </blockquote>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {renderStars(testimonial.rating)}
        </div>

        {/* Author Info */}
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0"
          >
            <img
              src={testimonial.imageUrl}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 dark:text-white truncate">
              {testimonial.name}
            </h4>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
              {testimonial.score}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-success-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default TestimonialCard;
