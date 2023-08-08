import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Grid, Typography } from '@mui/material';
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
  popup, setCopied, copied,
}: ShareButtonsProps) {
  const url = 'https://clearviction.org/calculator/head-initial-1-cont';

  const style = {
    fontWeight: 400,
    lineHeight: '1.375rem',
    color: '#2F3554',
    textDecoration: 'underline',
    marginLeft: '.4375rem',
  };

  const iconsStyle = { display: 'flex', alignItems: 'center', cursor: 'pointer' };

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
  };

  function handleEmailClick() {
    const subject = encodeURIComponent("Check out Clearviction's conviction vacation eligibility calculator!");
    const preheader = encodeURIComponent('Determine if your conviction is eligible to be vacated in Washington State.');
    const bodyText = encodeURIComponent('This easy, 10-minute process can determine if your misdemeanor conviction is eligible to be vacated in Washington State.\n\n');
    const mailtoUrl = `mailto:?subject=${subject}&body=${preheader}%0A%0A${bodyText}%0A${encodeURIComponent(url)}`;
    window.open(mailtoUrl);
  }

  if (copied) {
    return (
      <Box
        className="copied-message-box"
        sx={{
          width: '20.3125rem',
          height: '5.9375rem',
          padding: '1rem',
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: '0',
          }}
        >
          Link copied!
        </Typography>
      </Box>
    );
  }

  if (popup) {
    return (
      <Box
        className="popup-main-container-box"
        sx={{
          width: '28.1rem', height: '20.625rem', padding: '1rem', borderRadius: '6px',
        }}
      >

        <Box
          className="popup-inner-container-title-box"
          sx={{
            display: 'flex', flexDirection: 'column', marginLeft: '1rem', gap: '.0094rem',
          }}
        >

          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: '1.3rem',
                sm: '1.55rem',
              },
              fontWeight: 700,
              marginTop: '1.5rem',
            }}
          >
            Share the Calculator
          </Typography>

          <Box
            className="social-media-button-container-box"
            sx={{
              display: 'flex', flexDirection: 'column', gap: '2.2rem', marginTop: '1.5rem',
            }}
          >
            <Box className="copy-link-container-box" sx={iconsStyle} onClick={() => handleCopyClick()}>
              <ContentCopyIcon style={{ fontSize: 22 }} />
              <Typography variant="body1" sx={style}>Copy Link</Typography>
            </Box>

            <Box className="email-link-container-box" sx={iconsStyle} onClick={() => handleEmailClick()}>
              <EmailIcon style={{ fontSize: 22 }} />
              <Typography variant="body1" sx={style}>Email Link</Typography>
            </Box>

            <FacebookShareButton url={url}>
              <Box className="facebook-link-container-box" sx={iconsStyle}>
                <FacebookIcon size={24} round />
                <Typography variant="body1" sx={style}>Share on Facebook</Typography>
              </Box>
            </FacebookShareButton>

            <TwitterShareButton url={url}>
              <Box className="twitter-link-container-box" sx={iconsStyle}>
                <TwitterIcon size={24} round />
                <Typography variant="body1" sx={style}>Share on Twitter</Typography>
              </Box>
            </TwitterShareButton>
          </Box>

        </Box>

      </Box>

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
