import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Box, ThemeProvider,
} from '@mui/material';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';

function DisclaimerBanner() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'secondary.dark',
          py: 1,
          px: 14,
          color: 'white',
        }}
      >
        <Box sx={{ display: 'flex', px: 2 }}>
          <ErrorOutlineIcon sx={{
            // width: '24px',
            // height: '32px',
            // pb: 1,
          }}
          />
          <Box sx={{ pl: 1 }}>
            {/* eslint-disable-next-line max-len */}
            Since we are an open-sourced project, links may be broken or outdated. Last updated: 2024-04-12
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DisclaimerBanner;
