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

export default function ShareButtons({ popup, setCopied, copied }: ShareButtonsProps) {
  const url = 'https://clearviction.org/calculator/head-initial-1-cont';

  const style = {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0.25px',
    textAlign: 'left',
    color: '#2F3554',
    textDecoration: 'underline',
    marginLeft: '7px',
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
  };

  function handleEmailClick() {
    console.log('clicked');
  }

  // This is if the link is copied
  if (copied) {
    return (
      <div style={{
        width: '325px',
        height: '95px',
        padding: '16px',
        borderRadius: '6px',
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
        width: '450px', height: '330px', padding: '16px', borderRadius: '6px',
      }}
      >

        <Box sx={{
          display: 'flex', flexDirection: 'column', marginLeft: '13px',
        }}
        >

          <h2 style={{
            fontSize: '25px',
            fontWeight: 700,
            lineHeight: '23px',
            letterSpacing: '0.15000000596046448px',
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

  // This is the default share buttons
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

// type ShareButtonsProps = {
//   popup: boolean;
//   setCopied: React.Dispatch<React.SetStateAction<boolean>>;
//   copied: boolean;
// };

// ShareButtons.prototype = Object.create(React.Component.prototype);
// ShareButtons.prototype.constructor = ShareButtons;

ShareButtons.propTypes = {
  popup: PropTypes.bool.isRequired,
  setCopied: PropTypes.func.isRequired,
  copied: PropTypes.bool.isRequired,
};
