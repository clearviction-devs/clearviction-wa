import {
  Box,
  Container,
  SxProps,
  Typography,
} from '@mui/material';
import React from 'react';

import { EligibilityButton } from '../CustomButtons.tsx';

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
        width: {
          md: '936px',
        },
        height: '366px',
        padding: {
          xs: '0px 24px 32px 24px',
          sm: '0px 64px 64px 64px',
          md: '0px',
        },
        margin: {
          md: 'auto',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: '32px',
      }}
      >
        <Typography
          className="hero-title"
          variant="h1"
          sx={{
            color: 'text.light',
            width: {
              xs: 'fit-content',
              md: '936px',
            },
            lineHeight: {
              xs: '36px',
              md: '46px',
            },
          }}
        >
          {header}
        </Typography>
        {ctaText && ctaLink && (
          <Box>
            <EligibilityButton />
          </Box>
        )}
      </Container>
    </Box>
  );
}
