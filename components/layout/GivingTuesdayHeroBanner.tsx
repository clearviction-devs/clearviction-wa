import { JSX } from '@emotion/react/jsx-runtime';
import {
  Box,
  Grid,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import GivingTuesdayDonationForm from '../helper/GivingTuesdayDonationForm.tsx';
import ImageContainer from './ImageContainer.tsx';
import SectionContainer from './SectionContainer.tsx';

interface HeroBannerProps {
  header: string;
  subheading?: string;
  imgsrc?: string;
  children?: JSX.Element | null;
  priority?: boolean;
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

export default function GivingTuesdayHeroBanner({
  header,
  subheading,
  imgsrc,
  children = null,
  priority = false,
}: HeroBannerProps) {
  return (
    <Box className="hero-banner" sx={{ ...heroStyles, display: 'flex', justifyContent: 'center' }} textAlign="left">
      <SectionContainer>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              className="hero-title"
              variant="h1"
              sx={{ display: 'block', whiteSpace: 'nowrap' }}
            >
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
              </Box>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%',
            }}
            >
              <GivingTuesdayDonationForm />
            </Box>
          </Grid>
        </Grid>
      </SectionContainer>
    </Box>
  );
}
