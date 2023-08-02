import {
  Box, Button,
  Container,
  Typography,
} from '@mui/material';
import Image from 'next/image';
// import React, { useState } from 'react';
import React from 'react';

import Theme from '../../styles/themes/theme.tsx';
// import {ImageContainer} from '../layout/ImageContainer.jsx';
import SectionContainer from '../layout/SectionContainer.tsx';

type Answers = {
    [key: string]: string;
}
type QuestionType = {
  [key: string]: Answers,
}

type Responses = {
    [key: string]: string;
}

interface Props {
  responseObject: Responses;
  handleClose: any;
}

export default function Results({ responseObject, handleClose }: Props) {
  const questions = {
    'possession of marijuana': {
      'head-special-4-cont': 'Topic:',
      'offense-main-2-cont': 'Was the offense a violent offense or the attempt to commit a violent offense?',
      'offense-main-3-cont': 'Was the offense a violation related to the operation of a vehicle while intoxicated?',
      'offense-main-4-cont': 'Was this a sex related offense? Such as: obscenity, pornography, sexual exploitation of children?',
      'offense-main-5-cont': 'Was the offense considered a prior offense of drug and alcohol violations?',
      'offense-dv-1-cont': 'Was the offense considered domestic violence against a family/ household member or spouse/ partner?',
      'circ-main-2-cont': 'Do you have any pending charges in any court in WA, another state, or in any federal court?',
      'circ-main-3-cont': 'In the last 3 years, have you been convicted of a new crime in WA or any other state?',
      'circ-main-4-cont': 'Are you currently restrained by a domestic violence protection order, a no-contact order, an anti-harassment order, or a civil restraining order which restrains one party from contacting the other party?',
      'circ-main-5-cont': 'In the last 5 years, have you violated a previous restraining order?',
      'terms-main-2-cont': 'Have you completed the terms of the sentence for your offense?',
      'terms-main-3-cont': 'Have 3 years passed since completing the terms of your sentence including financial obligations?',
    },
    prostitution: {
      'head-special-4-cont': 'Topic:',
      'offense-pro-2-cont': 'Was the conviction a result of being a victim of sex trafficking, prostitution, commercial sexual abuse of a minor, sexual assault, or domestic violence?',
      'offense-pro-3-cont': 'Has the crime victim penalty assessment, RCW 7.68.035, been paid in full?',
      'offense-pro-4-cont': 'If applicable, has restitution owed to any victim, excluding restitution owed to any insurance provider under Title 48 RCW, been paid in full?',
      'offense-pro-5-cont': 'Do you have charges pending in Washington state or any other state, or in any federal court for any crime other than prostitution?',
      'offense-pro-6-cont': 'Have you been convicted of a new crime in Washington, another state, federal court, or a tribal court in the last 3 years?',
      'offense-dv-1-cont': 'Was the offense considered domestic violence against a family/ household member or spouse/ partner?',
      'offense-dv-2-cont': 'Have you had 2 or more domestic violence convictions each from different incidents?',
      'offense-dv-3-cont': 'Have 5 or more years passed since you fulfilled all sentencing conditions for this conviction?',
      'offense-main-2-cont': 'Was the offense a violent offense or the attempt to commit a violent offense?',
      'offense-main-3-cont': 'Was the offense a violation related to the operation of a vehicle while intoxicated?',
      'offense-main-4-cont': 'Was this a sex related offense? Such as: obscenity, pornography, sexual exploitation of children?',
      'offense-main-5-cont': 'Was the offense considered a prior offense of drug and alcohol violations?',
      'offense-main-6-cont': 'Did you have another alcohol or drug violation within 10 years of the date of arrest for the previous offense?',
      'offense-main-7-cont': 'Has it been 10 years or more since the date of the arrest for the prior offense?',
      'circ-main-2-cont': 'Do you have any pending charges in any court in WA, another state, or in any federal court?',
      'circ-main-3-cont': 'In the last 3 years, have you been convicted of a new crime in WA or any other state?',
      'circ-main-4-cont': 'Are you currently restrained by a domestic violence protection order, a no-contact order, an anti-harassment order, or a civil restraining order which restrains one party from contacting the other party?',
      'circ-main-5-cont': 'In the last 5 years, have you violated a previous restraining order?',
      'terms-main-2-cont': 'Have you completed the terms of the sentence for your offense?',
      'terms-main-3-cont': 'Have 3 years passed since completing the terms of your sentence including financial obligations?',
    },
    'fishing violation': {
      'head-special-4-cont': 'Topic:',
      'circ-main-2-cont': 'Do you have any pending charges in any court in WA, another state, or in any federal court?',
      'circ-main-3-cont': 'In the last 3 years, have you been convicted of a new crime in WA or any other state?',
      'circ-main-4-cont': 'Are you currently restrained by a domestic violence protection order, a no-contact order, an anti-harassment order, or a civil restraining order which restrains one party from contacting the other party?',
      'circ-main-5-cont': 'In the last 5 years, have you violated a previous restraining order?',
      'offense-dv-1-cont': 'Was the offense considered domestic violence against a family / household member or spouse / partner?',
      'offense-dv-2-cont': 'Have you had 2 or more domestic violence convictions each from different incidents?',
      'offense-dv-3-cont': 'Have 5 or more years passed since you fulfilled all sentencing conditions for this conviction?',
      'offense-fish-2-cont': 'Are you a member of a tribe?',
      'offense-fish-3-cont': 'Did you (or your family member) receive a fishing related conviction while exercising a treaty right?',
      'offense-fish-4-cont': 'Was it before January 1st, 1975?',
      'offense-fish-5-cont': 'Did your tribe (or your family member\'s tribe) exercise fishing rights at the location where it occurred?',
      'offense-main-2-cont': 'Was the offense a violent offense or the attempt to commit a violent offense?',
      'offense-main-3-cont': 'Was the offense a violation related to the operation of a vehicle while intoxicated?',
      'offense-main-4-cont': 'Was this a sex related offense? Such as: obscenity, pornography, sexual exploitation of children?',
      'offense-main-5-cont': 'Was the offense considered a prior offense of drug and alcohol violations?',
      'terms-main-2-cont': 'Have you completed the terms of the sentence for your offense?',
      'terms-main-3-cont': 'Have 3 years passed since completing the terms of your sentence including financial obligations?',
    },
    'none of the above': {
      'head-special-4-cont': 'Topic:',
      'circ-main-2-cont': 'Do you have any pending charges in any court in WA, another state, or in any federal court?',
      'circ-main-3-cont': 'In the last 3 years, have you been convicted of a new crime in WA or any other state?',
      'circ-main-4-cont': 'Are you currently restrained by a domestic violence protection order, a no-contact order, an anti-harassment order, or a civil restraining order which restrains one party from contacting the other party?',
      'circ-main-5-cont': 'In the last 5 years, have you violated a previous restraining order?',
      'offense-dv-1-cont': 'Was the offense considered domestic violence against a family / household member or spouse / partner?',
      'offense-dv-2-cont': 'Have you had 2 or more domestic violence convictions each from different incidents?',
      'offense-dv-3-cont': 'Have 5 or more years passed since you fulfilled all sentencing conditions for this conviction?',
      'offense-main-2-cont': 'Was the offense a violent offense or the attempt to commit a violent offense?',
      'offense-main-3-cont': 'Was the offense a violation related to the operation of a vehicle while intoxicated?',
      'offense-main-4-cont': 'Was this a sex related offense? Such as: obscenity, pornography, sexual exploitation of children?',
      'offense-main-5-cont': 'Was the offense considered a prior offense of drug and alcohol violations?',
      'offense-main-6-cont': 'Did you have another alcohol or drug violation within 10 years of the date of arrest for the previous offense?',
      'offense-main-7-cont': 'Has it been 10 years or more since the date of the arrest for the prior offense?',
      'terms-main-2-cont': 'Have you completed the terms of the sentence for your offense?',
      'terms-main-3-cont': 'Have 3 years passed since completing the terms of your sentence including financial obligations?',
    },
  } as QuestionType;

  const convictionType = responseObject['head-special-4-cont'].toLowerCase() as string;
  const printRef = React.useRef();

  return (
    <Box
      id="download"
      ref={printRef}
      sx={{
        backgroundColor: '#fafafa',
        width: '100%',
        height: '100%',
        top: '195px',
        position: 'absolute',
        overflow: 'scroll',
        left: 0,
        boxSizing: 'border-box',
        marginBottom: '100px',
        zIndex: 2,
      }}
    >
      <Button onClick={() => handleClose()}>Close</Button>
      {/* first page */}
      <Box id="firstPage">
        {/* first page header */}
        <SectionContainer sx={{
          backgroundColor: Theme.palette.primary.dark, textAlign: 'left', display: 'flex', p: 1,
        }}
        >
          <Box>
            <Typography variant="h3" sx={{ display: 'block', color: 'white', mb: 2 }}>Your Conviction May Be Eligible to Vacate!</Typography>
            <Typography variant="body1" sx={{ color: 'white', paddingBottom: 2 }}>
              According to your responses to the Clearviction eligibility
              calculator, your Washington state conviction may be eligible to vacate.
            </Typography>
          </Box>
          <Box sx={{ minWidth: '40%' }} />
        </SectionContainer>
        {/* first page middle section */}
        <SectionContainer sx={{ textAlign: 'left', mb: 1 }}>
          <Typography variant="h5" sx={{ paddingTop: 3 }}>You May Be Eligible Because</Typography>
          <Typography id="eligibleBecause" component="div">
            <ul style={{
              display: 'inline-grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '40px', gridRowGap: '8px', fontSize: '16px',
            }}
            >
              <li>Your conviction is a misdemeanor or gross misdemeanor in Washington state.</li>
              <li>
                Your conviction was not a violent offense or an attempt to commit a violent offense.
              </li>
              <li>Your conviction was not related to operationg vehicle while intoxicated.</li>
              <li>Your conviction was not related to a sexual offense.</li>
              <li>Your offense was not considered domestic violence.</li>
              <li>You do not have any pending criminal charges</li>
              <li>You're not restrained by any court order.</li>
              <li>Your conviction was not related to a sexual offense.</li>
            </ul>
          </Typography>
        </SectionContainer>
        {/* first page footer */}
        <Container sx={{
          display: 'flex', flexDirection: 'row', backgroundColor: '#fff', gap: '10px',
        }}
        >
          <Box sx={{
            width: '50%', backgroundColor: Theme.palette.primary.dark, borderRadius: '8px', px: 3, py: 2,
          }}
          >
            <Typography variant="h5" sx={{ mt: 1, color: '#fff', textAlign: 'left' }}>We Can Help</Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'left', pb: 3, color: '#fff', fontSize: '14px !important',
              }}
            >
              Your eligibility was determined by using a calculator from Clearviction,
              a non-profit that provides tools and guidance to help people with criminal
              convictions clear their records and begin a path to a fresh start.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'left', pb: 1, color: '#fff', fontSize: '14px !important',
              }}
            >
              This packet was created to help you understand your eligibility, and
              navigate some of the next steps in the vacation process.
            </Typography>
          </Box>
          <Box sx={{
            width: '50%', backgroundColor: Theme.palette.primary.dark, borderRadius: '8px', px: 3, py: 2,
          }}
          >
            <Typography
              variant="h5"
              sx={{
                mt: 1, textAlign: 'left', pb: 2, color: '#fff',
              }}
            >
              This Document
            </Typography>
            <Box sx={{
              display: 'flex', justifyContent: 'space-between', color: '#fff', borderBottom: '1px dashed #fff', mb: 3,
            }}
            >
              <Typography variant="body2">Packet Intro</Typography>
              <Typography variant="body2">1</Typography>
            </Box>
            <Box sx={{
              display: 'flex', justifyContent: 'space-between', color: '#fff', borderBottom: '1px dashed #fff', mb: 4,
            }}
            >
              <Typography variant="body2">Legal Printout</Typography>
              <Typography variant="body2">2</Typography>
            </Box>
            <Box sx={{
              display: 'flex', justifyContent: 'space-between', color: '#fff', borderBottom: '1px dashed #fff', mb: 4,
            }}
            >
              <Typography variant="body2">Next Steps</Typography>
              <Typography variant="body2">3</Typography>
            </Box>
            <Box sx={{
              display: 'flex', justifyContent: 'space-between', color: '#fff', borderBottom: '1px dashed #fff', mb: 4,
            }}
            >
              <Typography variant="body2">Forms</Typography>
              <Typography variant="body2">4</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* second page */}
      <Box id="results-page" style={{ backgroundColor: '#fff', padding: 5 }}>
        {/* question and answer page */}
        <Typography variant="h4" sx={{ mt: 8, mb: 4 }}>Your Conviction May Be Eligible to Vacate!</Typography>
        <Box id="resultQuestions" sx={{ width: '90%', margin: 'auto' }}>
          <Typography component="div">
            <ol style={{
              columnCount: 2,
              textAlign: 'left',
              gap: '10px 40px',
              fontSize: '16px',
            }}
            >
              { Object.keys(responseObject).map((item) => (
                <li style={{ marginBottom: 4 }}>
                  <div>{questions[convictionType][item]}</div>
                  <div
                    className="answer"
                    style={{
                      border: '1px solid #d4d4d4', padding: '0px 20px', marginBottom: 0, borderRadius: '20px', width: 'fit-content',
                    }}
                  >
                    {responseObject[item]}
                  </div>

                </li>
              ))}
            </ol>
          </Typography>
        </Box>
        {/* footer */}
        <Container style={{
          display: 'flex', backgroundColor: '#fafafa', borderRadius: '10px', color: '#000', justifyContent: 'center', alignItems: 'center', height: '115px',
        }}
        >
          <Typography variant="body2" sx={{ textAlign: 'left', width: '80%' }}>
            Potential eligibility determined by Clearviction, a non-profit
            that provides tools and guidance to help people with criminal
            convictions clear their records and begin a path to a fresh start.
          </Typography>
          <Box sx={{ display: 'flex' }}>
            {/* wesite https://www.qrcode-monkey.com/ */}
            {/* use utm param to monitor who comes from qr */}
            {/* needs to be set up in GA4 generate the url and re generate qr with the params */}
            <Image
              alt="clearviction qr code"
              src="/qr-code.svg"
              width={100}
              height={100}
            />
            {/* add image container once it's merged */}
            {/* <ImageContainer /> */}
          </Box>
        </Container>

      </Box>
    </Box>
  );
}