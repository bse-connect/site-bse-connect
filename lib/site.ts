export const site = {
  name: "BSE Connect",
  baseline: "Systèmes connectés · Sûreté · Supervision",
  url: "https://bseconnect.fr",
  description:
    "Installateur de sûreté électronique et courants faibles en Île-de-France : contrôle d'accès, vidéosurveillance, intrusion, câblage. En direct comme en sous-traitance, de l'étude à la recette.",
  contact: {
    phone: "06 59 89 51 22",
    phoneHref: "tel:+33659895122",
    email: "lysandre@bseconnect.com",
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

export type Metier = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  intro: string;
  items: string[];
  engage: string;
};

export const metiers: Metier[] = [
  {
    slug: "controle-d-acces",
    icon: "access",
    title: "Contrôle d'accès",
    tagline: "Du simple accès au multi-portes.",
    intro:
      "Installations de contrôle d'accès pour bâtiments professionnels, de l'accès isolé au système multi-portes et multi-niveaux, y compris en site occupé.",
    items: [
      "Lecteurs de badges, boutons poussoirs, ventouses, gâches",
      "Coffrets, UTL, modules de porte, déclencheurs manuels",
      "Tourniquets piétons sécurisés",
      "Interfaces avec les automatismes existants",
      "Essais fonctionnels et PV de recette",
    ],
    engage:
      "Une pose propre et repérée, adaptée au fonctionnement réel du site, avec des essais documentés.",
  },
  {
    slug: "videosurveillance",
    icon: "video",
    title: "Vidéosurveillance",
    tagline: "De la caméra à la recette des vues.",
    intro:
      "Pose, raccordement et mise en service de caméras IP intérieures et extérieures, du besoin ponctuel au projet complet de vidéoprotection.",
    items: [
      "Pose de caméras et de supports",
      "Boîtes de jonction, tirage RJ45, raccordement réseau",
      "Repérage, tests, vérification des vues",
      "Documents de recette",
    ],
    engage:
      "Des champs de vision vérifiés, un câblage soigné et une installation pensée pour l'exploitation.",
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
    tagline: "La base d'une installation durable — VRD inclus.",
    intro:
      "L'ensemble des travaux de courants faibles nécessaires à vos installations de sûreté — et, quand le chantier l'exige, les travaux annexes de VRD.",
    items: [
      "Tirage de câbles, cheminements, goulottes, gaines, fourreaux",
      "Tranchées et VRD ponctuel",
      "Repérage, sertissage, raccordement de coffrets et de baies",
      "Nettoyage et finitions de chantier",
    ],
    engage:
      "Nous prenons en charge la partie terrain — souvent la plus déterminante — pour une installation propre et durable.",
  },
];

export const brandsHighlight = [
  "TIL Technologies / Hirsch",
  "Sécurité Système",
  "Genetec",
  "Axis",
  "Hikvision",
  "Bosch",
  "Automatic Systems",
  "Aiphone",
];

export const brandsAll = [
  "TIL Technologies / Hirsch", "Sécurité Système", "Axis", "Hikvision", "Hanwha Vision",
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
