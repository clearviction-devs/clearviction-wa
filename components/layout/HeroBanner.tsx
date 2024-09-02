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
  background?: string;
  ctaText?: string;
  ctaLink?: string;
}

const heroStyles: SxProps = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'primary.contrastText',
  width: '100%',
  py: {
    xs: 0.5,
    md: 8,
  },
};

export default function HeroBanner({
  header,
  background,
  ctaText,
  ctaLink,
}: HeroBannerProps) {
  return (
    <Box
      className="hero-banner"
      sx={{
        ...heroStyles,
        backgroundImage: background,
      }}
      textAlign="left"
    >
      <Container sx={{
        maxWidth: '936px',
        width: {
          lg: '936px',
          xl: '936px',
        },
      }}
      >
        <Typography
          className="hero-title"
          variant="h1"
          sx={{
            color: 'text.light',
            pt: 40,
          }}
        >
          {header}
        </Typography>
        {ctaText && ctaLink && (
          <Box sx={{
            marginY: '24px',
          }}
          >
            <EligibilityButton />
          </Box>
        )}
      </Container>
    </Box>
  );
}
