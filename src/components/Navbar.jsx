import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react"; // Added Menu icons

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navItemClass = `text-[10px] md:text-[9px] font-semibold uppercase tracking-[0.25em] transition-all ${
    isDark
      ? "text-white/50 hover:text-[#c5a358]"
      : "text-black/50 hover:text-[#c5a358]"
  }`;

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-colors duration-500 border-b pb-safe ${
        isDark
          ? "bg-[#050505]/80 border-white/[0.05]"
          : "bg-white/80 border-black/[0.05]"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex justify-between items-center">
        <div className="flex flex-col">
          <span
            className={`font-serif-stylish text-xl tracking-widest uppercase ${isDark ? "text-white" : "text-black"}`}
          >
            Siddhant
          </span>
          <span className="text-emerald-500 text-[7px] font-bold tracking-[0.3em] uppercase">
            Available for Hire
          </span>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className={isDark ? "text-white" : "text-black"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={isDark ? "text-white" : "text-black"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {[
              "Home",
              "Experience",
              "Education",
              "Skills",
              "Projects",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={navItemClass}
              >
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full ${isDark ? "text-white" : "text-black"}`}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-20 left-0 w-full p-8 space-y-6 border-b animate-in slide-in-from-top ${
            isDark ? "bg-[#050505] border-white/5" : "bg-white border-black/5"
          }`}
        >
          {[
            "Home",
            "Experience",
            "Education",
            "Skills",
            "Projects",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-[12px] font-bold uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
