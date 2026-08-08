import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Cpu } from 'lucide-react';
import { getTechIconBadge } from '../../utils/helpers';

export const CaseStudyModal = ({ isOpen, data, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [data, isOpen]);

  if (!isOpen || !data) return null;

  const images = data.gallery || (data.images ? data.images : ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"]);
  const isCert = data.isCert === true;

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-yellow-300/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300" onClick={onClose}>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <button 
        onClick={onClose} 
        className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-black text-white p-2.5 sm:p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all z-50 rounded-xl"
      >
        <X size={20} />
      </button>

      <div className="relative w-full max-w-6xl h-[88vh] bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-3xl flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Header Bar */}
        <div className="flex justify-between items-center px-6 py-3 border-b-2 border-black bg-gray-100 shrink-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 border border-black"></span>
            <span className="font-mono font-black text-xs sm:text-sm uppercase ml-2 text-gray-700">
              {isCert ? "CERTIFICATE_VIEWER" : "PORTFOLIO_VIEWER"} // {data.title}
            </span>
          </div>
          <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 bg-black text-white rounded uppercase">
            {data.category || data.role || "DETAIL"}
          </span>
        </div>

        {/* 2-Column Content */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 overflow-hidden h-full">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-black/95 flex flex-col justify-between relative h-[300px] lg:h-full p-0 overflow-hidden shrink-0">
            <div className="relative w-full h-full flex-grow flex items-center justify-center overflow-hidden p-4">
              <img 
                src={images[activeIndex]} 
                alt={`Slide ${activeIndex + 1}`} 
                className="max-w-full max-h-full w-auto h-auto object-contain block mx-auto drop-shadow-lg"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"; }}
              />
              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-yellow-300 transition-all">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-yellow-300 transition-all">
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
              <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[11px] px-2.5 py-1 rounded border border-white z-10">
                {activeIndex + 1} / {images.length}
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex gap-2 overflow-x-auto max-w-full px-4 hide-scrollbar justify-center z-10">
              {images.map((_, idx) => (
                <button
                  key={idx} 
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                  className={`h-2.5 border border-black transition-all duration-300 rounded-full shadow-sm ${idx === activeIndex ? 'bg-yellow-300 w-7' : 'bg-white/80 w-2.5 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-white overflow-y-auto h-full">
            <div>
              {/* Metadata Header */}
              <div className="mb-6 border-b-2 border-black/10 pb-4">
                {data.year && (
                  <div className="mb-2">
                    <span className="text-xs font-mono font-bold bg-yellow-300 border border-black px-2.5 py-0.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {data.year}
                    </span>
                  </div>
                )}
                <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-black leading-tight">
                  {data.title}
                </h2>
                {(data.institution || data.client || data.location) && (
                  <div className="flex items-center justify-between gap-4 mt-3 pt-2.5 border-t border-black/10 text-xs sm:text-sm font-black text-gray-800">
                    <span className="text-left font-extrabold text-black">
                      {data.institution || data.client || "Project Case Study"}
                    </span>
                    {data.location && (
                      <span className="text-right text-gray-500 font-bold shrink-0 ml-auto">
                        {data.location}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {isCert ? (
                <div className="space-y-4 animate-in fade-in duration-200 py-2">
                  <div className="p-4 bg-yellow-50 border-l-4 border-black font-medium text-gray-800 leading-relaxed text-sm sm:text-base">
                    {data.description}
                  </div>
                  {data.issuer && (
                    <div className="p-4 bg-gray-50 border border-black/30 rounded-xl">
                      <h4 className="font-black text-xs uppercase text-gray-600 mb-1">Issued By / Institution:</h4>
                      <p className="text-sm sm:text-base font-bold text-black">{data.issuer}</p>
                    </div>
                  )}
                  {data.keyInfo && (
                    <div className="p-4 bg-blue-50 border border-black/30 rounded-xl">
                      <h4 className="font-black text-xs uppercase text-blue-900 mb-1">Key Information & Credentials:</h4>
                      <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">{data.keyInfo}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {data.summary && (
                    <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed border-l-4 border-black pl-3 bg-yellow-50 py-2.5 pr-2">
                      {data.summary}
                    </p>
                  )}
                  {data.details && data.details.length > 0 && (
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-wider text-black mb-2 flex items-center gap-1.5">
                        <CheckCircle2 size={15} className="text-green-600" /> Key Highlights & Responsibilities:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-800 leading-relaxed">
                        {data.details.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-black font-black mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="pt-3 border-t border-gray-200">
                    <h4 className="font-black text-xs uppercase text-black mb-2.5 flex items-center gap-1.5">
                      <Cpu size={14}/> Technologies & Arsenal:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(data.techStack || data.tags || ['React.js', 'Tailwind CSS', 'IoT', 'Leadership']).map((t, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-black/80 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-colors">
                          {getTechIconBadge(t)}
                          <span className="text-xs font-black text-black uppercase tracking-tight">
                            {t}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6 mt-8 border-t border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
              <span className="font-mono text-xs text-gray-400 font-bold">RIFQI M. TAMPENG // WORK PORTFOLIO</span>
              <div className="flex gap-2">
                {data.links && data.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all ${link.className || 'bg-yellow-300 text-black hover:bg-yellow-400'}`}
                  >
                    {link.icon}
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};