export const projects = [
  {
    publicationIds: ["kieckhefen2026beast"],
    slug: 'beast', name: 'BEAST', category: 'Bayesian atmospheric forecasting',
    subtitle: 'Global forecasts. Calibrated uncertainty.', image: '/images/projects/beast.svg',
    abstract: 'A Bayesian Swin Transformer for global atmospheric forecasting that estimates both model and data uncertainty.',
    description: 'BEAST (Bayesian Exascale Atmospheric Swin Transformer) combines probabilistic weather prediction at 0.25° global resolution with scalable training on supercomputers. Its four-dimensional parallelization distributes work across spatial domains, tensor channels, uncertainty samples, and data. The research evaluates forecasting skill, uncertainty calibration, and extreme weather predictions.',
    points: ['Bayesian estimates of model and data uncertainty.', 'Four-dimensional parallel training on JUPITER and LUMI.', 'Probabilistic global forecasts and extreme weather evaluation.'],
    github: undefined,
    members: ['deifilia-kieckhefen', 'lars-heyen', 'asena-karolin-oezdemir', 'arvid-weyrauch', 'kaleb-phipps', 'markus-goetz', 'charlotte-debus'],
    reference: 'https://arxiv.org/html/2609.12815v1',
  },
  {
    publicationIds: ["goetz2020heat"],
    slug: 'heat', name: 'HeAT', category: 'Distributed computing',
    subtitle: 'Scientific Python, at scale.', image: '/images/projects/heat.svg',
    abstract: 'A distributed tensor framework for data analytics and machine learning, bringing GPU and MPI acceleration to Python workflows.',
    description: 'Scientific datasets can exceed the memory and computing capacity of a single device. HeAT provides distributed tensors and data analytics tools that help Python users work across multiple processes and accelerators. Its NumPy-like interface connects familiar workflows with high-performance computing.',
    points: ['Distributed tensor operations with an approachable Python interface.', 'CPU and GPU execution with MPI-based communication.', 'Tools for linear algebra, statistics, and machine learning.'],
    github: 'https://github.com/helmholtz-analytics/heat',
    members: ['markus-goetz', 'charlotte-debus'],
    reference: 'https://doi.org/10.1109/BigData50022.2020.9378050',
  },
  {
    publicationIds: ["taubert2023propulate"],
    slug: 'propulate', name: 'Propulate', category: 'Bio-inspired optimization',
    subtitle: 'Let better solutions evolve.', image: '/images/projects/propulate.svg',
    abstract: 'Asynchronous, population-based optimization for global optimization and hyperparameter search on high-performance computers.',
    description: 'Searching large parameter spaces requires methods that make efficient use of parallel resources. Propulate implements asynchronous population-based optimization: candidate solutions evolve while workers exchange information without waiting at global synchronization points.',
    points: ['Asynchronous optimization across parallel workers.', 'Evolutionary search for scientific optimization problems.', 'An open-source Python package for reproducible experiments.'],
    github: 'https://github.com/Helmholtz-AI-Energy/propulate',
    members: ['markus-goetz', 'charlotte-debus', 'marie-weiel'],
    reference: 'https://arxiv.org/abs/2301.08713',
  },
  {
    publicationIds: [],
    slug: 'perun', name: 'Perun', category: 'Energy-efficient AI',
    subtitle: 'Make the energy cost visible.', image: '/images/projects/perun.svg',
    abstract: 'A Python tool for measuring application energy consumption, helping researchers understand the resource cost of their computations.',
    description: 'Improving the efficiency of scientific AI begins with measurement. Perun profiles application energy consumption so researchers can examine how computational choices affect resource use. It supports investigating the energy footprint of scientific and machine learning workloads.',
    points: ['Energy profiling for Python applications.', 'Measurements to support comparisons between computational approaches.', 'Open tooling for transparent efficiency research.'],
    github: 'https://github.com/Helmholtz-AI-Energy/perun',
    members: ['charlotte-debus', 'markus-goetz'],
    reference: 'https://github.com/Helmholtz-AI-Energy/perun',
  },
  {
    "slug": "grid-foundation-models",
    "name": "Probabilistic grid models",
    "category": "AI for energy",
    "subtitle": "Learning across distribution networks.",
    "image": "/images/projects/grid-foundation-models.svg",
    "abstract": "Shared models for power-flow and state-estimation tasks.",
    "description": "Paul develops probabilistic models and evaluation workflows for electricity distribution networks, building on the GridFM approach.",
    "points": [
      "Task-specific fine-tuning.",
      "Uncertainty evaluation."
    ],
    "github": undefined,
    "members": [
      "paul-kieckhefen"
    ],
    "reference": "https://kieckhefen.eu/projects/#grid-foundation-models",
    "publicationIds": []
  },
  {
    "slug": "nuclear-surrogate",
    "name": "Nuclear accident surrogates",
    "category": "Scientific surrogate modeling",
    "subtitle": "Explore accident progression faster.",
    "image": "/images/projects/nuclear-surrogate.svg",
    "abstract": "Multimodal surrogates for severe-accident simulations.",
    "description": "Paul develops and evaluates a Transformer surrogate for ASTEC vessel-and-core simulations with the KIT and ASSAS teams.",
    "points": [
      "Joint reactor-state prediction.",
      "Validation on held-out scenarios."
    ],
    "github": undefined,
    "members": [
      "paul-kieckhefen"
    ],
    "reference": "https://kieckhefen.eu/projects/#nuclear-surrogate",
    "publicationIds": []
  },
  {
    "slug": "mri-flow-reconstruction",
    "name": "MRI flow reconstruction",
    "category": "Scientific imaging",
    "subtitle": "Recover three-dimensional flow.",
    "image": "/images/projects/mri-flow-reconstruction.svg",
    "abstract": "Time-resolved volumetric reconstruction from MRI measurements.",
    "description": "Paul builds model and data pipelines with TUHH researchers to reconstruct flow fields from MRI measurements.",
    "points": [
      "Inverse-problem modeling.",
      "Experimental validation."
    ],
    "github": undefined,
    "members": [
      "paul-kieckhefen"
    ],
    "reference": "https://kieckhefen.eu/projects/#mri-flow-reconstruction",
    "publicationIds": []
  },
  {
    "slug": "hydrology-interface",
    "name": "AI for hydrology simulations",
    "category": "Scientific AI assistants",
    "subtitle": "Explore water-management scenarios.",
    "image": "/images/projects/hydrology-interface.svg",
    "abstract": "AI assistance for simulation setup, execution, and exploration.",
    "description": "Paul develops interaction and tool integration for hydrology simulations in the Solution Lab Rur–Erft workflow.",
    "points": [
      "Scenario comparison.",
      "Simulation and visualization tools."
    ],
    "github": undefined,
    "members": [
      "paul-kieckhefen"
    ],
    "reference": "https://kieckhefen.eu/projects/#hydrology-interface",
    "publicationIds": []
  },

];
