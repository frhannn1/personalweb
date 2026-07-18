import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Import package sesuai dokumentasi (asumsi nama komponennya LiquidGlass)
import { LiquidGlass } from '@liquidglass/react';

const navLinks = [
  { name: 'Profile', href: '#Profile' },
  { name: 'Journey', href: '#journey' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // State untuk melacak menu yang sedang aktif
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {    
    const handleScroll = () => {
      // 1. Logika untuk mengubah style Header (Pill)
      setIsScrolled(window.scrollY > 20);

      // 2. Logika ScrollSpy (Deteksi Section Aktif)
      // Tambahkan offset (misal 150px) agar menu berubah sebelum section menyentuh ujung atas layar
      const scrollPosition = window.scrollY + 150; 

      // Kita loop dari item terakhir ke pertama agar mendeteksi section paling bawah yang sedang terlihat
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        
        // Pastikan href adalah ID section (dimulai dengan '#')
        if (link.href.startsWith('#') && link.href.length > 1) {
          const section = document.querySelector(link.href);
          
          if (section) {
            // Jika posisi scroll sudah melewati batas atas section tersebut
            if (section.offsetTop <= scrollPosition) {
              setActiveLink(link.name);
              return; // Hentikan loop setelah menemukan section yang aktif
            }
          }
        }
      }
      
      // Jika user berada di paling atas halaman (belum melewati section apapun)
      if (window.scrollY < 100) {
        setActiveLink(''); 
        // Catatan: Ubah menjadi setActiveLink(navLinks[0].name) jika ingin menu pertama langsung aktif saat di atas
      }
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Jalankan satu kali saat komponen pertama kali di-render untuk mengecek posisi awal
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Bergantung pada render awal

  const isPill = isScrolled || windowWidth < 1024;

  // Fungsi untuk handle klik agar scroll mulus (Smooth Scroll)
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link.name);
    
    const section = document.querySelector(link.href);
    if (section) {
      // Scroll ke section dengan offset agar tidak tertutup header
      window.scrollTo({
        top: section.offsetTop - 80, // Sesuaikan angka 80 dengan tinggi headermu
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed w-full flex justify-center z-50 transition-all duration-300 ${
        isPill ? 'top-4 px-4' : 'top-0 px-0'
      }`}
    >
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`w-full transition-all duration-300 ${isPill ? 'max-w-5xl' : 'max-w-full'}`}
      >
        <LiquidGlass
          blur={isPill ? 20 : 0} 
          tint={isPill ? "#0B0914" : "transparent"}
          opacity={isPill ? 0.8 : 0}
          className={`flex items-center justify-between w-full transition-all duration-300 ${
            isPill
              ? 'px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 shadow-2xl'
              : 'px-6 md:px-12 py-5 rounded-none border-transparent shadow-none'
          }`}
        >
          {/* Bagian Kiri: Logo */}
          <motion.a layout href="#" className="flex items-center gap-2 flex-shrink-0 mr-3 md:mr-4">
            <span className="text-lg md:text-xl text-white font-bold tracking-tight">
              Farhan.
            </span>
          </motion.a>

          {/* Bagian Tengah: Menu Navigasi */}
          <motion.div 
            layout 
            className="flex items-center gap-2 md:gap-4 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden w-full justify-start md:justify-center px-2"
          >
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center justify-center ${
                    isActive
                      // Style saat aktif (Liquid Glass Ungu)
                      ? 'text-purple-300 font-bold bg-purple-500/10 border border-purple-500/30 shadow-[inset_0_2px_10px_rgba(168,85,247,0.2),0_4px_15px_rgba(168,85,247,0.15)] backdrop-blur-md'
                      // Style default saat tidak aktif
                      : 'text-gray-300 font-medium hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {/* Efek glow tambahan di belakang teks saat aktif */}
                  {isActive && (
                    <div className="absolute inset-0 bg-purple-400/20 blur-md rounded-full -z-10 pointer-events-none" />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </motion.div>

          {/* Bagian Kanan: Tombol */}
          <motion.a
            layout
            href="#contact"
            className="relative group ml-3 md:ml-4 flex-shrink-0 overflow-hidden rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]" />
              <span className="relative z-10 font-medium text-[11px] md:text-xs text-white uppercase tracking-widest">
                Contact Me
              </span>
            </div>
          </motion.a>
        </LiquidGlass>
      </motion.nav>
    </header>
  );
};

export default Header;