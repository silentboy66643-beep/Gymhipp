import { motion } from 'motion/react';
import { Dumbbell, Apple, Brain, Compass } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      title: "Personalised Training",
      icon: Dumbbell,
      description: "Custom programs designed around your starting point, physical constraints, and what you actually enjoy doing. No cookie-cutter routines."
    },
    {
      title: "Nutrition Guidance",
      icon: Apple,
      description: "We abandon restrictive diets. Instead, we focus on understanding nourishment, satisfying cravings sensibly, and healing your relationship with food."
    },
    {
      title: "Mindset & Habit Coaching",
      icon: Brain,
      description: "Identifying the deep-rooted emotional triggers that derail your progress, replacing self-sabotage with self-awareness and sustainable behavioral shifts."
    },
    {
      title: "Accountability & Flexibility",
      icon: Compass,
      description: "Life happens. When travel, stress, or your menstrual cycle impacts your energy, we adapt the plan. Constant support to keep you moving forward."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="programs" className="py-24 bg-[#E8E4DB]/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-foreground"
          >
            What's Included
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 text-lg"
          >
            A comprehensive approach addressing all facets of your wellbeing.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-sm border border-primary/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#F7F3EC] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <pillar.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{pillar.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
