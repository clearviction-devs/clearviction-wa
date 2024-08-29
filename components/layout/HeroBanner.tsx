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
};

export default function HeroBanner({
  header,
  background,
  ctaText,
  ctaLink,
}: HeroBannerProps) {
  const isHomePage = header === 'Check if your WA state conviction can be vacated by answering a few questions.';
  return (
    <Box
      className="hero-banner"
      sx={{
        ...heroStyles,
        backgroundImage: background,
        padding: {
          xs: isHomePage ? '140px 24px 40px 24px' : '40px 24px',
          sm: isHomePage ? '300px 64px 40px 64px' : '200px 64px 40px 64px',

        },
      }}
      textAlign="left"
    >
      <Container
        disableGutters
        sx={{
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
            lineHeight: {
              sm: '46px',
              md: '56px',
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
