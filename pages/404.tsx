import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/404.ts';

export default function PageNotFound() {
  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <SectionContainer sx={{ px: 2, textAlign: 'center', mt: 10 }} id={content.page.id}>
        <Typography variant="h3">
          {content.page.header}
        </Typography>
        <Box sx={{ mt: 8 }}>
          <ImageContainer
            src={content.page.imgsrc || ''}
            width={406}
            height={306}
            alt={content.page.header}
            style={{ maxWidth: '100%' }}
            useImageDimensions
          />
        </Box>
        <Typography variant="body1" sx={{ mt: 8 }}>
          {content.page.body}
        </Typography>
        <Button
          href={content.page.ctaLink}
          variant="contained"
          color="primary"
          sx={{
            px: 4,
            my: 8,
            '&:hover': {
              color: 'primary.dark',
              backgroundColor: 'secondary.main',
            },
          }}
        >
          {content.page.ctaText}
        </Button>
      </SectionContainer>
    </>
  );
}
