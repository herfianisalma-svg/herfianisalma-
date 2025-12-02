import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import imgRediSugiartoScaledJpeg from "figma:asset/9b5b35cad56b288bc149436d554d272eb773ad8.png";
import imgDrDonna2ScaledJpeg from "figma:asset/a9e789e85359411ee92be362bf00b5de076faf79.png";
import imgWulaningsihJpeg from "figma:asset/a073c88bc149dc705b09051c773cd97d09f73d4d.png";

const testimonials = [
  {
    id: 1,
    name: "Redi Sugiarto",
    company: "Pertamina",
    image: imgRediSugiartoScaledJpeg,
    text: "Piknik bersama Senopati Tour Madiun sangat mengesankan, crew nya sat set dan di dukung armada bus wisata terbaik..",
  },
  {
    id: 2,
    name: "Donna",
    company: "RSI Siti Aisyah Madiun",
    image: imgDrDonna2ScaledJpeg,
    text: "Senopati Memang Terbaik, Dalam Pelayanannya. Saya Tidak salah Pilih Biro yang ada di Madiun ini TOP Banget",
  },
  {
    id: 3,
    name: "Wulaningsih",
    company: "RSUD Soedono Madiun",
    image: imgWulaningsihJpeg,
    text: "Terimakasih Seenopati Tour, Pinknya Jadi lebih bermakna dan Mesenangkan. Semoga lain waktu bisa Pinik lagi",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#f2f4f9] to-white relative overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#d7deed]/20 to-[#7286b2]/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#97a9d0]/20 to-[#d7deed]/20 rounded-full blur-3xl"
      />

      {/* Particle Effects */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#7286b2]/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#7286b2] text-xl lg:text-2xl mb-2"
          >
            Testimoni
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-5xl text-black"
          >
            Apa Kata Mereka ?
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#7286b2] to-transparent max-w-md mx-auto mt-4"
          />
        </motion.div>

        {/* Desktop View - All cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="relative max-w-md mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="bg-[#7286b2] text-white p-3 rounded-full shadow-lg hover:bg-[#59688b] transition-colors"
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="bg-[#7286b2] text-white p-3 rounded-full shadow-lg hover:bg-[#59688b] transition-colors"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-[#7286b2]' : 'w-2 bg-[#d7deed]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-[#d7deed] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
      {/* Decorative Quote Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-4 right-4"
      >
        <Quote size={80} className="text-[#59688b] rotate-180" />
      </motion.div>

      {/* Quote Icon Top */}
      <motion.div
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.5 }}
        className="bg-[#59688b] w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10"
      >
        <Quote size={24} className="text-white" />
      </motion.div>

      {/* Testimonial Text */}
      <div className="flex-grow mb-6 relative z-10">
        <p className="text-black leading-relaxed">
          {testimonial.text}
        </p>
      </div>

      {/* Author Info */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-4 relative z-10"
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <p className="text-black">{testimonial.name}</p>
          <p className="text-[#45516c] text-sm">{testimonial.company}</p>
        </div>
      </motion.div>

      {/* Hover Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-[#7286b2]/10 to-[#97a9d0]/10 pointer-events-none"
      />
    </div>
  );
}