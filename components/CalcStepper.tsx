import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import Router from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";

// ? do we want the stepper to start on offense-main-1-cont

const steps = ["your offense", "surrounding circumstances", "terms of offense"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

    const log = console.log;

  const handleNext = () => { 
    console.log(activeStep)
    const { pathname } = window.location;
    let prevURL;
    console.log(prevURL)
    
    const routes = ['offense-main-1-cont', 'circ-main', 'terms-main'];
    // if (prevURL !== pathname) {
    //     log('not the same')
    //     routes.forEach(item => {
    //       if (pathname.includes(item)) log('next');
    //     //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     })
    // }
   prevURL = pathname;
log(prevURL)
    // let step = sessionStorage.getItem('step') ? sessionStorage.getItem('step') : 'one'
    
    // if (pathname === "/calculator/offense-main-1-cont") {
    //   console.log("step one");
    // //   sessionStorage.setItem('step', 'one')
    //   // step = 2;
    //   // stepperEl!.textContent= 'step two'
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }
    // if (pathname === "/calculator/circ-main-1-cont") {
    //     console.log("step two");
    //     // sessionStorage.setItem('step', 'two')
    //   //   step = 3;
    //   //  stepperEl!.textContent= 'step three'
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }
    // if (pathname === "/calculator/c-main-1-cont") {
    //     console.log("step three");
    //     // sessionStorage.setItem('step', 'three')
    //   //   step = 3;
    //   //  stepperEl!.textContent= 'step three'
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }

    // if (/eligible/.test(pathname)) {
    //   // hide stepper
    //   console.log("eligible");
    //   sessionStorage.removeItem('step');
    // }
    // console.log(step)
    // change active class on stepper

  };

  // TODO connect to previous btn
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // TODO might need to connect this to restart button
  const handleReset = () => {
    setActiveStep(0);
  };

useEffect(() => {
    log('useEffect')
       handleNext();
    // Router.events.on('beforeHistoryChange', (url) => {
    //   console.log('routeComplete', url);
    // });
});

  return (
    <Box id='calc-stepper' sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}


// TODO will have issue on refresh, add mutation observer? useEffect/useState?



// routeChangeStart: fires when a route starts to change
// routeChangeComplete: fires when a route change is completed
// routeChangeError: fires when an error occurs while changing routes, or when a route load is canceled
// beforeHistoryChange: fires before changing the Router’s route history

// reference
// https://mui.com/material-ui/react-stepper/#linear
