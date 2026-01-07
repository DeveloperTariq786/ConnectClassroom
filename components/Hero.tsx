import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CAROUSEL_SLIDES } from '../constants';

const { Link } = ReactRouterDOM;

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const slide = CAROUSEL_SLIDES[currentSlide];

  return (
    <div className="relative h-[600px] lg:h-[700px] w-full overflow-hidden bg-slate-900">
      
      {/* Carousel Images */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30 z-10" />
          <img
            src={slide.imageUrl}
            alt="Hero Background"
            className="w-full h-full object-cover object-center transform scale-105"
            style={{ filter: 'brightness(0.8)' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Text Content */}
        <div className="max-w-3xl">
          <AnimatePresence mode='wait'>
            <div className="overflow-hidden">
                <motion.h1
                key={`title-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight"
                >
                {slide.title}
                </motion.h1>
            </div>

            <div className="overflow-hidden">
                <motion.p
                key={`sub-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl"
                >
                {slide.subtitle}
                </motion.p>
            </div>

            {/* Button */}
            {slide.tuitionId && (
                 <motion.div
                    key={`btn-${currentSlide}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                 >
                    <Link 
                        to={`/tuitions/${slide.tuitionId}`}
                        className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-primary-500/30 hover:-translate-y-1 group"
                    >
                        {slide.buttonText || "View Details"}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {CAROUSEL_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;