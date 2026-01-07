import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CAROUSEL_SLIDES } from '../constants';

const { Link } = ReactRouterDOM;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    zIndex: 0,
    opacity: 1 // Ensure no fade, just slide
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 1
  })
};

const Hero: React.FC = () => {
  // We use a tuple [page, direction] to track the absolute page index and the direction of animation
  const [[page, direction], setPage] = useState([0, 0]);

  // Calculate the current slide index (0 to length-1) based on the absolute page number
  const slideIndex = ((page % CAROUSEL_SLIDES.length) + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length;
  
  const slide = CAROUSEL_SLIDES[slideIndex];

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [paginate]);

  const handleDotClick = (index: number) => {
      // Calculate simplest direction to target
      const diff = index - slideIndex;
      if (diff === 0) return;
      setPage([page + diff, diff > 0 ? 1 : -1]);
  };

  return (
    <div className="relative h-[600px] lg:h-[700px] w-full overflow-hidden bg-slate-900">
      
      {/* Background Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 z-0"
        >
          {/* Overlay gradient included in the slide so it moves with the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30 z-10" />
          <img
            src={slide.imageUrl}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Text Content */}
        <div className="max-w-3xl">
          <AnimatePresence mode='wait'>
            <motion.div 
                key={page} // Using page ensures text refreshes even if content somehow was same (unlikely)
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-start"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
                    {slide.title}
                </h1>

                <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl drop-shadow-md">
                    {slide.subtitle}
                </p>

                {slide.tuitionId && (
                    <Link 
                        to={`/tuitions/${slide.tuitionId}`}
                        className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-primary-500/30 hover:-translate-y-1 group backdrop-blur-sm bg-opacity-90"
                    >
                        {slide.buttonText || "View Details"}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {CAROUSEL_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === slideIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;