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

  const steps = isProPath ? defaultSteps.slice(0, 2) : defaultSteps;

  const handleNext = () => {
    const { pathname } = window.location;

    if (pathname.includes('classcpro') || pathname.includes('classbpro')) setIsProPath(true);

    if (pathname.includes('m-offense-pro') || pathname.includes('m-offense-mari') || pathname.includes('m-offense-fish')) setIsMisSpecialCase(true);

    if (pathname.includes('m-offense-main-1-cont')) setIsMisSpecialCase(false);

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
    // const isFinalStep = steps.indexOf(label) === steps.length - 1;

    // if (isFinalStep) {
    //   return 'transparent';
    // }

    return (isActiveStep || isCompleted)
      ? theme.palette.secondary.dark : theme.palette.secondary.main;
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto', maxWidth: '724px' }}>

      <Stepper alternativeLabel activeStep={activeStep} connector={<CustomConnector />}>
        {!isMisSpecialCase && steps.map((label) => {
          const stepProps: { completed?: boolean } = {};

          return (
            <Step
              key={label}
              {...stepProps}
              sx={{
                height: 4,
                borderRadius: 50,
                margin: 1,
                backgroundColor: getBackgroundColor(label),
              }}
            />
          );
        })}
      </Stepper>
      <Typography variant="caption" sx={{ color: theme.palette.secondary.dark, ml: 1 }}>
        {steps[activeStep]}
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
    const { isFinalPage } = page;
    return !(isFinalPage || isPartOfHead);
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
