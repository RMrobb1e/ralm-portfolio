import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  accenture,
  amdocs,
  ing,
  carrent,
  jobit,
  tripguide,
  threejs,
  indra,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "SharePoint Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SharePoint Developer",
    company_name: "Indra Philippines Inc",
    icon: indra,
    iconBg: "#E6DEDD",
    date: "August 2017 - August 2019",
    points: [
      "Worked as a Software Engineer with a SharePoint Developer Role",
      "To develop a robust and user-friendly Solution with the collaboration of Corporate Solution department. Used ReactJS, React-Redux, JQuery, SharePoint Framework, REST API, HTML, CSS, Git, as a technology stack.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Amdocs",
    icon: amdocs,
    iconBg: "#383E56",
    date: "August 2019 - March 2020",
    points: [
      'Worked as a Software Engineer with a Frontend Developer Role, for an "All in One shop Application" with a Customer Management, Shopping Cart, Product Ordering, etc. ',
      "Used ReactJS, React-Redux, Mocha-ChaiJS, HTML, CSS, Perforce, as a technology stack.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ING Philippines Inc",
    icon: ing,
    iconBg: "#E6DEDD",
    date: "April 2020 - October 2021",
    points: [
      "Developed features and components for the bank including mobile app, back office application, and website. ",
      "Used Polymer Litelement with a Webcomponents Framework and MochaJS and enzyme as Testing Utility framework.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "October 2021 - Present",
    points: [
      "Modernized term deposit feature on one of the largest bank on Australia from scratch.",
      "Part of the discovery phase where creating estimate and architecting solution is included. Leads the development team demo in front of client with an audience of 20+ every sprint review.",
      "Used React typescript with Context as the frontend layer of the application. Used Apollo GraphQL with NodeJS as the backend-for-frontend layer of the application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
