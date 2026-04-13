import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, setIsDark }) => {
  const navItemClass = `text-[9px] font-semibold uppercase tracking-[0.25em] transition-all ${
    isDark ? 'text-white/50 hover:text-[#c5a358]' : 'text-black/50 hover:text-[#c5a358]'
  }`;

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-colors duration-500 border-b ${
      isDark ? "bg-[#050505]/80 border-white/[0.05]" : "bg-white/80 border-black/[0.05]"
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        
        {/* Identity */}
        <div className="flex flex-col">
          <span className={`font-serif-stylish text-xl tracking-widest uppercase ${isDark ? 'text-white' : 'text-black'}`}>
            Siddhant
          </span>
          <span className="text-emerald-500 text-[7px] font-bold tracking-[0.3em] uppercase">Available for Hire</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {['Home', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={navItemClass}>{item}</a>
            ))}
          </div>

          <div className={`h-4 w-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>

          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-all ${isDark ? 'text-white hover:bg-white/5' : 'text-black hover:bg-black/5'}`}
          >
            {isDark ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;