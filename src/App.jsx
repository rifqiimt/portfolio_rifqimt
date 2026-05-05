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
  ChevronDown,
  Menu,
  X,
  Image as ImageIcon,
  Camera,
  Instagram,
  Figma,
  ChevronLeft,
  ChevronRight,
  Building2,
  Phone,
  Zap,
  MousePointer2,
  MapPin,
  Terminal,
  ArrowUpRight,
  CloudSun,
  Youtube,
  Globe,
  Calendar,
  Tag,
  CheckCircle2,
  Download
} from 'lucide-react';

/* --- HOOKS & UTILS --- */

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        if (entry.boundingClientRect.top > 0) {
          setIsVisible(false);
        }
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

const useAutoScroll = (ref, speed = 1) => {
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

/* --- HELPER ICONS --- */

const QuoteIcon = ({className}) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.925 15.025 15.088C15.697 14.252 16.637 13.833 17.845 13.833H19V9H17.291C16.427 9 15.635 9.176 14.915 9.528C14.195 9.88 13.835 10.592 13.835 11.664V21H14.017ZM7.017 21L7.017 18C7.017 16.896 7.353 15.925 8.025 15.088C8.697 14.252 9.637 13.833 10.845 13.833H12V9H10.291C9.427 9 8.635 9.176 7.915 9.528C7.195 9.88 6.835 10.592 6.835 11.664V21H7.017Z"/>
    </svg>
);

const TargetIcon = ({size}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
);

/* --- COMPONENTS --- */

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

// MODAL 1: PROJECT DETAILS MODAL (Proporsional & Gambar Lebih Jelas)
const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose}>
      {/* max-w-7xl disamakan dengan container 1280px */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#fffdf5] border-2 sm:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:rounded-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        
        <button onClick={onClose} className="absolute top-4 right-4 z-50 bg-white hover:bg-red-400 border-2 border-black rounded-full p-2 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
          <X size={20} className="text-black" />
        </button>

        <div className="overflow-y-auto hide-scrollbar relative flex flex-col p-5 sm:p-8 flex-grow">
          
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-300 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
               {React.cloneElement(project.icon, { size: 14 })} {project.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-none mb-2">
              {project.title}
            </h1>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest flex items-center gap-2">
              By Rifqi Mubarak <span className="w-1.5 h-1.5 bg-black rounded-full"></span> 2025
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 border-y-2 border-black py-3 bg-gray-50">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black text-xs font-bold rounded flex items-center gap-1.5">
                <Code size={14} /> {tag}
              </span>
            ))}
          </div>

          {/* Hero Image / Gallery Area in Modal - Border lebih tipis & Aspect Video */}
          <div className="w-full relative aspect-video border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 bg-white flex items-center justify-center group">
             {project.images && project.images.length > 0 ? (
                <>
                  <img src={project.images[currentImageIdx]} alt={project.title} className="w-full h-full object-contain p-2" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"; }} />
                  
                  {project.images.length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-gray-200 transition-colors opacity-0 group-hover:opacity-100"><ChevronLeft size={24} /></button>
                      <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-gray-200 transition-colors opacity-0 group-hover:opacity-100"><ChevronRight size={24} /></button>
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {project.images.map((_, idx) => (
                          <div key={idx} className={`w-2.5 h-2.5 rounded-full border-2 border-black transition-all ${idx === currentImageIdx ? 'bg-yellow-400 scale-125' : 'bg-gray-300'}`} />
                        ))}
                      </div>
                    </>
                  )}
                </>
             ) : (
                <div className="text-black/50 font-mono font-bold text-sm">NO_IMAGE_DATA</div>
             )}
          </div>

          {/* Konten Text Bawah */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
             <div className="md:col-span-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-1.5 mb-3 inline-block">Tentang Proyek</h3>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                    {project.description} Proyek ini dirancang dengan pendekatan berpusat pada pengguna (user-centered) untuk memastikan pengalaman digital yang mulus dan solusi fungsional yang skalabel.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-1.5 mb-3 inline-block">Key Features</h3>
                  <ul className="space-y-3">
                    {project.keyFeatures?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-medium text-gray-800">
                        <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
             </div>

             <div className="md:col-span-4 space-y-6">
                <div className="bg-purple-100 border-2 border-black p-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-lg font-black uppercase mb-3 flex items-center gap-2"><TargetIcon size={18}/> Use Case</h3>
                  <ul className="space-y-2">
                    {project.useCases?.map((usecase, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-medium text-gray-800">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0"></div>
                        <span>{usecase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-100 border-2 border-black p-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-lg font-black uppercase mb-2">Call to Action</h3>
                  <p className="text-sm font-medium mb-4 text-gray-800">Mulai jelajahi fitur dan implementasi dari proyek ini.</p>
                  <div className="flex flex-col gap-3">
                    {project.links?.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noreferrer" className="w-full text-center px-4 py-3 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] font-black text-sm uppercase flex items-center justify-center gap-2 transition-all rounded">
                        {React.cloneElement(link.icon, { size: 18 })} {link.text}
                      </a>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// MODAL 2: IMAGE GALLERY MODAL
const ImageGalleryModal = ({ isOpen, images, initialIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-yellow-300/90 backdrop-blur-md p-4 animate-in fade-in duration-300" onClick={onClose}>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <button onClick={onClose} className="absolute top-4 right-4 bg-black text-white p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all z-50 rounded-lg"><X size={20} /></button>

      <div className="relative w-full max-w-6xl h-full max-h-[85vh] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-2 rounded-xl max-h-full max-w-full flex flex-col w-full">
            <div className="flex justify-between items-center mb-2 px-3 border-b-2 border-black pb-2 bg-gray-100 rounded-t-lg">
                <span className="font-mono font-bold text-sm">GALLERY_VIEWER.EXE</span>
                <span className="font-mono text-xs">{activeIndex + 1} / {images.length}</span>
            </div>

            <div className="relative overflow-hidden bg-gray-100 border-2 border-black rounded-lg flex-grow flex items-center justify-center p-2">
                {images.length > 1 && (
                <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-gray-50 transition-colors"><ChevronLeft size={24} /></button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-gray-50 transition-colors"><ChevronRight size={24} /></button>
                </>
                )}
                <img src={images[activeIndex]} alt={`Gallery ${activeIndex}`} className="max-h-[65vh] w-auto object-contain mx-auto" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"; }} />
            </div>

            <div className="flex gap-2 overflow-x-auto max-w-full p-3 hide-scrollbar justify-center">
            {images.map((_, idx) => (
                <button key={idx} onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }} className={`w-3 h-3 border-2 border-black transition-all duration-300 ${idx === activeIndex ? 'bg-black scale-125' : 'bg-white hover:bg-gray-200'}`} />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

// PROJECT CARD FULL BLEED IMAGE
const ProjectCard = ({ project, onProjectClick }) => {
  const bgColors = {
    pink: 'bg-[#ffb3c6]', purple: 'bg-[#c8b6ff]', blue: 'bg-[#a2d2ff]',
    green: 'bg-[#b7e4c7]', orange: 'bg-[#ffd6a5]', yellow: 'bg-[#fdffb6]', default: 'bg-gray-200'
  };
  const accentBg = bgColors[project.color] || bgColors.default;

  return (
    <div className="group cursor-pointer w-full flex flex-col h-full" onClick={() => onProjectClick(project)}>
      <div className={`relative w-full aspect-video sm:aspect-[4/3] rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-4 ${accentBg} flex items-center justify-center p-0 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300`}>
        {project.images && project.images.length > 0 ? (
            <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80"; }} />
        ) : (
            <span className="font-mono text-black/50 text-sm font-bold">NO_IMAGE</span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center backdrop-blur-[1px]">
            <div className="bg-yellow-400 border-2 border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5">
                <span className="font-bold text-sm uppercase">View Details</span><ArrowUpRight size={16}/>
            </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-between px-1">
        <div>
          <h3 className="text-xl md:text-2xl font-black text-black uppercase leading-tight mb-2 group-hover:underline decoration-2">{project.title}</h3>
          <p className="text-gray-500 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3">
            {React.cloneElement(project.icon, { size: 14 })} {project.category}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="text-[10px] font-bold px-2 py-1 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    {tag}
                </span>
            ))}
            {project.tags.length > 3 && <span className="text-[10px] font-bold px-2 py-1 text-gray-500 border border-gray-300 rounded">+{project.tags.length - 3}</span>}
        </div>
      </div>
    </div>
  );
};

// TECH STACK GROUP CARD
const TechGroupCard = ({ title, tools }) => (
  <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform flex flex-col h-full">
    <h4 className="font-black text-lg md:text-xl text-center mb-6 uppercase border-b-4 border-black pb-2">{title}</h4>
    <div className="grid grid-cols-2 gap-4 md:gap-6 flex-grow place-content-start">
      {tools.map((tool, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gray-50 border-4 border-black rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-colors">
            <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
          <span className="text-xs font-black uppercase text-center mt-2">{tool.name}</span>
        </div>
      ))}
    </div>
  </div>
);

// TIMELINE CARD
const TimelineCard = ({ role, org, date, desc, responsibilities, colorClass = "bg-white", images, onOpenGallery, highlight }) => (
  <div className="flex gap-4 sm:gap-6 group relative">
    <div className="flex flex-col items-center">
        <div className={`w-5 h-5 rounded-full border-2 border-black bg-yellow-400 z-10 shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-125 transition-transform`}></div>
        <div className="w-1 bg-black h-full -mt-2"></div>
    </div>

    <div className="pb-8 flex-grow">
        <div className={`${colorClass} border-4 border-black p-5 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div>
                    <h4 className="text-xl md:text-2xl font-black uppercase leading-none text-black mb-2">{role}</h4>
                    <span className="inline-block bg-white border-2 border-black px-2 py-0.5 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{org}</span>
                </div>
                <span className="text-xs font-mono font-bold bg-black text-white px-3 py-1 rounded md:transform md:rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                    {date}
                </span>
            </div>
            
            <p className="text-sm font-medium text-gray-700 mb-4">{desc}</p>
            
            {responsibilities && responsibilities.length > 0 && (
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-black border-b-2 border-black inline-block pb-0.5 mb-3">Key Responsibilities:</h5>
                <ul className="space-y-2">
                  {responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-2 text-xs md:text-sm font-medium text-gray-800">
                      <span className="font-black text-black">{idx + 1}.</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {images && images.length > 0 && (
              <div className="mt-6 border-t-2 border-dashed border-gray-300 pt-4">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3 block">Visual Chronicles & Proof:</span>
                <div className="flex flex-wrap gap-2 mb-3">
                  {images.slice(0, 4).map((img, i) => (
                     <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden shrink-0 cursor-pointer hover:-translate-y-1 transition-transform" onClick={() => onOpenGallery(images, i)}>
                        <img src={img} alt="proof" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80"; }} />
                     </div>
                  ))}
                  {images.length > 4 && (
                     <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-yellow-300 flex items-center justify-center shrink-0 cursor-pointer hover:-translate-y-1 transition-transform" onClick={() => onOpenGallery(images, 4)}>
                        <span className="font-black text-sm">+{images.length - 4}</span>
                     </div>
                  )}
                </div>
                <button onClick={() => onOpenGallery(images, 0)} className="inline-flex items-center gap-1.5 bg-white border-2 border-black px-3 py-1.5 rounded font-black uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-colors">
                    <ImageIcon size={14}/> View Full Gallery
                </button>
              </div>
            )}
        </div>
    </div>
  </div>
);

// CERT CARD
const CertCard = ({ title, subtitle, desc, color, icon, images, onOpenGallery }) => {
    const bgClass = color === 'green' ? 'bg-green-200' : color === 'orange' ? 'bg-orange-200' : color === 'blue' ? 'bg-blue-200' : 'bg-yellow-200';
    return (
        <div className="group relative min-w-[280px] h-full">
            <div className={`absolute inset-0 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl`}></div>
            <div className={`relative h-full flex flex-col p-5 border-4 border-black bg-white rounded-xl transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-none`}>
                <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-4">
                        <div className={`p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${bgClass} rounded-lg shrink-0`}>
                            {React.cloneElement(icon, { size: 18, strokeWidth: 2.5 })}
                        </div>
                        <div className="pr-2">
                            <h4 className="font-black text-sm leading-tight uppercase">{title}</h4>
                            <span className="text-[10px] font-bold bg-gray-100 px-1 mt-1 inline-block border border-black">{subtitle}</span>
                        </div>
                    </div>
                    <p className="text-xs font-medium text-gray-600 mb-4 pr-2">{desc}</p>
                </div>
                <div className="mt-auto relative z-10 pr-2">
                    <div className="w-full h-24 border-2 border-black bg-gray-100 rounded-lg overflow-hidden relative cursor-pointer group/img" onClick={() => images && images.length > 0 && onOpenGallery(images, 0)}>
                        {images && images.length > 0 ? (
                            <>
                                <div className="absolute inset-0 bg-yellow-400/80 border-2 border-black translate-y-full group-hover/img:translate-y-0 transition-transform duration-300 z-10 flex items-center justify-center">
                                    <span className="font-black text-black text-xs uppercase tracking-wider">View Cert</span>
                                </div>
                                <img src={images[0]} alt={title} className="w-full h-full object-cover filter grayscale group-hover/img:grayscale-0 transition-all" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&q=80"; }}/>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400 bg-gray-50 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px]"><Award size={20}/><span className="text-[10px] font-mono mt-1">NO_PREVIEW</span></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded-full group shrink-0">
    {React.cloneElement(icon, { size: 20, className: "group-hover:scale-110 transition-transform" })}
  </a>
);

/* --- MAIN APP --- */

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGalleryImages, setCurrentGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const certScrollRef = useRef(null);
  useAutoScroll(certScrollRef, 0.5);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'projects', 'experience', 'techstack', 'certs'];
      const scrollPosition = window.scrollY + 200; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; 
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openGallery = (images, startIndex = 0) => {
    if (!images || images.length === 0) return;
    setCurrentGalleryImages(images);
    setCurrentImageIndex(startIndex);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    if(!selectedProject) document.body.style.overflow = 'unset';
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
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

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Stack', id: 'techstack' },
  ];

  const projectsData = [
    {
      title: "Fleedy App", category: "UI/UX Design", color: "blue", icon: <Palette/>, images: ["fleedy1.png", "fleedy2.png"],
      description: "Aplikasi manajemen armada (Fleet Management) internal PGN MAS untuk memantau kendaraan operasional, jadwal perawatan, dan efisiensi bahan bakar.",
      tags: ['Figma', 'Web Dashboard', 'Enterprise'],
      keyFeatures: ["Dashboard Monitoring Real-time", "Sistem Penjadwalan Maintenance", "Laporan Efisiensi Bahan Bakar", "Desain Antarmuka Clean & Profesional"],
      useCases: ["Manajemen Kendaraan Operasional", "Optimalisasi Biaya Armada", "Tracking Aset Perusahaan"],
      links: [{ text: "Figma Prototype", url: "#", icon: <Figma/> }]
    },
    {
      title: "ArtBuild", category: "UI/UX Design", color: "purple", icon: <Palette/>, images: ["artbuild1.png", "artbuild2.png"],
      description: "Platform manajemen proyek konstruksi internal PGN MAS yang memfasilitasi pelacakan progres, alokasi sumber daya, dan pelaporan.",
      tags: ['Figma', 'Web App', 'Management'],
      keyFeatures: ["Visualisasi Progres Proyek (Gantt Chart)", "Manajemen Alokasi Tim & Material", "Sistem Pelaporan Terintegrasi", "Desain UI Berbasis Modul"],
      useCases: ["Pemantauan Proyek Konstruksi", "Kolaborasi Tim Lapangan & Office", "Manajemen Anggaran Proyek"],
      links: [{ text: "Figma Prototype", url: "#", icon: <Figma/> }]
    },
    {
      title: "Portal Internal PGN", category: "UI/UX Design", color: "orange", icon: <Palette/>, images: ["portal1.png"],
      description: "Redesain portal informasi internal karyawan PGN MAS untuk meningkatkan aksesibilitas pengumuman, dokumen SDM, dan layanan mandiri.",
      tags: ['Figma', 'Intranet', 'UX Research'],
      keyFeatures: ["Arsitektur Informasi Terpusat", "Sistem Pencarian Dokumen Pintar", "Layanan Karyawan Mandiri (ESS)", "Antarmuka Ramah Pengguna"],
      useCases: ["Pusat Informasi Karyawan", "Manajemen SDM Digital", "Komunikasi Internal Perusahaan"],
      links: [{ text: "View Design", url: "#", icon: <Figma/> }]
    },
    {
      title: "Lifegen App", category: "UI/UX Design", color: "pink", icon: <Smartphone/>, images: ["life.png"],
      description: "Aplikasi pelacak kesehatan dan kalori harian dengan antarmuka yang bersih untuk memotivasi gaya hidup sehat secara konsisten.",
      tags: ['Figma', 'Mobile UI', 'Health Tech'],
      keyFeatures: ["Pelacakan Kalori & Nutrisi Otomatis", "Rencana Diet yang Dipersonalisasi", "Dashboard Analisis Progres Harian", "Desain UI/UX Modern & Bersih"],
      useCases: ["Manajemen Kesehatan Pribadi", "Tracking Target Kebugaran", "Perencanaan Gizi Harian"],
      links: [{ text: "Figma Prototype", url: "#", icon: <Figma/> }]
    },
    {
      title: "LandConnect", category: "Marketplace", color: "purple", icon: <Briefcase/>, images: ["land.png"],
      description: "Platform jual beli lahan strategis berbasis web yang dilengkapi dengan fitur peta interaktif untuk memudahkan pencarian lokasi secara real-time.",
      tags: ['Figma', 'Web App', 'Map API'],
      keyFeatures: ["Pemetaan Lahan Interaktif", "Filter Lokasi Berdasarkan Area", "Direktori Harga & Status Lahan", "Sistem Booking Langsung"],
      useCases: ["Investasi Properti", "Pencarian Lahan Pertanian/Industri", "Riset Pasar Real Estate"],
      links: [{ text: "Figma Prototype", url: "#", icon: <Figma/> }]
    },
    {
      title: "Gula Cerdas", category: "IoT Solution", color: "green", icon: <Cpu/>, images: ["gula1.png", "gula2.png", "gula3.png", "gula.JPG"],
      description: "Sistem cerdas untuk standardisasi produksi gula aren menggunakan sensor Termokopel dan Motor DC untuk mengukur tingkat kekentalan dan titik jenuh secara akurat.",
      tags: ['IOT', 'ESP32', 'Sensors'],
      keyFeatures: ["Sensor Termokopel Presisi Tinggi", "Monitoring Viskositas Real-time", "Otomatisasi Putaran Motor DC", "Dashboard Pemantauan IoT"],
      useCases: ["Standardisasi Mutu UMKM Gula Aren", "Peningkatan Konsistensi Produksi", "Efisiensi Tenaga Kerja Pabrik"],
      links: [{ text: "Source Code", url: "#", icon: <Github/> }, { text: "Live Demo", url: "#", icon: <Youtube/> }]
    },
    {
      title: "Smart Water Metering", category: "Embedded", color: "blue", icon: <Cpu/>, images: ["swms.jpeg", "swm1.jpeg"],
      description: "Solusi monitoring penggunaan air berbasis mikrokontroler Arduino Uno untuk melacak konsumsi harian dan mencegah pemborosan air.",
      tags: ['Arduino', 'C++', 'Data Logic'],
      keyFeatures: ["Tracking Debit Air Real-time", "Sistem Peringatan Dini Kebocoran", "Modul Pembacaan Mikrokontroler Akurat", "Data Logging Otomatis"],
      useCases: ["Manajemen Air Rumah Tangga", "Monitoring Fasilitas Komersial/Gedung", "Kampanye Konservasi Air Cerdas"],
      links: [{ text: "Arduino Code", url: "#", icon: <Code/> }]
    },
    {
      title: "BridgeGuard", category: "IoT Solution", color: "yellow", icon: <Cpu/>, images: ["bg.jpeg"],
      description: "Perangkat pendeteksi getaran jembatan dini yang dirancang menggunakan mikrokontroler ESP32 dan sensor akselerometer presisi.",
      tags: ['ESP32', 'Safety', 'Hardware'],
      keyFeatures: ["Deteksi Getaran Anomali Dini", "Pembacaan Sensor Akselerometer ADXL", "Sistem Notifikasi Darurat Otomatis", "Dashboard Analitik Struktur Jembatan"],
      useCases: ["Pemeliharaan Infrastruktur Publik Terjadwal", "Keamanan Lalu Lintas Jembatan", "Sistem Peringatan Dini (Early Warning System)"],
      links: [{ text: "Source Code", url: "#", icon: <Github/> }]
    },
    {
      title: "AR BMKG Tools", category: "AR / VR", color: "orange", icon: <Box/>, images: ["bmkg2.png"],
      description: "Aplikasi edukasi Augmented Reality markerless untuk memvisualisasikan alat-alat meteorologi BMKG dalam bentuk 3D interaktif.",
      tags: ['AR', 'Unity 3D', 'Edu-Tech'],
      keyFeatures: ["Visualisasi 3D Interaktif Realistis", "Teknologi Markerless AR", "Basis Informasi Alat Meteorologi Rinci", "Antarmuka Ramah Pengguna (User-friendly)"],
      useCases: ["Edukasi Cuaca untuk Publik & Pelajar", "Modul Pelatihan Internal Staf BMKG", "Pameran Teknologi Meteorologi"],
      links: [{ text: "Download APK", url: "#", icon: <Smartphone/> }, { text: "Video Demo", url: "#", icon: <Youtube/> }]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      <style>{`
        ::-webkit-scrollbar { width: 12px; height: 12px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; border-left: 3px solid black; }
        ::-webkit-scrollbar-thumb { background: #22c55e; border: 3px solid black; }
        ::-webkit-scrollbar-thumb:hover { background: #16a34a; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>

      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 ${scrolled ? 'top-2' : 'top-6'}`}>
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl px-5 py-2.5 flex justify-between items-center">
          <div className="text-2xl font-black italic tracking-tighter cursor-pointer flex items-center gap-1 hover:-rotate-2 transition-transform" onClick={() => scrollTo('home')}>
            RIFQI<span className="bg-black text-white px-2 py-0.5 ml-1 not-italic transform -skew-x-12 inline-block">.MT</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`px-5 py-2 text-sm font-black uppercase border-2 transition-all duration-200 rounded ${activeSection === link.id ? 'bg-[#a3e635] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' : 'border-transparent hover:border-black hover:bg-gray-100'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
             <a href="mailto:rifqim.tmpg@gmail.com" className="hidden sm:flex bg-pink-400 border-2 border-black text-black font-black text-sm px-5 py-2 rounded items-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all uppercase">
                Let's Talk
             </a>
             <button className="md:hidden p-1.5 border-2 border-black rounded bg-gray-100 active:bg-black active:text-white transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full mt-3 left-0 w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl overflow-hidden animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => { scrollTo(link.id); setIsMenuOpen(false); }}
                className="w-full text-left px-6 py-4 text-base font-bold uppercase hover:bg-yellow-300 border-b-2 border-black last:border-b-0 flex justify-between items-center group"
              >
                {link.name}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20}/>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          
          <Reveal className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-white border-4 border-black px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full mb-6">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse border-2 border-black"></span> 
                <span className="text-xs font-black uppercase tracking-widest text-black">STATUS: AVAILABLE FOR WORK</span>
            </div>
            
            <h1 className="text-[3.5rem] sm:text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-black drop-shadow-sm mb-3">
                RIFQI M.
            </h1>
            <div className="inline-block bg-yellow-300 border-4 border-black px-4 py-1.5 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black">
                    TAMPENG
                </h2>
            </div>
            
            <div className="bg-white border-4 border-black p-4 sm:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl relative max-w-2xl mb-8 w-full">
                <div className="absolute -right-3 -top-3 bg-blue-400 border-2 border-black w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">&gt;_</div>
                <p className="text-sm sm:text-base font-bold leading-relaxed text-black">
                    Computer Engineering Student (GPA 3.50). Specializing in: <span className="underline decoration-pink-500 decoration-4">UI/UX Design</span>, <span className="underline decoration-blue-500 decoration-4">3D Modeling</span>, & <span className="underline decoration-green-500 decoration-4">Frontend Dev</span>.
                </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 w-full">
                <button onClick={() => scrollTo('projects')} className="group px-6 py-3 bg-black text-white text-sm font-black uppercase border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_#22d3ee] hover:shadow-[2px_2px_0px_0px_#22d3ee] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2">
                    VIEW PROJECTS <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button onClick={() => scrollTo('experience')} className="px-6 py-3 bg-white text-black text-sm font-black uppercase border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    EXPERIENCE
                </button>
                <a href="#" target="_blank" className="px-6 py-3 bg-pink-400 text-black text-sm font-black uppercase border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2">
                    <Download size={18} /> RESUME
                </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-8 w-full">
                <span className="font-black text-xs bg-black text-white px-3 py-1.5 rounded uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">CONNECT:</span>
                {[
                  { icon: <Github />, href: "https://github.com/rifqiimt" },
                  { icon: <Linkedin />, href: "https://www.linkedin.com/in/rifqiimt/" },
                  { icon: <Instagram />, href: "https://www.instagram.com/rifqiimt/" }
                ].map((social, idx) => (
                  <SocialLink key={idx} href={social.href} icon={social.icon} />
                ))}
            </div>
          </Reveal>

          <Reveal delay={200} className="w-full lg:w-5/12 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
                <div className="absolute top-0 right-0 w-full h-full bg-blue-400 border-4 border-black rounded-full mix-blend-normal z-0 translate-x-4 translate-y-4 shadow-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-10 hover:scale-105 transition-transform duration-500">
                    <img src="pp.jpeg" alt="Rifqi Mubarak" className="w-full h-full object-cover" onError={(e) => {e.target.src = "https://api.dicebear.com/9.x/avataaars/svg?seed=Rifqi"}} />
                </div>

                <div className="absolute -right-2 lg:-right-6 top-10 lg:top-16 bg-white border-4 border-black px-4 py-2 rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 flex items-center gap-2 transform rotate-6 hover:-translate-y-2 transition-transform">
                    <Figma size={20} className="text-black"/>
                    <span className="font-black text-xs uppercase leading-tight">UI/UX<br/>MASTER</span>
                </div>
                
                <div className="absolute -left-2 lg:-left-6 bottom-14 lg:bottom-20 bg-yellow-300 border-4 border-black px-4 py-2 rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 flex items-center gap-2 transform -rotate-3 hover:-translate-y-2 transition-transform">
                    <Box size={20} className="text-black"/>
                    <span className="font-black text-xs uppercase leading-tight">3D<br/>ARTIST</span>
                </div>
            </div>
          </Reveal>
        </div>
        
        <div className="absolute bottom-6 left-0 w-full bg-white border-y-4 border-black py-3.5 transform rotate-1 scale-105 z-20 overflow-hidden shadow-xl">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        <span className="text-black font-black uppercase text-sm mx-6 flex items-center gap-2 px-4 py-1.5 bg-yellow-200 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                           <Figma size={18}/> Figma
                        </span>
                        <span className="text-black font-black uppercase text-sm mx-6 flex items-center gap-2 px-4 py-1.5 bg-blue-200 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                           <Code size={18}/> React JS
                        </span>
                        <span className="text-black font-black uppercase text-sm mx-6 flex items-center gap-2 px-4 py-1.5 bg-green-200 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                           <Cpu size={18}/> Arduino
                        </span>
                        <span className="text-black font-black uppercase text-sm mx-6 flex items-center gap-2 px-4 py-1.5 bg-purple-200 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                           <Box size={18}/> Unity 3D
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ABOUT ME & TECH STACK DIGABUNG */}
      <section id="about" className="py-24 bg-purple-50 border-t-4 border-black relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,black,black_10px,transparent_10px,transparent_20px)] opacity-20"></div>
        
        <div className="container mx-auto px-6 max-w-7xl">
          <Reveal>
             <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black uppercase text-center bg-white border-4 border-black px-8 py-3 shadow-[6px_6px_0px_0px_#f472b6] transform -rotate-1">
                    About Me
                </h2>
             </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Bagian About Text */}
            <div className="lg:col-span-6">
               <Reveal delay={100} className="h-full">
                  <div className="bg-white border-4 border-black p-8 md:p-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative h-full flex flex-col justify-center">
                    <QuoteIcon className="absolute -top-5 -left-5 w-10 h-10 bg-yellow-400 border-4 border-black text-black p-2 rounded-full z-10" />
                    <div className="prose prose-base text-black font-medium leading-relaxed space-y-4 max-w-none">
                        <p>
                        I am a Computer Engineering undergraduate (<span className="bg-green-200 px-2 py-0.5 border-2 border-black font-bold rounded">GPA 3.50/4.00</span>) with a deep passion for crafting intuitive digital experiences. My recent internship at PGN MAS honed my ability to translate complex corporate workflows into user-friendly interfaces.
                        </p>
                        <p>
                        With a keen eye for design and a solid technical foundation, I focus on <span className="bg-[#1FAFEB]/30 px-2 py-0.5 border-2 border-black font-bold rounded">Frontend Development</span>. I efficiently bridge the gap between UI/UX prototypes and functional, responsive code to deliver seamless user experiences. I also have expertise in 3D modeling and Low-Code system development.
                        </p>
                        <p>
                        Beyond technical execution, I am a proven leader. I recently managed a team of <span className="bg-yellow-200 px-2 py-0.5 border-2 border-black font-bold rounded">120+ people</span> as the Project Lead for a national-level technology event (CMD 2025).
                        </p>
                    </div>
                  </div>
               </Reveal>
            </div>

            {/* Bagian Tech Stack */}
            <div className="lg:col-span-6 flex flex-col gap-6">
               <Reveal delay={200}>
                 <div className="grid grid-cols-2 gap-6">
                    <TechGroupCard 
                      title="UI/UX & Design" 
                      tools={[
                        { name: "Figma", icon: "figma.png" },
                        { name: "Blender", icon: "blender.png" },
                        { name: "Canva", icon: "canva.png" },
                        { name: "Meshroom", icon: "mesh.png" }
                      ]} 
                    />
                    <TechGroupCard 
                      title="Frontend & Logic" 
                      tools={[
                        { name: "React JS", icon: "react.png" },
                        { name: "Tailwind", icon: "tailwind.png" },
                        { name: "C++", icon: "cpp.png" },
                        { name: "JavaScript", icon: "js.png" }
                      ]} 
                    />
                 </div>
               </Reveal>
               <Reveal delay={300}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   {[
                     { val: "3.50", label: "GPA Score", color: "bg-pink-300" },
                     { val: "120+", label: "Team Led", color: "bg-blue-300" },
                     { val: "6+", label: "Projects", color: "bg-green-300" }
                   ].map((stat, i) => (
                     <div key={i} className={`p-6 border-4 border-black text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${stat.color} rounded-xl flex flex-col justify-center`}>
                         <h3 className="text-4xl lg:text-5xl font-black text-black">{stat.val}</h3>
                         <p className="text-xs font-bold uppercase border-t-4 border-black mt-2 pt-2">{stat.label}</p>
                     </div>
                   ))}
                 </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-[#fffdf5] overflow-hidden border-t-4 border-black relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <Reveal>
            <div className="mb-16 flex flex-col items-center text-center">
                <span className="font-black text-sm uppercase tracking-widest text-gray-500 mb-2 block border-b-2 border-gray-400 pb-1 w-fit mx-auto">Portfolio</span>
                <h2 className="text-4xl md:text-6xl font-black text-black leading-none uppercase tracking-tight">SELECTED <span className="bg-pink-300 px-3 py-1 border-4 border-black inline-block transform -rotate-2">WORKS</span></h2>
                <p className="text-gray-700 font-medium mt-6 max-w-2xl mx-auto text-base">
                  A curated selection showcasing my expertise in blending functional engineering with aesthetic UI/UX design.
                </p>
            </div>
          </Reveal>

          {/* Group 1: UI/UX Design */}
          <Reveal delay={100}>
            <div className="mb-20">
              <div className="mb-8 inline-block bg-pink-300 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                <h3 className="font-black text-xl uppercase tracking-wider flex items-center gap-2"><Palette size={20}/> UI/UX & Web Design</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard project={projectsData[0]} onProjectClick={handleProjectClick} />
                <ProjectCard project={projectsData[1]} onProjectClick={handleProjectClick} />
                <ProjectCard project={projectsData[2]} onProjectClick={handleProjectClick} />
                <ProjectCard project={projectsData[3]} onProjectClick={handleProjectClick} />
                <ProjectCard project={projectsData[4]} onProjectClick={handleProjectClick} />
              </div>
            </div>
          </Reveal>

          {/* Group 2: IoT & Embedded Systems */}
          <Reveal delay={200}>
            <div className="mb-20">
              <div className="mb-8 inline-block bg-green-300 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <h3 className="font-black text-xl uppercase tracking-wider flex items-center gap-2"><Cpu size={20}/> IoT & Embedded</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCard project={projectsData[5]} onProjectClick={handleProjectClick} />
                <ProjectCard project={projectsData[6]} onProjectClick={handleProjectClick} />
                <ProjectCard project={projectsData[7]} onProjectClick={handleProjectClick} />
              </div>
            </div>
          </Reveal>

          {/* Group 3: Augmented Reality */}
          <Reveal delay={300}>
            <div>
              <div className="mb-8 inline-block bg-orange-300 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                <h3 className="font-black text-xl uppercase tracking-wider flex items-center gap-2"><Box size={20}/> Augmented Reality</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCard project={projectsData[8]} onProjectClick={handleProjectClick} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-blue-50 border-y-4 border-black relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center">
          <Reveal className="w-full max-w-5xl">
            <div className="mb-16 text-center">
              <span className="font-black text-sm uppercase tracking-widest text-blue-600 mb-2 block border-b-4 border-blue-300 pb-1 w-fit mx-auto">Career Path</span>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight">My Experience</h2>
              <p className="text-gray-700 font-medium mt-6 max-w-2xl mx-auto text-base">
                A timeline of my professional journey, highlighting key roles and contributions in the tech industry and campus organizations.
              </p>
            </div>
          </Reveal>

          <div className="space-y-10 pl-2 md:pl-0 w-full max-w-5xl">
            <Reveal delay={100}>
              <TimelineCard 
                role="UI/UX & Frontend Intern" 
                org="PGN MAS (PT Permata Graha Nusantara)" 
                date="2025 - 2026" 
                colorClass="bg-[#1FAFEB]/20"
                desc="Immersed in a corporate tech environment, I balanced technical development with creative design tasks to modernize internal tools."
                responsibilities={[
                  "Designed intuitive user interfaces (UI/UX) for internal corporate platforms using Figma.",
                  "Translated design mockups into responsive, functional front-end code.",
                  "Collaborated with developers to ensure seamless integration and optimized user flows."
                ]}
                images={["pgnmas1.jpg"]}
                onOpenGallery={openGallery}
              />
            </Reveal>

            <Reveal delay={200}>
              <TimelineCard 
                role="AR & Research Intern" 
                org="BMKG Aceh Stasiun Meteorologi" 
                date="2024 - 2025" 
                colorClass="bg-green-100"
                desc="Led the digital transformation of educational tools at the meteorology station by developing interactive media."
                responsibilities={[
                  "Developed a Markerless Augmented Reality (AR) application to visualize meteorological tools in 3D.",
                  "Conducted research and usability testing to ensure the app met public educational standards.",
                  "Presented the digital solution to senior meteorologists for implementation."
                ]}
                images={["bmkg1.jpg", "bmkg2.png"]}
                onOpenGallery={openGallery}
              />
            </Reveal>

            <Reveal delay={300}>
              <TimelineCard 
                role="Project Lead" 
                org="CMD 2025 National Event" 
                date="2025" 
                desc="Spearheaded the planning and execution of a massive national-level technology and engineering festival."
                responsibilities={[
                  "Managed a cross-functional committee of 120+ members across various divisions.",
                  "Coordinated national competitions including Hackathon, UI/UX Design, and Research Papers.",
                  "Oversaw event budgeting, scheduling, and strategic partnerships."
                ]}
                highlight={true}
                images={["cmd.png", "cmd1.jpeg", "cmd2.jpeg", "cmd3.jpeg", "cmd4.jpeg", "cmd5.jpeg"]}
                onOpenGallery={openGallery}
              />
            </Reveal>

            <Reveal delay={400}>
              <TimelineCard 
                role="Vice Chairman" 
                org="PBMT XI-KKN" 
                date="2024" 
                desc="Managed technical social service and infrastructure projects for rural community development."
                responsibilities={[
                  "Supervised the engineering and deployment of a ready-to-drink refill water filtration system.",
                  "Managed logistics and technical execution on the field.",
                  "Acted as a liaison between the university engineering team and village officials."
                ]}
                images={["pbmt.png"]}
                onOpenGallery={openGallery}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="py-24 bg-yellow-50 relative overflow-hidden border-t-4 border-black">
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>

         <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <Reveal>
              <div className="mb-16 flex flex-col items-center text-center">
                  <span className="font-black text-sm uppercase tracking-widest text-gray-500 mb-2 block border-b-4 border-gray-400 pb-1 w-fit mx-auto">Recognition</span>
                  <h2 className="text-4xl md:text-6xl font-black text-black leading-none uppercase tracking-tight">Awards & <span className="bg-yellow-300 px-3 border-4 border-black inline-block transform rotate-1">Certs</span></h2>
              </div>
            </Reveal>
            
            <div 
                ref={certScrollRef}
                className="w-full overflow-x-auto pb-12 pt-4 px-4 -mx-4 responsive-scrollbar"
            >
              <div className="flex gap-8 w-max">
                  <div className="w-[320px] md:w-[380px] flex-shrink-0">
                     <CertCard title="Bangkit Academy 2024" subtitle="Google, GoTo, Traveloka" desc="Independent Study in Machine Learning. AI Capstone Project." color="green" icon={<BookOpen className="text-black" />} images={["bangkit.jpg", "bangkit1.jpg", "bangkit2.jpg"]} onOpenGallery={openGallery} />
                  </div>
                  <div className="w-[320px] md:w-[380px] flex-shrink-0">
                     <CertCard title="IoT Device Engineering" subtitle="BNSP / LSP TDI" desc="Competency certification in IoT and Networking." color="yellow" icon={<Cpu className="text-black" />} images={["iot.jpg", "iot1.jpg"]} onOpenGallery={openGallery} />
                  </div>
                  <div className="w-[320px] md:w-[380px] flex-shrink-0">
                     <CertCard title="Skill Academy CAMP" subtitle="Ruangguru" desc="Intensive UI/UX Design & Prototyping Bootcamp." color="orange" icon={<Award className="text-black" />} images={["camp.jpg", "camp1.jpg"]} onOpenGallery={openGallery} />
                  </div>
                  <div className="w-[320px] md:w-[380px] flex-shrink-0">
                     <CertCard title="Webinar AI Weather" subtitle="KORIKA" desc="Utilization of AI for weather forecasting." color="blue" icon={<ExternalLink className="text-black" />} images={["korika.jpg"]} onOpenGallery={openGallery} />
                  </div>
                  <div className="w-[320px] md:w-[380px] flex-shrink-0">
                     <CertCard title="Science Olympiad (OSN)" subtitle="Kemdikbud" desc="City Level Champion in Informatics." color="yellow" icon={<Award className="text-black" />} images={["osn.jpg"]} onOpenGallery={openGallery} />
                  </div>
              </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black text-white border-t-8 border-yellow-400">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase tracking-tighter">Let's work <br/> together.</h2>
            <div className="flex justify-center mb-16">
               <a href="mailto:rifqim.tmpg@gmail.com" className="px-10 py-5 bg-[#a3e635] text-black text-xl font-black uppercase border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all">
                  Start a Project
               </a>
            </div>
            <div className="flex justify-center gap-6 mb-16 flex-wrap">
                {[
                    { icon: <Github size={30}/>, href: "https://github.com/rifqiimt" },
                    { icon: <Instagram size={30}/>, href: "https://www.instagram.com/rifqiimt/" },
                    { icon: <Linkedin size={30}/>, href: "https://www.linkedin.com/in/rifqiimt/" },
                    { icon: <Phone size={30}/>, href: "https://wa.me/85214006701" }
                ].map((social, idx) => (
                    <a key={idx} href={social.href} className="w-16 h-16 bg-white text-black border-4 border-white flex items-center justify-center rounded-full hover:bg-black hover:text-white hover:border-white transition-colors">
                        {social.icon}
                    </a>
                ))}
            </div>
            <div className="w-32 h-2 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-gray-400 text-sm font-mono">© 2025 Rifqi Mubarak Tampeng. All rights reserved.</p>
          </Reveal>
        </div>
      </footer>

      {/* Modals */}
      <ImageGalleryModal isOpen={isGalleryOpen} images={currentGalleryImages} initialIndex={currentImageIndex} onClose={closeGallery} />
      <ProjectDetailsModal project={selectedProject} onClose={closeProjectModal} />

    </div>
  );
};

export default App;