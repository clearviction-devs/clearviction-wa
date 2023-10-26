import {
  Button, Paper, PaperProps, Typography,
} from '@mui/material';
import React from 'react';

import SectionContainer from './SectionContainer.tsx';

interface GetStartedStepProps extends PaperProps {
  title?: string;
  bodyText?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function GetStartedStep({
  title,
  bodyText,
  ctaText,
  ctaLink,
  children,
  ...props
}: GetStartedStepProps) {
  return (
    <Paper sx={{ textAlign: 'center', p: 4 }} {...props}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {title}
      </Typography>
      {bodyText && (
      <Typography
        dangerouslySetInnerHTML={{ __html: bodyText }}
      />
      )}
      <SectionContainer sx={{ textAlign: 'left', my: 3 }}>
        {children}
      </SectionContainer>

      {ctaText && ctaLink && (
        <Button href={ctaLink} variant="contained" sx={{ my: 3 }}>
          {ctaText}
        </Button>
      )}
    </Paper>
  );
}
