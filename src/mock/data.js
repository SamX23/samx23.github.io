import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'About Mi!', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Website about Sami', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Yo! my name is',
  name: 'Sami',
  subtitle: 'and I am a highly motivated self-taugh Front-End Web Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg', // put your profile image (recommended aspect radio: square)
  paragraphOne: 'Bismillah',
  paragraphTwo: 'My name is Sami Kalammallah, a father of two kids, currently having a wife, dreams and future.',
  paragraphThree: 'I love technologies, sports and games while currently work as a Technical Support at kirim.email, I learn about Web Development.',
  resume: 'https://drive.google.com/file/d/1eajwJMgCUFxS3Th5Vb-0eUcZwE4LvDvW/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.png',
    title: 'Dicoding Front-End Web Development',
    info: 'Using pokemon public API, I create a pokedex(Pokemon Search) to shows a card containing pokemon details.',
    info2: '',
    url: 'https://samx23.github.io/front-end-dasar-dicoding/',
    repo: 'https://github.com/samx23/front-end-dasar-dicoding', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.png',
    title: 'Progate Team Projects',
    info: 'We duplicate the progate homepage to train our teamwork skills on developing website.',
    info2: '',
    url: 'https://samx23.github.io/progate-team-work/',
    repo: 'https://github.com/SamX23/progate-team-work', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3.png',
    title: 'Dicoding basic html projects',
    info: 'The assignment is create a simply website using only basic html, css and javascript.',
    info2: '',
    url: 'https://samx23.github.io/web-dasar-dicoding/',
    repo: 'https://github.com/samx23/web-dasar-dicoding', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's have a coffee .. ", // call to action text for the contact section
  btn: '', // text inside the button
  email: 'skalexsong@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/samikalamallah/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://web.facebook.com/SamiKalamallah',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/samikalamallah/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/samx23',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.me/+6289657511134',
    },
  ],
};
