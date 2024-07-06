import {
  Box, Container, Step, StepConnector, Stepper, styled,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';

import theme from '../../styles/themes/theme.tsx';
import StaticCalcProps from '../../utils/calculator.props.ts';

const CustomConnector = styled(StepConnector)(() => ({
  '& .MuiStepConnector-line': {
    display: 'none',
  },
}));

const defaultSteps = [
  'Your offense',
  'Surrounding circumstances',
  'Terms of offense',
];

function CustomHorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isProPath, setIsProPath] = React.useState(false);
  const [isMisSpecialCase, setIsMisSpecialCase] = React.useState(false);
  const [isEndPage, setIsEndPage] = React.useState(false);

  const steps = isProPath ? defaultSteps.slice(0, 2) : defaultSteps;

  const handleNext = () => {
    const { pathname } = window.location;

    if (pathname.includes('classcpro') || pathname.includes('classbpro')) setIsProPath(true);

    if (pathname.includes('m-offense-pro') || pathname.includes('m-offense-mari') || pathname.includes('m-offense-fish')) setIsMisSpecialCase(true);

    if (pathname.includes('m-offense-main-1-cont')) setIsMisSpecialCase(false);

    if (pathname.includes('eligible') || pathname.includes('ineligible')) setIsEndPage(true);

    type Items = {
      [key: string]: number;
    };

    const routes: Items = {
      offense: 0,
      circ: 1,
      terms: 2,
    };

    Object.keys(routes).forEach((key) => {
      if (pathname.includes(key)) setActiveStep(routes[key]);
    });
  };

  useEffect(() => {
    handleNext();
  });

  const getBackgroundColor = (label: string) => {
    const isActiveStep = steps[activeStep] === label;
    const isCompleted = steps.indexOf(label) < activeStep;

    return (isActiveStep || isCompleted)
      ? theme.palette.secondary.dark : theme.palette.secondary.main;
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto', maxWidth: '724px' }}>

      <Stepper alternativeLabel activeStep={activeStep} connector={<CustomConnector />}>
        {!isMisSpecialCase && steps.map((label) => {
          const stepProps: { completed?: boolean } = {};

          const isFinalStep = steps.indexOf(label) === steps.length - 1;

          const stepSxProps = {
            height: 4,
            borderRadius: 50,
            backgroundColor: getBackgroundColor(label),
            width: '100%',
          };

          return (
            <Box
              key={label}
              sx={{
                display: 'flex',
                width: '100%',
                height: 4,
                borderRadius: 50,
                margin: 1,
              }}
            >
              {/* Displays the steps that are NOT the final step, including the end pages */}
              <Step
                {...stepProps}
                sx={{
                  ...stepSxProps,
                  display: (!isEndPage && isFinalStep) ? 'none' : 'block',
                }}
              />

              {/* Displays just the final step so that it can have special styling */}
              <Step
                {...stepProps}
                sx={{
                  ...stepSxProps,
                  display: (!isEndPage && isFinalStep) ? 'block' : 'none',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <Box sx={{
                display: (!isEndPage && isFinalStep) ? 'block' : 'none',
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                backgroundColor: theme.palette.secondary.main,
                width: '15%',
              }}
              />

            </Box>
          );
        })}
      </Stepper>
      <Typography variant="caption" sx={{ color: theme.palette.secondary.dark, ml: 1 }}>
        {!isEndPage && steps[activeStep]}
      </Typography>

    </Box>
  );
}

export default function CalcHeader({ page }:
    { page: StaticCalcProps['page']
    }) {
  const isPageIncludedInStepper = () => {
    const excludedPageSlugs = ['start', 'head'];
    const isPartOfHead = excludedPageSlugs.some((slug) => page.slug.includes(slug));
    return !isPartOfHead;
  };

  return (
    <Container
      id="calc-head-container"
      sx={{
        marginTop: {
          xs: '40px',
          md: '80px',
        },
        px: 0,
        marginBottom: '32px',
        color: theme.palette.secondary.dark,
      }}
    >

      {isPageIncludedInStepper() && <CustomHorizontalStepper />}

    </Container>
  );
}
