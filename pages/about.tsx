import {
  Box, Button, ButtonGroup, Grid, Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import externalLinks from '../components/externalLinks.tsx';
import Fact from '../components/Fact.tsx';
import HeroBanner from '../components/HeroBanner.tsx';
import IndividualPageHead from '../components/IndividualPageHead.tsx';
import PaperSection from '../components/PaperSection.tsx';
import SectionContainer from '../components/SectionContainer.tsx';
import aboutContent from '../content/about';

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
        <Typography variant="h2" sx={{ color: '#2f3554', mt: 4 }}>{aboutContent.ourStory.header}</Typography>
        <Typography>{aboutContent.ourStory.body}</Typography>
        <Typography sx={{ mt: 3 }}>
          {' '}
          <MuiMarkdown>{aboutContent.body[0]}</MuiMarkdown>
        </Typography>

        <Box>
          <PaperSection title="" sx={{ p: 8, my: 8 }}>
            <Grid container spacing={4}>

              <Grid container>
                {aboutContent.facts.map((fact) => (
                  <Grid key={fact.id} item xs={12} sm={4} md={4} lg={4}>
                    <Fact text={fact.text} icon={fact.icon} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Box sx={{ width: '100%', textAlign: 'center', mt: '2rem' }}>
              <Button
                href="/get-started"
                aria-label="to Get Started"
                variant="contained"
                sx={{ px: 8 }}
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
        <Typography variant="h2" align="center">
          {aboutContent.joinUs.header}
        </Typography>
      </Grid>
      <Grid item sm={12} md={6}>
        <Box
          component="img"
          src={aboutContent.joinUs.imgsrc}
          alt=""
          sx={{
            objectFit: 'contain',
            textAlign: 'center',
            width: '100%',
          }}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="subtitle1" sx={{ mt: '4.375rem' }}>
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
        <Typography variant="h2">{aboutContent.ourTeam.title}</Typography>

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
