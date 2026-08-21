import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

/** A localized string pair */
export interface L {
  en: string;
  fr: string;
}

export function pick(lang: Lang, pair: L): string {
  return pair[lang];
}

const ui = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      videos: "Videos",
      testimonials: "Testimonials",
      quote: "Get a Quote",
    },
    common: {
      since: "Since 2020",
      learnMore: "Learn more",
      viewAll: "View all",
      requestQuote: "Request a quote",
      requestQuoteFor: "Request a quote for this system",
      watchVideo: "Watch video",
      playVideo: "Play video",
      keyFeatures: "Key features",
      typicalApplications: "Typical applications",
      speed: "Speed",
      upTo: "Up to",
      perMin: "/min",
      readStory: "Read all testimonials",
      bilingual: "Bilingual service, EN / FR",
      offices: "Offices in Ontario & Québec",
    },
    hero: {
      eyebrow: "Industrial Packaging Equipment · Ontario & Québec",
      title1: "Packaging lines that",
      titleAccent: "never miss",
      title2: "a shift.",
      subtitle:
        "Horizontal flow-wrap, VFFS, roll film, stand-up pouch, cartoning and carry-card systems — specified, installed and supported by a Canadian team that answers in English or French.",
      ctaPrimary: "Get a Quote",
      ctaSecondary: "Explore the product range",
      statMachines: "Machines installed",
      statResponse: "Quote turnaround",
      statSupport: "Bilingual support",
      statYears: "Years serving manufacturers",
      statResponseValue: "1 business day",
      ctaNote: "Free product & film testing · An engineer replies within 1 business day",
      callNow: "Call now",
    },
    industries: {
      label: "Trusted across North America",
      title: "Built for the lines you run every day",
      items: [
        "Snacks & Bakery",
        "Confectionery",
        "Coffee & Beverages",
        "Frozen Foods",
        "Dairy",
        "Pet Food",
        "Consumer Goods",
        "Nutraceuticals",
      ],
    },
    home: {
      productsLabel: "Product range",
      productsTitle: "Six platforms. One accountable partner.",
      productsSubtitle:
        "From primary wrapping to end-of-line packing, every system is configured around your product, your film and your floor.",
      whyLabel: "Why D.T",
      whyTitle: "The machine is only half of what you buy.",
      whySubtitle:
        "Uptime comes from what happens after the crate is opened. That's where we spend our energy.",
      why1Title: "Canadian-based service",
      why1Text:
        "Technicians dispatched from Ontario and Québec — not a call center overseas. Most issues diagnosed remotely the same day.",
      why2Title: "Fully bilingual, by default",
      why2Text:
        "Quotes, HMI screens, manuals and training in English or French. Your Québec operators get the same experience as everyone else.",
      why3Title: "Turnkey installation & training",
      why3Text:
        "We install, commission and train your team on your floor — and we don't leave until the line hits target rate.",
      why4Title: "Parts on the shelf",
      why4Text:
        "Critical spares stocked in Canada. Sealing jaws, belts, blades and sensors ship next-day, not next-month.",
      testimonialsLabel: "Customer voices",
      testimonialsTitle: "What production managers say after year one",
      videosLabel: "See it run",
      videosTitle: "Real machines. Real product. Real speed.",
      videosSubtitle: "Walkthroughs, installations and full-rate production runs from our YouTube channel.",
      ctaTitle: "Tell us what you're packaging.",
      ctaSubtitle:
        "Send us your product, your target rate and your timeline. A real engineer replies within one business day — in English or French.",
      ctaButton: "Start my quote",
      ctaSecondary: "Or call 647-372-0005",
    },
    products: {
      label: "Products",
      title: "The full range, under one roof",
      subtitle:
        "Every platform below is configured, installed and supported by our own team. Click any system to see what it does — then ask us to quote it.",
      brochure: "Download spec sheet",
      configure: "Configure & quote",
      note: "Specifications shown are typical maximums — final configuration depends on your product and film. We confirm everything during the quoting process.",
      modelsLabel: "Popular models",
    },
    services: {
      label: "Services",
      title: "We stay after the ribbon is cut",
      subtitle:
        "A packaging line is a 10-year commitment. Our service offering is built to protect your uptime for the whole run.",
      processLabel: "How we work",
      processTitle: "From first call to full rate, in five steps",
      steps: [
        {
          title: "Discovery call",
          text: "We review your product, film, target rate and floor constraints — in English or French.",
        },
        {
          title: "Proposal & samples",
          text: "You receive a configured quote with layout, options and film/product test results.",
        },
        {
          title: "Build & factory test",
          text: "Your machine is assembled and run at rate with your product before it ships.",
        },
        {
          title: "Install & training",
          text: "Our technicians install, commission and train operators and maintenance on site.",
        },
        {
          title: "Lifetime support",
          text: "Remote diagnostics, preventive maintenance plans and next-day parts from Canada.",
        },
      ],
      promiseTitle: "Our uptime promise",
      promise1: "Remote diagnosis the same business day",
      promise2: "Technician on site in 24–72 h across ON & QC",
      promise3: "Critical spare parts stocked in Canada",
      promise4: "Support in English and French, always",
    },
    testimonials: {
      label: "Testimonials",
      title: "Proof from the production floor",
      subtitle:
        "Nine out of ten customers buy a second machine from us. Here's why, in their own words.",
      verified: "Verified customer",
      badge: "9 out of 10 customers buy a second machine",
    },
    videos: {
      label: "Video library",
      title: "Watch the machines work",
      subtitle:
        "Pulled straight from our YouTube channel — walkthroughs, commissioning runs and full-rate production. New videos every month.",
      visitChannel: "Visit our YouTube channel",
      subscribers: "New videos monthly — subscribe on YouTube",
    },
    quote: {
      label: "Get a Quote",
      title: "Let's spec your line",
      subtitle:
        "Three quick steps. A real engineer — not a form letter — replies within one business day.",
      step1: "Your needs",
      step2: "Project details",
      step3: "Contact",
      step1Title: "What are you looking to package?",
      step1Subtitle: "Select every system that applies — or tell us you're not sure yet.",
      notSure: "Not sure yet — advise me",
      step2Title: "Tell us about the project",
      productLabel: "Product to be packaged",
      productPlaceholder: "e.g. granola bars, ground coffee, frozen dumplings…",
      speedLabel: "Target speed (packages/min)",
      speedPlaceholder: "e.g. 60",
      formatLabel: "Package format",
      formatPillow: "Pillow pack",
      formatGusset: "Gusseted bag",
      formatStandup: "Stand-up pouch",
      formatCarton: "Carton / case",
      formatCard: "Carry card / blister",
      formatOther: "Other / not sure",
      timelineLabel: "Purchase timeline",
      timeline1: "As soon as possible",
      timeline2: "Within 3–6 months",
      timeline3: "Within 6–12 months",
      timeline4: "Budgeting for next year",
      budgetLabel: "Budget range (CAD)",
      budget1: "Under $75k",
      budget2: "$75k – $150k",
      budget3: "$150k – $300k",
      budget4: "Over $300k",
      budget5: "Prefer to discuss",
      messageLabel: "Anything else we should know?",
      messagePlaceholder: "Line layout, film supplier, existing equipment, constraints…",
      step3Title: "Where do we send the quote?",
      nameLabel: "Full name",
      companyLabel: "Company",
      emailLabel: "Work email",
      phoneLabel: "Phone",
      regionLabel: "Province / State",
      langLabel: "Preferred language",
      langEn: "English",
      langFr: "Français",
      back: "Back",
      continue: "Continue",
      review: "Review & submit",
      submit: "Send my request",
      reviewTitle: "Review your request",
      reviewSystems: "Systems of interest",
      reviewProject: "Project",
      reviewContact: "Contact",
      required: "Please fill in the required fields to continue.",
      successTitle: "Request received.",
      successText:
        "Thank you — an engineer from our Ontario or Québec office will reply within one business day. If it's urgent, call us at 647-372-0005.",
      successAgain: "Submit another request",
      selectedSystems: "systems selected",
      privacy: "Your information is used only to prepare your quote. No lists, no spam.",
      nextTitle: "What happens next",
      next1Title: "We review your request",
      next1Text: "Your request goes straight to a project engineer — never a call center.",
      next2Title: "You hear back in 1 business day",
      next2Text: "Questions, ballpark pricing and a testing plan — in English or French.",
      next3Title: "We test your product",
      next3Text: "Send us product and film samples; we run them and send you the video.",
    },
    footer: {
      tagline:
        "Industrial packaging equipment — specified, installed and supported across North America, in English and French.",
      productsTitle: "Products",
      companyTitle: "Company",
      contactTitle: "Contact",
      about: "About us",
      testimonials: "Testimonials",
      videos: "Videos",
      quote: "Get a quote",
      onOffice: "Ontario office",
      qcOffice: "Québec office",
      hours: "Mon–Fri, 8:00–17:00 EST",
      rights: "All rights reserved.",
      bilingualBadge: "Proudly bilingual · EN / FR",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      products: "Produits",
      services: "Services",
      videos: "Vidéos",
      testimonials: "Témoignages",
      quote: "Demander un devis",
    },
    common: {
      since: "Depuis 2020",
      learnMore: "En savoir plus",
      viewAll: "Tout voir",
      requestQuote: "Demander un devis",
      requestQuoteFor: "Demander un devis pour ce système",
      watchVideo: "Voir la vidéo",
      playVideo: "Lire la vidéo",
      keyFeatures: "Caractéristiques clés",
      typicalApplications: "Applications typiques",
      speed: "Vitesse",
      upTo: "Jusqu'à",
      perMin: "/min",
      readStory: "Lire tous les témoignages",
      bilingual: "Service bilingue, EN / FR",
      offices: "Bureaux en Ontario et au Québec",
    },
    hero: {
      eyebrow: "Équipement d'emballage industriel · Ontario et Québec",
      title1: "Des lignes d'emballage qui",
      titleAccent: "ne manquent",
      title2: "jamais un quart de travail.",
      subtitle:
        "Systèmes horizontaux flow-wrap, VFFS, film en bobine, sachets stand-up, encaissage et cartes de présentation — conçus, installés et soutenus par une équipe canadienne qui vous répond en français ou en anglais.",
      ctaPrimary: "Demander un devis",
      ctaSecondary: "Explorer la gamme de produits",
      statMachines: "Machines installées",
      statResponse: "Délai de devis",
      statSupport: "Soutien bilingue",
      statYears: "Années au service des fabricants",
      statResponseValue: "1 jour ouvrable",
      ctaNote: "Essais produit et film gratuits · Réponse d'un ingénieur en 1 jour ouvrable",
      callNow: "Appelez-nous",
    },
    industries: {
      label: "Partout en Amérique du Nord",
      title: "Conçu pour les lignes que vous faites tourner chaque jour",
      items: [
        "Collations et boulangerie",
        "Confiserie",
        "Café et boissons",
        "Surgelés",
        "Produits laitiers",
        "Nourriture pour animaux",
        "Biens de consommation",
        "Nutraceutiques",
      ],
    },
    home: {
      productsLabel: "Gamme de produits",
      productsTitle: "Six plateformes. Un seul partenaire responsable.",
      productsSubtitle:
        "De l'emballage primaire à la fin de ligne, chaque système est configuré selon votre produit, votre film et votre plancher de production.",
      whyLabel: "Pourquoi D.T",
      whyTitle: "La machine n'est que la moitié de ce que vous achetez.",
      whySubtitle:
        "La disponibilité vient de ce qui se passe après l'ouverture de la caisse. C'est là que nous mettons notre énergie.",
      why1Title: "Service basé au Canada",
      why1Text:
        "Techniciens dépêchés depuis l'Ontario et le Québec — pas un centre d'appels à l'étranger. La plupart des problèmes sont diagnostiqués à distance le jour même.",
      why2Title: "Entièrement bilingue, par défaut",
      why2Text:
        "Devis, écrans IHM, manuels et formation en français ou en anglais. Vos opérateurs québécois vivent la même expérience que tous les autres.",
      why3Title: "Installation et formation clé en main",
      why3Text:
        "Nous installons, mettons en service et formons votre équipe chez vous — et nous ne partons pas avant que la ligne atteigne sa cadence cible.",
      why4Title: "Pièces en stock",
      why4Text:
        "Pièces critiques entreposées au Canada. Mâchoires de scellage, courroies, lames et capteurs expédiés le lendemain, pas le mois prochain.",
      testimonialsLabel: "Voix de nos clients",
      testimonialsTitle: "Ce que disent les directeurs de production après un an",
      videosLabel: "Voyez-le fonctionner",
      videosTitle: "De vraies machines. De vrais produits. La vraie cadence.",
      videosSubtitle:
        "Visites guidées, installations et productions à pleine cadence, tirés de notre chaîne YouTube.",
      ctaTitle: "Dites-nous ce que vous emballez.",
      ctaSubtitle:
        "Envoyez-nous votre produit, votre cadence cible et votre échéancier. Un vrai ingénieur répond en un jour ouvrable — en français ou en anglais.",
      ctaButton: "Commencer mon devis",
      ctaSecondary: "Ou appelez le 647-372-0005",
    },
    products: {
      label: "Produits",
      title: "Toute la gamme, sous un même toit",
      subtitle:
        "Chaque plateforme ci-dessous est configurée, installée et soutenue par notre propre équipe. Explorez chaque système — puis demandez-nous un devis.",
      brochure: "Télécharger la fiche technique",
      configure: "Configurer et chiffrer",
      note: "Les spécifications indiquées sont des maximums typiques — la configuration finale dépend de votre produit et de votre film. Nous confirmons tout pendant le processus de devis.",
      modelsLabel: "Modèles populaires",
    },
    services: {
      label: "Services",
      title: "Nous restons après l'inauguration",
      subtitle:
        "Une ligne d'emballage, c'est un engagement de 10 ans. Notre offre de service est conçue pour protéger votre disponibilité pendant toute sa durée de vie.",
      processLabel: "Notre façon de travailler",
      processTitle: "Du premier appel à la pleine cadence, en cinq étapes",
      steps: [
        {
          title: "Appel découverte",
          text: "Nous examinons votre produit, votre film, votre cadence cible et vos contraintes d'espace — en français ou en anglais.",
        },
        {
          title: "Proposition et échantillons",
          text: "Vous recevez un devis configuré avec plan d'implantation, options et résultats d'essais film/produit.",
        },
        {
          title: "Fabrication et essais en usine",
          text: "Votre machine est assemblée et testée à cadence avec votre produit avant l'expédition.",
        },
        {
          title: "Installation et formation",
          text: "Nos techniciens installent, mettent en service et forment opérateurs et maintenance sur place.",
        },
        {
          title: "Soutien à vie",
          text: "Diagnostics à distance, plans d'entretien préventif et pièces le lendemain depuis le Canada.",
        },
      ],
      promiseTitle: "Notre promesse de disponibilité",
      promise1: "Diagnostic à distance le jour ouvrable même",
      promise2: "Technicien sur place en 24–72 h en ON et au QC",
      promise3: "Pièces de rechange critiques en stock au Canada",
      promise4: "Soutien en français et en anglais, toujours",
    },
    testimonials: {
      label: "Témoignages",
      title: "La preuve vient du plancher de production",
      subtitle:
        "Neuf clients sur dix nous achètent une deuxième machine. Voici pourquoi, dans leurs propres mots.",
      verified: "Client vérifié",
      badge: "9 clients sur 10 achètent une deuxième machine",
    },
    videos: {
      label: "Vidéothèque",
      title: "Regardez les machines à l'œuvre",
      subtitle:
        "Directement de notre chaîne YouTube — visites guidées, mises en service et productions à pleine cadence. Nouvelles vidéos chaque mois.",
      visitChannel: "Visiter notre chaîne YouTube",
      subscribers: "Nouvelles vidéos chaque mois — abonnez-vous sur YouTube",
    },
    quote: {
      label: "Demander un devis",
      title: "Configurons votre ligne",
      subtitle:
        "Trois étapes rapides. Un vrai ingénieur — pas une lettre type — répond en un jour ouvrable.",
      step1: "Vos besoins",
      step2: "Détails du projet",
      step3: "Coordonnées",
      step1Title: "Que souhaitez-vous emballer?",
      step1Subtitle: "Sélectionnez tous les systèmes pertinents — ou dites-nous que vous n'êtes pas certain.",
      notSure: "Pas encore certain — conseillez-moi",
      step2Title: "Parlez-nous du projet",
      productLabel: "Produit à emballer",
      productPlaceholder: "p. ex. barres granola, café moulu, dumplings surgelés…",
      speedLabel: "Cadence cible (emballages/min)",
      speedPlaceholder: "p. ex. 60",
      formatLabel: "Format d'emballage",
      formatPillow: "Sachet coussin",
      formatGusset: "Sachet à soufflets",
      formatStandup: "Pochette stand-up",
      formatCarton: "Carton / caisse",
      formatCard: "Carte de présentation / blister",
      formatOther: "Autre / pas certain",
      timelineLabel: "Échéancier d'achat",
      timeline1: "Dès que possible",
      timeline2: "D'ici 3 à 6 mois",
      timeline3: "D'ici 6 à 12 mois",
      timeline4: "Budget pour l'an prochain",
      budgetLabel: "Fourchette budgétaire (CAD)",
      budget1: "Moins de 75 k$",
      budget2: "75 k$ – 150 k$",
      budget3: "150 k$ – 300 k$",
      budget4: "Plus de 300 k$",
      budget5: "Je préfère en discuter",
      messageLabel: "Autre chose à savoir?",
      messagePlaceholder: "Plan de ligne, fournisseur de film, équipement existant, contraintes…",
      step3Title: "Où envoyons-nous le devis?",
      nameLabel: "Nom complet",
      companyLabel: "Entreprise",
      emailLabel: "Courriel professionnel",
      phoneLabel: "Téléphone",
      regionLabel: "Province / État",
      langLabel: "Langue préférée",
      langEn: "English",
      langFr: "Français",
      back: "Retour",
      continue: "Continuer",
      review: "Vérifier et envoyer",
      submit: "Envoyer ma demande",
      reviewTitle: "Vérifiez votre demande",
      reviewSystems: "Systèmes d'intérêt",
      reviewProject: "Projet",
      reviewContact: "Coordonnées",
      required: "Veuillez remplir les champs requis pour continuer.",
      successTitle: "Demande bien reçue.",
      successText:
        "Merci — un ingénieur de notre bureau de l'Ontario ou du Québec vous répondra en un jour ouvrable. Si c'est urgent, appelez le 647-372-0005.",
      successAgain: "Soumettre une autre demande",
      selectedSystems: "systèmes sélectionnés",
      privacy: "Vos informations servent uniquement à préparer votre devis. Pas de listes, pas de pourriels.",
      nextTitle: "Et après l'envoi?",
      next1Title: "Nous étudions votre demande",
      next1Text: "Votre demande va directement à un ingénieur de projet — jamais à un centre d'appels.",
      next2Title: "Réponse en 1 jour ouvrable",
      next2Text: "Questions, estimation de prix et plan d'essais — en français ou en anglais.",
      next3Title: "Nous testons votre produit",
      next3Text: "Envoyez-nous des échantillons de produit et de film; nous les testons et vous envoyons la vidéo.",
    },
    footer: {
      tagline:
        "Équipement d'emballage industriel — conçu, installé et soutenu partout en Amérique du Nord, en français et en anglais.",
      productsTitle: "Produits",
      companyTitle: "Entreprise",
      contactTitle: "Contact",
      about: "À propos",
      testimonials: "Témoignages",
      videos: "Vidéos",
      quote: "Demander un devis",
      onOffice: "Bureau de l'Ontario",
      qcOffice: "Bureau du Québec",
      hours: "Lun–ven, 8 h – 17 h HNE",
      rights: "Tous droits réservés.",
      bilingualBadge: "Fièrement bilingue · EN / FR",
    },
  },
} as const;

export type UI = (typeof ui)["en"];

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: UI;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("dt-lang");
      return saved === "fr" ? "fr" : "en";
    } catch {
      return "en";
    }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("dt-lang", l);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: ui[lang] as UI }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
