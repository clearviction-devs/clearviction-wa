import {
  AirtableEmbed, BenefitItem, Button, FAQ, Header, MetaPageHead, PerfectFitCard,
} from './content.types.ts';

interface GetInvolvedContent {
  meta: MetaPageHead;
  hero: Header;
  benefits: {
    header: string,
    body: string[],
    listHeader: string,
    benefitItems: BenefitItem[],
    imgsrc: string,
    mobileImgsrc: string,
  },
  volunteerPage: {
    body: string[];
    openRole: AirtableEmbed;
  };
  partnerPage: {
    header: string[];
    text: string[];
    imgsrc: string;
    buttons: Button[];
  };
  faqs: FAQ[];
  perfectFit: {
    header: string;
    body: string;
    perfectFitCards: PerfectFitCard[];
    imgSrc: string;
  }
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
    imgsrc: 'illustrations/climbing-guy.svg',
    mobileImgsrc: 'illustrations/checklist1.svg',
  },
  volunteerPage: {
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
  perfectFit: {
    header: 'You\'ll Be Perfect If...',
    body: 'You will thrive and feel connected within Clearviction if you embody the following key attributes and share these values...',
    imgSrc: '/illustrations/perfect-fit-lightbulb.svg',
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
    imgsrc: '../illustrations/pr.svg',
  },
};

export default getInvolvedContent;
