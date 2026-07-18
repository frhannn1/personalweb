import { motion } from 'framer-motion';
import { DiPython, DiJava, DiJavascript, DiPhp, DiReact,DiStreamline, DiLaravel, DiLinux, DiHtml5, DiTerminal } from 'react-icons/di';
import { SiTensorflow, SiPytorch, SiLangchain, SiFlask, SiDocker,SiGooglecloud, SiTerraform, SiGithub, SiOllama,SiFramework} from "react-icons/si"
import { VscDeveloperTools} from "react-icons/vsc"
const skillCategories = [
  {
    title: "Languages",
    icon: <DiTerminal className='text-white'/>,
    skills: [
      { name: "Python", logo: <DiPython className="text-yellow-400" /> },
      { name: "SQL", logo: <DiStreamline className="text-blue-400" /> },
      { name: "Java", logo: <DiJava className="text-red-500" /> },
      { name: "JavaScript", logo: <DiJavascript className="text-yellow-300" /> },
      { name: "PHP", logo: <DiPhp className="text-indigo-400" /> },
      { name: "HTML", logo: <DiHtml5 className="text-orange-500" /> }
    ]
  },
  {
    title: "Frameworks",
    icon: <SiFramework className='text-blue-600'/>,
    skills: [
      { name: "TensorFlow", logo: <SiTensorflow className="text-orange-500" /> },
      { name: "PyTorch", logo: <SiPytorch className="text-red-600" /> },
      { name: "LangChain", logo: <SiLangchain className="text-black" /> },
      { name: "React JS", logo: <DiReact className="text-cyan-400" /> },
      { name: "Flask/Express", logo: <SiFlask className="text-white" /> },
      { name: "Laravel", logo: <DiLaravel className="text-red-500" /> },
    ]
  },
  {
    title: "Tools & Cloud",
    icon: <VscDeveloperTools className='text-purple-700'/>,
    skills: [
      { name: "Docker", logo: <SiDocker className="text-blue-500" /> },
      { name: "Google Cloud Platform", logo: <SiGooglecloud className="text-blue-400" /> },
      { name: "Terraform", logo: <SiTerraform className="text-purple-500" /> },
      { name: "Git/GitHub", logo: <SiGithub className="text-white" /> },
      { name: "Linux", logo: <DiLinux className="text-yellow-600" /> },
      { name: "Ollama", logo: <SiOllama className="text-white" /> },

    ]
  }
];

const SkillCard = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    className="group relative rounded-[2.5rem] p-[1px] overflow-hidden"
  >
    {/* Animated Border Gradient di belakang kaca */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-transparent to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    {/* Card Container Utama (Liquid Glass) */}
    <div className="relative h-full p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 group-hover:bg-white/[0.05]">
      
      {/* Header Card */}
      <div className="flex items-center gap-5 mb-8">
        {/* Glowing Icon Badge */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-indigo-500/30 bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <span className="material-symbols-outlined text-indigo-400 text-2xl">{category.icon}</span>
        </div>
        <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-widest uppercase">
          {category.title}
        </h3>
      </div>
      
      {/* Skill List */}
      <div className="grid grid-cols-1 gap-3">
        {category.skills.map((skill, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.02, x: 5 }}
            className="group/skill relative flex items-center gap-4 px-5 py-3.5 bg-white/5 border border-white/5 rounded-2xl overflow-hidden cursor-default transition-all hover:border-indigo-500/30 hover:bg-white/10 shadow-lg"
          >
            {/* Hover Highlight (Garis warna di kiri) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
            
            {/* Icon & Name */}
            <span className="text-2xl text-white/80 group-hover/skill:text-indigo-300 transition-colors duration-300 z-10">
              {skill.logo}
            </span>
            <span className="text-sm font-semibold text-white/70 group-hover/skill:text-white transition-colors duration-300 z-10">
              {skill.name}
            </span>
            
            {/* Sweep Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="relative py-10 px-6 md:px-16 bg-[#0a0a0c] overflow-hidden" id="skills">
      
      {/* --- AMBIENT BACKGROUND LIGHTS --- */}
      {/* Ini yang membuat efek glassmorphism-nya 'hidup' */}
      <div className="absolute top-40 left-0 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-6"
          >
            Technical Proficiency
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {/* Asumsikan skillCategories diimpor atau didefinisikan di atas */}
          {skillCategories.map((cat, idx) => (
            <SkillCard key={idx} index={idx} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;