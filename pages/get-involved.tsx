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
import FactCard from '../components/layout/FactCard.tsx';
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
          <Typography
            variant="h3"
            sx={{
              pb: 3, fontWeight: '700',
            }}
          >
            {content.benefits.subheader}
          </Typography>
          {content.benefits.body.map((text) => (
            <Typography
              key={`benefitsText-${text}`}
              variant="body1"
              sx={{ mb: 4, mr: 2 }}
            >
              {text}
            </Typography>
          ))}
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
              component="img"
              src={content.benefits.imgsrc}
              sx={{
                position: 'absolute',
                right: '3rem',
                bottom: {
                  xs: '6rem', sm: '6rem', lg: '6.25rem',
                },
                width: 200,
                height: 'auto',
                transition: 'right 0.5s top 0.5s',
              }}
            />
          </Box>
        </Box>
      </PaperSection>
    </SectionContainer>
  );
}

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
      <Volunteer />
      <GetInvolvedFAQ />
      <Partner />
    </>
  );
}
