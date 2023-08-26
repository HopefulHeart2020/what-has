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
  blockchain,
  ethereum,
  finance,
  contract,
  polygon,
  solidity,
  web3,
  ai,
  chatbot,
  tensorflow,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  dlop,
  chatgpt,
  socialpath,
  saint,
  fox,
  krypt,
  threejs,
  tma,
  edgenext,
  venustech
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'Blockchain Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Tech Leader',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Blockchain',
    icon: blockchain,
  },
  {
    name: 'Ethereum',
    icon: ethereum,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'AI',
    icon: ai,
  },
  {
    name: 'docker',
    icon: docker,
  },
  
  
  
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'VenusTech',
    icon: venustech,
    iconBg: '#383E56',
    date: 'Sep 2017 - Aug 2019',
    points: [
      "Shortened project timeline by 14 months for company's largest client by managing thirdparty vendor relationships, saving over $80,000",
      "Led the development of a $50,000 research project that was considered the [gold standard] by the client.",
      "Fine-tuned and Suggested AI/ML-based algorithms based on the results with Scikit-learn, increasing revenue 2-fold.",
      "Performed Web Scraping over a catalog of 100K֡ school supply products using mainly Node.js and MongoDB; completed in 1 month"
    ],
  },
  {
    title: 'Blockchain Developer',
    company_name: 'EdgeNext Technology',
    icon: edgenext,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - Aug 2022',
    points: [
      "Led several successful projects for major financial institutions and has been recognized for contributions to the 3 blockchain community.",
      "Designed and developed several blockchain solutions for major healthcare and supply 5 chain companies, and has been recognized for innovative approach to blockchain development.",
      "Increased company revenue by 30% in 2 months after developing and implementing business logic for over 20 features."
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'TMA Solution',
    icon: tma,
    iconBg: '#383E56',
    date: 'Sep 2022 - Jul 2023',
    points: [
      "Involved in the development of websites, cryptocurrency & financial sites, web3 games, IoT and over 20 other high quality enterprise software projects.",
      "Completed requirements gathering, planning, design, and user acceptance testing for over 40 commercial banks while leading Agile team.",
      "Led team to develop new features in multiple languages in 10֡ environments using Agile/Scrum methodologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Joyce proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Joyce does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Joyce optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'DLops',
    description:
      'Projects start with a problem statement. Solutions then logical follow. Project are made of tasks. Dlops executes projects on this distributed talent network.',
    tags: [
      {
        name: 'node',
        color: 'white-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: dlop,
    source_code_link: 'https://github.com/HopefulHeart2020/dlop_ai_landing',
  },
  {
    name: 'ChatGPT Next',
    description:
      'One-Click to get well-designed cross-platform ChatGPT web UI. Generate All types of information need for users, scientist, 一键免费部署你的跨平台私人 ChatGPT 应用.',
    tags: [
      {
        name: 'web',
        color: 'white-text-gradient',
      },
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'chatgpt',
        color: 'green-text-gradient',
      },
      {
        name: 'vercel',
        color: 'pink-text-gradient',
      },
    ],
    image: chatgpt,
    source_code_link: 'https://github.com/HopefulHeart2020/ChatGPT-Next-Web',
  },
  {
    name: 'SocialPath',
    description:
      'This is a social media app designed for sociopathic individuals. It is a place where they can share their thoughts and feelings with others.',
    tags: [
      {
        name: 'react',
        color: 'white-text-gradient',
      },
      {
        name: 'node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express.js',
        color: 'pink-text-gradient',
      },
    ],
    image: socialpath,
    source_code_link: 'https://github.com/HopefulHeart2020/social-media-app',
  },
  {
    name: 'Fox Finance',
    description:
      'Fox Finance is a community-driven multimedia blockchain society with a charitable mission and business enterprises that support our goals.',
    tags: [
      {
        name: 'react',
        color: 'white-text-gradient',
      },
      {
        name: 'blockchain',
        color: 'blue-text-gradient',
      },
      {
        name: 'web3',
        color: 'green-text-gradient',
      },
      {
        name: 'finance',
        color: 'pink-text-gradient',
      },
    ],
    image: fox,
    source_code_link: 'https://github.com/HopefulHeart2020/foxfinance',
  },
  {
    name: 'Saint Stream',
    description:
      'Saint Stream is a cutting-edge streaming platform that offers users the ability to watch their favorite movies and television shows in a responsive and seamless manner.',
    tags: [
      {
        name: 'typescript',
        color: 'white-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'mui',
        color: 'pink-text-gradient',
      },
    ],
    image: saint,
    source_code_link: 'https://github.com/HopefulHeart2020/saint-stream',
  },
  {
    name: 'Krypt',
    description:
      'Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto. Send Crypto across world. Explore Exchange world and coinbase wallet.',
    tags: [
      {
        name: 'crypto',
        color: 'white-text-gradient',
      },
      {
        name: 'web3',
        color: 'blue-text-gradient',
      },
      {
        name: 'smart-contract',
        color: 'green-text-gradient',
      },
      {
        name: 'node.js',
        color: 'pink-text-gradient',
      },
    ],
    image: krypt,
    source_code_link: 'https://github.com/HopefulHeart2020/web3_crypto',
  }
];

export { services, technologies, experiences, testimonials, projects };
