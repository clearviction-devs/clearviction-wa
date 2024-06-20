import {
  Box,
  Container,
  Divider,
  Link,
  Theme,
  Typography,
} from '@mui/material';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

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
        <Box textAlign="center">
          <Typography className="warning" variant="caption" paragraph>
            {/* eslint-disable-next-line max-len */}
            Formerly known as Clearviction, our project has transitioned to an open-source model, inviting collaboration and contributions so we can better serve our community.
          </Typography>
          <Link sx={{ color: 'white' }} href="https://github.com/clearviction-devs" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
        </Box>
      </Container>

    </Box>
  );
}

export default Footer;
