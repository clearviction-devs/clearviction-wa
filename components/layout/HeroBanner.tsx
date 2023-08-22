import { JSX } from '@emotion/react/jsx-runtime';
import {
  Box,
  Button,
  Hidden,
  SxProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';
import SectionContainer from './SectionContainer.tsx';

interface HeroBannerProps {
  header: string;
  subheading?: string;
  subheading2?: string;
  imgsrc?: string;
  ctaText?: string;
  ctaLink?: string;
  children?: JSX.Element;
  overrideStyles?: SxProps;
}

const heroStyles: SxProps = {
  backgroundColor: 'primary.dark',
  color: 'primary.contrastText',
  py: 8,
};

export default function HeroBanner({
  header,
  subheading,
  subheading2,
  imgsrc,
  ctaText,
  ctaLink,
  children,
  overrideStyles,
}: HeroBannerProps) {
  return (
    <Box sx={overrideStyles || heroStyles} textAlign="left">
      <SectionContainer>
        <Typography variant="h1" sx={{ display: 'block' }}>
          {header}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            flexWrap: 'wrap',
            flexDirection: { sm: 'column', md: 'row' },
          }}
        >

          {imgsrc && (
          <Hidden mdUp>
            <Box
              sx={{
                display: 'flex',
                margin: '30px auto',
                justifyContent: 'center',
              }}
            >
              <ImageContainer
                src={imgsrc}
                width={513}
                height={386}
                alt=""
                style={{ maxWidth: '100%' }}
                useImageDimensions
              />
            </Box>
          </Hidden>
          )}

          <Box sx={{ flex: 1 }}>
            <Box sx={{ mt: 2, mb: 4 }}>
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
            <Box sx={{ mb: 4 }}>
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
              sx={{
                display: 'flex',
                margin: '30px auto',
                justifyContent: 'center',
              }}
            >
              {imgsrc ? (
                <Hidden mdDown>
                  <ImageContainer
                    src={imgsrc}
                    width={513}
                    height={386}
                    alt=""
                    style={{ maxWidth: '100%' }}
                    useImageDimensions
                  />
                </Hidden>
              ) : (
                children
              )}
            </Box>
          )}
        </Box>
      </SectionContainer>
    </Box>
  );
}
