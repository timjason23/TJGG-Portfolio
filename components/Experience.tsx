import React, { useState, useMemo } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { EXPERIENCE, GALLERY_IMAGES } from '../constants';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { CameraIcon } from './Icons';

const timelineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = (isRightSide: boolean): Variants => ({
  hidden: { opacity: 0, x: isRightSide ? 50 : -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
});

const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: { 
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20
        }
    }
}

const ChevronIcon = ({ open }: { open: boolean }) => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-2 transition-transform flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </motion.svg>
);


const Experience: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const rotations = ['rotate-2', '-rotate-3', 'rotate-1', '-rotate-2', 'rotate-3', '-rotate-1'];
  
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(GALLERY_IMAGES.map(img => img.category))];
    return ['All', ...uniqueCategories];
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <AnimatedSection id="experience">
      <SectionTitle>Leadership &amp; Experience</SectionTitle>
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <motion.div 
            className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-700"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
        ></motion.div>

        <motion.div 
            className="space-y-12 md:space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={timelineVariants}
        >
            {EXPERIENCE.map((exp, index) => {
              const isRightSide = index % 2 === 0;
              return (
                <motion.div 
                    key={index} 
                    className="relative md:grid md:grid-cols-2 md:gap-x-8 items-start"
                    variants={itemVariants(isRightSide)}
                >
                    {/* Dot */}
                    <motion.div 
                        className="absolute left-4 top-1 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-[#111111] z-10"
                        variants={dotVariants}
                    ></motion.div>
                    
                    {/* Content */}
                    <div className={`pl-10 md:pl-0 ${isRightSide ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}>
                        <p className="text-sm text-yellow-400 mb-1">{exp.period}</p>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-gray-400 mb-2">{exp.company} - {exp.location}</p>
                        <p className="text-gray-300 leading-relaxed text-sm">{exp.description}</p>
                    </div>
                </motion.div>
              );
            })}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 text-center">
          <motion.button
            onClick={() => setIsGalleryOpen(!isGalleryOpen)}
            className="inline-flex items-center justify-center text-center px-6 py-3 bg-[#161616] border border-yellow-400/60 text-gray-300 font-semibold rounded-lg hover:border-yellow-400 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d1a]"
            whileHover={{ y: -4, scale: 1.05, boxShadow: '0 0 25px rgba(253, 224, 71, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <CameraIcon className="w-5 h-5 mr-3 text-yellow-400 transition-colors flex-shrink-0" />
            <span className="text-base bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 group-hover:from-yellow-300 group-hover:to-yellow-400 transition-all duration-300">
                {isGalleryOpen ? 'Hide Moments' : 'Show Defining Moments'}
            </span>
            <ChevronIcon open={isGalleryOpen} />
          </motion.button>
          
          <AnimatePresence>
            {isGalleryOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '3rem' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <div className="bg-[#161616]/50 border border-gray-800 rounded-xl p-4 sm:p-8 hover:border-yellow-400/30 transition-colors duration-500 card-glow">
                        <div className="flex overflow-x-auto whitespace-nowrap justify-start md:justify-center gap-3 mb-8 py-2 mobile-scroll-x">
                            {categories.map(category => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors border-2 flex-shrink-0 ${
                                        activeCategory === category 
                                        ? 'bg-yellow-400/20 border-yellow-400 text-yellow-300' 
                                        : 'bg-gray-800/50 border-transparent hover:bg-gray-700/50 text-gray-400'
                                    }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                        
                        <motion.div 
                            layout
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                        >
                            <AnimatePresence>
                                {filteredImages.map((image, index) => (
                                    <motion.div
                                        key={image.src}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                                        className={`relative p-px aesthetic-gallery-border rounded-sm shadow-xl transition-all duration-300 hover:scale-105 hover:!rotate-0 hover:z-10 group ${rotations[index % rotations.length]}`}
                                    >
                                        <div className="bg-[#161616] rounded-sm p-2 pb-3 h-full flex flex-col">
                                            <div className="overflow-hidden rounded-sm bg-black relative">
                                                <img 
                                                    src={image.src} 
                                                    alt={image.caption} 
                                                    className="w-full h-full object-cover aspect-square transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-300 rounded-sm"></div>
                                            </div>
                                            <p className="mt-3 text-center text-xs text-gray-300 font-semibold tracking-wide">{image.caption}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </motion.div>
            )}
          </AnimatePresence>
      </div>

    </AnimatedSection>
  );
};

export default React.memo(Experience);