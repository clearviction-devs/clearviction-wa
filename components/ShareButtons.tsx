import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

type ShareButtonsProps = {
  popup: boolean;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
  copied: boolean;
};

export default function ShareButtons({
  popup, setCopied, copied, setShare,
}: ShareButtonsProps) {
  const url = 'https://clearviction.org/calculator/head-initial-1-cont';

  const style = {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '1.375rem',
    letterSpacing: '.0156rem',
    textAlign: 'left',
    color: '#2F3554',
    textDecoration: 'underline',
    marginLeft: '.4375rem',
  };

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
  };

  function handleEmailClick() {
    console.log('clicked');
  }

  if (copied) {
    return (
      <div style={{
        width: '20.3125rem',
        height: '5.9375rem',
        padding: '1rem',
        borderRadius: '.375rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <h4>Link Copied!</h4>
      </div>
    );
  }

  if (popup) {
    return (
      <div style={{
        width: '28.125rem', height: '20.625rem', padding: '1rem', borderRadius: '.375rem',
      }}
      >

        <Box sx={{
          display: 'flex', flexDirection: 'column', marginLeft: '.8125rem',
        }}
        >

          <h2 style={{
            fontSize: '1.5625rem',
            fontWeight: 700,
            lineHeight: '1.4375rem',
            letterSpacing: '.0094rem',
            textAlign: 'left',
          }}
          >
            Share the Calculator
          </h2>

          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleCopyClick()}>
            <ContentCopyIcon style={{ fontSize: 22 }} />
            <p style={style}>Copy Link</p>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleEmailClick()}>
            <EmailIcon style={{ fontSize: 22 }} />
            <p style={style}>Email Link</p>
          </Box>

          <FacebookShareButton url={url}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FacebookIcon size={24} round />
              <p style={style}>Share on Facebook</p>
            </Box>
          </FacebookShareButton>

          <TwitterShareButton url={url}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TwitterIcon size={24} round />
              <p style={style}>Share on Twitter</p>
            </Box>
          </TwitterShareButton>

        </Box>

      </div>

    );
  }

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

ShareButtons.propTypes = {
  popup: PropTypes.bool.isRequired,
  setCopied: PropTypes.func.isRequired,
  copied: PropTypes.bool.isRequired,
  setShare: PropTypes.func.isRequired,
};
