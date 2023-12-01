import {
  FAQ, GridSection, Header, MetaPageHead,
} from './content.types.ts';

interface DonateContent {
  meta: MetaPageHead
  heroBanner: Header;
  page: GridSection;
  donateFAQS: FAQ[];
}

const donateContent: DonateContent = {
  meta: {
    title: 'Support Clearviction | Reduce the odds of Recidivism',
    content: 'Support Clearviction—a 501(c)3 nonprofit—in its mission to transform lives and break down barriers for those with criminal records in Washington State.',
  },
  heroBanner: {
    header: 'Your generous donation directly aids those who are limited by their convictions in Washington State',
    subheading: 'Conviction vacation makes it easier for formerly incarcerated individuals to access housing and employment, two things that are crucial for reducing the odds of re-incarceration.\n\nWith your donations, you will directly help break down barriers for people with convictions in the state of Washington.\n\n<span style="fontSize: 14px">Clearviction is a registered 501(c)3 nonprofit organization, EIN#88-3187952. All donations are tax deductible in full or in part.</span>',
    ctaLink: '/about',
    ctaText: 'Learn more about us',
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
        "Clearviction utilizes Donorbox for safe and secure transactions. Donorbox’s reliable security includes two-factor authentication, data encryption, fraud detection, and the assurance that none of your information is ever stored on Donorbox servers.\n\nFor more information, visit [Donorbox's website](https://donorbox.org).",
    },
    {
      id: 'donate4',
      summary: 'How can I obtain a record of my donation for tax purposes?',
      details:
        'Donorbox automatically sends you a receipt of your donation, even if you wish to remain anonymous. This receipt can be customized to include any information you require.\n\nClearviction is an official 501(c)(3) non-profit and donations to Clearviction are all tax deductible. Any donations greater than or equal to $250 require a receipt. View the IRS’ requirements.',
    },
    {
      id: 'donate5',
      summary: 'Who should I contact if I have more questions?',
      details:
        'You can send us an email at [contact@clearviction.org](mailto:contact@clearviction.org) and we will get back to you within 24 hours.',
    },
  ],
};

export default donateContent;
