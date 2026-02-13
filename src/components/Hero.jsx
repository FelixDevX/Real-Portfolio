import { motion } from 'framer-motion';
import { ArrowRight, Eye, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] -z-10"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
            Welcome to my Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Felix Y Lingam</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-2 font-light">
            Full Stack Developer
          </p>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            Building modern, scalable, and user-centric web applications using React and Node.js.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Felix Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-all border border-slate-700 flex items-center gap-2">
              View Resume
              <Eye size={18} />
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white rounded-full font-semibold transition-all border border-slate-700 flex items-center gap-2">
              Contact Me
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
