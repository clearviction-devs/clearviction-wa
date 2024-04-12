import {
  Grid, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import GridItemCard from '../components/layout/GridItem.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/home.ts';

export default function Home() {
  externalLinks();

  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <main>

        <HeroBanner {...content.heroBanner} aria-label={content.heroBanner.ariaLabels?.ctaButton} />

        <SectionContainer id={content.ourMission.id}>
          <PaperSection>
            <Grid container id={`${content.ourMission.id}-main-grid`}>
              <Grid item xs={12}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                  {content.ourMission.header}
                </Typography>
                <MuiMarkdown>{content.ourMission.body}</MuiMarkdown>
                <br />
                <br />
                <MuiMarkdown>{content.ourMission.body2}</MuiMarkdown>
              </Grid>
            </Grid>

          </PaperSection>
        </SectionContainer>

        {content.gridSections.map((section) => (
          <SectionContainer key={section.id} id={section.id}>
            <PaperSection
              title={section.title}
              subtitle={section.subtitle}
              ctaLink={section.ctaLink}
              ctaText={section.ctaText}
              ariaLabels={{ ctaButton: section.ariaLabels?.ctaButton }}
            >
              <Grid container spacing={4} id={`${section.id}-main-grid`}>
                {section.items.map((item) => (
                  <GridItemCard
                    key={item.id}
                    xs={12}
                    md={section.items.length % 2 ? 4 : 3}
                    title={item.title}
                    body={item.body}
                    imgsrc={item.imgsrc}
                  />
                ))}
              </Grid>
            </PaperSection>
          </SectionContainer>
        ))}

        <SectionContainer id="faq">
          <PaperSection title="FAQ">
            {content.faqs.map((faq) => (
              <AccordionBuilder key={faq.id} {...faq} />
            ))}
          </PaperSection>
        </SectionContainer>

      </main>
    </>
  );
}
