import { motion } from 'motion/react';

export default function MeetLuke() {
  return (
    <section id="about" className="py-24 bg-[#E8E4DB]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto">
          
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Photo Placeholder */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl bg-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop" 
                alt="Luke - Head Coach" 
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%] mix-blend-multiply"
                // Placeholder image from unsplash - Replace with real photography
              />
              <div className="absolute inset-0 border border-black/5 rounded-[2rem]" />
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-2">Meet Luke</h2>
            <p className="text-xl text-primary font-medium mb-8">Head Coach & Founder</p>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed font-light text-lg">
              <p>
                Hi, I'm Luke. I started GymHippie because I saw too many people fighting a losing battle against themselves. The fitness industry often preaches that if you're not succeeding, you just aren't trying hard enough. I fundamentally disagree.
              </p>
              <p>
                My approach is rooted in emotional intelligence and deep empathy. I believe that true transformation happens when we stop treating our bodies like machines to be punished, and start understanding the emotional triggers that drive our habits.
              </p>
              <p>
                Whether we're working on strength, nutrition, or mindset, my goal is to provide a safe, welcoming space where we can adapt your training to your real, messy, beautiful life.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Certifications & Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {["Level 4 Personal Trainer", "Nutrition Coach", "Mindset Practitioner", "Holistic Health Guide"].map(cert => (
                  <span key={cert} className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-foreground/70 shadow-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
