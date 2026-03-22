import React from 'react';

const About = () => {
  return (
    <section className="py-32 px-6 bg-surface-container/50" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <span className="text-on-surface-variant font-semibold tracking-widest text-xs uppercase block mb-6">Core Stack</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-12">CLEAN CODE.<br/>EFFICIENT DESIGN.</h2>
          <div className="flex flex-wrap gap-3">
            {['React.js', 'Node.js', 'Python', 'C / C++', 'Tailwind CSS'].map((skill) => (
              <span key={skill} className="px-5 py-2 bg-white rounded-full border border-black/5 shadow-sm text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-apple transition-shadow">
            <h3 className="text-xl font-bold mb-3">Frontend Architecture</h3>
            <p className="text-on-surface-variant leading-relaxed">Crafting responsive, accessible, and high-performance user interfaces with a focus on seamless interactions and modern aesthetics.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-apple transition-shadow">
            <h3 className="text-xl font-bold mb-3">Backend & Systems</h3>
            <p className="text-on-surface-variant leading-relaxed">Developing robust server-side logic and scalable database schemas using Node.js and Python for complex data-driven applications.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-apple transition-shadow">
            <h3 className="text-xl font-bold mb-3">Algorithms</h3>
            <p className="text-on-surface-variant leading-relaxed">Leveraging C for performance-critical components and deep-diving into data structures to solve complex computational challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
