import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        const onMouseEnter = () => {
             if (cursorRef.current) {
                cursorRef.current.classList.add('hovered');
            }
        }
        const onMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.classList.remove('hovered');
            }
        }

        document.addEventListener('mousemove', onMouseMove);
        // A small delay to ensure all interactive elements are in the DOM
        const timer = setTimeout(() => {
            const interactiveElements = document.querySelectorAll('a, button, select');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', onMouseEnter);
                el.addEventListener('mouseleave', onMouseLeave);
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousemove', onMouseMove);
            const interactiveElements = document.querySelectorAll('a, button, select');
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor hidden md:block"></div>;
};

export default CustomCursor;