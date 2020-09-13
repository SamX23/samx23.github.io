import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "About Mi!", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Sami Kalammallah's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Yo! I'm",
  name: "Sami",
  subtitle: "and I'm a highly motivated self-taugh Front-End Web Developer",
  cta: "About Me",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg", // put your profile image (recommended aspect radio: square)
  paragraphOne: "Bismillah",
  paragraphTwo:
    "I'm a father of two kids, currently having a wife, dreams and future. Most people know me as a silent, tech-savvy and unexpected person.",
  paragraphThree:
    "Currently work as a Technical Support at kirim.email, while learning about Front-end Web Development, especially in React JS.",
  resume:
    "https://drive.google.com/file/d/1eajwJMgCUFxS3Th5Vb-0eUcZwE4LvDvW/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "google-1.png",
    title: "Search Engine Clone",
    info:
      "I made a basic search engine using google custom search, React Context and custom hooks",
    info2: "",
    url: "https://search-engine-sam.firebaseapp.com/",
    repo: "https://github.com/SamX23/search-engine", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "amazon-1.png",
    title: "Amazon Clone",
    info:
      "Built an Amazon clone with working bucket, wishlist, login, and payment order(comming soon)",
    info2: "",
    url: "https://challenge-97a60.web.app/",
    repo: "https://github.com/SamX23/amazon-clone", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "project-1.png",
    title: "Dicoding Front-End Web Development",
    info:
      "Using pokemon public API, I create a pokedex(Pokemon Search) to shows a card containing pokemon details.",
    info2: "",
    url: "https://samx23.github.io/front-end-dasar-dicoding/",
    repo: "https://github.com/samx23/front-end-dasar-dicoding", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "project-2.png",
    title: "Progate Team Projects",
    info:
      "We duplicate the progate homepage to train our teamwork skills on developing website.",
    info2: "",
    url: "https://samx23.github.io/progate-team-work/",
    repo: "https://github.com/SamX23/progate-team-work", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's Get In Touch !!", // call to action text for the contact section
  btn: "Email Me", // text inside the button
  email: "skalexsong@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "instagram",
      url: "https://www.instagram.com/samikalamallah/",
    },
    {
      id: nanoid(),
      name: "facebook",
      url: "https://web.facebook.com/SamiKalamallah",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/samikalamallah/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/samx23",
    },
    {
      id: nanoid(),
      name: "whatsapp",
      url: "https://wa.me/+6289657511134",
    },
  ],
};
