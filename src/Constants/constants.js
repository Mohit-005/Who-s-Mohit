/* eslint-disable quotes */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: constants.js
   Version: I
   Creation: 18/10/2024
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm Mohit!",

    "I'm a Nineteen-year-old undergraduate student finishing up my third year of bachelor's in computer science at GLA University. Derivable from my degree, I have a passion for tech.",
    "Moreover, I'm a writer, an aviation geek and a full time piece of shit. I thoroughly enjoy boxing, long distance running (masochism?!)", "Finally, I've also been told moms love me, sooooooo...",
    'You can download my resume here.',
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: 'Weather App',
    description: 'Weather App: Built the front-end of a weather app using Vue2 and Axios',
    image: 'https://i.ibb.co/7vNW1KX/Weather-App.png',
    source_code_link: 'https://github.com/Mohit-005',
    demo_link: 'https://mohit-005.github.io/Weather-App/',
  },
  {
    name: 'WhatsApp Automater',
    description: 'WhatsApp Automater: Built a tool to send bulk WhatsApp messages for marketing without any API for free.',
    image: 'https://i.ibb.co/jHWBVwQ/Whats-App-Automater.png',
    source_code_link: 'https://github.com/Mohit-005/Automate-WhatsApp',
    demo_link: 'https://github.com/Mohit-005/Automate-WhatsApp',
  },
  {
    name: 'Eyewear Store',
    description: 'E-commerce Web Application: Built a fully responsive eyewear e-commerce platform using ReactJS and Tailwind CSS.',
    image: 'https://i.ibb.co/FncPqpk/Online-Eye-Wear-Store.png',
    source_code_link: 'https://github.com/Mohit-005/Glass-County-React',
    demo_link: 'https://glass-county-react.vercel.app/',
  },
  {
    name: 'CRM',
    description: 'Customer Relationship Software: Built a fully functional CRM Software using ReactJS, NodeJS and MongoDB',
    image: 'https://i.ibb.co/64gPp6y/CRM.png',
    source_code_link: 'https://github.com/Mohit-005/CRM',
    demo_link: 'https://dannys-crm.herokuapp.com/',
  },
  {
    name: 'GitHub Graph Painter',
    description: 'GitHub Graph Painter: Creates a custom design for your GitHub Commit Contribution Graph.',
    image: 'https://i.ibb.co/8rbxjnc/Graph-Painter.png',
    source_code_link: 'https://github.com/Mohit-005/github_painter',
    demo_link: 'https://githubgraphpainter.vercel.app/',
  },
  {
    name: 'LeetCode Auto-Solver',
    description: 'Automated Leetcode Solver: Built a bot to fetch, solve and submit Leetcode problems programatically',
    image: 'https://i.ibb.co/jHtstmw/Leet-Code-Auto-Solver.png',
    source_code_link: 'https://github.com/Mohit-005/Leetcode-Plus/tree/main5',
    demo_link: 'https://mohit-005.github.io/Leetcode-Plus/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'neo',
    title: 'Neo4j',
    icon: neoIcon,
    description:
      'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
  },
  {
    id: 'raspi',
    title: 'Raspberry Pi',
    icon: raspIcon,
    description:
      'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
