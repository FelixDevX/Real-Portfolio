import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A professional portfolio website built with React.js, Tailwind CSS, and Framer Motion to showcase skills and projects. Features a modern dark UI, responsive design, and smooth animations.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://lnkd.in/g-8rMTfk',
    live: 'https://lnkd.in/gBXnejsa',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Vortex Website Rebranding',
    description: 'A complete rebranding and development of the Vortex website using React and Node.js. Implemented secure API integration, user authentication, and a responsive UI for seamless experience.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://lnkd.in/g_MK7y6D',
    live: 'https://lnkd.in/gstKdUqE',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400">Some of my best work.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium bg-slate-800 text-cyan-300 rounded border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium">
                      <Github size={18} /> Code
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://github.com/FelixDevX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors border border-slate-700">
              <Github size={18} /> View More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
