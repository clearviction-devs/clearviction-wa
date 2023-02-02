import { Grid } from '@mui/material';
import Typography from '@mui/material';
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
        <MuiMarkdown>{`##Step 4: Court Hearing`}</MuiMarkdown>
        <MuiMarkdown>
          {`Last but not least, schedule a hearing with a judge! Below are resources for financial & legal aid.`}
        </MuiMarkdown>
        <SectionContainer>
          <MuiMarkdown>{`###Legal Aid`}</MuiMarkdown>
          <MuiMarkdown>
            {`Many pro bono services are only available after being referred by CLEAR, a toll-free legal hotline:\n\n* Outside of King County: call 1-888-201-1014 (weekdays 9.15am - 12.15pm)\n\n* In King County: call 2-1-1 (weekdays 8am - 6pm) \n\n* You can also apply online at [CLEAR*Online](https://nwjustice.org/apply-online)`}
          </MuiMarkdown>
          <Grid container spacing={2}>
            {content.legalAidForms.map((legalForm) => (
              <Grid key={legalForm.id} item xs={12} sm={6} md={4}>
                <AccordionBuilder
                  id={legalForm.id}
                  summary={legalForm.summary}
                  details={legalForm.details}
                  sx={{ py: 2, height:"6em" }}
                />
              </Grid>
            ))}
          </Grid>
        </SectionContainer>
        <SectionContainer>
          <MuiMarkdown>{`###Financial Aid`}</MuiMarkdown>
            <Grid container spacing={2}>
              {content.financialAidForms.map((financialForm) => (
                <Grid key={financialForm.id} item xs={12} sm={6} md={4}>
                  <AccordionBuilder
                    id={financialForm.id}
                    summary={financialForm.summary}
                    details={financialForm.details}
                    sx={{ py: 2, height:"6em" }}
                  />
                </Grid>
              ))}
            </Grid>
        </SectionContainer>
        <SectionContainer>
          <MuiMarkdown>{`###Eligibility-Related Forms`}</MuiMarkdown>
          <Grid container spacing={2}>
            {content.eligibilityForms.map((eligibilityForm) => (
              <Grid key={eligibilityForm.id} item xs={12} sm={6} md={4}>
                <AccordionBuilder
                  id={eligibilityForm.id}
                  summary={eligibilityForm.summary}
                  details={eligibilityForm.details}
                  sx={{ py: 2, height:"6em" }}
                />
              </Grid>
            ))}
          </Grid>
        </SectionContainer>
      </SectionContainer>
    </>
  );
}
