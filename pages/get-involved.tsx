import {
  Box,
  Button,
  Container,
  Grid,
  List,
  Typography,
} from '@mui/material';
import React from 'react';

import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import ShareButtons from '../components/helper/ShareButtons.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import BenefitListItem from '../components/layout/BenefitListItem.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/get-involved.ts';

function BenefitsOfJoiningUs() {
  return (
    <SectionContainer
      id="benefits-of-joining-us"
      maxWidth="md"
    >
      <Typography variant="h2">
        {content.benefits.header}
      </Typography>
      <PaperSection sx={{
        bgcolor: 'primary.dark', color: 'primary.contrastText',
      }}
      >
        <Box sx={{
          pl: 3, py: 4,
        }}
        >
          {content.benefits.body.map((text) => (
            <Typography
              key={`benefitsText-${text}`}
              variant="body1"
              sx={{ mb: 4, mr: 2 }}
            >
              {text}
            </Typography>
          ))}
          <Grid container alignItems="flex-start">
            <Grid item xs={5}>
              <Typography variant="body1" paragraph>
                {content.benefits.listHeader}
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ display: { xs: 'inherit', sm: 'none' } }}>
              <ImageContainer
                src={content.benefits.mobileImgsrc}
                width={110}
                height={95}
                style={{ marginTop: -35 }}
                alt=""
              />
            </Grid>
          </Grid>
          <Box sx={{
            position: 'relative', width: '100%', height: 'auto',
          }}
          >
            <List>
              {content.benefits.benefitItems.map((benefit) => (
                <BenefitListItem key={`benefitItem-${benefit.id}`} {...benefit} />
              ))}
            </List>
            <Box
              sx={{
                position: 'absolute',
                right: '3rem',
                bottom: '5.4rem',
                display: { xs: 'none', sm: 'inherit' },
              }}
            >
              <ImageContainer
                src={content.benefits.imgsrc}
                alt=""
                width={200}
                height={200}
                useImageDimensions
              />
            </Box>
          </Box>
        </Box>
      </PaperSection>
    </SectionContainer>
  );
}

function Volunteer() {
  return (
    <SectionContainer id="open-roles" maxWidth="md">
      <Typography variant="h2">
        {content.volunteerPage.openRole.title}
      </Typography>
      <SectionContainer id="volunteer" maxWidth="md">
        {content.volunteerPage.body.map((text) => (
          <Typography
            key={`volunteerText-${text}`}
            variant="body1"
            sx={{ my: 3 }}
            display={{ xs: 'none', md: 'block' }}
          >
            {text}
          </Typography>
        ))}
      </SectionContainer>
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
    <SectionContainer
      id="perfect-fit"
      sx={{
        background: 'white', paddingLeft: '1.5rem', paddingTop: '3rem', marginTop: '3rem',
      }}
    >
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
      <BenefitsOfJoiningUs />
      <PerfectFit />
      <Volunteer />
      <GetInvolvedFAQ />
      <Partner />
    </>
  );
}
