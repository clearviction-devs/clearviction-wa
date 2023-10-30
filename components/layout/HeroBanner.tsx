import { JSX } from '@emotion/react/jsx-runtime';
import {
  Box,
  Button,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import { AriaLabels } from '../../content/content.types.ts';
import ImageContainer from './ImageContainer.tsx';
import SectionContainer from './SectionContainer.tsx';

interface HeroBannerProps {
  header: string;
  subheading?: string;
  subheading2?: string;
  imgsrc?: string;
  ctaText?: string;
  ctaLink?: string;
  children?: JSX.Element | null;
  overrideStyles?: SxProps;
  priority?: boolean;
  ariaLabels?: AriaLabels;
}

const heroStyles: SxProps = {
  backgroundColor: 'primary.dark',
  color: 'primary.contrastText',
  py: 8,
};

const getHeroAdditionalsStyles = (theme: Theme) => ({
  display: 'flex',
  margin: theme.spacing(3, 'auto'),
  justifyContent: 'center',
  order: { xs: '1', md: '2' },
});

export default function HeroBanner({
  header,
  subheading,
  subheading2,
  imgsrc,
  ctaText,
  ctaLink,
  children = null,
  overrideStyles,
  priority = false,
  ariaLabels,
}: HeroBannerProps) {
  return (
    <Box className="hero-banner" sx={overrideStyles || heroStyles} textAlign="left">
      <SectionContainer>
        <Typography className="hero-title" variant="h1" sx={{ display: 'block' }}>
          {header}
        </Typography>
        <Box
          className="hero-content"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ flex: 1, order: { xs: '2', md: '1' } }}>
            <Box className="subheading" sx={{ mt: 2, mb: 4 }}>
              <MuiMarkdown
                overrides={{
                  p: {
                    component: Typography,
                    props: {
                      variant: 'body1',
                      gutterBottom: true,
                    } as TypographyProps,
                  },

                  span: {
                    component: Typography,
                    props: { variant: 'body1' } as TypographyProps,

                  },
                  a: {
                    props: {
                      style: {
                        color: '#FFD200',
                        textDecoration: 'underline',
                      },
                    },
                  },
                }}
              >
                {`${subheading}`}

              </MuiMarkdown>

            </Box>
            {subheading2 && (
            <Box className="subheading-secondary" sx={{ mb: 4 }}>
              <MuiMarkdown
                overrides={{
                  p: {
                    component: Typography,
                    props: {
                      variant: 'body1',
                      gutterBottom: true,
                    } as TypographyProps,
                  },

                  span: {
                    component: Typography,
                    props: { variant: 'body1' } as TypographyProps,

                  },
                }}
              >
                {` ${subheading2}`}

              </MuiMarkdown>

            </Box>
            )}
            {ctaText && ctaLink && (
              <Button
                variant="contained"
                color="primary"
                href={ctaLink}
                aria-label={ariaLabels?.ctaButton}
                sx={{
                  px: 4,
                  '&:hover': {
                    color: 'primary.dark',
                    backgroundColor: 'secondary.main',
                  },
                }}
              >
                {ctaText}
              </Button>
            )}
          </Box>
          {(imgsrc || children) && (
            <Box
              className="hero-additionals"
              sx={getHeroAdditionalsStyles}
            >
              {imgsrc && (
                <ImageContainer
                  src={imgsrc}
                  width={513}
                  height={386}
                  alt=""
                  style={{ maxWidth: '100%' }}
                  useImageDimensions
                  priority={priority}
                />
              )}
              {children}
            </Box>
          )}
        </Box>
      </SectionContainer>
    </Box>
  );
}
