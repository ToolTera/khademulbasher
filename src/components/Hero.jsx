import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
          MD Khademul Basher
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-zinc-400 mb-8">
          Senior Operations & QA Specialist
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-12">
          Results-oriented Senior Operations & Quality Assurance (QA) Specialist with 4.5+ years of experience in US healthcare BPO operations. Skilled in process coordination, Peer Review coaching, Knowledge Transfer, and intercontinental client communication.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Get in touch
          </button>
          <a 
            href="https://linkedin.com/in/khademulbasher"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/10 transition-all hover:scale-105 shadow-lg"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-32 text-zinc-500 cursor-pointer"
        onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
