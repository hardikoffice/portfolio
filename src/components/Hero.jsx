import React from 'react';
import { motion } from 'framer-motion';
import hardikPhoto from '../assets/hardik.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden bg-surface">
      <div className="max-w-5xl w-full mx-auto text-center pt-20 flex flex-col items-center">
        
        {/* Animated Introduction Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          className="mb-12 relative group"
        >
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-8 border-white shadow-apple relative z-10 -rotate-2 group-hover:rotate-0 transition-transform duration-700">
            <img 
              src={hardikPhoto} 
              alt="Hardik Sharma" 
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-zinc-900/5 blur-xl rounded-full -z-10"></div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-zinc-900/5 blur-xl rounded-full -z-10"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col gap-4 mb-8"
        >
          <p className="text-on-surface-variant font-medium tracking-tight text-lg mb-0 text-center">Student at NIT Jalandhar</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] gradient-text text-center">
            BUILDING THE<br/>FUTURE OF WEB
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-10"
        >
          <p className="max-w-2xl text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light text-center">
            Hi, I'm <span className="font-bold text-on-surface">Hardik Sharma</span>. Focused on creating high-performance digital experiences with React, Node.js, Python, and C.
          </p>
          <div className="flex gap-4">
            <a className="flex items-center gap-2 text-on-surface group font-medium" href="#work">
              View Projects
              <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">arrow_downward</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
