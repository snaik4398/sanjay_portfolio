/* ============================================================================
 *  THE ONLY FILE YOU EDIT.
 *
 *  Every word, link, job, degree, skill, certificate and project on this site
 *  is defined below. No copy is hard-coded in a component, and `astro.config.ts`
 *  imports SITE.url from here, so the domain is set in exactly one place too.
 *
 *  Sourced from the LaTeX resume at
 *  TestingArea/Resume/overleaf/sanjay aug 2 page.tex (built August 2026).
 *
 *  The phone number on that resume is deliberately absent. A resume goes to
 *  named recipients; this page is crawlable, and a published number attracts
 *  scrapers. Email and LinkedIn are the contact paths.
 * ========================================================================== */

/* ---------------------------------------------------------------- 1. SITE  */

export const SITE = {
  /** Set this before the first deploy. astro.config.ts reads it from here. */
  url: 'https://example.com',
  title: 'Sanjay Naik',
  tagline: 'Senior Backend Engineer',
  description:
    'Sanjay Naik, Senior Backend Engineer. Four years building distributed, fault-tolerant microservices and REST APIs in Java and Spring Boot: event-driven architecture on Kafka and CDC, PostgreSQL and MongoDB optimisation, multi-tenant OAuth2 and Kong API gateway policy.',
  keywords: [
    'Sanjay Naik',
    'Senior Backend Engineer',
    'Java backend developer',
    'Spring Boot developer',
    'microservices',
    'event-driven architecture',
    'Apache Kafka',
    'PostgreSQL',
    'MongoDB',
    'Keycloak',
    'Kong API Gateway',
  ],
} as const;

/** Section anchors on the home page, in document order. */
export const NAV_LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#education', label: 'Education' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const STORAGE_KEYS = { theme: 'portfolio:theme' } as const;

/* ----------------------------------------------------------------- 2. BIO  */

export const BIO = {
  name: 'Sanjay Naik',
  /** The headline designation shown in the hero eyebrow. */
  title: 'Senior Backend Engineer',
  location: 'Bangalore, India',
  /** Cycled by the hero rotator. Static list under reduced motion. */
  roles: [
    'Senior Backend Engineer',
    'Java & Spring Boot Developer',
    'Event-Driven Systems Engineer',
    'Distributed Systems Engineer',
  ],
  description:
    'Backend engineer with 4 years building distributed, fault-tolerant microservices and REST APIs in Java and Spring Boot, promoted twice in three years from SDE 1 to platform ownership. I work across event-driven architecture on Kafka and CDC, database optimisation on PostgreSQL and MongoDB, multi-tenant OAuth2, and API gateway policy on Kong.',
  email: 'sanjaynaik.work@gmail.com',
  github: 'https://github.com/snaik4398',
  resume: 'https://drive.google.com/file/d/16tv8xN5NwBNYtnmLBbdUaCsZ6snkNwur/view',
  linkedin: 'https://www.linkedin.com/in/sanjaynaikdev/',
  // twitter: 'https://x.com/sanjaynaik10467',
  // insta: 'https://www.instagram.com/san0_0_/',
} as const;

export interface Social {
  label: string;
  href: string;
  /** Inline SVG path data on a 24x24 viewBox. */
  icon: string;
}

export const SOCIALS: Social[] = [
  {
    label: 'GitHub',
    href: BIO.github,
    icon: 'M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z',
  },
  {
    label: 'LinkedIn',
    href: BIO.linkedin,
    icon: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z',
  },
  // {
  //   label: 'X',
  //   href: BIO.twitter,
  //   icon: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z',
  // },
  // {
  //   label: 'Instagram',
  //   href: BIO.insta,
  //   icon: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z',
  // },
];

/* -------------------------------------------------------------- 3. SKILLS  */

export interface Skill {
  name: string;
  /**
   * devicon slug, e.g. "java/java-original". Omit it and the chip renders as
   * text only, which is the right answer for the many platform skills that have
   * no logo (RBAC, HLD/LLD, Fault Tolerance).
   */
  icon?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

/** All logos resolve from one origin, preconnected in BaseHead. */
export const iconUrl = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}.svg`;

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: 'java/java-original' },
      { name: 'Python', icon: 'python/python-original' },
      { name: 'SQL' },
      { name: 'TypeScript', icon: 'typescript/typescript-original' },
      { name: 'JavaScript', icon: 'javascript/javascript-original' },
      { name: 'Lua', icon: 'lua/lua-original' },
    ],
  },
  {
    title: 'Backend & Distributed Systems',
    skills: [
      { name: 'Spring Boot', icon: 'spring/spring-original' },
      { name: 'Microservices' },
      { name: 'RESTful API Design' },
      { name: 'System Design (HLD/LLD)' },
      { name: 'Event-Driven Architecture' },
      { name: 'Concurrency & Multithreading' },
      { name: 'Scalability' },
      { name: 'Fault Tolerance' },
      { name: 'FastAPI', icon: 'fastapi/fastapi-original' },
      { name: 'Flask', icon: 'flask/flask-original' },
    ],
  },
  {
    title: 'Data & Messaging',
    skills: [
      { name: 'PostgreSQL (JSONB, JPA/Hibernate)', icon: 'postgresql/postgresql-original' },
      { name: 'MongoDB (aggregation pipelines)', icon: 'mongodb/mongodb-original' },
      { name: 'Redis', icon: 'redis/redis-original' },
      { name: 'Query & Index Optimization' },
      { name: 'Apache Kafka', icon: 'apachekafka/apachekafka-original' },
      { name: 'Debezium (CDC)' },
      { name: 'Liquibase' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3)', icon: 'amazonwebservices/amazonwebservices-original-wordmark' },
      { name: 'Google Cloud', icon: 'googlecloud/googlecloud-original' },
      { name: 'Docker', icon: 'docker/docker-original' },
      { name: 'Kubernetes', icon: 'kubernetes/kubernetes-original' },
      { name: 'Argo CD (GitOps)', icon: 'argocd/argocd-original' },
      { name: 'Jenkins', icon: 'jenkins/jenkins-original' },
      { name: 'CI/CD Pipelines' },
      { name: 'Maven', icon: 'maven/maven-original' },
      { name: 'MinIO' },
      { name: 'Cloudflare Workers', icon: 'cloudflare/cloudflare-original' },
      { name: 'Linux', icon: 'linux/linux-original' },
      { name: 'Git', icon: 'git/git-original' },
    ],
  },
  {
    title: 'Security & API Gateway',
    skills: [
      { name: 'OAuth2 / OIDC' },
      { name: 'JWT & JWKS' },
      { name: 'Keycloak' },
      { name: 'Zitadel' },
      { name: 'Multi-Tenant Realms' },
      { name: 'RBAC' },
      { name: 'Kong API Gateway (custom Lua plugins)' },
      { name: 'SonarQube', icon: 'sonarqube/sonarqube-original' },
    ],
  },
  {
    title: 'Testing & AI',
    skills: [
      { name: 'JUnit', icon: 'junit/junit-original' },
      { name: 'Postman / Newman', icon: 'postman/postman-original' },
      { name: 'Swagger / OpenAPI', icon: 'swagger/swagger-original' },
      { name: 'LLM Orchestration' },
      { name: 'Prompt Engineering' },
      { name: 'Model Context Protocol (MCP)' },
    ],
  },
];

/* ---------------------------------------------------------- 4. EXPERIENCE  */

export interface Role {
  role: string;
  company: string;
  location: string;
  date: string;
  /** One entry per bullet. */
  points: string[];
  /** Technology tags for this role specifically, not a shared blanket list. */
  skills: string[];
}

/** Most recent first. Four titles across two employers; Karkinos was acquired by Jio. */
export const EXPERIENCE: Role[] = [
  {
    role: 'Platform Manager (SDE 3)',
    company: 'Jio Platform Limited',
    location: 'Bangalore, India',
    date: 'April 2025 - Present',
    points: [
      'Reduced high-load query execution time by 80%, from 2.5s to under 500ms, by remodelling Hibernate join strategy and adding custom result projections that removed wasted fetch cycles on hot read paths.',
      'Cut per-tenant deployment overhead to one config change with a multi-tenant Keycloak framework centralizing realm and client orchestration, so 3 business units share one OAuth2/OIDC deployment.',
      'Built a high-performance Unified Search service over PostgreSQL JSONB predicates and MongoDB aggregation pipelines, replacing per-domain query paths with one predicate-based multi-value API.',
      'Owned production stability for 20+ critical incidents across messaging, reporting, search, and event pipelines, driving root-cause analysis, release coordination with DevOps, and written postmortems.',
      'Standardized error handling across 6+ microservices behind a shared error-mapping layer that replaced generic exceptions with parameter-driven, context-rich codes, cutting debug-to-root-cause time on call.',
      'Reduced feature development time 60% and manual QA prep 50% with an AI-assisted development framework that automated architecture compliance checks and generated chained API regression suites from OpenAPI specs.',
      'Cut LLM API spend 40% while holding high-availability SLAs across millions of requests with a token-aware rate limiter in front of the AI summarization pipeline.',
      'Architected a human-in-the-loop (HITL) verification platform from scratch to production, where reviewers validate LLM-extracted data before downstream commit, backed by a task microservice with a lifecycle state machine, rule-driven auto-assignment, and a master-data caching layer.',
      'Designed a hierarchical plan-scheduling microservice (plan to cycle to session) exposing 30+ REST endpoints, with cascade recalculation on date changes, Kafka lifecycle listeners, and schedulers for missed-session detection and upcoming-cycle reminders.',
      'Built an order-request microservice covering the full order lifecycle including two-phase cancellation, publishing Kafka status events to downstream consumers, over a reusable Postgres audit/archive trigger pattern later cloned across microservices.',
    ],
    skills: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'PostgreSQL JSONB',
      'MongoDB',
      'Apache Kafka',
      'Keycloak',
      'OAuth2 / OIDC',
      'OpenAPI',
      'LLM Orchestration',
      'Liquibase',
    ],
  },
  {
    role: 'Senior Software Engineer (SDE 2)',
    company: 'Jio Platform Limited',
    location: 'Bangalore, India',
    date: 'October 2024 - April 2025',
    points: [
      'Built a data extraction platform on the Factory pattern that normalizes unstructured third-party reports into standardized interoperability schemas for downstream consumers.',
      'Raised team sprint velocity 40% through code reviews, technical governance, and knowledge-transfer sessions, and delivered a Kong API Gateway proof of concept with a decoupled PostgreSQL layer.',
      'Split a scheduling domain cleanly across two microservices, a master-data service owning reusable templates and a transactional service owning live per-entity plans, removing duplicated definitions between them.',
      'Traced and fixed event-publishing gaps across service boundaries where new payload fields were silently dropped before reaching downstream search and sync consumers.',
      'Architected an AI summarization engine on LLM orchestration and prompt engineering, consolidating two legacy codebases into one service that turns long-form multi-source records into ready-to-use briefings.',
      'Modernized a legacy omnichannel communication system to multi-tenant sender profiles, enabling concurrent outbound engagement across teams.',
      'Established an automated technical documentation framework wired to the live codebase, keeping architecture docs accurate without manual upkeep.',
      'Added internationalization support for global phone numbers and addresses plus a country-code search API across the core data service.',
      'Drove RBAC analysis and resolved SSO defects across business units, and coordinated QA releases, release notes, and dev-int load testing.',
    ],
    skills: [
      'Java',
      'Spring Boot',
      'Factory Pattern',
      'Kong API Gateway',
      'PostgreSQL',
      'Prompt Engineering',
      'RBAC',
      'SSO',
      'Microservices',
    ],
  },
  {
    role: 'Software Engineer (SDE 1)',
    company: 'Jio Platform Limited',
    location: 'Bangalore, India',
    date: 'June 2023 - October 2024',
    points: [
      'Achieved sub-3-second replication latency between MongoDB and PostgreSQL with a fault-tolerant Change Data Capture microservice on Debezium and Apache Kafka feeding 5 downstream services.',
      'Engineered a high-throughput document generation engine on Java multithreading and the iText PDF library that produced 21+ document types for 80+ enterprise partners at national scale.',
      'Designed and shipped an end-to-end event-driven microservice with full HLD/LLD, keeping state synchronized in real time across 5 distributed services.',
      'Enabled zero-downtime deployments across 20 microservices by automating Liquibase schema evolution, which removed manual configuration drift from every release.',
      'Reduced production debugging time 70% with a real-time log and webhook monitoring dashboard that performed automated failure classification and alerting.',
      'Remediated 200+ security vulnerabilities through SonarQube static analysis and raised code-quality scores 40% against internal security and compliance gates.',
    ],
    skills: [
      'Java',
      'Spring Boot',
      'Debezium (CDC)',
      'Apache Kafka',
      'MongoDB',
      'PostgreSQL',
      'Java Multithreading',
      'iText PDF',
      'Liquibase',
      'SonarQube',
    ],
  },
  {
    role: 'Application Developer (Intern)',
    company: 'Karkinos Health Care Private Limited',
    location: 'Bangalore, India',
    date: 'October 2022 - June 2023',
    points: [
      'Built 10+ stateless REST microservices in Java and Spring Boot under a Maven parent-child module architecture that centralized dependencies and kept builds reproducible across shared modules.',
      'Orchestrated cloud deployments on Google Cloud Platform through Argo CD GitOps continuous delivery, holding availability and scalability steady across development and staging.',
      'Automated builds and containerization with Jenkins and Docker, and ran regression suites in-pipeline so deployment transitions between environments needed no manual steps.',
      'Modelled polyglot persistence with PostgreSQL for relational data and MongoDB for documents, and validated API reliability with JUnit unit tests and Postman suites before production releases.',
      'Built internal web tools with the Flask framework to automate operational workflows, and authored technical release notes for production deployments.',
    ],
    skills: [
      'Java',
      'Spring Boot',
      'Maven',
      'Google Cloud',
      'Argo CD',
      'Jenkins',
      'Docker',
      'PostgreSQL',
      'MongoDB',
      'JUnit',
      'Postman',
      'Flask',
    ],
  },
];

/* ----------------------------------------------------------- 5. EDUCATION  */

export interface Degree {
  degree: string;
  school: string;
  /** Awarding university where it differs from the college. */
  affiliation?: string;
  date: string;
  /** Omit while a degree is still in progress. */
  grade?: string;
}

/** Most recent first. */
export const EDUCATION: Degree[] = [
  {
    degree: 'M.Tech, Artificial Intelligence & Data Science',
    school: 'Indian Institute of Technology, Patna',
    date: 'June 2026 - Present',
  },
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Vellore Institute of Technology',
    affiliation: 'VIT University',
    date: 'September 2021 - July 2023',
    grade: 'CGPA 8.57 / 10.0',
  },
  {
    degree: 'Bachelor of Computer Science (B.Sc)',
    school: 'Government Autonomous College',
    affiliation: 'Sambalpur University',
    date: 'August 2017 - October 2020',
    grade: 'CGPA 8.60 / 10.0',
  },
];

/* ------------------------------------------------------ 6. CERTIFICATIONS  */

export interface Certification {
  name: string;
  issuer: string;
  /** Month and year as LinkedIn reports it. Omitted where LinkedIn has no date. */
  date?: string;
  /** Verification link. */
  href: string;
}

/**
 * All 15 certifications from linkedin.com/in/sanjaynaikdev, scraped 2026-08-31, plus one
 * that appears on the resume but not on the profile (flagged below).
 *
 * Newest first; the two LinkedIn Learning entries with no date on the profile sort last.
 * `issuer` is LinkedIn's own `issuedBy` value, except that its "LinkedIn" is written out as
 * "LinkedIn Learning" -- every one of those links is a /learning/certificates/ URL, so the
 * product name is the accurate one.
 *
 * Rendered inside a collapsed <details> on the home page: present and crawlable, but
 * costing no vertical space until someone opens it.
 */
export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Vibe Coding with Claude Code',
    issuer: 'Scrimba',
    date: 'Aug 2026',
    href: 'https://www.coursera.org/account/accomplishments/verify/OPMIMVQR0LQA',
  },
  {
    name: 'DevOps Mastery by KodeKloud',
    issuer: 'KodeKloud',
    date: 'Mar 2026',
    href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/SSHK2EMV57FU',
  },
  {
    name: 'DevOps Prerequisite Course',
    issuer: 'KodeKloud',
    date: 'Feb 2026',
    href: 'https://www.coursera.org/account/accomplishments/records/Q8JIFI8LNYLD',
  },
  {
    name: 'Manage Kubernetes in Google Cloud Skill Badge',
    issuer: 'Google',
    date: 'Jul 2025',
    href: 'https://www.credly.com/badges/4dcfa8e6-bad7-40e6-97ea-db5c1d50b42e/linked_in_profile',
  },
  {
    name: 'Deploy Kubernetes Applications on Google Cloud Skill Badge',
    issuer: 'Google',
    date: 'Jul 2025',
    href: 'https://www.credly.com/badges/3a120b56-f8a1-4494-9504-e2c53fd5b289/linked_in_profile',
  },
  {
    name: 'Cohort 2.0 Student @100xDevs By Hakirat Singh',
    issuer: '100xDevs',
    date: 'Oct 2024',
    href: 'https://app.100xdevs.com/certificate/verify/A2D7MY27',
  },
  {
    name: 'Advanced Spring Boot Observability',
    issuer: 'LinkedIn Learning',
    date: 'May 2023',
    href: 'https://www.linkedin.com/learning/certificates/51da7d996d90f440918e85e37f773be906152b383fd15f77e70bfd3ceb7b5b07',
  },
  {
    name: 'Blockchain: Learning Solidity',
    issuer: 'LinkedIn Learning',
    date: 'Feb 2023',
    href: 'https://www.linkedin.com/learning/certificates/f81b6362c8065deceb0c6155eb233ca9d80c3628e6e82ed64af67055aa185b27',
  },
  {
    name: 'Machine Learning Pipelines with Azure ML Studio',
    issuer: 'Coursera',
    date: 'Jul 2022',
    href: 'https://coursera.org/verify/4VPR8YRUKL6H',
  },
  {
    name: 'Python Basic',
    issuer: 'HackerRank',
    date: 'Jul 2022',
    href: 'https://www.hackerrank.com/certificates/52ec85d6c01d',
  },
  {
    name: 'Blockchain and its Applications',
    issuer: 'NPTEL',
    date: 'Apr 2022',
    href: 'https://drive.google.com/file/d/13pvP0DFmRIkCVOfSNh1a6VwH0ucNYirY/view?usp=sharing',
  },
  {
    name: 'Data Structures',
    issuer: 'Coursera',
    date: 'Apr 2022',
    href: 'https://www.coursera.org/account/accomplishments/certificate/5GSATYWVG27M',
  },
  {
    name: 'Command Line in Linux',
    issuer: 'Coursera',
    date: 'Apr 2022',
    href: 'https://www.coursera.org/account/accomplishments/certificate/PSDAGD3H3LGB',
  },

  // LinkedIn carries no issue date for these two.
  {
    name: 'Extending, Securing, and Dockerizing Spring Boot Microservices',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/learning/certificates/64c1ba3501d0049f8b251eb82a5a24cbefa90160ae7f7a3d255a9478ab12b93e',
  },
  {
    name: 'Level Up: Advanced Python',
    issuer: 'LinkedIn Learning',
    href: 'https://www.linkedin.com/learning/certificates/18c959bfd69cc8ec579b11e4c3d9c29dca04e3e4dd1f56f72c892d48f27c6607',
  },

  // On the resume but NOT on the LinkedIn profile. Kept because dropping it would lose a
  // certificate; delete this entry if the profile is the intended single source of truth.
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    href: 'https://coursera.org/share/ebfaca1757c9f56727b3ac71288bf579',
  },
];

/* ------------------------------------------------------------ 7. PROJECTS  */

export type Stage = 'working' | 'in-progress' | 'prototype' | 'paused';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** URL fragment: /projects/<slug>/ */
  slug: string;
  name: string;
  tagline: string;
  /** Primary language or framework, shown in the metadata line. */
  primary: string;
  stage: Stage;
  /** Free-text status, kept specific and checkable. */
  stageNote: string;
  /** Two or three paragraphs: the problem, and the shape of the solution. */
  body: string[];
  stack: Array<{ layer: string; choice: string }>;
  /** The decisions worth explaining. */
  decisions: Array<{ title: string; text: string }>;
  /** Honest gaps. */
  gaps: string[];
  /** Entries with href '#' are filtered out rather than rendered dead. */
  links: ProjectLink[];
}

export const STAGE_LABELS: Record<Stage, string> = {
  working: 'Working',
  'in-progress': 'In progress',
  prototype: 'Prototype',
  paused: 'Paused',
};

export const STAGE_DOT: Record<Stage, string> = {
  working: '#4ade80',
  'in-progress': '#facc15',
  prototype: '#60a5fa',
  paused: '#a1a1a1',
};

export const realLinks = (project: Project): ProjectLink[] =>
  project.links.filter((link) => link.href !== '#');

/** Backend platform work first, then the static-site and tooling projects. */
export const PROJECTS: Project[] = [
  {
    slug: 'kong-api-gateway-plugins',
    name: 'Kong API Gateway with Custom RBAC and JWT Plugins',
    tagline: 'Two Lua plugins that move access policy out of every service and into the gateway',
    primary: 'Lua · Kong 3.x',
    stage: 'working',
    stageNote: 'Both plugins ported from Kong 2.x to 3.x, running DB-less',
    body: [
      'Every service behind a gateway ends up re-implementing the same two checks: is this token real, and is this caller allowed to call this route. Doing it per service means the answer drifts. These two Kong plugins move both checks to the one place every request already passes through.',
      'The first is a JWT validator that caches JWKS from the identity provider at runtime, so key rotation needs no redeploy. The second is an RBAC authorizer that resolves roles from JWT claims through an 8-stage precedence pipeline, which is what makes overlapping rules deterministic instead of order-dependent.',
      'Access policy ships as declarative config through a pattern DSL for endpoint rules, with method wildcards and inverted role matching, so a new rule is a config change rather than a plugin change. Both plugins were then ported from Kong 2.x to 3.x and run against the gateway in DB-less mode.',
    ],
    stack: [
      { layer: 'Gateway', choice: 'Kong 3.x, DB-less declarative config' },
      { layer: 'Plugins', choice: 'Lua, two custom plugins' },
      { layer: 'Token validation', choice: 'OIDC with runtime JWKS caching' },
      { layer: 'Identity providers', choice: 'Keycloak and Zitadel' },
      { layer: 'Local environment', choice: 'Docker' },
    ],
    decisions: [
      {
        title: 'An 8-stage precedence pipeline instead of first-match',
        text: 'Role rules overlap in practice: a wildcard on a path, a specific method, an inverted exclusion. First-match makes the outcome depend on config order, which is invisible in review. Explicit precedence stages make the resolved decision the same regardless of how the rules were written down.',
      },
      {
        title: 'JWKS cached at runtime, not baked into config',
        text: 'Pinning provider keys into gateway config means every key rotation is a deploy. Fetching and caching JWKS at runtime keeps rotation a provider-side operation.',
      },
      {
        title: 'A pattern DSL rather than one rule per endpoint',
        text: 'Method wildcards and inverted role matching keep the rule count proportional to the policy, not to the number of routes.',
      },
    ],
    gaps: [
      'No published benchmark of the added per-request latency from the RBAC pipeline.',
      'The precedence pipeline has no automated test matrix covering all 8 stages.',
    ],
    links: [{ label: 'source', href: '#' }],
  },

  {
    slug: 'multi-tenant-auth-service',
    name: 'Multi-Tenant Authentication Service',
    tagline: 'One auth microservice and one Keycloak deployment serving separate tenants',
    primary: 'Java 21 · Spring Boot 3.3',
    stage: 'working',
    stageNote: 'Registration, login, refresh rotation and a custom Keycloak SPI implemented',
    body: [
      'A Spring Boot auth microservice covering registration, password-grant login, refresh-token rotation, and profile-driven realm selection, with Bearer JWT verified against the provider JWKS through Spring Security Resource Server. Realm selection from the profile is the part that makes it multi-tenant: one deployment, separate tenants, no per-tenant fork.',
      'The identity provider itself is extended with a custom SPI for one-time-password storage and REST issuance. OTP is where auth services usually leak: the codes get stored in plain text, compared with a normal string equality, or left replayable. Here they are hashed with a peppered SHA-256, compared in constant time, single-use, and rate limited.',
    ],
    stack: [
      { layer: 'Language', choice: 'Java 21, Spring Boot 3.3' },
      { layer: 'Identity provider', choice: 'Keycloak, extended with a custom SPI' },
      { layer: 'Protocols', choice: 'OAuth2 / OIDC, JWT verified against JWKS' },
      { layer: 'Token handling', choice: 'Spring Security Resource Server' },
      { layer: 'Data', choice: 'MongoDB' },
      { layer: 'Events', choice: 'Kafka' },
    ],
    decisions: [
      {
        title: 'Peppered SHA-256 with constant-time compare for OTP',
        text: 'A one-time password is short and low-entropy, so the stored form has to be useless if the store leaks, and the comparison must not leak timing. Single-use plus rate limiting closes the replay and brute-force paths.',
      },
      {
        title: 'Realm selection from the profile, not the subdomain',
        text: 'Deriving the tenant from the request host couples auth to DNS layout. Driving it from the profile keeps one deployment serving tenants that may share a hostname.',
      },
      {
        title: 'A provider SPI rather than OTP in the application',
        text: 'Putting OTP issuance in the identity provider keeps it available to every client of that provider, not only to this service.',
      },
    ],
    gaps: [
      'Password-grant is a deprecated OAuth2 flow; it suits a first-party client but is not the right default for third-party ones.',
      'No load test of the OTP rate limiter under concurrent issuance.',
    ],
    links: [{ label: 'source', href: '#' }],
  },

  {
    slug: 'video-transcoding-service',
    name: 'Distributed Video Transcoding Platform',
    tagline: 'Four Spring Boot services, GPU-accelerated FFmpeg, and 8x the throughput',
    primary: 'Java 21 · Spring Boot',
    stage: 'in-progress',
    stageNote: 'Four services implemented; JWT auth and refresh tokens wired',
    body: [
      'A Java microservice platform for transcoding video: REST APIs for conversion with configurable codec, bitrate, frame rate and resolution per job, across H.264, H.265, AV1 and VP9, in CPU or GPU mode.',
      'Four services split by responsibility — auth, transcoding, file and notification — with FFmpeg GPU acceleration raising throughput 8x over the CPU path. The distributed shape is the point of the project as much as the transcoding is: a message queue, a cache, object storage, a gateway and a monitoring stack around the services.',
      'Long-running jobs sit behind an event-driven Kafka pipeline with Redis caching job state, which is what keeps API latency independent of media duration. A request is accepted and queued rather than held open for the length of the encode.',
    ],
    stack: [
      { layer: 'Language', choice: 'Java 21 (LTS), Spring Boot 3.3' },
      { layer: 'Services', choice: 'auth · transcoding · file · notification' },
      { layer: 'Transcoding', choice: 'FFmpeg, GPU-accelerated' },
      { layer: 'Messaging', choice: 'Kafka for async job dispatch' },
      { layer: 'Cache', choice: 'Redis for job state' },
      { layer: 'Storage', choice: 'MinIO, S3-compatible' },
      { layer: 'Database', choice: 'PostgreSQL' },
      { layer: 'Monitoring', choice: 'Prometheus and Grafana' },
    ],
    decisions: [
      {
        title: 'Async through Kafka, not a held-open request',
        text: 'Transcoding runtime scales with media duration. Accepting and queueing the job keeps the API contract predictable and lets the worker pool absorb bursts.',
      },
      {
        title: 'GPU as a mode, not a fork',
        text: 'CPU and GPU paths share one API surface, with separate compose files for the hardware variants, so the client does not change when the hardware does.',
      },
      {
        title: 'Split by responsibility from the start',
        text: 'Four services rather than one, because the queue, the gateway and the observability were the subject of the exercise.',
      },
    ],
    gaps: [
      'The monitoring stack is composed but not exercised under real load.',
      'The 8x figure is measured on one GPU and one source profile, not across a matrix.',
      'No CI.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/snaik4398/Video-Transcoding-SpringbootProject',
      },
    ],
  },

  {
    slug: 'object-storage-file-service',
    name: 'Object-Storage File Upload and Download Service',
    tagline: 'Multipart upload and streamed download that never buffers a file in heap',
    primary: 'Java 21 · Spring Boot',
    stage: 'working',
    stageNote: 'Full REST contract implemented against MinIO with JWT-scoped routes',
    body: [
      'A file service over S3-compatible object storage: multipart upload, streamed download, paginated listing, metadata update and delete, behind a REST contract where every route is scoped to the caller identity taken from the JWT rather than from a request parameter.',
      'The load-bearing detail is the download path. Reading an object into memory and returning a byte array works in testing and falls over on a large file under concurrency, because heap usage scales with file size times concurrent downloads. Streaming through InputStreamResource keeps memory flat regardless of object size. Buckets are auto-provisioned at startup, so the service deploys into an empty environment without a manual setup step.',
    ],
    stack: [
      { layer: 'Language', choice: 'Java 21, Spring Boot' },
      { layer: 'Object storage', choice: 'MinIO, S3-compatible' },
      { layer: 'Metadata', choice: 'PostgreSQL' },
      { layer: 'Auth', choice: 'Bearer JWT, identity scoping per route' },
    ],
    decisions: [
      {
        title: 'InputStreamResource instead of buffering in heap',
        text: 'Memory stays flat regardless of object size or concurrent download count. Returning a byte array couples heap to the largest file anyone uploads.',
      },
      {
        title: 'Identity from the JWT, never from a parameter',
        text: 'A caller-supplied owner id is an authorization bug waiting to be found. Deriving scope from the verified token makes the tenant boundary unforgeable.',
      },
      {
        title: 'Buckets auto-provisioned at startup',
        text: 'The service comes up in an empty environment with no operator runbook step, which matters for ephemeral test environments.',
      },
    ],
    gaps: [
      'No virus or content-type scanning on upload.',
      'No lifecycle or retention policy on stored objects.',
    ],
    links: [{ label: 'source', href: '#' }],
  },

  {
    slug: 'oilcraft',
    name: 'OilCraft, Subscription Content Platform',
    tagline: 'A static content tier and a paid subscription app, on the Cloudflare free tier',
    primary: 'Astro 7 · Next.js 16',
    stage: 'in-progress',
    stageNote: 'Astro content site builds clean at 19 routes, 0 vulnerabilities; paid tier wired',
    body: [
      'A content and AI platform for essential-oil and carrier-oil blends. Recipes are ratio-based and scale to 100 ml, 250 ml and 500 ml bottles. Three tiers: a free ad- and affiliate-supported content site, a paid custom-blend builder, and a premium AI-personalised tier.',
      'Two properties built in sequence rather than one app with feature flags. The free tier is a static Astro site with typed content collections, JSON-LD and a sitemap, which ships first and captures a waitlist. The app is Next.js, with accounts, an interactive recipe library and bottle calculator, and AI chat behind the premium tier. Both run on Cloudflare with 0 dependency vulnerabilities.',
      'The paid tier is end to end: Razorpay checkout with server-computed amounts, an idempotent webhook as the authoritative fulfilment path, and automatic Zitadel role grants that reach the next minted JWT. Amounts are computed server-side because a client-supplied price is a client-controlled price.',
    ],
    stack: [
      { layer: 'Content site', choice: 'Astro 7 + Tailwind v4, static, 19 routes' },
      { layer: 'Application', choice: 'Next.js 16 + React 19' },
      { layer: 'Auth', choice: 'Zitadel, roles granted on fulfilment' },
      { layer: 'Payments', choice: 'Razorpay, idempotent webhook fulfilment' },
      { layer: 'Data', choice: 'PostgreSQL, R2, KV' },
      { layer: 'Hosting', choice: 'Cloudflare Pages and Workers' },
    ],
    decisions: [
      {
        title: 'The webhook is the authoritative fulfilment path',
        text: 'A browser redirect after checkout is not a payment confirmation: the tab can close. The webhook is the only thing that grants entitlement, and it is idempotent because payment providers retry.',
      },
      {
        title: 'Amounts computed server-side',
        text: 'A price sent from the client is a price the client controls. The server derives the amount from the plan id.',
      },
      {
        title: 'Two properties, not one',
        text: 'The indexable content and the authenticated app have opposite requirements. Everything behind login is deliberately not indexed.',
      },
    ],
    gaps: [
      'The brand name is still a planning placeholder; the domain has not been registered.',
      'The premium AI tier is designed but not implemented.',
      'No logo or favicon yet.',
    ],
    links: [{ label: 'source', href: '#' }],
  },

  {
    slug: 'streamforge',
    name: 'StreamForge',
    tagline: 'Course and video hosting with adaptive HLS delivery, on free tiers',
    primary: 'TypeScript · Go',
    stage: 'in-progress',
    stageNote: 'All three services scaffolded and implemented in part',
    body: [
      'A personal course and video hosting platform: a creator-style catalogue with adaptive HLS delivery, designed to run within free tiers. Upload a master video, a Go and FFmpeg worker transcodes it into a 360p/720p/1080p HLS ladder, the segments land in object storage, and an hls.js player streams them behind JWT auth and enrollment checks.',
      'The architecture is shaped by one hard constraint: Cloudflare Workers cannot run FFmpeg, with no native binaries and strict CPU limits. So transcoding lives off-platform in Docker while everything else stays Cloudflare-native.',
    ],
    stack: [
      { layer: 'Frontend', choice: 'Astro + hls.js on Cloudflare Pages' },
      { layer: 'API', choice: 'TypeScript + Hono on Cloudflare Workers' },
      { layer: 'Database', choice: 'D1 (SQLite) with Drizzle ORM' },
      { layer: 'Object storage', choice: 'R2 over the S3 API; MinIO locally' },
      { layer: 'Transcoder', choice: 'Go + FFmpeg in Docker' },
    ],
    decisions: [
      {
        title: 'Transcoding lives off Cloudflare',
        text: 'Workers cannot execute FFmpeg. Rather than bend the whole design around that, the transcoder is a separate Go service that polls for jobs and writes the ladder back to object storage.',
      },
      {
        title: 'HLS rather than progressive download',
        text: 'A segment ladder lets the player adapt to the viewer connection, and signed playlist URLs keep the media gated without proxying bytes through the API.',
      },
      {
        title: 'Free tier as a design constraint, not an afterthought',
        text: 'R2 charges no egress, which is what makes video hosting viable at zero cost; the component choices follow from that.',
      },
    ],
    gaps: [
      'Not deployed; the transcoder has only run locally in Docker.',
      'No test suite.',
      'Enrollment and auth flows are specified more completely than they are implemented.',
    ],
    links: [{ label: 'source', href: '#' }],
  },

  {
    slug: 'plainpaste',
    name: 'PlainPaste',
    tagline: 'Markdown in, clean plain text out, without losing your numbering',
    primary: 'Astro · TypeScript',
    stage: 'working',
    stageNote: 'Builds clean, 77 tests, 0 vulnerabilities',
    body: [
      'Chat assistants answer in Markdown. Email clients, applicant-tracking forms and most chat boxes do not render it, so a reply that looked clean in the assistant arrives full of asterisks and hashes. PlainPaste is the step in between: paste Markdown on the left, get paste-ready text on the right.',
      'The reason it exists rather than a two-line call to an off-the-shelf stripper: the common libraries flatten lists, so `1. 2. 3.` disappears. That numbering is usually the most important thing on the page, and it is what makes a reply to a numbered questionnaire readable at all. So the parse step is stock remark, and only the writer that turns the syntax tree back into text is hand-written.',
      'Six presets configure every setting for a destination (email, report, chat, documentation, a web form field) and load a worked sample into an empty pane. Both panes live in one workspace with a draggable divider, a fullscreen toggle and synchronised scrolling.',
    ],
    stack: [
      { layer: 'Framework', choice: 'Astro 7, fully static' },
      { layer: 'Styling', choice: 'Tailwind CSS v4, tokens in @theme' },
      { layer: 'Interactivity', choice: 'Vanilla TypeScript islands, no React' },
      { layer: 'Parsing', choice: 'unified · remark-parse · remark-gfm' },
      { layer: 'Tests', choice: 'Vitest' },
      { layer: 'Hosting', choice: 'Cloudflare Pages free tier' },
    ],
    decisions: [
      {
        title: 'A hand-written serialiser instead of strip-markdown',
        text: 'strip-markdown flattens list nodes, losing ordered-list numbering. Only the serialisation is custom; the parse is stock remark, and no HTML is produced at any point.',
      },
      {
        title: 'Nesting comes from hanging indent, not a depth counter',
        text: 'Each list item pushes every line after its first out by the width of its own marker. That single rule covers wrapped paragraphs and nested sub-lists, and composes to any depth. The first implementation tracked depth separately and double-indented everything.',
      },
      {
        title: 'Lossless by default',
        text: 'A converter that silently deletes a URL or a code block is worse than one that leaves you something to delete. Link URLs, code blocks and their language, image alt text and footnotes all survive unless you switch them off.',
      },
    ],
    gaps: [
      'Not deployed; no domain registered yet.',
      'Ad slots are wired and placed but unconfigured, so nothing loads.',
      'Tests cover the converter only; the UI wiring has no browser tests.',
    ],
    links: [{ label: 'source', href: '#' }],
  },

  {
    slug: 'hybrid-media-downloader',
    name: 'Hybrid Media Downloader',
    tagline: 'A local CLI that authenticates, sniffs streams, and falls back to recording',
    primary: 'Python',
    stage: 'prototype',
    stageNote: 'CLI works end to end; tracked step by step in a living spec',
    body: [
      'A local command-line tool for saving media you already have access to. It logs in with Playwright and persists the session, then hands off to yt-dlp to sniff and download the stream. When a stream cannot be pulled directly, it falls back to recording the screen.',
      'It is deliberately local-only and single-user. The interesting part is the layering: browser automation for the parts that need a real session, a downloader for the parts that do not, and a recorder as the last resort.',
    ],
    stack: [
      { layer: 'Language', choice: 'Python 3' },
      { layer: 'Browser automation', choice: 'Playwright (Chromium), session saved to disk' },
      { layer: 'Download', choice: 'yt-dlp' },
      { layer: 'Fallback', choice: 'Screen recording' },
      { layer: 'Packaging', choice: 'Dockerfile alongside a local venv' },
    ],
    decisions: [
      {
        title: 'Three strategies behind one command',
        text: 'Direct download where possible, authenticated download where a session is needed, and recording where neither works, chosen per source rather than per run.',
      },
      {
        title: 'A living step tracker instead of a static spec',
        text: 'The spec directory carries a tracker with per-step status and a dated changelog, so work resumes without re-reading the whole design.',
      },
    ],
    gaps: [
      'Personal use only; it does not attempt to handle sources you have no right to.',
      'No test suite; correctness is verified by running it.',
      'Saved credentials and session files live on disk in the working directory.',
    ],
    links: [{ label: 'source', href: '#' }],
  },
];
