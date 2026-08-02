import { motion } from 'framer-motion';

export default function Hero({ setActiveTab }) {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="text-center max-w-4xl mx-auto">
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
            onClick={() => setActiveTab('contact')}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Get in touch
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/10 transition-all hover:scale-105 shadow-lg"
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}
