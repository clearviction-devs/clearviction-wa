import {
  FAQ, GridSection, Header, MetaPageHead, SectionNav,
} from './content.types.ts';

interface HomeContent {
  meta: MetaPageHead;
  heroBanner: Header;
  sectionNavs: SectionNav[];
  ourMission: Header;
  gridSections: GridSection[];
  faqs: FAQ[];
}

const content: HomeContent = {
  meta: {
    title: 'Clearviction | Clearing Criminal Records in Washington State',
    content: 'Washington Law allows for vacation of select criminal records. Clearviction\'s free tools help individuals assess their eligibility for a fresh start.',
  },
  heroBanner: {
    header: 'Check your eligibility to vacate a Washington State conviction',
    subheading: 'Our free eligibility calculator can check if your conviction qualifies for vacation in less than 10 minutes.',
    ctaLink: '/calculator/head-initial-1-cont',
    ctaText: 'Access Calculator',
    imgsrc: '/illustrations/home-hero-2color.svg',
    ariaLabels: { ctaButton: 'Access our eligibility calculator' },
  },
  sectionNavs: [
    { label: 'Our Mission', href: '#our-mission' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Why vacate', href: '#why-vacate' },
    { label: 'FAQ', href: '#faq' },
  ],
  ourMission: {
    id: 'our-mission',
    header:
      'Our Mission',
    body: 'Clearviction was founded in 2020 sparked by [Washington State\'s New Hope Act](https://app.leg.wa.gov/billsummary?BillNumber=2890&Year=2017). We are a 501(c)(3) non-profit organization committed to helping people with convictions improve their quality of life.\n\nEach year, nearly 98k people are added to the millions across Washington State already burdened with a criminal record. The justice-impacted folks will face significant barriers to their day to day life after completing their prison terms.',
    imgsrc: '/illustrations/checklist1.svg',
  },
  gridSections: [
    {
      id: 'how-it-works',
      title: 'How it works',
      ctaLink: '/get-started',
      ctaText: 'Get started',
      ariaLabels: { ctaButton: 'Get started with the eligibilty calculator' },
      items: [
        {
          id: 'how-it-works-item1',
          body: 'We break down the laws into understandable language.',
          imgsrc: '/illustrations/teamwork.svg',
        },
        {
          id: 'how-it-works-item2',
          body: 'You answer a few simple yes/no questions.',
          imgsrc: '/illustrations/checklist.svg',
        },
        {
          id: 'how-it-works-item3',
          body: 'This helps determine your vacation eligibility in Washington.',
          imgsrc: '/illustrations/teamwork-2.svg',
        },
        {
          id: 'how-it-works-item4',
          body: 'We help you explore what comes after determining your vacation eligibility.',
          imgsrc: '/illustrations/chart.svg',
        },
      ],
    },
    {
      id: 'why-vacate',
      title: 'Why Vacate?',
      ctaLink: '/get-started',
      ctaText: 'Get started',
      subtitle: 'A conviction vacation seals the offense from your record, giving you a better chance at access to:',
      ariaLabels: { ctaButton: 'Get started with the eligibilty calculator' },
      items: [
        {
          id: 'why-vacate-item1',
          title: 'Housing',
          body: 'Make it easier to find and be approved for rent or purchasing a home.',
          imgsrc: '/illustrations/city-buildings.svg',
        },
        {
          id: 'why-vacate-item2',
          title: 'Employment',
          body: 'Reduce barriers to finding and obtaining employment.',
          imgsrc: '/illustrations/employment.svg',
        },
        {
          id: 'why-vacate-item3',
          title: 'Education',
          body: 'Apply for scholarships, programs, degrees, or certificates.',
          imgsrc: '/illustrations/graduation.svg',
        },
        {
          id: 'why-vacate-item4',
          title: 'Government Assistance',
          body: 'Receive government help and support.',
          imgsrc: '/illustrations/lawyer.svg',
        },
      ],
    },
  ],
  faqs: [
    {
      id: 'faq0',
      summary: 'What do "vacating" and "expunging" mean, and what are the differences between them?',
      details: 'There are two ways a conviction can be cleared off your record.\n\n"Vacating" **partially** erases it, and "expunging" **completely** erases it.\n\n**To vacate a conviction** means that, as far as society is concerned, the conviction never happened. Your landlord and your workplace won\'t be able to see your record, but it will still be visible to the police and courts.\n\n**To expunge a conviction** erases it entirely. Society, the police, and the courts will all treat you like the conviction never happened.',
    },
    {
      id: 'faq1',
      summary: 'What does it mean to vacate a conviction?',
      details: 'Vacating a conviction is the process of clearing a conviction from your record so it is not visible to the public anymore. Vacating your conviction can remove that crime from some background checks, and you can say legally that you were never convicted of that crime.\n\nThe courts can still reference a vacated conviction in a future criminal proceeding, and not all convictions are eligible for vacation.',
    },
    {
      id: 'faq2',
      summary: 'Why should I consider vacating my conviction?',
      details: 'If you are convicted of a crime, your criminal record will continue to show that conviction in background checks. Having a criminal record might negatively affect your housing, employment, and educational opportunities.\n\nIf you are experiencing this, vacating your conviction removes that crime from background checks, and you can say legally that you were never convicted of that crime. This can help you get access to housing, education, employment, volunteering opportunities, and more.',
    },
    {
      id: 'faq3',
      summary: 'How do I know if my conviction is eligible to vacate?',
      details: 'To be eligible to vacate, there are specific criteria that your conviction must meet.\n\nFor misdemeanors, you can use our eligibility calculator to know if you are eligible.\n\nFor felonies, please refer to [RCW 9.94A.640](https://apps.leg.wa.gov/RCW/default.aspx?cite=9.94a.640). An easy to read resource to understand your eligibility is available at [Washington Law Help](https://www.washingtonlawhelp.org/search?q=vacation).',
    },
    {
      id: 'faq4',
      summary: 'If my conviction meets the eligibility criteria, does that guarantee that I can vacate it?',
      details: 'A request to vacate may be denied for other reasons, and is up to the discretion of the judge. The most common reasons that a request can be denied is if:\n\n 1. the court does not believe that vacating your conviction will be in the interest of society,\n\n 2. you violated probation or have not paid off your fines,\n\n 3. you are otherwise not eligible to vacate that particular conviction, or\n\n 4. there was an inaccuracy in the court records and/or the application.',
    },
    {
      id: 'faq5',
      summary: 'How long does the process take?',
      details: 'To vacate your Washington conviction, the process takes on average three to four months, depending on your individual circumstances, the court’s caseload at the time, and whether there are any objections to vacating your conviction.\n',
    },
    {
      id: 'faq6',
      summary: 'What happens after my conviction is vacated?',
      details: 'You will receive a court order vacating the conviction—which has the effect of withdrawing the guilty judgment and dismissing the charges against you. You can then legally state that you were not convicted of the offense.\n',
    },
    {
      id: 'faq7',
      summary: 'Does vacating a conviction make it disappear from my record?',
      details: 'No.\n\nYour conviction will still be in court records and computerized court indexes to court records. If a conviction was a domestic violence case, these records and indexes will still show the case type.\n\nInformation about the court records from the cases that led to the convictions are still public. You can still find them on [www.courts.wa.gov](https://www.courts.wa.gov/)\n\nProsecutors can still use evidence of vacated convictions in a later criminal prosecution. They can still use them in a sexually violent predator commitment proceeding.\n\nFBI records and private background check records may still have information about the convictions.',
    },
  ],
};

export default content;
