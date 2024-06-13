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
          <Grid container id={`${content.background.id}-main-grid`} direction="row" justifyContent="space-between">
            <Grid item md={6.5} sx={{ mb: 8 }}>
              <Typography variant="h7" sx={{ textAlign: 'left' }}>
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
              md={3}
              sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '250px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  bgcolor: '#003256',
                  color: '#FFFEFC',
                  padding: '20px',
                }}
              >
                <Typography variant="h8" align="center">{content.background.iconText}</Typography>
                <Typography variant="h8" align="center">{content.background.iconText2}</Typography>
              </Box>
            </Grid>
          </Grid>
        </SectionContainer>

        <Grid container sx={{ backgroundColor: '#DCFAEF' }} direction="row">
          <Typography>{content.eligibilityCTA.title}</Typography>
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
            Check Eligibility
          </Button>
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
