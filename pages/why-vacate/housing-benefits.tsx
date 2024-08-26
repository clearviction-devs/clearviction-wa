import { Typography } from '@mui/material';
import React from 'react';

import AccordionBuilder from '../../components/layout/AccordionBuilder.tsx';
import BenefitCard from '../../components/layout/BenefitCard.tsx';
import SectionContainer from '../../components/layout/SectionContainer.tsx';
import content from '../../content/why-vacate.ts';
import theme from '../../styles/themes/theme.tsx';

export default function HousingBenefits() {
  return (
    <>
      <SectionContainer>
        <Typography variant="h2">
          {content.cards[1].title}
        </Typography>
        <Typography variant="body1">
          {content.cards[1].subtitle}
        </Typography>
      </SectionContainer>
      <SectionContainer sx={{ my: 0 }}>
        {
            content.cards[1].cardItems.map((benefit) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                content={benefit.body}
                image={benefit.imgRef}
              />
            ))
        }
      </SectionContainer>
      <SectionContainer>
        <Typography variant="h3">
          Employment resources
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
      </SectionContainer>
    </>
  );
}
