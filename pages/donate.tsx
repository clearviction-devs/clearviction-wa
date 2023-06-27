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
import content from '../content/donate-faqs.ts';

export default function DonatePage() {
  externalLinks();

  return (
    <>
      <IndividualPageHead
        title="Support Clearviction | Reduce the odds of Recidivism"
        metaContent="Support Clearviction—a 501(c)3 nonprofit—in its mission to transform lives and break down barriers for those with criminal records in Washington State."
      />

      <Script src="https://donorbox.org/widget.js" />

      <HeroBanner
        heading="Your generous donation directly aids those who are limited by their convictions in Washington State"
        subheading={
          'Conviction vacation makes it easier for formerly incarcerated individuals to access housing and employment, two things that are crucial for reducing the odds of re-incarceration.\n\nWith your donations, you will directly help break down barriers for people with convictions in the state of Washington.\n\n<span style="fontSize: 14px">Clearviction is a registered 501(c)3 nonprofit organization, EIN#88-3187952. All donations are tax deductible in full or in part.</span>'
        }
        ctaLink="/about"
        ctaText="Learn more about us"
      >
        <DonationForm />
      </HeroBanner>
      <SectionContainer id="donate">
        <PaperSection
          title="How will your donations help Clearviction's goals?"
          subtitle="Here's how your generosity can help us achieve our milestones and make it possible to connect our project with more and more people who need it:"
          ctaLink="https://donorbox.org/clearviction"
          ctaText="Visit our donorbox page"
        >
          <Grid container spacing={4}>
            <GridItemCard
              xs={12}
              sm={6}
              body="Fund the technological and project management tools needed to grow our project."
              imgsrc="/illustrations/startup.svg"
            />
            <GridItemCard
              xs={12}
              sm={6}
              body="Provide vouchers for users who participate in our research."
              imgsrc="/illustrations/science-discovery.svg"
            />
            <GridItemCard
              xs={12}
              sm={6}
              body="Support low-income individuals in overcoming financial barriers blocking the vacation of their record."
              imgsrc="/illustrations/laptop.svg"
            />
            <GridItemCard
              xs={12}
              sm={6}
              body="Help people with convictions learn about and access our Conviction Vacation Eligibiliity calculator."
              imgsrc="/illustrations/notetaking.svg"
            />
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
