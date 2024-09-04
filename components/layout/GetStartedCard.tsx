import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import { GetStartedStep } from '../../content/content.types.ts';
import theme from '../../styles/themes/theme.tsx';
import { DarkButton } from '../helper/CustomButtons.tsx';

export default function GetStartedCard({
  title, overline, body, ctaText, ctaLink, useMD, cardHeight,
}: GetStartedStep) {
  return (
    <Card sx={{
      backgroundColor: theme.palette.secondary.light,
      height: cardHeight ? '444px' : '404px',
      width: '284px',
      padding: '32px 24px',
      mb: '32px',
    }}
    >
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
      }}
      >
        <Box sx={{
          height: '260px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                font: theme.typography.overline.fontFamily,
                fontWeight: 700,
              }}
            >
              {overline}
            </Typography>
            <Typography variant="h3">
              {title}
            </Typography>
          </Box>
          {useMD ? (
            <Box>
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
                  a: {
                    component: 'a',
                    props: {
                      style: {
                        color: theme.palette.link.main,
                      },
                    },
                  },
                }}
              >
                {body}
              </MuiMarkdown>
            </Box>
          ) : (
            <Typography variant="body2">
              {body}
            </Typography>
          )}
        </Box>
        {
        ctaLink && ctaText

        && (
        <Box sx={{
          height: '104px',
          padding: '32px 0',
        }}
        >
          <DarkButton
            href={ctaLink}
            text={ctaText}
          />
        </Box>
        )
        }
      </CardContent>
    </Card>
  );
}
