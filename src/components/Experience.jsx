import { motion } from 'framer-motion';
import { LiquidGlass } from '@liquidglass/react';

const experiences = [
  {
    date: "Mar 2026 — Present",
    role: "Data Analytics - Wholesale Banking Analytics",
    company: "PT Bank Mandiri Tbk",
    logo: "/logos/logomandiri.png",
    logoSize: "w-20 h-15", 
    desc: ["Working within the Enterprise Data Analytics Group to analyze wholesale transactions on the Kopra by Mandiriplatform, driving data-informed decisions for corporate banking."]
  },
  {
    date: "Oct 2025 — Mar 2026",
    role: "Information Technology Intern",
    company: "Philip Morris International (PT HM Sampoerna Tbk)",
    logo: "/logos/logopmi.png",
    logoSize: "w-20 h-15",
    desc: [
      "Supporting IT Corporate Finance sub-division on the R2RS Project and POC Ms. Finance Agent.",
      "Integrating services in AWS and Generative AI using Terraform for the Gen AI Intercompany project.",
      "Managing end-to-end FUT and UAT for SAP Program and internal finance applications."
    ]
  },
  {
    date: "Feb 2025 — July 2025",
    role: "Data Scientist Intern",
    company: "PT Telkom Indonesia Tbk",
    logo: "/logos/logotelkom.png",
    logoSize: "w-20 h-15",
    desc: [
      "Collaborated on the Manage Detection and Response (MDR) project within the Cyber Security sub-directorate.",
      "Designed data pipeline architectures for analytics dashboards and AI training datasets.",
      "Developed an AI-based Security Analysis system integrated with Telegram for automated monitoring."
    ]
  },
    {
    date: "Feb 2024 — Dec 2024",
    role: "Teaching Assistant",
    company: "Fakultas Ilmu Komputer (Universitas Brawijaya)",
    logo: "/logos/logoub.png",
    logoSize: "w-20 h-15",
    desc: [
      "Managed and facilitated hands-on practical laboratory sessions for 50 students in total, including tailored mentoring for the Information Systems international class."
    ]
  } 
];

const Experience = () => {
  return (
    <section className="relative py-16 bg-[#0B0914] text-white overflow-hidden" id="journey">
      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left lg:-ml-10 xl:-ml-24" 
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Journey</h2>
          <div className="h-[1px] w-20 bg-purple-500 mx-auto md:mx-0" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative grid md:grid-cols-2 gap-12 mb-16"
            >
              <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20 -translate-x-[4px] md:-translate-x-1/2" />

              {/* Text Side dengan Logo */}
              <div className={`pl-8 md:pl-0 ${index % 2 !== 0 ? 'md:order-2 md:text-left' : ''}`}>
                <span className="text-purple-400 text-xs tracking-[0.2em] uppercase font-semibold">{exp.date}</span>
                <h3 className="text-xl font-semibold mt-2 text-white">{exp.role}</h3> 
           {/* Logo dan Nama Perusahaan */}
            <div className={`flex items-center gap-3 mt-3 w-full p-2 pr-4 rounded-xl bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-white/20 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
              
              {/* Logo container dengan background putih solid dan padding agar rapi */}
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1.5 shadow-inner shrink-0">
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className={`${exp.logoSize || 'w-full h-full'} object-contain`} 
                />
              </div>
              
              {/* Teks Perusahaan: Diubah menjadi warna putih agar lebih cerah dan kontras */}
              <p className="text-white font-medium text-sm md:text-base leading-tight text-left">
                {exp.company}
              </p>
            </div>
          </div>

<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
  className={`pl-8 md:pl-0 z-10 group ${index % 2 !== 0 ? 'md:order-1' : ''}`}
>
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="relative"
  >
    <LiquidGlass 
      blur={24} 
      tint="#ffffff" 
      opacity={0.08} 
      className="relative overflow-hidden p-6 rounded-2xl border border-white/10 hover:border-white/30 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] bg-gradient-to-br from-white/10 via-transparent to-transparent transition-all duration-500 ease-out"
    >
      {/* Efek kilapan cahaya (shine/glare) yang melintas saat di-hover */}
      <div className="absolute top-0 left-0 w-[150%] h-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />

      {/* Ambient glow di pojok untuk menambah kesan depth */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {Array.isArray(exp.desc) ? (
        <motion.ul 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3 text-gray-300 text-sm relative z-10"
        >
          {exp.desc.map((item, i) => (
            <motion.li 
              key={i} 
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0 }
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex items-start gap-3 group/item"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400/50 group-hover/item:bg-blue-400 group-hover/item:scale-125 group-hover/item:shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300 flex-shrink-0" />
              <span className="leading-relaxed group-hover/item:text-white transition-colors duration-300">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">
          {exp.desc}
        </p>
      )}
    </LiquidGlass>
  </motion.div>
</motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;