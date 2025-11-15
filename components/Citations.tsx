import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { CITATIONS } from '../constants';
import type { Citation } from '../types';
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

const CitationCard: React.FC<{ citation: Citation }> = ({ citation }) => {
    return (
      <motion.div 
        className="bg-[#161616] p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 hover:border-yellow-400/80 transition-all duration-300 hover:-translate-y-2 group flex flex-col card-glow"
        variants={cardVariants}
      >
        <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">{citation.title}</h3>
        <p className="text-gray-400 mt-1">{citation.issuer}</p>
        <p className="text-sm text-yellow-400 mt-2">{citation.date}</p>
        {citation.description && <p className="text-gray-300 leading-relaxed mt-4 flex-grow">{citation.description}</p>}
      </motion.div>
    );
  };

const Citations: React.FC = () => {
  return (
    <AnimatedSection id="citations">
      <SectionTitle>Citations &amp; Awards</SectionTitle>
      <motion.div 
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CITATIONS.map((citation, index) => (
          <CitationCard key={`${citation.title}-${index}`} citation={citation} />
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default React.memo(Citations);