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
  brewhaha,
  budgetapp,
  covid,
  cuisina,
  devconnector,
  revents,
  threejs,
  indra,
  ralm_shop,
  figma_clone
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "SharePoint Developer",
    icon: mobile
  },
  {
    title: "Frontend Developer",
    icon: backend
  },
  {
    title: "Backend Developer",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "figma",
    icon: figma
  },
  {
    name: "docker",
    icon: docker
  }
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
      "To develop a robust and user-friendly Solution with the collaboration of Corporate Solution department. Used ReactJS, React-Redux, JQuery, SharePoint Framework, REST API, HTML, CSS, Git, as a technology stack."
    ]
  },
  {
    title: "React Developer",
    company_name: "Amdocs",
    icon: amdocs,
    iconBg: "#383E56",
    date: "August 2019 - March 2020",
    points: [
      'Worked as a Software Engineer with a Frontend Developer Role, for an "All in One shop Application" with a Customer Management, Shopping Cart, Product Ordering, etc. ',
      "Used ReactJS, React-Redux, Mocha-ChaiJS, HTML, CSS, Perforce, as a technology stack."
    ]
  },
  {
    title: "Web Developer",
    company_name: "ING Philippines Inc",
    icon: ing,
    iconBg: "#E6DEDD",
    date: "April 2020 - October 2021",
    points: [
      "Developed features and components for the bank including mobile app, back office application, and website. ",
      "Used Polymer Litelement with a Webcomponents Framework and MochaJS and enzyme as Testing Utility framework."
    ]
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
      "Used React typescript with Context as the frontend layer of the application. Used Apollo GraphQL with NodeJS as the backend-for-frontend layer of the application."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const projects = [
  {
    name: "RALM - Revents",
    description:
      "Created a full-stack events scheduling web application. Used ReactJS, React-Redux, Semantic UI, and Google Firebase & Firestore.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "semanticui",
        color: "green-text-gradient"
      },
      {
        name: "firebase",
        color: "pink-text-gradient"
      }
    ],
    image: revents,
    source_code_link: "https://github.com/RMrobb1e/ralm-revents",
    site_link: "https://ralm-revents-c7c22.web.app/events"
  },
  {
    name: "RALM - Figma Clone",
    description:
      "Created a full feature figma clone using next.js liveblocks and shadcn.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "nextjs",
        color: "green-text-gradient"
      },
      {
        name: "liveblocks",
        color: "pink-text-gradient"
      }
    ],
    image: figma_clone,
    source_code_link: "https://github.com/RMrobb1e/ralm-revents",
    site_link: "https://ralm-revents-c7c22.web.app/events"
  },
  {
    name: "RALM - Shop",
    description:
      "Created an e-commerce shop with full featured shopping cart, admin panel and many more using mern aws s3 and paypal api.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "paypal",
        color: "green-text-gradient"
      },
      {
        name: "mongodb",
        color: "pink-text-gradient"
      }
    ],
    image: ralm_shop,
    source_code_link: "https://github.com/RMrobb1e/ralm-shop",
    site_link: "https://ralm-shop.onrender.com/"
  },
  {
    name: "RALM - DevConnector",
    description:
      "Created a web-app for developers to socialize using the following technology: MongoDB, ExpressJS, ReactJS, React-Redux, NodeJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "nodejs",
        color: "pink-text-gradient"
      }
    ],
    image: devconnector,
    source_code_link: "https://github.com/",
    site_link: "https://ralm-devconnector.herokuapp.com/"
  },
  {
    name: "RALM - BrewHaha",
    description:
      "Created a full-stack e-commerce app as a one stop beer shop. Use ReactJS, GraphQL, Strapi, Stripe, & Gestalt as frontend library.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "graphql",
        color: "green-text-gradient"
      },
      {
        name: "strapi",
        color: "pink-text-gradient"
      }
    ],
    image: brewhaha,
    source_code_link: "https://github.com/",
    site_link: "https://ralm-brewhaha.herokuapp.com/"
  },
  {
    name: "RALM - Cuisina",
    description:
      "Created a full-stack cuisine web application. Used VanillaJS, Axios, CSS3 & Forkify API.",
    tags: [
      {
        name: "axios",
        color: "blue-text-gradient"
      },
      {
        name: "css3",
        color: "green-text-gradient"
      },
      {
        name: "restapi",
        color: "pink-text-gradient"
      }
    ],
    image: cuisina,
    source_code_link: "https://github.com/RMrobb1e/ralmcuisina",
    site_link: "https://ralmcuisina.vercel.app/#29159"
  },
  {
    name: "RALM - Budget App",
    description:
      "Created a frontend budget web application. Used Javascript, HTML, CSS.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "html",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: budgetapp,
    source_code_link: "https://github.com/RMrobb1e/ralmbudgetapp",
    site_link: "https://ralmbudgetapp.vercel.app/"
  },
  {
    name: "RALM - Covid 19 Tracker",
    description:
      "Created a frontend covid19 tracker web application. Used lit-element, lit-html, and Rapid API.",
    tags: [
      {
        name: "lit-element",
        color: "blue-text-gradient"
      },
      {
        name: "lit-html",
        color: "green-text-gradient"
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient"
      }
    ],
    image: covid,
    source_code_link: "https://github.com/",
    site_link: "https://app-tracker-robbie.herokuapp.com/"
  }
];

export { services, technologies, experiences, testimonials, projects };
