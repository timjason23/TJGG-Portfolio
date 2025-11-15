import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';
import { MailIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="text-center">
      <SectionTitle>Get In Touch</SectionTitle>
      <p className="max-w-xl mx-auto text-gray-300 mb-8 text-lg leading-relaxed">
        I'm always interested in new projects and opportunities. Whether you have a question or just want to say hello, my inbox is always open.
      </p>
      <motion.a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Inquiry%20from%20your%20Portfolio`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-3 bg-[#161616] border border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] shimmer-button group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MailIcon className="w-5 h-5 mr-3" />
        <span>{PERSONAL_INFO.email}</span>
      </motion.a>
    </AnimatedSection>
  );
};

export default React.memo(Contact);