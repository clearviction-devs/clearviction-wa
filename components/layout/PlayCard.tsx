import {
  Card, CardContent, Grid, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import { LightButton } from '../helper/CustomButtons.tsx';
import ImageContainer from './ImageContainer.tsx';

interface PlayCardProps {
  title?: string;
  details: string;
  iconSource?: string;
  ctaButton: string;
  textColor?: string;
  backgroundColor?: string;
  cardWidth: number,
  cardHeight?: number,
  buttonHRef: string;
}

export default function PlayCard({
  title, details, iconSource, ctaButton, textColor, backgroundColor, cardWidth, cardHeight,
  buttonHRef,
}: PlayCardProps) {
  return (
    <Card
      sx={{
        width: cardWidth,
        minHeight: cardHeight,
        bgcolor: `${backgroundColor}`,
        color: `${textColor}`,
        display: 'flex',
        flexDirection: 'column',
        px: 1,
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Grid container direction="column" justifyContent="space-between" sx={{ flexGrow: 1 }}>
          <Grid item sx={{ mt: 1 }}>
            <Typography variant="overline" sx={{ fontWeight: 700, textTransform: 'none' }}>{title}</Typography>
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
                  },
                },
                strong: {
                  component: Typography,
                  props: {
                    variant: 'body2',
                    sx: { fontWeight: 'bold', display: 'inline' },
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
                href={buttonHRef}
                text={ctaButton}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
