import { motion } from 'framer-motion';
import {  SiGithub} from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Blob Kiri - Indigo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"
      />
      {/* Blob Kanan - Ungu */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-10 -right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"
      />

      {/* --- GLASS CONTAINER --- */}
      <div className="relative z-10 border-t border-white/20 bg-white/5 backdrop-blur-3xl rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            
            {/* Bagian Kiri: Info & Tagline */}
            <div className="text-center md:text-left">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-3"
              >
                Let's build something amazing.
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/50 text-sm font-medium tracking-wide"
              >
                © 2026 Farhan Ainurrahman. Built with focus on Data & AI.
              </motion.p>
            </div>

            {/* Bagian Kanan: Glass Social Buttons */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="https://www.linkedin.com/in/farhanainurr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-white backdrop-blur-md transition-colors"
              >
                <SlSocialLinkedin className="text-lg" />
                <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/frhannn1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-white backdrop-blur-md transition-colors"
              >
                <SiGithub className="text-lg" />
                <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
              </motion.a>

          
            </motion.div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;