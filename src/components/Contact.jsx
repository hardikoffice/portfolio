import React from 'react';

const Contact = () => {
  return (
    <section className="py-48 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-12 gradient-text">LET'S START SOMETHING.</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a className="btn-stitch-large" href="mailto:contact@hardik.me">
            Get in touch
          </a>
          <a className="bg-white text-on-surface px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-50 transition-colors border border-black/10 w-full md:w-auto" href="https://github.com/hardikoffice" target="_blank" rel="noreferrer">
            View GitHub
          </a>
        </div>
      </div>
      
      <footer className="w-full py-12 border-t border-zinc-200/50 bg-zinc-50 mt-48">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xs font-sans tracking-wide uppercase text-zinc-900 font-bold">Hardik Sharma</span>
            <p className="text-zinc-600 text-xs font-sans tracking-wide uppercase">© 2024 Hardik Sharma. Built with NIT Jalandhar spirit.</p>
          </div>
          <div className="flex gap-8">
            <a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs font-sans tracking-wide uppercase" href="https://github.com/hardikoffice" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs font-sans tracking-wide uppercase" href="https://www.linkedin.com/in/hardik-sharma26/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs font-sans tracking-wide uppercase" href="#">Twitter</a>
            <a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs font-sans tracking-wide uppercase" href="https://kordexlabscloudfare.pages.dev/">KordexLabs</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
