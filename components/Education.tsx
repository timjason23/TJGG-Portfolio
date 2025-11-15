import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { EDUCATION } from '../constants';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Education: React.FC = () => {
  return (
    <AnimatedSection id="education">
      <SectionTitle>Education</SectionTitle>
      <motion.div 
        className="max-w-2xl mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {EDUCATION.map((edu, index) => (
          <motion.div 
            key={index} 
            className="bg-[#161616] p-6 md:p-8 rounded-lg border border-gray-800 text-center transition-all duration-300 hover:border-yellow-400/80 hover:-translate-y-2 card-glow group"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">{edu.degree}</h3>
            <p className="text-gray-400 mt-1 text-lg">{edu.institution}</p>
            <p className="text-sm text-yellow-400 mt-2">{edu.period}</p>
            <p className="text-gray-400 leading-relaxed mt-4">{edu.details}</p>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default React.memo(Education);