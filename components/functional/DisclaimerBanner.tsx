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
          bgcolor: '#419D77',
          p: 1,
          color: 'white',
        }}
      >
        <Box sx={{ flex: '1', textAlign: 'center' }}>
          {/* eslint-disable-next-line max-len */}
          Disclaimer: Please note that as an open-source project, we do not actively work on the website, and as a result, some links may be broken or outdated. We apologize for any inconvenience this may cause.
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
