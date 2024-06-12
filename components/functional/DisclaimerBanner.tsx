import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Box, ThemeProvider,
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
        onClick={closeBanner}
      >
        <Box sx={{ display: 'flex', paddingLeft: '112px' }}>
          <ErrorOutlineIcon sx={{ width: '24px', height: '32px' }} />
          <Box sx={{ paddingLeft: '8px' }}>
            {/* eslint-disable-next-line max-len */}
            Since we are an open-sourced project, links may be broken or outdated. Last updated: 2024-04-12
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DisclaimerBanner;
