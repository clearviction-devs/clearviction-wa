import { Box, Grid, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import { DarkButton, LightButton } from '../../components/CustomButtons.tsx';
import externalLinks from '../../components/ExternalLinks.tsx';
import IndividualPageHead from '../../components/IndividualPageHead.tsx';
import CarouselBuilder from '../../components/layout/CarouselBuilder.tsx';
import GetStartedHero from '../../components/layout/GetStartedHero.tsx';
import content from '../../content/get-started.ts';
import { GSContainer } from './index.tsx';

function ReadYourRecordsText() {
  return (
    <>
      <Typography variant="h3">
        How to read your records
      </Typography>
      <Typography variant="body2">
        A Washington criminal history record may have words, abbreviations, and codes that are difficult to understand.
      </Typography>
      <Typography variant="body2">
        For help on interpreting your record, select the link below for a guide. Chose “Washington State” to download the correct ACLU instructions and additional resources from the Washington Department of Social and Health Services.
      </Typography>
    </>
  );
}

export default function GatherYourDocumentation() {
  externalLinks();
  return (
    <>
      <IndividualPageHead
        title={content.meta[1].title}
        metaContent={content.meta[1].content}
      />
      <GetStartedHero
        image="/get-started/step-1_hero.jpg"
        overline="Step 1"
        title="Gather your documentation"
      />
      <GSContainer>
        <Typography variant="headingCalculator">
          You will need to know the following information while using the eligibility calculator
        </Typography>
        <MuiMarkdown>
          {content.needToKnowFacts}
        </MuiMarkdown>
      </GSContainer>

      <Box sx={{
        backgroundColor: 'primary.dark',
        height: {
          xs: '232px',
          sm: '296px',
        },
      }}
      >
        <Box sx={{
          height: {
            xs: '232px',
            sm: '296px',
          },
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          padding: '24px 32px',
          gap: '64px',
          justifyContent: {
            xs: 'center',
            md: 'space-between',
          },
          alignItems: {
            sm: 'center',
          },
          width: {
            md: '936px',
          },
          margin: {
            md: 'auto',
          },
        }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'text.light',
            }}
          >
            Already know this information?
          </Typography>
          <LightButton
            text="Check your conviction"
            href="/calculator/head-initial-1-cont"
          />
        </Box>
      </Box>
      {/* watch report  */}
      <GSContainer>
        <MuiMarkdown>
          ### A **“WATCH”** report from the Washington State Patrol will be helpful
        </MuiMarkdown>
        <MuiMarkdown>
          It is the official record containing your arrests and criminal convictions, or **criminal history record information (CHRI)**.
        </MuiMarkdown>
        <MuiMarkdown>
          You can get a **“WATCH”** report online through the [Washington State Patrol (WSP) website](https://wsp.wa.gov/crime/criminal-history).  Visit the website for more details.
        </MuiMarkdown>
      </GSContainer>
      <GSContainer
        id="section-get-started-carousel"
        sx={{
          padding: {
            xs: '24px 0px 64px 0px',
            sm: '0px 0px 52px 24px',
            md: '0px 0px 72px 0px',
          },
        }}
      >
        <Grid container>
          <CarouselBuilder usePlaycard cards={content.WATCHCards} cardWidth={274} cardHeight={444} />
        </Grid>
      </GSContainer>
      {/* Read your records  */}
      {/* sm and down  */}
      <Box sx={{
        backgroundColor: 'secondary.light',
        display: {
          xs: 'block',
          md: 'none',
        },
      }}
      >
        <GSContainer sx={{
          padding: {
            xs: '32px 24px',
          },
        }}
        >
          <ReadYourRecordsText />
        </GSContainer>
        <Box sx={{
          backgroundImage: 'url(/get-started/step-1_read-records.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: {
            xs: '182px',
            sm: '284px',
          },
          display: {
            md: 'none',
          },
        }}
        />
        <GSContainer sx={{
          padding: {
            xs: '32px 24px',
          },
        }}
        >
          <DarkButton
            text="Access record reading guide"
            href="https://cjei.cornell.edu/about-your-record/how-read-your-rap-sheet"
          />
        </GSContainer>
      </Box>
      {/* md and up */}
      <GSContainer sx={{
        backgroundColor: 'secondary.light',
        display: {
          xs: 'none',
          md: 'flex',
        },
        flexDirection: 'row',
        padding: {
          md: '0px 0px',
        },
      }}
      >
        <Box sx={{
          width: '576px',
          padding: '32px 24px',
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
        }}
        >
          <ReadYourRecordsText />
          <DarkButton
            text="Access record reading guide"
            href="https://cjei.cornell.edu/about-your-record/how-read-your-rap-sheet"
          />
        </Box>
        <Box sx={{
          backgroundImage: 'url(/get-started/step-1_read-records.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '338px',
          width: '360px',
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
        />
      </GSContainer>
      <Box sx={{
        height: '80px',
      }}
      />
    </>
  );
}
