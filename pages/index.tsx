import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import { DarkButton } from '../components/CustomButtons.tsx';
import externalLinks from '../components/ExternalLinks.tsx';
import IndividualPageHead from '../components/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import CarouselBuilder from '../components/layout/CarouselBuilder.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/home.ts';
import theme from '../styles/themes/theme.tsx';

export default function Home() {
  externalLinks();

  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <main>
        <HeroBanner {...content.heroBanner} background="url(/h1-home-desktop.png)" />

        <Container sx={{
          padding: {
            xs: '72px 24px',
            sm: '72px 64px',
            md: '72px 0px',
          },
          maxWidth: {
            md: '936px',
          },
          margin: {
            md: 'auto',
          },
        }}
        >
          <Grid container justifyContent="space-between" id={`${content.background.id}-main-grid`}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                sx={{ lineHeight: '40px', mb: '24px' }}
              >
                {content.background.title}
              </Typography>
              <MuiMarkdown overrides={{
                p: {
                  component: Typography,
                  props: {
                    variant: 'body2',
                    fontSize: '18px',
                    lineHeight: '22px',
                    marginBottom: '16px',
                  },
                },
              }}
              >
                {content.background.body}
              </MuiMarkdown>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              justifyContent="center"
              sx={{ marginTop: { xs: 8, md: 0 } }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  bgcolor: theme.palette.primary.dark,
                  color: theme.palette.text.light,
                  paddingY: 4,
                  height: 364,
                  maxWidth: 312,
                  width: '100%',
                }}
              >
                <Typography variant="headingCalculator" align="center">{content.background.iconText}</Typography>
                <ImageContainer
                  src="/3-percent.png"
                  width={200}
                  height={120}
                  alt=""
                  style={{ width: 200, height: 'auto' }}
                />
                <Typography variant="headingCalculator" align="center">{content.background.iconText2}</Typography>
              </Box>
            </Grid>

          </Grid>
        </Container>

        <Grid
          container
          sx={{
            backgroundColor: theme.palette.secondary.light,
          }}
        >
          <SectionContainer>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 500, textAlign: { xs: 'center', md: 'left' } }}
                >
                  {content.eligibilityCTA.title}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md="auto"
                sx={{
                  display: 'flex',
                  paddingTop: { xs: 2, md: 0 },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <DarkButton
                  text={content.eligibilityCTA.ctaButton}
                  href="/calculator/head-initial-1-cont"
                />
              </Grid>
            </Grid>
          </SectionContainer>
        </Grid>

        <Box sx={{
          padding: {
            xs: '72px 0px 52px 24px',
            sm: '72px 0px 52px 32px',
            md: '52px 0px',
          },
          maxWidth: '936px',
          mx: 'auto',
        }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h2">How can we help you vacate a conviction?</Typography>
            </Grid>
            <CarouselBuilder
              cards={content.carousel}
              cardWidth={274}
              cardHeight={362}
              buttonHRef="/calculator/head-initial-1-cont"
              usePlaycard
            />
          </Grid>
        </Box>

        <Container
          id="faq"
          sx={{
            padding: {
              xs: '8px 24px 88px 24px',
              sm: '8px 64px 88px 64px',
              // md: '0px',
            },
            maxWidth: {
              md: '936px',
            },
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: '500', lineHeight: '32px', mb: '24px' }}>Conviction Vacation FAQs</Typography>
          {content.faqs.map((faq) => (
            <AccordionBuilder
              key={faq.id}
              {...faq}
              sx={{ backgroundColor: theme.palette.primary.light }}
            />
          ))}
        </Container>

      </main>
    </>
  );
}
