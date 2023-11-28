import {
  Box, Button, Link, ThemeProvider,
} from '@mui/material';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import theme from '../../styles/themes/theme.tsx';

function GivingTuesdayBanner() {
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
          bgcolor: '#72C850',
          p: 1,
          color: 'white',
          position: 'absolute',
          width: '100%',
        }}
      >
        <Box sx={{ flex: '1', textAlign: 'center' }}>
          <Link
            href="/donate"
            onClick={closeBanner}
            sx={{
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            It&apos;s Giving Tuesday! Donate to a good cause
            {' '}
            <IoIosArrowForward style={{ verticalAlign: 'middle' }} />
          </Link>
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

export default GivingTuesdayBanner;
