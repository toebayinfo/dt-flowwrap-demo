import type { L } from "./i18n";

/* ---------------------------------- Products ---------------------------------- */

export interface Product {
  id: string;
  name: L;
  tagline: L;
  desc: L;
  image: string;
  speed: { value: string; unit: L };
  models?: string[];
  features: { en: string[]; fr: string[] };
  applications: { en: string[]; fr: string[] };
}

export const products: Product[] = [
  {
    id: "flow-wrap",
    name: { en: "Horizontal Flow-Wrap Machines", fr: "Machines flow-wrap horizontales" },
    tagline: {
      en: "High-speed pillow packs for bars, bakery and single-serve products.",
      fr: "Sachets coussin à haute cadence pour barres, boulangerie et portions individuelles.",
    },
    desc: {
      en: "Our horizontal form-fill-seal wrappers run from compact entry models to 300-pack-per-minute servo platforms with automatic splicing, no-product-no-bag logic and full washdown options. Ideal when presentation and speed both matter.",
      fr: "Nos ensacheuses horizontales vont du modèle compact d'entrée de gamme jusqu'aux plateformes servo à 300 emballages/minute, avec raccord automatique, fonction « pas de produit, pas de sachet » et options de lavage intégral. Idéal quand présentation et cadence comptent autant l'une que l'autre.",
    },
    image: "/dt-flowwrap-demo/images/product-flow-wrap.png",
    speed: { value: "300", unit: { en: "packs/min", fr: "emb./min" } },
    models: ["T-250", "T-350", "T-400X", "T-450", "T-550", "DT-700X"],
    features: {
      en: [
        "Servo-driven sealing jaws for consistent seals at speed",
        "Automatic film splicing & registration correction",
        "No-product-no-bag and misplaced-product detection",
        "Stainless washdown construction (IP65 option)",
        "Recipe-based changeover in under 5 minutes",
        "Integration with feeders, printers and checkweighers",
      ],
      fr: [
        "Mâchoires de scellage asservies pour des soudures constantes à haute cadence",
        "Raccord de film automatique et correction de repérage",
        "Détection « pas de produit, pas de sachet » et produit mal placé",
        "Construction inox lavable (option IP65)",
        "Changement de format par recettes en moins de 5 minutes",
        "Intégration avec alimentateurs, imprimantes et trieuses pondérales",
      ],
    },
    applications: {
      en: ["Granola & protein bars", "Bakery & pastries", "Chocolate & confectionery", "Frozen novelties", "Hardware & wipes"],
      fr: ["Barres granola et protéinées", "Boulangerie et pâtisserie", "Chocolat et confiserie", "Desserts glacés", "Quincaillerie et lingettes"],
    },
  },
  {
    id: "vffs",
    name: { en: "Vertical (VFFS) Machines", fr: "Machines verticales (VFFS)" },
    tagline: {
      en: "Pillow, gusset and quad-seal bags from roll stock — weighed, filled and sealed in one footprint.",
      fr: "Sachets coussin, à soufflets ou quad-seal à partir de bobine — pesés, remplis et scellés dans un format compact.",
    },
    desc: {
      en: "Paired with multihead weighers, augers or volumetric cups, our VFFS platforms handle snacks, coffee, frozen foods and powders at up to 180 bags per minute, with gas flushing, zipper applicators and dust-tight options.",
      fr: "Combinées à des peseuses multitêtes, doseuses à vis ou godets volumétriques, nos plateformes VFFS traitent collations, café, surgelés et poudres jusqu'à 180 sachets/minute, avec injection de gaz, applicateurs de zip et options anti-poussière.",
    },
    image: "/dt-flowwrap-demo/images/product-vffs.png",
    speed: { value: "180", unit: { en: "bags/min", fr: "sachets/min" } },
    models: ["V-160", "V-260", "V-S160", "VL-160", "VL-680", "LV-900"],
    features: {
      en: [
        "Intermittent or continuous-motion sealing",
        "Multihead weigher, auger & cup filler integration",
        "Gas flush (MAP) and vacuum options",
        "Zipper, valve and label applicators",
        "Gusset, quad-seal & pillow bag formats",
        "Tool-free forming tube changeover",
      ],
      fr: [
        "Scellage intermittent ou à mouvement continu",
        "Intégration peseuse multitêtes, vis sans fin et godets",
        "Options injection de gaz (MAP) et vide",
        "Applicateurs de zip, valve et étiquette",
        "Formats soufflets, quad-seal et coussin",
        "Changement de tube formeur sans outil",
      ],
    },
    applications: {
      en: ["Chips & snacks", "Coffee & tea", "Frozen vegetables", "Powders & grains", "Pet food & treats"],
      fr: ["Croustilles et collations", "Café et thé", "Légumes surgelés", "Poudres et céréales", "Nourriture et gâteries pour animaux"],
    },
  },
  {
    id: "roll-film",
    name: { en: "Roll Film Systems", fr: "Systèmes de film en bobine" },
    tagline: {
      en: "Unwind, tension, register and splice — film handling that keeps the line at rate.",
      fr: "Déroulage, tension, repérage et raccord — une gestion du film qui maintient la cadence.",
    },
    desc: {
      en: "Film is where most lines lose uptime. Our roll film systems manage unwinding, tension, print registration and automatic splicing so your wrappers never starve — and we supply the films to match.",
      fr: "Le film est là où la plupart des lignes perdent en disponibilité. Nos systèmes de film en bobine gèrent déroulage, tension, repérage d'impression et raccord automatique pour que vos ensacheuses ne manquent jamais — et nous fournissons les films assortis.",
    },
    image: "/dt-flowwrap-demo/images/product-roll-film.png",
    speed: { value: "600", unit: { en: "mm film width", fr: "mm de largeur" } },
    features: {
      en: [
        "Motorized unwind with closed-loop tension control",
        "Print registration with auto-correction",
        "Zero-speed automatic splicing options",
        "Splice & end-of-roll detection",
        "Compatibility with recyclable mono-material films",
        "Film supply program with test rolls",
      ],
      fr: [
        "Dérouleur motorisé avec contrôle de tension en boucle fermée",
        "Repérage d'impression avec correction automatique",
        "Options de raccord automatique à vitesse nulle",
        "Détection de raccord et de fin de bobine",
        "Compatible avec les films mono-matériaux recyclables",
        "Programme d'approvisionnement en film avec bobines d'essai",
      ],
    },
    applications: {
      en: ["Printed flow-wrap film", "Laminates & mono-materials", "Shrink & barrier films", "Cold-seal applications", "High-speed wrappers"],
      fr: ["Film flow-wrap imprimé", "Laminés et mono-matériaux", "Films rétractables et barrières", "Applications à scellage à froid", "Ensacheuses haute cadence"],
    },
  },
  {
    id: "standup-bag",
    name: { en: "Stand-Up Bag Machines", fr: "Machines pour sachets stand-up" },
    tagline: {
      en: "Premade pouches and doypacks filled, zipped and sealed for shelf-ready presentation.",
      fr: "Pochettes préformées et doypacks remplies, zippées et scellées, prêtes pour le rayon.",
    },
    desc: {
      en: "Rotary pouch machines that open, fill and seal premade stand-up pouches with zipper detection, nitrogen flush and checkweigh feedback — perfect for coffee, snacks, pet treats and powders that need shelf presence.",
      fr: "Machines rotatives à pochette qui ouvrent, remplissent et scellent les sachets stand-up préformés, avec détection de zip, injection d'azote et rétroaction pondérale — parfait pour café, collations, gâteries pour animaux et poudres qui exigent un bel impact en rayon.",
    },
    image: "/dt-flowwrap-demo/images/product-standup-bag.png",
    speed: { value: "80", unit: { en: "pouches/min", fr: "pochettes/min" } },
    models: ["POU-500V"],
    features: {
      en: [
        "Rotary 8-station platform, compact footprint",
        "Zipper opening & detection stations",
        "Nitrogen flush for shelf-life extension",
        "Checkweigher feedback for auto-trim dosing",
        "Handles flat, gusseted and doypack pouches",
        "Quick pouch-size changeover with presets",
      ],
      fr: [
        "Plateforme rotative à 8 stations, format compact",
        "Stations d'ouverture et de détection de zip",
        "Injection d'azote pour prolonger la durée de conservation",
        "Rétroaction de la trieuse pondérale pour dosage auto-ajusté",
        "Pochettes plates, à soufflets et doypacks",
        "Changement de format rapide avec préréglages",
      ],
    },
    applications: {
      en: ["Coffee & specialty roasts", "Granola & trail mix", "Pet treats", "Protein powders", "Dried fruit & nuts"],
      fr: ["Café et torréfactions de spécialité", "Granola et mélanges montagnards", "Gâteries pour animaux", "Poudres protéinées", "Fruits séchés et noix"],
    },
  },
  {
    id: "cartoning",
    name: { en: "Box & Carton Packing", fr: "Emboîtage et encaissage" },
    tagline: {
      en: "End-of-line cartoners and case packers that close the loop on your line.",
      fr: "Encartonneuses et encaisseuses de fin de ligne qui bouclent votre production.",
    },
    desc: {
      en: "From carton erecting and top-load robotic packing to wrap-around case packing and sealing, we design end-of-line systems that take your wrapped product all the way to the pallet.",
      fr: "Du formage de cartons à l'encaissage robotisé par le dessus, en passant par l'encaissage enveloppant et la fermeture, nous concevons des systèmes de fin de ligne qui mènent votre produit emballé jusqu'à la palette.",
    },
    image: "/dt-flowwrap-demo/images/product-carton.png",
    speed: { value: "30", unit: { en: "cases/min", fr: "caisses/min" } },
    models: ["M-285O"],
    features: {
      en: [
        "Carton erecting, loading & closing in one cell",
        "Robotic pick-and-place top loading",
        "Wrap-around and RSC case packing",
        "Glue or tape sealing options",
        "Integrated checkweigh & metal detection upstream",
        "Line layout design with 3D simulation",
      ],
      fr: [
        "Formage, chargement et fermeture de cartons dans une même cellule",
        "Chargement robotisé par le dessus",
        "Encaissage enveloppant et caisses RSC",
        "Fermeture par colle ou ruban adhésif",
        "Trieuse pondérale et détection de métaux intégrées en amont",
        "Conception d'implantation avec simulation 3D",
      ],
    },
    applications: {
      en: ["Cartoned bars & pouches", "Retail-ready cases", "Club-store formats", "E-commerce shippers", "Multi-pack bundles"],
      fr: ["Barres et sachets en carton", "Caisses prêtes à vendre", "Formats club-entrepôt", "Emballages e-commerce", "Multipacks"],
    },
  },
  {
    id: "carry-card",
    name: { en: "Carry Card Packaging", fr: "Emballage sur carte de présentation" },
    tagline: {
      en: "Hang-tab and carded packaging for retail display — sealed, printed and shelf-ready.",
      fr: "Emballage carte avec trou de suspension pour présentation en rayon — scellé, imprimé et prêt à vendre.",
    },
    desc: {
      en: "For products that sell on a peg, our carry card systems place, seal and code product on printed backing cards with euro-slot hang holes — from blister-style cards to paperboard wallets.",
      fr: "Pour les produits vendus sur broche, nos systèmes de cartes de présentation placent, scellent et codent le produit sur cartes imprimées avec trou européen — des cartes type blister aux emballages cartonnés.",
    },
    image: "/dt-flowwrap-demo/images/product-carry-card.png",
    speed: { value: "120", unit: { en: "cards/min", fr: "cartes/min" } },
    features: {
      en: [
        "Automatic card feeding & product placement",
        "Heat-seal, cold-seal & adhesive options",
        "Euro-slot and custom hang-hole formats",
        "Inkjet & label coding inline",
        "Vision inspection for card/product alignment",
        "Small-footprint semi-auto models available",
      ],
      fr: [
        "Alimentation automatique des cartes et placement du produit",
        "Options scellage à chaud, à froid et adhésif",
        "Trou européen et formats de suspension sur mesure",
        "Codage jet d'encre et étiquetage en ligne",
        "Inspection par vision de l'alignement carte/produit",
        "Modèles semi-automatiques compacts disponibles",
      ],
    },
    applications: {
      en: ["Batteries & small hardware", "Personal care items", "Confectionery multipacks", "Promotional bundles", "Accessories & parts"],
      fr: ["Piles et petite quincaillerie", "Articles de soins personnels", "Multipacks de confiserie", "Ensembles promotionnels", "Accessoires et pièces"],
    },
  },
];

/* ---------------------------------- Services ---------------------------------- */

export interface Service {
  id: string;
  icon: string;
  title: L;
  desc: L;
  points: { en: string[]; fr: string[] };
}

export const services: Service[] = [
  {
    id: "installation",
    icon: "Wrench",
    title: { en: "Installation & Commissioning", fr: "Installation et mise en service" },
    desc: {
      en: "Our own technicians rig, level, connect and commission your line — then run it at rate with your product before sign-off.",
      fr: "Nos propres techniciens installent, mettent à niveau, raccordent et mettent en service votre ligne — puis la font tourner à cadence avec votre produit avant l'approbation.",
    },
    points: {
      en: ["Site readiness checklist before delivery", "Mechanical, electrical & network hookup", "SAT with your product at target rate", "HMI localized in English or French"],
      fr: ["Liste de préparation du site avant livraison", "Raccordement mécanique, électrique et réseau", "Essais d'acceptation avec votre produit à cadence cible", "IHM en français ou en anglais"],
    },
  },
  {
    id: "training",
    icon: "GraduationCap",
    title: { en: "Operator & Maintenance Training", fr: "Formation des opérateurs et de la maintenance" },
    desc: {
      en: "Hands-on training on your floor, in your language — operators, sanitation and maintenance each get a dedicated session.",
      fr: "Formation pratique chez vous, dans votre langue — opérateurs, assainissement et maintenance ont chacun leur séance dédiée.",
    },
    points: {
      en: ["Operator, sanitation & maintenance tracks", "Bilingual manuals & quick-reference cards", "Video refreshers for new hires", "Train-the-trainer programs"],
      fr: ["Parcours opérateur, assainissement et maintenance", "Manuels et aide-mémoire bilingues", "Vidéos de rappel pour les nouveaux employés", "Programmes de formation de formateurs"],
    },
  },
  {
    id: "support",
    icon: "Headset",
    title: { en: "After-Sales Support & Parts", fr: "Soutien après-vente et pièces" },
    desc: {
      en: "Remote diagnostics the same day, technicians on site in 24–72 hours across Ontario and Québec, and critical spares stocked in Canada.",
      fr: "Diagnostics à distance le jour même, techniciens sur place en 24 à 72 heures en Ontario et au Québec, et pièces critiques en stock au Canada.",
    },
    points: {
      en: ["Same-day remote diagnosis via secure VPN", "24–72 h on-site response across ON & QC", "Canadian-stocked critical spares", "Preventive maintenance plans & audits"],
      fr: ["Diagnostic à distance le jour même par VPN sécurisé", "Intervention en 24–72 h en ON et au QC", "Pièces critiques entreposées au Canada", "Plans et audits d'entretien préventif"],
    },
  },
  {
    id: "custom",
    icon: "Settings2",
    title: { en: "Custom Configuration", fr: "Configuration sur mesure" },
    desc: {
      en: "Odd product? Tight floor? Existing equipment to keep? We engineer infeeds, transfers and layouts around your reality.",
      fr: "Produit atypique? Espace restreint? Équipement existant à conserver? Nous concevons alimentations, transferts et implantations selon votre réalité.",
    },
    points: {
      en: ["Product & film testing before you commit", "Custom infeeds, transfers & guarding", "Integration with your existing equipment", "3D layout & throughput simulation"],
      fr: ["Essais produit et film avant engagement", "Alimentations, transferts et protections sur mesure", "Intégration à votre équipement existant", "Implantation 3D et simulation de débit"],
    },
  },
];

/* --------------------------------- Testimonials -------------------------------- */

export interface Testimonial {
  quote: L;
  name: string;
  role: L;
  company: string;
  location: string;
  machine: L;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: "Our flow wrapper paid for itself in eleven months. Changeovers that used to take my crew 40 minutes now happen during a break. When we did have a sensor issue, a technician was at our Guelph plant the next morning.",
      fr: "Notre ensacheuse s'est payée en onze mois. Les changements de format qui prenaient 40 minutes à mon équipe se font maintenant pendant la pause. Quand nous avons eu un problème de capteur, un technicien était à notre usine de Guelph le lendemain matin.",
    },
    name: "Sarah Thompson",
    role: { en: "Plant Manager", fr: "Directrice d'usine" },
    company: "Maple Grove Snacks",
    location: "Guelph, ON",
    machine: { en: "T-250 Flow Wrapper", fr: "Ensacheuse T-250" },
    rating: 5,
  },
  {
    quote: {
      en: "The whole process — quote, HMI screens, manuals, training — was available in French without us having to ask. Our operators were confident on the VFFS by day two. That has never happened with an equipment supplier before.",
      fr: "Tout le processus — devis, écrans IHM, manuels, formation — était disponible en français sans qu'on ait à le demander. Nos opérateurs étaient à l'aise sur la VFFS dès le deuxième jour. Ça ne nous était jamais arrivé avec un fournisseur d'équipement.",
    },
    name: "Martin Lacroix",
    role: { en: "Production Director", fr: "Directeur de production" },
    company: "Biscuiterie Laurent",
    location: "Montréal, QC",
    machine: { en: "V-260 VFFS with weigher", fr: "VFFS V-260 avec peseuse" },
    rating: 5,
  },
  {
    quote: {
      en: "We were hand-packing coffee pouches at 12 a minute and drowning in labor. The stand-up pouch line they configured runs 65 a minute with one operator. The nitrogen flush doubled our shelf life and got us into two national retailers.",
      fr: "Nous emballions le café à la main à 12 sachets/minute et nous croulions sous la main-d'œuvre. La ligne de pochettes stand-up qu'ils ont configurée tourne à 65/minute avec un seul opérateur. L'injection d'azote a doublé notre durée de conservation et nous a ouvert deux bannières nationales.",
    },
    name: "Mike O'Connell",
    role: { en: "Operations Manager", fr: "Directeur des opérations" },
    company: "Great Lakes Coffee Roasters",
    location: "Hamilton, ON",
    machine: { en: "POU-500V pouch line", fr: "Ligne de pochettes POU-500V" },
    rating: 5,
  },
  {
    quote: {
      en: "Three seasons in, the cartoner is the most reliable machine on our floor. Their preventive maintenance plan catches things before they cost us a shift — they swapped a worn belt at a planned stop that would have failed mid-run.",
      fr: "Après trois saisons, l'encartonneuse est la machine la plus fiable de l'usine. Leur plan d'entretien préventif détecte les problèmes avant qu'ils nous coûtent un quart — ils ont remplacé une courroie usée lors d'un arrêt planifié; elle aurait lâché en pleine production.",
    },
    name: "David Chen",
    role: { en: "VP of Operations", fr: "V.-p. aux opérations" },
    company: "TrueNorth Confections",
    location: "Toronto, ON",
    machine: { en: "Top-load cartoner", fr: "Encartonneuse à chargement par le dessus" },
    rating: 5,
  },
  {
    quote: {
      en: "As a small cheese producer, I expected to be a small fish. Instead they tested our curds on three machines before recommending the right one — and turned down a sale on one model that would have chewed our product. That honesty is why we came back for a second line.",
      fr: "Comme petit fromager, je m'attendais à être un petit poisson. Au contraire, ils ont testé notre fromage en grains sur trois machines avant de recommander la bonne — et ont refusé une vente sur un modèle qui aurait abîmé notre produit. Cette honnêteté explique notre deuxième ligne.",
    },
    name: "Jean-Philippe Roy",
    role: { en: "Owner", fr: "Propriétaire" },
    company: "Fromagerie du Terroir",
    location: "Drummondville, QC",
    machine: { en: "VFFS + case packer", fr: "VFFS + encaisseuse" },
    rating: 5,
  },
  {
    quote: {
      en: "The installation team didn't leave until we hit 94% of target rate for a full shift. I've bought equipment for 20 years and I've never seen a commissioning that disciplined.",
      fr: "L'équipe d'installation n'est pas partie avant que nous atteignions 94 % de la cadence cible pendant un quart complet. J'achète de l'équipement depuis 20 ans et je n'ai jamais vu une mise en service aussi rigoureuse.",
    },
    name: "Isabelle Gagnon",
    role: { en: "Continuous Improvement Lead", fr: "Responsable amélioration continue" },
    company: "NutraBar",
    location: "Québec City, QC",
    machine: { en: "T-350 high-speed wrapper", fr: "Ensacheuse haute cadence T-350" },
    rating: 5,
  },
  {
    quote: {
      en: "We run the line 20 hours a day, six days a week. Parts arrive next-day from their Ontario stock — our previous supplier shipped from overseas and we'd lose a week. Downtime is down 70% since we switched.",
      fr: "La ligne tourne 20 heures par jour, six jours par semaine. Les pièces arrivent le lendemain de leur stock en Ontario — notre fournisseur précédent expédiait d'outre-mer et nous perdions une semaine. Les arrêts ont baissé de 70 % depuis le changement.",
    },
    name: "Robert Kowalski",
    role: { en: "Plant Engineer", fr: "Ingénieur d'usine" },
    company: "Prairie Fresh Foods",
    location: "Winnipeg, MB",
    machine: { en: "Roll film system + VFFS", fr: "Système de film + VFFS" },
    rating: 5,
  },
  {
    quote: {
      en: "They integrated the new wrapper with our 15-year-old case packer and a checkweigher from another brand. Nobody else we quoted would even try. One team took responsibility for the whole line.",
      fr: "Ils ont intégré la nouvelle ensacheuse à notre encaisseuse de 15 ans et à une trieuse pondérale d'une autre marque. Aucun autre soumissionnaire ne voulait même essayer. Une seule équipe a pris la responsabilité de toute la ligne.",
    },
    name: "Sophie Bélanger",
    role: { en: "Procurement Director", fr: "Directrice de l'approvisionnement" },
    company: "Aliments Saveur",
    location: "Laval, QC",
    machine: { en: "Custom line integration", fr: "Intégration de ligne sur mesure" },
    rating: 5,
  },
  {
    quote: {
      en: "As a US plant buying from a Canadian supplier, I braced for customs headaches and slow support. Neither happened. The machine cleared the border with every document ready, and remote diagnostics have solved every issue same-day.",
      fr: "En tant qu'usine américaine achetant d'un fournisseur canadien, je m'attendais à des maux de tête douaniers et à un soutien lent. Ni l'un ni l'autre. La machine a passé la frontière avec tous ses documents, et les diagnostics à distance ont tout réglé le jour même.",
    },
    name: "Tom Bradley",
    role: { en: "Operations Director", fr: "Directeur des opérations" },
    company: "Lakeside Snacks",
    location: "Cleveland, OH",
    machine: { en: "Flow wrapper + cartoner", fr: "Ensacheuse + encartonneuse" },
    rating: 5,
  },
  {
    quote: {
      en: "We started with one carry card machine for a retail program. Eighteen months later we have four lines from them. Every quote was detailed, every date was met, and the training cards in French and English are still taped to every HMI.",
      fr: "Nous avons commencé avec une machine à cartes de présentation pour un programme de vente au détail. Dix-huit mois plus tard, nous avons quatre lignes. Chaque devis était détaillé, chaque délai respecté, et les aide-mémoire en français et en anglais sont toujours collés sur chaque IHM.",
    },
    name: "Emily Harrison",
    role: { en: "CEO", fr: "PDG" },
    company: "Harvest Trail Baked Goods",
    location: "Kingston, ON",
    machine: { en: "Carry card systems", fr: "Systèmes de cartes de présentation" },
    rating: 5,
  },
];

/* ------------------------------------ Videos ----------------------------------- */

export interface Video {
  id: string;
  youtubeId: string;
  title: L;
  desc: L;
  category: L;
  duration: string;
}

export const channelUrl = "https://www.youtube.com/@flowwrapmachines";

export const videos: Video[] = [
  {
    id: "v1",
    youtubeId: "EHck-oMl4Pg",
    title: { en: "T-250 Horizontal Chocolate Wrapper", fr: "Ensacheuse horizontale T-250 pour chocolat" },
    desc: {
      en: "Watch the T-250 wrap chocolate bars at production speed with clean, consistent seals.",
      fr: "Voyez la T-250 emballer des barres de chocolat à cadence de production avec des soudures nettes et constantes.",
    },
    category: { en: "Flow-wrap", fr: "Flow-wrap" },
    duration: "",
  },
  {
    id: "v2",
    youtubeId: "VQoZAavXTf4",
    title: { en: "T-350 for Large Oatmeal Cookies", fr: "T-350 pour grands biscuits d'avoine" },
    desc: {
      en: "Large-format bakery runs on the T-350 — gentle handling, tight pillow packs.",
      fr: "Boulangerie grand format sur la T-350 — manipulation délicate, sachets coussin bien scellés.",
    },
    category: { en: "Bakery", fr: "Boulangerie" },
    duration: "",
  },
  {
    id: "v3",
    youtubeId: "SXg0lbgL3mQ",
    title: { en: "V-260 Vertical Popcorn Packing Machine", fr: "Machine verticale V-260 pour maïs soufflé" },
    desc: {
      en: "The V-260 packs popcorn and other light, fluffy products at up to 180 bags per minute.",
      fr: "La V-260 emballe le maïs soufflé et autres produits légers jusqu'à 180 sachets par minute.",
    },
    category: { en: "VFFS", fr: "VFFS" },
    duration: "",
  },
  {
    id: "v4",
    youtubeId: "SPH7IKRB1PQ",
    title: { en: "Flow Wrap for Bars, Cookies & Snacks", fr: "Flow-wrap pour barres, biscuits et collations" },
    desc: {
      en: "Clear and printed film on bars, cookies and snack products — our most versatile setup.",
      fr: "Film clair et imprimé sur barres, biscuits et collations — notre configuration la plus polyvalente.",
    },
    category: { en: "Flow-wrap", fr: "Flow-wrap" },
    duration: "",
  },
  {
    id: "v5",
    youtubeId: "WYWpOF2Nx6o",
    title: { en: "T-V600X Vegetable Packaging in Trays", fr: "Emballage de légumes en barquettes T-V600X" },
    desc: {
      en: "Fresh produce tray wrapping at 40–120 packs per minute — leafy vegetables included.",
      fr: "Emballage de barquettes de produits frais à 40–120 unités par minute — légumes-feuilles inclus.",
    },
    category: { en: "Produce", fr: "Fruits et légumes" },
    duration: "",
  },
  {
    id: "v6",
    youtubeId: "C7cGU81P5Nw",
    title: { en: "Muffin Packaging Machine", fr: "Machine d'emballage pour muffins" },
    desc: {
      en: "Wraps and seals all types of pastry and bakery products without crushing them.",
      fr: "Emballe et scelle tous types de pâtisseries et produits de boulangerie sans les écraser.",
    },
    category: { en: "Bakery", fr: "Boulangerie" },
    duration: "",
  },
];

/* ---------------------------------- Misc data ---------------------------------- */

export const stats = {
  machines: "150+",
  years: "5+",
  provinces: "ON · QC",
};
