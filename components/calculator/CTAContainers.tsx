import { Box } from '@mui/material';
import React from 'react';

import StaticCalcProps from '../../utils/calculator.props.ts';
import { CalculatorButton, TextButtonGreen } from '../CustomButtons.tsx';

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

      <TextButtonGreen
        dataCy="check-another-conviction"
        href={calculatorConfig.checkAnotherConviction.linkTo.slug.current}
      >
        {calculatorConfig.checkAnotherConviction.linkText}
      </TextButtonGreen>
    </Box>
  );
}
