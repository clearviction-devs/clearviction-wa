import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Box, Button, ThemeProvider,
} from '@mui/material';
import React, { useState } from 'react';

import theme from '../../styles/themes/theme.tsx';

function DisclaimerBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: 'secondary.dark',
          p: 1,
          color: 'white',
        }}
      >
        <ErrorOutlineIcon />
        <Box sx={{ flex: '1', textAlign: 'center' }}>
          {/* eslint-disable-next-line max-len */}
          Since we are an open-sourced project, links may be broken or outdated. Last updated: 2024-04-12
        </Box>
        <Button
          onClick={closeBanner}
          sx={{ marginLeft: 'auto', color: 'white' }}
        >
          X
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default DisclaimerBanner;
