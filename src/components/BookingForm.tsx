import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="book" className="py-24 bg-[#5C6B4F] text-[#F7F3EC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Book a Free Consultation</h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto font-light">
              Take the first step towards a more sustainable approach to your health. No pressure, just a conversation about where you are and where you want to be.
            </p>
          </motion.div>

          <motion.div
            className="bg-white text-foreground p-8 md:p-12 rounded-[2rem] shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-primary mb-4">Request Sent</h3>
                  <p className="text-foreground/70 text-lg mb-8 max-w-md mx-auto">
                    Thank you for reaching out. Luke will be in touch shortly to arrange your free consultation.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/80">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/80">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground/80">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+44 7000 000000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="goal" className="block text-sm font-medium text-foreground/80">Main Goal</label>
                      <select 
                        id="goal"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                      >
                        <option value="" disabled selected>Select an option...</option>
                        <option value="weight-loss">Weight Loss</option>
                        <option value="confidence">Confidence & Mindset</option>
                        <option value="strength">Strength & Fitness</option>
                        <option value="nutrition">Nutrition Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="time" className="block text-sm font-medium text-foreground/80">Preferred Contact Time</label>
                    <input 
                      type="text" 
                      id="time" 
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="e.g., Weekday mornings, After 5pm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80">Anything else you'd like to add?</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F3EC] border border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell me a bit about your current situation..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold text-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1 hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Request
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
