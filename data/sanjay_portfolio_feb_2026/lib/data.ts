export const bio = {
  name: "Sanjay Naik",
  title: "Senior Software Engineer (Backend & GenAI)",
  roles: [
    "Senior Software Engineer",
    "Backend Developer",
    "GenAI Specialist",
    "Microservices Architect",
  ],
  tagline: "Strategic Senior Software Engineer with over 3.5 years of experience in architecting high-concurrency microservices and integrating Generative AI to optimize the SDLC. Expert in building fault-tolerant healthcare platforms using Java, Spring Boot, and Python.",
  location: "India",
  phone: "+91 9337371185",
  email: "sanjaynaik.work@gmail.com",
  summary: "Strategic Senior Software Engineer with over 3.5 years of experience in architecting high-concurrency microservices and integrating Generative AI to optimize the SDLC. Expert in building fault-tolerant healthcare platforms using Java, Spring Boot, and Python, with a specialized focus on AI-driven clinical summarization and FHIR/OpenEHR data standards. Proven track record in reducing development cycles by 60% through automation and cost-optimizing LLM orchestration for millions of users.",
  social: {
    linkedin: "https://www.linkedin.com/in/sanjaynaikdev/",
    github: "https://github.com/snaik4398",
    website: "https://www.sanjaydev.online/",
    twitter: "https://x.com/sanjaynaik10467",
  },
  resumeLink: "https://drive.google.com/file/d/16tv8xN5NwBNYtnmLBbdUaCsZ6snkNwur/view",
  resumeUrl: "https://drive.google.com/file/d/16tv8xN5NwBNYtnmLBbdUaCsZ6snkNwur/view",
};

export const skills = [
  {
    title: "Languages",
    items: [
      { name: "Java" },
      { name: "Python" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "C++" },
    ],
  },
  {
    title: "Backend & AI",
    items: [
      { name: "Spring Boot" },
      { name: "Microservices Architecture" },
      { name: "LLM Orchestration" },
      { name: "Prompt Engineering" },
      { name: "NLP Summarization" },
      { name: "FastAPI" },
      { name: "Django" },
    ],
  },
  {
    title: "Healthcare Tech",
    items: [
      { name: "FHIR (HL7)" },
      { name: "OpenEHR" },
      { name: "EHR/EMR Interoperability" },
      { name: "Clinical Data Standardization" },
    ],
  },
  {
    title: "Databases & Messaging",
    items: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Apache Kafka" },
      { name: "Debezium (CDC)" },
      { name: "Elasticsearch" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, S3)" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD Pipelines" },
      { name: "SonarQube" },
      { name: "Jenkins" },
    ],
  },
  {
    title: "Tools & Design",
    items: [
      { name: "Factory Design Pattern" },
      { name: "System Design (HLD/LLD)" },
      { name: "Postman Automation" },
      { name: "Git" },
      { name: "LiquiBase" },
      { name: "Swagger" },
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Jio Platform Limited",
    location: "Bengaluru, India",
    period: "October 2024 – Present",
    logo: "/images/jio_logo.png",
    achievements: [
      "Engineered an AI-Driven Development Framework using custom orchestration rules, reducing development time by 60% through automated Architectural Compliance and dependency management.",
      "Architected a Clinical AI Summarization Engine to synthesize longitudinal EHR data and patient journeys, significantly enhancing diagnostic efficiency for medical practitioners.",
      "Implemented a Healthcare Data Extraction Platform using the Factory Design Pattern to map unstructured reports to FHIR and OpenEHR standards for clinical interoperability.",
      "Developed an intelligent AI Rate Limiter to optimize LLM API consumption, resulting in a 40% reduction in cloud operational costs while maintaining High Availability.",
      "Automated the generation of chained API Test Collections for Regression Suit from Swagger/OpenAPI documentation, reducing manual QA preparation effort by 50%.",
      "Modernized a legacy Omnichannel Communication System to support Multi-tenant sender profiles, enabling seamless concurrent patient engagement across teams.",
      "Established an automated Technical Documentation Framework integrated with the live codebase to ensure 100% architectural visibility and system Scalability.",
      "Led Technical Governance and mentorship through code reviews and Knowledge Transfer (KT) sessions, improving team sprint velocity by 40%.",
      "Engineered a scalable architecture by conducting POCs for Kong API Gateway (v3.x+) and integrated the Konga Dashboard with a decoupled PostgreSQL data layer for performance.",
    ],
    tags: ["Java", "Spring Boot", "LLM", "FHIR", "OpenEHR", "Kong Gateway", "PostgreSQL", "Microservices"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Jio Platform Limited",
    location: "Bengaluru, India",
    period: "June 2023 – October 2024",
    logo: "/images/jio_logo.png",
    achievements: [
      "Engineered a high-throughput Medical Reporting Engine using Java Multithreading and the iText PDF library, supporting 21+ oncology encounter types for 80+ partner hospitals.",
      "Implemented a fault-tolerant Change Data Capture (CDC) microservice using Debezium and Kafka, achieving sub-3-second sync latency between MongoDB and PostgreSQL.",
      "Reduced high-load query execution time by 80% (2.5s to under 500ms) by optimizing Hibernate model joins and implementing custom result models to eliminate unnecessary fetch cycles.",
      "Designed and delivered an end-to-end ePRO (Electronic Patient Reported Outcomes) microservice, including HLD/LLD and real-time synchronization across 5 distributed services.",
      "Mitigated 200+ security vulnerabilities using SonarQube, improving code quality scores by 40% and ensuring strict HIPAA and security compliance.",
      "Built a real-time Communication Log Dashboard to monitor messaging webhooks, reducing debugging time by 70% through Automated Failure Analysis and alerting.",
      "Developed clinical risk scoring algorithms within the Patient Data Microservice, integrating configurable validation rules for Oncology Treatment Decision Support.",
      "Automated database schema evolution using LiquiBase across 20 microservices, enabling Zero-Downtime Deployments and eliminating manual configuration errors.",
    ],
    tags: ["Java", "Multithreading", "Kafka", "Debezium", "PostgreSQL", "MongoDB", "iText PDF", "LiquiBase"],
  },
  {
    id: 3,
    role: "Application Developer (Intern)",
    company: "Karkinos Health Care Private Limited (Now Jio Health)",
    location: "Bengaluru, India",
    period: "Oct 2022 – June 2023",
    logo: "/images/karkinos_logo.png",
    achievements: [
      "Developed stateless REST APIs using Java Spring Boot, contributing to core feature releases with 100% on-time delivery across multiple development environments.",
      "Collaborated across the full SDLC, driving requirement analysis, Unit Testing, and the preparation of comprehensive technical release notes for Production Deployments.",
      "Built internal web applications using the Flask Framework to streamline operational workflows, demonstrating versatility in Full-Stack Development alongside primary backend responsibilities.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "Flask", "PostgreSQL", "MongoDB", "Docker"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Clinical AI Summarization Engine",
    description: "Architected a Clinical AI Engine using LLMs and Prompt Engineering to synthesize longitudinal patient EHR data, enhancing diagnostic efficiency for medical practitioners.",
    tags: ["Java", "Spring Boot", "Python", "LLM", "EHR Integration", "HIPAA Compliance"],
    highlights: [
      "Ensured strict HIPAA Compliance and Data Privacy protocols",
      "Processing sensitive clinical informatics to streamline encounter journeys",
    ],
    featured: true,
    size: "large",
    github: undefined,
    link: undefined,
  },
  {
    id: 2,
    title: "Microservices Video Transcoding System",
    description: "Engineered a scalable Microservices Architecture to process HD video conversions, optimizing processing speed by 8x using FFmpeg with GPU acceleration.",
    tags: ["Java 21", "Spring Boot 3.3", "Kafka", "FFmpeg", "Redis", "Docker"],
    highlights: [
      "Implemented Event-Driven Architecture using Apache Kafka",
      "Redis for high-availability caching of job states"
      
    ],
    featured: true,
    size: "medium",
    github: undefined,
    link: undefined,
  },
  {
    id: 3,
    title: "LiquiBase Script Automation Tool",
    description: "Developed an internal DevOps Automation tool using Java and Spring Boot to auto-generate LiquiBase migration scripts, reducing manual effort by 80%.",
    tags: ["Java", "Spring Boot", "LiquiBase", "Shell Scripting", "DevOps"],
    highlights: [
      "Optimized Schema Management for audit and archive tables",
      "Eliminating human errors in SQL Optimization and database versioning",
    ],
    featured: true,
    size: "small",
    github: undefined,
    link: undefined,
  },
  {
    id: 4,
    title: "Octave - Dynamic Music Web Application",
    description: "Built a Full-Stack music streaming platform using ReactJS and Serverless Architecture, managing 1000+ active users via Firebase.",
    tags: ["ReactJS", "Firebase", "Cloud Firestore", "Authentication"],
    link: "https://octave-music.web.app",
    highlights: [
      "Utilized Cloud Firestore for Real-time Data Synchronization",
      "Secure user authentication across multiple client sessions",
    ],
    featured: true,
    size: "medium",
    github: undefined,
  },
  {
    id: 5,
    title: "Black & White Image Colorization",
    description: "Developed a Deep Learning pipeline using GAN architecture and CNNs to restore and colorize historical photographs.",
    tags: ["Python", "CNN", "GAN", "TensorFlow", "OpenCV", "Computer Vision"],
    highlights: [
      "Leveraged TensorFlow and OpenCV for Computer Vision processing",
      "Achieving 85% color accuracy on validation datasets",
    ],
    featured: true,
    size: "small",
    github: undefined,
    link: undefined,
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    school: "Vellore Institute of Technology (VIT)",
    location: "Vellore, Tamil Nadu",
    period: "Sept 2021 – July 2023",
    grade: "CGPA: 8.57 / 10.0",
    logo: "/images/vit_logo.png",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science (B.Sc)",
    school: "Government Autonomous College",
    location: "Rourkela, Odisha",
    period: "Aug 2017 – Oct 2020",
    grade: "CGPA: 8.60 / 10.0",
    logo: "/images/govt_clg_logo.png",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Extending, Securing, and Dockerizing Spring Boot Microservices",
    issuer: "LinkedIn Learning",
    description: "Advanced course covering microservices security patterns, containerization strategies, and production-ready deployment techniques for enterprise Spring Boot applications.",
    link: "https://www.linkedin.com/learning/certificates/64c1ba3501d0049f8b251eb82a5a24cbefa90160ae7f7a3d255a9478ab12b93e",
  },
  {
    id: 2,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    description: "Foundational certification covering core concepts of Generative AI, LLM architectures, prompt engineering, and practical applications in real-world scenarios.",
    link: "https://coursera.org/share/ebfaca1757c9f56727b3ac71288bf579",
  },
  {
    id: 3,
    title: "Data Structures",
    issuer: "Coursera",
    description: "Comprehensive study of fundamental data structures including arrays, linked lists, trees, graphs, and their algorithmic implementations for efficient problem-solving.",
    link: "https://www.coursera.org/account/accomplishments/certificate/5GSATYWVG27M",
  },
  {
    id: 4,
    title: "Blockchain and its Applications",
    issuer: "NPTEL (IIT Kharagpur)",
    description: "In-depth exploration of blockchain technology, distributed ledger systems, consensus mechanisms, and real-world applications in finance and supply chain.",
    link: "https://drive.google.com/file/d/13pvP0DFmRIkCVOfSNh1a6VwH0ucNYirY/view",
  },
];
