import {
  Card, CardContent, Grid, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import { LightButton } from '../CustomButtons.tsx';
import ImageContainer from './ImageContainer.tsx';

interface PlayCardProps {
  title?: string;
  details: string;
  iconSource?: string;
  cardWidth: number;
  cardHeight?: number;
  buttonHref: string;
  ctaText: string;
}

export default function PlayCard({
  title, details, iconSource, cardWidth, cardHeight, buttonHref, ctaText,
}: PlayCardProps) {
  return (
    <Card
      sx={{
        width: cardWidth,
        minHeight: cardHeight,
        bgcolor: 'primary.dark',
        color: 'text.light',
        display: 'flex',
        flexDirection: 'column',
        px: 1,
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Grid container direction="column" justifyContent="space-between" sx={{ flexGrow: 1 }}>
          <Grid item sx={{ my: '24px' }}>
            <MuiMarkdown overrides={{
              span: {
                component: Typography,
                props: {
                  variant: 'overline',
                  sx: {
                    fontWeight: 700,
                    textTransform: 'none',
                    lineHeight: '30px',
                  },
                },
              },
              strong: {
                component: Typography,
                props: {
                  variant: 'overline',
                  sx: {
                    fontWeight: 700,
                    textTransform: 'none',
                    lineHeight: '30px',
                  },
                },
              },
            }}
            >
              {title}
            </MuiMarkdown>
          </Grid>
          <Grid item sx={{ mt: 1, fontSize: '16px', lineHeight: '21.79px' }}>
            <MuiMarkdown
              overrides={{
                span: {
                  component: Typography,
                  props: {
                    variant: 'body2',
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    variant: 'body2',
                    style: {
                      marginBottom: '6px',
                    },
                  },
                },
                strong: {
                  component: Typography,
                  props: {
                    variant: 'body2',
                    sx: { fontWeight: '700', display: 'inline' },
                  },
                },
              }}
            >
              {details}
            </MuiMarkdown>

          </Grid>
          {iconSource && (
            <Grid item sx={{ mt: 4, fontSize: '16px' }}>
              <ImageContainer
                src={iconSource}
                width={200}
                height={120}
                alt=""
                style={{ maxWidth: '100%', height: 'auto' }}
                useImageDimensions
              />
            </Grid>
          )}
          <Grid container sx={{ mt: 'auto' }}>
            <Grid item>
              <LightButton
                href={buttonHref}
                text={ctaText}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
