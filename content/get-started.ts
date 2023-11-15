import {
  Button,
  Fact, GetStartedStep, Header, Info, MetaPageHead, Reason,
} from './content.types.ts';

interface GetStartedContent {
  meta: MetaPageHead;
  hero: Header;
  buttons: Button[];
  steps: GetStartedStep[];
  stepFourSectionNames: string[];
  needToKnowFacts: Fact[];
  CHRIMethods: Info[];
  rejectionReasons: Reason[];
  legalAidForms: Info[];
  financialAidForms: Info[];
  eligibilityForms: Info[];
}

const getStartedContent: GetStartedContent = {
  meta: {
    title: 'Clearviction | Vacate Your Criminal Record in 4 Steps',
    content: 'Get started with Clearviction\'s 4 step process and access our resources to vacate your criminal record in Washington State',
  },
  hero: {
    header: 'Get started on the conviction vacation process',
    subheading: 'Vacate your conviction in the state of Washington by following these 4 steps!',
    imgsrc: '/illustrations/chart.svg',
    ctaLink: '#step-1-documents',
    ctaText: 'Read More',
  },
  buttons: [
    {
      name: 'Step 1: Documents',
      href: '#step-1-documents',
    },
    {
      name: 'Step 2: Eligibility',
      href: '#step-2-eligibility',
    },
    {
      name: 'Step 3: Filing',
      href: '#step-3-file-with-court',
    },
    {
      name: 'Step 4: Court Hearing',
      href: '#step-4-court-hearing',
    },
  ],
  steps: [
    {
      title: 'Step 1: Gather the Required Documents',
      body: 'First let\'s gather the documents you will need to determine your eligibility. Before using the calculator, gather all the documentation you have regarding your conviction.',
      data: ['You\'ll need to know:', 'CHRI (Recommended)', 'A copy of your **Criminal History Record Information (CHRI)** would be very helpful in the vacation process and might be required in some cases.'],
    },
    {
      title: 'Step 2: Check Your Eligibility',
      body: 'Once you have your records and forms gathered, use our eligibility calculator to determine whether you are eligible to vacate your misdemeanor conviction. It is expected to take 10-30 minutes.',
      ctaLink: '/calculator/head-initial-1-cont',
      ctaText: 'Access Calculator',
      ariaLabels: { ctaButton: 'Access our eligibility calculator' },
      data: [],
    },
    {
      title: 'Step 3: File with Court',
      body: 'Next, submit a request to have your conviction vacated (refer to [court directory](https://www.courts.wa.gov/court_dir/?fa=court_dir.county)). Please note that the request to vacate is up to the discretion of the judge and may be denied for a variety of reasons.\n\n<br/>',
      data: ['Common reasons requests to vacate may be denied:'],
    },
    {
      title: 'Step 4: Court Hearing',
      body: 'Last but not least, schedule a hearing with a judge! Below are resources for financial & legal aid.',
      data: ['Many pro bono services are only available after being referred by CLEAR, a toll-free legal hotline:\n\n* Outside of King County: call 1-888-201-1014 (weekdays 9.15am - 12.15pm)\n\n* In King County: call 2-1-1 (weekdays 8am - 6pm) \n\n* You can also apply online at [CLEAR*Online](https://nwjustice.org/apply-online)', 'Important Notice to Verify Legal Resources:', ' Before proceeding with any legal resources mentioned on our website, we highly encourage you to contact them directly and verify that they are currently able to assist with your specific issue. While we strive to provide accurate and up-to-date information, it is important to acknowledge that the priorities and availability of legal resources can evolve.'],
    },
  ],
  stepFourSectionNames: ['Legal Aid', 'Financial Aid', 'Eligibility-Related Forms'],
  needToKnowFacts: [
    {
      id: 'n2k1',
      icon: 'date',
      details: 'The date & violation of your misdemeanor conviction',
    },
    {
      id: 'n2k2',
      icon: 'history',
      details: 'If and when you completed the terms of your sentence',
    },
    {
      id: 'n2k3',
      icon: 'account',
      details: 'Pending or new criminal charges & any court orders against you',
    },
  ],
  CHRIMethods: [
    {
      id: 'chri1',
      summary: '“Unofficial” Copy Through W.A.T.C.H',
      details:
        '**Price: $11**\n\n**Estimated Turnaround: Instant**\n\nGet an [“unofficial” copy through WATCH](https://watch.wsp.wa.gov/WATCH/Home/Notice?ReturnPage=%2FHome%2FIndex) for a $11.00 fee. This report is not always accurate so you should ask the prosecutor.',
    },
    {
      id: 'chri2',
      summary: 'Official Record Review (Fingerprint Card)',
      details:
        '**Price: $30 - $70**\n\n**Estimated Turnaround: 2 weeks**\n\nIf the WATCH printout is not good enough, go to your local police or sheriff\'s office for an official “record review/challenge” fingerprint card.\n\nNext, write WSP a letter asking them to send an official copy of your complete CHRI. Include the fingerprint card and a money order. A copy of your CHRI will be returned to the address on the fingerprint card. Send everything to:\n\nWashington State Patrol Identification and Background Section\n\nPO Box 42633\n\nOlympia WA 98504-2633',
    },
  ],
  rejectionReasons: [
    {
      id: 'rejection1',
      details:
        'The court does not believe that vacating your conviction will be in the interest of society',
    },
    {
      id: 'rejection2',
      details:
        'There are inaccuracies in the court records and/or the application',
    },
    {
      id: 'rejection3',
      details:
        'There is a record of violated probation, unpaid fines, or other offenses',
    },
  ],
  legalAidForms: [
    {
      id: 'legalform1',
      summary: 'Representing Yourself in Court',
      details:
        '[Public Law Library of King County Legal Clinics (KCLL)](https://kcll.org/contact-us/)\n\n[Walk-In Clinic](https://www.kcba.org/For-Lawyers/Pro-Bono-Services/YLD-Law-Library-Walk-in-Clinic)\n\n[King County Bar](http://www.kcba.org/For-the-Public/Free-Legal-Assistance/Neighborhood-Legal-Clinics)\n\n[Open Door Legal Services](https://www.ugm.org/what-we-do/stabilization/legal-services/#)',
    },
    {
      id: 'legalform2',
      summary: 'Assistance For Adults',
      details:
        '[Center for Justice](https://serve.gonzaga.edu/agency/detail/?agency_id=101214)\n\n[Clark County Volunteer Lawyers Program (CCVLP)](https://ccvlp.org/)\n\n[Cowlitz-Wahkiakum Legal Aid](http://cwlap.org/)\n\n[Northwest Justice Project](https://nwjustice.org/get-legal-help)\n\n[The Records Project](https://www.kcba.org/For-the-Public/Free-Legal-Assistance/The-Records-Project)\n\n',
    },
    {
      id: 'legalform3',
      summary: 'Assistance For Children',
      details:
        '[TeamChild](https://teamchild.org/record-sealing/)\n\n[Center for Children & Youth Justice (CCYJ)](https://ccyj.org/our-work/empowering-foster-homeless-youth/)',
    },
  ],
  financialAidForms: [
    {
      id: 'financialform2',
      summary: 'Costs Associated with Vacation',
      details:
        'Use this [packet from Washington Law Help](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record.pdf) to find out if you are eligible to waive your fees (p. 1-2). It also includes instructions to request a fee waiver (p. 4-9) as well as all necessary forms (p. 10-14).\n\nIf you have trouble filling out the documents, use [this website created by Northwest Justice](https://lawhelpinteractive.org/Interview/GenerateInterview/7063/engine) to help fill out the documents for free.',
    },
  ],
  eligibilityForms: [
    {
      id: 'eligibilityform1',
      summary: '(Gross) Misdeameanor Convictions',
      details:
        '[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record/download/21968678-A4F9-42E5-BA32-58826390C62D.pdf) with details about the eligibility to vacate (p. 2-4) and the needed court forms (p. 5-13).\n',
    },
    {
      id: 'eligibilityform2',
      summary: 'Marijuana Misdemeanors',
      details:
        '[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record.pdf) with the steps to vacate (p. 2-6), all necessary court documents (p. 8-13) and a sample letter for WSP to seal your record (p. 7).\n',
    },
    {
      id: 'eligibilityform3',
      summary: 'Prostitution Convictions',
      details:
        'If you were a victim of trafficking, you can use [this vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record.pdf) with info on the eligibility to vacate (p. 1-3), steps to take (p. 4-8), court forms (p. 10-18) and a sample letter for WSP (p. 9).\n',
    },
    {
      id: 'eligibilityform4',
      summary: 'Non-Violent Class B or C Felony',
      details:
        '[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record/download/21968678-A4F9-42E5-BA32-58826390C62D.pdf) including an overview of the eligibility to vacate (p. 3-5), steps to vacate (p. 7-12), all necessary court documents (p. 13-23) and a sample letter to WSP (p. 24).\n\nTo vacate a felony conviction, you will also need a Certificate of Discharge. If the court has not issued the Certificate of Discharge yet, you must file for a certificate before you can vacate the felony. [This packet](https://www.courts.wa.gov/forms/documents/CR08.0670_Obtaining%20a%20Certificate%20of%20Discharge_2019%2007.pdf) will assist you to obtain a Certificate of Discharge in Washington State.',
    },
    {
      id: 'eligibilityform5',
      summary: 'Treaty to Indian Fishing Convictions',
      details:
        '[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record/download/21968678-A4F9-42E5-BA32-58826390C62D.pdf) including an overview of the eligibility to vacate (p. 1-2), steps to take (p. 3-7), all court forms (p. 8-16), and a sample letter for WSP (p. 17).\n',
    },
    {
      id: 'eligibilityform6',
      summary: 'Juvenile Conviction Records',
      details:
        'Detailed [packet](https://teamchild.org/wp-content/uploads/2019/03/Sealing-Juvenile-Court-Records-in-Washington-State-2018.pdf) containing all court documents (p. 30-40), sample letters to WSP and JRA (p. 41-42), and the specific practices per county (p. 19-27).\n\nThe [packet from King County Superior Court](https://kingcounty.gov/~/media/courts/superior-court/docs/juvenile/juvenile-forms/10-sealing-records-instructions-and-forms-pdf-web.ashx?la=en) briefly describes the procedure to vacate and contains all necessary court documents (p. 11-17) and a sample of how to fill in the court documents (p. 4-9)',
    },
  ],
};

export default getStartedContent;
