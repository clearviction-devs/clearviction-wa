import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
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
        <HeroBanner {...content.heroBanner} background="url(/illustrations/h1-home-desktop.png)" />

        <SectionContainer>
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
                  src="/illustrations/3-percent.png"
                  width={200}
                  height={120}
                  alt=""
                  style={{ width: 200, height: 'auto' }}
                />
                <Typography variant="headingCalculator" align="center">{content.background.iconText2}</Typography>
              </Box>
            </Grid>

          </Grid>
        </SectionContainer>

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
                <Button
                  href="/calculator/head-initial-1-cont"
                  variant="contained"
                  size="small"
                  className="calc-btn"
                  aria-label="Access our eligibility calculator"
                  sx={{
                    backgroundColor: theme.palette.background.dark,
                    '&:hover': {
                      color: theme.palette.text.secondary,
                      backgroundColor: theme.palette.primary.main,
                      '& .MuiTypography-root': {
                        color: theme.palette.text.secondary,
                      },
                      '& .MuiSvgIcon-root': {
                        color: theme.palette.text.secondary,
                        stroke: theme.palette.text.secondary,
                      },
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{
                      color: theme.palette.text.light, textTransform: 'none', marginBottom: '0px', letterSpacing: '0',
                    }}
                  >
                    {content.eligibilityCTA.ctaButton}
                  </Typography>
                  <Box component="span" sx={{ ml: 1 }} />
                  <ArrowForwardIcon sx={{
                    color: theme.palette.text.light,
                    stroke: theme.palette.text.light,
                    strokeWidth: 0.5,
                  }}
                  />
                </Button>
              </Grid>
            </Grid>
          </SectionContainer>
        </Grid>

        <SectionContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} textAlign={{ xs: 'center', sm: 'left' }}>
              <Typography variant="h2">How can we help you vacate a conviction?</Typography>
            </Grid>
            <CarouselBuilder
              cards={content.carousel}
              cardWidth={274}
              cardHeight={362}
              backgroundColor={theme.palette.background.dark as string}
              textColor={theme.palette.text.light as string}
              buttonHRef="/calculator/head-initial-1-cont"
              buttonClassName="calc-btn"
              buttonAriaLabel="Access our eligibility calculator"
            />
          </Grid>
        </SectionContainer>

        <SectionContainer id="faq">
          <Typography variant="h3" sx={{ fontWeight: '500', lineHeight: '32px', mb: '24px' }}>Conviction Vacation FAQs</Typography>
          {content.faqs.map((faq) => (
            <AccordionBuilder
              key={faq.id}
              {...faq}
              sx={{ backgroundColor: theme.palette.primary.light }}
            />
          ))}
        </SectionContainer>

      </main>
    </>
  );
}
