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
  Tag
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

const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const bgColors = {
    pink: 'bg-[#ffb3c6]',
    purple: 'bg-[#c8b6ff]',
    blue: 'bg-[#a2d2ff]',
    green: 'bg-[#b7e4c7]', 
    orange: 'bg-[#ffd6a5]',
    yellow: 'bg-[#fdffb6]',
    default: 'bg-gray-200'
  };
  const accentBg = bgColors[project.color] || bgColors.default;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        
        <div className="flex justify-between items-center border-b-4 border-black bg-gray-100 p-3 shrink-0">
            <span className="font-mono font-bold text-xs">PROJECT_DETAILS.EXE</span>
            <button onClick={onClose} className="hover:bg-red-400 border-2 border-transparent hover:border-black rounded text-black transition-colors p-1">
              <X size={16} />
            </button>
        </div>

        <div className="overflow-y-auto hide-scrollbar relative flex flex-col flex-grow">
          <div className={`w-full relative py-8 border-b-4 border-black flex justify-center items-center ${accentBg}`}>
            <div className="relative z-10 w-full flex gap-4 overflow-x-auto snap-x hide-scrollbar px-6 items-center min-h-[200px]">
              {project.images && project.images.length > 0 ? (
                project.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${project.title} ${idx}`} className="h-48 sm:h-56 w-auto object-contain rounded border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] snap-center shrink-0" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"; }} />
                ))
              ) : (
                <div className="h-40 w-full flex items-center justify-center text-black/50 font-mono border-2 border-dashed border-black rounded-lg">NO_IMAGE_DATA</div>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8 relative z-20 bg-white flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full text-[10px] font-black uppercase tracking-wider w-fit">
                   <Tag size={12} /> {project.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">{project.title}</h2>
              </div>
              
              <span className="inline-flex items-center gap-1 text-black font-mono font-bold text-xs border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-gray-100 px-3 py-1.5 rounded sm:self-start">
                <Calendar size={14}/> 2025
              </span>
            </div>

            <div className="mb-6">
              <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-widest border-l-4 border-black pl-2 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black text-[11px] font-bold rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-widest border-l-4 border-black pl-2 mb-3">About Project</h4>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                {project.description}
              </p>
            </div>
            
            {project.links && project.links.length > 0 && (
              <div className="pt-4 flex flex-wrap gap-3 border-t-2 border-dashed border-gray-300">
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-black text-xs font-black uppercase rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    {React.cloneElement(link.icon, { size: 14 })} {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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
      
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 bg-black text-white p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all z-50 rounded-lg"
      >
        <X size={20} />
      </button>

      <div className="relative w-full max-w-4xl h-full max-h-[85vh] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-2 rounded-xl max-h-full max-w-full flex flex-col">
            <div className="flex justify-between items-center mb-2 px-2 border-b-2 border-black pb-2 bg-gray-100 rounded-t-lg">
                <span className="font-mono font-bold text-xs">GALLERY_VIEWER.EXE</span>
                <span className="font-mono text-[10px]">{activeIndex + 1} / {images.length}</span>
            </div>

            <div className="relative overflow-hidden bg-gray-100 border-2 border-black rounded-lg flex-grow flex items-center justify-center">
                {images.length > 1 && (
                <>
                    <button 
                    onClick={prevImage} 
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-gray-50 transition-colors"
                    >
                    <ChevronLeft size={20} />
                    </button>
                    <button 
                    onClick={nextImage} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rounded-full hover:bg-gray-50 transition-colors"
                    >
                    <ChevronRight size={20} />
                    </button>
                </>
                )}

                <img 
                src={images[activeIndex]} 
                alt={`Gallery ${activeIndex}`} 
                className="max-h-[60vh] w-auto object-contain mx-auto"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"; }}
                />
            </div>

            <div className="flex gap-2 overflow-x-auto max-w-full p-3 hide-scrollbar justify-center">
            {images.map((_, idx) => (
                <button
                key={idx} 
                onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                className={`w-2.5 h-2.5 border-2 border-black transition-all duration-300 ${idx === activeIndex ? 'bg-black scale-125' : 'bg-white hover:bg-gray-200'}`}
                />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, category, description, tags, icon, color, images, onProjectClick, links }) => {
  const accentColor = color.includes('pink') ? 'bg-pink-400' : 
                      color.includes('purple') ? 'bg-purple-400' :
                      color.includes('blue') ? 'bg-blue-400' :
                      color.includes('green') ? 'bg-green-400' :
                      color.includes('orange') ? 'bg-orange-400' : 'bg-yellow-400';

  return (
    <div className="group relative h-full w-full">
      <div className={`absolute top-2 left-2 w-full h-full bg-black rounded-lg transition-all duration-300 group-hover:top-3 group-hover:left-3`}></div>
      
      <div className="relative bg-white border-2 border-black rounded-lg overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
        <div className="border-b-2 border-black px-3 py-1.5 flex justify-between items-center bg-gray-50">
            <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-black bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full border-2 border-black bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full border-2 border-black bg-green-400"></div>
            </div>
            <div className={`px-2 py-0.5 border-2 border-black text-[9px] font-bold uppercase tracking-wider ${accentColor} rounded`}>
                {category}
            </div>
        </div>

        <div className="relative overflow-hidden border-b-2 border-black bg-gray-100 group/img">
            {images && images.length > 0 ? (
                <div 
                    className={`h-40 sm:h-48 w-full cursor-pointer relative`}
                    onClick={() => onProjectClick({ title, category, description, tags, icon, color, images, links })}
                >
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors z-10 flex items-center justify-center backdrop-blur-[1px]">
                        <div className="bg-yellow-400 border-2 border-black px-3 py-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover/img:opacity-100 transition-all duration-200 transform scale-75 group-hover/img:scale-100 rotate-2 flex items-center gap-1.5">
                            <span className="font-black text-xs uppercase">View Details</span>
                            <ArrowUpRight size={14}/>
                        </div>
                    </div>
                    <img 
                        src={images[0]} 
                        alt={title} 
                        className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-500" 
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80"; }}
                    />
                </div>
            ) : (
                <div className={`h-40 sm:h-48 flex items-center justify-center border-dashed border-2 border-gray-300 m-3 rounded`} onClick={() => onProjectClick({ title, category, description, tags, icon, color, images, links })}>
                    <span className="font-mono text-gray-400 text-xs cursor-pointer">NO_IMAGE</span>
                </div>
            )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
            <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-black text-black leading-tight uppercase cursor-pointer hover:underline decoration-2 decoration-yellow-400" onClick={() => onProjectClick({ title, category, description, tags, icon, color, images, links })}>{title}</h3>
                <div className="bg-black text-white p-1 rounded border-2 border-transparent group-hover:border-black group-hover:bg-white group-hover:text-black transition-colors shrink-0 ml-2">
                    {icon}
                </div>
            </div>
            
            <p className="text-gray-600 text-xs mb-4 font-medium leading-relaxed border-l-4 border-gray-200 pl-2 flex-grow line-clamp-3">
                {description}
            </p>

            <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-[9px] font-bold px-1.5 py-0.5 bg-gray-100 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const TechStackCard = ({ icon, name, desc }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-black rounded-lg translate-x-1 translate-y-1"></div>
    <div className="relative bg-white p-2.5 rounded-lg border-2 border-black flex items-center gap-3 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200 cursor-default">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-100 border-2 border-black rounded p-1 shrink-0">
            <img 
                src={icon} 
                alt={name} 
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" 
                onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;
                }}
            /> 
        </div>
        <div>
            <h4 className="font-black text-xs uppercase leading-tight">{name}</h4>
            <span className="text-[9px] bg-yellow-300 px-1 border border-black font-bold">{desc}</span>
        </div>
    </div>
  </div>
);

const TimelineCard = ({ role, org, date, desc, highlight, evidenceLabel, images, onOpenGallery }) => (
  <div className="flex gap-4 group">
    <div className="flex flex-col items-center">
        <div className={`w-5 h-5 rounded-none border-2 border-black ${highlight ? 'bg-purple-500' : 'bg-white group-hover:bg-gray-200'} flex items-center justify-center z-10 transition-colors`}>
            {highlight && <div className="w-1.5 h-1.5 bg-white"></div>}
        </div>
        <div className="w-0.5 bg-black h-full border-l-2 border-dashed border-black min-h-[60px]"></div>
    </div>

    <div className="pb-6 flex-grow">
        <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg transition-transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <div>
                    <h4 className="text-base font-black uppercase leading-none">{role}</h4>
                    <div className="flex items-center gap-1.5 mt-1">
                        <Building2 size={12} className="text-black" />
                        <span className="font-bold text-xs bg-gray-100 px-1 border border-black">{org}</span>
                    </div>
                </div>
                <span className="text-[10px] font-mono font-bold bg-black text-white px-2 py-1 rounded self-start sm:self-auto transform -rotate-2">
                    {date}
                </span>
            </div>
            
            <p className="text-xs font-medium text-gray-700 mt-2 mb-3">{desc}</p>
            
            {evidenceLabel && images && images.length > 0 && (
                <div 
                    onClick={() => onOpenGallery(images, 0)}
                    className="inline-flex items-center gap-1.5 bg-yellow-300 border-2 border-black px-2.5 py-1 rounded cursor-pointer hover:bg-yellow-400 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-none"
                >
                    <ImageIcon size={12}/>
                    <span className="text-[10px] font-bold uppercase underline decoration-2">View Proof</span>
                    <span className="bg-white border border-black text-[9px] px-1 rounded-full">{images.length}</span>
                </div>
            )}
        </div>
    </div>
  </div>
);

const OrgCard = ({ role, period, desc, images, onOpenGallery }) => (
  <div className="bg-white border-2 border-black p-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 flex flex-col h-full rounded-lg overflow-hidden">
    <div className="bg-blue-300 border-b-2 border-black p-2 flex justify-between items-center">
        <span className="font-mono text-[10px] font-bold">[ORG_DATA]</span>
        <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full border border-black bg-white"></div>
            <div className="w-1.5 h-1.5 rounded-full border border-black bg-white"></div>
        </div>
    </div>
    
    <div className="p-4 flex-grow">
        <h5 className="font-black text-base mb-1 leading-tight">{role}</h5>
        <span className="inline-block bg-black text-white text-[9px] font-mono px-1 mb-3">{period}</span>
        <p className="text-xs font-medium text-gray-700 leading-snug">{desc}</p>
    </div>
    
    {images && images.length > 0 && (
        <button 
            onClick={() => onOpenGallery(images, 0)}
            className="w-full py-1.5 bg-gray-100 hover:bg-yellow-300 border-t-2 border-black text-[10px] font-bold uppercase transition-colors flex items-center justify-center gap-1.5"
        >
            <Camera size={12}/> Documentation
        </button>
    )}
  </div>
);

const CertCard = ({ title, subtitle, desc, color, icon, images, onOpenGallery }) => {
    const bgClass = color === 'green' ? 'bg-green-200' : 
                    color === 'orange' ? 'bg-orange-200' : 
                    color === 'blue' ? 'bg-blue-200' : 'bg-yellow-200';

    return (
        <div className="group relative min-w-[280px] h-full">
            <div className={`absolute inset-0 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl`}></div>
            
            <div className={`relative h-full flex flex-col p-4 border-2 border-black bg-white rounded-xl transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-none`}>
                <div className="absolute top-0 right-6 w-0.5 h-full border-r-2 border-dashed border-gray-300 z-0"></div>
                
                <div className="relative z-10">
                    <div className="flex items-start gap-2.5 mb-3">
                        <div className={`p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${bgClass} rounded-lg shrink-0`}>
                            {React.cloneElement(icon, { size: 16, strokeWidth: 2.5 })}
                        </div>
                        <div className="pr-4">
                            <h4 className="font-black text-sm leading-tight uppercase">{title}</h4>
                            <span className="text-[10px] font-bold bg-gray-100 px-1 mt-1 inline-block border border-black">{subtitle}</span>
                        </div>
                    </div>
                    
                    <p className="text-xs font-medium text-gray-600 mb-3 line-clamp-3 pr-4">{desc}</p>
                </div>

                <div className="mt-auto relative z-10 pr-4">
                    <div 
                        className="w-full h-24 border-2 border-black bg-gray-100 rounded-lg overflow-hidden relative cursor-pointer group/img"
                        onClick={() => images && images.length > 0 && onOpenGallery(images, 0)}
                    >
                        {images && images.length > 0 ? (
                            <>
                                <div className="absolute inset-0 bg-yellow-400/80 border-2 border-black translate-y-full group-hover/img:translate-y-0 transition-transform duration-300 z-10 flex items-center justify-center">
                                    <span className="font-black text-black text-xs uppercase tracking-wider">View Cert</span>
                                </div>
                                <img 
                                    src={images[0]} 
                                    alt={title} 
                                    className="w-full h-full object-cover filter grayscale group-hover/img:grayscale-0 transition-all"
                                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&q=80"; }}
                                />
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400 bg-gray-50 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px]">
                               <Award size={20}/>
                               <span className="text-[9px] font-mono mt-1">NO_PREVIEW</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg group shrink-0"
  >
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

  // LOGIKA SCROLL SPY UNTUK HIGHLIGHT NAVBAR AKTIF
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = ['home', 'about', 'projects', 'experience', 'certs'];
      const scrollPosition = window.scrollY + 200; // Offset untuk mengantisipasi tinggi navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; // Berhenti mencari jika sudah menemukan section yang aktif
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
    { name: 'Certifications', id: 'certs' },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* GLOBAL STYLES */}
      <style>{`
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
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

      {/* Background decoration: Dot Pattern */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
      </div>

      {/* Navbar - Retro Floating Box */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 ${scrolled ? 'top-2' : 'top-6'}`}>
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-black italic tracking-tighter cursor-pointer flex items-center gap-1 hover:-rotate-2 transition-transform" onClick={() => scrollTo('home')}>
            RIFQI<span className="bg-black text-white px-1 ml-1 not-italic transform -skew-x-12 inline-block">.MT</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-1.5 text-sm font-bold uppercase border-2 transition-all duration-200 rounded ${activeSection === link.id ? 'bg-yellow-300 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'border-transparent hover:border-black hover:bg-gray-100'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
             <a href="mailto:rifqim.tmpg@gmail.com" className="hidden sm:flex bg-pink-400 border-2 border-black text-black font-bold text-sm px-3 py-1.5 rounded items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <Mail size={16}/> Hire Me!
             </a>
             <button className="md:hidden p-2 border-2 border-black rounded bg-gray-100 active:bg-black active:text-white transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => { scrollTo(link.id); setIsMenuOpen(false); }}
                className="w-full text-left px-6 py-4 text-sm font-bold uppercase hover:bg-yellow-300 border-b-2 border-black last:border-b-0 flex justify-between items-center group"
              >
                {link.name}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20}/>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section - UKURAN BESAR (REVERTED) */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-purple-400 rounded-full border-2 border-black mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute bottom-1/4 -right-10 w-60 h-60 bg-yellow-300 rounded-full border-2 border-black mix-blend-multiply filter blur-xl opacity-50"></div>
        
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
          <Reveal className="lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="inline-block bg-white border-2 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse border border-black"></span> 
                Status: Available for work
              </span> 
            </div>
            
            <div className="relative">
                <h1 className="text-5xl lg:text-8xl font-black leading-none tracking-tighter mb-2 text-transparent bg-clip-text bg-black" style={{WebkitTextStroke: '2px black'}}>
                  RIFQI M.
                </h1>
                <h1 className="text-5xl lg:text-8xl font-black leading-none tracking-tighter text-black absolute top-1 left-1 -z-10 opacity-0 lg:opacity-100 text-stroke">
                    RIFQI M.
                </h1>
                <p className="text-2xl lg:text-4xl font-bold bg-yellow-300 inline-block px-2 border-2 border-black transform rotate-1">
                    TAMPENG
                </p>
            </div>
            
            <div className="bg-white border-2 border-black p-4 lg:mr-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl relative">
                <div className="absolute -top-3 -right-3 bg-blue-400 border-2 border-black p-1.5 rounded-full z-10">
                    <Terminal size={20} className="text-white"/>
                </div>
                <p className="text-lg font-medium leading-relaxed">
                Computer Engineering Student (GPA 3.50). Specializing in: <span className="font-bold underline decoration-pink-500 decoration-4">UI/UX Design</span>, <span className="font-bold underline decoration-blue-500 decoration-4">3D Modeling</span>, & <span className="font-bold underline decoration-[#1FAFEB] decoration-4">Frontend Dev</span>.
                </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button onClick={() => scrollTo('projects')} className="group px-8 py-4 bg-black text-white text-lg font-bold uppercase border-2 border-black rounded shadow-[6px_6px_0px_0px_#22d3ee] hover:shadow-[2px_2px_0px_0px_#22d3ee] hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2">
                View Projects <MousePointer2 size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
              <button onClick={() => scrollTo('experience')} className="px-8 py-4 bg-white text-black text-lg font-bold uppercase border-2 border-black rounded shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                Experience
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-6">
               <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1 transform -rotate-3">CONNECT:</span>
               {[
                 { icon: <Github size={20}/>, href: "https://github.com/rifqiimt" },
                 { icon: <Instagram size={20}/>, href: "https://www.instagram.com/rifqiimt/" },
                 { icon: <Linkedin size={20}/>, href: "https://www.linkedin.com/in/rifqiimt/" },
                 { icon: <Mail size={20}/>, href: "mailto:tampengrifqmubarak@gmail.com" },
                 { icon: <Phone size={20}/>, href: "https://wa.me/85214006701" }
               ].map((social, idx) => (
                 <SocialLink key={idx} href={social.href} icon={social.icon} />
               ))}
            </div>
          </Reveal>

          <Reveal delay={200} className="lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
            <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem]">
              <div className="absolute top-0 right-0 w-full h-full bg-blue-400 border-2 border-black rounded-full mix-blend-normal z-0 translate-x-4 translate-y-4"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-10 hover:scale-105 transition-transform duration-500">
                 <img 
                  src="pp.jpeg" 
                  alt="Rifqi Mubarak" 
                  className="w-full h-full object-cover"
                  onError={(e) => {e.target.src = "https://api.dicebear.com/9.x/avataaars/svg?seed=Rifqi"}} 
                />
              </div>

              <div className="absolute -right-4 top-10 bg-white border-2 border-black p-3 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 flex items-center gap-2 transform rotate-3 animate-bounce" style={{animationDuration: '3s'}}>
                 <Figma size={24} className="text-black"/>
                 <span className="font-black text-xs uppercase">UI/UX<br/>MASTER</span>
              </div>
              
              <div className="absolute -left-2 bottom-12 bg-yellow-300 border-2 border-black p-3 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 flex items-center gap-2 transform -rotate-2 animate-bounce" style={{animationDuration: '4s'}}>
                 <Box size={24} className="text-black"/>
                 <span className="font-black text-xs uppercase">3D<br/>ARTIST</span>
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Infinite Marquee Banner */}
        <div className="absolute bottom-8 left-0 w-full bg-black border-y-2 border-black py-2 transform -rotate-1 scale-105 z-20 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-white font-mono font-bold text-lg mx-4 flex items-center gap-4">
                        DESIGN <Zap size={16} className="text-yellow-400"/> CODE <Zap size={16} className="text-yellow-400"/> CREATE <Zap size={16} className="text-yellow-400"/>
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="py-20 bg-purple-50 border-t-4 border-black relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,black,black_10px,transparent_10px,transparent_20px)] opacity-20"></div>
        
        <div className="container mx-auto px-6">
          <Reveal>
             <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black uppercase text-center bg-white border-2 border-black px-5 py-1.5 shadow-[4px_4px_0px_0px_#f472b6] transform -rotate-1">
                    About Me
                </h2>
             </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Text Content */}
            <div className="lg:col-span-7">
               <Reveal delay={100}>
                  <div className="bg-white border-2 border-black p-5 md:p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
                    <QuoteIcon className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 border-2 border-black text-black p-1.5 rounded-full z-10" />
                    <div className="text-black font-medium leading-relaxed space-y-3 text-sm">
                        <p>
                        I am a Computer Engineering undergraduate (<span className="bg-green-200 px-1 border border-black font-bold">GPA 3.50/4.00</span>) with a deep passion for crafting intuitive digital experiences. My recent internship at PGN MAS honed my ability to translate complex corporate workflows into user-friendly interfaces.
                        </p>
                        <p>
                        With a keen eye for design and a solid technical foundation, I focus on <span className="bg-[#1FAFEB]/30 px-1 border border-black font-bold">Frontend Development</span>. I efficiently bridge the gap between UI/UX prototypes and functional, responsive code to deliver seamless user experiences. I also have expertise in 3D modeling and Low-Code system development.
                        </p>
                        <p>
                        Beyond technical execution, I am a proven leader. I recently managed a team of <span className="bg-yellow-200 px-1 border border-black font-bold">120+ people</span> as the Project Lead for a national-level technology event (CMD 2025).
                        </p>
                    </div>
                  </div>
               </Reveal>
               
               <Reveal delay={200} className="mt-6">
                 <div className="grid grid-cols-3 gap-3">
                   {[
                     { val: "3.50", label: "GPA Score", color: "bg-pink-300" },
                     { val: "120+", label: "Team Led", color: "bg-blue-300" },
                     { val: "6+", label: "Projects Done", color: "bg-green-300" }
                   ].map((stat, i) => (
                     <div key={i} className={`p-3 border-2 border-black text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all ${stat.color} rounded-lg`}>
                         <h3 className="text-2xl font-black text-black">{stat.val}</h3>
                         <p className="text-[10px] font-bold uppercase border-t-2 border-black mt-1 pt-1">{stat.label}</p>
                     </div>
                   ))}
                 </div>
               </Reveal>
            </div>

            {/* Tech Stack Grid - Sticker Layout */}
            <div className="lg:col-span-5">
               <Reveal delay={300}>
                 <div className="bg-gray-100 border-2 border-black p-5 rounded-xl relative mt-6 lg:mt-0">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs font-bold uppercase rounded border-2 border-white transform skew-x-12">
                         My Arsenal
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
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

      {/* Projects - NEO-BRUTALIST GRID CATEGORY LAYOUT */}
      <section id="projects" className="py-20 bg-[#fffdf5] overflow-hidden border-y-4 border-black relative">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-3">
               <div>
                 <div className="flex items-center gap-2 mb-1.5">
                    <div className="h-1 w-8 bg-black"></div>
                    <span className="font-mono font-bold uppercase text-xs">Portfolio</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black text-black leading-none">SELECTED <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500" style={{WebkitTextStroke: '1px black'}}>WORKS</span></h2>
               </div>
            </div>
          </Reveal>

          {/* Group 1: UI/UX Design */}
          <Reveal delay={100}>
            <div className="mb-12">
              <div className="mb-6 inline-block bg-pink-300 border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                <h3 className="font-black text-base uppercase tracking-wider flex items-center gap-2"><Palette size={16}/> UI/UX & Web Design</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard 
                  title="Lifegen App"
                  category="UI/UX Design"
                  description="Daily health and calorie tracking application with a clean interface to motivate a healthy lifestyle."
                  tags={['Figma', 'Mobile', 'Health']}
                  icon={<Smartphone className="text-white" size={16} />}
                  color="pink"
                  images={["life.png"]} 
                  onProjectClick={handleProjectClick}
                  links={[
                    { text: "Figma Prototype", url: "https://www.figma.com/proto/MIYprCXiJ8d9SDMZA5kMYT/Lifegen?node-id=48-3636&p=f&t=vXSOTZWg6oxs5i8D-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=48%3A3636&show-proto-sidebar=1", icon: <Figma size={12}/> },
                  ]}
                />

                <ProjectCard 
                  title="LandConnect"
                  category="Marketplace"
                  description="Strategic land trading platform with interactive map features to facilitate location search."
                  tags={['Figma', 'Web', 'Map']}
                  icon={<Briefcase className="text-white" size={16} />}
                  color="purple"
                  images={["land.png"]}
                  onProjectClick={handleProjectClick}
                  links={[
                    { text: "Figma Prototype", url: "https://www.figma.com/proto/OGf7IzSdu9WjrTlVOI0xP9/LandConnect?node-id=747-3006&t=dyPSPDRSZXDFVWfj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=747%3A3006", icon: <Figma size={12}/> },
                  ]}
                />
              </div>
            </div>
          </Reveal>

          {/* Group 2: IoT & Embedded Systems */}
          <Reveal delay={200}>
            <div className="mb-12">
              <div className="mb-6 inline-block bg-green-300 border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <h3 className="font-black text-base uppercase tracking-wider flex items-center gap-2"><Cpu size={16}/> IoT & Embedded</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard 
                  title="Gula Cerdas"
                  category="IoT Solution"
                  description="Palm sugar production standardization using Thermocouple sensors and DC Motors to measure viscosity."
                  tags={['IOT', 'ESP32', 'UMKM']}
                  icon={<Cpu className="text-white" size={16} />}
                  color="green"
                  images={["gula1.png", "gula2.png", "gula3.png", "gula.JPG"]} 
                  onProjectClick={handleProjectClick}
                  links={[
                    { text: "Github", url: "https://github.com/rifqiimt/Gula-Cerdas.git", icon: <Github size={12}/> },
                    { text: "Demo", url: "https://youtu.be/ixs_9arpgVE?si=v6d2Frtj0yElD_Yu", icon: <Youtube size={12}/>, className: "bg-red-100 hover:bg-red-200" }
                  ]}
                />

                <ProjectCard 
                  title="Smart Water Metering"
                  category="Embedded"
                  description="Water usage monitoring system based on Arduino Uno to prevent household water waste."
                  tags={['Arduino', 'C++', 'IoT']}
                  icon={<Cpu className="text-white" size={16} />}
                  color="blue"
                  images={["swms.jpeg", "swm1.jpeg", "swm2.jpeg", "swm3.jpeg"]} 
                  onProjectClick={handleProjectClick}
                  links={[
                    { text: "Arduino Code", url: "#", icon: <Code size={12}/> },
                    { text: "Demo", url: "#", icon: <Youtube size={12}/>, className: "bg-red-100 hover:bg-red-200" }
                  ]}
                />

                <ProjectCard 
                  title="BridgeGuard"
                  category="IoT Solution"
                  description="Early bridge vibration detection device using ESP32 and ADXL accelerometer sensors."
                  tags={['ESP32', 'Safety', 'HW']}
                  icon={<ExternalLink className="text-white" size={16} />}
                  color="green"
                  images={["bg.jpeg"]}
                  onProjectClick={handleProjectClick}
                  links={[
                    { text: "Github", url: "https://github.com/rifqiimt/BridgeGuard.git", icon: <Github size={12}/> },
                    { text: "Demo", url: "https://www.youtube.com/@muhammadabiyyu3010/shorts", icon: <Youtube size={12}/>, className: "bg-red-100 hover:bg-red-200" }
                  ]}
                />
              </div>
            </div>
          </Reveal>

          {/* Group 3: Augmented Reality */}
          <Reveal delay={300}>
            <div>
              <div className="mb-6 inline-block bg-orange-300 border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                <h3 className="font-black text-base uppercase tracking-wider flex items-center gap-2"><Box size={16}/> Augmented Reality</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard 
                  title="AR BMKG Tools"
                  category="AR / VR"
                  description="Markerless AR educational app for 3D interactive visualization of BMKG meteorological tools."
                  tags={['AR', 'Unity', 'Edu']}
                  icon={<Box className="text-white" size={16} />}
                  color="orange"
                  images={["bmkg2.png"]}
                  onProjectClick={handleProjectClick}
                  links={[
                    { text: "Download APK", url: "#", icon: <Smartphone size={12}/>, className: "bg-green-100 hover:bg-green-200" },
                    { text: "Demo", url: "https://drive.google.com/file/d/1V6obcvnr7jf35-M14eItzmC8sS8rudcz/view?usp=drive_link", icon: <Youtube size={12}/>, className: "bg-red-100 hover:bg-red-200" }
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-blue-50 border-b-4 border-black">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="mb-12 flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-2 uppercase border-b-4 border-black pb-2">Experience</h2>
            </div>
          </Reveal>

          {/* INTERNSHIP SECTION 1 (LATEST) - PGN MAS */}
          <Reveal delay={100} className="mb-10">
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute -top-4 -left-2 md:-left-4 bg-[#1FAFEB] text-black border-2 border-black px-3 py-1 font-black uppercase text-xs transform -rotate-2 z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    Latest Internship
                </div>
                
                <div className="bg-white border-2 border-black p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1FAFEB] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                        {/* Logo / Icon Area */}
                        <div className="w-16 h-16 shrink-0 bg-white border-2 border-black flex items-center justify-center p-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-3 group-hover:rotate-0 transition-transform overflow-hidden rounded">
                            <img 
                                src="pgnmas.png" 
                                alt="PGN MAS Logo" 
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
                                }}
                            />
                        </div>
                        
                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-black uppercase leading-none mb-1.5">PGN MAS</h3>
                                    <div className="inline-block bg-gray-100 border border-black px-1.5 py-0.5">
                                        <p className="font-bold text-xs text-gray-800">PT Permata Graha Nusantara (PGN Group)</p>
                                    </div>
                                </div>
                                <span className="font-mono font-bold bg-black text-white px-3 py-1.5 transform rotate-2 text-xs shadow-[2px_2px_0px_0px_#1FAFEB] border border-transparent rounded">
                                    2025-2026
                                </span>
                            </div>

                            <div className="bg-[#1FAFEB]/10 border-l-4 border-black p-4 mb-3 relative">
                                <div className="absolute -left-[5px] top-0 w-1.5 h-1.5 bg-black"></div>
                                <div className="absolute -left-[5px] bottom-0 w-1.5 h-1.5 bg-black"></div>
                                
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#0D6E96] mb-1.5 block border-b-2 border-[#1FAFEB]/30 w-fit pb-0.5">
                                    Role / Responsibility
                                </span>
                                <h4 className="font-bold text-base leading-tight text-black">
                                    UI/UX Designer & Frontend Intern
                                </h4>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                                <p className="text-gray-700 font-medium text-xs leading-relaxed max-w-2xl">
                                    Contributed to designing and developing internal digital solutions. Focused on creating user-friendly interfaces and translating UI/UX prototypes into functional, responsive frontend code effectively.
                                </p>
                            </div>

                            <div className="mt-4 border-t-2 border-black pt-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">#UIUXDesign</span>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">#FrontendDev</span>
                                </div>
                                
                                <button 
                                    onClick={() => openGallery(["pgnmas1.jpg"], 0)} 
                                    className="group relative inline-flex items-center gap-1.5 bg-[#1FAFEB] text-black border-2 border-black px-4 py-1.5 rounded font-black uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-[#1891c4] transition-all"
                                >
                                    <ImageIcon size={14} />
                                    View Gallery
                                    <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-black transform group-hover:scale-110 transition-transform">
                                        1
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
          </Reveal>

          {/* INTERNSHIP SECTION 2 - BMKG */}
          <Reveal delay={200} className="mb-16">
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute -top-4 -left-2 md:-left-4 bg-green-400 border-2 border-black px-3 py-1 font-black uppercase text-xs transform -rotate-1 z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    Internship
                </div>
                
                <div className="bg-white border-2 border-black p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg relative overflow-hidden group">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                        {/* Logo / Icon Area */}
                        <div className="w-16 h-16 shrink-0 bg-white border-2 border-black flex items-center justify-center p-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-2 group-hover:rotate-0 transition-transform overflow-hidden rounded">
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
                            <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-black uppercase leading-none mb-1.5">BMKG Aceh</h3>
                                    <div className="inline-block bg-gray-100 border border-black px-1.5 py-0.5">
                                        <p className="font-bold text-xs text-gray-800">Class I Meteorological Station Sultan Iskandar Muda</p>
                                    </div>
                                </div>
                                <span className="font-mono font-bold bg-black text-white px-3 py-1.5 transform rotate-2 text-xs shadow-[2px_2px_0px_0px_#22c55e] border border-transparent rounded">
                                    2024-2025
                                </span>
                            </div>

                            <div className="bg-green-50 border-l-4 border-black p-4 mb-3 relative">
                                <div className="absolute -left-[5px] top-0 w-1.5 h-1.5 bg-black"></div>
                                <div className="absolute -left-[5px] bottom-0 w-1.5 h-1.5 bg-black"></div>
                                
                                <span className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-1.5 block border-b-2 border-green-200 w-fit pb-0.5">
                                    Final Project Title
                                </span>
                                <h4 className="font-bold text-base leading-tight text-black">
                                    "Utilization of Augmented Reality for Work Equipment Introduction at Class I Meteorological Station Sultan Iskandar Muda Banda Aceh"
                                </h4>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                                <p className="text-gray-700 font-medium text-xs leading-relaxed max-w-2xl">
                                    Developing interactive AR-based media to visualize meteorological tools in 3D, improving technical understanding for staff and station visitors.
                                </p>
                            </div>

                            {/* DOCUMENTATION GALLERY SECTION */}
                            <div className="mt-4 border-t-2 border-black pt-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">#AugmentedReality</span>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">#Unity3D</span>
                                </div>
                                
                                <button 
                                    onClick={() => openGallery(["bmkg1.jpg"], 0)} 
                                    className="group relative inline-flex items-center gap-1.5 bg-yellow-300 border-2 border-black px-4 py-1.5 rounded font-black uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-all"
                                >
                                    <ImageIcon size={14} />
                                    View Gallery
                                    <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-black transform group-hover:scale-110 transition-transform">
                                        1
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Column 1: Event */}
            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute -top-3 -left-3 bg-purple-400 border-2 border-black px-3 py-1 font-black uppercase text-[10px] transform -rotate-3 z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    Committees & Events
                </div>
                <div className="border-l-4 border-black pl-6 pt-6 space-y-5">
                   <TimelineCard 
                      role="Project Lead" 
                      org="CMD 2025" 
                      date="2025" 
                      desc="Leading an annual event featuring competitions like Hackathon, Research Paper Competition, Indonesian Debate, and enlivened by inspiring agendas such as Seminars and Bootcamps."
                      highlight={true} 
                      evidenceLabel="Documentation"
                      images={["cmd.png", "cmd1.jpeg", "cmd2.jpeg", "cmd3.jpeg", "cmd4.jpeg", "cmd5.jpeg"]}
                      onOpenGallery={openGallery}
                    />
                    <TimelineCard 
                      role="Vice Chairman" 
                      org="PBMT XI-KKN" 
                      date="2024" 
                      desc="Managing technical social service. A flagship program was developing a ready-to-drink refill water system to improve clean water accessibility."
                      evidenceLabel="Documentation"
                      images={["pbmt.png"]}
                      onOpenGallery={openGallery}
                    />
                    <TimelineCard 
                      role="Event Coordinator" 
                      org="BIOS (Orientation)" 
                      date="2025" 
                      desc="Designing new student orientation concepts."
                    />
                    <TimelineCard 
                      role="Vice Head of Merchandise" 
                      org="RCA 2024" 
                      date="2024" 
                      desc="Event merchandise sales strategy."
                    />
                    <TimelineCard 
                      role="Event Coordinator" 
                      org="BINER 7.0" 
                      date="2023" 
                      desc="Managing department introduction event rundown."
                    />
                </div>
              </div>
            </Reveal>

            {/* Column 2: Organization */}
            <Reveal delay={400}>
              <div className="relative mt-10 lg:mt-0">
                <div className="absolute -top-3 -right-3 bg-blue-400 border-2 border-black px-3 py-1 font-black uppercase text-[10px] transform rotate-2 z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    Organizations
                </div>
                <div className="pt-6 grid gap-6">
                   <div className="space-y-3">
                      <div className="flex items-center gap-2 border-b-2 border-black pb-1.5">
                         <div className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center overflow-hidden p-1 shrink-0">
                            <img src="himatekkom.png" alt="logo" className="w-full h-full object-contain" onError={(e) => e.target.style.display='none'}/>
                         </div>
                         <h4 className="font-bold text-black uppercase text-sm leading-tight">Computer Engineering Student Association</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <OrgCard role="Vice Head of Welfare" period="2024" desc="Aspirations & Welfare." images={["kesma.jpg"]} onOpenGallery={openGallery} />
                         <OrgCard role="Talent & Interest Staff" period="2025" desc="Interests & Talents." />
                         <OrgCard role="Student Welfare Staff" period="2023" desc="Junior Staff." images={["kesma1.png"]} onOpenGallery={openGallery} />
                      </div>
                   </div>

                   <div className="space-y-3">
                      <div className="flex items-center gap-2 border-b-2 border-black pb-1.5">
                         <div className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center overflow-hidden p-1 shrink-0">
                            <img src="bem.png" alt="logo" className="w-full h-full object-contain" onError={(e) => e.target.style.display='none'}/>
                         </div>
                         <h4 className="font-bold text-black uppercase text-sm leading-tight">Student Executive Board (Engineering)</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <OrgCard role="Public Relations Staff" period="2024" desc="Faculty Branding." images={["humas.png"]} onOpenGallery={openGallery} />
                      </div>
                   </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="py-20 bg-yellow-50 relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '16px 16px', backgroundPosition: '0 0, 8px 8px'}}></div>

         <div className="container mx-auto px-6 relative z-10">
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-black text-center mb-10 bg-white border-2 border-black inline-block px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mx-auto block transform rotate-1">
                CERTIFICATIONS & TRAINING
              </h2>
            </Reveal>
            
            <div 
                ref={certScrollRef}
                className="w-full overflow-x-auto pb-12 pt-3 px-4 -mx-4 responsive-scrollbar"
            >
              <div className="flex gap-6 w-max">
                  
                  <div className="w-[280px] md:w-[320px] flex-shrink-0">
                     <CertCard 
                       title="Bangkit Academy 2024"  
                       subtitle="Google, GoTo, Traveloka" 
                       desc="Independent Study in Machine Learning. AI Capstone Project."
                       color="green" 
                       icon={<BookOpen className="text-black" />} 
                       images={["bangkit.jpg", "bangkit1.jpg", "bangkit2.jpg"]}
                       onOpenGallery={openGallery}
                     />
                  </div>
                  
                  <div className="w-[280px] md:w-[320px] flex-shrink-0">
                     <CertCard 
                       title="IoT Device Engineering" 
                       subtitle="BNSP / LSP TDI" 
                       desc="Competency certification in IoT and Networking."
                       color="yellow" 
                       icon={<Cpu className="text-black" />} 
                       images={["iot.jpg", "iot1.jpg"]}
                       onOpenGallery={openGallery}
                     />
                  </div>

                  <div className="w-[280px] md:w-[360px] flex-shrink-0">
                     <CertCard 
                       title="Skill Academy CAMP" 
                       subtitle="Ruangguru" 
                       desc="Intensive UI/UX Design & Prototyping Bootcamp."
                       color="orange" 
                       icon={<Award className="text-black" />} 
                       images={["camp.jpg", "camp1.jpg"]}
                       onOpenGallery={openGallery}
                     />
                  </div>

                  <div className="w-[280px] md:w-[320px] flex-shrink-0">
                     <CertCard 
                       title="Webinar AI Weather" 
                       subtitle="KORIKA" 
                       desc="Utilization of AI for weather forecasting."
                       color="blue" 
                       icon={<ExternalLink className="text-black" />} 
                       images={["korika.jpg"]}
                       onOpenGallery={openGallery}
                     />
                  </div>
                  
                  <div className="w-[280px] md:w-[320px] flex-shrink-0">
                     <CertCard 
                       title="Science Olympiad (OSN)" 
                       subtitle="Kemdikbud" 
                       desc="City Level Champion in Informatics."
                       color="yellow" 
                       icon={<Award className="text-black" />} 
                       images={["osn.jpg"]}
                       onOpenGallery={openGallery}
                     />
                  </div>

              </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t-8 border-yellow-400">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-6 uppercase tracking-widest">Ready to Collaborate?</h2>
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
              {[
                  { icon: <Github size={20}/>, href: "https://github.com/rifqiimt" },
                  { icon: <Instagram size={20}/>, href: "https://www.instagram.com/rifqiimt/" },
                  { icon: <Linkedin size={20}/>, href: "https://www.linkedin.com/in/rifqiimt/" },
                  { icon: <Mail size={20}/>, href: "mailto:tampengrifqmubarak@gmail.com" },
                  { icon: <Phone size={20}/>, href: "https://wa.me/85214006701" }
              ].map((social, idx) => (
                  <a key={idx} href={social.href} className="w-10 h-10 bg-white text-black border-2 border-white flex items-center justify-center rounded hover:bg-black hover:text-white hover:border-white transition-colors">
                      {social.icon}
                  </a>
              ))}
          </div>
          <div className="w-16 h-1.5 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xs font-mono">© 2025 Rifqi Mubarak Tampeng. All rights reserved</p>
        </div>
      </footer>

      {/* Modal Galeri Biasa (Untuk Sertifikat) */}
      <ImageGalleryModal 
        isOpen={isGalleryOpen} 
        images={currentGalleryImages} 
        initialIndex={currentImageIndex}
        onClose={closeGallery} 
      />

      {/* Modal Detail Project Baru */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={closeProjectModal}
      />

    </div>
  );
};

const QuoteIcon = ({className}) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.925 15.025 15.088C15.697 14.252 16.637 13.833 17.845 13.833H19V9H17.291C16.427 9 15.635 9.176 14.915 9.528C14.195 9.88 13.835 10.592 13.835 11.664V21H14.017ZM7.017 21L7.017 18C7.017 16.896 7.353 15.925 8.025 15.088C8.697 14.252 9.637 13.833 10.845 13.833H12V9H10.291C9.427 9 8.635 9.176 7.915 9.528C7.195 9.88 6.835 10.592 6.835 11.664V21H7.017Z"/>
    </svg>
);

export default App;