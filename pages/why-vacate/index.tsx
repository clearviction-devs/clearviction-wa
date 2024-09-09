import {
  ButtonGroup, Grid, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import externalLinks from '../../components/ExternalLinks.tsx';
import IndividualPageHead from '../../components/IndividualPageHead.tsx';
import AccordionBuilder from '../../components/layout/AccordionBuilder.tsx';
import GridItemCard from '../../components/layout/GridItem.tsx';
import SectionContainer from '../../components/layout/SectionContainer.tsx';
import content from '../../content/why-vacate.ts';

export default function WhyVacatePage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  externalLinks();

  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <SectionContainer id="why-vacate-main">
        <ButtonGroup
          id="main-button-group"
          variant="text"
          fullWidth
          orientation={matchesXS ? 'vertical' : 'horizontal'}
        />

        {content.cards.map((card: any) => (
          <SectionContainer id={`section-${card.sectionId}`} key={card.sectionId}>
            <Grid container spacing={4}>

              {card.cardItems.map((cardItem: any) => (
                <GridItemCard
                  key={cardItem.title}
                  xs={12}
                  md={card.cardItems.length % 2 ? 4 : 6}
                  title={cardItem.title}
                  body={cardItem.body}
                  imgsrc={cardItem.imgRef}
                  textAlign="center"
                />
              ))}

            </Grid>
            <Typography id="heading-resources" variant="h3">Resources</Typography>
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
          </SectionContainer>
        ))}

      </SectionContainer>
    </>
  );
}
