import {
  Box,
  Container,
  SxProps,
  Typography,
} from '@mui/material';
import React from 'react';

import { EligibilityButton } from '../helper/CustomButtons.tsx';

interface HeroBannerProps {
  header: string;
  background: string;
  ariaLabels?: {
    ctaButton: string;
  };
}

const heroStyles: SxProps = {
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
  background,
  ariaLabels,
}: HeroBannerProps) {
  return (
    <Box className="hero-banner" sx={{ ...heroStyles, backgroundImage: background }} textAlign="left">
      <Container sx={{ width: '936px', height: '277px' }}>
        <Typography
          className="hero-title"
          variant="h1"
          sx={{
            color: 'text.light', pt: 40, fontSize: 48, lineHeight: 1,
          }}
        >
          {header}
        </Typography>
        {ariaLabels?.ctaButton && (
          <EligibilityButton ariaLabels={ariaLabels.ctaButton} />
        )}
      </Container>
    </Box>
  );
}
