export const languages = {
  en: "English",
  fr: "Français",
};

export type Language = keyof typeof languages;

export const defaultLang: Language = "en";

export const showDefaultLang = true;

export const routes = {
  en: {
    resume: "resume",
  },
  fr: {
    resume: "resume",
  },
};

export const ui = {
  en: {
    language: "Language",
    "nav.home": "Home",
    "nav.resume": "Resume",
    "nav.projects": "Projects",
    "home.hi": "Hi there",
    "home.i_am": "I'm Arnest",
    "home.tagline": "Software developer at IGN",
    "home.description": `I started programming around ${
      new Date().getFullYear() - 2018
    } years ago, and it's been a passion ever since.
              My journey began with native technologies like Java and Python, and over time, I've grown proficient in the
              PHP/Symfony and JavaScript/React ecosystems. I'm always excited to learn, build and grow as a developer.`,
  },
  fr: {
    language: "Langue",
    "nav.home": "Accueil",
    "nav.resume": "CV",
    "nav.projects": "Projets",
    "home.hi": "Bonjour",
    "home.i_am": "Je m'appelle Arnest",
    "home.tagline": "Concepteur-développeur à l'IGN",
    "home.description": `Il y a environ ${
      new Date().getFullYear() - 2018
    } ans, j'ai commencé mon parcours dans le domaine de la programmation et depuis je sui passionné par cette discipline. Bien que j'aie commencé avec des technos natives telles que Java ou Python, avec le temps, j'ai acquis des compétences dans les écosystèmes PHP/Symfony et JavaScript/React. Je suis toujours enthousiaste à l'idée d'apprendre, de construire et de grandir en tant que développeur.`,
  },
} as const;
