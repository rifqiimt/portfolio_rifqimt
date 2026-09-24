import React from 'react';
import { Globe, Github, Youtube, ExternalLink, Code } from 'lucide-react';

export const projectsData = [
  // === WEB DEVELOPMENT ===

  {
    title: "Fleedy — Corporate Fleet & Transportation Management Platform",
    category: "Web Development",
    subtitle: "Corporate Landing Page / Transportation Management Services",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary: "Website for Fleedy, a fleet & transportation management service under PERMATA Group. This website presents the company's operations by visualizing 964 vehicles (764 internal + 200 external), 19.16% year-on-year asset growth, Rp153.05 Billion in 2024 business revenue, and a total asset value of Rp189.88 Billion.",
    details: [
      "Built using React.js for a component-based page structure that is easy to scale and maintain",
      "Used Tailwind CSS for consistent styling across all sections",
      "Used Lucide Icons for icons in dashboards and navigation",
      "Created an interactive client logo grid with hover effect (grayscale → full color) to showcase corporate client social proof",
      "Built responsive multi-device navigation for mobile and desktop"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Lucide Icons"
    ],
    color: "bg-blue-300",
    gallery: ["projects/ui.fleedy.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/fleedy/", icon: <Globe size={14} />, className: "bg-blue-300 text-black hover:bg-blue-400" }
    ]
  },

  {
    title: "Spativm — Regional Facility & Building Management Portal",
    category: "Web Development",
    subtitle: "Corporate Web Portal / Facility Management Services",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary: "Website for SPATIVM, a facility & building management service under PERMATA Group. This website presents the company's operations by visualizing Rp425+ Million in facility management revenue, 20.35% year-on-year growth, and 419,000+ m² of managed space (including 228K m² building area and 191K m² empty land), along with core services: Building Maintenance, Housekeeping & Hygiene, HSE & Security, and Office Support.",
    details: [
      "Built using React.js for a component-based page structure that is easy to scale and maintain",
      "Used Tailwind CSS for consistent styling across all sections",
      "Used Lucide Icons for icons in dashboards and navigation",
      "Created an interactive client logo grid with hover effect (grayscale → full color) to showcase corporate client social proof",
      "Built responsive multi-device navigation for mobile and desktop"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Lucide Icons"
    ],
    color: "bg-blue-300",
    gallery: ["projects/ui.spativm.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/spativm/", icon: <Globe size={14} />, className: "bg-blue-300 text-black hover:bg-blue-400" }
    ]
  },

  {
    title: "FileExpert — ANRI-Accredited Digital Archive & DOC Solution",
    category: "Web Development",
    subtitle: "B2B Digital Solution / Archive Management Web Platform",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary: "Website for FileExpert, an ANRI-accredited digital archive & DOC (Optical Character Recognition) solution under PERMATA Group. This website presents the company's operations by visualizing 153,446 total archive boxes (2,500 large + 150,946 standard ANRI boxes), 15,010 boxes organized using ML-assisted methods, Rp25.96 Billion in revenue, and 12.72% year-on-year growth.",
    details: [
      "Built using React.js for a component-based page structure that is easy to scale and maintain",
      "Used Tailwind CSS for consistent styling across all sections",
      "Used Lucide Icons for icons in dashboards and navigation",
      "Created an animated client marquee with hover effect to showcase corporate client social proof",
      "Built responsive multi-device navigation for mobile and desktop"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Lucide Icons"
    ],
    color: "bg-blue-300",
    gallery: ["projects/ui.filexpert.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/filexpert/", icon: <Globe size={14} />, className: "bg-blue-300 text-black hover:bg-blue-400" }
    ]
  },

  {
    title: "ArtBuild — Corporate Interior, Architecture & Construction Portal",
    category: "Web Development",
    subtitle: "Design & Build Showcase / Web Application",
    year: "2026",
    client: "PT Permata Graha Nusantara (PERMATA / PGN Group)",
    location: "Jakarta, Indonesia",
    summary: "Website for ArtBuild, a corporate interior, architecture & construction showcase portal under PERMATA Group. This website presents the company's portfolio by visualizing Rp38.25 Billion in 2024 revenue contribution, 5/8 tenders won (62.5% win rate), and strategic clients such as SKK Migas, Pertamina Group, and PGN.",
    details: [
      "Built using React.js for a component-based page structure that is easy to scale and maintain",
      "Used Tailwind CSS for consistent styling across all sections",
      "Used Lucide Icons for icons in dashboards and navigation",
      "Created a scrollable project gallery with zoom-on-hover effect",
      "Built responsive multi-device navigation for mobile and desktop"
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Lucide Icons"
    ],
    color: "bg-blue-300",
    gallery: ["projects/ui.artbuild.jpg"],
    links: [
      { text: "Live Website", url: "https://pgnmas.co.id/artbuild/", icon: <Globe size={14} />, className: "bg-blue-300 text-black hover:bg-blue-400" }
    ]
  },

  // === UI/UX DESIGN ===

  {
    title: "LifeGen — Mobile Health & Wellness UI/UX Platform",
    category: "UI/UX Design",
    subtitle: "Product Design (UI/UX) / Mobile Application Prototype",
    year: "2023",
    client: "INFEST 9.0 (Informatics Festival) USK — Competition Finalist",
    location: "Banda Aceh, Indonesia",
    summary: "Design for LifeGen, a mobile health & wellness platform that was a finalist in the INFEST 9.0 USK competition. This project presents the product concept by showcasing key features: an automated calorie calculator, physical activity tracker, and interactive fitness community. A mobile-first design focused on usability and accessibility.",
    details: [
      "Used Figma for high-fidelity prototype creation",
      "Used Maze for usability testing",
      "Used Value Proposition Canvas (VPC) to understand user needs",
      "Created a clear user flow from start to end of user experience",
      "Structured information architecture for clarity"
    ],
    techStack: [
      "Figma",
      "Maze",
      "Value Proposition Canvas (VPC)",
      "User Flow Mapping",
      "Interaction Design",
      "Information Architecture"
    ],
    color: "bg-red-300",
    gallery: ["life.png"]
  },

  {
    title: "LandConnect — Agricultural Land Provision & Connectivity Platform",
    category: "UI/UX Design",
    subtitle: "Product Design (UI/UX) & Systems Engineering",
    year: "2023",
    client: "Department of Electrical & Computer Engineering, Universitas Syiah Kuala",
    location: "Banda Aceh, Indonesia",
    summary: "Design for LandConnect, an agricultural land connectivity platform built for USK. This project presents the product concept by showcasing key features: interactive location mapping (Google Maps), negotiation live chat, and micro-climate analytics widget. A mobile-first design focused on usability and accessibility.",
    details: [
      "Used Figma for high-fidelity prototype creation",
      "Used Value Proposition Canvas (VPC) to understand user needs",
      "Used Business Model Canvas (BMC) to design the business model",
      "Created a clear user flow from start to end of user experience",
      "Structured system architecture information for clarity"
    ],
    techStack: [
      "Figma",
      "Value Proposition Canvas (VPC)",
      "Business Model Canvas (BMC)",
      "User Flow Mapping",
      "Systems Architecture",
      "User Research & Testing"
    ],
    color: "bg-red-300",
    gallery: ["land.png"]
  },

  // === AR / VR ===

  {
    title: "Hardware AR (Bachelor's Thesis Project)",
    category: "AR / VR",
    subtitle: "Augmented Reality Developer",
    year: "2026",
    institution: "Computer Engineering — Universitas Syiah Kuala",
    location: "Banda Aceh, Indonesia",
    summary: "AR project for Hardware AR, a thesis project displaying 3D models of computer hardware components (Motherboard, CPU, RAM, GPU) that can be interactively explored. Built using Unity 3D and the Vuforia SDK to create a markerless AR experience on Android.",
    details: [
      "Used Unity 3D as the AR engine",
      "Used Vuforia SDK for marker detection and tracking",
      "Used Blender 3D to create 3D models of hardware components",
      "Provided interactive features such as 360° rotation and zoom",
      "Displayed information about the function and specifications of each component"
    ],
    techStack: [
      "Unity 3D",
      "Vuforia AR",
      "Blender 3D",
      "Android SDK"
    ],
    color: "bg-black-300",
    gallery: ["projects/ar.hardware.jpg"],
    links: [
      { text: "Source Code", url: "https://drive.google.com/drive/folders/1d3CT7M3wk4dY-DI3fOsczbqzrCtGB6by", icon: <Code size={14} />, className: "bg-orange-300 text-black hover:bg-orange-400" }
    ]
  },

  {
    title: "Web-Based Augmented Reality for BMKG Meteorological Equipment Education",
    category: "AR / VR",
    subtitle: "Web-Based Augmented Reality (WebAR) / 3D Interaction",
    year: "2025",
    client: "Class I Meteorological Station Sultan Iskandar Muda Banda Aceh (BMKG)",
    location: "Banda Aceh, Indonesia",
    summary: "Website for the BMKG WebAR project, which displays an interactive 3D visualization of meteorological equipment (Campbell Stokes recorder) accessible through a browser. This project presents the results of photogrammetry from 40–50 photos taken of physical equipment, processed using Meshroom and Blender, then published via Zapworks Studio for access through QR code.",
    details: [
      "Used Unity 3D to build the AR scene and UI overlay",
      "Used Zapworks Studio for WebAR publication",
      "Used Blender to optimize 3D models from photogrammetry",
      "Used Meshroom for the photogrammetry process from physical photos",
      "Provided access without app installation via browser (Chrome/Safari)"
    ],
    techStack: [
      "Unity 3D",
      "Zapworks Studio",
      "Blender",
      "Meshroom",
      "WebAR",
      "Interactive UI/UX"
    ],
    color: "bg-black-300",
    gallery: ["bmkg2.png"],
    links: [
      { text: "Live Demo", url: "https://drive.google.com/file/d/1V6obcvnr7jf35-M14eItzmC8sS8rudcz/view?usp=drive_link", icon: <Youtube size={14} />, className: "bg-red-300 text-black hover:bg-red-400" }
    ]
  },

  // === IOT SOLUTIONS ===

  {
    title: "Gula Cerdas",
    category: "IoT Solution",
    subtitle: "IoT Solution & Cloud Integration",
    year: "2025 — 2026",
    institution: "Innovillage 2025 — Universitas Syiah Kuala",
    location: "Aceh Besar, Indonesia",
    summary: "Website for Gula Cerdas, an IoT-based palm sugar production standardization solution featuring Thermistor sensors, current sensors, and a web dashboard for remote monitoring. This project was selected as one of the Top 180 Funded Projects at Innovillage 2025.",
    details: [
      "Used ESP32 as the main microcontroller",
      "Used Firebase Realtime Database for cloud storage and real-time monitoring",
      "Used MAX6675 sensor for accurate temperature measurement",
      "Used INA219 sensor for current measurement and viscosity calculation",
      "Provided a web dashboard for remote monitoring of cooking parameters"
    ],
    techStack: [
      "ESP32",
      "Firebase IoT",
      "MAX6675 / INA219",
      "Web Dashboard",
      "C++ / Arduino IDE"
    ],
    color: "bg-green-300",
    gallery: ["projects/gula1.jpeg", "projects/gula2.jpeg", "projects/gula3.jpeg"],
    links: [
      { text: "Github Repo", url: "https://github.com/rifqiimt/Gula-Cerdas.git", icon: <Github size={14} />, className: "bg-black-300 text-black hover:bg-black-400" }, { text: "Live Demo", url: "https://www.youtube.com/@rifqimubaraktampeng5034/videos", icon: <Youtube size={14} />, className: "bg-red-300 text-black hover:bg-red-400" }
    ]
  },

  {
    title: "BridgeGuard",
    category: "IoT Solution",
    subtitle: "Structural Safety Monitoring IoT",
    year: "2025",
    institution: "IoT Research Project",
    location: "Aceh, Indonesia",
    summary: "Website for BridgeGuard, an IoT device for structural vibration monitoring of bridges using ADXL accelerometer sensors. This project presents the main function: early detection of structural vibrations, real-time Root Mean Square (RMS) vibration frequency calculation, and anomaly notification via Firebase Realtime Database.",
    details: [
      "Used ESP32 as the main microcontroller",
      "Used Firebase Realtime Database for cloud storage and real-time monitoring",
      "Used ADXL accelerometer sensor for vibration detection",
      "Used C++ / Arduino IDE for embedded programming",
      "Provided real-time structural vibration anomaly notifications"
    ],
    techStack: [
      "ESP32",
      "ADXL Accelerometer",
      "Firebase IoT",
      "Real-Time Telemetry",
      "C++ Embedded"
    ],
    color: "bg-green-300",
    gallery: ["bg.jpeg"],
    links: [
      { text: "Github Repo", url: "https://github.com/rifqiimt/BridgeGuard.git", icon: <Github size={14} />, className: "bg-black-300 text-black hover:bg-black-400" }, { text: "Live Demo", url: "https://www.youtube.com/@muhammadabiyyu3010/shorts", icon: <Youtube size={14} />, className: "bg-red-300 text-black hover:bg-red-400" }
    ]
  },

  {
    title: "Smart Water Metering",
    category: "IoT Solution",
    subtitle: "Embedded Hardware Project",
    year: "2024",
    institution: "Embedded Systems Project",
    location: "Aceh, Indonesia",
    summary: "Website for Smart Water Metering, a household water usage monitoring system based on Arduino Uno, designed to detect pipe leaks and prevent water waste. This project presents the main features: real-time water flow monitoring, cumulative consumption calculation, and usage threshold alerts.",
    details: [
      "Used Arduino Uno as the main microcontroller",
      "Used a water flow sensor for water flow measurement",
      "Used C++ Embedded for firmware programming",
      "Provided a tool to identify undetected pipe leaks",
      "Reported to reduce household water waste by 30%"
    ],
    techStack: [
      "Arduino Uno",
      "Water Flow Sensor",
      "C++ Embedded",
      "Hardware Assembly"
    ],
    color: "bg-green-300",
    gallery: ["swms.jpeg", "swm1.jpeg", "swm2.jpeg", "swm3.jpeg"],
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