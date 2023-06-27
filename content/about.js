import {
  HourglassEmpty,
  LocalAtmOutlined,
  PanToolOutlined,
} from '@mui/icons-material';
import React from 'react';

const gridIconStyles = {
  color: '#FFD200',
  fontSize: '3em',
};

const aboutContent = {
  hero: {
    header: 'About Us',
    body: "Clearviction was founded in 2020 sparked by [Washington State's New Hope Act](https://app.leg.wa.gov/billsummary?BillNumber=2890&Year=2017), We are a 501(c)(3) non-profit organization committed to helping people with convictions improve their quality of life. ",
    subheading2: 'Each year, nearly 98k people are added to the millions across Washington State already burdened with a criminal record. The justice-impacted folks will face significant barriers to their day to day life after completing their prison terms.',
    imgsrc: 'illustrations/map.svg',
  },
  ourMission: {
    header: 'Our mission is to provide tools and guidance to help people clear their criminal records, granting them a second chance to enter society, free from the stigma of their past.',
  },
  ourStory: {
    header: 'Our Story',
    body: 'While the project started in Seattle, we now have volunteers all across the country and the world dedicating time outside of full-time jobs, graduate programs, and busy lives, to help folks clear their criminal records - giving them a fighting chance to escape a life full of poverty, homelessness, and recidivism.',
  },
  body: [
    'To support this mission, we have started by creating a [Conviction Eligibility Calculator](https://clearviction.org/calculator/head-initial-1-cont), getting people started down the path of clearing their convictions and starting their life again. The process of vacating a conviction is very convoluted, making it difficult to navigate:',
  ],
  facts: [
    {
      id: 'fact0',
      icon: <HourglassEmpty sx={gridIconStyles} />,
      text: 'It has a number of steps that require time and know-how, increasing the barrier of entry for applicants.',
    },
    {
      id: 'fact1',
      icon: <LocalAtmOutlined sx={gridIconStyles} />,
      text: "While hiring an attorney can help simplify the process, it's unaffordable for most.",
    },
    {
      id: 'fact2',
      icon: <PanToolOutlined sx={gridIconStyles} />,
      text: 'Free help is sometimes available, but only very rarely and only to a tiny percentage of the folks who need it.',
    },
  ],
  joinUs: {
    header:
      'Join Us',
    body: 'Interested in helping make a difference? Team up with us to effect more positive change than any of us can individually.',
    imgsrc: '/illustrations/checklist1.svg',
  },
  ourTeam: {
    title: 'Our Team',
    id: 'our-team-embed-airtable',
    src: 'https://airtable.com/embed/shrUcTsNW8KLw3hyp',
  },
};

export default aboutContent;
