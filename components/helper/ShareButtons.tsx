import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  XIcon,
} from 'react-share';

type ShareButtonsProps = {
  popup: boolean;
  setShareLinkCopied: React.Dispatch<React.SetStateAction<boolean>>;
  shareLinkCopied: boolean;
};

const CALCULATOR_URL = 'https://clearviction.org/calculator/head-initial-1-cont';

const socialMediaTextStyles = {
  fontWeight: 400,
  lineHeight: '1.375rem',
  color: '#2F3554',
  textDecoration: 'underline',
  marginLeft: '.4375rem',
};

const iconsStyle = { display: 'flex', alignItems: 'center', cursor: 'pointer' };

export default function ShareButtons({
  popup, setShareLinkCopied, shareLinkCopied,
}: ShareButtonsProps) {
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(CALCULATOR_URL);
    setShareLinkCopied(true);
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Check out Clearviction's conviction vacation eligibility calculator!");
    const preheader = encodeURIComponent('Determine if your conviction is eligible to be vacated in Washington State.');
    const bodyText = encodeURIComponent('This easy, 10-minute process can determine if your misdemeanor conviction is eligible to be vacated in Washington State.\n\n');
    const mailtoUrl = `mailto:?subject=${subject}&body=${preheader}%0A%0A${bodyText}%0A${encodeURIComponent(CALCULATOR_URL)}`;
    window.open(mailtoUrl);
  };

  if (shareLinkCopied) {
    return (
      <Box
        className="copied-message"
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
        className="popup-container"
        sx={{
          width: '28.1rem',
          height: '20.625rem',
          padding: '1rem',
          borderRadius: '6px',
          '@media (max-width: 768px)': { width: '20rem' },
        }}
      >

        <Box
          className="popup-content"
          sx={{
            display: 'flex', flexDirection: 'column', marginLeft: '1rem', gap: '.0094rem',
          }}
        >

          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              marginTop: '1.5rem',
            }}
          >
            Share the Calculator
          </Typography>

          <Box
            className="social-media-links"
            sx={{
              display: 'flex', flexDirection: 'column', gap: '1.9rem', marginTop: '1.5rem',
            }}
          >
            <Box className="copy-link" sx={iconsStyle} onClick={() => handleCopyClick()}>
              <ContentCopyIcon style={{ fontSize: 22 }} />
              <Typography variant="body1" sx={socialMediaTextStyles}>Copy Link</Typography>
            </Box>

            <Box className="email-link" sx={iconsStyle} onClick={() => handleEmailClick()}>
              <EmailIcon style={{ fontSize: 22 }} />
              <Typography variant="body1" sx={socialMediaTextStyles}>Email Link</Typography>
            </Box>

            <FacebookShareButton url={CALCULATOR_URL} aria-label="Share the calculator now on facebook">
              <Box className="facebook-link" sx={iconsStyle}>
                <FacebookIcon size={24} round />
                <Typography variant="body1" sx={socialMediaTextStyles}>Share on Facebook</Typography>
              </Box>
            </FacebookShareButton>

            <TwitterShareButton url={CALCULATOR_URL} aria-label="Share the calculator now on X">
              <Box className="x-link" sx={iconsStyle}>
                <XIcon size={24} round />
                <Typography variant="body1" sx={socialMediaTextStyles}>Share on X</Typography>
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
        <FacebookShareButton url={CALCULATOR_URL} aria-label="Share the calculator now on facebook">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </Grid>

      <Grid item>
        <TwitterShareButton url={CALCULATOR_URL} aria-label="Share the calculator now on X">
          <XIcon size={32} round />
        </TwitterShareButton>
      </Grid>

      <Grid item>
        <LinkedinShareButton url={CALCULATOR_URL} aria-label="Share the calculator now on linkedin">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </Grid>
    </Grid>
  );
}
