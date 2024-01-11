import {
  AirtableEmbed, BenefitItem, Button, FAQ, Header, MetaPageHead, PerfectFitCard, TestimonyCard,
} from './content.types.ts';

interface GetInvolvedContent {
  meta: MetaPageHead;
  hero: Header;
  benefits: {
    header: string,
    body: string[],
    listHeader: string,
    benefitItems: BenefitItem[],
    imageSrc: string,
    mobileImgsrc: string,
  },
  volunteerPage: {
    header: string;
    body: string[];
    openRole: AirtableEmbed;
  };
  partnerPage: {
    header: string[];
    text: string[];
    imageSrc: string;
    buttons: Button[];
  };
  faqs: FAQ[];
  testimonies: TestimonyCard[];
  perfectFit: {
    header: string;
    valuesDescription: string;
    perfectFitCards: PerfectFitCard[];
    imageSrc: string;
  };
}

const getInvolvedContent: GetInvolvedContent = {
  meta: {
    title: 'Join Clearviction | Get Involved & Reduce Recidivism',
    content: 'Join the Clearviction team and break down barriers for formerly incarcerated individuals by making it easier to vacate their criminal records in Washington State',
  },
  hero: {
    header: 'Get involved',
    subheading: 'Conviction vacation makes it easier for formerly incarcerated individuals to access housing and employment, two things that are crucial for reducing the odds of re-incarceration.\n\n'
    + 'By volunteering, you will help us reduce barriers and streamline the process of vacating eligible convictions in Washington state to make it easier for people to move forward.',
    imgsrc: '../illustrations/analytics-team.svg',
    ctaLink: '#open-roles',
    ctaText: 'Open roles',
  },
  benefits: {
    header: 'Benefits of joining us',
    body: [
      'At Clearviction, every volunteer is part of a transformative journey. Our dedicated team, bursting with diverse backgrounds and fueled by passion, is united by a shared mission: to provide tools and guidance to help people with criminal convictions clear their records and begin a path to a fresh start.',
      'But Clearviction isn\'t just about the cause; it\'s about personal growth, professional experience, and community involvement. From software engineers discovering a deeper purpose beyond code to criminal justice professionals experiencing the startup hustle, every volunteer\'s story speaks to the transformative essence of our team.',
    ],
    listHeader: 'You\'ll gain:',
    benefitItems: [
      {
        id: 1,
        title: 'PROFESSIONAL GROWTH & EXPERIENCE',
        leftOffset: 2.5,
        rightOffset: 11.25,
      },
      {
        id: 2,
        title: 'SUPPORTIVE & COLLABORATIVE CULTURE',
        leftOffset: 6.25,
        rightOffset: 7.5,
      },
      {
        id: 3,
        title: 'DIVERSE CONNECTIONS & NETWORKING',
        leftOffset: 10,
        rightOffset: 3.75,
      },
      {
        id: 4,
        title: 'MEANINGFUL WORK & SENSE OF PURPOSE',
        leftOffset: 13.75,
        rightOffset: 0,
      },
    ],
    imageSrc: 'illustrations/climbing-guy.svg',
    mobileImgsrc: 'illustrations/checklist1.svg',
  },
  perfectFit: {
    header: 'You\'ll be a perfect fit if',
    valuesDescription: 'You will thrive and feel connected within Clearviction if you embody the following key attributes and share these values...',
    imageSrc: '/illustrations/perfect-fit-lightbulb.svg',
    perfectFitCards: [
      {
        id: 'community-focus',
        header: 'COMMUNITY FOCUS',
        body: 'Show a sincere commitment to the community\'s well-being and recognize the wider impact of your role',
      },
      {
        id: 'strong-communication',
        header: 'STRONG COMMUNICATION',
        body: 'Maintain clear, positive, and effective communication to cultivate collaboration and a supportive community.',
      },
      {
        id: 'commitment',
        header: 'COMMITMENT & CONSISTENCY',
        body: 'Dedicate at least 4 hours per week for a minimum of 6 months, showcasing your reliability and long-term dedication.',
      },
      {
        id: 'adaptability',
        header: 'ADAPTABILITY & RESILIENCE',
        body: 'Be ready to tackle challenges, adjust to various needs, and continuously learn in your role. ',
      },
      {
        id: 'continuous-learning',
        header: 'CONTINOUS LEARNING & DEVELOPMENT',
        body: 'Pursue personal and professional growth, seeking opportunities to enhance your skills and knowledge.',
      },
    ],
  },
  testimonies: [
    {
      id: 1,
      testimonial: 'What initially drew me to Clearviction was their unwavering commitment to making a positive impact on the lives of people with convictions. But what has made me want to stay and contribute long-term is the team and the environment we work in.',
      imageSrc: '/illustrations/gabriel.png',
      name: 'GABRIEL EGER',
      cvrole: 'Software Engineer',
    },
    {
      id: 2,
      testimonial: 'When I started at Clearviction, the project was just starting, so I can proudly say I was part of the first launch ever of the eligibility calculator! After honing my design skills, I became part of the product team where I now have the opportunity to help decide how to improve the project and guide the team towards bigger and better things.',
      imageSrc: '/illustrations/judit.png',
      name: 'JUDIT SERRAL',
      cvrole: 'Product Team Lead',
    },
    {
      id: 3,
      testimonial: 'I joined CV primarily looking for a way to gain more experience as a software engineer, but I also believe deeply that our so-called justice system is totally broken, and am glad to be able to help those folds who are unfairly impacted.',
      imageSrc: '/illustrations/Eleni.png',
      name: 'ELENI PAPANICOLAS',
      cvrole: 'Software Engineer',
    },
    {
      id: 4,
      testimonial: 'I went to school for Criminal Justice and worked as a courtroom clerk in my home state\'s criminal court. Through Clearviction I\'ve had the opportunity to experience working for a true startup, and what it means to bootstrap whatever you can to get things done.',
      imageSrc: '/illustrations/Dendra.png',
      name: 'DENDRA ABDINOOR',
      cvrole: 'UX Researcher',
    },
    {
      id: 5,
      testimonial: 'What I truly love about CV is its culture. It’s a place where respect, responsibility, and support for each project and team member are deeply embedded.',
      imageSrc: '/illustrations/Hui.jpeg',
      name: 'HUI ZHENG',
      cvrole: 'Business Analyst',
    },
    {
      id: 6,
      testimonial: 'The first thing that surprised me was the cause behind the whole project. I loved people\'s enthusiasm to work and volunteer their time, helping each other understand the process and supporting each other in personal growth.',
      imageSrc: '/illustrations/Somi.jpeg',
      name: 'SOMI SHEIKHI',
      cvrole: 'Product Designer',
    },
    {
      id: 7,
      testimonial: 'I didn’t know much about the cause before but believe we’re creating a really practical tool that helps people take the first step to improving their lives. CV Provides individuals with any professional experience they are seeking, from developing products to leadership and management.',
      imageSrc: '/illustrations/Emily.jpeg',
      name: 'EMILY LEUNG',
      cvrole: 'Fundraising Team Lead',
    },
  ],
  volunteerPage: {
    header: 'Help us break down barriers by joining the team.',
    body: [
      'Every individual at Clearviction plays a crucial role in advancing our mission and tools within the Washington community. While we offer specific teams and roles, we highly value cross-functional collaboration and seek individuals who demonstrate adaptability and a dedicated commitment to our pursuit of forward justice.',
    ],
    openRole: {
      title: 'Open roles',
      id: 'roles-airtable-embed',
      src: 'https://airtable.com/embed/shrw329SZsANpPuom',
      height: '548px',
    },
  },
  faqs: [
    {
      id: 'get-involved-faq0',
      summary: 'Can I work in a specific discipline with Clearviction to enhance my resume and gain experience in that area?',
      details: 'Absolutely! We actively encourage volunteers to choose disciplines that align with their passions, skills, and expertise. Our aim is to provide an enriching experience that not only benefits Clearviction but also adds value to our volunteers\' personal and professional growth.',
    },
    {
      id: 'get-involved-faq1',
      summary: 'Are there any costs involved for volunteers?',
      details: 'Yes, we require a tax deductible contribution  of $144/yr which goes directly to paying for our tools. We require volunteers to cover the first 6 months upfront, amounting to $72 during onboarding.',
    },
    {
      id: 'get-involved-faq2',
      summary: 'What is the commitment period for volunteers?',
      details: 'We ask for volunteers to commit to working a minimum of 4 hours a week for a period of 6  months.',
    },
    {
      id: 'get-involved-faq3',
      summary: 'Are there any events or meetings that I\'d be expected to attend?',
      details: 'Yes, we expect all volunteers to attend weekly plenary and team meetings. These are essential for our communication and ensuring everyone is aligned with organizational goals.',
    },
    {
      id: 'get-involved-faq4',
      summary: 'How flexible are the hours for volunteers?',
      details: 'We value flexibility. While we expect volunteers to complete tasks by their respective deadlines, they can choose their preferred working hours to achieve this.',
    },
    {
      id: 'get-involved-faq5',
      summary: 'How was Clearviction founded and by whom?',
      details: 'Clearviction was founded by Seamus Brugh, a Seattle-based entrepreneur who was only able to escape a period of destitution and homelessness by clearing his own criminal record.',
    },
    {
      id: 'get-involved-faq6',
      summary: 'Are there opportunities for advancement or leadership within the volunteer community?',
      details: 'Definitely! We believe in nurturing talent and leadership. Every one of our Team Leads, Corporate Officers, and Board Members started out as an individual contributor volunteer, just like you might become. Volunteers are always encouraged to step up, utilize their unique skills, and contribute in a way that pushes our organizational mission and goals forward.',
    },
    {
      id: 'get-involved-faq7',
      summary: 'Who would I be reporting to or working under?',
      details: 'As a volunteer, you\'ll be a part of a team. You\'ll report directly to the team leader and/or the individual who assigns tasks. We believe in a collaborative environment where everyone has a voice.',
    },
  ],
  partnerPage: {
    header: [
      'Help us bring a message of hope into your community.',
      'Share the calculator with your community',
    ],
    text: [
      'We appreciate finding new ways to work with organizations and people who share our goals and want to help us raise awareness. Whether it be guidance or support, we\'d love to hear more.',
      'Do you know someone who could benefit from our calculator? Want to help us spread the word around your community?',
      'Share our mission on your social media or send it to someone you know needs it.',
    ],
    buttons: [
      {
        name: 'Contact Us',
        href: '/contact',
      },
    ],
    imageSrc: '../illustrations/pr.svg',
  },
};

export default getInvolvedContent;
