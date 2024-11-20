import {
  Card, Header, MetaPageHead,
} from './content.types.ts';

interface WhyVacateContent {
  meta: MetaPageHead[];
  hero: Header;
  cards: Card[];
}

const whyVacateContent: WhyVacateContent = {
  meta: [{
    title: 'Clearviction | Find out why it’s important to vacate criminal records',
    content: 'Vacating your criminal record in Washington State improves access to jobs, housing, and education, helping you get your life back on track',
  },
  {
    title: 'Clearviction | Educational Benefits of Vacating a Criminal Record in Washington State',
    content: 'Learn how clearing your criminal record in Washington State can unlock educational opportunities by removing barriers to scholarships, financial aid, and admissions',
  },
  {
    title: 'Clearviction | Employment Benefits of Vacating a Criminal Record in Washington State',
    content: 'Clearing your criminal record in Washington State can improve job opportunities by removing barriers in background checks. Discover the benefits of a clean record.',
  },
  {
    title: 'Clearviction | Housing Benefits of Vacating a Criminal Record in Washington State',
    content: 'Learn how vacating your criminal record in Washington State can remove barriers to rental applications and improve housing options',
  },
  ],
  hero: {
    header: 'Explore conviction vacating and its benefits',
  },
  cards: [
    {
      title: 'Employment benefits',
      sectionId: 'employment_benefits',
      subtitle:
        'More than 80 percent of employers conduct background checks. ',
      subtitle2: 'Improve your earning potential by opening the door to countless job opportunities.',
      cardItems: [
        {
          title: 'Fair chance at employment',
          body: 'You can tell potential employers that you have not been convicted of a crime. This reduces discrimination and gets you fairer treatment by employers during the hiring process.',
          imgRef: '/why-vacate/employ_fair-chance.jpg',
        },
        {
          title: 'Access to professional licenses',
          body: 'Improve your eligibility to obtain or maintain a professional license to help you get on your feet. These are often unattainable by people with certain convictions.',
          imgRef: '/why-vacate/employ_licenses.jpg',
        },
      ],
      accordianItems: [
        {
          id: 'employment-resources-1',
          summary: 'Job Boards',
          details: `[Careeronestop](https://www.careeronestop.org/) 
                    \n[WorkSourceWA](https://www.worksourcewa.com/) 
                    \n[Goodwill](https://www.goodwill.org/jobs-training/find-a-job/) 
                    \n[People for People](https://mypfp.org/about-us/careers/)`,
        },
        {
          id: 'employment-resources-2',
          summary: 'Professional Training',
          details: `[People for People](https://mypfp.org/services/employment-training/) 
                    \n[Pioneer Human Services](https://pioneerhumanservices.org/job-skills) 
                    \n[Evergreen Goodwill](https://evergreengoodwill.org/job-training-and-education)`,
        },
      ],
    },
    {
      title: 'Housing benefits',
      sectionId: 'housing_benefits',
      subtitle:
        'Landlords and property management companies often check the criminal backgrounds of potential tenants before accepting rental applications',
      cardItems: [
        {
          title: 'Eligibility for housing assistance programs',
          body: 'You may become eligible for more and/or better housing assistance programs and opportunities  that cater to specific populations (such as individuals experiencing homelessness or those with disabilities).',
          imgRef: '/why-vacate/housing_assistance.jpg',
        },
        {
          title: 'More access to rental opportunities',
          body: 'By preventing potential landlords from seeing your criminal history, you increase your chances of being approved for rental housing. ',
          imgRef: '/why-vacate/housing_rental.jpg',
        },
        {
          title: 'Increased access to government assistance',
          body: 'You might also have easier access to government-assisted housing, such as  public housing and Section 8 Housing Choice Vouchers.',
          imgRef: '/why-vacate/housing_gov.jpg',
        },
      ],
      accordianItems: [
        {
          id: 'housing-resources-1',
          summary: 'Shelter Listings',
          details: `[Washington Shelter List](https://www.shelterlist.com/state/washington) 
          \n[Catholic Community Services and Catholic Housing Services of Western Washington](https://ccsww.org/) 
          \n[Pioneer Human Services](https://pioneerhumanservices.org/housing)`,
        },
        {
          id: 'housing-resources-2',
          summary: 'Housing Advisory',
          details: `[Compass Housing Alliance](https://www.compasshousingalliance.org/) 
          \n[The STAR Project](https://www.thestarproject.us/)`,
        },
      ],
    },
    {
      title: 'Educational benefits',
      sectionId: 'educational_benefits',
      subtitle:
        'Having a conviction on your record can limit your education and opportunities.',
      subtitle2: 'Vacate your conviction to improve your chances for success and pursue your education.',
      cardItems: [
        {
          title: 'Open doors to higher education',
          body: 'By vacating your conviction you can overcome the admission barriers that some colleges and universities place on enrollment due to certain criminal convictions.',
          imgRef: '/why-vacate/edu_open-doors.jpg',
        },
        {
          title: 'Broader access to financial aid',
          body: 'Access federal Pell Grants, financial aid, and student loans to increase your ability to afford tuition, fees, and other educational expenses.',
          imgRef: '/why-vacate/edu_broader-access.jpg',
        },
        {
          title: 'Equitable treatment in the application process',
          body: 'You can receive increased assistance and equitable treatment in the application process, as well as reduced stigma and discrimination from financial aid offices.',
          imgRef: '/why-vacate/edu_applications.jpg',
        },
        {
          title: 'Eligible for more types of professional and occupational licenses',
          body: 'Vacating our conviction helps you overcome the barrier of automatic disqualification for some professional licenses and certificates.',
          imgRef: '/why-vacate/edu_licenses.jpg',
        },
      ],
      accordianItems: [
        {
          id: 'edu-resources-1',
          summary: 'Federal Financial Student Aid',
          details: `[FAQ on Incarcerated Individuals and Eligibility for Federal Student Aid](https://studentaid.gov/understand-aid/eligibility/requirements/criminal-convictions) 
          \n[Free Application for Federal Student Aid (FAFSA)](http://www.fafsa.gov/) 
          \n[Federal Pell Grants](https://studentaid.gov/understand-aid/types/grants/pell)
          \n[Federal Work-Study Programs](https://studentaid.gov/understand-aid/types/work-study)`,
        },
        {
          id: 'edu-resources-2',
          summary: 'Post-incarceration educational programs',
          details: `[Freedom Education Project](http://www.fepps.org/) 
          \n[People for People](https://mypfp.org) 
          \n[Pioneer Human Services](https://pioneerhumanservices.org/job-skills) 
          \n[The STAR Project](http://thestarproject.us/)`,
        },
        {
          id: 'edu-resources-3',
          summary: 'Other Educational assistance',
          details:
            '[Adams State University Prison College Program](http://www.adams.edu/extended_studies/undergrad/prisoncollegeprogram.php)\n',
        },
      ],
    },
  ],
};

export default whyVacateContent;
