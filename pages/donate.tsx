import {
  Button, Container, Grid, Typography,
} from '@mui/material';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import ShareButtons from '../components/helper/ShareButtons.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import GivingTuesdayHeroBanner from '../components/layout/GivingTuesdayHeroBanner.tsx';
import GridItemCard from '../components/layout/GridItem.tsx';
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

      <GivingTuesdayHeroBanner
        header={content.heroBanner.header}
        subheading={content.heroBanner.subheading}
        imgsrc={content.heroBanner.imgsrc}
      />

      <SectionContainer id={content.page.id}>
        <PaperSection
          className="donation-details-section"
          title={content.page.title}
          subtitle={content.page.subtitle}
          ctaLink={content.page.ctaLink}
          ctaText={content.page.ctaText}
          sx={{ textAlign: 'left', p: 4 }}
        >

          <Grid container spacing={4}>
            {
            content.page.items.map((item) => (
              <GridItemCard
                className={item.id}
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
        <PaperSection sx={{ margin: 'auto', px: 4, py: 2 }}>

          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ scrollMarginTop: '4em' }} variant="h2">
                {content.donationShare.header[0]}
              </Typography>
              <Typography variant="h2">
                {content.donationShare.header[1]}
              </Typography>
              <Typography sx={{ my: 4 }} variant="body1">
                {content.donationShare.text[0]}
              </Typography>
              <Typography sx={{ my: 4 }} variant="body1">
                {content.donationShare.text[1]}
              </Typography>
              <ShareButtons
                popup={false}
                setShareLinkCopied={() => {}}
                shareLinkCopied={false}
              />
            </Grid>
          </Grid>

        </PaperSection>
      </SectionContainer>

      <SectionContainer>
        <PaperSection title="Donation FAQ" sx={{ textAlign: 'left', p: 4 }}>

          {content.donateFAQS.map((donate) => (
            <Grid className={`faq-${donate.id}`} key={donate.id} item xs={12} sm={6} md={4}>
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

      <SectionContainer id="donate-join-team">

        <Typography sx={{ my: 5, color: 'primary.dark' }} variant="h2">
          {content.donateJoinTeam.header}
        </Typography>
        <Typography sx={{ my: 2 }} variant="body1">{content.donateJoinTeam.text[0]}</Typography>
        <Typography variant="body1">{content.donateJoinTeam.text[1]}</Typography>
        <Container sx={{ py: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 8 }}
            href={content.donateJoinTeam.buttons[0].href}
          >
            {content.donateJoinTeam.buttons[0].name}
          </Button>
        </Container>

      </SectionContainer>
    </>
  );
}
