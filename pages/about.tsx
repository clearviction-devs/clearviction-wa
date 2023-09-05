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
import ImageContainer from '../components/layout/ImageContainer.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/about.ts';

export default function AboutPage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  externalLinks();

  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <HeroBanner
        header={content.hero.header}
        subheading={content.hero.body}
        subheading2={content.hero.subheading2}
        imgsrc={content.hero.imgsrc}
      />

      <SectionContainer>
        <ButtonGroup
          variant="text"
          fullWidth
          orientation={matchesXS ? 'vertical' : 'horizontal'}
        >
          <Button href="#our-story">{content.buttons[0].name}</Button>
          <Button href="#our-team">{content.buttons[1].name}</Button>
        </ButtonGroup>
      </SectionContainer>

      <SectionContainer sx={{ margin: 'auto', mb: 4, maxWidth: '65rem' }} maxWidth={false}>
        <Typography variant="h3">{content.ourMission.header}</Typography>
      </SectionContainer>

      <SectionContainer
        id="our-story"
        sx={{ margin: 'auto', maxWidth: '65rem' }}
        maxWidth={false}
      >

        <Typography variant="h2" sx={{ mt: 4, textAlign: { xs: 'center', sm: 'left' } }}>{content.ourStory.header}</Typography>
        <Typography>{content.ourStory.body}</Typography>
        <Box sx={{ mt: 3 }}>
          {' '}
          <MuiMarkdown>{content.body[0]}</MuiMarkdown>
        </Box>

        <Box>
          <PaperSection title="" sx={{ p: 8, my: 8 }}>
            <Grid container spacing={4}>
              <Grid container className="fact-card">
                {content.facts.map((fact) => (
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
                {content.buttons[2].name}
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
                {content.joinUs.header}
              </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
              <ImageContainer
                src={content.joinUs.imgsrc as string}
                alt=""
                width={406}
                height={306}
                style={{ width: '100%' }}
                useImageDimensions
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography variant="subtitle1" sx={{ mt: '4.375rem', textAlign: 'center' }}>
                <MuiMarkdown>{content.joinUs.body}</MuiMarkdown>
              </Typography>
              <Stack sx={{ direction: 'column' }}>
                <Button href="/donate" variant="contained" sx={{ width: '15.5rem' }}>{content.buttons[3].name}</Button>
                <Button href="/get-involved" variant="contained" sx={{ width: '15.5rem' }}>{content.buttons[4].name}</Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </SectionContainer>

      <SectionContainer id="our-team" sx={{ margin: 'auto', maxWidth: '65rem' }} maxWidth={false}>
        <Typography variant="h2" sx={{ mt: '3rem' }}>{content.ourTeam.title}</Typography>
        <Grid container>
          <iframe
            id={content.ourTeam.id}
            title="our-team"
            src={content.ourTeam.src}
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
