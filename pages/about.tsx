import {
  Box, Button, ButtonGroup, Grid, Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiMarkdown from 'mui-markdown';
import Link from 'next/link';
import React from 'react';

import useScroll from '../components/functional/CustomScroll.tsx';
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
  const { handleLinkClick } = useScroll();

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
          id="about-nav"
        >
          <Button
            data-href={content.buttons[0].href}
            onClick={handleLinkClick}
            id="our-story-button"
          >
            {content.buttons[0].name}
          </Button>
          <Button
            data-href={content.buttons[1].href}
            onClick={handleLinkClick}
            id="our-partners-button"
          >
            {content.buttons[1].name}
          </Button>
          <Button
            data-href={content.buttons[2].href}
            onClick={handleLinkClick}
            id="our-officers-button"
          >
            {content.buttons[2].name}
          </Button>
          <Button
            data-href={content.buttons[3].href}
            onClick={handleLinkClick}
            id="our-team-button"
          >
            {content.buttons[3].name}
          </Button>
        </ButtonGroup>
      </SectionContainer>

      <SectionContainer sx={{ margin: 'auto', mb: 4, maxWidth: '65rem' }} maxWidth={false} id="our-mission-header">
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
          <PaperSection title="" sx={{ p: 8, my: 8 }} id="about-facts">
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
                aria-label="Learn more about the conviction vacation process"
                variant="contained"
                sx={{
                  px: { xs: 4, sm: 6, md: 8 },
                  width: { xs: '80%', sm: 'auto' },
                }}
              >
                {content.buttons[4].name}
              </Button>
            </Box>
          </PaperSection>
        </Box>

      </SectionContainer>

      <SectionContainer sx={{ margin: 'auto', maxWidth: '65rem' }} maxWidth={false} id="join-us">
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
              <Typography variant="subtitle1" sx={{ mt: '4.375rem', textAlign: 'center' }} id="join-us-body">
                <MuiMarkdown>{content.joinUs.body}</MuiMarkdown>
              </Typography>
              <Stack sx={{ direction: 'column' }} id="join-us-buttons">
                <Button href="/donate" variant="contained" sx={{ width: '15.5rem' }}>{content.buttons[5].name}</Button>
                <Button href="/get-involved" variant="contained" sx={{ width: '15.5rem' }}>{content.buttons[6].name}</Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </SectionContainer>

      <SectionContainer id="our-partners" sx={{ margin: 'auto', mb: 4, maxWidth: '65rem' }} maxWidth={false}>
        <Typography variant="h2" sx={{ my: '3rem' }}>{content.ourPartners.header}</Typography>
        <PaperSection sx={{ pt: 0, pb: 1 }}>
          <Grid container>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" sx={{ pt: 4 }}>
                {content.ourPartners.ctaLink && (
                  <Link href={content.ourPartners.ctaLink}>
                    <ImageContainer
                      alt=""
                      src={content.ourPartners.imgsrc as string}
                      width={442}
                      height={248}
                      style={{
                        height: '124px',
                        width: '221px',
                        objectFit: 'contain',
                      }}
                    />
                  </Link>
                )}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex', flexDirection: 'column', pt: '0.5rem',
              }}
            >
              {content.ourPartners.ctaLink && (
                <Typography
                  sx={{
                    color: 'primary.dark',
                    textAlign: 'center',
                    my: 2,
                  }}
                  variant="subtitle1"
                >
                  <Link href={content.ourPartners.ctaLink} style={{ textDecoration: 'none' }}>
                    {content.ourPartners.body}
                  </Link>
                </Typography>
              )}
              <Typography
                sx={{
                  textAlign: 'center',
                  mt: 1,
                  mb: 3,
                  mx: 2,
                }}
                variant="body2"
              >
                {content.ourPartners.subheading2}
              </Typography>
            </Grid>
          </Grid>
        </PaperSection>
      </SectionContainer>

      {content.ourTeam.map((item) => (
        <SectionContainer id={item.id} key={item.id} sx={{ margin: 'auto', maxWidth: '65rem' }} maxWidth={false}>
          <Typography variant="h2" sx={{ mt: '3rem' }}>{item.title}</Typography>
          <Grid container>
            <iframe
              id={item.id}
              title={item.title}
              src={item.src}
              width="100%"
              height={item.height}
              style={{
                background: 'transparent',
                border: '0.0625rem solid #ccc',
                borderRadius: '0.5rem',
                marginBottom: '2rem',
              }}
            />
          </Grid>
        </SectionContainer>
      ))}

    </>
  );
}
