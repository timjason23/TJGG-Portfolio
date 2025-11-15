import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative border-t border-transparent">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 leading-tight">
              Let's build something great together.
            </h3>
            <p className="text-gray-500 mt-1 text-sm">
              Ready to bring your ideas to life?
            </p>
          </motion.div>
          <motion.div 
            className="text-gray-500 text-sm sm:text-right space-y-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Inquiry%20from%20your%20Portfolio`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors block"
            >
              {PERSONAL_INFO.email}
            </a>
            <p>&copy; {new Date().getFullYear()} Tim Jason G. Gonzales. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);