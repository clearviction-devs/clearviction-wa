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
      maxWidth: '902px',
      mx: 'auto',
      my: 3,
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
        width: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '360px',
        },
        height: '284px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        order: { md: index % 2 === 0 ? 1 : 0 },
      }}
      />

    </Card>
  );
}
