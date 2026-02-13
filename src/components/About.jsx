import { motion } from 'framer-motion';
import { User, Code, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img
                  src="/profile.jpg"
                  alt="Felix Y Lingam"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
                />
              </div>
            </div>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">Felix Y Lingam</span>, a passionate <span className="text-cyan-400">Full Stack Developer</span> and a Computer Science Engineering student at <span className="text-white">Jain College of Engineering, Belagavi</span>.
              </p>
              <p>
                My journey in tech is driven by a curiosity to build scalable and efficient web solutions. I love turning complex problems into simple, beautiful, and intuitive interface designs.
              </p>
              <p>
                Beyond coding, I have demonstrated leadership as the <span className="text-purple-400">Coordinator of the Fine Arts Club</span>, organizing events that foster creativity and collaboration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors group">
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-white">Web Dev</h3>
                  </div>
                  <p className="text-slate-400 text-sm">Building responsive & modern apps.</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors group">
                  <div className="flex items-center gap-3 mb-2">
                    <Palette className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-white">Design</h3>
                  </div>
                  <p className="text-slate-400 text-sm">Blending tech with artistic vision.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
