import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {
  Box, Card, CardContent, SxProps, Theme, Typography, useTheme,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';
import SectionContainer from './SectionContainer.tsx';

interface TestimonialCardProps {
    testimonial: string;
    name: string;
    cvrole: string;
    imageSrc: string;
    sx?: SxProps<Theme>;
  }

export default function Testimonials({
  testimonial, name, cvrole, imageSrc, ...props
}: TestimonialCardProps) {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

  // Determine size based on the breakpoint
  const size = isMdScreen ? 96.779 : 66.201;

  return (
    <SectionContainer
      id="testimonies"
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        mb: 2,
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '15.438rem', sm: '20.438rem', md: '38.063rem' },
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderRadius: 1.375,
          m: 1,
          ...props.sx,
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <FormatQuoteIcon sx={{ transform: 'scaleX(-1)' }} />
          <Typography
            variant="body1"
            sx={{
              lineHeight: 2, letterSpacing: 0.5, mt: 3.125, mb: 2, mx: 2.25,
            }}
          >
            {testimonial}
          </Typography>
        </CardContent>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
          mx: 2,
          mb: 3,
          mt: 3,
        }}
        >
          <Box sx={{
            width: { md: 96.779 }, height: { md: 96.779 }, bgcolor: 'white', borderRadius: '50%', border: 2, overflow: 'hidden', position: 'relative', minHeight: '3.75rem', minWidth: '3.75rem',
          }}
          >
            <ImageContainer
              src={imageSrc}
              alt={name}
              style={{
                objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              }}
              width={size}
              height={size}
              sizes="(max-width: 6.049rem) 100vw, 33vw"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ lineHeight: '1.5', letterSpacing: 0.15 }}>
              {name}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'normal', lineHeight: '1.5', letterSpacing: 0.15 }}>
              {cvrole}
            </Typography>
          </Box>
        </Box>
      </Card>
    </SectionContainer>
  );
}
