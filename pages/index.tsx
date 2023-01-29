import {
  Box,
  Button,
  ButtonGroup,
  Container,
  ContainerProps,
  Grid,
  Paper,
  SxProps,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';

import FAQAccordion from '../components/FAQAccordion';
import { HomeCardItem, HomeCardSection } from '../components/HomeCardSection';
import Footer from '../components/layout/Footer';
import faqs from '../content/faqs';

const heroStyles: SxProps = {
  backgroundColor: 'primary.dark',
  color: 'text.secondary',
  py: 4,
};

function SectionContainer({ children, id, ...props }: ContainerProps) {
  return (
    <Container
      component='section'
      id={id}
      maxWidth='lg'
      sx={{ my: 8, scrollMarginTop: 64 }}
      {...props}
    >
      {children}
    </Container>
  );
}

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
        <Box sx={heroStyles} textAlign={{ xs: 'center', md: 'left' }}>
          <SectionContainer>
            <Typography variant='h1' gutterBottom>
              {matchesXS ? `WA's` : `Washington's`} Vacation Eligibility
              Calculator
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant='subtitle1' sx={{ mb: 4 }}>
                  If you have convictions in Washington, you can check your
                  eligibility to vacate your conviction for free in less than 10
                  minutes!
                </Typography>
                <Button
                  variant='contained'
                  color='neutral'
                  href='/calculator/landing-0'
                >
                  Access Calculator
                </Button>
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <img src='/illustrations/homeHeroImage.svg' alt='' />
              </Box>
            </Box>
          </SectionContainer>
        </Box>
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
                sm={4}
                title='Inform'
                body='We break down the laws into understandable language.'
                imgsrc='/illustrations/washington.svg'
              />
              <HomeCardItem
                xs={12}
                sm={4}
                title='Assess'
                body='You answer a few simple yes/no questions.'
                imgsrc='/illustrations/washington.svg'
              />
              <HomeCardItem
                xs={12}
                sm={4}
                title='Calculate'
                body='This helps determine your vacation eligibility in Washington.'
                imgsrc='/illustrations/washington.svg'
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
            <FAQAccordion faqs={faqs} />
          </HomeCardSection>
        </SectionContainer>
      </main>
    </>
  );
}
