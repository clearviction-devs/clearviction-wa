import {
  Box,
  Container,
  SxProps,
  Typography,
} from '@mui/material';
import React from 'react';

import EligibilityButton from '../helper/EligibilityButton.tsx';

interface HeroBannerProps {
  header: string;
  overrideStyles?: SxProps;
}

const heroStyles: SxProps = {
  backgroundImage: 'url(/illustrations/h1-home-desktop.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'primary.contrastText',
  width: '100%',
  height: '100vh',
  py: {
    xs: 0.5,
    md: 8,
  },
};

export default function HeroBanner({
  header,
  overrideStyles,
}: HeroBannerProps) {
  return (
    <Box className="hero-banner" sx={overrideStyles || heroStyles} textAlign="left">
      <Container>
        <Typography
          className="hero-title"
          variant="h1"
          sx={{
            display: 'flex', color: 'text.light', justifyContent: 'center', paddingTop: '320px', paddingBottom: '32px',
          }}
        >
          {header}
        </Typography>
        <EligibilityButton />
      </Container>
    </Box>
  );
}
