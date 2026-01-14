
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.heroGallery.length);
    }, 8000); // Crossfade every 8 seconds
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 ken-burns">
              <img 
                src={IMAGES.heroGallery[currentIndex]} 
                alt="A peaceful glimpse of Chester" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[1px]" />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-7xl text-white font-serif mb-6 leading-tight drop-shadow-sm">
            At The Cross Café
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 font-light mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            A sanctuary of coffee, cake and calm — nestled within a historic church at the heart of Chester.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollTo('visit')}
              className="w-full sm:w-auto px-10 py-4 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Visit Us
            </button>
            <button 
              onClick={() => scrollTo('menu')}
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/40 text-white backdrop-blur-md rounded-full font-medium hover:bg-white/10 transition-all"
            >
              See the Menu
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {IMAGES.heroGallery.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 transition-all duration-500 rounded-full ${
              idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
