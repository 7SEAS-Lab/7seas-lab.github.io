export interface ProjectMember {
  slug: string;
  contribution?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  subtitle: string;
  image: string;
  imageCredit?: { label: string; url: string };
  abstract: string;
  description: string;
  points: string[];
  github?: string;
  members: ProjectMember[];
  reference: string;
  publicationIds: string[];
}

// Define associations here once; both project and member pages use this list.
// Add a contribution when the member's specific work is confirmed.
export const projects: Project[] = [
  {
    publicationIds: ["kieckhefen2026beast"],
    slug: 'beast', name: 'BEAST', category: 'Bayesian atmospheric forecasting',
    subtitle: 'Global forecasts. Calibrated uncertainty.', image: '/images/projects/beast.svg',
    abstract: 'A Bayesian Swin Transformer for global atmospheric forecasting that estimates both model and data uncertainty.',
    description: 'BEAST (Bayesian Exascale Atmospheric Swin Transformer) combines probabilistic weather prediction at 0.25° global resolution with scalable training on supercomputers. Its four-dimensional parallelization distributes work across spatial domains, tensor channels, uncertainty samples, and data. The research evaluates forecasting skill, uncertainty calibration, and extreme weather predictions.',
    points: ['Bayesian estimates of model and data uncertainty.', 'Four-dimensional parallel training on JUPITER and LUMI.', 'Probabilistic global forecasts and extreme weather evaluation.'],
    github: undefined,
    members: [
      {
        slug: 'deifilia-kieckhefen',
        contribution: 'Joint first author of the BEAST paper, contributing to the research on Bayesian atmospheric forecasting with uncertainty quantification and scalable training.',
      },
      { slug: 'jpghm', contribution: 'Also a joint first author of the BEAST ...'}, 
      { slug: 'lars-heyen' },
      { slug: 'asena-karolin-oezdemir' },
      { slug: 'arvid-weyrauch' },
      { slug: 'kaleb-phipps' },
      { slug: 'markus-goetz' },
      { slug: 'charlotte-debus' },
    ],
    reference: 'https://arxiv.org/html/2609.12815v1',
  },
  {
    publicationIds: ["goetz2020heat"],
    slug: 'heat', name: 'HeAT', category: 'Distributed computing',
    subtitle: 'Scientific Python, at scale.', image: '/images/projects/heat.svg',
    imageCredit: { label: 'HeAT project logo', url: 'https://github.com/helmholtz-analytics/heat' },
    abstract: 'A distributed tensor framework for data analytics and machine learning, bringing GPU and MPI acceleration to Python workflows.',
    description: 'Scientific datasets can exceed the memory and computing capacity of a single device. HeAT provides distributed tensors and data analytics tools that help Python users work across multiple processes and accelerators. Its NumPy-like interface connects familiar workflows with high-performance computing.',
    points: ['Distributed tensor operations with an approachable Python interface.', 'CPU and GPU execution with MPI-based communication.', 'Tools for linear algebra, statistics, and machine learning.'],
    github: 'https://github.com/helmholtz-analytics/heat',
    members: [{ slug: 'markus-goetz' }, { slug: 'charlotte-debus' }, { slug: 'jpghm', contribution: 'Active developer, Cx enthusiast, and MPI performance guru.'}],
    reference: 'https://doi.org/10.1109/BigData50022.2020.9378050',
  },
  {
    publicationIds: ["taubert2023propulate"],
    slug: 'propulate', name: 'Propulate', category: 'Bio-inspired optimization',
    subtitle: 'Let better solutions evolve.', image: '/images/projects/propulate.svg',
    imageCredit: { label: 'Propulate project logo', url: 'https://github.com/Helmholtz-AI-Energy/propulate' },
    abstract: 'Asynchronous, population-based optimization for global optimization and hyperparameter search on high-performance computers.',
    description: 'Searching large parameter spaces requires methods that make efficient use of parallel resources. Propulate implements asynchronous population-based optimization: candidate solutions evolve while workers exchange information without waiting at global synchronization points.',
    points: ['Asynchronous optimization across parallel workers.', 'Evolutionary search for scientific optimization problems.', 'An open-source Python package for reproducible experiments.'],
    github: 'https://github.com/Helmholtz-AI-Energy/propulate',
    members: [{ slug: 'markus-goetz' }, { slug: 'charlotte-debus' }, { slug: 'marie-weiel' }],
    reference: 'https://arxiv.org/abs/2301.08713',
  },
  {
    publicationIds: [],
    slug: 'perun', name: 'Perun', category: 'Energy-efficient AI',
    subtitle: 'Make the energy cost visible.', image: '/images/projects/perun.svg',
    imageCredit: { label: 'Perun project logo', url: 'https://github.com/Helmholtz-AI-Energy/perun' },
    abstract: 'A Python tool for measuring application energy consumption in HPC systems, helping researchers understand the resource cost of their computations.',
    description: 'Improving the efficiency of scientific AI begins with measurement. Perun profiles application energy consumption so researchers can examine how computational choices affect resource use. It supports investigating the energy footprint of scientific and machine learning workloads.',
    points: ['Energy profiling for Python applications.', 'Measurements to support comparisons between computational approaches.', 'Open tooling for transparent efficiency research.'],
    github: 'https://github.com/Helmholtz-AI-Energy/perun',
    members: [{slug: 'jpghm', contribution: 'Author'}],
    reference: 'https://link.springer.com/chapter/10.1007/978-3-031-39698-4_2',
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
    members: [
      { slug: 'paul-kieckhefen', contribution: 'Developed the probabilistic model and evaluation workflow, adapting the GridFM approach to energy-research applications such as optimal power flow and state estimation.' }
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
    imageCredit: { label: 'ASSAS project logo', url: 'https://assas-horizon-euratom.eu/' },
    "abstract": "Multimodal surrogates for severe-accident simulations.",
    "description": "Paul develops and evaluates a Transformer surrogate for ASTEC vessel-and-core simulations with the KIT and ASSAS teams.",
    "points": [
      "Joint reactor-state prediction.",
      "Validation on held-out scenarios."
    ],
    "github": undefined,
    members: [
      { slug: 'paul-kieckhefen', contribution: 'Designed and evaluated the vessel-and-core surrogate with the KIT and ASSAS teams, validating predictions on held-out accident rollouts.' }
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
    members: [
      { slug: 'paul-kieckhefen', contribution: 'Built the three-dimensional data and model pipeline with researchers at the TUHH Institute of Process Imaging for time-resolved flow reconstruction.' }
    ],
    "reference": "https://kieckhefen.eu/projects/#mri-flow-reconstruction",
    "publicationIds": []
  },
  {
    "slug": "hydrology-interface",
    "name": "Agentic model chains for water management",
    "category": "Scientific AI assistants & model integration",
    "subtitle": "Explore water-management scenarios.",
    "image": "/images/projects/hydrology-interface.svg",
    "abstract": "An agentic interface and model chain framework for the Solution Lab Rur–Erft digital twin.",
    "description": "Solution Lab Rur–Erft connects scientific models, data, and visualizations to help stakeholders explore droughts, floods, and water-management scenarios. Its digital twin brings together climate, surface and subsurface hydrology, hydraulics, agriculture, and socio-economic modeling. Paul implemented the agentic interface and model chain framework, enabling users to set up simulations, run model workflows, and explore results in response to stakeholder questions.",
    "points": [
      "Agentic interaction for simulation setup, execution, and result exploration.",
      "A model chain framework connecting scientific models into workflows.",
      "Exploration of stakeholder-defined water-management scenarios."
    ],
    "github": undefined,
    members: [
      { slug: 'paul-kieckhefen', contribution: 'Implemented the agentic interface and model chain framework for the Solution Lab Rur–Erft digital twin, connecting simulation tools into workflows for scenario setup, execution, and result exploration.' }
    ],
    "reference": "https://solution-lab-rur-erft.org/",
    "publicationIds": []
  },

];
