import { Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

import AccordionBuilder from '../components/AccordionBuilder';
import HeroBanner from '../components/HeroBanner';
import { HomeCardItem, HomeCardSection } from '../components/HomeCardSection';
import SectionContainer from '../components/SectionContainer';
import content from '../content/get-started';

export default function GetStartedPage() {
  return (
    <>
      <HeroBanner
        heading='Get Started'
        subheading='Vacate your conviction in the state of Washington by following these 4 steps!'
        imgsrc='/illustrations/chart.svg'
      />
      <SectionContainer>
        <Grid container spacing={2}>
          {content.eligibilityForms.map((eligibilityForm) => (
            <Grid key={eligibilityForm.id} item xs={12} sm={6} md={4}>
              <AccordionBuilder
                id={eligibilityForm.id}
                summary={eligibilityForm.summary}
                details={eligibilityForm.details}
                sx={{ py: 2, height:"122px" }}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </>
  );
}
