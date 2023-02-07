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
        imgsrc='/illustrations/homeHeroImage.svg'
      />
      <SectionContainer>
        <MuiMarkdown>{`##Step 1: Documents\nGathering documents is the first step in the process. This includes any forms or records that pertain to your conviction. Please gather all relevant court forms and get a copy of your Criminal History Record Information (CHRI).\n###Court Forms`}</MuiMarkdown>
        <Grid container spacing={2}>
          {content.courtForms.map((courtForm) => (
            <Grid key={courtForm.id} item xs={12} sm={6} md={4}>
              <AccordionBuilder
                id={courtForm.id}
                summary={courtForm.summary}
                details={courtForm.details}
                sx={{ py: 2, height: '120px' }}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </>
  );
}
