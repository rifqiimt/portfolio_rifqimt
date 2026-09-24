import React from 'react';
import { Globe, Github, Youtube, ExternalLink, Code } from 'lucide-react';

export const projectsData = [
  // --- 1. WEB DEVELOPMENT ---
  {
    title: "Fleedy - Corporate Fleet & Transportation Management Web Platform",
    category: "Web Development",
    subtitle: "Corporate Landing Page / Transportation Management Services",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary: "Unit Jasa Pengelolaan Transportasi (Fleedy) dari PERMATA Group. Platform web yang menampilkan layanan terintegrasi: sewa kendaraan, manajemen pengemudi, operasi armada, GPS tracking, dan layanan administratif untuk klien BUMN, KKKS Migas, dan pemerintah.",
    details: [
      "Engineered a highly responsive corporate front-end using React.js and Tailwind CSS, featuring custom viewport-triggered reveal animations (RevealOnScroll component with IntersectionObserver API)",
      "Architected clean UI sections to present real-time GPS tracking capabilities, EV/Hybrid energy transition readiness (3 EV units + 10 Hybrid units in fleet), and comprehensive driver management workflows",
      "Visually structured complex 2024 annual operational metrics (19.16% YoY asset growth and IDR 153.05 Billion business revenue from transportation management services) into scannable, interactive data cards using custom CountUp animation hook with ease-out exponential easing",
      "Designed multi-device navigation with direct cross-platform communication links: WhatsApp API integration, App Store, and Google Play ecosystem links for seamless user engagement",
      "Built comprehensive services section covering 3 core offerings: Jasa Pengelolaan Transportasi (transportation services), Manajemen Pengemudi & SDM (driver & HR management), and Fleet Management System (integrated asset management)",
      "Created 4 feature highlight cards: Real-Time Tracking (GPS + Google Maps integration), Cost Efficiency (centralized BBM, Toll, and preventive maintenance management), Energy Transition Ready (EV/Hybrid fleet adaptation for energy transition era), and Comprehensive Care (All-Risk insurance, official workshop partners, STNK/KIR document management)",
      "Developed client logo grid showcasing 12 corporate partners: SKK Migas, Pertamina, Pertagas, Perta Samtan, EP Cepu, Patra Niaga, Hulu Rokan, Nusantara Regas, Pertamina Power, Hulu Energi, TGI, Petrochina — all with hover-grayscale-to-full-color transition effects",
      "Implemented dynamic statistics section with animated counters: 964 total units (764 internal + 200 external), 19.16% YOY asset growth, IDR 153.05 Billion business revenue, and IDR 189.88 Billion total asset value"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Lucide Icons",
      "Custom IntersectionObserver (RevealOnScroll component)",
      "Custom CountUp Animation Hook (Ease Out Expo)",
      "Google Maps & GPS Integration",
      "WhatsApp API Link",
      "App Store & Google Play Integration",
      "Responsive UI/UX (mobile-first with hamburger menu)",
      "FadeInSection Entrance Animations"
    ],
    color: "bg-blue-300",
    gallery: ["projects/ui.fleedy.jpg", "projects/ui.fleedy1.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/fleedy/", icon: <Globe size={14}/>, className: "bg-blue-300 text-black hover:bg-blue-400" },
      { text: "Download iOS App", url: "https://apps.apple.com/us/app/fleedy/id1605578677", icon: <Code size={14}/>, className: "bg-white text-[#1f4374] hover:bg-gray-50" },
      { text: "Download Android App", url: "https://play.google.com/store/apps/details?id=com.pgnmas.fleedy&hl=id", icon: <Code size={14}/>, className: "bg-white text-[#1f4374] hover:bg-gray-50" }
    ]
  },
  {
    title: "Spativm - Regional Facility & Building Management Portal",
    category: "Web Development",
    subtitle: "Corporate Web Portal / Facility Management Services",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary: "Corporate web portal for SPATIVM, a facility management business unit under PERMATA Group. Provides comprehensive building management services: maintenance, housekeeping, HSE & security, office support, and parking/valet services for corporate, government, and commercial properties.",
    details: [
      "Built sophisticated front-end experience using React.js featuring custom frame-by-frame mathematical easing hooks (CountUp with Ease Out Expo formula: 1 - 2^(-10x)) for dynamic annual performance statistics",
      "Implemented trigger-once IntersectionObserver architecture (FadeInSection with 0.15 threshold and -50px rootMargin) to deliver smooth, staggered entrance animations across multi-column service grids — animations trigger only once per element",
      "Designed intuitive UI layouts highlighting core facility services (Building Maintenance, Housekeeping & Hygiene, HSE & Security, and Office Support) with high-contrast visual hierarchy and cyan (#005494) color accent",
      "Showcased enterprise credibility by structuring strategic client ecosystems including Kementerian BUMN, SKK Migas, Pertamina, PGN Group, Pertamina EP, BULOG, Bank Mega, ASDP, Medco E&P, Pertamina Hulu Energi, Pertagas, and Saka Indonesia — with grayscale-to-color hover logo transition effects",
      "Developed 4 main service detail cards with images, category badges, and descriptions: Building Maintenance (listrik/air/AC systems), Housekeeping & Hygiene (sanitization), HSE & Security (K3 compliance), and Office Support (resepsionis/operator/meeting room management)",
      "Created additional services section: Parking & Valet Management, Coworking Space & Meeting Management, Diklat & Rumah Dinas Units, Building Accessories Supply",
      "Included internal PGN services description: data aset non-jaringan updates, utilitas & atap repairs, fire alarm system maintenance, waterproofing (Kantor Pusat Ketapang), and archive building repairs in Klender — demonstrating deep understanding of internal PGN operations",
      "Implemented custom CountUp hook with ease-out exponential easing for animated statistics display: Rp425+ Million facility management revenue, 20.35% YOY growth, 419,000+ m² total building area, and 14 strategic tender participations — with delayed trigger per item (100ms * index)",
      "Built fully functional contact form with company name, email, and detailed needs textarea fields; integrated social media links (Instagram, Facebook, Email) with hover effects",
      "Developed mobile-responsive design with hamburger menu overlay, smooth scroll navigation with 65px header offset, and sticky navigation that transitions from transparent to white on scroll",
      "Presented additional 2024 metrics: 228,058.97 m² building area and 191,363.53 m² empty land managed, with specific building management revenue of IDR 174.99 Billion"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Custom CountUp Animation Hook (Ease Out Expo: 1 - 2^(-10x))",
      "Custom FadeInSection (IntersectionObserver with unobserve-once pattern)",
      "Smooth Scroll Navigation (65px header offset)",
      "Mobile Responsive (hamburger menu with full-screen overlay)",
      "Client Logo Grid with Grayscale-to-Color Hover Effects",
      "Contact Form Integration (name, email, message fields)",
      "Sticky Navigation with Scroll-State Transition",
      "Dark Section Design (#0f172a background)"
    ],
    color: "bg-orange-300",
    gallery: ["projects/ui.spativm.jpg", "projects/ui.spativm1.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/spativm/", icon: <Globe size={14}/>, className: "bg-orange-300 text-black hover:bg-orange-400" }
    ]
  },
  {
    title: "FileExpert - ANRI-Accredited Digital Archive & DOX Solution",
    category: "Web Development",
    subtitle: "B2B Digital Solution / Archive Management Web Platform",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary: "High-impact B2B web platform for FileExpert, an ANRI-accredited archive management and DOX OCR technology solution under PERMATA Group. Showcases capability in managing over 153,446 corporate archive boxes with national archival standards, serving clients including Pertamina Group, Kementerian BUMN, Jiwasraya, ASDP, and government institutions.",
    details: [
      "Designed bold, neo-brutalist corporate visual identity using React.js and Tailwind CSS with distinctive green-and-yellow high-contrast color palette — FileExpert brand identity with rotated logo elements (rotate-1, rotate-3 on hover)",
      "Implemented infinite CSS linear marquee animation (35s linear infinite loop) to dynamically showcase trust from vital enterprise partners (Pertamina Group, MIND ID, Bank BTN, JAKPRO, KemenBUMN, ASDP) — with grayscale-to-full-color hover transition effects on each logo",
      "Created interactive feature showcases explaining DOX Optical Character Recognition (OCR) technology, metadata search capabilities, and certified archive management workflows — with feature badges (Metadata Search, Mobile Apps, OCR Tech) using Zap icon with yellow fill",
      "Built optimized, scannable statistical dashboard section visualizing 2024 report data: 153,446 total boxes managed (2,500 large boxes + 150,946 standard ANRI boxes), 15,010 boxes organized using ML-assisted methods, and annual revenue of IDR 25.96 Billion with 12.72% year-over-year growth",
      "Developed 4 comprehensive service sections with distinct visual treatments: (1) Penataan Arsip — green card with Database icon, ANRI national archival standards; (2) Penyimpanan Terkelola — dark green card with ShieldCheck icon, 24-hour monitor + barcode tracking; (3) Manage Service — yellow card with Users icon, outsourcing with certified archive specialists; (4) Teknologi DOX — featured section with DOX hero image, Cpu icon, and feature badges (Metadata Search, Mobile Apps, OCR Tech)",
      "Created client statistics cards with hover shadow effects: Pertamina Tbk (62,032 boxes), Kementerian BUMN (19,087 boxes), Jiwasraya (15,615 boxes), ASDP (2,845 boxes with impressive +264% growth) — each card showing sub-label, client name, and box count",
      "Designed 'Ekspansi Bisnis' section with dark green card (bg-green-950) featuring PieChart icon, 'Facility Management 2024' title, quote about holistic archival management, and metrics: 15 tender wins, 14% YoY growth, IDR 25.96 Million revenue, Audit Selesai status",
      "Built animated client logo marquee with duplicate loop (2x) for seamless infinite scroll, grayscale opacity-40 default with hover grayscale-0 + opacity-100 transition, yellow dot separators between logos",
      "Implemented custom scrollbar styling (8px width, green thumb #15803d with hover #166534) and marquee animation keyframes for professional polished feel",
      "Created CTA section with large yellow-400 rounded-[3rem] card: 'Optimalkan Ruang Kantor Anda' headline, italic description, and 'Konsultasi Sekarang' button with scale-105 hover and active:scale-95 transform effects"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Neo-Brutalist Design (green-yellow high-contrast palette)",
      "CSS Keyframe Animations (infinite marquee, 35s linear)",
      "B2B UI/UX Design",
      "DOX OCR Technology Concept (Optical Character Recognition)",
      "ANRI Archival Standards (National Archive Accreditation)",
      "Interactive Hover Effects (logo grayscale transition, card shadow, button scale)",
      "Feature Badge System (Zap icon with yellow fill)",
      "Custom Scrollbar Styling",
      "Rotated Image Containers (rotate-1, rotate-3 CSS transforms)"
    ],
    color: "bg-green-300",
    gallery: ["projects/ui.filexpert.jpg", "projects/ui.filexpert1.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/filexpert/", icon: <Globe size={14}/>, className: "bg-green-300 text-black hover:bg-green-400" }
    ]
  },
  {
    title: "ArtBuild - Corporate Interior, Architecture & Construction Portal",
    category: "Web Development",
    subtitle: "Design & Build Showcase / Web Application",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary: "Elegant, luxury-focused web showcase for ArtBuild, presenting digital gallery of architectural design, interior fitting-out, and construction projects for PGN Group and Pertamina subsidiaries. Showcases 2024 design & build portfolios with IDR 38.25 Billion revenue contribution and 5/8 tender win rate (62.5%).",
    details: [
      "Crafted refined editorial visual experience utilizing serif typography (Playfair Display for headlines) and sans-serif body (Inter), interactive Polaroid-style photo grids with CSS rotation effects (rotate-6, rotate-0, rotate-0) in about section",
      "Developed full-screen interactive project modal listing 20+ major 2024 Design & Build portfolios across internal PGN and external Pertamina Group facilities — accessible via 'Lihat Daftar Lengkap Proyek' button, modal shows internal (PN Group) and external (Pertamina Group) project lists with numbered items",
      "Engineered dynamic hover-reveal accordion components that expand to display detailed technical scopes — 6 service items (Interior & Arsitektur Design, Konstruksi & Renovasi, Fitting Out Ruang Kantor, Penyusunan RAB & Penjadwalan, Detail Engineering Design/DED, Custom Furniture) — each with hover-to-expand description using max-h-0 to max-h-24 transition with left border reveal",
      "Structured performance metric layouts in 'Pencapaian & Kinerja' dark section (#1a1a1a background): Tingkat Kemenangan Tinggi (5/8 lelang = 62.5% win rate), Ekspansi Pasar Luas (Pertamina Group across Lubricants, Gas, Retail, NRE divisions), Pendapatan Signifikan (IDR 38.25 Billion contribution in 2024) — all with white bullet points and left border accent",
      "Implemented video background hero section with 'Enduro x Fastron' featured project (Lounge & Exhibition for PT Pertamina Lubricants) — video autoplay, loop, muted, playsinline with poster image fallback, overlaid with clean info box showing client (PT Pertamina Lubricants), year (2024), and status (Completed)",
      "Built 5-project horizontal scrollable gallery (scrollbar-hide class): Graha PGAS (Furniture Lt. 9-11), Pertamina Lubricants (Showroom Interior), Bright Store Bintaro (Renovasi Store), Sport Center Udayana (Konstruksi Lapangan), Kantor Pertamina NRE (Renovasi R. Komisaris) — each with image hover scale-110 effect and project number/title/location metadata",
      "Created blueprint/detail section with grid layout: left side with technical drawing image (grayscale, mix-blend-multiply), right side with stats card showing IDR 38.25 Billion kontribusi 2024, fokus pasar (BUMN & Swasta), and klien strategis (SKK Migas, Pertamina Group, PGN) — with DOC. 2024 label",
      "Developed 6-item service navigation with numbered headings (01-06), hover translate-x-2 effect, and hidden description text that expands from max-h-0 to max-h-24 on hover with left border reveal — smooth 500ms ease-in-out transition",
      "Implemented dark section with full-screen background image (service0.jpg, grayscale, opacity-40 overlay), left-aligned content with border-l border-white/20 pl-8 indent, showing 3 achievement items with animated bullet points",
      "Created CTA section with clean design: 'Mulai Proyek Anda' label, large serif headline (4xl/5xl), description, and dark button (bg-[#2A2A2A]) with hover:bg-black transition, leading to contact@artbuild.co.id mailto link"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Playfair Display Typography (Serif - headlines)",
      "Inter Font (Sans-Serif - body text)",
      "Custom FadeInSection (IntersectionObserver with delay support)",
      "Video Background Integration (autoplay, loop, muted, playsinline with poster)",
      "Polaroid-Style Photo Grids (CSS transform: rotate-6, rotate-0 with shadow effects)",
      "Accordion Hover-Reveal Components (max-h-0 to max-h-24, 500ms ease-in-out)",
      "Horizontal Scroll Project Gallery (scrollbar-hide, hover scale-110)",
      "Project Modal (full project list with internal/external sections)",
      "Dark Section Design (#1a1a1a background with left border accent)",
      "Blueprint-Style Detail Section (technical drawing aesthetic)"
    ],
    color: "bg-purple-300",
    gallery: ["projects/ui.artbuild.jpg", "projects/ui.artbuild1.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/artbuild/", icon: <Globe size={14}/>, className: "bg-purple-300 text-black hover:bg-purple-400" }
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
      "Conducted comprehensive R&D to translate physical computer hardware into detailed spatial 3D learning modules for educational purposes.",
      "Designed and animated detailed 3D models of computer components (Motherboard, CPU, RAM, GPU) using Blender with interactive 360-degree rotation and zoom.",
      "Implemented Research and Development (R&D) prototyping methodologies and conducted System Usability Scale (SUS) and N-Gain cognitive evaluations with 20+ respondents.",
      "Successfully defended the research as the final requirement for the Bachelor of Engineering (S.T.) degree."
    ],
    techStack: ['Unity3D', 'Vuforia AR', 'Blender 3D Modeling', 'Android SDK'],
    color: "bg-orange-300",
    gallery: ["projects/ar.hardware.jpg"],
    links: [
      { text: "App, Walkthrough & Research Data", url: "https://drive.google.com/drive/folders/1d3CT7M3wk4dY-DI3fOsczbqzrCtGB6by?usp=sharing", icon: <ExternalLink size={14}/>, className: "bg-orange-300 text-black hover:bg-orange-400" }
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

  // --- 4. IOT SOLUTION ---
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
    gallery: ["projects/gula1.jpeg", "projects/gula2.jpeg", "projects/gula3.jpeg", "certificate/innovillage.jpg"],
    links: [
      { text: "Github Repo", url: "https://github.com/rifqiimt/Gula-Cerdas.git", icon: <Github size={14}/> },
      { text: "Video Demo", url: "https://www.youtube.com/@rifqimubaraktampeng5034/videos", icon: <Youtube size={14}/>, className: "bg-red-100 text-black hover:bg-red-200" }
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
    links: []
  }
];

export const experiencesList = [
  {
    role: "Organizing Chairman (Chief Organizer)",
    title: "Computer Multi-Challenge Day (CMD) 2025 - National Tech Festival",
    year: "2025",
    client: "HIMATEKKOM, Universitas Syiah Kuala",
    location: "Banda Aceh, Indonesia",
    image: "experience/cmd.png",
    categoryBadgeColor: "bg-yellow-300",
    summary: "Served as the Chairman for CMD 2025, directing a national-scale technology festival featuring 24-hour hackathons, workshops, and AI seminars. Simultaneously spearheaded the event's primary revenue generation by directly managing the end-to-end design, production, and sales campaign of official merchandise, successfully funding over 46% of the entire event budget.",
    details: [
      "Led and coordinated a multidisciplinary organizing committee of 7 divisions to execute a national-level technology festival hosting a 24-hour Hackathon, UI/UX Design contests, and national seminars on Deep Learning.",
      "Directly spearheaded the event's merchandising business unit, managing vendor negotiation for IDR 7.20 Million in production costs and executing a strategic sales campaign that generated IDR 9.74 Million in gross revenue to anchor the event's financial viability.",
      "Architected and managed the overall event budget of IDR 21.04 Million, demonstrating exceptional fiscal responsibility by delivering the entire operational pipeline with a balanced sheet and absolute transparency.",
      "Resolved complex operational and logistics challenges during the highly intense 24-hour continuous Hackathon program, ensuring continuous mentor-student coordination and seamless event execution."
    ],
    gallery: ["experience/cmd.png", "experience/cmd1.jpeg", "experience/cmd2.jpeg", "experience/cmd3.jpeg", "experience/cmd4.jpeg", "experience/cmd5.jpeg"],
    techStack: ["Event Operations & Leadership", "Strategic Merchandising", "Financial Planning & Budgeting", "Vendor Negotiation", "Logistics Coordination", "Revenue Optimization"]
  },
  {
    role: "Vice Chairman of the Organizing Committee",
    title: "Pekan Bakti Mahasiswa Teknik (PBMT) XI - Rural Technology & Community Empowerment",
    year: "2024",
    client: "BEM Fakultas Teknik, Universitas Syiah Kuala",
    location: "Aceh Besar, Indonesia",
    image: "pbmt.png",
    categoryBadgeColor: "bg-blue-300",
    summary: "Served as the Vice Chairman of the Organizing Committee for PBMT XI, a massive 6-month community development initiative in Luthu Lamweu Village, Aceh Besar. Co-led a multidisciplinary engineering student delegation to deploy sustainable technological and infrastructural solutions for local farmers and residents.",
    details: [
      "Co-managed overall project operations, scheduling, and volunteer coordination for a multi-month community empowerment program, facilitating strategic collaboration between university academics, local village authorities, and over hundreds of community participants.",
      "Supervised the successful engineering and deployment of agricultural innovations, notably an IoT-based Automatic Fertigation System (AFS) to automate watering and fertilization, alongside organizing bio-pesticide and waste-management compost barrel initiatives.",
      "Directed village infrastructure and water security projects, leading the technical rehabilitation and optimization of local deep-bore wells (Sumur Bor) to establish stable, clean water distribution networks for both household and agricultural consumption.",
      "Oversaw the program's budgeting, procurement of technical and raw materials, and co-drafted the final institutional Accountability Report (LPJ) to ensure complete fiscal transparency and program compliance."
    ],
    gallery: ["pbmt.png"],
    techStack: ["Program Operations & Leadership", "IoT Fertigation (AFS)", "Water Security Engineering", "Community Relations", "Budgeting & Financial Reporting", "Sustainable Agriculture Systems"]
  },
  {
    role: "Vice Head of Student Welfare (Kesma)",
    title: "HIMATEKKOM",
    year: "2024",
    client: "Computer Engineering Student Association • Universitas Syiah Kuala",
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
    client: "Student Executive Board • Universitas Syiah Kuala",
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
    client: "Computer Engineering Freshman Orientation • Universitas Syiah Kuala",
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

export const certsData = [
  {
    isCert: true,
    title: "Public Speaking & Special Event Specialist",
    subtitle: "BPVP Bandung Barat / KEMNAKER RI",
    year: "2026",
    description: "Professional communication skills certification and training organized by the West Bandung Vocational and Productivity Training Center (BPVP) under the Indonesian Ministry of Manpower. This program tests and validates competencies in effective public speaking and systematic special event planning.",
    issuer: "BPVP Bandung Barat - Ministry of Manpower R.I.",
    keyInfo: "Passed the intensive training certification with the official Competency Unit achievement 'Executing Special Events' (Unit Code: M.70HMS00.028.3).",
    gallery: ["certificate/bpvp.jpg", "certificate/bpvp1.jpg", "certificate/bpvp2.jpg"]
  },
  {
    isCert: true,
    title: "Innovillage 2025 - Top 180 Social Project",
    subtitle: "Telkom Indonesia & Witel",
    year: "2025",
    description: "A large-scale national digital social innovation competition organized by PT Telkom Indonesia. Passed the research funding selection for the 'Gula Cerdas' project (An IoT-based palm sugar production standardization and viscosity monitoring system for traditional farmer SMEs in Aceh).",
    issuer: "PT Telkom Indonesia (Persero) Tbk",
    keyInfo: "Secured Top 180 Innovillage 2025 national funding & implemented appropriate technology for SMEs.",
    gallery: ["certificate/innovillage.jpg"]
  },
  {
    isCert: true,
    title: "Bangkit Academy 2024",
    subtitle: "Google, GoTo, Traveloka",
    year: "2024",
    description: "An industry-standard certified independent study program in Machine Learning and AI development. Includes an in-depth understanding of data processing, predictive model creation, and a collaborative final Capstone Project with cross-disciplinary participants.",
    issuer: "Google, GoTo, & Traveloka (Kampus Merdeka)",
    keyInfo: "Graduated with a Google-standard competency certificate & completed an AI Capstone Project.",
    gallery: ["certificate/bangkit.jpg", "certificate/bangkit1.jpg", "certificate/bangkit2.jpg"]
  },
  {
    isCert: true,
    title: "BNSP - IoT Engineer",
    subtitle: "BNSP / LSP TDI",
    year: "2024",
    description: "Official professional skill certification organized by the National Professional Certification Board (BNSP) through the Professional Certification Agency (LSP). Tests and validates technical expertise in designing, assembling, and implementing Internet of Things hardware and embedded networks.",
    issuer: "National Professional Certification Board (BNSP)",
    keyInfo: "Official national-scale competency certification as an IoT & Embedded System practitioner.",
    gallery: ["iot.jpg", "iot1.jpg"]
  },
  {
    isCert: true,
    title: "Skill Academy CAMP",
    subtitle: "Ruangguru",
    year: "2023",
    description: "Intensive User Interface and User Experience (UI/UX) design bootcamp based on Design Thinking. Covers user research, wireframing, design system creation, and high-fidelity interactive prototyping using Figma.",
    issuer: "Skill Academy by Ruangguru",
    keyInfo: "Completed a UI/UX project portfolio validated through usability testing.",
    gallery: ["camp.jpg", "camp1.jpg"]
  },
  {
    isCert: true,
    title: "KORIKA AI Webinar",
    subtitle: "KORIKA",
    year: "2024",
    description: "Artificial Intelligence (AI) technology webinar and training organized by the Indonesian Artificial Intelligence Research and Innovation Collaboration (KORIKA), exploring the implementation of AI algorithms in weather and climate prediction modeling in Indonesia.",
    issuer: "KORIKA Indonesia",
    keyInfo: "In-depth insights into the integration of artificial intelligence in meteorology.",
    gallery: ["korika.jpg"]
  },
  {
    isCert: true,
    title: "National Science Olympiad",
    subtitle: "Ministry of Education",
    year: "High School",
    description: "A prestigious student-level science competition organized by the Indonesian Ministry of Education and Culture. Won an award in the Informatics (Computer) field, which tests algorithmic logic and problem-solving (competitive programming).",
    issuer: "Ministry of Education and Culture R.I.",
    keyInfo: "Winner of the district/city level algorithm and programming competition.",
    gallery: ["osn.jpg"]
  }
];

export const internshipsList = [
  {
    title: "PGNMAS",
    period: "Jan 2026 – Apr 2026",
    role: "IT Support & Web Developer Intern",
    company: "PT Permata Graha Nusantara",
    location: "Jakarta, Indonesia",
    logo: "experience/pgnmas.jpeg",
    coreScope: "IT Infrastructure Support, Corporate Web Platform Development & Webinar Moderation",
    responsibilities: [
      "Supported daily corporate IT infrastructure operations, hardware/software troubleshooting, and system license compliance checks across internal departments.",
      "Designed and developed 4 production-ready corporate web platforms (Fleedy, ArtBuild, FileExpert, and Spativm) using React.js and Tailwind CSS, while generating static HTML5 bundles to comply with corporate server deployment standards.",
      "Trusted by corporate leadership to moderate 2 official knowledge-sharing webinars ('Cross Sharing' on AI and 'Pairing' on Digital Cybersecurity), facilitating high-level discussions between university professors and corporate executives.",
      "Managed corporate digital assets, shared file accessibility, and employee workstation configurations to streamline daily business support operations."
    ],
    tags: ["IT Support", "React.js", "Front-End"],
    caseStudyData: {
      title: "PT Permata Graha Nusantara (PGNMAS)",
      role: "IT Support & Web Developer Intern",
      year: "Januari 2026 – April 2026",
      institution: "PT Permata Graha Nusantara",
      location: "Jakarta, Indonesia",
      summary: "Completed a regular professional internship at PT Permata Graha Nusantara (PGNMAS) supporting enterprise IT operations, moderating corporate webinars, and leading front-end web development for corporate platforms.",
      details: [
        "Supported daily corporate IT infrastructure operations, hardware/software troubleshooting, and system license compliance checks across internal departments.",
        "Designed and developed 4 production-ready corporate web platforms (Fleedy, ArtBuild, FileExpert, and Spativm) using React.js and Tailwind CSS, while generating static HTML5 bundles to comply with corporate server deployment standards.",
        "Trusted by corporate leadership to moderate 2 official knowledge-sharing webinars ('Cross Sharing' on AI and 'Pairing' on Digital Cybersecurity), facilitating high-level discussions between university professors and corporate executives.",
        "Managed corporate digital assets, shared file accessibility, and employee workstation configurations to streamline daily business support operations."
      ],
      gallery: ["experience/pgnmas.jpg", "experience/pgnmas1.jpg", "experience/pgnmas2.jpg", "experience/pgnmas3.jpg"],
      techStack: ["React.js", "Tailwind CSS", "IT Support", "Front-End Development", "Webinar Moderation", "System Admin", "Static HTML5"]
    }
  },
  {
    title: "BMKG Aceh",
    period: "Dec 2024 - Jan 2025",
    role: "AR & WebAR Developer Intern",
    company: "BMKG Kelas I SIM",
    location: "Banda Aceh, Indonesia",
    logo: "bmkg.png",
    coreScope: "",
    responsibilities: [
      "Designed and developed an interactive Web-Based Augmented Reality (WebAR) educational application to visualize complex meteorological equipment (such as Campbell Stokes) as interactive 3D models.",
      "Reconstructed high-fidelity 3D assets from physical photos using Meshroom photogrammetry engine and optimized topology/texturing in Blender for mobile browser performance.",
      "Engineered spatial scenes and UI overlays in Unity and published via Zapworks Studio for instant QR code browser access without app installation.",
      "Assisted IT department with daily hardware/network operations and technical sensor data processing."
    ],
    tags: ["WebAR", "Unity 3D"],
    caseStudyData: {
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
    }
  }
];
