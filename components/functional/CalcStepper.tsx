import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import { useEffect } from 'react';

import theme from '../../styles/themes/theme.tsx';

const steps = [
  'your offense',
  'surrounding circumstances',
  'terms of offense',
].map((step) => step.toUpperCase());

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    const { pathname } = window.location;

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
    <Box id="calc-stepper" sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
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
