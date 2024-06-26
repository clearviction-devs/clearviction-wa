import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Button,
  Grid, ImageList, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import PlayCard from '../components/layout/PlayCard.tsx';
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

        <SectionContainer>
          <Grid container justifyContent="space-between" id={`${content.background.id}-main-grid`}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
              >
                {content.background.title}
              </Typography>
              <br />
              <br />
              <MuiMarkdown>{content.background.body}</MuiMarkdown>
              <br />
              <br />
              <MuiMarkdown>{content.background.body2}</MuiMarkdown>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              justifyContent="center"
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  bgcolor: '#003256',
                  color: '#FFFEFC',
                  paddingY: 4,
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
                  style={{ maxWidth: '100%', height: 'auto' }}
                  useImageDimensions
                />
                <Typography variant="headingCalculator" align="center">{content.background.iconText2}</Typography>
              </Box>
            </Grid>

          </Grid>
        </SectionContainer>

        <Grid
          container
          sx={{
            backgroundColor: '#DCFAEF',
          }}
        >
          <SectionContainer>
            <Grid container justifyContent="space-between">
              <Grid container xs={12} md={8} alignItems="center">
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 500 }}
                >
                  {content.eligibilityCTA.title}
                </Typography>
              </Grid>
              <Grid container xs={12} md={4}>
                <Button
                  href="/calculator/head-initial-1-cont"
                  variant="contained"
                  color="primary"
                  size="small"
                  className="calc-btn"
                  aria-label="Access our eligibility calculator"
                  sx={{
                    whiteSpace: 'nowrap',
                    py: 1,
                    px: 3,
                    backgroundColor: '#003256',
                  }}
                >
                  <Typography variant="button" sx={{ textTransform: 'none' }}>Check your conviction</Typography>
                  <Box component="span" sx={{ ml: 1 }} />
                  <ArrowForwardIcon sx={{ stroke: '#FFFEFC', strokeWidth: 1.5 }} />
                </Button>
              </Grid>
            </Grid>
          </SectionContainer>
        </Grid>

        <SectionContainer>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h2">How can we help you vacate a conviction?</Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <ImageList sx={{ overflowX: 'auto', rowHeight: 'auto' }}>
                <Grid container spacing={18} sx={{ flexWrap: 'nowrap' }}>
                  {content.carousel.map((card) => (
                    <Grid item key={card.title}>
                      <PlayCard
                        {...card}
                        cardWidth={274}
                        cardHeight={362}
                        backgroundColor="#003256"
                        textColor="#FFFEFC"
                      />
                    </Grid>
                  ))}
                </Grid>
              </ImageList>
            </Grid>
          </Grid>
        </SectionContainer>

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
