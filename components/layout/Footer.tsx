import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

function SocialMediaShare() {
  const websiteURL = 'https://clearviction.org';

  const shareOnFacebook = () => {
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      websiteURL,
    )}`;
    window.open(facebookShareURL, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    const linkedInShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      websiteURL,
    )}`;
    window.open(linkedInShareURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ padding: '20px', display: 'flex', gap: '28px' }}>
      <IconButton
        aria-label="LinkedIn share"
        style={{ padding: '0' }}
        onClick={shareOnLinkedIn}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0,0,256,256">
          <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
            <g transform="scale(5.33333,5.33333)">
              <path d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z" fill="#0077b5" />
              <path d="M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z" fill="#ffffff" />
            </g>
          </g>
        </svg>
      </IconButton>
      <IconButton
        aria-label="Facebook share"
        style={{ padding: '0' }}
        onClick={shareOnFacebook}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48">
          <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" />
          <path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z" />
        </svg>
      </IconButton>
    </Box>
  );
}

function LegalDisclaimerDialog({ openLegalDisclaimer, setOpenLegalDisclaimer }: { openLegalDisclaimer: boolean, setOpenLegalDisclaimer: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <Dialog
      open={openLegalDisclaimer}
      onClose={() => setOpenLegalDisclaimer(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        width: '376px',
        margin: 'auto',
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          color: 'text.secondary',
          backgroundColor: 'primary.light',
        }}
      >
        <Typography variant="h3">
          Legal Disclaimer
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          color: 'text.secondary',
          backgroundColor: 'primary.light',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Typography variant="body2">
          This website does not provide legal advice. You should not rely on it for legal guidance. We cannot guarantee its accuracy or be held responsible for any consequences.
        </Typography>
        <Typography variant="body2">
          Consult with an attorney to ensure the information and your understanding of it are suitable for your situation.
        </Typography>
      </DialogContent>
      <DialogActions sx={{
        backgroundColor: 'primary.light',
      }}
      >
        <Button
          onClick={() => setOpenLegalDisclaimer(false)}
          sx={{
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: 'text.light',
            },
            '&:active': {
              backgroundColor: '#E9E9E9',
            },
            '&:focus': {
              boxShadow: '0 0 0 4px #0000EE99',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function PrivacyNoticeDialog({ openPrivacyNotice, setOpenPrivacyNotice }: { openPrivacyNotice: boolean, setOpenPrivacyNotice: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <Dialog
      open={openPrivacyNotice}
      onClose={() => setOpenPrivacyNotice(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        width: '376px',
        margin: 'auto',
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          color: 'text.secondary',
          backgroundColor: 'primary.light',
        }}
      >
        <Typography variant="h3">
          Privacy Notice
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          color: 'text.secondary',
          backgroundColor: 'primary.light',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Typography variant="body2">
          We do not ask, nor collect any personally identifiable information. We may collect non-personal information such as your browser type, operating system, and IP address for statistical purposes to improve our website and services.
        </Typography>
        <Typography variant="body2">
          Our website may contain links to third-party websites for your convenience. We are not responsible for the privacy practices or content of these third-party sites.
        </Typography>
      </DialogContent>
      <DialogActions sx={{
        backgroundColor: 'primary.light',
      }}
      >
        <Button
          onClick={() => setOpenPrivacyNotice(false)}
          sx={{
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: 'text.light',
            },
            '&:active': {
              backgroundColor: '#E9E9E9',
            },
            '&:focus': {
              boxShadow: '0 0 0 4px #0000EE99',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
interface FooterProps {
  isCalc: boolean;
}

function Footer({ isCalc }: FooterProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [openLegalDisclaimer, setOpenLegalDisclaimer] = useState(false);
  const [openPrivacyNotice, setOpenPrivacyNotice] = useState(false);

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: isCalc ? 'secondary.dark' : 'primary.dark',
        color: isCalc ? 'secondary.light' : 'primary.light',
      }}
    >
      {matches ? (
        <Stack
          className="footer-bottom"
          sx={{
            padding: '32px 64px',
          }}
        >
          <Box>
            <Stack>
              <Typography className="warning" variant="footerTitle">Conviction Vacation Initiative is an open source project</Typography>
              <Typography className="warning" variant="footerCaption" sx={{ mt: 5 }} paragraph>
                We are an open source initiative that emerged following Washington State's New Hope Act.
              </Typography>
              <Typography className="warning" variant="footerCaption" paragraph>
                Formerly known as Clearviction, our project has transitioned to an open-source model, inviting collaboration so we can better serve our community.
              </Typography>
              <Typography className="warning" variant="footerCaption" sx={{ mb: 0 }} paragraph>
                If you would like to contribute to the project, please reach out on
                {' '}
                <Link href="https://github.com/clearviction-devs" target="_blank" rel="noopener noreferrer">Github</Link>
                .
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Divider sx={{ borderBottom: `1px solid ${theme.palette.primary.main}`, my: 3 }} />
              <Typography className="warning" variant="footerDisclaimers" display="block" gutterBottom>
                <Button
                  onClick={() => setOpenLegalDisclaimer(true)}
                  sx={{
                    '&:active': {
                      backgroundColor: '#E9E9E9',
                    },
                    '&:focus': {
                      boxShadow: '0 0 0 4px #0000EE99',
                    },
                  }}
                >
                  LEGAL DISCLAIMER
                </Button>
              </Typography>
              <Typography className="warning" variant="footerDisclaimers" display="block" gutterBottom>
                <Button
                  onClick={() => setOpenPrivacyNotice(true)}
                  sx={{
                    '&:active': {
                      backgroundColor: '#E9E9E9',
                    },
                    '&:focus': {
                      boxShadow: '0 0 0 4px #0000EE99',
                    },
                  }}
                >
                  PRIVACY NOTICE
                </Button>
              </Typography>
              <SocialMediaShare />
            </Stack>
          </Box>
        </Stack>
      ) : (
        <Stack
          className="footer-bottom"
          direction="row"
          sx={{
            padding: '80px 0px',
            gap: '94px',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              height: '211px',
              width: '522px',
            }}
          >
            <Stack
              sx={{
                flex: 1,
              }}
              spacing={2}
            >
              <Typography className="warning" variant="footerTitle">
                Conviction Vacation Initiative is an open source project
              </Typography>
              <Typography className="warning" variant="footerCaption">
                We are an open source initiative that emerged following Washington State's New Hope Act.
              </Typography>
              <Typography className="warning" variant="footerCaption">
                Formerly known as Clearviction, our project has transitioned to an open-source model, inviting collaboration so we can better serve our community.
              </Typography>
              <Typography className="warning" variant="footerCaption">
                If you would like to contribute to the project, please reach out on
                {' '}
                <Link href="https://github.com/clearviction-devs" target="_blank" rel="noopener noreferrer">
                  Github
                </Link>
                .
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              height: '109px',
              width: '329px',
            }}
          >
            <Stack
              sx={{
                flex: 1,
              }}
              spacing={2}
            >
              <Divider sx={{ borderBottom: `1px solid ${theme.palette.primary.main}` }} />
              <Typography className="warning" variant="footerDisclaimers" display="block">
                <Button
                  onClick={() => setOpenLegalDisclaimer(true)}
                  sx={{
                    '&:active': {
                      backgroundColor: '#E9E9E9',
                    },
                    '&:focus': {
                      boxShadow: '0 0 0 4px #0000EE99',
                    },
                  }}
                >
                  LEGAL DISCLAIMER
                </Button>
              </Typography>
              <Typography className="warning" variant="footerDisclaimers" display="block">
                <Button
                  onClick={() => setOpenPrivacyNotice(true)}
                  sx={{
                    '&:active': {
                      backgroundColor: '#E9E9E9',
                    },
                    '&:focus': {
                      boxShadow: '0 0 0 4px #0000EE99',
                    },
                  }}
                >
                  PRIVACY NOTICE
                </Button>
              </Typography>
              <SocialMediaShare />
            </Stack>
          </Box>
        </Stack>
      )}
      <PrivacyNoticeDialog openPrivacyNotice={openPrivacyNotice} setOpenPrivacyNotice={setOpenPrivacyNotice} />

      <LegalDisclaimerDialog openLegalDisclaimer={openLegalDisclaimer} setOpenLegalDisclaimer={setOpenLegalDisclaimer} />

    </Box>
  );
}

export default Footer;
