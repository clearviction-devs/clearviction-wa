import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Button,
  Card, CardContent, Grid, Typography,
} from '@mui/material';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';

interface PlayCardProps {
  title?: string;
  details: string;
  iconSource?: string;
  ctaButton?: string;
  textColor: string;
  backgroundColor: string;
  cardWidth: number,
  cardHeight: number,
}

export default function PlayCard({
  title, details, iconSource, ctaButton, textColor, backgroundColor, cardWidth, cardHeight,
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
          <Grid item>
            <Typography variant="overline" sx={{ fontWeight: 700, textTransform: 'none' }}>{title}</Typography>
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            <Typography variant="body2">{details}</Typography>
          </Grid>
          {iconSource && (
            <Grid item sx={{ mt: 2 }}>
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
          <Grid item sx={{ mt: 'auto' }}>
            <Button
              href="/calculator/head-initial-1-cont"
              variant="contained"
              color="tertiary"
              size="small"
              className="calc-btn"
              aria-label="Access our eligibility calculator"
              sx={{
                whiteSpace: 'nowrap',
                py: 1,
                px: 3,
                backgroundColor: '#FFFEFC',
              }}
            >
              <Typography variant="button" sx={{ color: '#121A33', textTransform: 'none' }}>{ctaButton}</Typography>
              <Box component="span" sx={{ ml: 1 }} />
              <ArrowForwardIcon sx={{ color: '#121A33', stroke: '#121A33', strokeWidth: 1.5 }} />
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
