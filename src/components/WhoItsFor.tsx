import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WhoItsFor() {
  const points = [
    "You've been caught in the exhausting cycle of yo-yo dieting.",
    "You want to build confidence and heal your relationship with food.",
    "You have a demanding life and need a routine that actually fits your schedule.",
    "You want a coach who factors in your stress, sleep, travel, and hormonal cycle."
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-[#F7F3EC] rounded-full blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/3"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Who is this for?</h2>
            <p className="text-xl text-primary-foreground/80 font-light mb-8 leading-relaxed max-w-lg">
              This isn't for those looking for a 30-day shred or aggressive "no excuses" fitness culture. This is for you if:
            </p>
            <ul className="space-y-6">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-4 text-lg text-primary-foreground/90"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#F7F3EC] p-8 md:p-12 rounded-3xl text-foreground text-center relative shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Ready to break the cycle?</h3>
              <p className="text-foreground/70 mb-8">
                Let's discuss where you are and map out a sustainable path forward. No judgment, just clarity.
              </p>
              <a
                href="#book"
                className="inline-block px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:bg-accent/90 transition-all hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
              >
                Book a Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
