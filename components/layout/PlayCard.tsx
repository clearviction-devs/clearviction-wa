import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Button,
  Card, CardContent, Grid, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';
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
  buttonHRef?: string;
  buttonClassName?: string;
  buttonAriaLabel?: string;
}

export default function PlayCard({
  title, details, iconSource, ctaButton, textColor, backgroundColor, cardWidth, cardHeight,
  buttonHRef, buttonClassName, buttonAriaLabel,
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
              <Button
                href={buttonHRef}
                variant="contained"
                size="small"
                className={buttonClassName}
                aria-label={buttonAriaLabel}
                sx={{
                  backgroundColor: theme.palette.background.default,
                  '&:hover': {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.primary.light,
                    '& .MuiTypography-root': {
                      color: theme.palette.text.secondary,
                    },
                    '& .MuiSvgIcon-root': {
                      color: theme.palette.text.secondary,
                      stroke: theme.palette.text.secondary,
                    },
                  },
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    color: theme.palette.text.secondary, textTransform: 'none', marginBottom: '0px', letterSpacing: '0',
                  }}
                >
                  {ctaButton}
                </Typography>
                <Box component="span" sx={{ ml: 1 }} />
                <ArrowForwardIcon sx={{
                  color: theme.palette.text.secondary,
                  stroke: theme.palette.text.secondary,
                  strokeWidth: 0.5,
                }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
