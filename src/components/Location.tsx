import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-8">Where to find us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F7F3EC] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Buzz Gym Reading Central</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Inside House Of Fisher, 100 Kings Road<br />
                    Reading RG1 3BY, UK<br />
                    Plus Code: F23P+R9 Reading, United Kingdom
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Buzz+Gym+Reading+Central,100+Kings+Rd,Reading"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                  >
                    <Navigation size={18} />
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F7F3EC] rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-foreground/70">
                    Open 24 hours<br />
                    <em>1-to-1 training by appointment only</em>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F7F3EC] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-foreground/70 mb-4">Have a quick question?</p>
                  <a 
                    href="tel:+447912794918"
                    className="inline-flex px-6 py-3 bg-[#F7F3EC] hover:bg-[#E8E4DB] text-foreground font-semibold rounded-full transition-colors"
                  >
                    +44 7912 794918
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Map Placeholder */}
            <div className="aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#E8E4DB] relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                alt="Map of Reading" 
                className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                // Placeholder image for map
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-primary font-semibold">
                  <MapPin size={20} />
                  Reading, UK
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
