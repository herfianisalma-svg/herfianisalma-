import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import imgLogopit16366876773741024X1024Png from "figma:asset/1a03fd6b64aea62ca222b7f73a82864efb29d6a3.png";

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ARMADA PENDUKUNG', href: '#armada' },
    { label: 'DOKUMENTASI', href: '#dokumentasi' },
    { label: 'KONTAK', href: '#kontak' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#7d93c4]/95 backdrop-blur-md shadow-lg' : 'bg-[#7d93c4]'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 relative overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                src={imgLogopit16366876773741024X1024Png}
                alt="Senopati Tour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white uppercase tracking-wide">
                SENOPATI TOUR
              </h1>
              <p className="text-white/90 text-xs">Travel & Event Organizer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  item.label === 'HOME'
                    ? 'bg-[#a8b7d7] text-[#59688b]'
                    : 'bg-[#a8b7d7] text-black hover:bg-[#97a9d0] hover:text-white'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="flex flex-col gap-2 pb-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.href)}
                className={`px-6 py-3 rounded-lg text-left transition-all duration-300 ${
                  item.label === 'HOME'
                    ? 'bg-[#a8b7d7] text-[#59688b]'
                    : 'bg-[#a8b7d7] text-black hover:bg-[#97a9d0] hover:text-white'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Tagline for desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="hidden lg:block bg-[#d7deed] py-2"
      >
        <p className="text-center text-black text-sm">
          Teman perjalanan terbaikmu - Senopati Tour
        </p>
      </motion.div>
    </motion.header>
  );
}