import { motion } from 'framer-motion';
import { SiGithub, SiGmail, SiGooglemaps } from 'react-icons/si'
import { SlSocialLinkedin } from 'react-icons/sl';

const Contact = () => {
  // Variants untuk animasi Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", bounce: 0.3 } }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", bounce: 0.3 } }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-[#0a0a0a]" // Ganti warna background sesuai tema gelap kamu
    >
      {/* --- Ambient Glow Backgrounds (Meningkatkan efek kaca) --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* Kiri: Teks & Informasi Kontak */}
          <motion.div variants={slideLeftVariants} className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-6">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full mb-8" />
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Open for opportunities in Data Science, AI Engineering, and Software
              Development roles. Let's discuss how I can contribute to your team.
            </p>

            <div className="space-y-4">
              {/* Info Kaca - Email */}
              <motion.div 
                whileHover={{ x: 5, scale: 1.01 }}
                className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <span className="material-symbols-outlined text-indigo-400"><SiGmail/></span>
                </div>
                <span className="text-gray-300 font-medium">farhanainurrahman2147@gmail.com</span>
              </motion.div>

              {/* Info Kaca - Lokasi */}
              <motion.div 
                whileHover={{ x: 5, scale: 1.01 }}
                className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <span className="material-symbols-outlined text-indigo-400"><SiGooglemaps/></span>
                </div>
                <span className="text-gray-300 font-medium">Jakarta, Indonesia</span>
              </motion.div>
            </div>

            {/* Social Links Kaca */}
            <div className="flex gap-4 mt-10">
              <motion.a
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 text-gray-400 hover:text-indigo-400"
                href="https://www.linkedin.com/in/farhanainurr"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-2xl"><SlSocialLinkedin/></span>
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 text-gray-400 hover:text-purple-400"
                href="https://github.com/frhannn1"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-2xl"><SiGithub/></span>
              </motion.a>
            </div>
          </motion.div>

          {/* Kanan: Form dengan Efek Liquid Glass Premium */}
          <motion.form 
            variants={slideRightVariants}
            className="relative space-y-6 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden group/form"
          >
            {/* Shimmer Effect saat form di hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover/form:animate-[shimmer_1.5s_ease-in-out]" />

            <div className="space-y-2 relative z-10">
              <label
                className="text-xs uppercase tracking-[0.15em] text-gray-400 font-bold ml-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                id="name"
                placeholder="John Doe"
                type="text"
              />
            </div>

            <div className="space-y-2 relative z-10">
              <label
                className="text-xs uppercase tracking-[0.15em] text-gray-400 font-bold ml-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                id="email"
                placeholder="john@example.com"
                type="email"
              />
            </div>

            <div className="space-y-2 relative z-10">
              <label
                className="text-xs uppercase tracking-[0.15em] text-gray-400 font-bold ml-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 resize-none"
                id="message"
                placeholder="Project inquiry..."
                rows="4"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 rounded-xl text-sm uppercase tracking-[0.2em] font-bold shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] transition-all duration-300 flex items-center justify-center gap-3"
              type="submit"
            >
              Send Inquiry
              <span className="material-symbols-outlined text-[18px]">send</span>
            </motion.button>
          </motion.form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;