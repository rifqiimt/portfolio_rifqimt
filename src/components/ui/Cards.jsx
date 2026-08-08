import React from 'react';
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';

export const VisualExperienceCard = ({ title, role, year, image, categoryBadgeColor = "bg-yellow-300", onClickDetail }) => {
  return (
    <div 
      onClick={onClickDetail}
      className="group relative w-full h-80 sm:h-96 bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 cursor-pointer select-none"
    >
      <div className="w-full h-full p-2.5 transition-transform duration-500 ease-out">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100 border border-black/20">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      <div className="absolute top-5 right-5 z-10 bg-black text-white px-2.5 py-0.5 text-xs font-mono font-bold border border-white transform rotate-2 group-hover:rotate-0 transition-transform">
        {year}
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between pointer-events-none">
        <div className="space-y-1 transform transition-transform duration-300 group-hover:translate-x-1">
          <span className={`inline-block px-2.5 py-0.5 text-[11px] font-black uppercase text-black border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${categoryBadgeColor}`}>
            {role}
          </span>
          <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-snug">
            {title}
          </h3>
        </div>

        <div className="w-9 h-9 bg-white text-black border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
};

export const ProjectCard = ({ title, category, images, color = "bg-yellow-300", onOpenModal }) => {
  return (
    <div 
      onClick={onOpenModal}
      className="group relative h-80 sm:h-96 w-full bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 cursor-pointer select-none"
    >
      <div className="w-full h-full p-2.5">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100 border border-black/20">
          <img 
            src={images && images[0]} 
            alt={title} 
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      <div className="absolute top-5 left-5 z-10">
        <span className={`px-2.5 py-1 text-[11px] font-black uppercase tracking-wider ${color} text-black border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded`}>
          {category}
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between pointer-events-none">
        <div className="transform transition-transform duration-300 group-hover:translate-x-1">
          <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-snug">
            {title}
          </h3>
        </div>

        <div className="w-9 h-9 bg-white text-black border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
};

export const CertCard = ({ title, subtitle, images, onOpenModal }) => {
    return (
        <div 
          onClick={onOpenModal}
          className="group relative h-72 sm:h-80 w-full bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 cursor-pointer select-none"
        >
            <div className="w-full h-full p-2.5">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100 border border-black/20">
                <img 
                    src={images && images[0]} 
                    alt={title} 
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=600&q=80"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            <div className="absolute top-5 right-5 z-10 bg-black text-white px-2.5 py-0.5 text-[11px] font-mono font-bold border border-white">
                CERTIFICATE
            </div>

            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between pointer-events-none">
                <div className="space-y-1 transform transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-black uppercase text-black bg-green-300 border border-black">
                        {subtitle}
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-snug">
                        {title}
                    </h4>
                </div>

                <div className="w-8 h-8 bg-white text-black border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={15} />
                </div>
            </div>
        </div>
    );
};

export const TechStackCard = ({ icon, name, desc }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-black rounded-lg translate-x-1 translate-y-1"></div>
    <div className="relative bg-white p-3 rounded-lg border-2 border-black flex items-center gap-3 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200 cursor-default">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-black rounded p-1.5 shrink-0">
            <img 
                src={icon} 
                alt={name} 
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" 
                onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;
                }}
            /> 
        </div>
        <div>
            <h4 className="font-bold text-xs sm:text-sm text-black uppercase">{name}</h4>
            <span className="text-[11px] font-bold text-black bg-yellow-300 px-1.5 py-0.5 border border-black rounded">{desc}</span>
        </div>
    </div>
  </div>
);

export const InternshipCard = ({ data, onOpenModal }) => {
  return (
    <div className="relative h-full">
      <div className="absolute -top-4 left-4 bg-green-400 border-2 border-black px-3.5 py-1 font-black uppercase text-xs transform -rotate-1 z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          Professional Internship
      </div>
      
      <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded-lg relative overflow-hidden group h-full flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-36 h-36 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          
          <div>
              <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border-2 border-black flex items-center justify-center p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2 group-hover:rotate-0 transition-transform overflow-hidden">
                      <img 
                          src={data.logo} 
                          alt={`${data.title} Logo`} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
                          }}
                      />
                  </div>
                  
                  <div className="flex-grow">
                      <div className="flex justify-between items-start gap-2">
                          <h3 className="text-lg sm:text-xl font-black uppercase leading-tight">{data.title}</h3>
                          <span className="font-mono font-bold bg-black text-white px-2.5 py-1 text-xs shadow-[2px_2px_0px_0px_#22c55e]">
                              {data.period}
                          </span>
                      </div>
                      <div className="inline-block bg-gray-100 border border-black px-2 py-0.5 mt-1">
                          <p className="font-bold text-xs text-gray-800">{data.role}</p>
                      </div>
                      <p className="text-xs font-bold text-gray-500 mt-1">{data.company} • {data.location}</p>
                  </div>
              </div>

              {data.coreScope && (
                  <div className="bg-green-50 border-l-4 border-black p-4 mb-4 relative">
                      <span className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-1 block">
                          Core Scope & Responsibilities
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm leading-relaxed text-black">
                          {data.coreScope}
                      </h4>
                  </div>
              )}
              
              <ul className="space-y-2 text-gray-800 font-medium text-xs sm:text-sm leading-relaxed mb-6">
                {data.responsibilities.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-black font-black">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
          </div>

          <div className="border-t-2 border-black pt-4 flex flex-wrap justify-between items-center gap-3">
              <div className="flex items-center gap-1.5">
                  {data.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-0.5 bg-yellow-300 border border-black rounded font-bold">{tag}</span>
                  ))}
              </div>
              
              <button 
                  onClick={() => onOpenModal(data.caseStudyData)} 
                  className="group relative inline-flex items-center gap-1.5 bg-yellow-300 border-2 border-black px-4 py-1.5 rounded font-black uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none hover:bg-yellow-400 transition-all ml-auto"
              >
                  <ImageIcon size={14} />
                  View Case Study
              </button>
          </div>
      </div>
    </div>
  );
};