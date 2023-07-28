import {
  Box, Grid, GridProps, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';

interface GridItemCardProps extends GridProps {
  title?: string;
  body: string;
  imgsrc?: string;
}

export default function GridItemCard({
  title,
  body,
  imgsrc,
  ...props
}: GridItemCardProps) {
  return (
    <Grid item {...props} sx={{ mb: 4, justifyContent: 'center' }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        {imgsrc && (
          <ImageContainer
            src={imgsrc}
            alt=""
            width={250}
            height={200}
            style={{
              maxWidth: '250px',
              marginBottom: '.1875rem',
            }}
          />
        )}
        {title && (
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
              maxWidth: '250px',
              margin: '27px auto auto',
              minHeight: '62px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {title}
          </Typography>
        )}
        <Box textAlign="left">
          <MuiMarkdown
            overrides={{
              span: {
                component: 'p',
                props: {
                  style: {
                    maxWidth: '260px',
                    display: 'flex',
                    margin: '20px auto',
                    textAlign: 'center',
                  },
                } as React.HTMLProps<HTMLParagraphElement>,
              },
            }}
          >
            {body}
          </MuiMarkdown>
        </Box>
      </Box>
    </Grid>
  );
}
