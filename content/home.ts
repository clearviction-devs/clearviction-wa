import {
  FAQ, Header, HomePlayCards,
  MetaPageHead,
} from './content.types.ts';

interface HomeContent {
  meta: MetaPageHead;
  heroBanner: Header;
  background: {
    id: string;
    title: string;
    body: string;
    iconText: string;
    iconText2: string;
  }
  eligibilityCTA: {
    id: string;
    title: string;
    ctaButton: string;
  }
  carousel: HomePlayCards[];
  faqs: FAQ[];
}

const content: HomeContent = {
  meta: {
    title: 'Clearing Criminal Records in Washington State',
    content: 'Washington Law allows for vacation of select criminal records. Our free tools help individuals assess their eligibility for a fresh start.',
  },
  heroBanner: {
    header: 'Check if your WA state conviction can be vacated by answering a few questions.',
    ctaLink: '/calculator/head-initial-1-cont',
    ctaText: 'Check eligibility',
    ariaLabels: { ctaButton: 'Access our eligibility calculator' },
  },
  background: {
    id: 'background-information',
    title: 'Vacated convictions do not appear on background checks',
    body: 'In Washington state, a **vacated** conviction will no longer appear on state or federal background checks, opening up opportunities in employment, housing, and education.\n\nOur **Eligibility Tool** helps free those impacted by the justice system from the harmful consequences of a lifetime of discrimination because of their record, even decades after it occurred.',
    iconText: 'Of the 1M+ Washingtonians eligible to vacate',
    iconText2: 'Less than 3% have actually vacated their convictions',
  },
  eligibilityCTA: {
    id: 'eligibility-cta',
    title: 'Are you one of the 97% of people eligible to vacate?',
    ctaButton: 'Check your conviction',
  },
  carousel: [
    {
      title: 'Step 1',
      details: 'Gather all the documentation you have regarding your conviction. That includes previous records and all other legal documents.',
      ctaButton: 'Learn more',
      buttonHref: '/get-started',
    },
    {
      title: 'Step 2',
      details: 'Use the **Eligibility Tool**  to determine your eligibility to vacate your misdemeanor or felony conviction by answering a few **yes** or **no** questions.',
      ctaButton: 'Check eligibility',
      buttonHref: '/calculator/head-initial-1-cont',
    },
    {
      title: 'Step 3',
      details: 'We help you explore what comes after your eligibility is determined.',
      ctaButton: 'Learn more',
      buttonHref: '/get-started/file-with-the-court',
    },
  ],
  faqs: [
    {
      id: 'faq0',
      summary: 'What does it mean to vacate a conviction?',
      details: 'Vacating a conviction is the process of clearing a conviction from your record so it is not visible to the public anymore. Vacating your conviction can remove that crime from some background checks, and you can say legally that you were never convicted of that crime.\n\nThe courts can still reference a vacated conviction in a future criminal proceeding, and not all convictions are eligible for vacation.',
    },
    {
      id: 'faq1',
      summary: 'Is vacating the same as expunging?',
      details: 'In Washington, criminal convictions cannot be "expunged."\n\nTo "vacate" a conviction means that, as far as society is concerned, the conviction never happened. Your landlord and your workplace won’t be able to see your record, but it will still be visible to the police and courts.\n\nConviction records always exist in court databases, although vacated records are not visible to the public.\n\nTo expunge a conviction erases it entirely. Society, the police, and the courts will all treat you like the conviction never happened.',
    },
    {
      id: 'faq2',
      summary: 'How do I know if I can vacate my conviction?',
      details: 'To be eligible to vacate, there are specific criteria that your conviction must meet.\n\nYou can use our eligibility calculator to check if your misdemeanor or felony qualifies for vacation.',
    },
    {
      id: 'faq3',
      summary: 'How long does the process take?',
      details: 'To vacate your Washington conviction, the process takes on average three to four months, depending on your individual circumstances, the court’s caseload at the time, and whether there are any objections to vacating your conviction.\n',
    },
    {
      id: 'faq4',
      summary: 'What happens after my conviction is vacated?',
      details: 'You will receive a court order vacating the conviction—which has the effect of withdrawing the guilty judgment and dismissing the charges against you. You can then legally state that you were not convicted of the offense.\n',
    },
    {
      id: 'faq5',
      summary: 'If I vacate, do my conviction records disappear?',
      details: 'No.\n\nYour conviction will still be in court records and computerized court indexes to court records. If a conviction was a domestic violence case, these records and indexes will still show the case type.\n\nInformation about the court records from the cases that led to the convictions are still public. You can still find them on www.courts.wa.gov.\n\nProsecutors can still use evidence of vacated convictions in a later criminal prosecution. They can still use them in a sexually violent predator commitment proceeding.\n\nFBI records and private background check records may still have information about the convictions.',
    },
  ],
};

export default content;
