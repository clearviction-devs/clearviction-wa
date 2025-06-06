import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import { DarkButton } from '../../components/CustomButtons.tsx';
import externalLinks from '../../components/ExternalLinks.tsx';
import IndividualPageHead from '../../components/IndividualPageHead.tsx';
import GetStartedHero from '../../components/layout/GetStartedHero.tsx';
import content from '../../content/get-started.ts';
import { GSContainer } from './index.tsx';

export function CheckConvictionCTABox({ text }: {text: string}) {
  return (
    <Box sx={{
      backgroundColor: 'secondary.light',
    }}
    >
      <GSContainer sx={{
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        justifyContent: {
          xs: 'space-between',
          sm: 'center',
        },
        padding: {
          xs: '32px 24px',
          sm: '0px',
        },
        gap: {
          xs: '64px',
          sm: '48px',
          md: '0px',
        },
        height: {
          xs: '232px',
          sm: '296px',
          md: '318px',
        },
      }}
      >
        <Box sx={{
          width: 'fit-content',
          margin: {
            sm: '0px auto',
            md: 'auto',
          },
        }}
        >
          <Typography variant="h3">
            {text}
          </Typography>
        </Box>
        <Box sx={{
          width: 'fit-content',
          padding: {
          },
          margin: {
            sm: '0px auto',
            md: 'auto',
          },
        }}
        >
          <DarkButton
            href="/calculator/head-initial-1-cont"
            text="Check your conviction"
          />
        </Box>
      </GSContainer>
    </Box>
  );
}

export default function DetermineYourEligibility() {
  externalLinks();
  return (
    <>
      <IndividualPageHead
        title={content.meta[2].title}
        metaContent={content.meta[2].content}
      />
      <GetStartedHero
        image="/get-started/step-2_hero.jpg"
        overline="Step 2"
        title="Determine your eligibility"
      />
      <Box sx={{
        display: {
          md: 'flex',
        },
        padding: {
          md: '40px 32px',
        },
        maxWidth: '1000px',
        margin: {
          md: 'auto',
        },
        gap: {
          md: '64px',
        },
      }}
      >
        <GSContainer sx={{
          padding: {
            xs: '72px 24px 32px 24px',
            sm: '72px 64px 32px 64px',
            md: '32px 0px',
          },
        }}
        >
          <Typography variant="body1">
            Once you have your records and forms gathered, use our eligibility calculator to determine whether you are eligible to vacate your misdemeanor or felony conviction.
          </Typography>
          <Box sx={{
            display: 'flex',
            gap: '8px',
          }}
          >
            <AccessTimeIcon />
            <Typography variant="body1">
              It is expected to take 10-30 minutes.
            </Typography>
          </Box>
          <Typography variant="body1">
            If you have multiple convictions you will need to go through the calculator separately for each one.
          </Typography>
        </GSContainer>
        <GSContainer sx={{
          padding: {
            xs: '32px 24px 72px 24px',
            sm: '32px 64px 72px 64px',
            md: '32px 0px',
          },
        }}
        >
          <Typography variant="headingCalculator">
            You will need:
          </Typography>
          <MuiMarkdown>
            {content.needToKnowFacts}
          </MuiMarkdown>
        </GSContainer>
      </Box>
      <CheckConvictionCTABox text="Ready to check your eligibility?" />
    </>
  );
}
