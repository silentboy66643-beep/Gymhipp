import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simple count-up effect when component mounts
    let start = 0;
    const end = 159;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const reviews = [
    {
      name: "Sarah T.",
      text: "Luke completely transformed my relationship with food. I've finally ended the yo-yo dieting cycle and learned to sustain my results. It's not just about chasing a goal anymore; it's a lifestyle I actually enjoy.",
      tags: ["mindset change", "nutrition advice"]
    },
    {
      name: "Emma W.",
      text: "An overwhelmingly positive experience from start to finish. Luke's holistic approach means he factors in the whole of your life—stress, sleep, and work—not just what you do in the gym.",
      tags: ["holistic approach", "goal setting"]
    },
    {
      name: "James L.",
      text: "I've gained so much body confidence. The training is tailored perfectly, and the focus on emotional triggers has helped me understand why I struggled with consistency in the past.",
      tags: ["mindset change", "holistic approach"]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F7F3EC] px-6 py-3 rounded-full mb-6 border border-primary/10"
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="font-bold text-lg text-foreground">5.0</span>
            <span className="text-foreground/60">from</span>
            <span className="font-bold text-lg text-primary">{count}</span>
            <span className="text-foreground/60">Google Reviews</span>
          </motion.div>
          
          <h2 className="text-4xl font-bold text-foreground">Real Stories, Real Change</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F7F3EC] p-8 md:p-14 rounded-[40px] relative text-center"
          >
            <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6 rotate-180" />
            
            <p className="text-xl md:text-2xl font-serif text-foreground/90 leading-relaxed mb-8">
              "{reviews[activeIndex].text}"
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {reviews[activeIndex].tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-primary uppercase tracking-wider shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-semibold text-lg text-foreground">
              {reviews[activeIndex].name}
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevReview}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextReview}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
