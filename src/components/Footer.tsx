import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-5eugvq4jh3";
import imgHe6AderPng from "figma:asset/840744a1b3e16fd5772195cf54227e2c91263a72.png";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="bg-[#7d93c4] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
        }}
      />

      {/* Floating circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${i * 20}%`,
            top: `${i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 flex items-center gap-2">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 24">
                  <path d={svgPaths.p26de9800} />
                </svg>
              </motion.div>
              Senopati Tour
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Senopati Tour adalah salah satu biro perjalanan wisata yang berada di kota Madiun, jawa timur, 
              Indonesia. Berikut adalah beberapa informasi tentang biro wisata
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Partnership Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl mb-6">Partnership</h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block"
            >
              <img
                src={imgHe6AderPng}
                alt="Partnership"
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl mb-6">Contact</h3>
            <div className="space-y-4">
              <motion.a
                href="tel:+6282334344990"
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 hover:text-white/80 transition-colors group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors flex-shrink-0"
                >
                  <Phone size={20} />
                </motion.div>
                <div>
                  <p className="text-white/70 text-sm">Phone</p>
                  <p>+6282334344990</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@senopatitour.com"
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 hover:text-white/80 transition-colors group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors flex-shrink-0"
                >
                  <Mail size={20} />
                </motion.div>
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <p>info@senopatitour.com</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors flex-shrink-0"
                >
                  <MapPin size={20} />
                </motion.div>
                <div>
                  <p className="text-white/70 text-sm">Address</p>
                  <p className="leading-relaxed">
                    Jl. Tidar No.7, Madiun Lor, Kec. Manguharjo, Kota Madiun, Jawa Timur 63122
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-white/20 mb-8"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/70 text-sm"
        >
          <p>
            Support By{' '}
            <motion.a
              href="https://senopatitour.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-[#d7deed] hover:text-white transition-colors inline-block"
            >
              senopatitour.com
            </motion.a>
          </p>
        </motion.div>

        {/* Floating Back to Top Button */}
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-[#7286b2] hover:bg-[#59688b] text-white p-4 rounded-full shadow-2xl transition-colors z-50"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </div>
    </footer>
  );
}