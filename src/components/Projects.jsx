import { motion } from 'framer-motion';

const projects = [
  { title: "Customer Segmentation", desc: "Clustering model for online retail data.", tags: ["ML", "Python"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
  { title: "Manage Detection & Responses", desc: "MDR architecture for real-time security.", tags: ["CyberSec", "GCP"], img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" },
  { title: "Prototype Dentra Apps", desc: "AI-based dental damage detection.", tags: ["AI", "Flask"], img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" },
  { title: "Tomato Leaf Disease", desc: "CNN model for leaf disease detection.", tags: ["Vision", "TF"], img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=600" },
  { title: "Security Analysis", desc: "Pentest on UB website. SQLi & XSS.", tags: ["Security", "Pentest"], img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600" },
  { title: "Credit Risk Classification", desc: "Risk model with 88% accuracy.", tags: ["FinTech", "Scikit"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
  ];

const ProjectCard = ({ title, desc, tags, img, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
  >
    {/* Image Container */}
    <div className="aspect-[16/9] overflow-hidden">
      <img 
        src={img} 
        alt={title}
        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-xl text-white group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <span className="material-symbols-outlined text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section className="py-24 px-6 md:px-16" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/50 text-lg">Advanced implementations across AI, Cyber Security, and Software Engineering.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} index={idx} {...proj} />
          ))}
        </div>

      <motion.div 
  className="flex justify-center mt-16"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <a
    href="LINK_GDRIVE_ANDA"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
  >
    {/* Layer Kaca (Liquid Glass Effect) */}
    <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20" />
    
    {/* Efek Kilatan Cahaya (Glint) */}
    <div className="absolute inset-0 rounded-full overflow-hidden">
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]" />
    </div>

    {/* Konten Tombol */}
    <span className="relative z-10 flex items-center gap-2 font-medium text-white tracking-wider uppercase text-sm">
      See All Projects
      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
      </span>
    </span>
  </a>
</motion.div>
      </div>
    </section>
  );
};

export default Projects;