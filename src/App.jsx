import React from 'react';
import Dock from './components/Dock';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative bg-mac-bg min-h-screen font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-0 -left-1/4 w-[150%] h-[500px] bg-gradient-to-b from-blue-900/30 via-transparent to-transparent blur-3xl transform -rotate-12" />
        <div className="absolute bottom-0 -right-1/4 w-[150%] h-[500px] bg-gradient-to-t from-purple-900/20 via-transparent to-transparent blur-3xl transform rotate-12" />
      </div>

      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Dock />
    </div>
  );
}

export default App;
