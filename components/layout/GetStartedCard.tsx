import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { GetStartedStep } from '../../content/content.types.ts';
import theme from '../../styles/themes/theme.tsx';
import { DarkButton } from '../helper/CustomButtons.tsx';

export default function GetStartedCard({
  title, overline, body, ctaText, ctaLink,
}: GetStartedStep) {
  return (
    <Card sx={{
      backgroundColor: theme.palette.secondary.light,
      height: '404px',
      width: '312px',
      padding: '32px 24px',
    }}
    >
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
      }}
      >
        <Box sx={{
          height: '260px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                font: theme.typography.overline.fontFamily,
                fontWeight: 700,
              }}
            >
              {overline}
            </Typography>
            <Typography variant="h3">
              {title}
            </Typography>
          </Box>
          <Typography variant="body2">
            {body}
          </Typography>
        </Box>
        <Box sx={{
          height: '104px',
          padding: '32px 0',
        }}
        >
          <DarkButton
            href={ctaLink}
            text={ctaText}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
