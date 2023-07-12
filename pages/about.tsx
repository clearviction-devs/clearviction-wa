import {
  Box, Button, ButtonGroup, Grid, Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import FactCard from '../components/layout/FactCard.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import Image from '../components/layout/Image.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import aboutContent from '../content/about.ts';

export default function AboutPage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  externalLinks();

  return (
    <>
      <IndividualPageHead
        title="The story and team behind Clearviction."
        metaContent="We're empowering individuals with criminal records in Washington State, and building brighter futures with tools like our Eligibility Calculator."
      />

      <HeroBanner
        heading={aboutContent.hero.header}
        subheading={aboutContent.hero.body}
        subheading2={aboutContent.hero.subheading2}
        imgsrc={aboutContent.hero.imgsrc}
      />
      <SectionContainer>
        <ButtonGroup
          variant="text"
          fullWidth
          orientation={matchesXS ? 'vertical' : 'horizontal'}
        >
          <Button href="#our-story">Our Story</Button>
          <Button href="#our-team">Our Team</Button>
        </ButtonGroup>
      </SectionContainer>
      <SectionContainer sx={{ margin: 'auto', mb: 4, maxWidth: '65rem' }} maxWidth={false}>
        <Typography variant="h3">{aboutContent.ourMission.header}</Typography>
      </SectionContainer>

      <SectionContainer
        id="our-story"
        sx={{ margin: 'auto', maxWidth: '65rem' }}
        maxWidth={false}
      >
        <Typography variant="h2" sx={{ mt: 4, textAlign: { xs: 'center', sm: 'left' } }}>{aboutContent.ourStory.header}</Typography>
        <Typography>{aboutContent.ourStory.body}</Typography>
        <Box sx={{ mt: 3 }}>
          {' '}
          <MuiMarkdown>{aboutContent.body[0]}</MuiMarkdown>
        </Box>

        <Box>
          <PaperSection title="" sx={{ p: 8, my: 8 }}>
            <Grid container spacing={4}>
              <Grid container className="fact-card">
                {aboutContent.facts.map((fact) => (
                  <FactCard
                    key={fact.id}
                    details={fact.details}
                    icon={fact.icon}
                    border={false}
                  />
                ))}
              </Grid>
            </Grid>
            <Box sx={{
              width: '100%', display: 'flex', justifyContent: 'center', mt: '2rem',
            }}
            >
              <Button
                href="/get-started"
                aria-label="to Get Started"
                variant="contained"
                sx={{
                  px: { xs: 4, sm: 6, md: 8 },
                  width: { xs: '80%', sm: 'auto' },
                }}
              >
                Learn More
              </Button>
            </Box>
          </PaperSection>
        </Box>
      </SectionContainer>
      <SectionContainer sx={{ margin: 'auto', maxWidth: '65rem' }} maxWidth={false}>
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h2">
                {aboutContent.joinUs.header}
              </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
              <Image
                src={aboutContent.joinUs.imgsrc}
                alt=""
                width={406}
                height={306}
                style={{ width: '100%' }}
                useImageDimensions
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography variant="subtitle1" sx={{ mt: '4.375rem', textAlign: 'center' }}>
                <MuiMarkdown>{aboutContent.joinUs.body}</MuiMarkdown>
              </Typography>
              <Stack sx={{ direction: 'column' }}>
                <Button href="/donate" variant="contained" sx={{ width: '15.5rem' }}>Donate</Button>
                <Button href="/get-involved" variant="contained" sx={{ width: '15.5rem' }}>Volunteer</Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </SectionContainer>

      <SectionContainer id="our-team" sx={{ margin: 'auto', maxWidth: '65rem' }} maxWidth={false}>
        <Typography variant="h2" sx={{ mt: '3rem' }}>{aboutContent.ourTeam.title}</Typography>

        <Grid container>
          <iframe
            id={aboutContent.ourTeam.id}
            title="our-team"
            src={aboutContent.ourTeam.src}
            width="100%"
            height="1048"
            style={{
              background: 'transparent',
              border: '0.0625rem solid #ccc',
              borderRadius: '0.5rem',
            }}
          />
        </Grid>
      </SectionContainer>
    </>
  );
}
