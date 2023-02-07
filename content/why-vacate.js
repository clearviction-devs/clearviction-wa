const whyVacateContent = {
  buttons: [
    {
      name: "Employment",
      href: "#employment",
    },
    {
      name: "Housing",
      href: "#housing",
    },
    {
      name: "Education",
      href: "#education",
    },
  ],
  cards: [
    {
      title: "Employment",
      sectionId: "employment",
      subtitle:
        "Simply having a conviction does not prevent you from having a job, however, it can be more difficult depending on the type of job and the employer. It is important to not lose hope while facing challenges such as:",
      cardItems: [
        {
          title: "Long periods of unemployment",
          body: "Getting back into society may take longer with a conviction on record.",
          imgRef: "/illustrations/time.svg",
        },
        {
          title: "Rejected applications",
          body: "This is a common circumstance for people who have previously been convicted.",
          imgRef: "/illustrations/sending-emails.svg",
        },
        {
          title: "Lack of experience",
          body: "Getting a job in a new field is complicated by lack of access to educational opportunities.",
          imgRef: "/illustrations/question.svg",
        },
      ],
      accordianItems: [
        {
          id: "1",
          summary: "Job Boards",
          details: `* [Careeronestop](https://www.careeronestop.org/) * [WorkforceWA](https://www.worksourcewa.com/)`,
        },
        {
          id: "2",
          summary: "Professional Training",
          details:
            "If you are convicted of a crime, your criminal record will continue to show that conviction in background checks. Having a criminal record might negatively affect your housing, employment, and educational opportunities.\n\nIf you are experiencing this, vacating your conviction removes that crime from background checks, and you can say legally that you were never convicted of that crime. This can help you get access to housing, education, employment, volunteering opportunities, and more.",
        },
      ],
    },
    {
      title: "Housing",
      sectionId: "housing",
      subtitle:
        "There are many different barriers that can prevent people with convictions from fair access to housing. Each different type of housing comes with its own set of obstacles that you should take into consideration when looking for housing:",
      cardItems: [
        {
          title: "Public Housing Authorities",
          body: "Getting back into society may take longer with a conviction on record.",
          imgRef: "/illustrations/city-buildings.svg",
          children: [
            "Income capped",
            "Can’t be a registered offender",
            "PHAs have discretion on who they decide to house",
          ],
        },
        {
          title: "Private Housing",
          body: "This is a common circumstance for people who have previously been convicted.",
          imgRef: "/illustrations/dream.svg",
        },
        {
          title: "Supportive Housing",
          body: "Getting a job in a new field is complicated by lack of access to educational opportunities.",
          imgRef: "/illustrations/diversity-1.svg",
        },
        {
          title: "Transitional Housing",
          body: "Getting a job in a new field is complicated by lack of access to educational opportunities.",
          imgRef: "/illustrations/process-building.svg",
        },
      ],
      accordianItems: [
        {
          id: "courtform1",
          summary: "Shelter Listings",
          details: `[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-criminal-record.pdf) with details about the eligibility to vacate (p. 2-4) and the needed court forms (p. 5-13).`,
        },
        {
          id: "courtform2",
          summary: "Housing Advisory",
          details:
            "If you are convicted of a crime, your criminal record will continue to show that conviction in background checks. Having a criminal record might negatively affect your housing, employment, and educational opportunities.\n\nIf you are experiencing this, vacating your conviction removes that crime from background checks, and you can say legally that you were never convicted of that crime. This can help you get access to housing, education, employment, volunteering opportunities, and more.",
        },
      ],
    },
    {
      title: "Education",
      sectionId: "education",
      subtitle:
        "With a conviction in your record, you might face some barriers when it comes to getting opportunities where a background check is performed. Here are the main educational challenges faced by those with convicitons:",
      cardItems: [
        {
          title: "Ocupational Licenses",
          body: "Some states’ laws contain an automatic disqualification prohibiting a person with a felony conviction from obtaining an occupational license, regardless of the offense.",
          imgRef: "/illustrations/career.svg",
        },
        {
          title: "College Acceptance",
          body: "Colleges run background checks on applicants. Whether you will be accepted depends on the kind of check they do and the type and time of crime.",
          imgRef: "/illustrations/graduation.svg",
        },
      ],
      accordianItems: [
        {
          id: "courtform1",
          summary: "Federal Financial Student Aid",
          details: `[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-criminal-record.pdf) with details about the eligibility to vacate (p. 2-4) and the needed court forms (p. 5-13).`,
        },
        {
          id: "courtform2",
          summary: "Post-incarceration educational programs",
          details:
            "If you are convicted of a crime, your criminal record will continue to show that conviction in background checks. Having a criminal record might negatively affect your housing, employment, and educational opportunities.\n\nIf you are experiencing this, vacating your conviction removes that crime from background checks, and you can say legally that you were never convicted of that crime. This can help you get access to housing, education, employment, volunteering opportunities, and more.",
        },
        {
          id: "courtform3",
          summary: "Other Educational assistance",
          details:
            "To be eligible to vacate, there are specific criteria that your conviction must meet.",
        },
      ],
    },
  ],
};

export default whyVacateContent;
