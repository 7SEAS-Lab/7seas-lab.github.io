export interface Member {
  slug: string;
  name: string;
  title: string;
  role: string;
  founder: boolean;
  page: boolean;
  image?: string;
  email: string;
  bio: string;
  interests: string[];
  profile: string;
  linkedin?: string;
  scholar?: string;
  orcid?: string;
  sources: { label: string; url: string }[];
}

// Add confirmed lab members here. Set page: false for a card without a profile page.
// Scholar links may be added once the exact profile has been confirmed.
export const team: Member[] = [
  {
    slug: 'charlotte-debus', name: 'Charlotte Debus', title: 'Dr.',
    role: 'Robust & efficient AI', founder: true, page: true,
    image: '/images/team/charlotte-debus.jpg', email: 'charlotte.debus@kit.edu',
    bio: 'Charlotte leads the Junior Research Group Robust and Efficient AI at KIT’s Scientific Computing Center. Her research brings together scalable AI, uncertainty quantification, and scientific applications. With a background in physics and medical imaging, she develops methods that help researchers work with complex models and understand their predictions.',
    interests: ['Efficient AI', 'Uncertainty quantification', 'Scientific machine learning'],
    profile: 'https://www.scc.kit.edu/en/staff/13870.php',
    linkedin: 'https://www.linkedin.com/in/charlotte-debus-316214a0/',
    orcid: 'https://orcid.org/0000-0002-7156-2022',
    sources: [
      { label: 'KIT researcher profile', url: 'https://www.scc.kit.edu/en/staff/13870.php' },
      { label: 'Robust and Efficient AI group', url: 'https://www.scc.kit.edu/en/aboutus/rai.php' },
    ],
  },
  {
    slug: 'markus-goetz', name: 'Markus Götz', title: 'Dr.',
    role: 'Scalable & distributed AI', founder: true, page: true,
    image: '/images/team/markus-goetz.jpg', email: 'markus.goetz@kit.edu',
    bio: 'Markus leads the Helmholtz AI consultant team for energy at KIT’s Scientific Computing Center. His work connects machine learning with high-performance computing, including distributed data analytics, parallel optimization, and scientific AI applications. The team supports researchers across the Helmholtz Association in applying modern AI methods.',
    interests: ['High-performance computing', 'Distributed learning', 'Parallel optimization'],
    profile: 'https://www.scc.kit.edu/personen/11452.php',
    linkedin: 'https://www.linkedin.com/in/markus-g%C3%B6tz-410430253/',
    scholar: 'https://scholar.google.com/citations?user=eD2svJQAAAAJ',
    orcid: 'https://orcid.org/0000-0002-2233-1041',
    sources: [
      { label: 'KIT researcher profile', url: 'https://www.scc.kit.edu/personen/11452.php' },
      { label: 'Helmholtz AI team', url: 'https://www.helmholtz.ai/applied-ai/ai-consultancy-teams/goetz-team/' },
    ],
  },
  {
    slug: 'kaleb-phipps', name: 'Kaleb Phipps', title: 'Dr.-Ing.',
    role: 'AI for energy & Earth systems', founder: true, page: true,
    image: '/images/team/kaleb-phipps.jpg', email: 'kaleb.phipps@kit.edu',
    bio: 'Kaleb is a researcher at KIT’s Scientific Computing Center and spokesperson for the Simulation and Data Life Cycle Lab, Earth System Science. His research includes time series forecasting and data-driven methods for energy systems, connecting AI methods with practical scientific questions and reusable research data.',
    interests: ['Time series forecasting', 'Energy systems', 'Earth system science'],
    profile: 'https://www.scc.kit.edu/personen/17242.php',
    linkedin: 'https://www.linkedin.com/in/kaleb-phipps/',
    scholar: 'https://scholar.google.com/citations?user=7Bs4tS0AAAAJ',
    orcid: 'https://orcid.org/0000-0002-9197-1739',
    sources: [
      { label: 'KIT researcher profile', url: 'https://www.scc.kit.edu/personen/17242.php' },
      { label: 'ORCID', url: 'https://orcid.org/0000-0002-9197-1739' },
    ],
  },
  {
    slug: 'paul-kieckhefen', name: 'Paul Kieckhefen', title: 'Dr.-Ing.',
    role: 'Scientific machine learning & energy systems', founder: false, page: true,
    image: '/images/team/paul-kieckhefen.jpg', email: 'paul.kieckhefen@kit.edu',
    bio: "Paul is a scientific machine learning engineer and AI consultant at Helmholtz AI, where he has worked since June 2025. He combines numerical simulation with machine learning to build practical tools for energy and industry. His current work includes probabilistic foundation models for power distribution networks, agentic model chains for water-management simulations, and multimodal surrogate models for nuclear accident simulations. For the Solution Lab Rur–Erft digital twin, he implemented the agentic interface and model chain framework. He also develops reproducible data pipelines, simulation interfaces, and scientific dashboards.\n\nBefore joining Helmholtz AI, Paul worked as a Senior Specialist in Digitalization at BASF from 2021 to 2025, applying plant-data analysis, forecasting, and simulation to industrial problems. He previously researched numerical methods for solids processing at Hamburg University of Technology, earning a Dr.-Ing. in Process Engineering with distinction in 2021. His doctoral research focused on predicting product properties in fluidized-bed spray granulation using CFD–DEM methods.",
    interests: ['Surrogate modeling', 'Energy systems', 'Uncertainty quantification', 'AI agents for simulation', 'Scientific software', 'CFD–DEM'],
    profile: 'https://kieckhefen.eu/',
    linkedin: 'https://www.linkedin.com/in/paul-kieckhefen-a3801096',
    scholar: 'https://scholar.google.com/citations?user=rLx4y9EAAAAJ',
    orcid: 'https://orcid.org/0000-0003-1509-425X',
    sources: [
      { label: 'Personal website', url: 'https://kieckhefen.eu/' },
      { label: 'Selected projects', url: 'https://kieckhefen.eu/projects/' },
      { label: 'Solution Lab Rur–Erft', url: 'https://solution-lab-rur-erft.org/' },
      { label: 'KIT researcher profile', url: 'https://www.scc.kit.edu/en/staff/18379.php' },
      { label: 'Helmholtz AI team', url: 'https://www.helmholtz.ai/applied-ai/ai-consultancy-teams/goetz-team/' },
    ],
  },
  {
    slug: 'deifilia-kieckhefen', name: 'Deifilia Kieckhefen', title: '',
    role: 'Bayesian AI & atmospheric forecasting', founder: false, page: true,
    image: '/images/team/deifilia-kieckhefen.jpg',
    email: 'deifilia.to@kit.edu',
    bio: 'Deifilia is a researcher in the Robust and Efficient AI group at KIT’s Scientific Computing Center. She is a joint first author of the BEAST paper on Bayesian atmospheric forecasting and scalable model training.',
    interests: ['Bayesian neural networks', 'Uncertainty quantification', 'Atmospheric forecasting'],
    profile: 'https://www.scc.kit.edu/en/staff/17171.php',
    sources: [
      { label: 'KIT researcher profile', url: 'https://www.scc.kit.edu/en/staff/17171.php' },
      { label: 'Robust and Efficient AI group', url: 'https://www.scc.kit.edu/en/aboutus/rai.php' },
      { label: 'BEAST paper', url: 'https://arxiv.org/html/2609.12815v1' },
    ],
  },
  {
    slug: 'mishal-benz', name: 'Mishal Benz', title: '',
    role: 'AI consultancy for energy', founder: false, page: true,
    image: '/images/team/mishal-benz.jpg', email: 'mishal.benz@kit.edu',
    bio: 'Mishal is part of the Helmholtz AI consultant team for energy at KIT. The team supports scientific collaborations through machine learning, with applications spanning image analysis, time series, and graph problems.',
    interests: ['Scientific machine learning', 'AI for energy', 'Applied AI'],
    profile: 'https://www.helmholtz.ai/applied-ai/ai-consultancy-teams/goetz-team/',
    sources: [{ label: 'Helmholtz AI team', url: 'https://www.helmholtz.ai/applied-ai/ai-consultancy-teams/goetz-team/' }],
  },
  {
    "slug": "lars-heyen",
    "name": "Lars Heyen",
    "title": "Dr.",
    "role": "Robust & efficient AI · Postdoc",
    "founder": false,
    "page": true,
    "email": "lars.heyen@kit.edu",
    "bio": "Lars is a researcher at KIT’s Scientific Computing Center, working on robust and efficient AI for scientific applications.",
    "interests": [
      "Robust AI",
      "Efficient AI",
      "Scientific machine learning"
    ],
    "profile": "https://www.scc.kit.edu/en/staff/17574.php",
    "sources": [
      {
        "label": "KIT researcher profile",
        "url": "https://www.scc.kit.edu/en/staff/17574.php"
      }
    ],
    "orcid": "https://orcid.org/0000-0001-7949-1858"
  },
  {
    "slug": "pei-hsuan-hsia",
    "name": "Pei Hsuan Hsia",
    "title": "",
    "role": "Robust & efficient AI",
    "founder": false,
    "page": true,
    "email": "pei.hsia@kit.edu",
    "bio": "Pei Hsuan is a researcher at KIT’s Scientific Computing Center, working on robust and efficient AI for scientific applications.",
    "interests": [
      "Robust AI",
      "Efficient AI",
      "Scientific machine learning"
    ],
    "profile": "https://www.scc.kit.edu/en/staff/17500.php",
    "sources": [
      {
        "label": "KIT researcher profile",
        "url": "https://www.scc.kit.edu/en/staff/17500.php"
      }
    ]
  },
  {
    "slug": "philipp-huber",
    "name": "Philipp Huber",
    "title": "Dr. rer. nat.",
    "role": "Robust & efficient AI",
    "founder": false,
    "page": true,
    "email": "philipp.huber@kit.edu",
    "bio": "Philipp is a researcher at KIT’s Scientific Computing Center, working on robust and efficient AI for scientific applications.",
    "interests": [
      "Robust AI",
      "Efficient AI",
      "Scientific machine learning"
    ],
    "profile": "https://www.scc.kit.edu/en/staff/17707.php",
    "sources": [
      {
        "label": "KIT researcher profile",
        "url": "https://www.scc.kit.edu/en/staff/17707.php"
      }
    ]
  },
  {
    "slug": "ekaterina-klepikova",
    "name": "Ekaterina Klepikova",
    "title": "",
    "role": "Robust & efficient AI",
    "founder": false,
    "page": true,
    "image": '/images/team/ekaterina-klepikova.jpg',
    "email": "ekaterina.klepikova@kit.edu",
    "bio": "Ekaterina is a researcher at KIT’s Scientific Computing Center, working on robust and efficient AI for scientific applications.",
    "interests": [
      "Robust AI",
      "Efficient AI",
      "Scientific machine learning"
    ],
    "profile": "https://www.scc.kit.edu/en/staff/19332.php",
    "sources": [
      {
        "label": "KIT researcher profile",
        "url": "https://www.scc.kit.edu/en/staff/19332.php"
      }
    ]
  },
  {
    "slug": "nicholas-kuhn",
    "name": "Nicholas Kuhn",
    "title": "",
    "role": "Robust & efficient AI",
    "founder": false,
    "page": true,
    "email": "nicholas.kiefer@kit.edu",
    "bio": "Nicholas is a researcher at KIT’s Scientific Computing Center, working on robust and efficient AI for scientific applications.",
    "interests": [
      "Robust AI",
      "Efficient AI",
      "Scientific machine learning"
    ],
    "profile": "https://www.scc.kit.edu/en/staff/16665.php",
    "sources": [
      {
        "label": "KIT researcher profile",
        "url": "https://www.scc.kit.edu/en/staff/16665.php"
      }
    ]
  },
  {
    "slug": "praveen-kumar",
    "name": "Praveen Kumar",
    "title": "Dr.",
    "role": "Robust & efficient AI",
    "founder": false,
    "page": true,
    "image": '/images/team/praveen-kumar.jpg',
    "email": "praveen.kumar@kit.edu",
    "bio": "Praveen is a researcher at KIT’s Scientific Computing Center, working on robust and efficient AI for scientific applications.",
    "interests": [
      "Robust AI",
      "Efficient AI",
      "Scientific machine learning"
    ],
    "profile": "https://www.scc.kit.edu/en/staff/19177.php",
    "sources": [
      {
        "label": "KIT researcher profile",
        "url": "https://www.scc.kit.edu/en/staff/19177.php"
      }
    ]
  },
  {
    "slug": "asena-karolin-oezdemir",
    "name": "Asena Karolin Özdemir",
    "title": "",
    "role": "Robust & efficient AI",
    "founder": false,
    "page": true,
    "email": "asena.oezdemir@kit.edu",
    "bio": "Asena Karolin is a researcher at KIT’s Scientific Computing Center, working on robust and efficient AI for scientific applications.",
    "interests": [
      "Robust AI",
      "Efficient AI",
      "Scientific machine learning"
    ],
    "profile": "https://www.scc.kit.edu/en/staff/18227.php",
    "sources": [
      {
        "label": "KIT researcher profile",
        "url": "https://www.scc.kit.edu/en/staff/18227.php"
      }
    ]
  },
  {
    "slug": "johannes-georg-wahl",
    "name": "Johannes Georg Wahl",
    "title": "",
    "role": "Robust & efficient AI",
    "founder": false,
    "page": true,
    "image": '/images/team/johannes-wahl.jpg',
    "email": "johannes.wahl@kit.edu",
    "bio": "Johannes Georg is a researcher at KIT’s Scientific Computing Center, working on robust and efficient AI for scientific applications.",
    "interests": [
      "Robust AI",
      "Efficient AI",
      "Scientific machine learning"
    ],
    "profile": "https://www.scc.kit.edu/en/staff/19267.php",
    "sources": [
      {
        "label": "KIT researcher profile",
        "url": "https://www.scc.kit.edu/en/staff/19267.php"
      }
    ]
  },
  {
    "slug": "arvid-weyrauch",
    "name": "Arvid Weyrauch",
    "title": "",
    "role": "Robust & efficient AI",
    "founder": false,
    "page": true,
    "email": "arvid.weyrauch@kit.edu",
    "bio": "Arvid is a researcher at KIT’s Scientific Computing Center, working on robust and efficient AI for scientific applications.",
    "interests": [
      "Robust AI",
      "Efficient AI",
      "Scientific machine learning"
    ],
    "profile": "https://www.scc.kit.edu/en/staff/15029.php",
    "sources": [
      {
        "label": "KIT researcher profile",
        "url": "https://www.scc.kit.edu/en/staff/15029.php"
      }
    ]
  },
  {
    "slug": "marie-weiel",
    "name": "Marie Weiel",
    "title": "",
    "role": "AI consultancy for energy",
    "founder": false,
    "page": true,
    "email": "marie.weiel@kit.edu",
    "bio": "Marie works on applied scientific machine learning at KIT’s Scientific Computing Center, supporting researchers in using AI methods for energy applications.",
    "interests": [
      "Scientific machine learning",
      "AI for energy",
      "Applied AI"
    ],
    "profile": "https://www.helmholtz.ai/applied-ai/ai-consultancy-teams/goetz-team/",
    "sources": [
      {
        "label": "Institutional team profile",
        "url": "https://www.helmholtz.ai/applied-ai/ai-consultancy-teams/goetz-team/"
      }
    ],
    "image": "/images/team/marie-weiel.jpg"
  },
  {
    "slug": "katharina-fluegel",
    "name": "Katharina Flügel",
    "title": "",
    "role": "AI consultancy for energy",
    "founder": false,
    "page": true,
    "email": "katharina.fluegel@kit.edu",
    "bio": "Katharina works on applied scientific machine learning at KIT’s Scientific Computing Center, supporting researchers in using AI methods for energy applications.",
    "interests": [
      "Scientific machine learning",
      "AI for energy",
      "Applied AI"
    ],
    "profile": "https://www.helmholtz.ai/applied-ai/ai-consultancy-teams/goetz-team/",
    "sources": [
      {
        "label": "Institutional team profile",
        "url": "https://www.helmholtz.ai/applied-ai/ai-consultancy-teams/goetz-team/"
      }
    ]
  },
  {
    "slug": "jpghm",
    "name": "Juan Pedro Gutiérrez Hermosillo Muriedas",
    "title": "",
    "role": "HPC and Research Software Engineering",
    "founder": false,
    "page": true,
    "email": "juan.muriedas@kit.edu",
    "bio": "Juan is a researcher in the Data Analytics, Access and Applications department  at KIT’s Scientific Computing Center. He is the main developer of perun and an active contributor of the Helmholtz Analytics Toolkit (HeAT). He is the other first author of the BEAST project.",
    "interests": [
      "HPC",
      "Distributed Memory Computing",
      "Research Software Engineering"
    ],
    "profile": "https://scholar.google.com/citations?user=DuvW1VkAAAAJ",
    "linkedin": 'https://www.linkedin.com/in/juan-pedro-gutierrez-hermosillo-muriedas',
    "orcid": 'https://orcid.org/0000-0001-8439-7145',
    "scholar": 'https://scholar.google.com/citations?user=DuvW1VkAAAAJ',
    sources: [
      { label: 'Github', url: 'https://github.com/JuanPedroGHM' },
    ],
    "image": "/images/team/juan-muriedas.jpg"
  },
];
