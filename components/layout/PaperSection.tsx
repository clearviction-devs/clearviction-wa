import {
  Button, Paper, PaperProps, Typography,
} from '@mui/material';
import React from 'react';

import { AriaLabels } from '../../content/content.types.ts';

interface PaperSectionProps extends PaperProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  ariaLabels?: AriaLabels;
}

export default function PaperSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  children,
  ariaLabels,
  ...props
}: PaperSectionProps) {
  return (
    <Paper sx={{ textAlign: 'center', p: 4 }} {...props}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          {subtitle}
        </Typography>
      )}
      {children}
      {ctaText && ctaLink && (
        <Button href={ctaLink} variant="contained" sx={{ mt: 4 }} aria-label={ariaLabels?.ctaButton}>
          {ctaText}
        </Button>
      )}
    </Paper>
  );
}
