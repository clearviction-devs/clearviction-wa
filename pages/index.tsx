import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Button,
  Grid, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
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

        <SectionContainer>
          <Grid container justifyContent="space-between" id={`${content.background.id}-main-grid`}>
            <Grid md={7}>
              <Typography
                variant="h8"
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
              md={3.7}
              alignContent="center"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                bgcolor: '#003256',
                color: '#FFFEFC',
              }}
            >
              <Typography variant="h7" align="center">{content.background.iconText}</Typography>
              <ImageContainer
                src="/illustrations/3-percent.png"
                width={200}
                height={120}
                alt=""
                style={{ maxWidth: '100%', height: 'auto' }}
                useImageDimensions
              />
              <Typography variant="h7" align="center">{content.background.iconText2}</Typography>
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
              <Grid container md={8} alignItems="center">
                <Typography
                  variant="h9"
                >
                  {content.eligibilityCTA.title}
                </Typography>
              </Grid>
              <Grid container md={3.7} justifyContent="center">
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
                  Check your conviction
                  <Box component="span" sx={{ ml: 1 }} />
                  <ArrowForwardIcon />
                </Button>
              </Grid>
            </Grid>
          </SectionContainer>
        </Grid>

        {/* {content.gridSections.map((section) => (
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
        ))} */}

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
