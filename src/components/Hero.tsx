import { motion } from 'motion/react';
import { MapPin, Sparkles } from 'lucide-react';

export function Hero() {
  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="home" className="relative pt-32 lg:pt-44 pb-16 lg:pb-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(135deg, #7d93c4 0%, #a8b7d7 50%, #d7deed 100%)',
            'linear-gradient(135deg, #a8b7d7 0%, #d7deed 50%, #7d93c4 100%)',
            'linear-gradient(135deg, #7d93c4 0%, #a8b7d7 50%, #d7deed 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 opacity-10"
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#7286b2]/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#7286b2]/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8 lg:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg border border-[#7286b2]/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <MapPin className="text-[#7286b2]" size={20} />
            </motion.div>
            <span className="text-[#59688b]">Madiun, Jawa Timur, Indonesia</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl lg:text-4xl max-w-4xl mx-auto text-black mb-6 px-4"
          >
            Senopati Tour adalah salah satu biro perjalanan wisata yang berada di kota Madiun, jawa timur, Indonesia.
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-white/50 relative overflow-hidden group"
          >
            {/* Shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
                ease: 'easeInOut',
              }}
            />

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-[#7286b2]/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-[#7286b2]/30 rounded-br-3xl" />

            <motion.div
              className="absolute top-4 right-4"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="text-[#7286b2]/40" size={32} />
            </motion.div>

            <p className="text-xl lg:text-2xl text-black text-center leading-relaxed relative z-10">
              Senopati Tour menawarkan berbagai layanan perjalanan, termasuk paket wisata dalam dan luar negeri, 
              perjalanan kelompok, perjalanan individual, liburan keluarga, honeymoon, dan layanan khusus lainnya 
              sesuai kebutuhan pelanggan. Tugas Kami adalah mengatur akomodasi, transportasi, dan segala aktivitas 
              wisata selama perjalanan.
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative animated shapes */}
        <motion.div
          className="absolute top-20 left-4 lg:left-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-16 h-16 border-4 border-[#7286b2]/30 rounded-lg" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-4 lg:right-20"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-20 h-20 border-4 border-[#97a9d0]/30 rounded-full" />
        </motion.div>

        {/* Multiple layered shapes */}
        <motion.div
          className="absolute top-1/2 left-10 hidden lg:block"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-12 h-12 bg-[#7286b2]/10 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-10 hidden lg:block"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-16 h-16 bg-[#97a9d0]/10 rounded-lg transform rotate-45" />
        </motion.div>
      </div>
    </section>
  );
}