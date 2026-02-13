import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Development Intern',
    company: 'Future Interns',
    period: 'Dec 2025 – Jan 2026',
    description: [
      'Developed responsive web applications using React.js and modern UI libraries.',
      'Integrated backend APIs and implemented secure authentication systems.',
      'Collaborated on database schema design with MongoDB and optimized application performance.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent md:before:mx-auto md:before:translate-x-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={18} className="text-cyan-400" />
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-900 border border-slate-700 rounded-xl shadow-lg hover:border-cyan-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20 mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-slate-400 font-medium mb-4">{exp.company}</div>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
