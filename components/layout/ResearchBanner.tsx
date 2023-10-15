import {
  Box, Button, Grid, SxProps, Theme, Typography,
} from '@mui/material';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';
import SectionContainer from './SectionContainer.tsx';

const researchBannerStyles: SxProps = {
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  py: 4,
};

const getButtonStyles = (theme: Theme) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: 'black',
  '&:hover': {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
  },
});

const researchFormLink: string = 'https://airtable.com/appfJZShN8K4tcWHU/shrHf25Nfh7LMhwZg';

export default function ResearchBanner() {
  return (
    <Box className="research-banner" sx={researchBannerStyles}>
      <SectionContainer>
        <Grid container alignItems="center">
          <Grid className="research-banner-content" item xs={12} sm={6} md={8}>
            <Typography variant="h3" gutterBottom>
              Help improve our services!
            </Typography>
            <Button
              fullWidth
              variant="contained"
              href={researchFormLink}
              sx={getButtonStyles}
            >
              Share your experience
            </Button>
          </Grid>
          <Grid className="research-banner-img" item xs={12} sm={6} md={4}>
            <ImageContainer
              src="/illustrations/checklist1.svg"
              alt=""
              width={406}
              height={306}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </Grid>
        </Grid>
      </SectionContainer>
    </Box>
  );
}
