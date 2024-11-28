import { Box, Typography } from '@mui/material';
import React from 'react';

import { DarkButton } from '../components/CustomButtons.tsx';
import IndividualPageHead from '../components/IndividualPageHead.tsx';
import content from '../content/404.ts';

export default function PageNotFound() {
  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <Box
        sx={{
          textAlign: 'center',
          height: '50vh',
          mt: 10,
        }}
        id={content.page.id}
      >
        <Typography variant="h1">
          {content.page.header}
        </Typography>
        <Typography variant="body1" sx={{ my: 8 }}>
          {content.page.body}
        </Typography>
        <DarkButton
          href={content.page.ctaLink!}
          text={content.page.ctaText!}
        />
      </Box>
    </>
  );
}
