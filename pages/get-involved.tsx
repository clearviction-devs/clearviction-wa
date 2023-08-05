import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import ShareButtons from '../components/helper/ShareButtons.tsx';
import FactCard from '../components/layout/FactCard.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/get-involved.ts';

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
      <SectionContainer maxWidth="md">
        <Typography variant="h2">
          {content.volunteerPage.openRole.title}
        </Typography>

        <iframe
          id={content.volunteerPage.openRole.id}
          src={content.volunteerPage.openRole.src}
          width="100%"
          height="548"
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
            href={content.partnerPage.href}
          >
            Contact Us
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
              <ShareButtons />
            </Grid>
          </Grid>
        </PaperSection>
      </SectionContainer>
    </>
  );
}

export default function GetInvolvedPage() {
  return (
    <>
      <IndividualPageHead
        title="Join Clearviction | Get Involved & Reduce Recidivism"
        metaContent="Join the Clearviction team and break down barriers for formerly incarcerated individuals by making it easier to vacate their criminal records in Washington State"
      />

      <Box sx={{ bgcolor: '#2f3554', pb: '64px' }}>
        <HeroBanner
          header="Share your expertise with us"
          subheading="There are many ways to participate with the Clearviction team, and we appreciate all of them!"
          overrideStyles={{
            pb: 0,
            pt: 8,
            color: 'primary.contrastText',
          }}
        />

        <Grid
          container
          spacing={2}
          sx={{ maxWidth: '1200px', m: 'auto', mt: -8 }}
        >
          {content.waysToParticipate.map((card) => (
            <Grid item xs={12} sm={12} md={4} key={card.id}>
              <Box display="flex" justifyContent="center" key={card.id}>
                <Card
                  sx={{
                    p: 1,
                    pb: 0,
                    maxWidth: 275,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom>{card.body}</Typography>
                  </CardContent>
                  <CardActions sx={{ width: '100%' }}>
                    <Button
                      href={card.href}
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      {card.title}
                    </Button>
                  </CardActions>
                  <CardMedia
                    component="img"
                    height="180"
                    sx={{ objectFit: 'contain' }}
                    image={card.imgsrc}
                    title={card.title}
                  />
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Volunteer />
      <Partner />
    </>
  );
}
