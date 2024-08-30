import {
  Container, ContainerProps, Typography,
} from '@mui/material';
import React from 'react';

import AccordionBuilder from '../../components/layout/AccordionBuilder.tsx';
import GetStartedCard from '../../components/layout/GetStartedCard.tsx';
import content from '../../content/get-started.ts';

function GSContainer({
  children,
  id,
  sx,
  ...props
}: ContainerProps) {
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
          sm: '72px 24px 52px 24px',
          md: '72px 64px 52px 64px',
          lg: '112px 32px 72px 32px',
          xl: '112px 32px 72px 32px',
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
        }}
      >
        {content.steps.map((step) => (
          <GetStartedCard key={step.overline} {...step} />
        ))}
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
