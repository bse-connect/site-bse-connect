export const site = {
  name: "BSE Connect",
  baseline: "Systèmes connectés · Sûreté · Supervision",
  url: "https://bseconnect.fr",
  description:
    "Installateur de sûreté électronique et courants faibles en Île-de-France : contrôle d'accès, vidéoprotection, intrusion, câblage. En direct comme en sous-traitance, de l'étude à la recette.",
  contact: {
    email: "contact@bseconnect.com",
    street: "5 rue du Verger",
    postalCode: "77860",
    city: "Saint-Germain-sur-Morin",
    area: "Île-de-France",
  },
  legal: {
    forme: "SASU (société par actions simplifiée à associé unique)",
    capital: "5 000 €",
    siren: "942 752 361",
    siret: "942 752 361 00017",
    rcs: "RCS Meaux 942 752 361",
    immat: "02/04/2025",
    ape: "43.21A — Travaux d'installation électrique dans tous locaux",
    tva: "FR62 942 752 361",
    director: "Lysandre Bavoux",
    insurer: "SMABTP",
    insuranceContract: "Global Constructeur n° K70439C / 1244000 / 001 657540/0",
  },
};

export const nav = [
  { href: "/entreprise", label: "L'entreprise" },
  { href: "/metiers", label: "Nos métiers" },
  { href: "/secteurs", label: "Secteurs" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/qualite", label: "Qualité" },
  { href: "/contact", label: "Contact" },
];

export type MetierImage = { src: string; alt: string; caption: string };

export type Metier = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  intro: string;
  items: string[];
  engage: string;
  image?: string;
  imageAlt?: string;
  gallery?: MetierImage[];
};

export const metiers: Metier[] = [
  {
    slug: "controle-d-acces",
    icon: "access",
    title: "Contrôle d'accès",
    tagline: "Du cylindre connecté à la gestion des flux piétons et véhicules.",
    intro:
      "Nous concevons et posons des solutions de contrôle d'accès adaptées à chaque site : du cylindre électronique autonome ou connecté à la gestion des flux piétons et véhicules, jusqu'au contrôle d'accès filaire multi-portes, sans oublier la sûreté périmétrique.",
    items: [
      "Cylindres et serrures électroniques, autonomes (offline) ou connectés (online)",
      "Gestion des flux piétons : tourniquets, tripodes, portillons et sas sécurisés",
      "Gestion des accès véhicules : barrières levantes, bornes escamotables, portails",
      "Sûreté périmétrique : barrières infrarouges, couplées ou non à des caméras thermiques",
      "Contrôle d'accès filaire : lecteurs, badges, UTL, ventouses, gâches, déclencheurs",
      "Interfaçage avec l'existant, essais fonctionnels et PV de recette",
    ],
    engage:
      "Des accès fiables et lisibles, du badge à la barrière, pensés pour le fonctionnement réel et la sécurité du site.",
    image: "/photos/controle-acces-lecteur-qr.webp",
    imageAlt: "Badge présenté sous un lecteur mural à lecture QR code",
    gallery: [
      {
        src: "/photos/controle-acces-tourniquets.webp",
        alt: "Couloirs rapides vitrés dans un hall d'entreprise",
        caption: "Flux piétons : couloirs rapides, tripodes et portillons",
      },
      {
        src: "/photos/controle-acces-pmr.webp",
        alt: "Passage PMR à battant vitré dans un hall d'accueil",
        caption: "Accessibilité : passages PMR intégrés aux lignes de contrôle",
      },
      {
        src: "/photos/acces-vehicules-perimetrique.webp",
        alt: "Entrée de site avec portail, bornes escamotables et tourniquet toute hauteur",
        caption: "Périmétrique : portail, bornes anti-bélier et tourniquet toute hauteur",
      },
      {
        src: "/photos/controle-acces-speed-gates.webp",
        alt: "Couloirs de contrôle d'accès à battants vitrés",
        caption: "Des équipements intégrés à l'architecture du hall",
      },
    ],
  },
  {
    slug: "videosurveillance",
    icon: "video",
    title: "Vidéosurveillance",
    tagline: "Des systèmes de vidéoprotection intelligents, pas juste des caméras.",
    intro:
      "Nous déployons des systèmes de vidéoprotection complets, de la caméra IP à l'exploitation : analyse d'image, détection d'intrusion par l'image et lecture automatisée de plaques.",
    items: [
      "Caméras IP haute définition, intérieures, extérieures et spécialisées",
      "Analyse d'image / IA : levée de doute, comptage, franchissement de zone",
      "Détection d'intrusion périmétrique par l'image",
      "Lecture automatisée de plaques d'immatriculation (LAPI / LPR)",
      "Enregistreurs, stockage, supervision et recette des vues",
    ],
    engage:
      "Une vidéoprotection pensée pour l'exploitation et la levée de doute — pas un simple alignement de caméras.",
  },
  {
    slug: "intrusion-interphonie",
    icon: "intrusion",
    title: "Intrusion & interphonie",
    tagline: "Une protection cohérente et fiable.",
    intro:
      "Systèmes d'alarme intrusion et d'interphonie / vidéophonie pour bâtiments professionnels, adaptés à l'usage réel du site.",
    items: [
      "Centrales, claviers, détecteurs, sirènes",
      "Platines d'interphonie et de vidéophonie",
      "Raccordements et essais",
      "Accompagnement à la mise en service",
    ],
    engage:
      "Une installation fiable et facile à exploiter, intégrée au reste de votre système de sûreté.",
  },
  {
    slug: "courants-faibles-cablage",
    icon: "cabling",
    title: "Courants faibles & câblage",
    tagline: "Audit, qualification de câblage et génie civil.",
    intro:
      "Au-delà de la pose, nous maîtrisons la chaîne courants faibles de bout en bout : audit d'installations existantes, qualification de câblage, et génie civil pour les réseaux enterrés.",
    items: [
      "Audit et diagnostic d'installations existantes",
      "Câblage VDI : tirage, repérage, sertissage, qualification et recette de câblage",
      "Génie civil : tranchées, pose de fourreaux enterrés, chambres de tirage",
      "Raccordement de baies et de coffrets, brassage",
      "Repérage, plans de recolement et DOE",
    ],
    engage:
      "Une infrastructure courants faibles fiable, mesurée et documentée — la base d'installations de sûreté durables.",
  },
];

export const brandsHighlight = [
  "TIL Technologies / Hirsch",
  "Genetec",
  "Axis",
  "Hikvision",
  "Bosch",
  "Automatic Systems",
  "Aiphone",
];

export const brandsAll = [
  "TIL Technologies / Hirsch", "Axis", "Hikvision", "Hanwha Vision",
  "i-PRO", "Bosch", "Avigilon", "Genetec", "Milestone", "Aritech", "RISCO", "Ajax",
  "STid", "HID", "Salto", "Automatic Systems", "Castel", "Aiphone", "2N", "Legrand",
  "Schneider Electric",
];

export const secteurs = [
  { title: "Tertiaire", desc: "Bureaux, sièges, sites multi-accès." },
  { title: "Sites sensibles", desc: "Accès et installations à protéger, discrétion renforcée." },
  { title: "Institutionnel", desc: "Bâtiments publics et établissements." },
  { title: "Industriel", desc: "Sites de production et logistique." },
  { title: "ERP / site occupé", desc: "Interventions coordonnées, sans interrompre l'activité." },
  { title: "Multi-occupants", desc: "Gestion des accès partagés." },
];
