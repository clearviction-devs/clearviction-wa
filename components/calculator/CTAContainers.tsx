import { Box, Link } from '@mui/material';
import React from 'react';

import { StaticCalcProps } from '../../utils/calculator.props.ts';

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
        {calculatorConfig.checkAnotherConviction.linkText}
      </Link>
    </Box>
  );
}

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
        flexDirection: {
          xs: 'column', md: 'row',
        },
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        mb: 4,
      }}
    >
      <CheckAnotherConviction calculatorConfig={calculatorConfig} />
    </Box>
  );
}
