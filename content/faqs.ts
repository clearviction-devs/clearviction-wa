import { FAQ } from './content.types.ts';

const faqs: FAQ[] = [
  {
    id: 'faq1',
    summary: 'What does it mean to vacate a conviction?',
    details:
      'Vacating a conviction is the process of clearing a conviction from your record so it is not visible to the public anymore. Vacating your conviction can remove that crime from some background checks, and you can say legally that you were never convicted of that crime.\n\nThe courts can still reference a vacated conviction in a future criminal proceeding, and not all convictions are eligible for vacation.',
  },
  {
    id: 'faq2',
    summary: 'Why should I consider vacating my conviction?',
    details:
      'If you are convicted of a crime, your criminal record will continue to show that conviction in background checks. Having a criminal record might negatively affect your housing, employment, and educational opportunities.\n\nIf you are experiencing this, vacating your conviction removes that crime from background checks, and you can say legally that you were never convicted of that crime. This can help you get access to housing, education, employment, volunteering opportunities, and more.',
  },
  {
    id: 'faq3',
    summary: 'How do I know if my conviction is eligible to vacate?',
    details:
      'To be eligible to vacate, there are specific criteria that your conviction must meet.\n\nFor misdemeanors, you can use our eligibility calculator to know if you are eligible.\n\nFor Felonies, please refer to [RCW 9.94A.640](https://apps.leg.wa.gov/RCW/default.aspx?cite=9.94a.640). An easy to read resource to understand your eligibility is available at [Washington Law Help](https://www.washingtonlawhelp.org/search?q=vacation).',
  },
  {
    id: 'faq4',
    summary:
      'If my conviction meets the eligibility criteria, does that guarantee that I can vacate it?',
    details:
      'A request to vacate may be denied for other reasons, and is up to the discretion of the judge. The most common reasons that a request can be denied is if:\n1. the court does not believe that vacating your conviction will be in the interest of society,\n2. you violated probation or have not paid off your fines,\n3. you are otherwise not eligible to vacate that particular conviction, or\n4. there was an inaccuracy in the court records and/or the application.',
  },
  {
    id: 'faq5',
    summary: 'How long does the process take?',
    details:
      'To vacate your Washington conviction, the process takes on average three to four months, depending on your individual circumstances, the court’s caseload at the time, and whether there are any objections to vacating your conviction.',
  },
  {
    id: 'faq6',
    summary: 'What happens after my conviction is vacated?',
    details:
      'You will receive a court order vacating the conviction—which has the effect of withdrawing the guilty judgment and dismissing the charges against you. You can then legally state that you were not convicted of the offense.',
  },
  {
    id: 'faq7',
    summary: 'Does vacating a conviction make it disappear from my record?',
    details:
      'No.\n\nYour conviction will still be in court records and computerized court indexes to court records. If a conviction was a domestic violence case, these records and indexes will still show the case type.\n\nInformation about the court records from the cases that led to the convictions are still public. You can still find them on [www.courts.wa.gov](https://www.courts.wa.gov/)\n\nProsecutors can still use evidence of vacated convictions in a later criminal prosecution. They can still use them in a sexually violent predator commitment proceeding.\n\nFBI records and private background check records may still have information about the convictions.',
  },
];

export default faqs;
