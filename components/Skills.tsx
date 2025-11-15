import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { SKILLS } from '../constants';
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


const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills">
      <SectionTitle>Skills</SectionTitle>
      <motion.div 
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SKILLS.map((skillCategory) => (
          <motion.div 
            key={skillCategory.category} 
            className="bg-[#161616] p-6 md:p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/80 card-glow group"
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-4 transition-colors duration-300">{skillCategory.category}</h3>
            <ul className="space-y-2">
              {skillCategory.items.map((skill) => (
                <li key={skill.name} className="text-gray-300">{skill.name}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default React.memo(Skills);