import { Typography } from '@mui/material';
import React from 'react';

import externalLinks from '../../components/functional/ExternalLinks.tsx';
import AccordionBuilder from '../../components/layout/AccordionBuilder.tsx';
import BenefitCard from '../../components/layout/BenefitCard.tsx';
import BenefitPageContainer, { BenefitCardsContainer } from '../../components/layout/BenefitPageContainer.tsx';
import content from '../../content/why-vacate.ts';
import theme from '../../styles/themes/theme.tsx';

export default function EmploymentBenefits() {
  externalLinks();
  return (
    <>
      <BenefitPageContainer id="section-employment-benefits">
        <Typography variant="h2">
          {content.cards[0].title}
        </Typography>
        <Typography variant="body1">
          {content.cards[0].subtitle}
        </Typography>
        <Typography variant="body1">
          {content.cards[0].subtitle2}
        </Typography>
      </BenefitPageContainer>
      <BenefitCardsContainer id="section-employment-benefits-cards">
        {
            content.cards[0].cardItems.map((benefit, index) => (
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
      <BenefitPageContainer id="section-employment-resources">
        <Typography variant="h3">
          Employment resources
        </Typography>
        {
            content.cards[0].accordianItems.map((item) => (
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
