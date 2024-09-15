import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Box, ThemeProvider,
} from '@mui/material';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';

function DisclaimerBanner({ isHomePage }: { isHomePage: boolean }) {
  if (!isHomePage) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'secondary.dark',
          py: 1,
          px: 2,
          color: 'white',
        }}
      >
        <Box sx={{
          display: 'flex', width: { xs: '100%', md: '85%' },
        }}
        >
          <Box sx={{
            display: 'flex',
            direction: 'column',
            alignItems: 'center',
          }}
          >
            <ErrorOutlineIcon />
          </Box>
          <Box sx={{ pl: 1 }}>
            Since we are an open-sourced project, links may be broken or outdated. Last updated: 2024-04-12
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DisclaimerBanner;
