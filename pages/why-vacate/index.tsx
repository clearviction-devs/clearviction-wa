import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';

import { TextButtonGreen } from '../../components/CustomButtons.tsx';
import externalLinks from '../../components/ExternalLinks.tsx';
import IndividualPageHead from '../../components/IndividualPageHead.tsx';
import CarouselBuilder from '../../components/layout/CarouselBuilder.tsx';
import HeroBanner from '../../components/layout/HeroBanner.tsx';
import WhyVacateCard, { WhyVacateCardProps } from '../../components/layout/WhyVacateCard.tsx';
import content from '../../content/why-vacate.ts';
import { CheckConvictionCTABox } from '../get-started/determine-your-eligibility.tsx';

const Card1: WhyVacateCardProps = {
  id: 'why-vacate-datacard-1',
  content1: 'Of the 1M+ Washingtonians eligible to vacate',
  image: '/3-percent.png',
  optionalSecondContent: 'Less than 3% have actually vacated their convictions',
  source: 'Paper Prisons Report',
  sourceURL: 'https://www.paperprisons.org/states/pdfs/reports/The%20Washington%20State%20Second%20Chance%20Expungement%20Gap.pdf',
  minHeight: '449px',
};

const Card2: WhyVacateCardProps = {
  id: 'why-vacate-datacard-2',
  content1: 'Washington\'s incarceration rates are alarmingly high',
  image: '/incarceration-rates.jpg',
  source: 'Prison Policy',
  sourceURL: 'https://www.prisonpolicy.org/profiles/WA.html',
  minHeight: '576px',
};

const Card3: WhyVacateCardProps = {
  id: 'why-vacate-datacard-3',
  content1: 'Every year in Washington',
  largeText: '291,248 people',
  optionalSecondContent: 'are released from prisons and jails',
  source: 'Prison Policy',
  sourceURL: 'https://www.prisonpolicy.org/blog/2024/02/28/releases-sex-state/',
  minHeight: '358px',
};

const dataCards = [Card1, Card2, Card3];

export default function WhyVacatePage() {
  externalLinks();

  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />
      <HeroBanner {...content.hero} background="url(/why-vacate/why-vacate-main-hero.jpg)" />

      <Container
        component="section"
        id="why-vacate-main-content"
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: {
            md: '936px',
          },
          padding: {
            xs: '72px 24px 32px 24px',
            sm: '72px 64px 32px 64px',
            md: '52px 0px',
            lg: '112px 0px 72px 0px',
          },
          gap: '32px',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
        >
          <Typography variant="h2">
            Vacating a conviction reduces reentry barriers
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
          >
            <Typography variant="body1">
              A criminal record can haunt you even years after release.
            </Typography>
            <Typography variant="body1">
              Removing convictions from your record can eliminate rejection and stigma and open doors to your future.
            </Typography>
            <Typography variant="body1">
              Getting a conviction vacated from your record means that the conviction will no longer be reported to anyone who searches your criminal history.
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
        >
          <Typography variant="h3">
            See all vacation benefits
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
          >
            {[['Employment benefits', '/why-vacate/employment-benefits'], ['Housing benefits', '/why-vacate/housing-benefits'], ['Educational benefits', '/why-vacate/educational-benefits']].map(([text, href]) => (
              <TextButtonGreen key={text} text={text} href={href} />
            ))}
          </Box>
        </Box>
      </Container>
      <Container
        component="section"
        id="why-vacate-behind-the-numbers"
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: {
            md: '936px',
          },
          padding: {
            xs: '32px 24px 72px 24px',
            sm: '32px 64px 72px 64px',
            md: '52px 0px 72px 0px',
            lg: '72px 0px',
          },
          gap: '24px',
        }}
      >
        <Typography variant="h2">
          Behind the numbers
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
        >
          <Typography variant="body1">
            Vacating a conviction in Washington is complicated and intimidating but doing so opens opportunities in employment, housing, and education.
          </Typography>
          <Typography variant="body1">
            In the state, there are many people with convictions that are eligible to vacate, but do not know it, or do not know where to start.
          </Typography>
        </Box>
      </Container>

      <Container
        id="why-vacate-cards"
        sx={{
          margin: 'auto',
          width: 'auto',
          display: {
            sm: 'none',
          },
          padding: '0px',
        }}
      >
        <Typography variant="h3">
          {dataCards.map((card) => (
            <WhyVacateCard key={card.id} {...card} />
          ))}
        </Typography>
      </Container>

      <Container
        component="section"
        id="why-vacate-carousel"
        disableGutters
        sx={{
          display: {
            xs: 'none',
            sm: 'flex',
          },
          flexDirection: 'column',
          padding: {
            sm: '32px 0px 80px 32px',
            md: '0px 0px 52px 0px',
          },
          maxWidth: {
            md: '936px',
          },
        }}
      >
        <CarouselBuilder whyVacateCards={dataCards} cardWidth={284} useWhyVacateCards />
      </Container>

      <Box sx={{
        height: '80px',
      }}
      />
      <CheckConvictionCTABox text="Ready to start the process to see if you're eligible?" />
    </>
  );
}
