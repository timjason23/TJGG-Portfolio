import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../constants';
import { FacebookIcon, GithubIcon, LinkedInIcon, CloseIcon, MailIcon } from './Icons';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const sidebarListVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const sidebarItemVariants: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

const logoTextVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const navClickInProgress = useRef(false);
    const navClickTimer = useRef<number | null>(null);

    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const scrollStopTimer = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Logic for background blur & logo change
            setIsScrolled(currentScrollY > 50);

            // Clear any existing timeout to reset the "stop" detection
            if (scrollStopTimer.current) {
                clearTimeout(scrollStopTimer.current);
            }

            // Show header if scrolling up OR if at the very top of the page
            if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
                setIsVisible(true);
            } else {
                // Hide header if scrolling down and away from the top
                setIsVisible(false);
            }
            
            // Set a timeout to make the header visible again when scrolling stops
            scrollStopTimer.current = window.setTimeout(() => {
                setIsVisible(true);
            }, 250); // A 250ms delay feels natural

            // Update the last scroll position for the next event
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        const sections = NAV_LINKS.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
        const heroSection = document.getElementById('hero');
        const allSectionsToObserve = [...sections];
        if (heroSection) {
            allSectionsToObserve.unshift(heroSection);
        }

        const observer = new IntersectionObserver((entries) => {
            if (navClickInProgress.current) return;
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-40% 0px -40% 0px' });

        allSectionsToObserve.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            allSectionsToObserve.forEach(section => {
                if (section) observer.unobserve(section);
            });
            if (navClickTimer.current) {
                clearTimeout(navClickTimer.current);
            }
            if (scrollStopTimer.current) {
                clearTimeout(scrollStopTimer.current);
            }
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);

        // Immediately update state and set a flag to ignore observer
        setActiveSection(targetId);
        navClickInProgress.current = true;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
        
        // Clear any previous timer
        if (navClickTimer.current) {
            clearTimeout(navClickTimer.current);
        }

        // After a delay, re-enable the observer
        navClickTimer.current = window.setTimeout(() => {
            navClickInProgress.current = false;
        }, 1000); // 1 second should be enough for smooth scroll to complete
    };

    return (
        <motion.header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' }
            }}
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a 
                        href="#hero" 
                        onClick={(e) => handleNavClick(e, '#hero')}
                        className="font-poppins text-xl sm:text-2xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-300 hover:saturate-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-md"
                        aria-label="Homepage"
                    >
                       <AnimatePresence mode="wait">
                            {!isScrolled ? (
                                <motion.span
                                    key="portfolio"
                                    variants={logoTextVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    PORTFOLIO
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="initials"
                                    variants={logoTextVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    TJGG
                                </motion.span>
                            )}
                       </AnimatePresence>
                    </a>
                    
                    {/* Desktop Nav */}
                    <nav 
                        className="hidden md:flex items-center space-x-8"
                    >
                        {NAV_LINKS.map(link => {
                            const isActive = activeSection === link.href.substring(1);
                            const linkClasses = `transition-colors project-link ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`;
                            return (
                                <a 
                                    key={link.href} 
                                    href={link.href} 
                                    onClick={(e) => handleNavClick(e, link.href)} 
                                    className={linkClasses}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>
                    
                    <div 
                        className="hidden md:flex items-center space-x-6"
                    >
                        <motion.a whileHover={{ y: -2 }} href={PERSONAL_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Facebook">
                            <FacebookIcon className="h-6 w-6" />
                        </motion.a>
                        <motion.a whileHover={{ y: -2 }} href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300" aria-label="GitHub">
                            <GithubIcon className="h-6 w-6" />
                        </motion.a>
                        <motion.a whileHover={{ y: -2 }} href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300" aria-label="LinkedIn">
                            <LinkedInIcon className="h-6 w-6" />
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-yellow-400" aria-label="Open menu">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav - Off-canvas sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        <motion.div
                            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 shadow-2xl z-50 flex flex-col md:hidden border-l border-gray-700/50"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                        >
                            {/* Sidebar Header */}
                            <div className="flex items-center justify-end p-5 border-b border-transparent">
                                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-yellow-400 p-1" aria-label="Close menu">
                                    <CloseIcon className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-grow overflow-y-auto px-6">
                                {/* Profile Section */}
                                <div className="text-center pb-8">
                                    <img src={PERSONAL_INFO.imageUrl} alt={PERSONAL_INFO.name} className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-yellow-400/80 object-cover object-top shadow-lg" />
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">{PERSONAL_INFO.name}</h3>
                                    <p className="text-xs sm:text-sm text-gray-400 mb-3">{PERSONAL_INFO.title}</p>
                                    <div className="flex items-center justify-center space-x-2 text-xs text-green-400">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <span>Available for Hire</span>
                                    </div>
                                </div>
                                
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mb-8"></div>


                                {/* Navigation */}
                                <nav>
                                    <motion.ul 
                                        className="flex flex-col items-start space-y-4"
                                        variants={sidebarListVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {NAV_LINKS.map(link => {
                                            const isActive = activeSection === link.href.substring(1);
                                            return (
                                                <motion.li key={link.href} className="w-full relative" variants={sidebarItemVariants}>
                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="active-sidebar-link"
                                                            className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-r-full"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                        />
                                                    )}
                                                    <a 
                                                        href={link.href} 
                                                        onClick={(e) => handleNavClick(e, link.href)} 
                                                        className={`w-full block transition-all duration-200 text-lg font-light tracking-wider py-2 pl-6 ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400 hover:translate-x-2'}`}
                                                    >
                                                        {link.label}
                                                    </a>
                                                </motion.li>
                                            );
                                        })}
                                    </motion.ul>
                                </nav>
                            </div>
                            
                            <div className="px-6 py-8 mt-auto">
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mb-8"></div>
                                
                                {/* Social Links */}
                                <div className="flex justify-center space-x-8 mb-8">
                                    <motion.a whileHover={{ y: -2, scale: 1.1 }} href={PERSONAL_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Facebook">
                                        <FacebookIcon className="h-8 w-8" />
                                    </motion.a>
                                    <motion.a whileHover={{ y: -2, scale: 1.1 }} href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300" aria-label="GitHub">
                                        <GithubIcon className="h-8 w-8" />
                                    </motion.a>
                                    <motion.a whileHover={{ y: -2, scale: 1.1 }} href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300" aria-label="LinkedIn">
                                        <LinkedInIcon className="h-8 w-8" />
                                    </motion.a>
                                </div>
                                <div className="flex items-center justify-center space-x-3 text-gray-500 hover:text-yellow-400 transition-colors text-sm">
                                    <MailIcon className="w-4 h-4" />
                                    <a 
                                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Inquiry%20from%20your%20Portfolio`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {PERSONAL_INFO.email}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;