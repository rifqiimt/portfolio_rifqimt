import React from 'react';
import { Globe, Github, Youtube, ExternalLink, Code } from 'lucide-react';

export const projectsData = [
  // --- 1. WEB DEVELOPMENT ---
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
    gallery: ["src/assets/projects/ui.fleedy.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/fleedy/", icon: <Globe size={14}/>, className: "bg-blue-300 text-black hover:bg-blue-400" }
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
    gallery: ["src/assets/projects/ui.spativm.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/spativm/", icon: <Globe size={14}/>, className: "bg-orange-300 text-black hover:bg-orange-400" }
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
    gallery: ["src/assets/projects/ui.filexpert.jpg"],
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
    summary: "Created an elegant, luxury-focused web showcase for ArtBuild, presenting architectural design, interior fitting-out, and construction projects for PGN Group and Pertamina subsidiaries.",
    details: [
      "Crafted a refined editorial visual experience utilizing serif typography (Playfair Display), interactive Polaroid-style photo grids, and video background hero headers.",
      "Developed a responsive, full-screen interactive project modal listing 20+ major 2024 Design & Build portfolios across internal PGN and external Pertamina Group facilities.",
      "Engineered dynamic hover-reveal accordion components that expand to display detailed technical scopes (Preliminary Design, DED, RAB, and Custom Furniture production).",
      "Structured performance metrics highlighting IDR 38.25 Billion in revenue contribution and high tender win rates across state-owned enterprise projects."
    ],
    techStack: ["React.js", "Tailwind CSS", "Playfair Display Typography", "Interactive Modals", "Video Hero Integration"],
    color: "bg-purple-300",
    gallery: ["src/assets/projects/ui.artbuild.jpg"],
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
      "Engineered a markerless mobile Augmented Reality (AR) Android application using Unity 3D and Vuforia SDK for interactive 3D computer hardware learning.",
      "Designed and animated detailed 3D models of computer components (Motherboard, CPU, RAM, GPU) using Blender with interactive 360-degree rotation and zoom.",
      "Implemented Research and Development (R&D) prototyping methodologies and conducted System Usability Scale (SUS) and N-Gain cognitive evaluations with 20+ respondents.",
      "Successfully defended the research as the final requirement for the Bachelor of Engineering (S.T.) degree."
    ],
    techStack: ['Unity3D', 'Vuforia AR', 'Blender 3D Modeling', 'Android SDK'],
    color: "bg-orange-300",
    gallery: ["src/assets/projects/ar.hardware.jpg"],
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
    gallery: ["src/assets/projects/gula1.jpeg", "src/assets/projects/gula2.jpeg", "src/assets/projects/gula3.jpeg", "src/assets/certificate/innovillage.jpg"],
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
    links: [
    ]
  }
];

export const experiencesList = [
  {
    role: "Organizing Chairman (Chief Organizer)",
    title: "Computer Multi-Challenge Day (CMD) 2025 - National Tech Festival",
    year: "2025",
    client: "HIMATEKKOM, Universitas Syiah Kuala",
    location: "Banda Aceh, Indonesia",
    image: "src/assets/experience/cmd.png",
    categoryBadgeColor: "bg-yellow-300",
    summary: "Served as the Chairman for CMD 2025, directing a national-scale technology festival featuring 24-hour hackathons, workshops, and AI seminars. Simultaneously spearheaded the event's primary revenue generation by directly managing the end-to-end design, production, and sales campaign of official merchandise, successfully funding over 46% of the entire event budget.",
    details: [
      "Led and coordinated a multidisciplinary organizing committee of 7 divisions to execute a national-level technology festival hosting a 24-hour Hackathon, UI/UX Design contests, and national seminars on Deep Learning.",
      "Directly spearheaded the event's merchandising business unit, managing vendor negotiation for IDR 7.20 Million in production costs and executing a strategic sales campaign that generated IDR 9.74 Million in gross revenue to anchor the event's financial viability.",
      "Architected and managed the overall event budget of IDR 21.04 Million, demonstrating exceptional fiscal responsibility by delivering the entire operational pipeline with a balanced sheet and absolute transparency.",
      "Resolved complex operational and logistics challenges during the highly intense 24-hour continuous Hackathon program, ensuring continuous mentor-student coordination and seamless event execution."
    ],
    gallery: ["src/assets/experience/cmd.png", "src/assets/experience/cmd1.jpeg", "src/assets/experience/cmd2.jpeg", "src/assets/experience/cmd3.jpeg", "src/assets/experience/cmd4.jpeg", "src/assets/experience/cmd5.jpeg"],
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
    gallery: ["src/assets/certificate/bpvp.jpg", "src/assets/certificate/bpvp1.jpg", "src/assets/certificate/bpvp2.jpg"]
  },
  {
    isCert: true,
    title: "Innovillage 2025 - Top 180 Social Project",
    subtitle: "Telkom Indonesia & Witel",
    year: "2025",
    description: "A large-scale national digital social innovation competition organized by PT Telkom Indonesia. Passed the research funding selection for the 'Gula Cerdas' project (An IoT-based palm sugar production standardization and viscosity monitoring system for traditional farmer SMEs in Aceh).",
    issuer: "PT Telkom Indonesia (Persero) Tbk",
    keyInfo: "Secured Top 180 Innovillage 2025 national funding & implemented appropriate technology for SMEs.",
    gallery: ["src/assets/certificate/innovillage.jpg"]
  },
  {
    isCert: true,
    title: "Bangkit Academy 2024",
    subtitle: "Google, GoTo, Traveloka",
    year: "2024",
    description: "An industry-standard certified independent study program in Machine Learning and AI development. Includes an in-depth understanding of data processing, predictive model creation, and a collaborative final Capstone Project with cross-disciplinary participants.",
    issuer: "Google, GoTo, & Traveloka (Kampus Merdeka)",
    keyInfo: "Graduated with a Google-standard competency certificate & completed an AI Capstone Project.",
    gallery: ["src/assets/certificate/bangkit.jpg", "src/assets/certificate/bangkit1.jpg", "src/assets/certificate/bangkit2.jpg"]
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
    role: "IT Support & Graphic Design Intern",
    company: "PT Permata Graha Nusantara",
    location: "Jakarta, Indonesia",
    logo: "pgnmas.jpeg",
    coreScope: "IT Infrastructure Support, Corporate Web Platform Development & Webinar Moderation",
    responsibilities: [
      "Supported daily corporate IT infrastructure operations, hardware/software troubleshooting, and system license compliance checks across internal departments.",
      "Designed and developed 4 production-ready corporate web platforms (Fleedy, ArtBuild, FileExpert, and Spativm) using React.js and Tailwind CSS, while generating static HTML5 bundles to comply with corporate server deployment standards.",
      "Trusted by corporate leadership to moderate 2 official knowledge-sharing webinars ('Cross Sharing' on AI and 'Pairing' on Digital Cybersecurity), facilitating high-level discussions between university professors and corporate executives.",
      "Managed corporate digital assets, shared file accessibility, and employee workstation configurations to streamline daily business support operations.",
      "Produced professional graphic design and visual communication materials aligned with PT Permata Graha Nusantara branding guidelines."
    ],
    tags: ["IT Support", "React.js"],
    caseStudyData: {
      title: "PT Permata Graha Nusantara (PGNMAS)",
      role: "IT Support & Graphic Design Intern",
      year: "Januari 2026 – April 2026",
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
      gallery: ["src/assets/experience/pgnmas.jpg", "src/assets/experience/pgnmas1.jpg", "src/assets/experience/pgnmas2.jpg", "src/assets/experience/pgnmas3.jpg"],
      techStack: ["React.js", "Tailwind CSS", "IT Support", "Graphic Design", "Webinar Moderation", "System Admin", "Static HTML5"]
    }
  },
  {
    title: "BMKG Aceh",
    period: "2025",
    role: "AR & WebAR Developer Intern",
    company: "BMKG Kelas I SIM",
    location: "Banda Aceh, Indonesia",
    logo: "bmkg.png",
    coreScope: "", // BMKG tidak memiliki kotak hijau core scope
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