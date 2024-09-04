import {
  Box,
  Card, CardContent, Typography,
} from '@mui/material';
import React from 'react';

interface BenefitCardProps {
    title: string;
    content: string;
    image: string;
    index: number;
}

export default function BenefitCard({
  title, content, image, index,
}: BenefitCardProps) {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column',
        sm: 'column',
        md: 'row',
      },
      maxWidth: {
        sm: '999px',
        md: '936px',
      },
      mx: 'auto',
      mb: 3,
      borderRadius: '0px',
    }}
    >
      <CardContent
        sx={{
          backgroundColor: 'primary.dark',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: {
            xs: '32px 24px',
            sm: '32px 64px',
            md: '32px 24px',
          },
          order: { md: index % 2 === 0 ? 0 : 1 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'text.light',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.light',
            mb: 0,
          }}
        >
          {content}
        </Typography>
      </CardContent>

      <Box sx={{
        width: '100%',
        height: '284px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: {
          sm: 'center',
        },
        order: { md: index % 2 === 0 ? 1 : 0 },
      }}
      />

    </Card>
  );
}
