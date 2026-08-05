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
  TrendingUp
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

/* --- MODAL STUDI KASUS & SERTIFIKAT --- */
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

      {/* Container Utama Modal */}
      <div className="relative w-full max-w-6xl h-full max-h-[88vh] bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-3xl flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Header Bar Retro Window */}
        <div className="flex justify-between items-center px-6 py-3 border-b-2 border-black bg-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 border border-black"></span>
            <span className="font-mono font-black text-xs sm:text-sm uppercase ml-2 text-gray-700">
              {isCert ? "CERTIFICATE_VIEWER" : "CASE_STUDY_VIEWER"} // {data.title}
            </span>
          </div>
          <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 bg-black text-white rounded uppercase">{data.category || data.role || data.subtitle || "DETAIL"}</span>
        </div>

        {/* Konten 2 Kolom (Kiri: Galeri Foto, Kanan: Info) */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          
          {/* KOLOM KIRI: GALERI GAMBAR */}
          <div className="lg:col-span-6 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50 flex flex-col p-6 justify-between min-h-[300px]">
            <div className="relative overflow-hidden bg-white border-2 border-black rounded-2xl flex-grow flex items-center justify-center min-h-[240px] shadow-sm">
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-yellow-300 transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    onClick={nextImage} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-yellow-300 transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}

              <img 
                src={images[activeIndex]} 
                alt={`Slide ${activeIndex + 1}`} 
                className="max-h-[44vh] w-auto object-contain mx-auto"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"; }}
              />
              
              <div className="absolute bottom-3 right-3 bg-black text-white font-mono text-[11px] px-2.5 py-0.5 rounded border border-white">
                {activeIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Indicator Dots */}
            <div className="flex gap-2 overflow-x-auto max-w-full pt-4 hide-scrollbar justify-center">
              {images.map((_, idx) => (
                <button
                  key={idx} 
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                  className={`h-2.5 border border-black transition-all duration-300 rounded-full ${idx === activeIndex ? 'bg-yellow-300 w-6' : 'bg-white w-2.5 hover:bg-gray-200'}`}
                />
              ))}
            </div>
          </div>

          {/* KOLOM KANAN: KONTEN DETAIL BERSIH & BERSTRUKTUR */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-white">
            <div>
              {/* Hanya Tahun & Judul */}
              <div className="mb-6">
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
                {data.subtitle && (
                  <p className="text-xs sm:text-sm font-bold text-gray-600 mt-1">{data.subtitle}</p>
                )}
              </div>

              {/* TAMPILAN KHUSUS SERTIFIKAT */}
              {isCert ? (
                <div className="space-y-4 animate-in fade-in duration-200 py-2">
                  <div className="p-4 bg-yellow-50 border-l-4 border-black font-medium text-gray-800 leading-relaxed text-sm sm:text-base">
                    {data.description || "Sertifikasi resmi dan pelatihan intensif untuk menguji serta memperkuat kompetensi teknis profesional."}
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
                /* TAMPILAN STUDI KASUS PROYEK & EXPERIENCE (Tanpa Tab Menu) */
                <div className="space-y-4 animate-in fade-in duration-200">
                  <p className="p-4 bg-yellow-50 border-l-4 border-black font-semibold text-black text-sm sm:text-base leading-relaxed">
                    {data.description || "Proyek dan pengalaman yang menunjukkan kontribusi serta keahlian teknis secara profesional."}
                  </p>

                  {(data.problem || data.solution) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {data.problem && (
                        <div className="p-3.5 bg-red-50 border border-black/30 rounded-xl">
                          <h4 className="font-black text-xs uppercase text-red-700 mb-1 flex items-center gap-1">
                            <AlertCircle size={14}/> Tantangan:
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">{data.problem}</p>
                        </div>
                      )}
                      {data.solution && (
                        <div className="p-3.5 bg-green-50 border border-black/30 rounded-xl">
                          <h4 className="font-black text-xs uppercase text-green-800 mb-1 flex items-center gap-1">
                            <CheckCircle2 size={14}/> Solusi:
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">{data.solution}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {data.impact && (
                    <div className="p-3.5 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                      <h4 className="font-black text-xs uppercase text-blue-900 mb-1 flex items-center gap-1">
                        <TrendingUp size={14}/> Hasil & Dampak Nyata:
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">{data.impact}</p>
                    </div>
                  )}

                  {/* Tech Stack & Tools yang Digunakan */}
                  <div className="pt-3 border-t border-gray-200">
                    <h4 className="font-black text-xs uppercase text-black mb-2.5 flex items-center gap-1.5">
                      <Cpu size={14}/> Tech Stack & Tools yang Digunakan:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {(data.techStack || data.tags || ['React', 'Figma', 'IoT', 'Leadership']).map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-black text-white text-xs font-mono font-bold rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Modal Action Buttons */}
            <div className="pt-6 mt-6 border-t border-black flex flex-wrap items-center justify-between gap-3">
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

// COMPONENT: Visual Experience Card (Refined Font Sizes & Spacing)
const VisualExperienceCard = ({ title, role, year, image, categoryBadgeColor = "bg-yellow-300", onClickDetail }) => {
  return (
    <div 
      onClick={onClickDetail}
      className="group relative w-full h-72 sm:h-80 bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 cursor-pointer select-none"
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

// COMPONENT: Project Card (Clean Image-Only Card - Refined Font Sizes)
const ProjectCard = ({ title, category, images, onOpenModal }) => {
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
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      <div className="absolute top-5 left-5 z-10">
        <span className="px-2.5 py-1 text-[11px] font-black uppercase tracking-wider bg-yellow-300 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded">
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

// COMPONENT: Cert Card (Clean Minimalist Card - Refined Font Sizes)
const CertCard = ({ title, subtitle, images, onOpenModal }) => {
    return (
        <div 
          onClick={onOpenModal}
          className="group relative h-64 sm:h-72 w-full bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 cursor-pointer select-none"
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
  
  // State untuk Case Study Modal (Pop-Up Detail)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseData, setSelectedCaseData] = useState(null);

  // State untuk kontrol Show More pada section Experience
  const [showAllExp, setShowAllExp] = useState(false);

  // Refs for Auto-Scroll
  const projectScrollRef = useRef(null);
  const certScrollRef = useRef(null);

  useAutoScroll(projectScrollRef, 0.6);
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

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // ==========================================
  // DATA MASTER: PROJECTS (Termasuk 4 Website PGNMAS)
  // ==========================================
  const projectsData = [
    {
      title: "Fleedy",
      category: "Web Development",
      year: "2026",
      description: "Corporate internal website platform developed for PT Permata Graha Nusantara (PGNMAS) featuring modern horizontal scrolling and responsive layout.",
      problem: "Kebutuhan antarmuka web interaktif yang modern untuk menampilkan data dan layanan operasional secara dinamis.",
      solution: "Membangun landing page dan antarmuka web interaktif berbasis React.js dan Tailwind CSS dengan alur navigasi yang halus.",
      impact: "Meningkatkan daya tarik visual dan kemudahan akses informasi bagi pengguna internal maupun pemangku kepentingan.",
      techStack: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Web Dev'],
      color: "blue",
      gallery: ["fleedy.png"]
    },
    {
      title: "ArtBuild",
      category: "Web Development",
      year: "2026",
      description: "Architecture and construction portfolio showcase website developed during internship at PT Permata Graha Nusantara (PGNMAS).",
      problem: "Portofolio proyek konstruksi dan rancangan membutuhkan wadah digital yang estetis dan berkinerja tinggi.",
      solution: "Mengembangkan situs web berdesain responsif dengan fokus pada performa pemuatan visual dan tata letak yang rapi.",
      impact: "Mempermudah presentasi proyek-proyek konstruksi dan aset perusahaan secara profesional.",
      techStack: ['React.js', 'Tailwind CSS', 'Responsive Web', 'PGNMAS'],
      color: "purple",
      gallery: ["artbuild.png"]
    },
    {
      title: "Filexpert",
      category: "Web Development",
      year: "2026",
      description: "Digital document and file management solution interface designed for corporate IT Support workflow at PGNMAS.",
      problem: "Pengelolaan dan pencarian berkas atau dokumen administrasi IT membutuhkan antarmuka yang terpusat dan mudah diakses.",
      solution: "Merancang antarmuka sistem manajemen file interaktif berbasis web dengan fitur pengelompokan yang efisien.",
      impact: "Membantu menata alur kerja dokumentasi dan mempercepat akses berkas bagi tim internal.",
      techStack: ['React.js', 'Tailwind CSS', 'Document Management', 'UI/UX'],
      color: "green",
      gallery: ["filexpert.png"]
    },
    {
      title: "Spativm",
      category: "Web Development",
      year: "2026",
      description: "Spatial and facility management web portal developed for corporate asset visualization at PT Permata Graha Nusantara.",
      problem: "Visualisasi informasi fasilitas dan ruang kantor membutuhkan presentasi web yang bersih dan informatif.",
      solution: "Membangun portal web berdesain modern untuk menunjang kebutuhan manajemen ruang dan informasi fasilitas.",
      impact: "Memberikan visibilitas yang lebih baik terhadap pengelolaan fasilitas korporat PGNMAS.",
      techStack: ['React.js', 'Tailwind CSS', 'Facility Mgmt', 'Web Dev'],
      color: "orange",
      gallery: ["spativm.png"]
    },
    {
      title: "Lifegen App",
      category: "UI/UX Design",
      year: "2025",
      description: "Daily health and calorie tracking application with a clean interface to motivate a healthy lifestyle.",
      problem: "Pengguna sering merasa terbebani oleh aplikasi pelacak kalori yang terlalu rumit dan penuh tabel data yang membingungkan.",
      solution: "Merancang antarmuka bersih berbasis gamifikasi visual di Figma dengan alur pengisian kalori cepat hanya dalam 3 klik.",
      impact: "Mencapai tingkat penyelesaian purwarupa (prototype task completion) 92% saat pengujian kelayakan pengguna.",
      techStack: ['Figma', 'Design System', 'UI/UX Prototyping'],
      color: "pink",
      gallery: ["life.png"],
      links: [
        { text: "Figma Prototype", url: "https://www.figma.com/proto/MIYprCXiJ8d9SDMZA5kMYT/Lifegen?node-id=48-3636&p=f&t=vXSOTZWg6oxs5i8D-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=48%3A3636&show-proto-sidebar=1", icon: <Figma size={14}/> },
      ]
    },
    {
      title: "LandConnect",
      category: "Marketplace",
      year: "2025",
      description: "Strategic land trading platform with interactive map features to facilitate location search.",
      problem: "Pencarian lahan tanah strategis sering kali kurang transparan dan tidak memiliki visualisasi pemetaan batas tanah yang jelas.",
      solution: "Mengintegrasikan peta interaktif digital untuk memetakan spesifikasi zona, harga per meter, serta akses infrastruktur terdekat.",
      impact: "Mempercepat proses kurasi lokasi properti bagi calon pembeli dan investor.",
      techStack: ['Figma', 'Interactive Map UI', 'Web Prototype'],
      color: "purple",
      gallery: ["land.png"],
      links: [
        { text: "Figma Prototype", url: "https://www.figma.com/proto/OGf7IzSdu9WjrTlVOI0xP9/LandConnect?node-id=747-3006&t=dyPSPDRSZXDFVWfj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=747%3A3006", icon: <Figma size={14}/> },
      ]
    },
    {
      title: "Gula Cerdas",
      category: "IoT Solution",
      year: "2025–2026",
      description: "Palm sugar production standardization using Thermocouple sensors and DC Motors to measure viscosity and saturation point.",
      problem: "Produksi gula aren UMKM tradisional mengandalkan feeling/intuisi, menyebabkan tingkat kekentalan dan kualitas yang tidak konsisten.",
      solution: "Menggunakan mikrokontroler ESP32, sensor Thermocouple, dan pengaduk otomatis untuk mengukur titik jenuh serta viskositas secara presisi.",
      impact: "Meningkatkan konsistensi kualitas produksi gula aren hingga 85% dan menghemat tenaga fisik petani aren.",
      techStack: ['ESP32', 'Thermocouple Sensor', 'C++ / Arduino IDE', 'DC Motor Control'],
      color: "green",
      gallery: ["gula1.jpeg", "gula2.jpeg", "gula3.jpeg", "gula.JPG"],
      links: [
        { text: "Github Repo", url: "https://github.com/rifqiimt/Gula-Cerdas.git", icon: <Github size={14}/> },
        { text: "Video Demo", url: "https://youtu.be/ixs_9arpgVE?si=v6d2Frtj0yElD_Yu", icon: <Youtube size={14}/>, className: "bg-red-100 text-black hover:bg-red-200" }
      ]
    },
    {
      title: "Smart Water Metering",
      category: "Embedded",
      year: "2024",
      description: "Water usage monitoring system based on Arduino Uno to prevent household water waste.",
      problem: "Banyak rumah tangga tidak menyadari kebocoran pipa atau pemborosan air sampai tagihan bulanan membengkak.",
      solution: "Membangun pemantauan arus air real-time berbasis Arduino Uno dengan sensor flow meter dan peringatan alarm batas konsumsi.",
      impact: "Membantu mendeteksi kebocoran air lebih dini dan menekan penggunaan air berlebih hingga 30%.",
      techStack: ['Arduino Uno', 'Water Flow Sensor', 'C++ Embedded'],
      color: "green",
      gallery: ["swms.jpeg", "swm1.jpeg", "swm2.jpeg", "swm3.jpeg"],
      links: [
        { text: "Arduino Code", url: "#", icon: <Code size={14}/> },
        { text: "Video Demo", url: "#", icon: <Youtube size={14}/>, className: "bg-red-100 text-black hover:bg-red-200" }
      ]
    },
    {
      title: "BridgeGuard",
      category: "IoT Solution",
      year: "2025",
      description: "Early bridge vibration detection device using ESP32 and ADXL accelerometer sensors.",
      problem: "Kurangnya pemantauan struktur jembatan secara terus-menerus meningkatkan risiko kecelakaan saat terjadi beban atau getaran berlebih.",
      solution: "Memasang sensor akselerometer ADXL yang terhubung dengan ESP32 untuk memantau frekuensi getaran anomali secara real-time.",
      impact: "Memberikan sistem peringatan dini struktural dengan pengiriman data nirkabel instan.",
      techStack: ['ESP32', 'ADXL Accelerometer', 'Real-Time Telemetry'],
      color: "green",
      gallery: ["bg.jpeg"],
      links: [
        { text: "Github Repo", url: "https://github.com/rifqiimt/BridgeGuard.git", icon: <Github size={14}/> },
        { text: "Video Demo", url: "https://www.youtube.com/@muhammadabiyyu3010/shorts", icon: <Youtube size={14}/>, className: "bg-red-100 text-black hover:bg-red-200" }
      ]
    },
    {
      title: "AR BMKG Tools",
      category: "AR / VR",
      year: "2026",
      description: "Markerless AR educational app for 3D interactive visualization of BMKG meteorological tools.",
      problem: "Alat-alat meteorologi BMKG sering kali berukuran besar dan sensitif, sehingga sulit untuk dipelajari langsung oleh publik atau staf baru.",
      solution: "Membangun aplikasi Augmented Reality (AR) markerless berbasis Unity untuk menampilkan model 3D alat cuaca interaktif di smartphone.",
      impact: "Menjadi sarana edukasi visual baru di Stasiun Meteorologi Kelas I Sultan Iskandar Muda Banda Aceh.",
      techStack: ['Unity3D', 'Vuforia AR Engine', 'Blender 3D Modeling'],
      color: "orange",
      gallery: ["bmkg2.png", "bmkg1.jpg"],
      links: [
        { text: "Download APK", url: "#", icon: <Smartphone size={14}/>, className: "bg-green-100 text-black hover:bg-green-200" },
        { text: "Video Demo", url: "https://drive.google.com/file/d/1V6obcvnr7jf35-M14eItzmC8sS8rudcz/view?usp=drive_link", icon: <Youtube size={14}/>, className: "bg-red-100 text-black hover:bg-red-200" }
      ]
    }
  ];

  // ==========================================
  // DATA MASTER: EXPERIENCE
  // ==========================================
  const experiencesList = [
    {
      role: "Project Lead (Ketua)",
      title: "CMD 2025",
      year: "2025–2026",
      image: "cmd.png",
      categoryBadgeColor: "bg-yellow-300",
      description: "Memimpin acara kompetisi dan seminar IT nasional tahunan berskala besar di lingkungan kampus.",
      problem: "Tantangan menyatukan koordinasi dari 120 panitia serta mengelola keterbatasan pendanaan dan penjadwalan 6 sub-lomba nasional.",
      solution: "Menerapkan alur kerja manajemen proyek yang transparan, restrukturisasi prizepool yang realistis, dan kolaborasi sponsorship.",
      impact: "Acara berjalan sukses dihadiri peserta dari berbagai universitas dengan efisiensi anggaran optimal.",
      gallery: ["cmd.png", "cmd1.jpeg", "cmd2.jpeg", "cmd3.jpeg", "cmd4.jpeg", "cmd5.jpeg"],
      techStack: ['Project Management', 'Sponsorship Relations', 'Team Leadership']
    },
    {
      role: "Vice Chairman",
      title: "PBMT XI - KKN",
      year: "2024",
      image: "pbmt.png",
      categoryBadgeColor: "bg-blue-300",
      description: "Pengabdian masyarakat berbasis teknologi di Desa Luthu Lamwu dengan fokus pada infrastruktur air bersih.",
      problem: "Akses air minum yang belum terdistribusi merata dan memerlukan solusi teknis langsung pakai di lokasi desa.",
      solution: "Merancang dan mendistribusikan sistem air minum isi ulang otomatis yang siap pakai bagi masyarakat desa.",
      impact: "Meningkatkan kualitas akses air bersih lokal yang berkelanjutan.",
      gallery: ["pbmt.png"],
      techStack: ['Community Outreach', 'System Engineering']
    },
    {
      role: "Vice Head of Kesma",
      title: "HIMATEKKOM",
      year: "2024",
      image: "kesma.jpg",
      categoryBadgeColor: "bg-purple-300",
      description: "Mengelola aspirasi dan kesejahteraan akademik mahasiswa Teknik Komputer.",
      problem: "Alur komunikasi kendala kuliah dan kebutuhan mahasiswa dengan pihak jurusan yang perlu dipercepat.",
      solution: "Membentuk program pendampingan dan penampungan aspirasi reguler secara terbuka.",
      impact: "Menjembatani resolusi masalah akademik secara proaktif bagi ratusan mahasiswa.",
      gallery: ["kesma.jpg", "kesma1.png"],
      techStack: ['Student Advocacy', 'Public Communication']
    },
    {
      role: "Public Relations Staff",
      title: "BEM Fakultas Teknik",
      year: "2024",
      image: "humas.png",
      categoryBadgeColor: "bg-pink-300",
      description: "Mengatur strategi pencitraan dan publikasi acara fakultas ke luar.",
      problem: "Kebutuhan menjaga standar informasi visual yang profesional dan jangkauan audiens yang luas.",
      solution: "Memproduksi kampanye visual serta menjalin kemitraan media partner universitas.",
      impact: "Meningkatkan engagement media sosial organisasi BEM FT secara signifikan.",
      gallery: ["humas.png"],
      techStack: ['Social Media Strategy', 'Media Relations']
    },
    {
      role: "Event Coordinator",
      title: "BIOS Orientation",
      year: "2025",
      image: "cmd1.jpeg",
      categoryBadgeColor: "bg-green-300",
      description: "Mendesain konsep ospek dan penyambutan mahasiswa baru.",
      problem: "Mengubah pola ospek tradisional menjadi orientasi berbasis proyek teknik dan pengenalan keahlian.",
      solution: "Menyusun rundown interaktif dan workshop perkenalan mikrokontroler bagi mahasiswa baru.",
      impact: "Tingkat kepuasan mahasiswa baru meningkat drastis dengan pendekatan edukatif.",
      gallery: ["cmd1.jpeg"],
      techStack: ['Workshop Planning', 'Mentorship']
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
          NAVBAR: TANPA BORDER KECIL DALAM
          ========================================== */}
      <nav className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}>
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full px-5 py-2.5 flex justify-between items-center transition-all duration-300">
          
          {/* Logo */}
          <div 
            className="text-base font-black italic tracking-tighter cursor-pointer flex items-center gap-1.5 select-none text-black hover:-rotate-2 transition-transform" 
            onClick={() => scrollTo('home')}
          >
            RIFQI<span className="bg-black text-white px-2 py-0.5 text-[11px] rounded-full font-bold not-italic">.MT</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center relative p-1 rounded-full">
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
                      className="absolute inset-0 bg-yellow-300 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -z-0"
                      style={{
                        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Hire Me CTA & Hamburger */}
          <div className="flex items-center gap-2">
            <a 
              href="mailto:tampengrifqmubarak@gmail.com" 
              className="hidden sm:flex bg-pink-400 border-2 border-black text-black font-bold text-xs uppercase px-4 py-2 rounded-full items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <Mail size={14}/> Hire Me!
            </a>
            <button 
              className="md:hidden p-2 border-2 border-black rounded-full bg-white active:bg-black active:text-white transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl overflow-hidden animate-in slide-in-from-top-3">
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
          </div>
        )}
      </nav>

      {/* Hero Section (Wider Container max-w-[1400px] + Skala Font Refined: text-4xl sm:text-5xl lg:text-6xl) */}
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
                  Computer Engineering Student (GPA 3.50). Specializing in: <span className="font-bold underline decoration-pink-500 decoration-4">UI/UX Design</span>, <span className="font-bold underline decoration-blue-500 decoration-4">3D Modeling</span>, & <span className="font-bold underline decoration-green-500 decoration-4">Low-Code Dev</span>.
                </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button onClick={() => scrollTo('projects')} className="group px-7 py-3.5 bg-black text-white text-xs sm:text-sm font-bold uppercase border-2 border-black rounded shadow-[6px_6px_0px_0px_#22d3ee] hover:shadow-[2px_2px_0px_0px_#22d3ee] hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2">
                View Projects <MousePointer2 size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
              <button onClick={() => scrollTo('experience')} className="px-7 py-3.5 bg-white text-black text-xs sm:text-sm font-bold uppercase border-2 border-black rounded shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                Experience
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
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
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
                 <Box size={20} className="text-black"/>
                 <span className="font-black text-[11px] sm:text-xs uppercase">3D<br/>ARTIST</span>
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

      {/* About & Skills (Wider Container max-w-[1400px] + H2: text-xl sm:text-2xl lg:text-3xl) */}
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
                        I am a high-achieving Computer Engineering undergraduate with a <span className="bg-green-200 px-1.5 py-0.5 border border-black font-bold">GPA of 3.50/4.00</span>. I have a strong passion for creating aesthetic and functional digital solutions.
                        </p>
                        <p>
                        My expertise ranges from intuitive User Interface (UI/UX) design and 3D modeling to IoT-based system development and Low-Code Full Stack applications.
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
                     { val: "3.50", label: "GPA Score", color: "bg-pink-300" },
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

            <div className="lg:col-span-5">
               <Reveal delay={300}>
                 <div className="bg-gray-100 border-2 border-black p-6 rounded-xl relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 text-xs sm:text-sm font-bold uppercase rounded border-2 border-white transform skew-x-12">
                         My Arsenal
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                      <TechStackCard icon="figma.png" name="Figma" desc="Design" />
                      <TechStackCard icon="unity.png" name="Unity" desc="Augmented Reality" />
                      <TechStackCard icon="blender.png" name="Blender" desc="3D" />
                      <TechStackCard icon="mesh.png" name="Meshroom" desc="Photogrammetry" />
                      <TechStackCard icon="arduino.png" name="Arduino IDE" desc="Low-Code" />
                      <TechStackCard icon="canva.png" name="Canva" desc="Graphic" />
                    </div>
                 </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PROJECTS SECTION (Wider Container max-w-[1400px] + 4 Proyek PGNMAS di Awal)
          ========================================== */}
      <section id="projects" className="py-28 bg-[#fffdf5] overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div>
                 <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-12 bg-black"></div>
                    <span className="font-mono font-bold uppercase text-xs sm:text-sm">Selected Works</span>
                 </div>
                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black tracking-tight leading-none">FEATURED <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500" style={{WebkitTextStroke: '1px black'}}>PROJECTS</span></h2>
               </div>
               
               <div className="hidden md:flex gap-2">
                  <div className="px-4 py-2 border-2 border-black font-bold text-xs uppercase bg-gray-100">Click Card for Full Case Study</div>
               </div>
            </div>
          </Reveal>

          <div 
             ref={projectScrollRef}
             className="w-full overflow-x-auto pb-16 pt-4 px-4 -mx-4 responsive-scrollbar"
          >
            <div className="flex gap-8 w-max">
              {projectsData.map((project, idx) => (
                <div key={idx} className="w-[340px] md:w-[420px] flex-shrink-0">
                  <ProjectCard 
                    title={project.title}
                    category={project.category}
                    images={project.gallery}
                    onOpenModal={() => openCaseModal(project)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          EXPERIENCE SECTION (Wider Container max-w-[1400px] + 2 Kartu Magang Profesional)
          ========================================== */}
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
            {/* 1. PT PERMATA GRAHA NUSANTARA (PGNMAS) - INTERNSHIP TERBARU 2026 */}
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
                                    <p className="font-bold text-xs text-gray-800">IT Support Division</p>
                                </div>
                                <p className="text-xs font-bold text-gray-500 mt-1">PT Permata Graha Nusantara</p>
                            </div>
                        </div>

                        <div className="bg-green-50 border-l-4 border-black p-4 mb-4 relative">
                            <span className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-1 block">
                                Core Scope & Projects
                            </span>
                            <h4 className="font-bold text-xs sm:text-sm leading-relaxed text-black">
                                IT Infrastructure Support & Internal Web Platform Development (Fleedy, ArtBuild, Filexpert, Spativm)
                            </h4>
                        </div>
                        
                        <p className="text-gray-700 font-medium text-xs sm:text-sm leading-relaxed mb-4">
                            Memberikan dukungan teknis pemeliharaan IT korporat serta membangun 4 platform website internal perusahaan berdesain modern dan responsif.
                        </p>
                    </div>

                    <div className="border-t-2 border-black pt-4 flex flex-wrap justify-between items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[10px] px-2.5 py-0.5 bg-yellow-300 border border-black rounded font-bold">IT Support</span>
                            <span className="text-[10px] px-2.5 py-0.5 bg-yellow-300 border border-black rounded font-bold">React.js</span>
                        </div>
                        
                        <button 
                            onClick={() => openCaseModal({
                              title: "PGNMAS – IT Support & Web Dev",
                              role: "Internship Project",
                              year: "2026",
                              description: "Magang profesional di PT Permata Graha Nusantara (PGNMAS) pada Divisi IT Support, bertanggung jawab atas dukungan teknis infrastruktur IT dan pengembangan aplikasi web internal.",
                              problem: "Kebutuhan digitalisasi proses operasional dan pemeliharaan sistem IT korporat agar berjalan optimal dan efisien.",
                              solution: "Memberikan dukungan teknis IT secara proaktif serta mengembangkan 4 platform website internal (Fleedy, ArtBuild, Filexpert, Spativm) berbasis modern web stack.",
                              impact: "Meningkatkan efisiensi layanan dukung teknis IT dan mempercepat digitalisasi alur kerja internal perusahaan.",
                              gallery: ["pgnmas.png", "fleedy.png", "artbuild.png", "filexpert.png", "spativm.png"],
                              techStack: ["React.js", "Tailwind CSS", "IT Support", "Web Development", "System Admin"]
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

            {/* 2. BMKG ACEH - INTERNSHIP 2024–2025 */}
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
                                        2024–2025
                                    </span>
                                </div>
                                <div className="inline-block bg-gray-100 border border-black px-2 py-0.5 mt-1">
                                    <p className="font-bold text-xs text-gray-800">Class I Meteorological Station</p>
                                </div>
                                <p className="text-xs font-bold text-gray-500 mt-1">Sultan Iskandar Muda Banda Aceh</p>
                            </div>
                        </div>

                        <div className="bg-green-50 border-l-4 border-black p-4 mb-4 relative">
                            <span className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-1 block">
                                Final Project Title
                            </span>
                            <h4 className="font-bold text-xs sm:text-sm leading-relaxed text-black">
                                "Utilization of Augmented Reality for Work Equipment Introduction at Class I Meteorological Station SIM Banda Aceh"
                            </h4>
                        </div>
                        
                        <p className="text-gray-700 font-medium text-xs sm:text-sm leading-relaxed mb-4">
                            Developing interactive AR-based media to visualize meteorological tools in 3D, improving technical understanding for staff and station visitors.
                        </p>
                    </div>

                    <div className="border-t-2 border-black pt-4 flex flex-wrap justify-between items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[10px] px-2.5 py-0.5 bg-yellow-300 border border-black rounded font-bold">Unity 3D</span>
                            <span className="text-[10px] px-2.5 py-0.5 bg-yellow-300 border border-black rounded font-bold">Vuforia AR</span>
                        </div>
                        
                        <button 
                            onClick={() => openCaseModal({
                              title: "BMKG Aceh - AR Project",
                              role: "Internship Project",
                              year: "2024–2025",
                              description: "Mengembangkan media pembelajaran interaktif berbasis Augmented Reality (AR) untuk visualisasi 3D alat-alat meteorologi.",
                              problem: "Pengenalan instrumen cuaca kepada pengunjung atau staf baru terkendala oleh dimensi alat yang sensitif dan tersebar di lapangan.",
                              solution: "Membuat aplikasi mobile AR markerless berbasis Unity dan 3D modeling berpresisi tinggi.",
                              impact: "Efisiensi alur pengenalan alat bagi para tamu dan pelajar di Stasiun Meteorologi Kelas I SIM Banda Aceh.",
                              gallery: ["bmkg1.jpg", "bmkg2.png"],
                              techStack: ["Unity3D", "Vuforia Engine", "Blender 3D Modeling", "C# Scripting"]
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

      {/* Certifications (Wider Container max-w-[1400px] + H2: text-xl sm:text-2xl lg:text-3xl) */}
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

      {/* Footer (Wider Container max-w-[1400px]) */}
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

    </div>
  );
};

const QuoteIcon = ({className}) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.925 15.025 15.088C15.697 14.252 16.637 13.833 17.845 13.833H19V9H17.291C16.427 9 15.635 9.176 14.915 9.528C14.195 9.88 13.835 10.592 13.835 11.664V21H7.017Z"/>
    </svg>
);

export default App;