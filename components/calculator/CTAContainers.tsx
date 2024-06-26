import { Box, Button } from '@mui/material';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';
import { StaticCalcProps } from '../../utils/calculator.props.ts';

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
        // width: '360px',
      }}
    >
      <Button variant="contained" href="/resources" sx={{ backgroundColor: theme.palette.secondary.dark }}>See more resources</Button>

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
