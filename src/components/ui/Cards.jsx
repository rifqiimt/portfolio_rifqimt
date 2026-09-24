import React, { useState } from 'react';
import { ArrowUpRight, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

export const VisualExperienceCard = ({ title, role, year, image, categoryBadgeColor = "bg-yellow-300", onClickDetail }) => {
  return (
    <div
      onClick={onClickDetail}
      className="group relative w-full h-80 sm:h-96 bg-white border border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-300 cursor-pointer select-none"
    >
      <div className="w-full h-full p-1.5 transition-transform duration-500 ease-out">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100 border border-black/15">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      <div className="absolute top-4 right-4 z-10 bg-black text-white px-2 py-0.5 text-xs font-mono font-bold border border-white transform rotate-2 group-hover:rotate-0 transition-transform">
        {year}
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between pointer-events-none">
        <div className="space-y-1 transform transition-transform duration-300 group-hover:translate-x-0.5">
          <span className={`inline-block px-2 py-0.5 text-[11px] font-black uppercase text-black border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] ${categoryBadgeColor}`}>
            {role}
          </span>
          <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-snug">
            {title}
          </h3>
        </div>

        <div className="w-8 h-8 bg-white text-black border border-black rounded-full flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={15} />
        </div>
      </div>
    </div>
  );
};

export const ProjectCard = ({ title, category, images, color = "bg-yellow-300", summary, techStack, links, onOpenModal }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const imageList = Array.isArray(images) && images.length > 0 
    ? images 
    : ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"];

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % imageList.length);
  };

  return (
    <div
      onClick={onOpenModal}
      className={`group relative w-full h-full bg-white border border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 select-none flex flex-col min-h-[720px] sm:min-h-[760px] ${
        onOpenModal ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      {/* BAGIAN ATAS: GAMBAR PROJEK & SLIDER (DIBESARKAN AGAR TERLIHAT MAKSIMAL) */}
      <div className="w-full p-1.5 pb-0">
        <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-gray-100 border border-black/15">
          <img
            src={imageList[activeImageIdx]}
            alt={`${title} - view ${activeImageIdx + 1}`}
            className="w-full h-full object-contain object-center transform transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"; }}
          />

          {/* Category Badge di pojok kiri atas gambar */}
          <div className="absolute top-2.5 left-2.5 z-20">
            <span className={`px-2 py-0.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider ${color} text-black border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] rounded`}>
              {category}
            </span>
          </div>

          {/* Tombol navigasi slider gambar (menimpa gambar di kiri dan kanan) */}
          {imageList.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/60 hover:bg-yellow-300/90 backdrop-blur-[2px] text-black border border-black/70 flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,0.7)] transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft size={13} strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/60 hover:bg-yellow-300/90 backdrop-blur-[2px] text-black border border-black/70 flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,0.7)] transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight size={13} strokeWidth={2.5} />
              </button>

              {/* Indicator dots di bawah gambar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 items-center bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/30">
                {imageList.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setActiveImageIdx(i); }}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === activeImageIdx ? 'w-3.5 bg-yellow-300' : 'w-1.5 bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* BAGIAN BAWAH: JUDUL, SUMMARY/DESKRIPSI, TECH STACK & LINKS */}
      <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-base sm:text-lg font-black text-black uppercase tracking-tight leading-snug line-clamp-2 mb-1.5 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {summary && (
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-4">
              {summary}
            </p>
          )}
        </div>

        <div className="mt-3 pt-2.5 border-t border-black/10">
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {techStack.slice(0, 4).map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 border border-black/20 rounded text-gray-800"
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 4 && (
                <span className="text-[10px] font-bold text-gray-500 self-center">
                  +{techStack.length - 4}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between gap-2">
            {links && links.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase border border-black rounded-lg shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[0.5px] hover:translate-y-[0.5px] transition-all ${
                      link.className || 'bg-yellow-300 text-black hover:bg-yellow-400'
                    }`}
                  >
                    {link.icon}
                    {link.text}
                  </a>
                ))}
              </div>
            ) : (
              <span className="text-[10px] font-mono text-gray-400 font-bold">PROJECT SHOWCASE</span>
            )}

            {onOpenModal && (
              <button
                type="button"
                onClick={onOpenModal}
                className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-black hover:border hover:border-black transition-all ml-auto shrink-0"
                title="View Details"
              >
                <ArrowUpRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CertCard = ({ title, subtitle, images, onOpenModal }) => {
  return (
    <div
      onClick={onOpenModal}
      className="group relative h-72 sm:h-80 w-full bg-white border border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-300 cursor-pointer select-none"
    >
      <div className="w-full h-full p-1.5">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100 border border-black/15">
          <img
            src={images && images[0]}
            alt={title}
            className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=600&q=80"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      <div className="absolute top-4 right-4 z-10 bg-black text-white px-2 py-0.5 text-[11px] font-mono font-bold border border-white">
        CERTIFICATE
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between pointer-events-none">
        <div className="space-y-1 transform transition-transform duration-300 group-hover:translate-x-0.5">
          <span className="inline-block px-2 py-0.5 text-[10px] font-black uppercase text-black bg-green-300 border border-black">
            {subtitle}
          </span>
          <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-snug">
            {title}
          </h4>
        </div>

        <div className="w-8 h-8 bg-white text-black border border-black rounded-full flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={15} />
        </div>
      </div>
    </div>
  );
};

export const TechStackCard = ({ icon, name, desc }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-black rounded-lg translate-x-[2px] translate-y-[2px]"></div>
    <div className="relative bg-white p-2.5 rounded-lg border border-black flex items-center gap-2.5 hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform duration-200 cursor-default">
      <div className="w-9 h-9 flex items-center justify-center bg-gray-100 border border-black rounded p-1.5 shrink-0">
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
        <h4 className="font-bold text-xs sm:text-sm text-black uppercase leading-tight">{name}</h4>
        <span className="text-[10px] font-bold text-black bg-yellow-300 px-1.5 py-0.5 border border-black rounded">{desc}</span>
      </div>
    </div>
  </div>
);

export const InternshipCard = ({ data, onOpenModal }) => {
  return (
    <div className="relative h-full">
      <div className="absolute -top-3.5 left-4 bg-green-400 border border-black px-3 py-0.5 font-black uppercase text-xs transform -rotate-1 z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        Internship
      </div>

      <div className="bg-white border border-black p-4 sm:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all rounded-lg relative overflow-hidden group h-full flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-36 h-36 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

        <div>
          <div className="flex items-start gap-3.5 mb-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white border border-black flex items-center justify-center p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-1 group-hover:rotate-0 transition-transform overflow-hidden">
              <img
                src={data.logo}
                alt={`${data.title} Logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
                }}
              />
            </div>

            <div className="flex-grow">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-base sm:text-lg font-black uppercase leading-tight">{data.title}</h3>
                <span className="font-mono font-bold bg-black text-white px-2 py-0.5 text-xs shadow-[1.5px_1.5px_0px_0px_#22c55e]">
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
            <div className="bg-green-50 border-l-4 border-black p-3 mb-3 relative">
              <span className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-0.5 block">
                Core Scope & Responsibilities
              </span>
              <h4 className="font-bold text-xs sm:text-sm leading-relaxed text-black">
                {data.coreScope}
              </h4>
            </div>
          )}

          <ul className="space-y-1.5 text-gray-800 font-medium text-xs sm:text-sm leading-relaxed mb-4">
            {data.responsibilities.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-black font-black">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-black pt-3 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            {data.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 bg-yellow-300 border border-black rounded font-bold">{tag}</span>
            ))}
          </div>

          <button
            onClick={() => onOpenModal(data.caseStudyData)}
            className="group relative inline-flex items-center gap-1.5 bg-yellow-300 border border-black px-3.5 py-1.5 rounded font-black uppercase text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-none hover:bg-yellow-400 transition-all ml-auto"
          >
            <ImageIcon size={14} />
            View Case Study
          </button>
        </div>
      </div>
    </div>
  );
};