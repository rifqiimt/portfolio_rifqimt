import React from 'react';
import { Menu, X, FileText, Mail, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ 
  scrolled, 
  activeSection, 
  navLinks, 
  scrollTo, 
  isMenuOpen, 
  setIsMenuOpen, 
  openCVModal 
}) => {
  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}>
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl px-5 py-2.5 flex justify-between items-center transition-all duration-300">
        
        <div 
          className="text-base font-black italic tracking-tighter cursor-pointer flex items-center gap-1.5 select-none text-black hover:-rotate-2 transition-transform" 
          onClick={() => scrollTo('home')}
        >
          RIFQI<span className="bg-black text-white px-2 py-0.5 text-[11px] rounded font-bold not-italic">.MT</span>
        </div>

        <div className="hidden md:flex items-center relative p-1 rounded-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`relative z-10 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-gray-600 hover:text-black'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <span 
                    className="absolute inset-0 bg-yellow-300 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -z-0"
                    style={{ transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={openCVModal}
            className="hidden sm:flex bg-yellow-300 border-2 border-black text-black font-black text-xs uppercase px-3.5 py-2 rounded-lg items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <FileText size={14} /> CV
          </button>
          <a 
            href="mailto:tampengrifqmubarak@gmail.com" 
            className="hidden sm:flex bg-pink-400 border-2 border-black text-black font-bold text-xs uppercase px-4 py-2 rounded-lg items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <Mail size={14}/> Hire Me!
          </a>
          <button 
            className="md:hidden p-2 border-2 border-black rounded-lg bg-white active:bg-black active:text-white transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full mt-2 left-0 w-full bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl overflow-hidden animate-in slide-in-from-top-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => { scrollTo(link.id); setIsMenuOpen(false); }}
              className={`w-full text-left px-6 py-3.5 font-bold uppercase text-sm border-b-2 border-black/10 last:border-b-0 flex justify-between items-center transition-colors ${
                activeSection === link.id ? 'bg-yellow-300 font-black' : 'hover:bg-yellow-100'
              }`}
            >
              {link.name}
              <ArrowUpRight size={18} />
            </button>
          ))}
          <button
            onClick={() => { openCVModal(); setIsMenuOpen(false); }}
            className="w-full text-left px-6 py-3.5 font-black uppercase text-sm bg-yellow-300 flex justify-between items-center transition-colors"
          >
            View / Download CV.PDF
            <FileText size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};