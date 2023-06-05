import { Grid } from '@mui/material';
import React from 'react';
import {
  FacebookIcon, FacebookShareButton,
  LinkedinIcon, LinkedinShareButton,
  TwitterIcon, TwitterShareButton,
} from 'react-share';

export default function ShareButtons() {
  const url = 'https://clearviction.org/calculator/head-initial-1-cont';

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </Grid>

      <Grid item>
        <TwitterShareButton url={url}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </Grid>

      <Grid item>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </Grid>
    </Grid>
  );
}
