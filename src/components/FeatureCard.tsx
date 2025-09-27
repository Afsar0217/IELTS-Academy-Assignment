import React from 'react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { FaMicrophone, FaClipboardList, FaChartLine, FaUserGraduate, FaChalkboardTeacher, FaClock } from 'react-icons/fa';

interface FeatureCardProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: string;
    learnMoreUrl?: string;
  };
  index: number;
}

const iconMap: Record<string, IconType> = {
  FaMicrophone,
  FaClipboardList,
  FaChartLine,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClock,
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const IconComponent = iconMap[feature.icon] || FaMicrophone;

  const handleLearnMore = () => {
    if (feature.learnMoreUrl) {
      const element = document.querySelector(feature.learnMoreUrl);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card p-8 h-full group cursor-pointer"
      onClick={handleLearnMore}
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
        >
          <IconComponent className="text-white text-2xl" />
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {feature.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {feature.description}
          </p>
        </div>

        {/* Learn More Link */}
        {feature.learnMoreUrl && (
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300"
          >
            <span>Learn More</span>
            <motion.svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.div>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-success-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default FeatureCard;
