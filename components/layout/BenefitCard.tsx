import {
  Box,
  Card, CardContent, Typography,
} from '@mui/material';
import React from 'react';

interface BenefitCardProps {
    title: string;
    content: string;
    image: string;
}

export default function BenefitCard({
  title, content, image,
}: BenefitCardProps) {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column',
        sm: 'column',
        md: 'row',
      },
      maxWidth: '902px',
      mx: 'auto',
      my: 3,
    }}
    >
      <CardContent
        sx={{
          backgroundColor: 'primary.dark',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: '24px',
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
        width: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '360px',
        },
        height: '284px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
      }}
      />

    </Card>
  );
}
