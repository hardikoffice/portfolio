import React from 'react';

const Projects = () => {
  return (
    <section className="py-32 px-6" id="work">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-on-surface-variant font-semibold tracking-widest text-xs uppercase block mb-4">Featured Project</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">KordexLabs</h2>
        </div>
        
        <a className="block group" href="https://kordexlabscloudfare.pages.dev/" target="_blank" rel="noreferrer">
          <div className="relative aspect-[21/9] overflow-hidden bg-white rounded-2xl border border-black/5 shadow-apple transition-all duration-700 group-hover:shadow-apple-hover">
            <img 
              alt="KordexLabs Dashboard Interface" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.01]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4ZnTszE-POZEkyFUxWkNxvKIz1d2qlsk1kTCjZJOXqwt_c46dm3m_Y5U4kR8JdZ5UUEkF2mPEmgWK6ch4RZoBAL6bb20U35cRC-lLVxtvAGLHNwKyubfGLsPPEhGD4eS6gJ7gKRuw3-NMPbT45TqO9dUPSAUmQeua6QjGxGJmzwwL2kRD7AFrCQjhS-UcOT490PJci5ivXcDtixvDKg9S7OMSx8hOEZICM6Zhd4PIQmbqeBdowVOALEJo1v02c09iAhHe2VyXQHw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-xl text-left">
                <p className="text-on-surface text-xl md:text-2xl font-medium leading-relaxed">
                  A high-performance AI analytics platform providing real-time data insights and predictive modeling.
                </p>
              </div>
              <span className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-colors group-hover:bg-zinc-800 whitespace-nowrap">
                Launch Site <span className="material-symbols-outlined text-sm">open_in_new</span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
