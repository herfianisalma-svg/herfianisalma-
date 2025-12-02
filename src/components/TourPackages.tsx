import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Info, Zap } from 'lucide-react';
import { useState } from 'react';
import imgPaketJogja1Jpg from "figma:asset/59c5ae53512963b548daa2ba6ac1d57bd202a387.png";
import imgSemarang2724X1024Jpeg from "figma:asset/c102867e69207af9f8904c53a10ebfa766157f8a.png";
import imgDiengJpg from "figma:asset/8cb6b49ce5fb23624f67f5bc5b78df5f7d57fa3a.png";
import imgBromo724X1024Jpeg from "figma:asset/5eaebb2fe930c75f1c6d8f43e8cdcf2e7324c0ba.png";

const tourPackages = [
  {
    id: 1,
    name: 'Paket Wisata Jogja',
    image: imgPaketJogja1Jpg,
    gradient: 'from-purple-500/80 to-pink-500/80',
    color: '#9333ea',
  },
  {
    id: 2,
    name: 'Paket Wisata Semarang',
    image: imgSemarang2724X1024Jpeg,
    gradient: 'from-blue-500/80 to-cyan-500/80',
    color: '#3b82f6',
  },
  {
    id: 3,
    name: 'Paket Wisata Dieng',
    image: imgDiengJpg,
    gradient: 'from-green-500/80 to-emerald-500/80',
    color: '#22c55e',
  },
  {
    id: 4,
    name: 'Paket Wisata Bromo',
    image: imgBromo724X1024Jpeg,
    gradient: 'from-orange-500/80 to-red-500/80',
    color: '#f97316',
  },
];

export function TourPackages() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="paket-wisata" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#d7deed]/20 via-[#a8b7d7]/20 to-[#d7deed]/20 bg-[length:200%_100%]"
      />

      {/* Floating shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${i % 2 === 0 ? '#7286b2' : '#97a9d0'}20 0%, transparent 70%)`,
            left: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block"
          >
            <h2 className="text-4xl lg:text-5xl text-[#7286b2] drop-shadow-lg mb-4">
              PAKET WISATA
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#7286b2] to-transparent max-w-md mx-auto"
          />
        </motion.div>

        {/* Tour Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {tourPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-t ${pkg.gradient}`}
                  />

                  {/* Package Name Badge */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <div className="bg-[#59688b] backdrop-blur-md text-white px-4 py-2.5 rounded-xl shadow-lg">
                      <p className="text-center text-sm lg:text-base">{pkg.name}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Info Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#97a9d0] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-xl hover:bg-[#7286b2] transition-colors"
                  >
                    <Info size={20} />
                    <span>INFO LEBIH LANJUT</span>
                  </motion.button>
                </motion.div>

                {/* Bottom CTA - Always visible on mobile */}
                <div className="p-4 bg-gradient-to-r from-[#97a9d0] to-[#7286b2] lg:hidden">
                  <button className="w-full text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <Info size={18} />
                    <span className="text-sm">INFO LEBIH LANJUT</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect - Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -inset-0.5 bg-gradient-to-r from-[#7286b2] to-[#97a9d0] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
              />
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#7286b2] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#59688b] transition-colors inline-flex items-center gap-2 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 15 15">
              <path d="M14.572 10.5996L11.2907 9.19336C11.1506 9.13362 10.9948 9.12103 10.8468 9.15749C10.6989 9.19395 10.5668 9.27748 10.4704 9.39551L9.01729 11.1709C6.73674 10.0956 4.90143 8.26033 3.82617 5.97979L5.60156 4.52666C5.71983 4.43047 5.80353 4.29837 5.84001 4.15036C5.87648 4.00234 5.86374 3.84647 5.80371 3.70635L4.39746 0.425098C4.33158 0.274045 4.21505 0.150716 4.06797 0.0763766C3.9209 0.00203669 3.75249 -0.0186544 3.5918 0.0178711L0.544922 0.720996C0.389991 0.756773 0.251761 0.844007 0.152794 0.968462C0.0538257 1.09292 -3.56897e-05 1.24724 1.77428e-08 1.40625C1.77428e-08 8.9209 6.09082 15 13.5938 15C13.7528 15.0001 13.9072 14.9463 14.0317 14.8473C14.1562 14.7483 14.2435 14.6101 14.2793 14.4551L14.9824 11.4082C15.0187 11.2467 14.9976 11.0776 14.9227 10.9301C14.8478 10.7825 14.7237 10.6656 14.572 10.5996Z" />
            </svg>
            <span>Contact Us</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}