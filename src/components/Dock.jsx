import { useState } from 'react';
import { Home, Briefcase, FileCode2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dock({ activeTab, setActiveTab }) {
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: FileCode2, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-mac-dock/30 backdrop-blur-xl border border-mac-border shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isHovered = hovered === item.id;
          const isActive = activeTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                scale: isHovered ? 1.2 : isActive ? 1.1 : 1,
                y: isHovered ? -10 : isActive ? -5 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative group p-3 rounded-xl transition-colors ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'text-blue-400' : 'text-mac-text'}`} />
              
              {/* Active Dot indicator */}
              {isActive && (
                <motion.div 
                  layoutId="activeDot"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" 
                />
              )}

              {/* Tooltip */}
              {isHovered && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800 text-xs font-medium rounded-lg text-white shadow-lg whitespace-nowrap"
                >
                  {item.label}
                  {/* Tooltip Arrow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45" />
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  );
}
