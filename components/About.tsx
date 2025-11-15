import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <AnimatedSection id="section-about">
      <SectionTitle>About Me</SectionTitle>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-yellow-400/30 rounded-lg z-0 transform transition-transform group-hover:rotate-3"></div>
            <img
              src={PERSONAL_INFO.imageUrl}
              alt={PERSONAL_INFO.name}
              className="relative rounded-lg shadow-2xl object-cover object-top w-full h-auto aspect-[4/5]"
            />
          </motion.div>
          
          <div className="order-2 md:order-1">
            <div className="relative pl-6 sm:pl-8 border-l-4 border-yellow-400/80 space-y-6">
              {PERSONAL_INFO.about.map((paragraph, index) => (
                   <p key={index} className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {paragraph}
                   </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default React.memo(About);