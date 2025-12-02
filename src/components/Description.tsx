import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

export function Description() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Star,
      title: "Pilihan Terbaik",
      description: "Kami hadir sebagai pilihan terbaik untuk perjalanan wisata Anda",
      color: "#7286b2",
    },
    {
      icon: Users,
      title: "Pelayanan Profesional",
      description: "Pelayanan yang ramah dan profesional untuk kenyamanan Anda",
      color: "#97a9d0",
    },
    {
      icon: Award,
      title: "Berpengalaman",
      description: "Pengalaman dalam mengorganisir berbagai jenis liburan",
      color: "#59688b",
    },
  ];

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f2f4f9] relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-64 h-64 bg-[#7286b2]/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#97a9d0]/5 rounded-full blur-3xl"
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#7286b2 1px, transparent 1px), linear-gradient(90deg, #7286b2 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Content Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 border border-[#d7deed]"
          >
            <div className="prose prose-lg lg:prose-xl max-w-none">
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-xl lg:text-2xl text-black leading-relaxed mb-6"
              >
                Jangan sampai salah dalam menentukan paket liburan. Memilih agen wisata yang tepat adalah kunci 
                suksesnya sebuah acara. Kami hadir sebagai pilihan terbaik, karena bisa memahami betul kebutuhan 
                setiap customer.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-black leading-relaxed"
              >
                Dengan pengalaman dalam mengorganisir berbagai jenis liburan, kami siap menjamin perjalanan yang 
                aman, nyaman, dan penuh kesan. Pelayanan yang ramah dan profesional, ditambah dengan paket-paket 
                yang dirancang khusus untuk kebersamaan, membuat Senopati Tour menjadi partner terpercaya untuk 
                setiap momen liburan Anda.
              </motion.p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-[#7286b2] to-[#97a9d0] rounded-2xl p-6 lg:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg"
                    >
                      <Icon className="text-[#7286b2]" size={32} />
                    </motion.div>
                    <h3 className="text-white text-xl mb-3">{feature.title}</h3>
                    <p className="text-white/90">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(114, 134, 178, 0.3)",
                  "0 0 40px rgba(114, 134, 178, 0.5)",
                  "0 0 20px rgba(114, 134, 178, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-2 bg-[#d7deed] px-6 py-3 rounded-full"
            >
              <CheckCircle className="text-[#7286b2]" size={24} />
              <span className="text-[#59688b]">Partner Terpercaya untuk Liburan Anda</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}