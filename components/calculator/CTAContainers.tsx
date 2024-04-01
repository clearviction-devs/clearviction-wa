import HistoryIcon from '@mui/icons-material/History';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Box, Button, Link } from '@mui/material';
import React from 'react';

import { SharedCalcProps, StaticCalcProps } from '../../utils/calculator.props.ts';

function CheckAnotherConviction({ calculatorConfig }: {
    calculatorConfig: StaticCalcProps['calculatorConfig']
    }) {
  return (
    <Box id="check-another-conviction-container">
      <Link
        sx={{
          textAlign: 'center', whiteSpace: 'nowrap', display: 'flex', gap: 1,
        }}
        href={
            calculatorConfig.checkAnotherConviction.linkTo.slug.current
          }
        data-cy="check-another-conviction"
      >
        <HistoryIcon />
        {calculatorConfig.checkAnotherConviction.linkText}
      </Link>
    </Box>
  );
}

function FeedbackContainer({ calculatorConfig }: {
  calculatorConfig: StaticCalcProps['calculatorConfig']
}) {
  return (
    <Button
      data-cy="feedback-button"
      variant="contained"
      href={calculatorConfig.feedback.feedbackUrl}
      sx={{ ml: 0, mr: 0 }}
    >
      {calculatorConfig.feedback.linkText}
    </Button>
  );
}

export function ShareCalcContainer({ setOpenSharePopup, calcFirstPageUrl, justify }: {
    setOpenSharePopup: SharedCalcProps['setOpenSharePopup'],
    calcFirstPageUrl: SharedCalcProps['calcFirstPageUrl'],
    justify?: boolean,
  }) {
  return (
    <Box
      id="share-calc-container"
      sx={{
        display: 'flex',
        justifyContent: justify ? 'center' : 'flex-start',
      }}
    >
      <Link
        href={calcFirstPageUrl}
        onClick={(event) => {
          event.preventDefault();
          setOpenSharePopup(true);
        }}
        sx={{
          display: 'flex',
          gap: 1,
        }}
        data-cy="share-calc-link"
      >
        <IosShareIcon />
        Share the calculator
      </Link>
    </Box>
  );
}

export function ErrorReportContainer({ calculatorConfig }: {
    calculatorConfig: StaticCalcProps['calculatorConfig']
  }) {
  return (
    <Box
      id="error-report-container"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '.8rem',
        gap: 1,
        fontSize: '1rem',
        fontWeight: 500,
      }}
    >
      <Link
        href={calculatorConfig.errorReportingForm.errorReportingFormUrl}
        sx={{
          textAlign: 'center',
          color: 'text.primary',
          textDecoration: 'none',
          '&:hover': {
            color: 'primary.main',
            textDecoration: 'underline',
          },
        }}
        data-cy="error-report-link"
      >
        {calculatorConfig.errorReportingForm.linkText}
        {' '}
      </Link>
    </Box>
  );
}

export default function FinalPageLinksContainer({
  calculatorConfig, setOpenSharePopup, calcFirstPageUrl,
}: {
    calculatorConfig: StaticCalcProps['calculatorConfig'],
    setOpenSharePopup: SharedCalcProps['setOpenSharePopup'],
    calcFirstPageUrl: SharedCalcProps['calcFirstPageUrl'],
  }) {
  return (
    <Box
      id="finalpage-links-container"
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', md: 'row',
        },
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        mb: 4,
        gap: 2,
      }}
    >
      <FeedbackContainer calculatorConfig={calculatorConfig} />

      <Box>
        <CheckAnotherConviction calculatorConfig={calculatorConfig} />
        <ShareCalcContainer
          setOpenSharePopup={setOpenSharePopup}
          calcFirstPageUrl={calcFirstPageUrl}
        />
      </Box>
    </Box>
  );
}
