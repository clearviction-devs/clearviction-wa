import {
  Box, Button, Grid, SxProps, Typography,
} from '@mui/material';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';
import SectionContainer from './SectionContainer.tsx';

const researchBannerStyles: SxProps = {
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  py: 4,
};

const researchFormLink: string = 'https://airtable.com/appfJZShN8K4tcWHU/shrHf25Nfh7LMhwZg';

export default function ResearchBanner() {
  return (
    <Box sx={researchBannerStyles}>
      <SectionContainer>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="h3" gutterBottom>
              Help improve our services!
            </Typography>
            <Button
              fullWidth
              variant="contained"
              href={researchFormLink}
              sx={(theme) => ({
                backgroundColor: theme.palette.primary.contrastText,
                color: 'black',
                '&:hover': {
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.dark,
                },
              })}
            >
              Share your experience
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImageContainer
              src="/illustrations/checklist1.svg"
              alt=""
              width={406}
              height={306}
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </SectionContainer>
    </Box>
  );
}
