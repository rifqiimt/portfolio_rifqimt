import React from 'react';
import { Globe, Github, Youtube, ExternalLink, Code } from 'lucide-react';

export const projectsData = [
  // --- 1. WEB DEVELOPMENT ---

  {
    title: "Fleedy - Corporate Fleet & Transportation Management Web Platform",
    category: "Web Development",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary:
      "Website for Fleedy, a fleet & transportation management service under PERMATA Group. This website presents the company's operations by visualizing 964 vehicles (764 internal + 200 external), 19.16% year-on-year asset growth, Rp153.05 Billion in 2024 business revenue, and a total asset value of Rp189.88 Billion.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Lucide Icons",
      "Google Maps & GPS Integration",
      "WhatsApp API Link",
      "App Store & Google Play Integration",
      "Responsive UI/UX (mobile-first with hamburger menu)",
    ],
    color: "bg-blue-300",
    gallery: ["projects/ui.fleedy.jpg"],
    links: [
      {
        text: "Live Website",
        url: "https://pgnmas.co.id/fleedy/",
        icon: <Globe size={14} />,
        className: "bg-blue-300 text-black hover:bg-blue-400",
      },
    ],
  },

  {
    title: "Spativm - Regional Facility & Building Management Portal",
    category: "Web Development",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary:
      "Website for SPATIVM, a facility & building management service under PERMATA Group. This website presents the company's operations by visualizing Rp425+ Million in facility management revenue, 20.35% year-on-year growth, and 419,000+ m² of managed space (including 228K m² building area and 191K m² empty land), along with core services: Building Maintenance, Housekeeping & Hygiene, HSE & Security, and Office Support.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Smooth Scroll Navigation (65px header offset)",
      "Mobile Responsive (hamburger menu with full-screen overlay)",
      "Client Logo Grid with Grayscale-to-Color Hover Effects",
      "Contact Form Integration (name, email, message fields)",
      "Sticky Navigation with Scroll-State Transition",
    ],
    color: "bg-orange-300",
    gallery: ["projects/ui.spativm.jpg"],
    links: [
      {
        text: "Live Website",
        url: "https://pgnmas.co.id/spativm/",
        icon: <Globe size={14} />,
        className: "bg-orange-300 text-black hover:bg-orange-400",
      },
    ],
  },

  {
    title: "FileExpert - ANRI-Accredited Digital Archive & DOX Solution",
    category: "Web Development",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary:
      "Website for FileExpert, an ANRI-accredited digital archive & DOC (Optical Character Recognition) solution under PERMATA Group. This website presents the company's operations by visualizing 153,446 total archive boxes (2,500 large + 150,946 standard ANRI boxes), 15,010 boxes organized using ML-assisted methods, Rp25.96 Billion in revenue, and 12.72% year-on-year growth.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Neo-Brutalist Design (green-yellow high-contrast palette)",
      "CSS Keyframe Animations (infinite marquee, 35s linear)",
      "DOX OCR Technology Concept (Optical Character Recognition)",
      "ANRI Archival Standards (National Archive Accreditation)",
      "Feature Badge System (Zap icon with yellow fill)",
    ],
    color: "bg-green-300",
    gallery: ["projects/ui.filexpert.jpg"],
    links: [
      {
        text: "Live Website",
        url: "https://pgnmas.co.id/filexpert/",
        icon: <Globe size={14} />,
        className: "bg-green-300 text-black hover:bg-green-400",
      },
    ],
  },

  {
    title: "ArtBuild - Corporate Interior, Architecture & Construction Portal",
    category: "Web Development",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary:
      "Website for ArtBuild, a corporate interior, architecture & construction showcase portal under PERMATA Group. This website presents the company's portfolio by visualizing Rp38.25 Billion in 2024 revenue contribution, 5/8 tenders won (62.5% win rate), and strategic clients such as SKK Migas, Pertamina Group, and PGN.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Playfair Display Typography (Serif - headlines)",
      "Inter Font (Sans-Serif - body text)",
      "Video Background Integration (autoplay, loop, muted, playsinline with poster)",
      "Horizontal Scroll Project Gallery (scrollbar-hide, hover scale-110)",
      "Project Modal (full project list with internal/external sections)",
    ],
    color: "bg-purple-300",
    gallery: ["projects/ui.artbuild.jpg"],
    links: [
      {
        text: "Live Website",
        url: "https://pgnmas.co.id/artbuild/",
        icon: <Globe size={14} />,
        className: "bg-purple-300 text-black hover:bg-purple-400",
      },
    ],
  },

  // --- 2. UI/UX DESIGN ---

  {
    title: "LifeGen - Mobile Health & Wellness UI/UX Platform",
    category: "UI/UX Design",
    year: "2023",
    client: "INFEST 9.0 (Informatics Festival) USK — Competition Finalist",
    location: "Banda Aceh, Indonesia",
    summary:
      "Mobile app for LifeGen, a health & wellness platform recognized as a Project Finalist at INFEST 9.0 (Informatics Festival USK). This app presents an intuitive interface for tracking calorie intake, physical activity, and fitness community engagement to help users combat modern lifestyle diseases.",
    techStack: [
      "Figma (Hi-Fi Prototyping)",
      "Maze (Usability Testing)",
      "Mobile UI/UX Design",
      "User Flow Mapping",
      "Interaction Design",
      "Information Architecture",
    ],
    color: "bg-pink-300",
    gallery: ["life.png"],
    links: [],
  },

  {
    title: "LandConnect - Agricultural Land Provision & Connectivity Platform",
    category: "UI/UX Design",
    year: "2023",
    client: "Department of Electrical & Computer Engineering, Universitas Syiah Kuala",
    location: "Banda Aceh, Indonesia",
    summary:
      "Digital ecosystem for LandConnect, an agricultural land leasing & sales platform designed for the Department of Electrical & Computer Engineering, Universitas Syiah Kuala. This platform presents an integrated system for data-driven land transactions, geospatial mapping via Google Maps, live chat negotiation, and regional climate analysis.",
    techStack: [
      "Figma (Hi-Fi Prototyping)",
      "UX Flowcharts",
      "Systems Architecture",
      "User Research & Testing",
      "Value Proposition Canvas (VPC)",
      "Business Model Canvas (BMC)",
    ],
    color: "bg-purple-300",
    gallery: ["land.png"],
    links: [],
  },

  // --- 3. AR / VR ---

  {
    title: "Hardware AR (Bachelor's Thesis Project)",
    category: "AR / VR",
    year: "2026",
    institution: "Computer Engineering - Universitas Syiah Kuala",
    location: "Banda Aceh, Indonesia",
    summary:
      "Android app for Hardware AR, a markerless augmented reality project developed as the Bachelor's Thesis at Computer Engineering, Universitas Syiah Kuala. This app presents interactive 3D models of computer hardware (Motherboard, CPU, RAM, GPU) using Unity 3D and Vuforia SDK, with 360-degree rotation and zoom capabilities.",
    techStack: ["Unity3D", "Vuforia AR", "Blender 3D Modeling", "Android SDK"],
    color: "bg-orange-300",
    gallery: ["projects/ar.hardware.jpg"],
    links: [
      {
        text: "App, Walkthrough & Research Data",
        url: "https://drive.google.com/drive/folders/1d3CT7M3wk4dY-DI3fOsczbqzrCtGB6by?usp=sharing",
        icon: <ExternalLink size={14} />,
        className: "bg-orange-300 text-black hover:bg-orange-400",
      },
    ],
  },

  {
    title: "Web-Based Augmented Reality for BMKG Meteorological Equipment Education",
    category: "AR / VR",
    year: "2025",
    client: "Stasiun Meteorologi Kelas I Sultan Iskandar Muda Banda Aceh (BMKG)",
    location: "Banda Aceh, Indonesia",
    summary:
      "WebAR experience for BMKG, a meteorological education project developed for Stasiun Meteorologi Kelas I Sultan Iskandar Muda Banda Aceh. This experience presents interactive 3D models of meteorological equipment (such as the Campbell Stokes recorder) reconstructed from 40-50 photos using Meshroom photogrammetry, optimized in Blender, and published via Zapworks for instant mobile browser access via QR code.",
    techStack: [
      "Unity 3D",
      "Zapworks Studio",
      "Blender",
      "Meshroom (Photogrammetry)",
      "WebAR",
      "Interactive UI/UX",
    ],
    color: "bg-orange-300",
    gallery: ["bmkg2.png", "bmkg1.jpg"],
    links: [
      {
        text: "Video Demo",
        url: "https://drive.google.com/file/d/1V6obcvnr7jf35-M14eItzmC8sS8rudcz/view?usp=drive_link",
        icon: <Youtube size={14} />,
        className: "bg-red-100 text-black hover:bg-red-200",
      },
    ],
  },

  // --- 4. IOT SOLUTION ---

  {
    title: "Gula Cerdas",
    category: "IoT Solution",
    year: "2025 – 2026",
    institution: "Innovillage 2025 - Universitas Syiah Kuala",
    location: "Aceh Besar, Indonesia",
    summary:
      "IoT system for Gula Cerdas, a palm sugar production standardization project developed under Innovillage 2025 (Universitas Syiah Kuala). This system presents an ESP32-based solution using MAX6675 thermocouple sensors and INA219 current sensors to monitor boiling temperature and calculate liquid viscosity, with live data transmitted to a Firebase-powered web dashboard for remote monitoring. Selected among the Top 180 Funded Projects nationwide.",
    techStack: [
      "ESP32",
      "Firebase IoT",
      "MAX6675 / INA219",
      "Web Dashboard",
      "C++ / Arduino IDE",
    ],
    color: "bg-green-300",
    gallery: [
      "projects/gula1.jpeg",
      "projects/gula2.jpeg",
      "projects/gula3.jpeg",
      "certificate/innovillage.jpg",
    ],
    links: [
      {
        text: "Github Repo",
        url: "https://github.com/rifqiimt/Gula-Cerdas.git",
        icon: <Github size={14} />,
      },
      {
        text: "Video Demo",
        url: "https://www.youtube.com/@rifqimubaraktampeng5034/videos",
        icon: <Youtube size={14} />,
        className: "bg-red-100 text-black hover:bg-red-200",
      },
    ],
  },

  {
    title: "BridgeGuard",
    category: "IoT Solution",
    year: "2025",
    institution: "IoT Research Project",
    location: "Aceh, Indonesia",
    summary:
      "IoT device for BridgeGuard, a structural safety monitoring project developed as an IoT research initiative. This device presents a low-cost early-warning system using ESP32 and ADXL accelerometer sensors to detect bridge vibrations in real time, calculating RMS vibration frequencies and transmitting alerts via Firebase Realtime Database.",
    techStack: [
      "ESP32",
      "ADXL Accelerometer",
      "Firebase IoT",
      "Real-Time Telemetry",
    ],
    color: "bg-green-300",
    gallery: ["bg.jpeg"],
    links: [
      {
        text: "Github Repo",
        url: "https://github.com/rifqiimt/BridgeGuard.git",
        icon: <Github size={14} />,
      },
    ],
  },

  {
    title: "Smart Water Metering",
    category: "IoT Solution",
    year: "2024",
    institution: "Embedded Systems Project",
    location: "Aceh, Indonesia",
    summary:
      "Embedded system for Smart Water Metering, a residential water monitoring project developed as an embedded systems initiative. This device presents an Arduino Uno-based solution using precision water flow sensors to track cumulative water consumption in real time and trigger threshold alarms to help households detect pipe leaks early, reducing excess water waste by 30%.",
    techStack: [
      "Arduino Uno",
      "Water Flow Sensor",
      "C++ Embedded",
      "Hardware Assembly",
    ],
    color: "bg-green-300",
    gallery: ["swms.jpeg", "swm1.jpeg", "swm2.jpeg", "swm3.jpeg"],
    links: [],
  },
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
      "Resolved complex operational and logistics challenges during the highly intense 24-hour continuous Hackathon program, ensuring continuous mentor-student coordination and seamless event execution.",
    ],
    gallery: [
      "experience/cmd.png",
      "experience/cmd1.jpeg",
      "experience/cmd2.jpeg",
      "experience/cmd3.jpeg",
      "experience/cmd4.jpeg",
      "experience/cmd5.jpeg",
    ],
    techStack: [
      "Event Operations & Leadership",
      "Strategic Merchandising",
      "Financial Planning & Budgeting",
      "Vendor Negotiation",
      "Logistics Coordination",
      "Revenue Optimization",
    ],
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
      "Oversaw the program's budgeting, procurement of technical and raw materials, and co-drafted the final institutional Accountability Report (LPJ) to ensure complete fiscal transparency and program compliance.",
    ],
    gallery: ["pbmt.png"],
    techStack: [
      "Program Operations & Leadership",
      "IoT Fertigation (AFS)",
      "Water Security Engineering",
      "Community Relations",
      "Budgeting & Financial Reporting",
      "Sustainable Agriculture Systems",
    ],
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
      "Strengthened student community engagement through structured welfare assistance programs.",
    ],
    gallery: ["kesma.jpg", "kesma1.png"],
    techStack: ["Student Advocacy", "Public Communication", "Organization Mgmt"],
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
      "Maintained high visual standards across official student executive board publications.",
    ],
    gallery: ["humas.png"],
    techStack: ["Public Relations", "Branding", "Social Media Strategy"],
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
      "Achieved high participant satisfaction through an inspiring and technically engaging orientation model.",
    ],
    gallery: ["cmd1.jpeg"],
    techStack: ["Event Design", "Mentorship", "Workshop Planning"],
  },
];

export const certsData = [
  {
    isCert: true,
    title: "Public Speaking & Special Event Specialist",
    subtitle: "BPVP Bandung Barat / KEMNAKER RI",
    year: "2026",
    description:
      "Professional communication skills certification and training organized by the West Bandung Vocational and Productivity Training Center (BPVP) under the Indonesian Ministry of Manpower. This program tests and validates competencies in effective public speaking and systematic special event planning.",
    issuer: "BPVP Bandung Barat - Ministry of Manpower R.I.",
    keyInfo:
      "Passed the intensive training certification with the official Competency Unit achievement 'Executing Special Events' (Unit Code: M.70HMS00.028.3).",
    gallery: [
      "certificate/bpvp.jpg",
      "certificate/bpvp1.jpg",
      "certificate/bpvp2.jpg",
    ],
  },
  {
    isCert: true,
    title: "Innovillage 2025 - Top 180 Social Project",
    subtitle: "Telkom Indonesia & Witel",
    year: "2025",
    description:
      "A large-scale national digital social innovation competition organized by PT Telkom Indonesia. Passed the research funding selection for the 'Gula Cerdas' project (An IoT-based palm sugar production standardization and viscosity monitoring system for traditional farmer SMEs in Aceh).",
    issuer: "PT Telkom Indonesia (Persero) Tbk",
    keyInfo:
      "Secured Top 180 Innovillage 2025 national funding & implemented appropriate technology for SMEs.",
    gallery: ["certificate/innovillage.jpg"],
  },
  {
    isCert: true,
    title: "Bangkit Academy 2024",
    subtitle: "Google, GoTo, Traveloka",
    year: "2024",
    description:
      "An industry-standard certified independent study program in Machine Learning and AI development. Includes an in-depth understanding of data processing, predictive model creation, and a collaborative final Capstone Project with cross-disciplinary participants.",
    issuer: "Google, GoTo, & Traveloka (Kampus Merdeka)",
    keyInfo:
      "Graduated with a Google-standard competency certificate & completed an AI Capstone Project.",
    gallery: [
      "certificate/bangkit.jpg",
      "certificate/bangkit1.jpg",
      "certificate/bangkit2.jpg",
    ],
  },
  {
    isCert: true,
    title: "BNSP - IoT Engineer",
    subtitle: "BNSP / LSP TDI",
    year: "2024",
    description:
      "Official professional skill certification organized by the National Professional Certification Board (BNSP) through the Professional Certification Agency (LSP). Tests and validates technical expertise in designing, assembling, and implementing Internet of Things hardware and embedded networks.",
    issuer: "National Professional Certification Board (BNSP)",
    keyInfo:
      "Official national-scale competency certification as an IoT & Embedded System practitioner.",
    gallery: ["iot.jpg", "iot1.jpg"],
  },
  {
    isCert: true,
    title: "Skill Academy CAMP",
    subtitle: "Ruangguru",
    year: "2023",
    description:
      "Intensive User Interface and User Experience (UI/UX) design bootcamp based on Design Thinking. Covers user research, wireframing, design system creation, and high-fidelity interactive prototyping using Figma.",
    issuer: "Skill Academy by Ruangguru",
    keyInfo:
      "Completed a UI/UX project portfolio validated through usability testing.",
    gallery: ["camp.jpg", "camp1.jpg"],
  },
  {
    isCert: true,
    title: "KORIKA AI Webinar",
    subtitle: "KORIKA",
    year: "2024",
    description:
      "Artificial Intelligence (AI) technology webinar and training organized by the Indonesian Artificial Intelligence Research and Innovation Collaboration (KORIKA), exploring the implementation of AI algorithms in weather and climate prediction modeling in Indonesia.",
    issuer: "KORIKA Indonesia",
    keyInfo:
      "In-depth insights into the integration of artificial intelligence in meteorology.",
    gallery: ["korika.jpg"],
  },
  {
    isCert: true,
    title: "National Science Olympiad",
    subtitle: "Ministry of Education",
    year: "High School",
    description:
      "A prestigious student-level science competition organized by the Indonesian Ministry of Education and Culture. Won an award in the Informatics (Computer) field, which tests algorithmic logic and problem-solving (competitive programming).",
    issuer: "Ministry of Education and Culture R.I.",
    keyInfo:
      "Winner of the district/city level algorithm and programming competition.",
    gallery: ["osn.jpg"],
  },
];

export const internshipsList = [
  {
    title: "PGNMAS",
    period: "Jan 2026 – Apr 2026",
    role: "IT Support & Web Developer Intern",
    company: "PT Permata Graha Nusantara",
    location: "Jakarta, Indonesia",
    logo: "experience/pgnmas.jpeg",
    coreScope:
      "IT Infrastructure Support, Corporate Web Platform Development & Webinar Moderation",
    responsibilities: [
      "Supported daily corporate IT infrastructure operations, hardware/software troubleshooting, and system license compliance checks across internal departments.",
      "Designed and developed 4 production-ready corporate web platforms (Fleedy, ArtBuild, FileExpert, and Spativm) using React.js and Tailwind CSS, while generating static HTML5 bundles to comply with corporate server deployment standards.",
      "Trusted by corporate leadership to moderate 2 official knowledge-sharing webinars ('Cross Sharing' on AI and 'Pairing' on Digital Cybersecurity), facilitating high-level discussions between university professors and corporate executives.",
      "Managed corporate digital assets, shared file accessibility, and employee workstation configurations to streamline daily business support operations.",
    ],
    tags: ["IT Support", "React.js", "Front-End"],
    caseStudyData: {
      title: "PT Permata Graha Nusantara (PGNMAS)",
      role: "IT Support & Web Developer Intern",
      year: "Januari 2026 – April 2026",
      institution: "PT Permata Graha Nusantara",
      location: "Jakarta, Indonesia",
      summary:
        "Completed a regular professional internship at PT Permata Graha Nusantara (PGNMAS) supporting enterprise IT operations, moderating corporate webinars, and leading front-end web development for corporate platforms.",
      details: [
        "Supported daily corporate IT infrastructure operations, hardware/software troubleshooting, and system license compliance checks across internal departments.",
        "Designed and developed 4 production-ready corporate web platforms (Fleedy, ArtBuild, FileExpert, and Spativm) using React.js and Tailwind CSS, while generating static HTML5 bundles to comply with corporate server deployment standards.",
        "Trusted by corporate leadership to moderate 2 official knowledge-sharing webinars ('Cross Sharing' on AI and 'Pairing' on Digital Cybersecurity), facilitating high-level discussions between university professors and corporate executives.",
        "Managed corporate digital assets, shared file accessibility, and employee workstation configurations to streamline daily business support operations.",
      ],
      gallery: [
        "experience/pgnmas.jpg",
        "experience/pgnmas1.jpg",
        "experience/pgnmas2.jpg",
        "experience/pgnmas3.jpg",
      ],
      techStack: [
        "React.js",
        "Tailwind CSS",
        "IT Support",
        "Front-End Development",
        "Webinar Moderation",
        "System Admin",
        "Static HTML5",
      ],
    },
    links: [
      {
        text: "View Case Study",
        url: "#", // placeholder — nanti diganti dengan detail page kalau ada
        icon: <ExternalLink size={14} />,
        className: "bg-yellow-300 text-black hover:bg-yellow-400",
      },
    ],
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
      "Assisted IT department with daily hardware/network operations and technical sensor data processing.",
    ],
    tags: ["WebAR", "Unity 3D"],
    caseStudyData: {
      title: "BMKG Kelas I SIM Banda Aceh",
      role: "AR & WebAR Developer Intern",
      year: "2025",
      institution: "Stasiun Meteorologi Kelas I Sultan Iskandar Muda Banda Aceh (BMKG)",
      location: "Banda Aceh, Indonesia",
      summary:
        "Completed a technical internship at BMKG Class I Meteorological Station SIM Banda Aceh, leading the development of Web-Based Augmented Reality (WebAR) educational media.",
      details: [
        "Designed and developed an interactive Web-Based Augmented Reality (WebAR) educational application to visualize complex meteorological equipment (such as Campbell Stokes) as interactive 3D models.",
        "Reconstructed high-fidelity 3D assets from physical photos using Meshroom photogrammetry engine and optimized topology/texturing in Blender for mobile browser performance.",
        "Engineered spatial scenes and UI overlays in Unity and published via Zapworks Studio for instant QR code browser access without app installation.",
        "Assisted IT department with daily hardware/network operations and technical sensor data processing.",
      ],
      gallery: ["bmkg1.jpg", "bmkg2.png"],
      techStack: [
        "Unity 3D",
        "Zapworks Studio",
        "Blender",
        "Meshroom",
        "WebAR",
        "Network Admin",
      ],
    },
    links: [
      {
        text: "View Case Study",
        url: "#",
        icon: <ExternalLink size={14} />,
        className: "bg-yellow-300 text-black hover:bg-yellow-400",
      },
    ],
  },
];
