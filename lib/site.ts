export const site = {
  name: "BSE Connect",
  baseline: "Systèmes connectés · Sûreté · Supervision",
  url: "https://bseconnect.fr",
  description:
    "Installateur de sûreté électronique et courants faibles en Île-de-France : contrôle d'accès, vidéoprotection, intrusion, câblage. En direct comme en sous-traitance, de l'étude à la recette.",
  contact: {
    email: "admin@bseconnect.com",
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
    director: "le Président de BSE Connect",
    insurer: "SMABTP",
    insuranceContract: "Global Constructeur",
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
  cardImage?: string;
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
    cardImage: "/photos/controle-acces-speed-gates.webp",
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
    image: "/photos/videosurveillance-camera-dome.webp",
    imageAlt: "Caméra dôme de vidéosurveillance sur une façade moderne",
    cardImage: "/photos/videosurveillance-camera-dome.webp",
    gallery: [
      {
        src: "/photos/videosurveillance-analyse-ia.webp",
        alt: "Vue de vidéoprotection avec cadres de détection et identifiants de suivi",
        caption: "Analyse d'image : détection, suivi et levée de doute",
      },
      {
        src: "/photos/supervision-centre.webp",
        alt: "Mur d'écrans de supervision affichant des flux de vidéoprotection",
        caption: "Supervision : exploitation des flux et cartographie",
      },
    ],
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
    image: "/photos/intrusion-detection-exterieure.webp",
    imageAlt: "Détection extérieure couvrant une cour logistique au crépuscule",
    cardImage: "/photos/intrusion-detection-exterieure.webp",
    gallery: [
      {
        src: "/photos/intrusion-barrieres-infrarouges.webp",
        alt: "Colonnes de barrières infrarouges le long d'une clôture de site industriel",
        caption: "Périmétrique : barrières infrarouges en continuité, plus hautes que la clôture",
      },
      {
        src: "/photos/intrusion-clavier-alarme.webp",
        alt: "Clavier d'alarme intrusion mural avec écran tactile",
        caption: "Intrusion : centrales, claviers et organes de commande",
      },
      {
        src: "/photos/interphonie-platine.webp",
        alt: "Platine de rue multifonctions avec annuaire, clavier à code et lecteur de badge",
        caption: "Interphonie : platines multifonctions (annuaire, code, badge)",
      },
      {
        src: "/photos/interphonie-moniteur.webp",
        alt: "Réponse sur moniteur intérieur de visiophonie à un comptoir d'accueil",
        caption: "Visiophonie : voir qui sonne et ouvrir à distance",
      },
    ],
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
    image: "/photos/courants-faibles-baie-brassage.webp",
    imageAlt: "Baie de brassage ouverte au câblage organisé et étiqueté",
    cardImage: "/photos/courants-faibles-baie-brassage.webp",
    gallery: [
      {
        src: "/photos/courants-faibles-brassage-fibre.webp",
        alt: "Jarretières de fibre optique étiquetées raccordées à un tiroir optique",
        caption: "Fibre et VDI : brassage repéré, qualifié et documenté",
      },
      {
        src: "/photos/chantier-fourreaux-detail.webp",
        alt: "Tranchée rectiligne avec fourreaux TPC et grillage avertisseur",
        caption: "Génie civil : tranchées, fourreaux et chambres de tirage",
      },
    ],
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
