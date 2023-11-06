import {
  Box, Button, Paper, PaperProps, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';

interface InfoCardProps extends PaperProps {
  imgsrc?: string;
  title?: string;
  body?: string;
  ctaText?: string;
  ctaLink?: string;
  maxWidth?: number | string;
}

export default function InfoCard({
  imgsrc,
  title,
  body,
  ctaText,
  ctaLink,
  maxWidth = 200,
}: InfoCardProps) {
  return (
    <Paper
      sx={{
        maxWidth,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ImageContainer
        src={imgsrc || ''}
        height={250}
        width={300}
        style={{ marginBottom: '2px', width: '100%' }}
        alt=""
        useImageDimensions
      />
      <Typography variant="h4" id="info-title">{title}</Typography>
      <Box px={2} pb={2} textAlign="center" id="info-body">
        <MuiMarkdown>{body}</MuiMarkdown>
      </Box>
      {ctaText && ctaLink && (
        <Box pb={2} px={2} sx={{ width: '100%' }}>
          <Button
            variant="contained"
            color="primary"
            href={ctaLink}
            fullWidth
            sx={{ minWidth: '100%' }}
          >
            {ctaText}
          </Button>
        </Box>
      )}
    </Paper>
  );
}
