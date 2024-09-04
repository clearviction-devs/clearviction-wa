import {
  Box, Grid, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import externalLinks from '../../components/functional/ExternalLinks.tsx';
import AccordionBuilder from '../../components/layout/AccordionBuilder.tsx';
import CarouselBuilder from '../../components/layout/CarouselBuilder.tsx';
import GetStartedCard from '../../components/layout/GetStartedCard.tsx';
import GetStartedHero from '../../components/layout/GetStartedHero.tsx';
import content from '../../content/get-started.ts';
import { GSContainer } from './index.tsx';

const generalGuidelinesText = 'The step by step process outlined on this page is based on the "Instructions for Vacating Misdemeanor Convictions" ([CrRLJ 09.0300](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38)), and "Instructions for Vacating Felony Convictions" ([CrRLJ 08.0930](https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38)) from the Washington Courts website.';

const legalAndFinancialAidText = 'Many pro bono services are only available after being referred by CLEAR, a toll-free legal hotline: \n - Outside of King County: call 1-888-201-1014 (weekdays 9:15am - 12:15pm) \n - In King County: call 2-1-1 (weekdays 8am - 6pm) \n - You can also apply online at [CLEAR*Online](https://nwjustice.org/apply-online)';

export default function FileWithTheCourt() {
  externalLinks();
  return (
    <>
      <GetStartedHero
        image="/get-started/step-3_hero.jpg"
        overline="Step 3"
        title="File with the court"
      />
      <GSContainer>
        <Typography variant="body1">
          Once you have determined you are eligible to vacate your conviction, you must submit a request to have your conviction vacated at the court where you were sentenced.
        </Typography>
      </GSContainer>
      <Box sx={{
        backgroundColor: 'primary.dark',
      }}
      >
        <GSContainer sx={{
          color: 'text.light',
        }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'text.light',
            }}
          >
            General guidelines
          </Typography>

          <MuiMarkdown>
            {generalGuidelinesText}
          </MuiMarkdown>

          <Typography variant="body2">
            Keep in mind, every court has different requirements. This is a general guideline.
          </Typography>
          <Typography variant="body2">
            Read the local court rules or contact the clerk of the court where you will file your petition to find out if any local requirements apply to you.
          </Typography>
        </GSContainer>
      </Box>

      <GSContainer
        id="section-get-started-cards"
        sx={{
          padding: '44px 24px',
          margin: 'auto',
          width: 'auto',
          display: {
            sm: 'none',
          },
        }}
      >
        {content.fileWithTheCourtSteps.map((step) => (
          <GetStartedCard key={step.overline} {...step} useMD />
        ))}
      </GSContainer>

      <GSContainer
        id="section-get-started-carousel"
        sx={{
          display: {
            xs: 'none',
            sm: 'flex',
          },
          padding: {
            sm: '72px 0px 52px 24px',
            md: '72px 0px 52px 0px',
          },
        }}
      >
        <Grid container>
          <CarouselBuilder useGetStartedCards getStartedCards={content.fileWithTheCourtSteps} cardWidth={284} cardHeight={444} useMD />
        </Grid>
      </GSContainer>
      <GSContainer sx={{
        padding: {
          xs: '16px 24px 28px 24px',
          sm: '16px 64px 52px 64px',
          md: '16px 0px 52px 0px',
        },
      }}
      >
        <Typography variant="h3">
          Eligibility related forms
        </Typography>
        {
            content.eligibilityForms.map((form) => (
              <AccordionBuilder
                key={form.id}
                id={form.id}
                summary={form.summary}
                details={form.details}
              />
            ))
        }
      </GSContainer>
      <GSContainer>
        <Typography variant="h3">
          Legal and Financial Aid
        </Typography>
        <MuiMarkdown>
          {legalAndFinancialAidText}
        </MuiMarkdown>

        <Typography variant="headingCalculator">
          Important Notice to Verify Legal Resources
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: '312px',
            marginBottom: '24px',
          }}
        >
          Before using any legal resources mentioned on our website, we highly encourage you to contact them directly and verify if they can assist with your specific issue. Although we strive to provide accurate and up-to-date information, please be aware that the priorities and availability of legal resources may change over time.
        </Typography>
        {
            content.legalAidForms.map((form) => (
              <AccordionBuilder
                key={form.id}
                id={form.id}
                summary={form.summary}
                details={form.details}
              />
            ))
        }
      </GSContainer>
      <Box sx={{
        height: '80px',
      }}
      />
    </>
  );
}
