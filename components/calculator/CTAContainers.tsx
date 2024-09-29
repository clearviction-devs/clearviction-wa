import { Box, Button } from '@mui/material';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';
import StaticCalcProps from '../../utils/calculator.props.ts';
import { CalculatorButton } from '../CustomButtons.tsx';

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
        my: '24px',
        gap: '16px',
      }}
    >
      <CalculatorButton
        href="/see-more-resources"
        hasArrow
        dataCy="see-more-resources"
      >
        See more resources
        {' '}
      </CalculatorButton>

      <Button
        data-cy="check-another-conviction"
        variant="text"
        href={calculatorConfig.checkAnotherConviction.linkTo.slug.current}
        sx={{ backgroundColor: 'white', color: theme.palette.secondary.dark, textDecoration: 'underline' }}
      >
        {calculatorConfig.checkAnotherConviction.linkText}
      </Button>
    </Box>
  );
}
