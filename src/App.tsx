import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Pillars from './components/Pillars';
import WhoItsFor from './components/WhoItsFor';
import Reviews from './components/Reviews';
import MeetLuke from './components/MeetLuke';
import Location from './components/Location';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSplash]);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile CTA after scrolling past the hero
      setShowMobileCTA(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-foreground">
      {showSplash && <SplashScreen onComplete={() => {
        setShowSplash(false);
        setIsSplashComplete(true);
      }} />}
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isSplashComplete ? 1 : 0, y: isSplashComplete ? 0 : -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Header />
      </motion.div>
      
      <main>
        <Hero isReady={isSplashComplete} />
        <Philosophy />
        <Pillars />
        <WhoItsFor />
        <Reviews />
        <MeetLuke />
        <Location />
        <BookingForm />
      </main>

      <Footer />

      {/* Mobile Sticky CTA */}
      <AnimatePresence>
        {showMobileCTA && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 p-4 pb-safe flex gap-3 border-t border-black/5"
          >
            <a 
              href="tel:+447912794918"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F7F3EC] text-foreground font-semibold"
            >
              <Phone size={18} />
              Call
            </a>
            <a 
              href="#book"
              className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
            >
              <Calendar size={18} />
              Book Free Consult
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
