import {
  Button, Paper, PaperProps, Typography,
} from '@mui/material';
import React from 'react';

import { AriaLabels } from '../../content/content.types.ts';

interface PaperSectionProps extends PaperProps {
  /**
   * String value to make element id's unique, add if PaperSection has title and/or subtitle props
   */
  idSelector?: string;
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
  idSelector,
  ...props
}: PaperSectionProps) {
  return (
    <Paper sx={{ textAlign: 'center', p: 4 }} {...props}>
      <Typography variant="h2" sx={{ mb: 4 }} id={idSelector && `paper-title-${idSelector}`}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" sx={{ mb: 4 }} id={idSelector && `paper-subtitle-${idSelector}`}>
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
