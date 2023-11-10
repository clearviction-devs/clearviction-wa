import {
  AirtableEmbed, Button, Fact, GridItem, Header, MetaPageHead,
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
        id: 'fact-1',
        icon: 'sync',
        details: 'Want to share your expertise to help us make a better product',
      },
      {
        id: 'fact-2',
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
