import { Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

import AccordionBuilder from '../components/AccordionBuilder';
import HeroBanner from '../components/HeroBanner';
import SectionContainer from '../components/SectionContainer';
import content from '../content/get-started';

export default function GetStartedPage() {
  return (
    <>
      <HeroBanner
        heading='Get Started'
        subheading='Vacate your conviction in the state of Washington by following these 4 steps!'
        imgsrc='/illustrations/chart.svg'
        // ctaLink='/calculator/landing-0'
        // ctaText='Access Calculator'
      />
      <SectionContainer>
        <Grid container spacing={2}>
          {content.courtForms.map((courtForm) => (
            <Grid key={courtForm.id} item xs={12} sm={6} md={4}>
              <AccordionBuilder
                id={courtForm.id}
                summary={courtForm.summary}
                details={courtForm.details}
                sx={{ py: 2 }}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </>
  );
}
