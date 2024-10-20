import { Typography } from '@mui/material';
import React from 'react';

import externalLinks from '../../components/ExternalLinks.tsx';
import AccordionBuilder from '../../components/layout/AccordionBuilder.tsx';
import BenefitCard from '../../components/layout/BenefitCard.tsx';
import BenefitPageContainer, { BenefitCardsContainer } from '../../components/layout/BenefitPageContainer.tsx';
import content from '../../content/why-vacate.ts';
import theme from '../../styles/themes/theme.tsx';

export default function HousingBenefits() {
  externalLinks();
  return (
    <>
      <BenefitPageContainer
        id="section-housing-benefits"
        sx={{
          gap: '24px',
        }}
      >
        <Typography variant="h2">
          {content.cards[1].title}
        </Typography>
        <Typography variant="body1">
          {content.cards[1].subtitle}
        </Typography>
      </BenefitPageContainer>
      <BenefitCardsContainer id="section-housing-benefits-cards">
        {
            content.cards[1].cardItems.map((benefit, index) => (
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
      <BenefitPageContainer id="section-housing-resources">
        <Typography
          variant="h3"
          sx={{
            mb: '24px',
          }}
        >
          Housing resources
        </Typography>
        {
                content.cards[1].accordianItems.map((item) => (
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
