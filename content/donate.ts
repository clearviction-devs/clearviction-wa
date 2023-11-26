import {
  Button, FAQ, GridSection, Header, MetaPageHead,
} from './content.types.ts';

interface DonateContent {
  meta: MetaPageHead
  heroBanner: Header;
  page: GridSection;
  donateFAQS: FAQ[];
  donationShare: {
    header: string[];
    text: string[];
  };
  donateJoinTeam: {
    header: string[];
    text: string[];
    buttons: Button[];
  };
}

const donateContent: DonateContent = {
  meta: {
    title: 'Support Clearviction | This Giving Tuesday support Clearviction and help us reduce recidivism',
    content: 'Support Clearviction and help change lives! Washington State laws offer opportunities to clear your record. Our free tools can help you qualify.',
  },
  heroBanner: {
    header: 'Giving Tuesday',
    subheading: 'Clearviction is an open-sourced project whose goal is to help people easily navigate the legal system in Washington State.',
    imgsrc: '/illustrations/givingtuesday.svg',
  },
  page: {
    id: 'donate',
    title: 'How will your donations help Clearviction\'s goals?',
    subtitle: 'Here\'s how your generosity can help us achieve our milestones and make it possible to connect our project with more and more people who need it:',
    items: [
      {
        id: 'donate-item1',
        body: 'Fund the technological and project management tools needed to grow our project.',
        imgsrc: '/illustrations/startup.svg',
      },
      {
        id: 'donate-item2',
        body: 'Provide vouchers for users who participate in our research.',
        imgsrc: '/illustrations/science-discovery.svg',
      },
      {
        id: 'donate-item3',
        body: 'Support low-income individuals in overcoming financial barriers blocking the vacation of their record.',
        imgsrc: '/illustrations/laptop.svg',
      },
      {
        id: 'donate-item4',
        body: 'Help people with convictions learn about and access our Conviction Vacation Eligibiliity calculator.',
        imgsrc: '/illustrations/notetaking.svg',
      },
    ],
  },
  donateFAQS: [
    {
      id: 'donate1',
      summary: 'How will my donation be used?',
      details:
        'Clearviction is staffed by a group of dedicated volunteers, and any of our donations will go directly to supporting efforts to give those convicted a fresh start.',
    },
    {
      id: 'donate2',
      summary: 'Who can donate?',
      details:
        'Anyone and everyone! However, Clearviction does not accept donations that are made as a political endorsement.',
    },
    {
      id: 'donate3',
      summary: 'Is it safe and secure for me to donate online?',
      details:
        'Clearviction utilizes Give Lively for safe and secure transactions. Give Lively’s reliable security includes two-factor authentication, data encryption, fraud detection, and the assurance that none of your information is ever stored on Give Lively servers.\n\nFor more information, visit [visit GiveLively.org](https://www.givelively.org/data-privacy-and-security).',
    },
    {
      id: 'donate4',
      summary: 'How can I obtain a record of my donation for tax purposes?',
      details:
        'Give Lively automatically sends you a receipt of your donation, even if you wish to remain anonymous. This receipt can be customized to include any information you require. Clearviction is an official 501(c)(3) non-profit and donations to Clearviction are all tax deductible. Any donations greater than or equal to $250 require a receipt. [View the IRS’ requirements](https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contributions-written-acknowledgments).',
    },
    {
      id: 'donate5',
      summary: 'Can I make a donation by check?',
      details:
        'Give Lively has the capability for direct ACH payments, but you are still welcome to mail a check. Please make the check out to Clearviction and mail it to:\n\nSeamus Brugh\n\n107 Spring St\n\nSeattle, WA 98104',
    },
    {
      id: 'donate6',
      summary: 'Who should I contact if I have more questions?',
      details:
        'You can send us an email at [contact@clearviction.org](mailto:contact@clearviction.org) and we will get back to you within 24 hours.',
    },
  ],
  donationShare: {
    header: [
      'Your voice is a powerful tool.',
      'Share our fundraiser.',
    ],
    text: [
      'Your donation directly supports our operations and outreach, you can donate directly to Clearviction and get the tax benefit yourself!',
      'If you are unable to financially contribute, that is totally ok! Consider donating a moment of your time and follow us or share our content on social media.',
    ],
  },
  donateJoinTeam: {
    header: [
      'Help us break down barriers by joining our team.',
    ],
    text: [
      'Still interested in learning more? Consider joining our team! We’re always looking for people to share their expertise or their criminal justice system stories.',
      'When you share your expertise with us, we get closer to reducing barriers and timelines for individuals looking to vacate their convictions in Washington State.',
    ],
    buttons: [
      {
        name: 'Learn More',
        href: '/about',
      },
    ],
  },
};

export default donateContent;
