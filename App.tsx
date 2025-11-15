import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Citations from './components/Citations';
import Preloader from './components/Preloader';
import AestheticBorder from './components/AestheticBorder';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="bg-transparent text-gray-300 font-sans">
          <AestheticBorder />
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Experience />
            <Citations />
            <Skills />
            <Projects />
            <Education />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;