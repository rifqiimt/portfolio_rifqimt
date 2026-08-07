import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Box, 
  Cpu, 
  Smartphone, 
  Award,
  BookOpen,
  Users,
  Briefcase,
  Menu,
  X,
  Image as ImageIcon,
  Instagram,
  Figma,
  ChevronLeft,
  ChevronRight,
  Phone,
  Zap,
  MousePointer2,
  Terminal,
  ArrowUpRight,
  Youtube,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  FileText,
  Globe,
  Layers,
  Database,
  Cloud
} from 'lucide-react';

/* --- HOOKS & UTILS --- */

// 1. REVEAL HOOK: Trigger Once
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible];
};

// 2. AUTO-SCROLL CAROUSEL HOOK
const useAutoScroll = (ref, speed = 0.8) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationId;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        if (element.scrollLeft >= element.scrollWidth - element.clientWidth - 1) {
           element.scrollLeft = 0; 
        } else {
           element.scrollLeft += speed;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => isPaused = true;
    const handleMouseLeave = () => isPaused = false;
    const handleTouchStart = () => isPaused = true;
    const handleTouchEnd = () => {
      setTimeout(() => { isPaused = false; }, 1000);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchend', handleTouchEnd);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [ref, speed]);
};

/* --- HELPER IKON LOGO UNTUK TECH STACK DI DALAM MODAL --- */
const getTechIconBadge = (techName) => {
  const name = techName.toLowerCase();
  
  if (name.includes("react")) {
    return <Code size={14} className="text-blue-500" />;
  }
  if (name.includes("tailwind")) {
    return <Palette size={14} className="text-cyan-500" />;
  }
  if (name.includes("unity")) {
    return <Box size={14} className="text-gray-900" />;
  }
  if (name.includes("vuforia") || name.includes("webar") || name.includes("zapworks")) {
    return <Smartphone size={14} className="text-orange-500" />;
  }
  if (name.includes("blender") || name.includes("3d") || name.includes("meshroom")) {
    return <Layers size={14} className="text-amber-600" />;
  }
  if (name.includes("figma") || name.includes("ui/ux") || name.includes("maze")) {
    return <Figma size={14} className="text-pink-500" />;
  }
  if (name.includes("arduino") || name.includes("esp32") || name.includes("iot") || name.includes("sensor")) {
    return <Cpu size={14} className="text-emerald-600" />;
  }
  if (name.includes("firebase") || name.includes("cloud") || name.includes("database")) {
    return <Database size={14} className="text-amber-500" />;
  }
  return <Terminal size={14} className="text-gray-700" />;
};

/* --- MODAL KHUSUS CV.PDF --- */
const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-yellow-300/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300" onClick={onClose}>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      {/* Tombol Tutup Modal */}
      <button 
        onClick={onClose} 
        className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-black text-white p-2.5 sm:p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all z-50 rounded-xl"
      >
        <X size={20} />
      </button>

      {/* Container Utama Modal CV */}
      <div className="relative w-full max-w-5xl h-full max-h-[88vh] bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-3xl flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Header Bar */}
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

        {/* PDF Embed / Iframe */}
        <div className="flex-grow bg-gray-200 relative overflow-hidden flex items-center justify-center">
          <iframe 
            src="cv.pdf#toolbar=0" 
            title="CV Rifqi Mubarak Tampeng" 
            className="w-full h-full min-h-[55vh] border-0 relative z-10"
          />
          {/* Fallback info jika browser HP tidak mendukung render iframe PDF */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-6 text-center z-0">
            <p className="text-sm font-bold text-gray-600 mb-4">Pratinjau PDF tidak didukung secara langsung di peramban ini.</p>
            <a 
              href="cv.pdf" 
              download="CV_Rifqi_Mubarak_Tampeng.pdf"
              className="px-6 py-3 bg-yellow-300 border-2 border-black font-black text-xs uppercase rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              Download CV.pdf
            </a>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="p-4 sm:px-6 bg-white border-t-2 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <span className="font-mono text-xs text-gray-400 font-bold">CURRICULUM VITAE // PROFESSIONAL RESUME</span>
          <div className="flex gap-2">
            <a
              href="cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-all"
            >
              <ExternalLink size={14} /> Buka di Tab Baru
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

/* --- MODAL STUDI KASUS & SERTIFIKAT (GAMBAR STATIS/STICKY + CLIENT & LOCATION 1 BARIS) --- */
const CaseStudyModal = ({ isOpen, data, onClose }) => {
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
      
      {/* Tombol Tutup Modal */}
      <button 
        onClick={onClose} 
        className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-black text-white p-2.5 sm:p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all z-50 rounded-xl"
      >
        <X size={20} />
      </button>

      {/* Container Utama Modal (Tinggi dikunci 88vh agar kolom anak bisa mandiri/statis) */}
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

        {/* Konten 2 Kolom: Kolom Kiri Dikunci h-full (Statis), Kolom Kanan Bisa Scroll (overflow-y-auto) */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 overflow-hidden h-full">
          
          {/* === KOLOM KIRI: GAMBAR STATIS (TIDAK IKUT SCROLL) & OBJECT-CONTAIN (TIDAK TERPOTONG) === */}
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
                  <button 
                    onClick={prevImage} 
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-yellow-300 transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={nextImage} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-yellow-300 transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
              
              <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[11px] px-2.5 py-1 rounded border border-white z-10">
                {activeIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Indicator Dots */}
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

          {/* === KOLOM KANAN: TEKS YANG BISA DI-SCROLL INDEPENDEN === */}
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
                
                {/* === CLIENT (KIRI) & LOCATION (KANAN) DALAM 1 BARIS YANG SAMA === */}
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

              {/* TAMPILAN KHUSUS SERTIFIKAT */}
              {isCert ? (
                <div className="space-y-4 animate-in fade-in duration-200 py-2">
                  <div className="p-4 bg-yellow-50 border-l-4 border-black font-medium text-gray-800 leading-relaxed text-sm sm:text-base">
                    {data.description}
                  </div>
                  
                  {data.issuer && (
                    <div className="p-4 bg-gray-50 border border-black/30 rounded-xl">
                      <h4 className="font-black text-xs uppercase text-gray-600 mb-1">Diterbitkan Oleh / Instansi:</h4>
                      <p className="text-sm sm:text-base font-bold text-black">{data.issuer}</p>
                    </div>
                  )}

                  {data.keyInfo && (
                    <div className="p-4 bg-blue-50 border border-black/30 rounded-xl">
                      <h4 className="font-black text-xs uppercase text-blue-900 mb-1">Informasi Kunci & Kredensial:</h4>
                      <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">{data.keyInfo}</p>
                    </div>
                  )}
                </div>
              ) : (
                /* TAMPILAN STUDI KASUS PROYEK & EXPERIENCE */
                <div className="space-y-5 animate-in fade-in duration-200">
                  
                  {/* Executive Summary Paragraph */}
                  {data.summary && (
                    <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed border-l-4 border-black pl-3 bg-yellow-50 py-2.5 pr-2">
                      {data.summary}
                    </p>
                  )}

                  {/* Bullet Points Details (Semua informasi penting termasuk webinar moderator terjamin tampil utuh) */}
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

                  {/* Tech Stack & Tools dalam Bentuk Badge Ikon + Teks */}
                  <div className="pt-3 border-t border-gray-200">
                    <h4 className="font-black text-xs uppercase text-black mb-2.5 flex items-center gap-1.5">
                      <Cpu size={14}/> Technologies & Arsenal:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(data.techStack || data.tags || ['React.js', 'Tailwind CSS', 'IoT', 'Leadership']).map((t, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-black/80 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-colors"
                        >
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

            {/* Footer Modal Action Buttons */}
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

// --- COMPONENTS LAINNYA ---
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 cubic-bezier(0.175, 0.885, 0.32, 1.275) transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// COMPONENT: Visual Experience Card
const VisualExperienceCard = ({ title, role, year, image, categoryBadgeColor = "bg-yellow-300", onClickDetail }) => {
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

// COMPONENT: Project Card
const ProjectCard = ({ title, category, images, color = "bg-yellow-300", onOpenModal }) => {
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

// COMPONENT: Cert Card
const CertCard = ({ title, subtitle, images, onOpenModal }) => {
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

// COMPONENT: Tech Stack Sticker
const TechStackCard = ({ icon, name, desc }) => (
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

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
  >
    {React.cloneElement(icon, { size: 16 })}
  </a>
);

/* --- MAIN APP --- */

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // State untuk Case Study Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseData, setSelectedCaseData] = useState(null);

  // State untuk Modal CV.PDF
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // State untuk Kategori & Filter Proyek
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showAllProjects, setShowAllProjects] = useState(false);

  // State untuk kontrol Show More pada section Experience
  const [showAllExp, setShowAllExp] = useState(false);

  // Ref untuk Auto-Scroll Sertifikat
  const certScrollRef = useRef(null);
  useAutoScroll(certScrollRef, 0.6);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const sections = navLinks.map(link => document.getElementById(link.id));
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const openCaseModal = (data) => {
    setSelectedCaseData(data);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openCVModal = () => {
    setIsCVModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCVModal = () => {
    setIsCVModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // ==========================================
  // DATA MASTER: 12 PROJECTS
  // ==========================================
  const projectsData = [
    // --- 1. WEB DEVELOPMENT (4 PROYEK PGNMAS DENGAN TOMBOL LIVE WEBSITE) ---
    {
      title: "Fleedy - Corporate Fleet & Transportation Management Web Platform",
      category: "Web Development",
      subtitle: "Corporate Landing Page / Web Application",
      year: "2026",
      client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
      location: "Jakarta, Indonesia",
      summary: "Designed and engineered the official web landing platform for Fleedy, an integrated enterprise transportation and fleet management service managing over 964 vehicle units and IDR 189.88 Billion in total assets.",
      details: [
        "Engineered a highly responsive and modern corporate front-end using React.js and Tailwind CSS, featuring custom viewport-triggered reveal animations (RevealOnScroll).",
        "Architected clean UI sections to present real-time GPS tracking capabilities, EV/Hybrid energy transition readiness, and comprehensive driver management workflows.",
        "Visually structured complex 2024 annual operational metrics (19.16% YoY asset growth and IDR 153.05 Billion business revenue) into scannable, interactive data cards.",
        "Optimized multi-device navigation and integrated direct cross-platform communication links (WhatsApp API, App Store, and Google Play ecosystem)."
      ],
      techStack: ["React.js", "Tailwind CSS", "Lucide Icons", "Custom IntersectionObserver", "Responsive UI/UX"],
      color: "bg-blue-300",
      gallery: ["fleedy.png"],
      links: [
        { text: "Live Website", url: "https://www.pgnmas.co.id", icon: <Globe size={14}/>, className: "bg-blue-300 text-black hover:bg-blue-400" }
      ]
    },
    {
      title: "Spativm - Regional Facility & Building Management Portal",
      category: "Web Development",
      subtitle: "Corporate Web Portal / Facility Management",
      year: "2026",
      client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
      location: "Jakarta, Indonesia",
      summary: "Developed the corporate web portal for SPATIVM, showcasing regional facility management, HSE, and building maintenance services covering over 419,000 m² of corporate and government property assets.",
      details: [
        "Built a sophisticated front-end experience using React.js featuring custom frame-by-frame mathematical easing hooks (CountUp) for dynamic annual performance statistics.",
        "Implemented a trigger-once IntersectionObserver architecture (FadeInSection) to deliver smooth, staggered entrance animations across multi-column service grids.",
        "Designed intuitive UI layouts highlighting core facility services (Building Maintenance, Housekeeping, HSE & Security, and Office Support) with high-contrast visual hierarchy.",
        "Showcased enterprise credibility by structuring strategic client ecosystems including Kementerian BUMN, SKK Migas, Pertamina, and PGN Group."
      ],
      techStack: ["React.js", "Tailwind CSS", "Custom Easing Animation Hooks", "Interactive UI", "Front-End Engineering"],
      color: "bg-orange-300",
      gallery: ["spativm.png"],
      links: [
        { text: "Live Website", url: "https://www.pgnmas.co.id", icon: <Globe size={14}/>, className: "bg-orange-300 text-black hover:bg-orange-400" }
      ]
    },
    {
      title: "FileExpert - ANRI-Accredited Digital Archive & DOX Solution",
      category: "Web Development",
      subtitle: "B2B Digital Solution / Archive Management Web",
      year: "2026",
      client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
      location: "Jakarta, Indonesia",
      summary: "Engineered a high-impact B2B web platform for FileExpert, an ANRI-accredited archive management and DOX OCR technology solution handling over 153,446 corporate archive boxes.",
      details: [
        "Designed a bold, neo-brutalist corporate visual identity using React.js and Tailwind CSS with a distinctive green-and-yellow high-contrast color palette.",
        "Implemented an infinite CSS linear marquee animation to dynamically showcase trust from vital enterprise partners (Pertamina Group, MIND ID, Bank BTN, and JAKPRO).",
        "Created interactive feature showcases explaining DOX Optical Character Recognition (OCR) technology, metadata search capabilities, and certified archive management workflows.",
        "Built an optimized, scannable statistical dashboard section displaying IDR 25.96 Billion in annual revenue and 12.72% YoY business growth."
      ],
      techStack: ["React.js", "Tailwind CSS", "CSS Keyframe Animations", "B2B UI/UX Design", "Neo-Brutalist Layouts"],
      color: "bg-green-300",
      gallery: ["filexpert.png"],
      links: [
        { text: "Live Website", url: "https://www.pgnmas.co.id", icon: <Globe size={14}/>, className: "bg-green-300 text-black hover:bg-green-400" }
      ]
    },
    {
      title: "ArtBuild - Corporate Interior, Architecture & Construction Portal",
      category: "Web Development",
      subtitle: "Design & Build Showcase / Web Application",
      year: "2026",
      client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
      location: "Jakarta, Indonesia",
      summary: "Created an elegant, luxury-focused web showcase for ArtBuild, presenting architectural design, interior fitting-out, and construction projects for PGN Group and Pertamina subsidiaries.",
      details: [
        "Crafted a refined editorial visual experience utilizing serif typography (Playfair Display), interactive Polaroid-style photo grids, and video background hero headers.",
        "Developed a responsive, full-screen interactive project modal listing 20+ major 2024 Design & Build portfolios across internal PGN and external Pertamina Group facilities.",
        "Engineered dynamic hover-reveal accordion components that expand to display detailed technical scopes (Preliminary Design, DED, RAB, and Custom Furniture production).",
        "Structured performance metrics highlighting IDR 38.25 Billion in revenue contribution and high tender win rates across state-owned enterprise projects."
      ],
      techStack: ["React.js", "Tailwind CSS", "Playfair Display Typography", "Interactive Modals", "Video Hero Integration"],
      color: "bg-purple-300",
      gallery: ["artbuild.png"],
      links: [
        { text: "Live Website", url: "https://www.pgnmas.co.id", icon: <Globe size={14}/>, className: "bg-purple-300 text-black hover:bg-purple-400" }
      ]
    },

    // --- 2. UI/UX DESIGN ---
    {
      title: "LifeGen - Mobile Health & Wellness UI/UX Platform",
      category: "UI/UX Design",
      subtitle: "Product Design (UI/UX) / Mobile Application Prototype",
      year: "2023",
      client: "INFEST 9.0 (Informatics Festival) USK — Competition Finalist",
      location: "Banda Aceh, Indonesia",
      summary: "Co-designed and prototyped 'LifeGen', an intuitive mobile health and wellness platform engineered to combat modern lifestyle diseases by integrating automated calorie calculators, physical activity trackers, and interactive fitness communities. Successfully recognized as a Project Finalist at the INFEST 9.0 National Competition.",
      details: [
        "Conducted extensive user pain-point analysis to translate complex dietary and fitness barriers—such as caloric calculation difficulties and lack of training motivation—into structured, user-friendly mobile interfaces.",
        "Designed clean UI flows for high-demand features, including real-time food intake logging, automated daily caloric goal calculators, and personalized activity trackers.",
        "Architected a feature-rich wellness ecosystem encompassing visual progress reports, custom reminders, and localized social-community dashboards to foster peer-to-peer support.",
        "Engineered an interactive, high-fidelity mobile prototype using Figma and validated user experiences using Maze to refine critical interaction paths, navigation structures, and touch-target sizing."
      ],
      techStack: ["Figma (Hi-Fi Prototyping)", "Maze (Usability Testing)", "Mobile UI/UX Design", "User Flow Mapping", "Interaction Design", "Information Architecture"],
      color: "bg-pink-300",
      gallery: ["life.png"]
    },
    {
      title: "LandConnect - Agricultural Land Provision & Connectivity Platform",
      category: "UI/UX Design",
      subtitle: "Product Design (UI/UX) & Systems Engineering",
      year: "2023",
      client: "Department of Electrical & Computer Engineering, Universitas Syiah Kuala",
      location: "Banda Aceh, Indonesia",
      summary: "Designed and modeled 'LandConnect', an innovative digital ecosystem bridging local farmers and landowners by enabling data-driven agricultural land leasing and sales, integrated with geospatial mapping and regional climate analysis.",
      details: [
        "Conducted rigorous primary and secondary research—analyzing 10 historical software architectures and interviewing local agricultural stakeholders—to synthesize user behaviors into Affinity Diagrams, Value Proposition Canvases (VPC), and Business Model Canvases (BMC).",
        "Architected core system functionalities including interactive geospatial positioning using Google Maps, a real-time negotiation Live Chat engine, and a micro-climate/average temperature historic analytics widget.",
        "Engineered comprehensive UX design frameworks by developing step-by-step user storyboards, complex use-case models, and multi-user UX flowcharts mapped specifically for both farmer and landowner personas.",
        "Designed and executed high-fidelity interactive prototypes in Figma, conducting hands-on usability testing with 5 real target users to identify critical interface improvements in touch target scaling and layout responsiveness."
      ],
      techStack: ["Figma (Hi-Fi Prototyping)", "UX Flowcharts", "Systems Architecture", "User Research & Testing", "Value Proposition Canvas (VPC)", "Business Model Canvas (BMC)"],
      color: "bg-purple-300",
      gallery: ["land.png"]
    },

    // --- 3. AR / VR ---
    {
      title: "Hardware AR (Bachelor's Thesis Project)",
      category: "AR / VR",
      subtitle: "Augmented Reality Developer",
      year: "2026",
      institution: "Computer Engineering - Universitas Syiah Kuala",
      location: "Banda Aceh, Indonesia",
      summary: "Engineered a markerless mobile Augmented Reality (AR) Android application using Unity 3D and Vuforia SDK for interactive 3D computer hardware learning.",
      details: [
        "Engineered a markerless mobile Augmented Reality (AR) Android application using Unity 3D and Vuforia SDK for interactive 3D computer hardware learning.",
        "Designed and animated detailed 3D models of computer components (Motherboard, CPU, RAM, GPU) using Blender with interactive 360-degree rotation and zoom.",
        "Implemented Research and Development (R&D) prototyping methodologies and conducted System Usability Scale (SUS) and N-Gain cognitive evaluations with 20+ respondents.",
        "Successfully defended the research as the final requirement for the Bachelor of Engineering (S.T.) degree."
      ],
      techStack: ['Unity3D', 'Vuforia AR', 'Blender 3D Modeling', 'Android SDK'],
      color: "bg-orange-300",
      gallery: ["ar_hw.png", "ar_hw1.png"],
      links: [
        { text: "App, Walkthrough & Research Data", url: "https://drive.google.com/drive/folders/", icon: <ExternalLink size={14}/>, className: "bg-orange-300 text-black hover:bg-orange-400" }
      ]
    },
    {
      title: "Web-Based Augmented Reality for BMKG Meteorological Equipment Education",
      category: "AR / VR",
      subtitle: "Web-Based Augmented Reality (WebAR) / 3D Interaction",
      year: "2025",
      client: "Stasiun Meteorologi Kelas I Sultan Iskandar Muda Banda Aceh (BMKG)",
      location: "Banda Aceh, Indonesia",
      summary: "Designed and developed an interactive Web-Based Augmented Reality (WebAR) educational application to visualize complex meteorological equipment—such as the Campbell Stokes recorder—as realistic, interactive 3D models accessible instantly via mobile browsers.",
      details: [
        "Reconstructed high-fidelity 3D assets from 40-50 smartphone-captured physical photos of the Campbell Stokes instrument using Meshroom's photogrammetry engine.",
        "Optimized 3D models in Blender by repairing mesh structures, adjusting topology, and refining texturing to ensure lightweight performance and fast loading times on mobile devices.",
        "Engineered the interactive spatial scene and UI overlays within Unity, integrating dynamic educational text panels detailing the specific functions and workings of meteorological tools.",
        "Published and hosted the WebAR experience on Zapworks, allowing seamless, instant cross-platform mobile access (Chrome/Safari) via physical QR code scanning without any external app installation."
      ],
      techStack: ["Unity 3D", "Zapworks Studio", "Blender", "Meshroom (Photogrammetry)", "WebAR", "Interactive UI/UX"],
      color: "bg-orange-300",
      gallery: ["bmkg2.png", "bmkg1.jpg"],
      links: [
        { text: "Video Demo", url: "https://drive.google.com/file/d/1V6obcvnr7jf35-M14eItzmC8sS8rudcz/view?usp=drive_link", icon: <Youtube size={14}/>, className: "bg-red-100 text-black hover:bg-red-200" }
      ]
    },

    // --- 4. IOT SOLUTION (3 PROYEK) ---
    {
      title: "Gula Cerdas",
      category: "IoT Solution",
      subtitle: "IoT Solution & Cloud Integration",
      year: "2025 – 2026",
      institution: "Innovillage 2025 - Universitas Syiah Kuala",
      location: "Aceh Besar, Indonesia",
      summary: "An IoT-based palm sugar production standardization system utilizing Thermocouple sensors, current sensors, and a Web Dashboard to remotely monitor boiling saturation and viscosity. Selected among the Top 180 Funded Projects in Innovillage 2025.",
      details: [
        "Selected among the Top 180 Funded Projects nationwide in Innovillage 2025 (Social Project Competition by Telkom Indonesia & Witel).",
        "Engineered an embedded hardware solution (ESP32) to replace traditional feeling-based palm sugar cooking methods with data-driven parameters.",
        "Integrated MAX6675 high-precision Thermocouple sensors for temperature and INA219 current sensors to dynamically calculate liquid viscosity based on DC motor load.",
        "Developed a seamless hardware-to-cloud pipeline using Firebase Realtime Database to transmit live cooking metrics with minimal latency.",
        "Built a remote Web Dashboard interface that empowers non-expert users to monitor the 'saturation percentage' safely away from extreme heat.",
        "Successfully validated the prototype in a real-world UMKM environment, eliminating the risk of overcooked batches and enabling cross-generational skill transfer."
      ],
      techStack: ['ESP32', 'Firebase IoT', 'MAX6675 / INA219', 'Web Dashboard', 'C++ / Arduino IDE'],
      color: "bg-green-300",
      gallery: ["gula1.jpeg", "gula2.jpeg", "gula3.jpeg", "gula.JPG"],
      links: [
        { text: "Github Repo", url: "https://github.com/rifqiimt/Gula-Cerdas.git", icon: <Github size={14}/> },
        { text: "Video Demo", url: "https://youtu.be/ixs_9arpgVE?si=v6d2Frtj0yElD_Yu", icon: <Youtube size={14}/>, className: "bg-red-100 text-black hover:bg-red-200" }
      ]
    },
    {
      title: "BridgeGuard",
      category: "IoT Solution",
      subtitle: "Structural Safety Monitoring IoT",
      year: "2025",
      institution: "IoT Research Project",
      location: "Aceh, Indonesia",
      summary: "Early bridge vibration detection device utilizing ESP32 and ADXL accelerometer sensors for structural integrity monitoring.",
      details: [
        "Designed an early-warning structural monitoring IoT device using ESP32 and ADXL accelerometer sensors.",
        "Programmed embedded firmware to calculate Root Mean Square (RMS) vibration frequencies in real time.",
        "Integrated Firebase Realtime Database telemetry to transmit anomalous structural vibration alerts wirelessly.",
        "Provided a low-cost, scalable structural safety monitoring approach for bridge maintenance infrastructure."
      ],
      techStack: ['ESP32', 'ADXL Accelerometer', 'Firebase IoT', 'Real-Time Telemetry'],
      color: "bg-green-300",
      gallery: ["bg.jpeg"],
      links: [
        { text: "Github Repo", url: "https://github.com/rifqiimt/BridgeGuard.git", icon: <Github size={14}/> },
        { text: "Video Demo", url: "https://www.youtube.com/@muhammadabiyyu3010/shorts", icon: <Youtube size={14}/>, className: "bg-red-100 text-black hover:bg-red-200" }
      ]
    },
    {
      title: "Smart Water Metering",
      category: "IoT Solution",
      subtitle: "Embedded Hardware Project",
      year: "2024",
      institution: "Embedded Systems Project",
      location: "Aceh, Indonesia",
      summary: "Arduino Uno-based residential water usage monitoring and alarm system designed to detect pipe leaks and prevent household water waste.",
      details: [
        "Developed a real-time water flow monitoring device using Arduino Uno and precision water flow sensors.",
        "Programmed embedded C++ firmware to calculate cumulative water consumption and trigger usage threshold alarms.",
        "Designed hardware schematic and assembled sensor circuitry for reliable household deployment.",
        "Helped households identify undetected pipe leaks early, reducing monthly excess water waste by 30%."
      ],
      techStack: ['Arduino Uno', 'Water Flow Sensor', 'C++ Embedded', 'Hardware Assembly'],
      color: "bg-green-300",
      gallery: ["swms.jpeg", "swm1.jpeg", "swm2.jpeg", "swm3.jpeg"],
      links: [
        { text: "Arduino Code", url: "#", icon: <Code size={14}/> },
        { text: "Video Demo", url: "#", icon: <Youtube size={14}/>, className: "bg-red-100 text-black hover:bg-red-200" }
      ]
    }
  ];

  // Logika Filter Proyek
  const categories = ['ALL', 'WEB DEV', 'UI/UX', 'AR / VR', 'IOT'];
  
  const filteredProjects = selectedCategory === 'ALL'
    ? projectsData
    : projectsData.filter(item => {
        if (selectedCategory === 'WEB DEV') return item.category === 'Web Development';
        if (selectedCategory === 'UI/UX') return item.category === 'UI/UX Design';
        if (selectedCategory === 'AR / VR') return item.category === 'AR / VR';
        if (selectedCategory === 'IOT') return item.category === 'IoT Solution';
        return true;
      });

  const displayedProjects = (selectedCategory === 'ALL' && !showAllProjects) 
    ? filteredProjects.slice(0, 6) 
    : filteredProjects;

  // ==========================================
  // DATA MASTER: 5 NON-INTERNSHIP EXPERIENCES & LEADERSHIP
  // ==========================================
  const experiencesList = [
    {
      role: "Organizing Chairman (Chief Organizer)",
      title: "CMD 2025",
      year: "2025 – 2026",
      institution: "Computer Engineering Department • Universitas Syiah Kuala",
      location: "Banda Aceh, Indonesia",
      image: "cmd.png",
      categoryBadgeColor: "bg-yellow-300",
      summary: "Selected as Organizing Chairman for Computer Multi-Challenge Day (CMD) 2025, leading 120 coordinators in executing a national-scale IT competition and seminar.",
      details: [
        "Led and managed a cross-functional team of 120 coordinators across 6 national IT competition divisions and seminars.",
        "Managed corporate partnerships, sponsorship acquisition, and event budgeting under realistic financial constraints.",
        "Restructured competition prize pools to under 10 million IDR to ensure long-term financial sustainability.",
        "Delivered a successful national campus event with high participant satisfaction and optimal budget efficiency."
      ],
      gallery: ["cmd.png", "cmd1.jpeg", "cmd2.jpeg", "cmd3.jpeg", "cmd4.jpeg", "cmd5.jpeg"],
      techStack: ['Project Management', 'Sponsorship Relations', 'Team Leadership', 'Budgeting']
    },
    {
      role: "Vice Chairman",
      title: "PBMT XI - KKN",
      year: "2024",
      institution: "Community Service Initiative • Desa Luthu Lamwu",
      location: "Aceh, Indonesia",
      image: "pbmt.png",
      categoryBadgeColor: "bg-blue-300",
      summary: "Served as Vice Chairman for a technology-focused community service program (PBMT XI) addressing rural clean water infrastructure.",
      details: [
        "Co-led engineering field teams to assess and resolve clean water accessibility challenges in rural village households.",
        "Designed and distributed ready-to-use automated drinking water refilling filtration systems for local residents.",
        "Coordinated with village authorities and university faculty supervisors to ensure sustainable technical deployment.",
        "Improved daily clean water distribution and long-term water quality for the local village community."
      ],
      gallery: ["pbmt.png"],
      techStack: ['Community Outreach', 'System Engineering', 'Field Leadership']
    },
    {
      role: "Vice Head of Student Welfare (Kesma)",
      title: "HIMATEKKOM",
      year: "2024",
      institution: "Computer Engineering Student Association • Universitas Syiah Kuala",
      location: "Banda Aceh, Indonesia",
      image: "kesma.jpg",
      categoryBadgeColor: "bg-purple-300",
      summary: "Appointed as Vice Head of Student Welfare (Kesma), advocating for academic rights and student well-being across the Computer Engineering department.",
      details: [
        "Managed academic advocacy and welfare aspirations for hundreds of Computer Engineering undergraduate students.",
        "Established regular mentoring and open consultation sessions to bridge student communication with department faculty.",
        "Proactively resolved student academic grievances regarding course scheduling and laboratory facilities.",
        "Strengthened student community engagement through structured welfare assistance programs."
      ],
      gallery: ["kesma.jpg", "kesma1.png"],
      techStack: ['Student Advocacy', 'Public Communication', 'Organization Mgmt']
    },
    {
      role: "Public Relations Staff",
      title: "BEM Fakultas Teknik USK",
      year: "2024",
      institution: "Student Executive Board • Universitas Syiah Kuala",
      location: "Banda Aceh, Indonesia",
      image: "humas.png",
      categoryBadgeColor: "bg-pink-300",
      summary: "Served as Public Relations Staff at BEM Fakultas Teknik USK, managing strategic branding and external media publications.",
      details: [
        "Managed strategic external communications and digital branding campaigns for engineering faculty events.",
        "Produced professional visual publicity assets and coordinated with university media partners.",
        "Significantly increased organizational social media engagement and cross-faculty event reach.",
        "Maintained high visual standards across official student executive board publications."
      ],
      gallery: ["humas.png"],
      techStack: ['Public Relations', 'Branding', 'Social Media Strategy']
    },
    {
      role: "Event Coordinator",
      title: "BIOS Orientation",
      year: "2025",
      institution: "Computer Engineering Freshman Orientation • Universitas Syiah Kuala",
      location: "Banda Aceh, Indonesia",
      image: "cmd1.jpeg",
      categoryBadgeColor: "bg-green-300",
      summary: "Coordinated the BIOS Orientation program, redesigning traditional freshman orientation into an interactive, project-based engineering boot camp.",
      details: [
        "Restructured freshman orientation from traditional hazing into an educational engineering project workshop.",
        "Designed interactive event rundowns and hands-on microcontroller introduction sessions for new students.",
        "Mentored freshmen in basic Computer Engineering concepts and teamwork collaboration.",
        "Achieved high participant satisfaction through an inspiring and technically engaging orientation model."
      ],
      gallery: ["cmd1.jpeg"],
      techStack: ['Event Design', 'Mentorship', 'Workshop Planning']
    }
  ];

  // ==========================================
  // DATA MASTER: CERTIFICATIONS
  // ==========================================
  const certsData = [
    {
      isCert: true,
      title: "Bangkit Academy 2024",
      subtitle: "Google, GoTo, Traveloka",
      year: "2024",
      description: "Program studi independen bersertifikat berstandar industri dalam pengembangan Machine Learning dan AI. Meliputi pemahaman mendalam tentang pengolahan data, pembuatan model prediktif, serta pengerjaan Capstone Project akhir secara kolaboratif bersama peserta lintas disiplin ilmu.",
      issuer: "Google, GoTo, & Traveloka (Kampus Merdeka)",
      keyInfo: "Kelulusan dengan sertifikat kompetensi standar Google & penyelesaian AI Capstone Project.",
      gallery: ["bangkit.jpg", "bangkit1.jpg", "bangkit2.jpg"]
    },
    {
      isCert: true,
      title: "BNSP - IoT Engineer",
      subtitle: "BNSP / LSP TDI",
      year: "2024",
      description: "Sertifikasi keahlian profesi resmi yang diselenggarakan oleh Badan Nasional Sertifikasi Profesi (BNSP) melalui Lembaga Sertifikasi Profesi (LSP). Menguji dan memvalidasi keahlian teknis dalam merancang, merakit, serta mengimplementasikan perangkat keras Internet of Things dan jaringan embedded.",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      keyInfo: "Sertifikasi kompetensi resmi berskala nasional sebagai praktisi IoT & Embedded System.",
      gallery: ["iot.jpg", "iot1.jpg"]
    },
    {
      isCert: true,
      title: "Skill Academy CAMP",
      subtitle: "Ruangguru",
      year: "2023",
      description: "Bootcamp intensif perancangan antarmuka dan pengalaman pengguna (UI/UX) berbasis Design Thinking. Mengajarkan riset pengguna, wireframing, pembuatan design system, hingga penyelesaian prototipe interaktif berpresisi tinggi menggunakan Figma.",
      issuer: "Skill Academy by Ruangguru",
      keyInfo: "Penyelesaian portofolio proyek UI/UX yang telah diuji dengan usability testing.",
      gallery: ["camp.jpg", "camp1.jpg"]
    },
    {
      isCert: true,
      title: "KORIKA AI Webinar",
      subtitle: "KORIKA",
      year: "2024",
      description: "Webinar dan pelatihan teknologi kecerdasan buatan (AI) yang diselenggarakan oleh Kolaborasi Riset dan Inovasi Kecerdasan Buatan Indonesia (KORIKA), mengupas implementasi algoritma AI dalam pemodelan prediksi cuaca dan iklim di Indonesia.",
      issuer: "KORIKA Indonesia",
      keyInfo: "Wawasan mendalam mengenai integrasi kecerdasan buatan pada meteorologi.",
      gallery: ["korika.jpg"]
    },
    {
      isCert: true,
      title: "Olimpiade Sains Nasional",
      subtitle: "Kemdikbud",
      year: "High School",
      description: "Ajang kompetisi sains bergengsi tingkat pelajar yang diselenggarakan oleh Kementerian Pendidikan dan Kebudayaan RI. Berhasil meraih prestasi juara di bidang Informatika (Komputer) yang menguji logika algoritmik dan pemecahan masalah (competitive programming).",
      issuer: "Kementerian Pendidikan dan Kebudayaan RI",
      keyInfo: "Juara kompetisi algoritma dan pemrograman tingkat Kabupaten/Kota.",
      gallery: ["osn.jpg"]
    }
  ];

  const displayedExp = showAllExp ? experiencesList : experiencesList.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fffdf5] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* GLOBAL STYLES */}
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-left: 2px solid black;
        }
        ::-webkit-scrollbar-thumb {
          background: #22c55e;
          border: 2px solid black;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #16a34a;
        }

        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Background Dot Pattern */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* ==========================================
          NAVBAR: KOTAK (rounded-xl)
          ========================================== */}
      <nav className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}>
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl px-5 py-2.5 flex justify-between items-center transition-all duration-300">
          
          {/* Logo */}
          <div 
            className="text-base font-black italic tracking-tighter cursor-pointer flex items-center gap-1.5 select-none text-black hover:-rotate-2 transition-transform" 
            onClick={() => scrollTo('home')}
          >
            RIFQI<span className="bg-black text-white px-2 py-0.5 text-[11px] rounded font-bold not-italic">.MT</span>
          </div>

          {/* Desktop Menu */}
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
                      style={{
                        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Hire Me & CV CTA & Hamburger */}
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

        {/* Mobile Menu Dropdown */}
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
              Lihat / Download CV.PDF
              <FileText size={18} />
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-purple-400 rounded-full border-2 border-black mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute bottom-1/4 -right-10 w-60 h-60 bg-yellow-300 rounded-full border-2 border-black mix-blend-multiply filter blur-xl opacity-50"></div>
        
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative z-10">
          <Reveal className="lg:w-7/12 text-center lg:text-left space-y-6">
            <div className="inline-block bg-white border-2 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse border border-black"></span> 
                Status: Available for work
              </span> 
            </div>
            
            <div className="relative">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-2 text-transparent bg-clip-text bg-black" style={{WebkitTextStroke: '2px black'}}>
                  RIFQI M.
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-black absolute top-1 left-1 -z-10 opacity-0 lg:opacity-100 text-stroke">
                    RIFQI M.
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-yellow-300 inline-block px-3 border-2 border-black transform rotate-1 mt-1">
                    TAMPENG
                </p>
            </div>
            
            <div className="bg-white border-2 border-black p-4 lg:mr-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl relative">
                <div className="absolute -top-3 -right-3 bg-blue-400 border-2 border-black p-1.5 rounded-full z-10">
                    <Terminal size={20} className="text-white"/>
                </div>
                <p className="text-sm sm:text-base font-medium leading-relaxed">
                  Bachelor of Engineering (S.T.) in Computer Engineering - Universitas Syiah Kuala (GPA 3.55). Specializing in: <span className="font-bold underline decoration-pink-500 decoration-4">UI/UX Design</span>, <span className="font-bold underline decoration-blue-500 decoration-4">Web Development</span>, & <span className="font-bold underline decoration-green-500 decoration-4">Low-Code Dev</span>.
                </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button onClick={() => scrollTo('projects')} className="group px-7 py-3.5 bg-black text-white text-xs sm:text-sm font-bold uppercase border-2 border-black rounded-lg shadow-[6px_6px_0px_0px_#22d3ee] hover:shadow-[2px_2px_0px_0px_#22d3ee] hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2">
                View Projects <MousePointer2 size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
              <button onClick={() => scrollTo('experience')} className="px-7 py-3.5 bg-white text-black text-xs sm:text-sm font-bold uppercase border-2 border-black rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                Experience
              </button>
              <button
                onClick={openCVModal}
                className="px-7 py-3.5 bg-yellow-300 text-black text-xs sm:text-sm font-black uppercase border-2 border-black rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-yellow-400 transition-all flex items-center gap-2"
              >
                <FileText size={18} /> View CV / Resume
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-6">
               <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1 transform -rotate-3">CONNECT:</span>
               {[
                 { icon: <Github size={18}/>, href: "https://github.com/rifqiimt" },
                 { icon: <Instagram size={18}/>, href: "https://www.instagram.com/rifqiimt/" },
                 { icon: <Linkedin size={18}/>, href: "https://www.linkedin.com/in/rifqiimt/" },
                 { icon: <Mail size={18}/>, href: "mailto:tampengrifqmubarak@gmail.com" },
                 { icon: <Phone size={18}/>, href: "https://wa.me/85214006701" }
               ].map((social, idx) => (
                 <SocialLink key={idx} href={social.href} icon={social.icon} />
               ))}
            </div>
          </Reveal>

          <Reveal delay={200} className="lg:w-5/12 flex justify-center relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[26rem] lg:h-[26rem]">
              <div className="absolute top-0 right-0 w-full h-full bg-blue-400 border-2 border-black rounded-full mix-blend-normal z-0 translate-x-4 translate-y-4"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-10 hover:scale-105 transition-transform duration-500">
                 <img 
                  src="pp.jpeg" 
                  alt="Rifqi Mubarak" 
                  className="w-full h-full object-cover"
                  onError={(e) => {e.target.src = "https://api.dicebear.com/9.x/avataaars/svg?seed=Rifqi"}} 
                />
              </div>

              <div className="absolute -right-4 top-10 bg-white border-2 border-black p-3 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 flex items-center gap-2 transform rotate-3 hover:scale-105 transition-transform">
                 <Figma size={20} className="text-black"/>
                 <span className="font-black text-[11px] sm:text-xs uppercase">UI/UX<br/>MASTER</span>
              </div>
              
              <div className="absolute -left-2 bottom-12 bg-yellow-300 border-2 border-black p-3 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 flex items-center gap-2 transform -rotate-2 hover:scale-105 transition-transform">
                 <Code size={20} className="text-black"/>
                 <span className="font-black text-[11px] sm:text-xs uppercase">WEB DEV<br/>REACT & TAILWIND</span>
              </div>
            </div>
          </Reveal>
        </div>
        
        <div className="absolute bottom-8 left-0 w-full bg-black border-y-2 border-black py-2 transform -rotate-1 scale-105 z-20 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-white font-mono font-bold text-base sm:text-lg mx-4 flex items-center gap-4">
                        DESIGN <Zap size={16} className="text-yellow-400"/> CODE <Zap size={16} className="text-yellow-400"/> CREATE <Zap size={16} className="text-yellow-400"/>
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* About & Skills (8 KEY CORE ARSENAL STACK) */}
      <section id="about" className="py-28 bg-purple-50 border-t-4 border-black relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,black,black_10px,transparent_10px,transparent_20px)] opacity-20"></div>
        
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
          <Reveal>
             <div className="flex flex-col items-center mb-16">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-center bg-white border-2 border-black px-6 py-2 shadow-[6px_6px_0px_0px_#f472b6] transform -rotate-1">
                    About Me
                </h2>
             </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
               <Reveal delay={100}>
                  <div className="bg-white border-2 border-black p-6 md:p-8 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                    <QuoteIcon className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-400 border-2 border-black text-black p-2 rounded-full z-10" />
                    <div className="text-black font-medium text-sm sm:text-base leading-relaxed space-y-5">
                        <p>
                        I am a Bachelor of Engineering (S.T.) graduate in Computer Engineering from Universitas Syiah Kuala with a <span className="bg-green-200 px-1.5 py-0.5 border border-black font-bold">GPA of 3.55/4.00</span>. I have a strong passion for creating aesthetic and functional digital solutions.
                        </p>
                        <p>
                        My expertise ranges from intuitive User Interface (UI/UX) design and modern Web Development to IoT-based system development and Low-Code Full Stack applications.
                        </p>
                        <p>
                        Beyond technical skills, I have proven leadership abilities, having led a team of up to <span className="bg-blue-200 px-1.5 py-0.5 border border-black font-bold">120 people</span> as the Project Lead for a national-level event (CMD 2025).
                        </p>
                    </div>
                  </div>
               </Reveal>
               
               <Reveal delay={200} className="mt-8">
                 <div className="grid grid-cols-3 gap-5">
                   {[
                     { val: "3.55", label: "GPA Score", color: "bg-pink-300" },
                     { val: "120+", label: "Team Led", color: "bg-blue-300" },
                     { val: "6+", label: "Projects Done", color: "bg-green-300" }
                   ].map((stat, i) => (
                     <div key={i} className={`p-4 border-2 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${stat.color} rounded-lg`}>
                         <h3 className="text-2xl sm:text-3xl font-black text-black">{stat.val}</h3>
                         <p className="text-[11px] font-bold uppercase border-t-2 border-black mt-1 pt-1">{stat.label}</p>
                     </div>
                   ))}
                 </div>
               </Reveal>
            </div>

            {/* SECTION MY ARSENAL DIPERLUAS MENJADI 8 CORE STACK TEKNOLOGI */}
            <div className="lg:col-span-5">
               <Reveal delay={300}>
                 <div className="bg-gray-100 border-2 border-black p-6 rounded-xl relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 text-xs sm:text-sm font-bold uppercase rounded border-2 border-white transform skew-x-12">
                         My Arsenal
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                      <TechStackCard icon="figma.png" name="Figma" desc="UI/UX Design" />
                      <TechStackCard icon="react.png" name="React.js" desc="Frontend Web" />
                      <TechStackCard icon="tailwind.png" name="Tailwind CSS" desc="Styling" />
                      <TechStackCard icon="unity.png" name="Unity 3D" desc="AR / VR Engine" />
                      <TechStackCard icon="blender.png" name="Blender 3D" desc="3D Modeling" />
                      <TechStackCard icon="arduino.png" name="ESP32 / Arduino" desc="IoT Systems" />
                      <TechStackCard icon="firebase.png" name="Firebase" desc="Cloud / DB" />
                      <TechStackCard icon="mesh.png" name="WebAR / Meshroom" desc="3D Photogrammetry" />
                    </div>
                 </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PROJECTS SECTION (Grid 3 Kolom + Kategori Filter Tabs: WEB DEV -> UI/UX -> AR/VR -> IOT)
          ========================================== */}
      <section id="projects" className="py-28 bg-[#fffdf5] border-t-4 border-black overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
               <div>
                 <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-12 bg-black"></div>
                    <span className="font-mono font-bold uppercase text-xs sm:text-sm">Selected Works</span>
                 </div>
                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black tracking-tight leading-none">
                   FEATURED <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500" style={{WebkitTextStroke: '1px black'}}>
                     PROJECTS ({filteredProjects.length})
                   </span>
                 </h2>
               </div>
               
               {/* CATEGORY FILTER TABS */}
               <div className="flex flex-wrap gap-2">
                 {categories.map((cat, i) => {
                   const isActive = selectedCategory === cat;
                   return (
                     <button
                       key={i}
                       onClick={() => {
                         setSelectedCategory(cat);
                         setShowAllProjects(false);
                       }}
                       className={`px-4 py-2 border-2 border-black font-black text-xs uppercase rounded-lg transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                         isActive 
                           ? 'bg-yellow-300 text-black translate-x-[1px] translate-y-[1px] shadow-none' 
                           : 'bg-white text-gray-700 hover:bg-gray-100'
                       }`}
                     >
                       {cat}
                     </button>
                   );
                 })}
               </div>
            </div>
          </Reveal>

          {/* GRID PROYEK 3 KOLOM */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 100}>
                <ProjectCard 
                  title={project.title}
                  category={project.category}
                  images={project.gallery}
                  color={project.color}
                  onOpenModal={() => openCaseModal(project)}
                />
              </Reveal>
            ))}
          </div>

          {/* TOMBOL SHOW MORE PROYEK */}
          {selectedCategory === 'ALL' && filteredProjects.length > 6 && (
            <div className="text-center mt-14">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="bg-white border-2 border-black px-8 py-3.5 font-black uppercase text-xs sm:text-sm rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {showAllProjects 
                  ? "↑ Tampilkan Lebih Sedikit Proyek" 
                  : `↓ Lihat Semua Proyek (${filteredProjects.length - 6} Lainnya)`
                }
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section (5 POIN KONTRIBUSI PGNMAS UTUH + WEBAR BMKG UTUH) */}
      <section id="experience" className="py-28 bg-blue-50 border-y-4 border-black">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
          <Reveal>
            <div className="mb-16 flex flex-col items-center text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black tracking-tight mb-2 uppercase border-b-4 border-black pb-2">
                Experience Highlight
              </h2>
              <p className="text-gray-600 font-medium text-xs sm:text-sm mt-2">
                Bukti kepemimpinan & kontribusi nyata di lapangan (Klik foto untuk detail)
              </p>
            </div>
          </Reveal>

          {/* FEATURED PROFESSIONAL INTERNSHIPS (Grid 2 Kolom: PGNMAS & BMKG Aceh) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {/* 1. PT PERMATA GRAHA NUSANTARA (PGNMAS) - LENGKAP DENGAN 5 POIN PRESTASI & MODERATOR WEBINAR */}
            <Reveal delay={100}>
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
                                    src="pgnmas.png" 
                                    alt="PGNMAS Logo" 
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
                                    }}
                                />
                            </div>
                            
                            <div className="flex-grow">
                                <div className="flex justify-between items-start gap-2">
                                    <h3 className="text-lg sm:text-xl font-black uppercase leading-tight">PGNMAS</h3>
                                    <span className="font-mono font-bold bg-black text-white px-2.5 py-1 text-xs shadow-[2px_2px_0px_0px_#22c55e]">
                                        2026
                                    </span>
                                </div>
                                <div className="inline-block bg-gray-100 border border-black px-2 py-0.5 mt-1">
                                    <p className="font-bold text-xs text-gray-800">IT Support & Graphic Design Intern</p>
                                </div>
                                <p className="text-xs font-bold text-gray-500 mt-1">PT Permata Graha Nusantara • Jakarta, Indonesia</p>
                            </div>
                        </div>

                        {/* 5 Poin rincian kontribusi magang langsung di halaman utama */}
                        <ul className="space-y-2 text-gray-800 font-medium text-xs sm:text-sm leading-relaxed mb-6">
                          <li className="flex items-start gap-2">
                            <span className="text-black font-black">•</span>
                            <span>Supported daily corporate IT infrastructure operations, hardware/software troubleshooting, and system license compliance checks across internal departments.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-black font-black">•</span>
                            <span>Designed and developed 4 production-ready corporate web platforms (Fleedy, ArtBuild, FileExpert, and Spativm) using React.js and Tailwind CSS, while generating static HTML5 bundles to comply with corporate server deployment standards.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-black font-black">•</span>
                            <span>Trusted by corporate leadership to moderate 2 official knowledge-sharing webinars ('Cross Sharing' on AI and 'Pairing' on Digital Cybersecurity), facilitating high-level discussions between university professors and corporate executives.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-black font-black">•</span>
                            <span>Managed corporate digital assets, shared file accessibility, and employee workstation configurations to streamline daily business support operations.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-black font-black">•</span>
                            <span>Produced professional graphic design and visual communication materials aligned with PT Permata Graha Nusantara branding guidelines.</span>
                          </li>
                        </ul>
                    </div>

                    <div className="border-t-2 border-black pt-4 flex flex-wrap justify-between items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[10px] px-2.5 py-0.5 bg-yellow-300 border border-black rounded font-bold">IT Support</span>
                            <span className="text-[10px] px-2.5 py-0.5 bg-yellow-300 border border-black rounded font-bold">React.js</span>
                        </div>
                        
                        <button 
                            onClick={() => openCaseModal({
                              title: "PT Permata Graha Nusantara (PGNMAS)",
                              role: "IT Support & Graphic Design Intern",
                              year: "2026",
                              institution: "PT Permata Graha Nusantara",
                              location: "Jakarta, Indonesia",
                              summary: "Completed a regular professional internship at PT Permata Graha Nusantara (PGNMAS) in the IT Support and Graphic Design Division, supporting enterprise IT operations, moderating corporate webinars, and leading front-end web development.",
                              details: [
                                "Supported daily corporate IT infrastructure operations, hardware/software troubleshooting, and system license compliance checks across internal departments.",
                                "Designed and developed 4 production-ready corporate web platforms (Fleedy, ArtBuild, FileExpert, and Spativm) using React.js and Tailwind CSS, while generating static HTML5 bundles to comply with corporate server deployment standards.",
                                "Trusted by corporate leadership to moderate 2 official knowledge-sharing webinars ('Cross Sharing' on AI and 'Pairing' on Digital Cybersecurity), facilitating high-level discussions between university professors and corporate executives.",
                                "Managed corporate digital assets, shared file accessibility, and employee workstation configurations to streamline daily business support operations.",
                                "Produced professional graphic design and visual communication materials aligned with PT Permata Graha Nusantara branding guidelines."
                              ],
                              gallery: ["pgnmas.png", "fleedy.png", "artbuild.png", "filexpert.png", "spativm.png"],
                              techStack: ["React.js", "Tailwind CSS", "IT Support", "Graphic Design", "Webinar Moderation"]
                            })} 
                            className="group relative inline-flex items-center gap-1.5 bg-yellow-300 border-2 border-black px-4 py-1.5 rounded font-black uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none hover:bg-yellow-400 transition-all ml-auto"
                        >
                            <ImageIcon size={14} />
                            View Case Study
                        </button>
                    </div>
                </div>
              </div>
            </Reveal>

            {/* 2. BMKG ACEH */}
            <Reveal delay={150}>
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
                                    src="bmkg.png" 
                                    alt="BMKG Logo" 
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.2-2.3-2.1-4-4.4-4-2.5 0-4.5 1.8-4.9 4.2C2.3 16.5 1 17.9 1 19.5c0 1.9 1.6 3.5 3.5 3.5h13c1.9 0 3.5-1.6 3.5-3.5z"/><path d="M12 2v3"/><path d="M12 10v2"/><path d="M12 14v.01"/><path d="M4.93 4.93l1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>`;
                                    }}
                                />
                            </div>
                            
                            <div className="flex-grow">
                                <div className="flex justify-between items-start gap-2">
                                    <h3 className="text-lg sm:text-xl font-black uppercase leading-tight">BMKG Aceh</h3>
                                    <span className="font-mono font-bold bg-black text-white px-2.5 py-1 text-xs shadow-[2px_2px_0px_0px_#22c55e]">
                                        2025
                                    </span>
                                </div>
                                <div className="inline-block bg-gray-100 border border-black px-2 py-0.5 mt-1">
                                    <p className="font-bold text-xs text-gray-800">AR & WebAR Developer Intern</p>
                                </div>
                                <p className="text-xs font-bold text-gray-500 mt-1">BMKG Kelas I SIM • Banda Aceh, Indonesia</p>
                            </div>
                        </div>

                        <ul className="space-y-2 text-gray-800 font-medium text-xs sm:text-sm leading-relaxed mb-6">
                          <li className="flex items-start gap-2">
                            <span className="text-black font-black">•</span>
                            <span>Designed and developed an interactive Web-Based Augmented Reality (WebAR) educational application to visualize complex meteorological equipment (such as Campbell Stokes) as interactive 3D models.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-black font-black">•</span>
                            <span>Reconstructed high-fidelity 3D assets from physical photos using Meshroom photogrammetry engine and optimized topology/texturing in Blender for mobile browser performance.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-black font-black">•</span>
                            <span>Engineered spatial scenes and UI overlays in Unity and published via Zapworks Studio for instant QR code browser access without app installation.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-black font-black">•</span>
                            <span>Assisted IT department with daily hardware/network operations and technical sensor data processing.</span>
                          </li>
                        </ul>
                    </div>

                    <div className="border-t-2 border-black pt-4 flex flex-wrap justify-between items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[10px] px-2.5 py-0.5 bg-yellow-300 border border-black rounded font-bold">WebAR</span>
                            <span className="text-[10px] px-2.5 py-0.5 bg-yellow-300 border border-black rounded font-bold">Unity 3D</span>
                        </div>
                        
                        <button 
                            onClick={() => openCaseModal({
                              title: "BMKG Kelas I SIM Banda Aceh",
                              role: "AR & WebAR Developer Intern",
                              year: "2025",
                              institution: "Stasiun Meteorologi Kelas I Sultan Iskandar Muda Banda Aceh (BMKG)",
                              location: "Banda Aceh, Indonesia",
                              summary: "Completed a technical internship at BMKG Class I Meteorological Station SIM Banda Aceh, leading the development of Web-Based Augmented Reality (WebAR) educational media.",
                              details: [
                                "Designed and developed an interactive Web-Based Augmented Reality (WebAR) educational application to visualize complex meteorological equipment (such as Campbell Stokes) as interactive 3D models.",
                                "Reconstructed high-fidelity 3D assets from physical photos using Meshroom photogrammetry engine and optimized topology/texturing in Blender for mobile browser performance.",
                                "Engineered spatial scenes and UI overlays in Unity and published via Zapworks Studio for instant QR code browser access without app installation.",
                                "Assisted IT department with daily hardware/network operations and technical sensor data processing."
                              ],
                              gallery: ["bmkg1.jpg", "bmkg2.png"],
                              techStack: ["Unity 3D", "Zapworks Studio", "Blender", "Meshroom", "WebAR", "Network Admin"]
                            })} 
                            className="group relative inline-flex items-center gap-1.5 bg-yellow-300 border-2 border-black px-4 py-1.5 rounded font-black uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none hover:bg-yellow-400 transition-all ml-auto"
                        >
                            <ImageIcon size={14} />
                            View Case Study
                        </button>
                    </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3. GRID FOTO ORGANIZATIONS & EVENTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedExp.map((exp, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <VisualExperienceCard
                  title={exp.title}
                  role={exp.role}
                  year={exp.year}
                  image={exp.image}
                  categoryBadgeColor={exp.categoryBadgeColor}
                  onClickDetail={() => openCaseModal(exp)}
                />
              </Reveal>
            ))}
          </div>

          {/* 4. SHOW MORE / LESS BUTTON */}
          {experiencesList.length > 3 && (
            <div className="text-center mt-14">
              <button
                onClick={() => setShowAllExp(!showAllExp)}
                className="bg-white border-2 border-black px-8 py-3.5 font-black uppercase text-xs sm:text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {showAllExp 
                  ? "↑ Tampilkan Lebih Sedikit" 
                  : `↓ Lihat Pengalaman Lainnya (${experiencesList.length - 3} Foto)`
                }
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="py-28 bg-yellow-50 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px'}}></div>

         <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
            <Reveal>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-center mb-16 bg-white border-2 border-black inline-block px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mx-auto block transform rotate-1">
                CERTIFICATIONS & TRAINING
              </h2>
            </Reveal>
            
            <div 
                ref={certScrollRef}
                className="w-full overflow-x-auto pb-16 pt-4 px-4 -mx-4 responsive-scrollbar"
            >
              <div className="flex gap-8 w-max">
                {certsData.map((cert, index) => (
                  <div key={index} className="w-[320px] md:w-[360px] flex-shrink-0">
                    <CertCard 
                      title={cert.title}
                      subtitle={cert.subtitle}
                      images={cert.gallery}
                      onOpenModal={() => openCaseModal(cert)}
                    />
                  </div>
                ))}
              </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black text-white border-t-8 border-yellow-400">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-8 uppercase tracking-widest">Ready to Collaborate?</h2>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {[
                  { icon: <Github size={20}/>, href: "https://github.com/rifqiimt" },
                  { icon: <Instagram size={20}/>, href: "https://www.instagram.com/rifqiimt/" },
                  { icon: <Linkedin size={20}/>, href: "https://www.linkedin.com/in/rifqiimt/" },
                  { icon: <Mail size={20}/>, href: "mailto:tampengrifqmubarak@gmail.com" },
                  { icon: <Phone size={20}/>, href: "https://wa.me/85214006701" }
              ].map((social, idx) => (
                  <a key={idx} href={social.href} className="w-12 h-12 bg-white text-black border-2 border-white flex items-center justify-center rounded hover:bg-black hover:text-white hover:border-white transition-colors">
                      {social.icon}
                  </a>
              ))}
          </div>
          <div className="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xs sm:text-sm font-mono">© {new Date().getFullYear()} Rifqi Mubarak Tampeng. All rights reserved</p>
        </div>
      </footer>

      {/* POP-UP MODAL CASE STUDY / CERTIFICATE */}
      <CaseStudyModal 
        isOpen={isModalOpen} 
        data={selectedCaseData} 
        onClose={closeCaseModal} 
      />

      {/* POP-UP MODAL CV.PDF */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={closeCVModal}
      />

    </div>
  );
};

const QuoteIcon = ({className}) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.925 15.025 15.088C15.697 14.252 16.637 13.833 17.845 13.833H19V9H17.291C16.427 9 15.635 9.176 14.915 9.528C14.195 9.88 13.835 10.592 13.835 11.664V21H7.017Z"/>
    </svg>
);

export default App;