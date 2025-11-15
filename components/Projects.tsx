import React from 'react';
import type { Project } from '../types';
import { PROJECTS } from '../constants';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { GithubIcon } from './Icons';
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <motion.div 
            className="bg-[#161616] p-6 md:p-8 rounded-lg shadow-lg flex flex-col h-full border border-gray-800 hover:border-yellow-400/80 transition-all duration-300 hover:-translate-y-2 group card-glow"
            variants={cardVariants}
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">{project.title}</h3>
                {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors" aria-label="GitHub repository">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                )}
            </div>
            <p className="text-gray-400 leading-relaxed flex-grow mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-yellow-400/10 text-yellow-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
        </motion.div>
    )
}

const Projects: React.FC = () => {
    return (
        <AnimatedSection id="projects">
            <SectionTitle>Projects</SectionTitle>
            <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </motion.div>
        </AnimatedSection>
    );
};

export default React.memo(Projects);