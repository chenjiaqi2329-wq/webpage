import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, PawPrint, Info, Mail, Instagram, Twitter, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from './lib/utils';

const PETS = [
  {
    id: 1,
    name: 'Luna',
    type: 'Golden Retriever',
    image: 'https://picsum.photos/seed/golden-retriever/600/800',
    description: 'A gentle soul who loves belly rubs and long walks in the park.',
    color: 'bg-amber-50'
  },
  {
    id: 2,
    name: 'Oliver',
    type: 'British Shorthair',
    image: 'https://picsum.photos/seed/cat-oliver/600/800',
    description: 'The king of the living room. Expert at napping and chasing laser pointers.',
    color: 'bg-blue-50'
  },
  {
    id: 3,
    name: 'Mochi',
    type: 'Holland Lop',
    image: 'https://picsum.photos/seed/rabbit-mochi/600/800',
    description: 'Small, fluffy, and full of energy. Loves fresh carrots and nose twitches.',
    color: 'bg-rose-50'
  }
];

export default function App() {
  const [activePet, setActivePet] = useState(PETS[0]);
  const [isPetting, setIsPetting] = useState(false);

  const handlePetting = () => {
    setIsPetting(true);
    setTimeout(() => setIsPetting(false), 1000);
  };

  return (
    <div className="min-h-screen selection:bg-warm-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-warm-bg/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-warm-accent rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12">
              <PawPrint size={24} />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">Pawfect Pals</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-stone-500">
            <a href="#" className="hover:text-warm-accent transition-colors">Home</a>
            <a href="#" className="hover:text-warm-accent transition-colors">About</a>
            <a href="#" className="hover:text-warm-accent transition-colors">Pets</a>
            <a href="#" className="hover:text-warm-accent transition-colors">Contact</a>
          </div>

          <button className="bg-warm-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Adopt Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm-accent/10 text-warm-accent text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>New Friends Await</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-light leading-[0.9] mb-8">
              Find your <br />
              <span className="italic font-medium text-warm-accent">perfect</span> companion.
            </h1>
            <p className="text-xl text-stone-600 max-w-md leading-relaxed mb-10">
              Every pet has a story. We help you find the one that matches yours. 
              Discover the joy of unconditional love today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-all">
                Explore Pets
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 border border-stone-200 px-8 py-4 rounded-full font-medium hover:bg-white transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="pill-image w-full max-w-md mx-auto overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://picsum.photos/seed/happy-dog/800/1000" 
                alt="Happy Dog" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-warm-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-amber-200/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-light mb-4">Meet our friends</h2>
              <p className="text-stone-500 max-w-sm">
                These lovely souls are looking for their forever homes. 
                Could you be the one?
              </p>
            </div>
            <div className="flex gap-2">
              {PETS.map((pet) => (
                <button
                  key={pet.id}
                  onClick={() => setActivePet(pet)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all",
                    activePet.id === pet.id 
                      ? "bg-warm-accent text-white" 
                      : "bg-stone-100 text-stone-500 hover:bg-stone-200"
                  )}
                >
                  {pet.name}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={cn("rounded-[40px] p-8 md:p-12 transition-colors duration-500", activePet.color)}>
                <div className="aspect-square rounded-[32px] overflow-hidden mb-8 shadow-lg">
                  <img 
                    src={activePet.image} 
                    alt={activePet.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-1">{activePet.name}</h3>
                    <p className="text-stone-500 font-medium">{activePet.type}</p>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-rose-500 shadow-sm hover:scale-110 transition-transform">
                    <Heart fill="currentColor" size={20} />
                  </button>
                </div>
              </div>

              <div className="lg:pl-12">
                <div className="flex gap-4 mb-8">
                  <div className="px-4 py-2 rounded-xl bg-stone-100 text-stone-600 text-sm font-semibold">
                    2 Years Old
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-stone-100 text-stone-600 text-sm font-semibold">
                    Vaccinated
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-stone-100 text-stone-600 text-sm font-semibold">
                    Friendly
                  </div>
                </div>
                <h4 className="text-2xl font-serif italic mb-6">"I just want someone to play with!"</h4>
                <p className="text-lg text-stone-600 leading-relaxed mb-10">
                  {activePet.description}
                </p>
                <button className="w-full md:w-auto bg-warm-accent text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-warm-accent/20 hover:opacity-90 transition-all">
                  Adopt {activePet.name}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Interactive Petting Area */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-12">Give them some love</h2>
          <div className="relative inline-block">
            <motion.div
              animate={isPetting ? { 
                scale: [1, 1.05, 1],
                rotate: [0, -2, 2, 0]
              } : {}}
              onClick={handlePetting}
              className="cursor-pointer relative z-10"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://picsum.photos/seed/pet-me/400/400" 
                  alt="Pet me" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <AnimatePresence>
                {isPetting && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: 0 }}
                    animate={{ opacity: 1, scale: 1.5, y: -100 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500 pointer-events-none"
                  >
                    <Heart fill="currentColor" size={40} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <div className="mt-8">
              <p className="text-stone-500 font-medium italic">Click to pet!</p>
            </div>

            {/* Decorative background circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-stone-200 rounded-full -z-10 opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-stone-200 rounded-full -z-10 opacity-50" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <PawPrint size={24} />
              <span className="font-serif text-2xl font-bold tracking-tight">Pawfect Pals</span>
            </div>
            <p className="max-w-xs mb-8">
              Dedicated to finding loving homes for every pet. Join our community and make a difference.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-warm-accent hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-warm-accent hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-warm-accent hover:text-white transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Adopt a Pet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Donation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Resources</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pet Care Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health & Nutrition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-800 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Pawfect Pals. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
