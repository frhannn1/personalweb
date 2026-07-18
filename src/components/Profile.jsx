import { motion } from 'framer-motion';
// Import package
import { LiquidGlass } from '@liquidglass/react';
import { IoIosArrowForward } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[100svh] flex items-center px-4 md:px-12 max-w-7xl mx-auto pt-32 pb-20 overflow-hidden" id="Profile">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">
        
        <motion.div className="md:col-span-7 flex flex-col gap-8" variants={containerVariants} initial="hidden" animate="visible">
          <div className="space-y-6">
            
            <motion.div variants={itemVariants} className="inline-block">
              <LiquidGlass blur={15} tint="#ffffff" opacity={0.05} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 text-white font-label-md text-xs md:text-sm tracking-[0.1em] uppercase shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                </span>
                Data Scientist & AI Engineer
              </LiquidGlass>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-display-lg text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] font-semibold tracking-tight">
              Farhan <br /> Ainurrahman
            </motion.h1>
            
            <motion.p variants={itemVariants} className="font-body-lg text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
              Specializing in developing intelligent models and robust architectures. 
              Passionate about applying Artificial Intelligence to solve complex challenges, 
              from deep learning-based network security to data-driven corporate solutions.
            </motion.p>
          </div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-6 relative z-10">
  
  {/* Tombol Primary - Collaborate */}
  <motion.a 
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    href="#contact"
    className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-[2rem] font-bold text-[17px] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-300"
  >
    Collaborate
    <span className="material-symbols-outlined font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">
      <IoIosArrowForward/>
    </span>
  </motion.a>
  
  {/* Tombol Secondary - Thick Liquid Glass */}
  <motion.a 
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    href="#projects"
    className="group relative"
  >
    <LiquidGlass 
      blur={24} 
      tint="#ffffff" 
      opacity={0.15} 
      className="relative overflow-hidden px-8 py-4 rounded-[2rem] font-bold text-[17px] text-white flex items-center gap-3 transition-all duration-300
                 bg-gradient-to-b from-white/20 via-white/5 to-black/10
                 border border-white/20 hover:border-white/40
                 shadow-[inset_0_4px_10px_rgba(255,255,255,0.6),inset_0_-4px_10px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.3)]
                 hover:shadow-[inset_0_4px_12px_rgba(255,255,255,0.8),inset_0_-4px_12px_rgba(0,0,0,0.5),0_15px_40px_rgba(0,0,0,0.4)]"
    >
      {/* Pantulan cahaya atas (Top Highlight) untuk efek bevel/ketebalan */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-full opacity-90" />
      
      {/* Pantulan cahaya bawah (Bottom Reflection) */}
      <div className="absolute bottom-0 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-60" />
      
      <span className="relative z-10">Selected Projects</span>
      
      {/* Ikon panah serong atas (north_east) */}
      <span className="relative z-10 material-symbols-outlined font-bold text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
        <GrProjects />
      </span>
    </LiquidGlass>
  </motion.a>

</motion.div>
        </motion.div>

{/* Kolom Kanan: Foto Profil dengan Aksen Mengambang */}
<motion.div 
  className="md:col-span-5 flex justify-center md:justify-end w-full relative" // Tambahkan 'relative' di sini
  initial={{ opacity: 0, scale: 0.9, y: 30 }} 
  animate={{ opacity: 1, scale: 1, y: 0 }} 
  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
>
  {/* FRAME UTAMA */}
  <LiquidGlass 
    blur={30} 
    tint="#ffffff" 
    opacity={0.05} 
    className="relative p-3 md:p-4 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full max-w-[400px]"
  >
    {/* FOTO (Overflow hidden hanya di sini) */}
   <div className="aspect-[3/4] w-full rounded-[2rem] overflow-hidden relative group cursor-pointer">
  <img
    alt="Farhan Ainurrahman Professional Portrait"
    className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-105"
    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUbpdSv1JwYA6DKTRVXNX-Irg1tqeziWszUD72qX9uoJZQFpLBLI2hdYVtZXd_f6Ch4HA4uSIku1bQ-0ReSYBfzlOnJdpDvengASKgrmxkd9r4vm2rK2QzMeZVgOGCp1wwxenIITz8-KbbAHc_UzYsMD3Oz2j2icvq-19skGS1rMQXP5jOq8yo82pgz83und84y7aNxNwy7h692kzM4nx99RsTovF9LkZ0B0rBNnIOvEwSKQno1PMUgPiFnyVgMnMJ_GO6L6kNM-c"
  />
  
  {/* Overlay gradasi tetap ada agar estetika tetap terjaga */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0914]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
</div>
  </LiquidGlass>

  {/* AKSEN MENGAMBANG (Diletakkan di luar LiquidGlass utama agar tidak terpotong) */}
  <div className="absolute -bottom-6 -left-4 md:-left-8 z-99">
    <LiquidGlass 
      blur={20} 
      tint="#ffffff" 
      opacity={0.1} 
      className="border border-white/20 px-6 py-4 rounded-2xl shadow-2xl animate-[bounce_4s_infinite] flex items-center gap-3"
    >
      <span className="text-2xl md:text-3xl">🚀</span>
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-300 tracking-widest uppercase">Status</span>
        <span className="text-sm md:text-base font-bold text-white tracking-wider">OPEN TO WORK</span>
      </div>
    </LiquidGlass>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Profile;