import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const portfolioText = "PORTFOLIO";

const preloaderVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' }
  }
};

const textContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
};

const portfolioLetterVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', damping: 15, stiffness: 100 },
  },
};

const nameVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            delay: (portfolioText.length * 0.08) + 0.4 
        }
    }
};

const Preloader = () => (
  <motion.div
    className="fixed inset-0 bg-[#0d0d1a] bg-[radial-gradient(ellipse_at_center,_rgba(120,_113,_222,_0.1),_transparent_70%)] flex items-center justify-center z-[100] p-4"
    variants={preloaderVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <div className="w-full max-w-md mx-auto text-center">
        <motion.div 
            className="flex items-center justify-center"
            initial="hidden"
            animate="visible"
        >
            <motion.h1
              className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black tracking-[0.2em] sm:tracking-[0.3em] text-center"
              variants={textContainerVariants}
            >
              {portfolioText.split("").map((char, index) => (
                <motion.span 
                    key={index} 
                    variants={portfolioLetterVariants} 
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
        </motion.div>

        <motion.p
            className="font-sans text-sm sm:text-base text-gray-400 mt-2 tracking-[0.2em] uppercase"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
        >
            {PERSONAL_INFO.name}
        </motion.p>
    </div>
  </motion.div>
);

export default Preloader;