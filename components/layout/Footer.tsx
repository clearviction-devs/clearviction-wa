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
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

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
