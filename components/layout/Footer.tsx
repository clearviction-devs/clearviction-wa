import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Theme,
  Typography,
} from '@mui/material';
import React from 'react';

const getFooterMainStyles = (theme: Theme) => ({
  display: 'flex',
  textAlign: { xs: 'center', md: 'left' },
  flexDirection: { xs: 'column', md: 'row' },
  p: { xs: theme.spacing(4, 9, 0, 9), md: theme.spacing(10, 9, 0, 9) },
  gap: { xs: 1, md: 4 },
});

interface FooterProps {
  isCalc: boolean;
}

function Footer({ isCalc }: FooterProps) {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        mt: 'auto',
        backgroundColor: isCalc ? 'secondary.dark' : 'primary.dark',
        color: isCalc ? 'secondary.light' : 'primary.light',
      }}
    >
      <Container
        maxWidth="xl"
        sx={getFooterMainStyles}
        className="footer-main"
      >
        <Box sx={{ display: { md: 'none', xs: 'block' } }}>
          <Divider sx={{ borderBottom: '1px solid currentColor' }} />
        </Box>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          textAlign: 'center',
          padding: 2,
          flexDirection: 'column',
          gap: 2,
        }}
        className="footer-bottom"
      >
        <Box id="footerContent">
          <Typography variant="footerTitle">Conviction Vacation Initiative is an open source project</Typography>
          <Typography className="warning" variant="footerCaption" paragraph sx={{ mt: 5 }}>
            We are an open source initiative that emerged following Washington State's New Hope Act.
          </Typography>
          <Typography className="warning" variant="footerCaption" paragraph>
            {/* eslint-disable-next-line max-len */}
            Formerly known as Clearviction, our project has transitioned to an open-source model, inviting collaboration so we can better serve our community.
          </Typography>
          <Typography className="warning" variant="footerCaption" paragraph>
            If you would like to contribute to the project, please reach out on
            {' '}
            <Link href="https://github.com/clearviction-devs" target="_blank" rel="noopener noreferrer">Github</Link>
            .
          </Typography>

        </Box>
        <Box id="footerDisclaimers">
          <Divider sx={{ borderBottom: '1px solid currentColor' }} />
          <Button sx={{ lineHeight: '24px' }}>LEGAL DISCLAIMER</Button>
          <Button sx={{ lineHeight: '24px' }}>PRIVACY NOTICE</Button>
        </Box>
      </Container>

    </Box>
  );
}

export default Footer;
