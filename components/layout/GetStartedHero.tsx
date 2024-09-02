import { Box, Typography } from '@mui/material';
import React from 'react';

interface GetStartedHeroProps {
    image: string;
    overline: string;
    title: string;
}

export default function GetStartedHero({ image, overline, title }: GetStartedHeroProps) {
  return (
    <Box sx={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '360px',
    }}
    >
      <Box sx={{
        padding: {
          xs: '32px 24px',
          sm: '32px 64px',
          md: '32px 32px',
          lg: '32px 252px',
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        justifyContent: 'flex-end',
      }}
      >
        <Typography
          variant="overline"
          sx={{
            color: 'text.light',
            fontWeight: 700,
          }}
        >
          {overline}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: 'text.light',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
