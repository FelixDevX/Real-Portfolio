import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 text-sm">
          © 2026 Felix Y Lingam. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/FelixDevX" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/felix-lingam-9354b327a/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:felixlingam@gmail.com" className="text-slate-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
