import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Dock from './components/Dock';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero setActiveTab={setActiveTab} />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="relative bg-mac-bg h-screen w-full overflow-hidden font-sans flex flex-col">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[150%] h-[500px] bg-gradient-to-b from-blue-900/30 via-transparent to-transparent blur-3xl transform -rotate-12" />
        <div className="absolute bottom-0 -right-1/4 w-[150%] h-[500px] bg-gradient-to-t from-purple-900/20 via-transparent to-transparent blur-3xl transform rotate-12" />
      </div>

      <main className="relative z-10 flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="h-full w-full overflow-y-auto pb-32 pt-8 px-6"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Dock activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
