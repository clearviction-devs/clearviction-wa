import {
  Box,
  SxProps,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface HeroBannerProps {
  header: string;
  overrideStyles?: SxProps;
}

const heroStyles: SxProps = {
  backgroundColor: 'primary.dark',
  color: 'primary.contrastText',
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
      <Typography className="hero-title" variant="h1" sx={{ display: 'block' }}>
        {header}
      </Typography>
      <Image
        src="/illustrations/h1-home-desktop.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="h1 home image"
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  );
}
