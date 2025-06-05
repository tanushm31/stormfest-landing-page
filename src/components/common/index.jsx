import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ children, className, id, ...props }) => (
  <motion.section
    as="section"
    id={id}
    className={`py-12 md:py-16 lg:py-20 ${className || ''}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </motion.section>
);

export const GradientText = ({ children, className }) => (
  <span className={`bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);