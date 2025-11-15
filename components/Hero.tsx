import React from 'react';
import { motion, Variants, useMotionValue, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import AnimatedSection from './AnimatedSection';
import { MailIcon, ChevronDownIcon } from './Icons';
import BackgroundShapes from './BackgroundShapes';

const Hero: React.FC = () => {
    // 3D Tilt Effect Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };
    
    const handleScrollDown = () => {
        const aboutSection = document.getElementById('section-about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    };
    
    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
    };
    
    // Letter-by-letter animation
    const headlineText = "I build exceptional digital experiences.";
    const sentenceVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.03, // Faster stagger
            },
        },
    };
    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <AnimatedSection id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
            <BackgroundShapes />
            <div className="flex-grow flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="relative z-10 w-full">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:justify-center">
                        <motion.div
                            className="order-2 md:order-1 text-center md:text-left"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="space-y-4 md:space-y-5">
                                <motion.h1 
                                    variants={itemVariants}
                                    className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">{PERSONAL_INFO.name}</span>
                                </motion.h1>

                                <motion.p 
                                    variants={itemVariants}
                                    className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold"
                                >
                                    {PERSONAL_INFO.title}
                                </motion.p>

                                <motion.h2 
                                    variants={sentenceVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 tracking-tight"
                                >
                                    {headlineText.split("").map((char, index) => (
                                        <motion.span key={char + "-" + index} variants={letterVariants}>
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.h2>

                                <motion.p 
                                    variants={itemVariants}
                                    className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed mx-auto md:mx-0"
                                >
                                    From {PERSONAL_INFO.location}, I transform ideas into responsive and performant web applications that engage users and drive results.
                                </motion.p>
                            </div>
                            <motion.div 
                                variants={itemVariants}
                                className="mt-8 sm:mt-10 flex items-center justify-center md:justify-start"
                            >
                                <motion.a
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Inquiry%20from%20your%20Portfolio`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-[#161616] border border-yellow-400/60 text-gray-300 font-bold rounded-lg hover:border-yellow-400 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d1a] tracking-wider"
                                    whileHover={{ y: -4, scale: 1.05, boxShadow: '0 0 25px rgba(253, 224, 71, 0.2)' }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <MailIcon className="w-5 h-5 mr-3 text-yellow-400 transition-transform duration-300 group-hover:-rotate-12" />
                                    <span className="text-base md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 group-hover:from-yellow-300 group-hover:to-yellow-400 transition-all duration-300">
                                        Get In Touch
                                    </span>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="order-1 md:order-2"
                            style={{ perspective: 1000 }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 80 }}
                        >
                            <motion.div 
                                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto group"
                                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                             >
                                <motion.div
                                  className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-400/20"
                                  style={{ animation: 'subtle-breath 4s ease-in-out infinite' }}
                                  animate={{ rotate: 30 }}
                                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                                />
                                <motion.div
                                  className="absolute inset-2 rounded-full border-2 border-yellow-400/30"
                                  style={{ animation: 'subtle-breath 4s ease-in-out infinite reverse' }}
                                  animate={{ rotate: -30 }}
                                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                />
                                <img
                                    src={PERSONAL_INFO.imageUrl}
                                    alt={PERSONAL_INFO.name}
                                    className="relative rounded-full shadow-2xl object-cover object-top w-full h-full p-4 image-glow"
                                    loading="lazy"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="w-full text-center pb-4">
              <button
                  onClick={handleScrollDown}
                  className="p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-full inline-block"
                  aria-label="Scroll to next section"
              >
                  <ChevronDownIcon 
                    className="w-8 h-8 text-gray-600 hover:text-yellow-400 transition-colors"
                    style={{ animation: 'scroll-indicator 2s infinite' }} 
                  />
              </button>
            </div>
        </AnimatedSection>
    );
};

export default Hero;