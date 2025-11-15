import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return (
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold mb-12 md:mb-16 text-center relative tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400">
            {children}
            <motion.span 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ transformOrigin: 'center' }}
            ></motion.span>
        </h2>
    );
};

export default SectionTitle;