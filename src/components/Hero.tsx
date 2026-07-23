import { motion } from 'motion/react';
import { Star, Heart } from 'lucide-react';

export default function Hero({ isReady = true }: { isReady?: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Soft organic backgrounds */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8E4DB] rounded-full blur-[80px] opacity-70 -z-10 translate-x-1/3 -translate-y-1/4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E8E4DB] rounded-full blur-[80px] opacity-50 -z-10 -translate-x-1/4 translate-y-1/4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isReady ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-black/5 text-sm font-medium">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-foreground/80 font-semibold tracking-tight">5.0</span>
              <span className="text-foreground/60">(159 reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-black/5 text-sm font-medium text-foreground/80">
              <Heart size={14} className="text-[#C1714A]" fill="currentColor" />
              LGBTQ+ Friendly
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-foreground mb-6 leading-[1.1]"
          >
            Sustainable mind and body transformation.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/70 mb-10 text-balance max-w-2xl mx-auto font-light leading-relaxed"
          >
            1-to-1 holistic personal training in Reading. We go beyond the gym floor to build habits that fit your real life.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#book"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Book a Free Consultation
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-foreground border-2 border-primary/20 font-semibold text-lg hover:border-primary/50 hover:bg-primary/5 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Meet Luke
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
