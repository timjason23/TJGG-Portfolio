import React from 'react';
// FIX: Import specific types from framer-motion to correctly type component props.
import { motion, Target, Transition } from 'framer-motion';

const Shape: React.FC<{ 
    className?: string; 
    // FIX: Use specific types for framer-motion animation properties instead of generic 'object'.
    initial: Target; 
    animate: Target; 
    transition: Transition; 
}> = ({ className, initial, animate, transition }) => (
    <motion.div
        className={`absolute blur-2xl opacity-20 md:opacity-15 rounded-full ${className}`}
        initial={initial}
        animate={animate}
        transition={transition}
    />
);

const BackgroundShapes = () => {
    // FIX: Add 'as const' to the shapes array to ensure TypeScript infers the correct literal types for properties like 'repeatType', preventing type widening to 'string'.
    const shapes = [
        {
            className: 'w-64 h-64 md:w-96 md:h-96 bg-purple-500/50',
            initial: { y: '-20%', x: '-20%' },
            animate: { y: '20%', x: '20%' },
            transition: { duration: 15, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
        },
        {
            className: 'w-48 h-48 md:w-72 md:h-72 bg-yellow-400/50',
            initial: { y: '50%', x: '80%' },
            animate: { y: '30%', x: '60%' },
            transition: { duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
        },
        {
            className: 'w-24 h-24 md:w-48 md:h-48 bg-purple-500/40',
            initial: { y: '80%', x: '10%' },
            animate: { y: '100%', x: '30%' },
            transition: { duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
        }
    ] as const;

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {shapes.map((shape, index) => (
                <Shape key={index} {...shape} />
            ))}
        </div>
    );
};

export default BackgroundShapes;
