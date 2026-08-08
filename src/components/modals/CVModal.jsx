import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-yellow-300/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300" onClick={onClose}>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <button 
        onClick={onClose} 
        className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-black text-white p-2.5 sm:p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all z-50 rounded-xl"
      >
        <X size={20} />
      </button>

      <div className="relative w-full max-w-5xl h-full max-h-[88vh] bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-3xl flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        <div className="flex justify-between items-center px-6 py-3 border-b-2 border-black bg-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 border border-black"></span>
            <span className="font-mono font-black text-xs sm:text-sm uppercase ml-2 text-gray-700">
              CV_VIEWER // RIFQI_MUBARAK_TAMPENG_CV.PDF
            </span>
          </div>
          <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 bg-black text-white rounded uppercase">
            RESUME
          </span>
        </div>

        <div className="flex-grow bg-gray-200 relative overflow-hidden flex items-center justify-center">
          <iframe 
            src="cv.pdf" 
            title="CV Rifqi Mubarak Tampeng" 
            className="w-full h-full min-h-[55vh] border-0 relative z-10"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-6 text-center z-0">
            <p className="text-sm font-bold text-gray-600 mb-4">PDF preview is not directly supported in this browser.</p>
            <a 
              href="cv.pdf" 
              download="CV_Rifqi_Mubarak_Tampeng.pdf"
              className="px-6 py-3 bg-yellow-300 border-2 border-black font-black text-xs uppercase rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              Download CV.pdf
            </a>
          </div>
        </div>

        <div className="p-4 sm:px-6 bg-white border-t-2 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <span className="font-mono text-xs text-gray-400 font-bold">CURRICULUM VITAE // PROFESSIONAL RESUME</span>
          <div className="flex gap-2">
            <a
              href="cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-all"
            >
              <ExternalLink size={14} /> Open in New Tab
            </a>
            <a
              href="cv.pdf"
              download="CV_Rifqi_Mubarak_Tampeng.pdf"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase bg-yellow-300 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};