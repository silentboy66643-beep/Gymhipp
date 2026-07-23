import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-white">
      {/* Breathing background shape */}
      <motion.div
        className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#F7F3EC] rounded-[100px] rotate-45 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-70"
        animate={{ 
          scale: [1, 1.05, 1],
          borderRadius: ["100px", "120px", "100px"] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Holistic Training Works</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              True fitness isn't built on rigid discipline and white-knuckling your way through cravings. It's built on deep self-awareness. When we only focus on the mechanics of exercise and diet, we ignore the human being experiencing them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">Unpacking the Invisible Triggers</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Most consistency struggles are framed as a "lack of drive." In reality, they are often rooted in unrecognized emotional triggers. We cannot out-train a thought pattern we don't understand. By examining our relationship with stress, rest, and food, we dismantle the cycles that keep us stuck.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">Adapting to Real Life</h3>
              <p className="text-foreground/70 leading-relaxed">
                A training program that demands you bend your entire life around it is destined to fail. Whether you're navigating a demanding career, frequent travel, sleep fluctuations, or your menstrual cycle, your routine should flex and adapt. We build resilience by working with your life, not against it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
              <div className="relative bg-[#F7F3EC] p-8 md:p-12 rounded-3xl border border-primary/10 shadow-sm">
                <svg className="w-10 h-10 text-accent/40 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-2xl md:text-3xl font-serif text-primary leading-tight font-medium">
                  "You can't change a thought pattern you don't understand."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-1 bg-accent rounded-full" />
                  <span className="font-medium text-foreground/80 tracking-wide uppercase text-sm">Luke, Head Coach</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
