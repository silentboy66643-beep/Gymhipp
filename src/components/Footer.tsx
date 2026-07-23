import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="font-serif text-2xl font-bold tracking-tight inline-block mb-6">
              GymHippie
            </a>
            <p className="text-white/60 max-w-sm mb-8 font-light leading-relaxed">
              Holistic personal training in Reading. Combining physical training, nutrition guidance, mindset coaching, and emotional-trigger awareness.
            </p>
            <div className="flex items-center gap-2 bg-white/10 w-max px-4 py-2 rounded-full text-sm font-medium text-white/90">
              <Heart size={14} className="text-[#C1714A]" fill="currentColor" />
              LGBTQ+ Friendly Space
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <address className="not-italic text-white/60 space-y-3 text-sm leading-relaxed">
              <p>Buzz Gym Reading Central<br />Inside House Of Fisher<br />100 Kings Road<br />Reading RG1 3BY, UK</p>
              <p><a href="tel:+447912794918" className="hover:text-white transition-colors">+44 7912 794918</a></p>
              <p><a href="https://gymhippie.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">gymhippie.co.uk</a></p>
            </address>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">What's Included</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Meet Luke</a></li>
              <li><a href="#book" className="hover:text-white transition-colors">Book Consultation</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} GymHippie Holistic Personal Training. All rights reserved.
          </p>
          <div className="flex gap-4 text-white/40">
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
