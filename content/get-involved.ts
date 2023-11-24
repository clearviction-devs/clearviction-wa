import {
  AirtableEmbed, Button, Fact, FAQ, GridItem, Header, MetaPageHead,
} from './content.types.ts';

interface GetInvolvedContent {
  meta: MetaPageHead;
  hero: Header;
  waysToParticipate: GridItem[];
  volunteerPage: {
    header: string;
    body: string[];
    facts: Fact[];
    openRole: AirtableEmbed;
  };
  partnerPage: {
    header: string[];
    text: string[];
    imgsrc: string;
    buttons: Button[];
  };
  faqs: FAQ[];
}

const getInvolvedContent: GetInvolvedContent = {
  meta: {
    title: 'Join Clearviction | Get Involved & Reduce Recidivism',
    content: 'Join the Clearviction team and break down barriers for formerly incarcerated individuals by making it easier to vacate their criminal records in Washington State',
  },
  hero: {
    header: 'Share your expertise with us',
    subheading: 'There are many ways to participate with the Clearviction team, and we appreciate all of them!',
  },
  waysToParticipate: [
    {
      id: 'ways-to-participate-1',
      title: 'volunteer',
      body: 'Join our dedicated volunteer team and help us bring the resources to those who need them.',
      imgsrc: '../illustrations/diversity-2.svg',
      href: '#volunteer',
    },
    {
      id: 'ways-to-participate-2',
      title: 'donate',
      body: 'Your gift makes a difference. Make it possible to continue helping our community.',
      imgsrc: '../illustrations/money-jar.svg',
      href: '/donate',
    },
    {
      id: 'ways-to-participate-3',
      title: 'Partner with us',
      body: 'Create change by sharing our project with others and reaching out to your peers.',
      imgsrc: '../illustrations/horn.svg',
      href: '#partner-with-us',
    },
  ],
  volunteerPage: {
    header: 'Help us break down barriers by joining the team.',
    body: [
      'Conviction vacation makes it easier for formerly incarcerated individuals to access housing and employment, two things that are crucial for reducing the odds of re-incarceration.',
      'By volunteering, you will help us reduce barriers and streamline the process of vacating eligible convictions in Washington state to make it easier for people to move forward.',
      'You\'ll be a perfect fit if you:',
    ],
    facts: [
      {
        id: 'fact-1',
        icon: 'alarm',
        details: 'Can commit to 4 hours a week for at least 6 months',
      },
      {
        id: 'fact-2',
        icon: 'sync',
        details: 'Want to share your expertise to help us make a better product',
      },
      {
        id: 'fact-3',
        icon: 'cloud',
        details: 'Are a self-motivated individual comfortable with remote work',
      },
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
    imgsrc: '../illustrations/pr.svg',
  },
};

export default getInvolvedContent;
