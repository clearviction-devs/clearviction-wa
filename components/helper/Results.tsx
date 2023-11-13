import {
  Box, Button,
  Container,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';

import Theme from '../../styles/themes/theme.tsx';
import ImageContainer from '../layout/ImageContainer.tsx';
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
  handleCloseResults: any;
}

export default function Results({ responseObject, handleCloseResults }: Props) {
  const questions = {
    'possession of marijuana': {
      'head-special-4-cont': 'Topic:',
      'offense-mari-1-cont': 'Blake eligibility',
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

  const indexStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
    borderBottom: '1px dashed #fff',
    mb: 4,
  };

  const footerParaStyle = {
    textAlign: 'left',
    pb: 3,
    color: '#fff',
    fontSize: '14px !important',
  };

  const footerBlockSectionStyle = {
    width: '50%',
    backgroundColor: Theme.palette.primary.dark,
    borderRadius: '8px',
    px: 3,
    py: 2,
  };

  const eligibleBecause = [
    'Your conviction is a misdemeanor or gross misdemeanor in Washington state.',
    'Your conviction was not a violent offense or an attempt to commit a violent offense.',
    'Your conviction was not related to operationg vehicle while intoxicated.',
    'Your conviction was not related to a sexual offense.',
    'Your offense was not considered domestic violence.',
    'You do not have any pending criminal charges.',
    'You\'re not restrained by any court order.',
    'Your conviction was not related to a sexual offense.',
  ];

  const questionListStyle = {
    border: '1px solid #d4d4d4',
    padding: '0px 20px',
    marginBottom: 0,
    borderRadius: '20px',
    width: 'fit-content',
  };

  const convictionType = responseObject['head-special-4-cont'].toLowerCase() as string;
  const printRef = React.useRef();

  return (
    <Box sx={{
      position: 'fixed',
      width: '100vw',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      overflow: 'none',
    }}
    >
      <Box
        id="download"
        ref={printRef}
        sx={{
          backgroundColor: '#fafafa',
          width: '900px',
          height: '700px',
          top: '50px',
          position: 'absolute',
          overflow: 'scroll',
          boxSizing: 'border-box',
          marginBottom: '100px',
        }}
      >
        <Button sx={{ }} onClick={() => handleCloseResults()}>Close</Button>
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
          <SectionContainer sx={{ textAlign: 'left', mb: 1, minHeight: '650px' }}>
            <Typography variant="h5" sx={{ paddingTop: 3 }}>You May Be Eligible Because</Typography>
            <Typography id="eligibleBecause" component="div">
              <List style={{
                display: 'inline-grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px 20px',
                fontSize: '18px',
              }}
              >
                {eligibleBecause.map((item) => (
                  <ListItem sx={{ display: 'list-item', listStyleType: 'disc', marginLeft: '20px' }}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Typography>
          </SectionContainer>
          {/* first page footer */}
          <Container sx={{
            display: 'flex', flexDirection: 'row', backgroundColor: '#fff', gap: '10px',
          }}
          >
            <Box sx={footerBlockSectionStyle}>
              <Typography variant="h5" sx={{ mt: 1, color: '#fff', textAlign: 'left' }}>We Can Help</Typography>
              <Typography
                variant="body2"
                sx={footerParaStyle}
              >
                Your eligibility was determined by using a calculator from Clearviction,
                a non-profit that provides tools and guidance to help people with criminal
                convictions clear their records and begin a path to a fresh start.
              </Typography>
              <Typography
                variant="body2"
                sx={footerParaStyle}
              >
                This packet was created to help you understand your eligibility, and
                navigate some of the next steps in the vacation process.
              </Typography>
            </Box>
            <Box sx={footerBlockSectionStyle}>
              <Typography
                variant="h5"
                sx={{
                  mt: 1, textAlign: 'left', pb: 2, color: '#fff',
                }}
              >
                This Document
              </Typography>
              <Box sx={indexStyle}>
                <Typography variant="body2">Packet Intro</Typography>
                <Typography variant="body2">1</Typography>
              </Box>
              <Box sx={indexStyle}>
                <Typography variant="body2">Legal Printout</Typography>
                <Typography variant="body2">2</Typography>
              </Box>
              {/* Commented out until next sprint finishes the adding these pages */}

              {/* <Box sx={indexStyle}
            >
              <Typography variant="body2">Next Steps</Typography>
              <Typography variant="body2">3</Typography>
            </Box> */}
              {/* <Box sx={indexStyle}
            >
              <Typography variant="body2">Forms</Typography>
              <Typography variant="body2">4</Typography>
            </Box> */}
            </Box>
          </Container>
        </Box>
        {/* second page */}
        <Box id="results-page" style={{ backgroundColor: '#fff', padding: 5 }}>
          {/* question and answer page */}
          <Typography variant="h4" sx={{ mt: 8, mb: 4 }}>Your Conviction May Be Eligible to Vacate!</Typography>
          <Box id="resultQuestions" sx={{ width: '90%', margin: 'auto', minHeight: '950px' }}>
            <Typography component="div">
              <List style={{
                columnCount: 2,
                gap: '10px 20px',
                fontSize: '18px',
              }}
              >
                { Object.keys(responseObject).map((item, index) => (

                  <ListItem>
                    <div style={{ display: 'flex', alignSelf: 'flex-start', marginRight: '10px' }}>
                      {index + 1}
                      .

                    </div>
                    <div style={{ display: 'inline' }}>
                      {responseObject[item] === 'None of the above' ? 'Topic' : questions[convictionType][item]}
                      <div
                        className="answer"
                        style={questionListStyle}
                      >
                        {responseObject[item] === 'None of the above' ? 'Not a special case' : responseObject[item]}
                      </div>
                    </div>

                  </ListItem>
                ))}
              </List>
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
              <ImageContainer
                src="/qr-code.svg"
                alt="clearviction qr code"
                width={100}
                height={100}
              />
            </Box>
          </Container>

        </Box>
      </Box>
    </Box>
  );
}
