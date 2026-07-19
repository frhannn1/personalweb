/* eslint-disable react-hooks/static-components */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Import package sesuai dokumentasi
import { LiquidGlass } from '@liquidglass/react';
import logoImg from '../assets/logopersonalweb.svg';

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
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 150; 

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        if (link.href.startsWith('#') && link.href.length > 1) {
          const section = document.querySelector(link.href);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveLink(link.name);
            return;
          }
        }
      }
      
      if (window.scrollY < 100) setActiveLink(''); 
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const isPill = isScrolled || windowWidth < 1024;

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link.name);
    
    const section = document.querySelector(link.href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  };

  // Komponen Tombol Contact 
  const ContactButton = () => (
    <motion.a
      layout
      href="#contact"
      className="relative group flex-shrink-0 overflow-hidden rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="relative px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20"
      style={{ WebkitBackdropFilter: isPill ? "blur(20px)" : "none" }}>
      
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]" />
        <span className="relative z-10 font-medium text-xs text-white uppercase tracking-widest">
          Contact
        </span>
      </div>
    </motion.a>
  );

  return (
    <>
      {/* =========================================
          1. HEADER ATAS (Semua Layar)
      ========================================= */}
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
          <div className={`w-full ${isPill ? 'p-0' : 'px-4 sm:px-6 md:px-12 py-5'}`}>
            <LiquidGlass
              blur={isPill ? 20 : 0}
              tint={isPill ? "#0B0914" : "transparent"}
              opacity={isPill ? 0.8 : 0}
              className={`w-full h-full ${isPill ? 'rounded-full' : ''}`}
              style={{ WebkitBackdropFilter: isPill ? "blur(20px)" : "none" }}
            >
              <div
                className={`flex items-center justify-between w-full ${
                  isPill ? 'px-4 py-3 md:px-6' : 'px-6 py-5'
                }`}
              >
                {/* Logo */}
                <motion.a layout href="#" className="flex items-center">
                  <span className="text-xl text-white font-bold tracking-tight">
                    <img src={logoImg} alt="Logo" className="h-10 w-10" />
                  </span>
                </motion.a>

                {/* Menu Navigasi (Hanya Muncul di Desktop/Tablet) */}
                <div className="hidden md:flex items-center justify-center gap-4 flex-1">
                  {navLinks.map((link) => {
                    const isActive = activeLink === link.name;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`relative px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'text-purple-300 font-bold bg-purple-500/10 border border-purple-500/30 shadow-[inset_0_2px_10px_rgba(168,85,247,0.2)] backdrop-blur-md'
                            : 'text-gray-300 font-medium hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        {isActive && (
                          <div className="absolute inset-0 bg-purple-400/20 blur-md rounded-full -z-10 pointer-events-none" />
                        )}
                        <span className="relative z-10">{link.name}</span>
                      </a>
                    );
                  })}
                </div>

                {/* Tombol Contact */}
                <ContactButton />
              </div>
            </LiquidGlass>
          </div>
        </motion.nav>
      </header>

      {/* =========================================
          2. BOTTOM NAVIGATION (Khusus HP / Layar Kecil)
      ========================================= */}
      <div className="md:hidden fixed bottom-4 w-full px-4 z-50 flex justify-center pb-safe">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.2 }}
          className="w-full max-w-sm mx-auto"
        >
          <LiquidGlass
            blur={20}
            tint="#0B0914"
            opacity={0.85}
            className="w-full h-full rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <div className="flex items-center justify-between px-2 py-2 w-full gap-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;
                
                // Singkat nama khusus di mobile bottom nav agar muat dan rapi
                const displayName = link.name === 'Certifications' ? 'Certifications' : link.name;
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative flex-1 py-2.5 rounded-full text-[10px] sm:text-xs text-center transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'text-purple-300 font-bold bg-purple-500/15 border-purple-500/30 shadow-[inset_0_2px_10px_rgba(168,85,247,0.2)]'
                        : 'text-gray-400 font-medium hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-purple-400/20 blur-md rounded-full -z-10 pointer-events-none" />
                    )}
                    <span className="relative z-10">{displayName}</span>
                  </a>
                );
              })}
            </div>
          </LiquidGlass>
        </motion.nav>
      </div>
    </>
  );
};

export default Header;