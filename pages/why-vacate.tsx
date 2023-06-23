import {
  Button, ButtonGroup, Grid, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import GridItemCard from '../components/layout/GridItem.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/why-vacate';

export default function WhyVacatePage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  externalLinks();

  return (
    <>
      <IndividualPageHead
        title="Clearviction | Find out why it's important to vacate criminal records"
        metaContent="Vacating your criminal record allows you better access to employment, housing, and educational resources so you can get your life back on track."
      />

      <HeroBanner
        heading={content.heroBanner.heading}
        subheading={content.heroBanner.subheading}
        imgsrc={content.heroBanner.imgsrc}
      />
      <SectionContainer>
        <ButtonGroup
          variant="text"
          fullWidth
          orientation={matchesXS ? 'vertical' : 'horizontal'}
        >
          {content.buttons.map((button: any) => (
            <Button key={button.name} href={button.href}>
              {button.name}
            </Button>
          ))}
        </ButtonGroup>
        {content.cards.map((card: any) => (
          <SectionContainer id={card.sectionId} key={card.sectionId}>
            <PaperSection
              title={card.title}
              subtitle={card.subtitle}
              sx={{ textAlign: 'left', p: 4 }}
            >
              <Grid container spacing={4}>
                {card.cardItems.map((cardItem: any) => (
                  <GridItemCard
                    key={cardItem.title}
                    xs={12}
                    md={card.cardItems.length % 2 ? 4 : 6}
                    title={cardItem.title}
                    body={cardItem.body}
                    imgsrc={cardItem.imgRef}
                  />
                ))}
              </Grid>
              <Typography variant="h3">Resources</Typography>
              <Grid container spacing={2}>
                {card.accordianItems.map((accordianItem: any) => (
                  <Grid key={accordianItem.id} item xs={12} sm={6} md={4}>
                    <AccordionBuilder
                      id={accordianItem.id}
                      summary={accordianItem.summary}
                      details={accordianItem.details}
                      sx={{ my: 1, mx: 4, py: 2 }}
                    />
                  </Grid>
                ))}
              </Grid>
            </PaperSection>
          </SectionContainer>
        ))}
      </SectionContainer>
    </>
  );
}
