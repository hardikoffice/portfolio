import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 apple-blur border-b border-black/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a className="text-lg font-bold tracking-tighter text-zinc-900" href="#">
          HARDIK SHARMA
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-zinc-500 hover:text-zinc-800 transition-colors text-sm font-medium" href="#work">Work</a>
          <a className="text-zinc-500 hover:text-zinc-800 transition-colors text-sm font-medium" href="#about">Stack</a>
          <a className="text-zinc-500 hover:text-zinc-800 transition-colors text-sm font-medium" href="https://github.com/hardikoffice" target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-zinc-500 hover:text-zinc-800 transition-colors text-sm font-medium" href="https://www.linkedin.com/in/hardik-sharma26/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <a className="btn-stitch-primary" href="mailto:contact@hardik.me">
          Connect
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
