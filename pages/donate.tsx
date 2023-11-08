import { Grid } from '@mui/material';
import Script from 'next/script';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import DonationForm from '../components/helper/DonationForm.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import GridItemCard from '../components/layout/GridItem.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/donate.ts';

export default function DonatePage() {
  externalLinks();

  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <Script src="https://donorbox.org/widget.js" />

      <HeroBanner
        header={content.heroBanner.header}
        subheading={content.heroBanner.subheading}
        ctaLink={content.heroBanner.ctaLink}
        ctaText={content.heroBanner.ctaText}
      >
        <DonationForm />
      </HeroBanner>

      <SectionContainer id={content.page.id}>
        <PaperSection
          idSelector={content.page.id}
          title={content.page.title}
          subtitle={content.page.subtitle}
          ctaLink={content.page.ctaLink}
          ctaText={content.page.ctaText}
        >

          <Grid container spacing={4}>
            {
            content.page.items.map((item) => (
              <GridItemCard
                key={item.id}
                xs={12}
                sm={6}
                body={item.body}
                imgsrc={item.imgsrc}
              />
            ))
          }
          </Grid>

        </PaperSection>
      </SectionContainer>

      <SectionContainer>
        <PaperSection title="Donation FAQ">

          {content.donateFAQS.map((donate) => (
            <Grid key={donate.id} item xs={12} sm={6} md={4}>
              <AccordionBuilder
                id={donate.id}
                summary={donate.summary}
                details={donate.details}
                sx={{ py: 2 }}
              />
            </Grid>
          ))}

        </PaperSection>
      </SectionContainer>
    </>
  );
}
