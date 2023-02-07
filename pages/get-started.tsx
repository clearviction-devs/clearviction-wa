import { Box,Grid } from '@mui/material';
import Typography from '@mui/material';
import MuiMarkdown from 'mui-markdown';

import AccordionBuilder from '../components/AccordionBuilder';
import { FactCard } from '../components/FactCard';
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
      <SectionContainer id='step-1'>
        <MuiMarkdown>{`##Step 1: Documents`}</MuiMarkdown>
        <MuiMarkdown>
            {`First let’s gather the documents you will need to determine your eligibility. Before using the calculator, gather all the documentation you have regarding your conviction.`}
          </MuiMarkdown>
        <SectionContainer>
            <MuiMarkdown>{`**You\'ll need to know:**`}</MuiMarkdown>
            <Grid container spacing={8}>
              {content.needToKnowFacts.map((fact) => (
                <FactCard 
                  key={fact.id}
                  xs={12}
                  md={4}
                  body={fact.details}
                  >
                    {fact.icon}
                </FactCard>
              ))}
            </Grid>
        </SectionContainer>
        <MuiMarkdown>{`###CHRI (Recommended)`}</MuiMarkdown>
        <MuiMarkdown>
            {`A copy of your **Criminal History Record Information (CHRI)** would be very helpful in the vacation process and might be required in some cases.`}
          </MuiMarkdown>
        <MuiMarkdown>{`**To get a copy of your CHRI, you have two options:**`}</MuiMarkdown>
        <Grid container spacing={2}>
              {content.CHRIMethods.map((method) => (
                <Grid key={method.id} item xs={12} sm={6} md={6}>
                  <AccordionBuilder
                    id={method.id}
                    summary={method.summary}
                    details={method.details}
                    sx={{ py: 2, height:"6em" }}
                  />
                </Grid>
              ))}
            </Grid>
      </SectionContainer>
      <SectionContainer id='step-2'>
        <MuiMarkdown>{`##Step 2: Eligibility`}</MuiMarkdown>
        <MuiMarkdown>
            {`Once you have your records and forms gathered, use our eligibilty calculator to determine whether you are eligible to vacate your misdemeanor conviction. It is expected to take 10-30 minutes.`}
          </MuiMarkdown>
      </SectionContainer>
      <SectionContainer id='step-3'>
        <MuiMarkdown>{`##Step 3: File with Court`}</MuiMarkdown>
        <MuiMarkdown>
            {`Next, submit a request to have your conviction vacated (refer to [court directory](https://www.courts.wa.gov/court_dir/?fa=court_dir.county)). Please note that the request to vacate is up to the discretion of the judge and may be denied for a variety of reasons.\n\n**Common reasons requests to vacate may be denied:**`}
        </MuiMarkdown>
        <Grid container spacing={8}>
            {content.rejectionReasons.map((fact) => (
                <FactCard 
                  key={fact.id}
                  xs={12}
                  md={4}
                  body={fact.details}
                />
              ))}
        </Grid>
      </SectionContainer>
      <SectionContainer id='step-4'>
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
