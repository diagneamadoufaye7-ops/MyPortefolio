export const profile = {
  firstName: "Amadou Faye",
  lastName: "Diagne",
  fullName: "Amadou Faye Diagne",
  initials: "AFD",
  role: "DBA & Data Scientist",
  tagline:
    "Je transforme les données brutes en systèmes fiables et en décisions intelligentes.",
  location: "Dakar, Sénégal",
  summary:
    "Titulaire d'une Licence Professionnelle en Informatique de Gestion, option Sciences des données (mention Très bien), je suis un profil polyvalent entre administration de bases de données, science des données et développement de solutions. Je m'intéresse à l'optimisation des systèmes, l'automatisation des tâches et la création de solutions adaptées aux besoins des entreprises.",
  badges: ["DBA", "Data Scientist", "AWS Certified", "IA & Computer Vision"],
  socials: {
    github: "https://github.com/diagneamadoufaye7-ops",
    linkedin:
      "https://www.linkedin.com/in/el-hadj-amadou-faye-diagne-3331002b9",
  },
  interests: [
    "Technologie et innovation",
    "Sport",
    "Lecture",
    "Entrepreneuriat",
    "Voyage et découverte",
  ],
  languages: [
    { name: "Français", level: "Courant", value: 100 },
    { name: "Wolof", level: "Bilingue", value: 100 },
    { name: "Anglais", level: "Intermédiaire", value: 60 },
  ],
};

export type TimelineItem = {
  id: string;
  kind: "education" | "experience";
  period: string;
  title: string;
  organization: string;
  location: string;
  detail?: string;
  bullets?: string[];
  tags?: string[];
};

export const timeline: TimelineItem[] = [
  {
    id: "exp-sina",
    kind: "experience",
    period: "04/2026 — Aujourd'hui",
    title: "Administrateur de bases de données",
    organization: "Sina Distribution",
    location: "Saint-Louis, Sénégal · CDD",
    bullets: [
      "Administration, maintenance et optimisation des bases de données afin d'assurer leur disponibilité, leur intégrité et leur cohérence.",
      "Collecte, validation, nettoyage, normalisation et consolidation de données issues de multiples sources pour garantir leur qualité.",
      "Intégration, importation et migration des données entre bases locales et environnements en ligne.",
      "Automatisation des workflows de traitement des données afin d'optimiser les processus et réduire les tâches manuelles.",
    ],
    tags: ["PostgreSQL", "SQL", "PowerShell", "Data Quality"],
  },
  {
    id: "edu-iam-licence",
    kind: "education",
    period: "01/2025 — 12/2025",
    title: "Licence Professionnelle — Informatique de Gestion",
    organization: "Institut Africain de Management",
    location: "Dakar, Sénégal",
    detail: "Option : Sciences des données · Mention Très bien",
  },
  {
    id: "exp-3dprod",
    kind: "experience",
    period: "12/2024 — 12/2025",
    title: "Agent de billetterie",
    organization: "3D Prod Events",
    location: "Dakar, Sénégal",
    bullets: [
      "Gestion des transactions financières des ventes de billets, garantissant une précision dans la gestion quotidienne de la caisse.",
      "Certification Foundational C# délivrée par Microsoft obtenue durant cette période.",
    ],
    tags: ["Gestion financière", "C#"],
  },
  {
    id: "edu-isep",
    kind: "education",
    period: "01/2022 — 12/2024",
    title: "BTS — Administration des Bases de Données",
    organization: "ISEP Diamniadio",
    location: "Dakar, Sénégal",
    detail: "Mention Bien",
  },
  {
    id: "edu-bac",
    kind: "education",
    period: "01/2021 — 08/2022",
    title: "Baccalauréat — Sciences Sociales et Humaines",
    organization: "Institut d'Éducation Amadou Sow Ndiaye",
    location: "Saint-Louis, Sénégal",
  },
];

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "databases",
    title: "Bases de données",
    description: "Administration, optimisation et modélisation",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Oracle Apex", "MongoDB"],
  },
  {
    id: "cloud",
    title: "Cloud & AWS",
    description: "Certifié en migration de bases de données vers AWS",
    skills: ["EC2", "RDS", "S3", "CloudWatch", "AWS CLI", "AWS DMS", "IAM"],
  },
  {
    id: "data-ai",
    title: "Data & Intelligence Artificielle",
    description: "Machine Learning et vision par ordinateur",
    skills: [
      "Python",
      "Machine Learning",
      "IA générative",
      "YOLOv8",
      "OpenCV",
      "Streamlit",
    ],
  },
  {
    id: "bi",
    title: "Business Intelligence",
    description: "Visualisation et analyse de données",
    skills: ["Power BI", "Tableau Public", "Excel"],
  },
  {
    id: "dev",
    title: "Développement",
    description: "Langages et frameworks",
    skills: ["SQL", "PL/SQL", "C", "PowerShell", "Django", "ASP.NET", "PHP"],
  },
  {
    id: "modeling",
    title: "Modélisation",
    description: "Conception et méthodes",
    skills: ["UML", "Merise", "Modélisation de données"],
  },
];

export type Project = {
  id: string;
  slug: string;
  period: string;
  category: string;
  title: string;
  context: string;
  description: string;
  bullets: string[];
  stack: string[];
  proof: "live-embed" | "diagram" | "link" | "text";
  links?: { label: string; href: string }[];
  tableauEmbeds?: { title: string; url: string }[];
  highlight?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "churn",
    slug: "etude-churn-client",
    period: "10/2025 — 11/2025",
    category: "Data Science & Business Intelligence",
    title: "Étude du churn client & analyse du chiffre d'affaires",
    context: "Projet académique — Dakar, Sénégal",
    description:
      "Identification des segments clients à risque et recommandations pour réduire l'attrition, à partir de l'analyse du taux de churn par pays, genre, âge et nombre de produits souscrits.",
    bullets: [
      "Nettoyage et préparation des bases de données pour les analyses, contrôle de conformité des données.",
      "Analyse du taux de churn par pays, genre, âge et nombre de produits souscrits.",
      "Identification des facteurs déterminants (ancienneté du client en tête) et des segments à risque.",
      "Visualisation des insights via des tableaux de bord interactifs Tableau Public.",
    ],
    stack: ["SQL", "Python", "Tableau Public", "Power BI", "Excel"],
    proof: "live-embed",
    highlight: [
      { label: "Clients analysés", value: "10 000" },
      { label: "Clients perdus", value: "2 037" },
      { label: "Facteur n°1 du churn", value: "Ancienneté" },
    ],
    tableauEmbeds: [
      {
        title: "Analyse du chiffre d'affaires",
        url: "https://public.tableau.com/shared/N7F7K8QZ2?:display_count=n&:origin=viz_share_link",
      },
      {
        title: "Étude des causes de départ des clients",
        url: "https://public.tableau.com/views/Analysedelattrition_17566682477360/Tableaudebordsurlechurnclient?:language=fr-FR&:display_count=n&:origin=viz_share_link",
      },
      {
        title: "Facteurs expliquant le churn en Allemagne",
        url: "https://public.tableau.com/views/Nombredeclientperdu/FacteursexpliquantlechurnenAllemagne?:language=fr-FR&:display_count=n&:origin=viz_share_link",
      },
    ],
  },
  {
    id: "aws-migration",
    slug: "migration-bases-de-donnees-aws",
    period: "07/2024 — 12/2024",
    category: "Cloud & Administration de bases de données",
    title: "Migration de bases de données vers AWS",
    context: "Projet — Diamniadio, Sénégal",
    description:
      "Migration de bases de données relationnelles et non relationnelles vers le cloud AWS, pour sécuriser et automatiser les sauvegardes, avec deux cas d'usage distincts.",
    bullets: [
      "Cas 1 — Relationnel : développement d'une base PostgreSQL sur instance EC2, migration vers Amazon RDS via réplication logique (pglogical), au sein d'un VPC en subnet privé.",
      "Cas 2 — NoSQL : migration d'une base MongoDB (source) vers Amazon DynamoDB (cible) via un traitement batch-write-item, dans une architecture VPC/EC2.",
      "Supervision des performances via CloudWatch et automatisation des sauvegardes avec PowerShell.",
      "Configuration des rôles IAM et sécurité ; certification obtenue en migration de bases de données vers AWS.",
    ],
    stack: ["PostgreSQL", "AWS RDS", "AWS DMS", "MongoDB", "DynamoDB", "EC2", "VPC", "CloudWatch", "PowerShell", "IAM"],
    proof: "diagram",
    links: [
      {
        label: "Voir le post LinkedIn",
        href: "https://www.linkedin.com/posts/el-hadj-amadou-faye-diagne-3331002b9_migrationcloud-postgresql-mongodb-activity-7276990833113849856-nShM",
      },
    ],
  },
  {
    id: "santeh",
    slug: "santeh-dossier-patient-informatise",
    period: "10/2025 — 12/2025",
    category: "Développement Web & Santé numérique",
    title: "Santeh — Dossier Patient Informatisé intelligent",
    context: "Projet de soutenance — Dakar, Sénégal",
    description:
      "Prototype de Dossier Patient Informatisé (DPI) intelligent, avec base de données centralisée pour la gestion des patients et protection des données médicales.",
    bullets: [
      "Intégration d'une base de données centralisée pour la gestion des patients.",
      "Création d'une interface utilisateur intuitive et sécurisée.",
      "Implémentation de mécanismes de protection des données médicales conformément aux standards de santé numérique.",
    ],
    stack: ["Développement Web", "Bases de données", "Sécurité des données"],
    proof: "link",
    links: [
      {
        label: "Voir la démo vidéo (LinkedIn)",
        href: "https://www.linkedin.com/posts/el-hadj-amadou-faye-diagne-3331002b9_santaeznumaezrique-dossierpatientinformatisaez-activity-7412961410621538304-ChgZ",
      },
    ],
  },
  {
    id: "yolo-epi",
    slug: "detection-epi-yolov8",
    period: "10/2025 — Aujourd'hui",
    category: "Intelligence Artificielle & Computer Vision",
    title: "Détection intelligente du port des EPI",
    context: "Projet académique — Dakar, Sénégal",
    description:
      "Système intelligent de détection du port des équipements de protection individuelle (EPI), basé sur un modèle YOLOv8 et une analyse vidéo en temps réel.",
    bullets: [
      "Développement d'un modèle YOLOv8 pour identifier les EPI.",
      "Analyse d'images et de flux vidéo en temps réel avec Streamlit.",
      "Mise en place d'alertes automatiques en cas de non-conformité.",
    ],
    stack: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
    proof: "text",
  },
  {
    id: "mysql-optim",
    slug: "optimisation-mysql",
    period: "03/2024 — 04/2024",
    category: "Administration de bases de données",
    title: "DBA Junior — Optimisation MySQL",
    context: "Institut Africain de Management (IAM) — Dakar, Sénégal",
    description:
      "Analyse et optimisation des performances d'une base MySQL par l'identification et la correction des requêtes lentes.",
    bullets: [
      "Analyse et identification des requêtes lentes.",
      "Ajout d'index et optimisation des requêtes SQL.",
      "Amélioration du temps d'exécution des requêtes.",
      "Automatisation de tâches d'administration avec PowerShell.",
    ],
    stack: ["MySQL", "SQL", "PowerShell"],
    proof: "text",
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    id: "aws-migration-cert",
    title: "Migration de bases de données vers AWS",
    issuer: "AWS",
    description:
      "Certification obtenue à l'issue du projet de migration PostgreSQL → RDS et MongoDB → DynamoDB.",
  },
  {
    id: "ms-csharp",
    title: "Foundational C#",
    issuer: "Microsoft",
    description: "Certification fondamentale sur le langage C#.",
  },
];

export const seo = {
  title: "Amadou Faye Diagne — DBA & Data Scientist",
  description:
    "Portfolio d'Amadou Faye Diagne, DBA & Data Scientist basé à Dakar, Sénégal. Administration de bases de données, migration Cloud AWS, Data Science et Intelligence Artificielle.",
  keywords: [
    "Amadou Faye Diagne",
    "DBA",
    "Data Scientist",
    "AWS",
    "Cloud Migration",
    "PostgreSQL",
    "Machine Learning",
    "YOLOv8",
    "Power BI",
    "Data Engineer",
    "Dakar",
    "Sénégal",
  ],
};
