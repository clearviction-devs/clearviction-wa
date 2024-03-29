import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import { useEffect } from 'react';

import theme from '../../styles/themes/theme.tsx';

const defaultSteps = [
  'your offense',
  'surrounding circumstances',
  'terms of offense',
].map((step) => step.toUpperCase());

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isProPath, setIsProPath] = React.useState(false);
  const [isMisSpecialCase, setIsMisSpecialCase] = React.useState(false);

  const steps = isProPath ? defaultSteps.slice(0, 2) : defaultSteps;

  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    const { pathname } = window.location;

    if (pathname.includes('classcpro') || pathname.includes('classbpro')) setIsProPath(true);

    if (pathname.includes('m-offense-pro') || pathname.includes('m-offense-mari') || pathname.includes('m-offense-fish')) setIsMisSpecialCase(true);

    if (pathname.includes('m-offense-main-1-cont')) {
      setIsMisSpecialCase(false);
    }

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

  return (
    <Box id="calc-stepper" sx={{ width: '100%', marginBottom: '2rem' }}>
      <Stepper activeStep={activeStep}>
        {!isMisSpecialCase && steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          const isActiveStep = steps[activeStep] === label;

          if (matchesXS) {
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  {isActiveStep ? label : null}
                </StepLabel>
              </Step>
            );
          } return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
