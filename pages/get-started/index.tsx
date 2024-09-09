import {
  Container, ContainerProps, Grid, Typography,
} from '@mui/material';
import React from 'react';

import externalLinks from '../../components/ExternalLinks.tsx';
import AccordionBuilder from '../../components/layout/AccordionBuilder.tsx';
import CarouselBuilder from '../../components/layout/CarouselBuilder.tsx';
import GetStartedCard from '../../components/layout/GetStartedCard.tsx';
import content from '../../content/get-started.ts';

export function GSContainer({
  children,
  id,
  sx,
  ...props
}: ContainerProps) {
  externalLinks();
  return (
    <Container
      component="section"
      id={id}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: {
          md: '936px',
        },
        padding: {
          xs: '72px 24px 52px 24px',
          sm: '72px 64px 52px 64px',
          md: '72px 0px 52px 0px',
          lg: '112px 0px 72px 0px',
          xl: '112px 0px 72px 0px',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}

export default function GetStartedPage() {
  return (
    <>
      <GSContainer
        id="section-get-started-header"
      >
        <Typography variant="h1">
          {content.hero.header}
        </Typography>
        <Typography variant="body1">
          {content.hero.subheading}
        </Typography>
      </GSContainer>

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
        {content.steps.map((step) => (
          <GetStartedCard key={step.overline} {...step} />
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
          <CarouselBuilder useGetStartedCards getStartedCards={content.steps} cardWidth={284} />
        </Grid>
      </GSContainer>

      <GSContainer>
        <Typography variant="h3">
          Vacatable Convictions FAQs
        </Typography>
        {content.FAQ.map((item) => (
          <AccordionBuilder
            key={item.id}
            id={item.id}
            summary={item.summary}
            details={item.details}
          />
        ))}
      </GSContainer>
    </>
  );
}
