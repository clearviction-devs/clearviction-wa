import { Typography } from '@mui/material';
import React from 'react';

import externalLinks from '../../components/functional/ExternalLinks.tsx';
import AccordionBuilder from '../../components/layout/AccordionBuilder.tsx';
import BenefitCard from '../../components/layout/BenefitCard.tsx';
import BenefitPageContainer, { BenefitCardsContainer } from '../../components/layout/BenefitPageContainer.tsx';
import content from '../../content/why-vacate.ts';
import theme from '../../styles/themes/theme.tsx';

export default function EducationalBenefits() {
  externalLinks();
  return (
    <>
      <BenefitPageContainer
        id="section-educational-benefits"
        sx={{
          gap: '24px',
        }}
      >
        <Typography variant="h2">
          {content.cards[2].title}
        </Typography>
        <Typography variant="body1">
          {content.cards[2].subtitle}
        </Typography>
        <Typography variant="body1">
          {content.cards[2].subtitle2}
        </Typography>
      </BenefitPageContainer>
      <BenefitCardsContainer
        id="section-educational-benefits-cards"
      >
        {
            content.cards[2].cardItems.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                content={benefit.body}
                image={benefit.imgRef}
                index={index}
              />
            ))
        }
      </BenefitCardsContainer>
      <BenefitPageContainer
        id="section-educational-resources"
      >
        <Typography
          variant="h3"
          sx={{
            mb: '24px',
          }}
        >
          Educational resources
        </Typography>
        {
            content.cards[2].accordianItems.map((item) => (
              <AccordionBuilder
                key={item.id}
                id={item.id}
                summary={item.summary}
                details={item.details}
                sx={{ backgroundColor: theme.palette.primary.light }}
              />
            ))
        }
      </BenefitPageContainer>
    </>
  );
}
