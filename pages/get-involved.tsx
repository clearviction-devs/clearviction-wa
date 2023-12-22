import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import ShareButtons from '../components/helper/ShareButtons.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import FactCard from '../components/layout/FactCard.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/get-involved.ts';

function Volunteer() {
  return (
    <>
      <SectionContainer id="volunteer" maxWidth="md">
        <Typography sx={{ my: 8 }} variant="h2">
          {content.volunteerPage.header}
        </Typography>
        {content.volunteerPage.body.map((text) => (
          <Typography
            key={`volunteerText-${text}`}
            variant="body1"
            sx={{ my: 3 }}
          >
            {text}
          </Typography>
        ))}
        <Grid container className="fact-card">
          {content.volunteerPage.facts.map((fact) => (
            <FactCard
              key={fact.id}
              details={fact.details}
              icon={fact.icon}
              border={false}
            />
          ))}
        </Grid>
      </SectionContainer>

      <SectionContainer id="open-roles" maxWidth="md">
        <Typography variant="h2">
          {content.volunteerPage.openRole.title}
        </Typography>
        <iframe
          id={content.volunteerPage.openRole.id}
          src={content.volunteerPage.openRole.src}
          width="100%"
          height={content.volunteerPage.openRole.height}
          title="Volunteer with Clearviction"
          style={{
            background: 'transparent',
            border: '1px solid #ccc',
            borderRadius: '6px',
          }}
        />
      </SectionContainer>
    </>
  );
}

function Partner() {
  return (
    <>
      <SectionContainer id="partner-with-us" maxWidth="md">
        <Typography sx={{ my: 8 }} variant="h2">
          {content.partnerPage.header[0]}
        </Typography>
        <Typography variant="body1">{content.partnerPage.text[0]}</Typography>
        <Container sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 8 }}
            href={content.partnerPage.buttons[0].href}
          >
            {content.partnerPage.buttons[0].name}
          </Button>
        </Container>
      </SectionContainer>

      <SectionContainer maxWidth="md">
        <PaperSection title="" sx={{ margin: 'auto', p: 4 }}>

          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box display="flex" justifyContent="center" sx={{ px: 2 }}>
                <ImageContainer
                  alt=""
                  src={content.partnerPage.imgsrc}
                  width={342}
                  height={248}
                  priority
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography sx={{ my: 8, scrollMarginTop: '4em' }} variant="h3">
                {content.partnerPage.header[1]}
              </Typography>
              <Typography sx={{ my: 3 }} variant="body1">
                {content.partnerPage.text[1]}
              </Typography>
              <Typography sx={{ my: 3 }} variant="body1">
                {content.partnerPage.text[2]}
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
    </>
  );
}

function GetInvolvedFAQ() {
  return (
    <SectionContainer id="get-involved-faq" maxWidth="md">
      <Typography variant="h2">FAQ</Typography>
      <PaperSection>
        {content.faqs.map((faq) => (
          <AccordionBuilder key={faq.id} {...faq} />
        ))}
      </PaperSection>
    </SectionContainer>
  );
}

function PerfectFit() {
  return (
    <SectionContainer id="perfect-fit">
      <Typography variant="h2" fontWeight="bold">{content.perfectFit.header}</Typography>
      <Typography>{content.perfectFit.body}</Typography>
      <Grid container spacing={{ xs: 3, sm: 3, md: 10 }} paddingTop={4}>
        {
        content.perfectFit.perfectFitCards.map((card) => (
          <Grid item key={card.id} xs={12} sm={12} md={6} paddingX={4}>
            <Box
              id={`${card.id}-card`}
              maxWidth="md"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              sx={{
                background: '#546B95', borderRadius: '20px', textAlign: 'center', color: 'white', minHeight: '12rem',
              }}
            >
              <Typography fontWeight="bold" paddingBottom={2}>{card.header}</Typography>
              <Typography>{card.body}</Typography>
            </Box>
          </Grid>
        ))
      }
        <Grid item display={{ xs: 'none', md: 'block' }} maxWidth="md" alignItems="center">
          <ImageContainer
            alt="lightbulb"
            src={content.perfectFit.imgSrc}
            width={524}
            height={321}
            priority
          />
        </Grid>
      </Grid>
    </SectionContainer>
  );
}

export default function GetInvolvedPage() {
  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <HeroBanner
        {...content.hero}
      />

      <PerfectFit />
      <Volunteer />
      <GetInvolvedFAQ />
      <Partner />
    </>
  );
}
