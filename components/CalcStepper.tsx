import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import {Box} from "@mui/material";
import Router from 'next/router'
import * as React from 'react';
import { useEffect,useState } from 'react';

const steps = ['your offense', 'surrounding circumstances', 'terms of offense'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  // const isStepOptional = (step: number) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step: number) => {
  //   return skipped.has(step);
  // };

  const handleNext = () => {
          const pathname = window.location.pathname;
          // if (pathname !== '/calculator/head-initial-1-cont' && window.location.pathname !== '/calculator/head-start-2-cont') console.log('not hp')
          // const stepperEl = document.querySelector('.stepper')
          
          if (pathname === '/calculator/initial-misdemeanor') {
              // stepperEl!.textContent= 'step one'
              console.log('step one')
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
            if (pathname === '/calculator/offense-main-1-cont') {
              console.log('step two')
              // step = 2;
              // stepperEl!.textContent= 'step two'
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
            if (pathname === '/calculator/circ-main-1-cont') {
              console.log('step three')
              //   step = 3;
              //  stepperEl!.textContent= 'step three'
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
      
          if (/eligible/.test(pathname)) {
              // hide stepper
              console.log('eligible')
          }
          // console.log(step)
          // change active class on stepper

    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  const checkRoute = () => {
      Router.events.on("routeChangeComplete", (url)=>{
              console.log('routeComplete')
              // checkStep()
              handleNext();
            })  
            Router.events.on("beforeHistoryChange", (url)=>{
              console.log('before hisotry change')
              handleNext();
              // checkStep()
            })  
            Router.events.on("routeChangeStart", (url)=>{
              console.log('route change start')
              handleNext();
              // checkStep()
          })  
  }

  checkRoute();
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
        //   if (isStepOptional(index)) {
        //     labelProps.optional = (
        //       <Typography variant="caption">Optional</Typography>
        //     );
        //   }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}




// import ExpandMore from "@mui/icons-material/ExpandMore";
// import {Box} from "@mui/material";
// import Router from 'next/router'
// import { useEffect,useState } from 'react';

// // interface InfoDropdownProps {
// //   id: string;
// //   summary: string;
// //   details: string;
// //   sx?: SxProps;
// // }


// // TODO will have issue on refresh, add mutation observer? useEffect/useState?

// const checkStep = () => {
//     const pathname = window.location.pathname;
//     // if (pathname !== '/calculator/head-initial-1-cont' && window.location.pathname !== '/calculator/head-start-2-cont') console.log('not hp')
//     const stepperEl = document.querySelector('.stepper')
    
//     if (pathname === '/calculator/initial-misdemeanor') {
//         stepperEl!.textContent= 'step one'
//     }
//     if (pathname === '/calculator/offense-main-1-cont') {
//         step = 2;
//         stepperEl!.textContent= 'step two'
//     }
//     if (pathname === '/calculator/circ-main-1-cont') {
//         step = 3;
//        stepperEl!.textContent= 'step three'
//     }

//     if (/eligible/.test(pathname)) {
//         // hide stepper
//         console.log('eligible')
//     }
//     console.log(step)
//     // change active class on stepper
// }

// let step = 1;

// export default function CalcStepper() {
//     Router.events.on("routeChangeComplete", (url)=>{
//         console.log('routeComplete')
//         checkStep()
//     })  
//     Router.events.on("beforeHistoryChange", (url)=>{
//         console.log('before hisotry change')
//         checkStep()
//     })  
//     Router.events.on("routeChangeStart", (url)=>{
//         console.log('route change start')
//         checkStep()
//     })  

//   return (
//     <Box className='stepper' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
//         <div className='dot'>dot
//             <div className="step-one-text" style={{ display: 'none' }}>your offenses</div>
//         </div>
//         <div className="line">line</div>
//         <div className='dot'>
//             dot
//             <div className="step-two-text" style={{ display: 'none' }}>surrounding circumstances</div>
//         </div>
//         <div className="line">line</div>
//         <div className='dot'>
//             dot
//             <div className="step-three-text" style={{ display: 'none' }}>terms of offense</div>
//         </div>
//     </Box>
//   );
// }

// routeChangeStart: fires when a route starts to change
// routeChangeComplete: fires when a route change is completed
// routeChangeError: fires when an error occurs while changing routes, or when a route load is canceled
// beforeHistoryChange: fires before changing the Router’s route history

// reference
// https://mui.com/material-ui/react-stepper/#linear