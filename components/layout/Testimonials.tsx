import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {
  Box, Card, CardContent, SxProps, Theme, Typography, useTheme,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

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

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '609px' },
        p: 2,
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: 2,
        m: 2,
        ...props.sx,
      }}
    >
      <CardContent sx={{ flex: '1 0 auto' }}>
        <FormatQuoteIcon sx={{ transform: 'scaleX(-1)' }} />
        <Typography
          variant="body1"
          sx={{
            lineHeight: 2, letterSpacing: 0.5, mt: 3.125, mb: 2, mx: 2,
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
        mb: 2,
      }}
      >
        <Box sx={{
          width: 96.779, height: 87.467, bgcolor: 'white', borderRadius: '50%', border: 2, overflow: 'hidden',
        }}
        >
          <Image src={imageSrc} alt={name} width={96.81} height={97.568} />
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
  );
}
