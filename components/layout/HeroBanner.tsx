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
  height: '100vh',
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
            fontSize: {
              xs: '36px',
              md: '48px !important',
            },
          }}
        >
          {header}
        </Typography>
        {ctaText && ctaLink && (
          <EligibilityButton />
        )}
      </Container>
    </Box>
  );
}
