import {
  Button, Paper, PaperProps, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
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
    <Paper sx={{ textAlign: 'left', p: 4 }} {...props}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {title}
      </Typography>
      {bodyText && <MuiMarkdown>{bodyText}</MuiMarkdown>}
      <SectionContainer sx={{ textAlign: 'left', my: 3, px: 0 }}>
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
