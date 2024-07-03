import { Box, Button } from '@mui/material';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';
import StaticCalcProps from '../../utils/calculator.props.ts';
import { CalculatorButton } from '../helper/EligibilityButton.tsx';

export default function FinalPageLinksContainer({
  calculatorConfig,
}: {
    calculatorConfig: StaticCalcProps['calculatorConfig'],
  }) {
  return (
    <Box
      id="finalpage-links-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '360px',
        mt: '24px',
        mb: '24px',
      }}
    >
      {/* invalid placeholder url */}
      <CalculatorButton href="/file-with-the-court" hasArrow>See more resources </CalculatorButton>

      <Button
        variant="text"
        href={calculatorConfig.checkAnotherConviction.linkTo.slug.current}
        sx={{ backgroundColor: 'white', color: theme.palette.secondary.dark, textDecoration: 'underline' }}
      >
        {calculatorConfig.checkAnotherConviction.linkText}
      </Button>
    </Box>
  );
}
