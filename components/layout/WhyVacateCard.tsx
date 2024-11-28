import {
  Box, Card, CardContent, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';

export interface WhyVacateCardProps {
    id: string;
    content1: string;
    image?: string;
    largeText?: string;
    optionalSecondContent?: string;
    source: string;
    sourceURL: string;
    minHeight: string;
}

export default function WhyVacateCard({
  content1, image, largeText, optionalSecondContent, source, sourceURL,
  id, minHeight,
}: WhyVacateCardProps) {
  return (
    <Card
      id={id}
      sx={{
        padding: '32px',
        backgroundColor: 'primary.dark',
        color: 'text.light',
        width: '284px',
        height: minHeight,
        marginBottom: '40px',
      }}
    >
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '0px',
        ':last-child': {
          paddingBottom: '0px',
        },
      }}
      >
        <Typography
          variant="headingCalculator"
          sx={{
            textAlign: 'center',
          }}
        >
          {content1}
        </Typography>
        { image && (
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: image === '/3-percent.png' ? '120px' : '354px',
          }}
        />
        ) }
        { largeText && (
        <Typography
          variant="h1"
          sx={{
            fontSize: '50px',
            color: 'secondary.main',
            textAlign: 'center',
          }}
        >
          {largeText}
        </Typography>
        ) }
        <Typography
          variant="headingCalculator"
          sx={{
            textAlign: 'center',
          }}
        >
          {optionalSecondContent}
        </Typography>
        <MuiMarkdown overrides={{
          a: {
            component: 'a',
            props: {
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                color: 'inherit',
                fontFamily: theme.typography.caption.fontFamily,
                fontSize: theme.typography.caption.fontSize,
                fontWeight: theme.typography.caption.fontWeight,
                cursor: 'pointer',
                textAlign: 'center',
              },
            },
          },
        }}
        >
          {`[Source: ${source}](${sourceURL})`}
        </MuiMarkdown>
      </CardContent>
    </Card>
  );
}
