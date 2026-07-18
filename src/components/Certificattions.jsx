import { MdVerifiedUser } from "react-icons/md"
import { LiaAwardSolid } from "react-icons/lia"
import { motion } from 'framer-motion';
import { RiCertificate2Fill } from "react-icons/ri"
import { GrAchievement } from "react-icons/gr";

const certifications = [
  {
    title: "Data Scientist (Ilmuan Data)",
    issuer: "BNSP • 2026",
    desc: "",
    icon:<MdVerifiedUser className="text-blue-700"/>
  },
    {
    title: "Azure AI Engineer Associate",
    issuer: "Microsoft Certified • 2026",
    desc: "",
    icon: <MdVerifiedUser className="text-blue-700" />
  },
  {
    title: "Machine Learning Cohort",
    issuer: "Dicoding & Accenture • 2025",
    desc: "",
    icon: <MdVerifiedUser className="text-blue-700"/>
  },
  {
    title: "Machine Learning Engineer Scholar",
    issuer: "IDCamp by Indosat Ooredoo • 2024",
    desc: "",
    icon: <MdVerifiedUser className="text-blue-700"/>
  }
];

const awards = [
  {
    title: "CIMB Niaga Scholarship",
    issuer: "Awardee • 2024 - 2026",
    icon: <LiaAwardSolid className="text-yellow-500"/>
  },
  {
    title: "1st Place - Business IT Competition",
    issuer: "Unity, UNY • 2025",
    icon: <LiaAwardSolid className="text-yellow-500"/>
  },
  {
    title: "2nd Place - Business Plan Competition",
    issuer: "EBCC, UKWMS • 2025",
    icon: <LiaAwardSolid className="text-yellow-500"/>
  },
  {
    title: "IDCamp ML Scholarship",
    issuer: "Scholarship Winner • 2025",
    icon: <LiaAwardSolid className="text-yellow-500"/>
  }
];

// Varian animasi untuk staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Certificattions = () => {
  return (
<section className="py-10 px-6 md:px-16 bg-[#0a0a0c]" id="certifications">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-6"
          >
            Certification & Honorable
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Specialized in developing end-to-end AI solutions and scalable data architectures.
          </motion.p>
        </div>


<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
        
       {/* Kolom Training & Certifications */}
{/* Kolom Training & Certifications */}
<motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
  className="relative p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden group/card hover:border-indigo-500/30 transition-colors duration-500"
>
  {/* Efek Ambient Glow Ganda */}
  <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-[80px] opacity-40 group-hover/card:opacity-80 group-hover/card:scale-110 transition-all duration-700 pointer-events-none" />
  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[60px] opacity-0 group-hover/card:opacity-50 transition-all duration-700 pointer-events-none" />
  
  {/* Header Section */}
  <div className="relative z-10 mb-10">
    <div className="flex items-center gap-4 mb-4">
      {/* Header Icon Box */}
      <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shadow-inner shrink-0">
        <span className="material-symbols-outlined text-indigo-300"><RiCertificate2Fill className=" w-20 h-20"/></span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
        Training & Certifications
      </h2>
    </div>
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
  </div>

  <div className="space-y-4 relative z-10">
    {certifications.map((cert, idx) => (
      <motion.div 
        key={idx}
        variants={itemVariants}
        whileHover={{ x: 6, scale: 1.01 }}
        className="group/item relative flex gap-5 items-start p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
      >
        {/* Shimmer Effect Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover/item:animate-[shimmer_1s_ease-in-out_forwards]" />

        {/* List Icon Box */}
        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0 group-hover/item:bg-indigo-500/20 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300">
          <span className="material-symbols-outlined text-indigo-400 text-2xl">
            {cert.icon}
          </span>
        </div>
        
        <div className="flex-1 relative z-10">
          <h4 className="font-bold text-lg text-white group-hover/item:text-indigo-200 transition-colors mb-1">
            {cert.title}
          </h4>
          <p className="text-indigo-400/90 text-xs uppercase tracking-[0.15em] font-bold mb-2">
            {cert.issuer}
          </p>
          {cert.desc && (
            <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-300 transition-colors">
              {cert.desc}
            </p>
          )}
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* Kolom Honors & Awards */}
<motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
  className="relative p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden group/card hover:border-purple-500/30 transition-colors duration-500"
>
  {/* Efek Ambient Glow Ganda */}
  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[80px] opacity-40 group-hover/card:opacity-80 group-hover/card:scale-110 transition-all duration-700 pointer-events-none" />
  <div className="absolute -top-20 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-[60px] opacity-0 group-hover/card:opacity-50 transition-all duration-700 pointer-events-none" />
  
  {/* Header Section */}
  <div className="relative z-10 mb-10">
    <div className="flex items-center gap-4 mb-4">
      {/* Header Icon Box */}
      <div className="w-20 h-20 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shadow-inner shrink-0">
        <span className="material-symbols-outlined text-purple-300"><GrAchievement className="w-20 h-20"/></span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
        Honors & Awards
      </h2>
    </div>
    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
  </div>

  <div className="space-y-4 relative z-10">
    {awards.map((award, idx) => (
      <motion.div 
        key={idx}
        variants={itemVariants}
        whileHover={{ x: 6, scale: 1.01 }}
        className="group/item relative flex gap-5 items-start p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
      >
        {/* Shimmer Effect Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover/item:animate-[shimmer_1s_ease-in-out_forwards]" />

        {/* List Icon Box */}
        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0 group-hover/item:bg-purple-500/20 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
          <span className="material-symbols-outlined text-purple-400 text-2xl">
            {award.icon}
          </span>
        </div>
        
        <div className="flex-1 relative z-10">
          <h4 className="font-bold text-lg text-white group-hover/item:text-purple-200 transition-colors mb-1">
            {award.title}
          </h4>
          <p className="text-purple-400/90 text-xs uppercase tracking-[0.15em] font-bold">
            {award.issuer}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Certificattions;