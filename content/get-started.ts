import {
  CarouselCard,
  FAQ, GetStartedStep, Header, Info,
  MetaPageHead,
} from './content.types.ts';

interface GetStartedContent {
  meta: MetaPageHead[];
  hero: Header;
  steps: GetStartedStep[];
  FAQ: FAQ[];
  needToKnowFacts: string;
  WATCHCards: CarouselCard[];
  LFOFAQs: FAQ[];
  fileWithTheCourtSteps: GetStartedStep[];
  legalAidForms: Info[];
  eligibilityForms: Info[];
}

const getStartedContent: GetStartedContent = {
  meta: [{
    title: 'Conviction Vacation Initiative | Vacate a Criminal Record in 3 Steps',
    content: 'Get started with our 3 step vacation process and access our resources, forms and support to clear your criminal record in Washington State',
  },
  {
    title: 'Required Documents to Clear Criminal Records in WA | Conviction Vacation Initiative',
    content: 'Our step-by-step guide shows you how to gather court records, case details, and essential documents to vacate your criminal record in WA State',
  },
  {
    title: 'Check Your Eligibility to Clear Your WA Record | Conviction Vacation Initiative',
    content: 'Gather your records and use our Eligibility Calculator to check if you qualify to vacate your conviction in WA under the New Hope Act. Expect 10-30 minutes per conviction.',
  },
  {
    title: 'Vacation Final Steps: Filing Petitions & Court Hearings | Conviction Vacation Initiative',
    content: 'After confirming your eligibility to clear your record, follow our filing guidelines on forms and court requirements to submit your petition successfully',
  }],
  hero: {
    header: 'Get started with the vacation process',
    subheading: 'You can vacate your conviction in the state of Washington by following these 3 steps.',
  },
  steps: [
    {
      title: 'Gather your documentation',
      overline: 'Step 1',
      body: 'Before using the eligibility calculator, gather all the documentation you have regarding your conviction. ',
      ctaText: 'Learn more',
      ctaLink: '/get-started/gather-your-documentation',
    },
    {
      title: 'Determine your eligibility',
      overline: 'Step 2',
      body: 'If you know the details of your conviction, you can use our eligibility tool to determine if your conviction meets the vacation criteria.',
      ctaText: 'Learn more',
      ctaLink: '/get-started/determine-your-eligibility',
    },
    {
      title: 'File with the court',
      overline: 'Step 3',
      body: 'If you\'re eligible, the next step is to petition the court to vacate your conviction and attend your hearing.',
      ctaText: 'Learn more',
      ctaLink: '/get-started/file-with-the-court',
    },
  ],
  FAQ: [{
    id: 'vacatable-convictions-faq-1',
    summary: 'What convictions are allowed to be vacated?',
    details: 'Washington State allows you to vacate most types of criminal charges, but your conviction must meet specific criteria. \n \n Review the general requirements below, but for the most accurate results, use the **Eligibility Calculator**.',
  },
  {
    id: 'vacatable-convictions-faq-2',
    summary: 'What misdemeanors CANNOT be vacated?',
    details: 'This list outlines basic criteria only and does not cover specific exceptions. For detailed information and criteria, visit [courts.wa.gov](https://www.courts.wa.gov/forms/documents/CrRLJ%2009_0300_InstructVacateMisdConvictions_2019%2012.pdf). \n \n Alternatively, gather your documents and use the Eligibility Calculator for the most accurate results regarding the vacation status of your specific conviction. \n \n - Sex offenses [(RCW 9A.44)](https://app.leg.wa.gov/RCW/default.aspx?cite=9A.44). There is one exception: failing to register as a sex offender [(RCW 9A.44.132)](https://app.leg.wa.gov/RCW/default.aspx?cite=9A.44) \n - Convictions involving obscenity and pornography [(RCW 9.68)](https://app.leg.wa.gov/rcw/default.aspx?Cite=9.68) \n - Convictions involving sexual exploitation of children [(RCW 9.68A)](https://app.leg.wa.gov/rcw/default.aspx?Cite=9.68) \n - Violent offenses or attempts to commit violent offenses [(RCW 9.94A.030)](https://app.leg.wa.gov/RCW/default.aspx?cite=9.94A.030) \n - Driving while under the influence (DUI) [(RCW 46.61.502)](https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.502) \n - Actual physical control while under the influence [(RCW 46.61.504)](https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.504)',
  },
  {
    id: 'vacatable-convictions-faq-3',
    summary: 'What felonies CANNOT be vacated?',
    details: 'This list covers basic criteria only and does not include specific exceptions. For detailed information and criteria, visit [courts.wa.gov](https://www.courts.wa.gov/forms/documents/CR08.0930_Vacating%20Record%20of%20Felony%20Conviction_2023%2001.pdf). \n \n Or collect your documents and use the Eligibility Calculator for the most accurate results regarding the vacation status of your specific conviction.\n \n Class A Felonies CANNOT be vacated. \n \n Class B and C CANNOT be vacated if they are: \n \n - A violent offense [(9.94A.030(58)a)](https://app.leg.wa.gov/rcw/default.aspx?cite=9.94A) \n - Driving under the influence [(RCW 46.61.502)](https://app.leg.wa.gov/rcw/default.aspx?cite=46.61) \n - Actual physical control while under the influence [(RCW 46.61.504)](https://app.leg.wa.gov/rcw/default.aspx?cite=46.61) \n - A crime against a person as defined in [RCW 43.43.830](https://app.leg.wa.gov/RCW/default.aspx?cite=43.43.830) with specific exceptions. \n - Violations of [RCW 9A.44](https://app.leg.wa.gov/RCW/default.aspx?cite=9A.44) (sex offenses) with specific exceptions.',
  }],
  needToKnowFacts: '- The date & violation of your misdemeanor or felony conviction in Washington state \n- If and when you completed the terms of your sentence, including any **Legal Financial Obligations** ([LFOs](/lfos)) \n- Pending or new criminal charges & any court orders against you',
  WATCHCards: [
    {
      title: '**Online “WATCH” report** (Unofficial copy)',
      details: 'This report is not always accurate. \n \n **Price**: $11 \n\n **Estimated Turnaround**: instant',
      ctaButton: 'WSP website',
      buttonHref: 'https://wsp.wa.gov/crime/criminal-history',
    },
    {
      title: '**“WATCH” report by mail** (Unofficial copy)',
      details: 'This report is not always accurate. \n \n **Price**: $32 \n\n **Estimated Turnaround**: about 2 weeks',
      ctaButton: 'WSP website',
      buttonHref: 'https://wsp.wa.gov/crime/criminal-history',
    },
    {
      title: '**Official “WATCH” report by mail**',
      details: 'You may obtain this report by request from the Washington State Patrol through mail by submitting a full set of fingerprints. \n \n **Price**: $32 \n\n **Estimated Turnaround**: about 2 weeks',
      ctaButton: 'WSP website',
      buttonHref: 'https://wsp.wa.gov/crime/criminal-history',
    },
  ],
  LFOFAQs: [{
    id: 'LFO-FAQ-1',
    summary: 'Must I pay my LFOs to vacate a felony conviction?',
    details: 'For felony offenses, you need to obtain a Certificate of Discharge before vacating a conviction. Failure to pay LFOs prevents obtaining this certificate.\n - [This packet](https://www.courts.wa.gov/forms/documents/CR08.0670_Obtaining%20a%20Certificate%20of%20Discharge_2019%2007.pdf) will assist you in obtaining a Certificate of Discharge in Washington State. \n - You will need to file both forms: [CR 08.600](https://www.courts.wa.gov/forms/documents/CR08.0600_MTCtOrdDischarge_2019%2007.pdf) & [CR 08.0650](https://www.courts.wa.gov/forms/documents/CR08.0650_CtOrdDischarge_2019%2007.pdf) from the [Washington Courts](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=43) website. ',
  }, {
    id: 'LFO-FAQ-2',
    summary: 'Must I pay my LFOs to vacate a misdemeanor?',
    details: 'For misdemeanor offenses, you don’t have to wait 3 years after you pay off your Legal Financial Obligations (or “LFOs”) to vacate your convictions. You can now ask to vacate your convictions once 3 years have passed from whichever of these dates is later: \n - The end of your supervision or probation \n - The end of your total and partial confinement \n - Your sentencing date',
  }, {
    id: 'LFO-FAQ-3',
    summary: 'What if I can’t pay my LFOs?',
    details: 'You may qualify for relief from some or all of your LFOs, depending on your conviction type, the types of LFOs assessed, and your financial situation. \n \n For more information about reducing or waiving your LFOs, visit the below online resources. \n \n - Ask a court to cancel your non-restitution interest and/or reduce your LFOs using the packet available from [WashingtonLawHelp.org](https://www.washingtonlawhelp.org/resource/filing-a-motion-to-remit-remove-financial-legal-obligations-in-district-or-municipal-court). \n - [Civilsurvival.org](https://civilsurvival.org/guides/) has two guides regarding LFOs on their website.  You can find these guides under the “Legal Support” section.',
  }],
  fileWithTheCourtSteps: [
    {
      title: 'File the petition & order forms',
      overline: 'Step 1',
      body: 'To petition your conviction vacation, fill out and sign the corresponding petition and order forms:\n\n**Cannabis**: [CrRLJ 09.0800/ .0870](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38) \n **Prostitution**: [CrRLJ 09.0100/ .0200](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38)  \n **Misdemeanor**: [CrRLJ 09.0100/ .0200](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38)  \n **Felony**: [CR 08.0900/ .0920](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38)',
    },
    {
      title: 'Fill out the notice to schedule a hearing',
      overline: 'Step 2',
      body: 'To schedule a hearing, contact the clerk of the court where you were sentenced and complete the form that the court uses to schedule a hearing. If the court does not require a specific form, you may use [CrRLJ 09.0150](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38). \n',
    },
    {
      title: 'File both documents',
      overline: 'Step 3',
      body: 'To find where to file your petition to vacate, visit the [Washington State Courts Website](https://www.courts.wa.gov/court_dir/) for a statewide directory of courts.\n\nOn the same day that you file those documents with the clerk of the court, you must also provide a copy to your prosecutors’ office.',
    },
    {
      title: 'Attend your hearing',
      overline: 'Step 4',
      body: 'The judge will hear your petition on the scheduled hearing day, and you must attend. If the petition is granted, the judge will issue an order vacating your conviction.\n\nThe court clerk will then send a copy of the order to the WSP and any local law enforcement agency that holds your criminal history.',
    },
    {
      title: 'Enjoy your new opportunities',
      overline: 'Step 5',
      body: 'After the judge grants your request, your conviction will be vacated within a few days.\n\nThis means your conviction will no longer appear in your criminal history when searched.',
    },
  ],
  legalAidForms: [
    {
      id: 'legalform0',
      summary: 'Waiving costs associated with vacating',
      details:
        'Use this [packet from Washington Law Help](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/3928A184-D6E5-9324-4FB9-495A060A017B/3204en_ask-the-court-to-waive-filing-fee.pdf) to find out if you are eligible to waive your fees.\n - This packet includes: \n  - Instructions to request a fee waiver \n  - All necessary forms.\n - If you have trouble filling out the documents, visit [this website created by Northwest Justice](https://lawhelpinteractive.org/Interview/GenerateInterview/7063/engine) to help fill out the documents for free.',
    },
    {
      id: 'legalform1',
      summary: 'Representing yourself in court',
      details:
        '[Public Law Library of King County Legal Clinics (KCLL)](https://kcll.org/contact-us/)\n\n[King County Bar](http://www.kcba.org/For-the-Public/Free-Legal-Assistance/Neighborhood-Legal-Clinics)\n\n[Open Door Legal Services](https://www.ugm.org/what-we-do/stabilization/legal-services/#)',
    },
    {
      id: 'legalform2',
      summary: 'Legal assistance for adults',
      details:
        '[Center for Justice](https://serve.gonzaga.edu/agency/detail/?agency_id=101214)\n\n[Clark County Volunteer Lawyers Program (CCVLP)](https://ccvlp.org/)\n\n[Cowlitz-Wahkiakum Legal Aid](http://cwlap.org/)\n\n[Northwest Justice Project](https://nwjustice.org/get-legal-help)\n\n[The Records Project](https://www.kcba.org/For-the-Public/Free-Legal-Assistance/The-Records-Project)\n\n',
    },
    {
      id: 'legalform3',
      summary: 'Legal assistance for children',
      details:
        '[TeamChild](https://teamchild.org/record-sealing/)\n\n[Center for Children & Youth Justice (CCYJ)](https://ccyj.org/our-work/empowering-foster-homeless-youth/)',
    },
  ],
  eligibilityForms: [
    {
      id: 'eligibilityform1',
      summary: 'Forms for gross misdeameanor conviction vacation',
      details:
        'This [vacation packet](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record_20240717.pdf) from Washington Law Help with guidance on vacation eligibility and necessary court forms and documents. \n',
    },
    {
      id: 'eligibilityform2',
      summary: 'Forms for marijuana misdemeanor conviction vacation',
      details:
        'This [vacation packet](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record_20240717.pdf) from Washington Law Help with guidance on vacation eligibility and necessary court forms and documents. \n',
    },
    {
      id: 'eligibilityform3',
      summary: 'Forms for misdemeanor prostitution conviction vacation',
      details:
        'This [vacation packet](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record_20240717.pdf) from Washington Law Help with guidance on vacation eligibility and necessary court forms and documents. \n',
    },
    {
      id: 'eligibilityform4',
      summary: 'Forms for fishing treaty conviction vacation',
      details:
        'This [vacation packet](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record_20240717.pdf) from Washington Law Help with guidance on vacation eligibility and necessary court forms and documents. \n',
    },
    {
      id: 'eligibilityform5',
      summary: 'Forms for juvenile records conviction vacation',
      details:
        'This [detailed packet](https://teamchild.org/wp-content/uploads/2019/03/Sealing-Juvenile-Court-Records-in-Washington-State-2018.pdf) contains: \n - All court documents \n - Sample letters to the Washington State Patrol and the Juvenile Rehabilitation Administration \n - Specific practices per county ',
    },
    {
      id: 'eligibilityform6',
      summary: 'Forms for non-violent Class B or C felony conviction vacation',
      details:
        'This [vacation packet](https://www.washingtonlawhelp.org/resource/criminal-historyrecords-when-and-how-to-vacat) from Washington Law Help includes: \n - An overview of the requirements to vacate  \n - Instructions on how to file a motion  \n - All necessary court documents  \n - Preparation guidelines  \n - A sample letter to the Washington State Patrol  \n\nTo vacate a felony conviction, you will also need a **Certificate of Discharge**. If the court has not issued the Certificate of Discharge yet, you must file for a certificate before you can vacate the felony. \n - [This packet](https://www.courts.wa.gov/forms/documents/CR08.0670_Obtaining%20a%20Certificate%20of%20Discharge_2019%2007.pdf) will assist you in obtaining a Certificate of Discharge in Washington State \n - [This page](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=43) on the Washington Courts website has both the motion and order forms needed for the Certificate of Discharge \n ',
    },
  ],
};

export default getStartedContent;
