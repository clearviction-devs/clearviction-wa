import { Button, ButtonGroup, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';

import AccordionBuilder from '../components/AccordionBuilder';
import HeroBanner from '../components/HeroBanner';
import { HomeCardItem, HomeCardSection } from '../components/HomeCardSection';
import SectionContainer from '../components/SectionContainer';
import faqs from '../content/faqs';

export default function Home() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>Clearviction</title>
        <meta name='description' content='Helping clear convictions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HeroBanner
          heading="Washington's Vacation Eligibility Calculator"
          smallHeading="WA's Vacation Eligibility Calculator"
          subheading='If you have convictions in Washington, you can check your
          eligibility to vacate your conviction for free in less than 10
          minutes!'
          ctaLink='/calculator/landing-0'
          ctaText='Access Calculator'
          imgsrc='/illustrations/homeHeroImage.svg'
        />
        <SectionContainer>
          <ButtonGroup
            variant='text'
            fullWidth
            orientation={matchesXS ? 'vertical' : 'horizontal'}
          >
            <Button href='#how-it-works'>How it works</Button>
            <Button href='#why-vacate'>Why Vacate</Button>
            <Button href='#faq'>FAQ</Button>
          </ButtonGroup>
        </SectionContainer>
        <SectionContainer id='how-it-works'>
          <HomeCardSection
            title='How it works'
            ctaLink='/get-started'
            ctaText='Get Started'
          >
            <Grid container spacing={4}>
              <HomeCardItem
                xs={12}
                md={4}
                title='Inform'
                body='We break down the laws into understandable language.'
                imgsrc='/illustrations/team-building.svg'
              />
              <HomeCardItem
                xs={12}
                md={4}
                title='Assess'
                body='You answer a few simple yes/no questions.'
                imgsrc='/illustrations/calculator.svg'
              />
              <HomeCardItem
                xs={12}
                md={4}
                title='Calculate'
                body='This helps determine your vacation eligibility in Washington.'
                imgsrc='/illustrations/notetaking.svg'
              />
            </Grid>
          </HomeCardSection>
        </SectionContainer>
        <SectionContainer id='why-vacate'>
          <HomeCardSection
            title='Why Vacate?'
            subtitle='A conviction vacation seals the offense from your record, and will give you more chance to access resources like:'
          >
            <Grid container spacing={4}>
              <HomeCardItem
                xs={12}
                sm={6}
                title='Housing'
                body='Make it easier to find and be approved for rent or purchasing a home.'
                imgsrc='/illustrations/washington.svg'
              />
              <HomeCardItem
                xs={12}
                sm={6}
                title='Employment'
                body='Reduce barriers to finding and obtaining employment.'
                imgsrc='/illustrations/washington.svg'
              />
              <HomeCardItem
                xs={12}
                sm={6}
                title='Education'
                body='Apply for scholarships, programs, degrees, or certificates.'
                imgsrc='/illustrations/washington.svg'
              />
              <HomeCardItem
                xs={12}
                sm={6}
                title='Government Assistance'
                body='Receive government help and support.'
                imgsrc='/illustrations/washington.svg'
              />
            </Grid>
          </HomeCardSection>
        </SectionContainer>
        <SectionContainer id='faq'>
          <HomeCardSection title='FAQ'>
            {faqs.map((faq) => (
              <AccordionBuilder key={faq.id} {...faq} />
            ))}
          </HomeCardSection>
        </SectionContainer>
      </main>
    </>
  );
}
