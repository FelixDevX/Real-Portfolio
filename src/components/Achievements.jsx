import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex items-start gap-4"
            >
              <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-500">
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">1st Prize — College-Level Ideathon</h3>
                <p className="text-slate-400 text-sm">Recognized for innovative problem-solving and technical presentation skills.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex items-start gap-4"
            >
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
                <Award size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Internship Certificate — Future Interns</h3>
                <p className="text-slate-400 text-sm">Successfully completed a rigorous Full Stack Development internship program.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
