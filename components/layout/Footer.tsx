import {
  Box,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

interface FooterProps {
  isCalc: boolean;
}

function Footer({ isCalc }: FooterProps) {
  const theme = useTheme();

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: isCalc ? 'secondary.dark' : 'primary.dark',
        color: isCalc ? 'secondary.light' : 'primary.light',
      }}
    >

      <Stack
        className="footer-bottom"
        sx={{
          p: 4,
          px: 8,
        }}
      >

        <Typography className="warning" variant="footerTitle">Conviction Vacation Initiative is an open source project</Typography>
        <Typography className="warning" variant="footerCaption" sx={{ mt: 5 }} paragraph>
          We are an open source initiative that emerged following Washington State's New Hope Act.
        </Typography>
        <Typography className="warning" variant="footerCaption" paragraph>
          {/* eslint-disable-next-line max-len */}
          Formerly known as Clearviction, our project has transitioned to an open-source model, inviting collaboration so we can better serve our community.
        </Typography>
        <Typography className="warning" variant="footerCaption" sx={{ mb: 0 }} paragraph>
          If you would like to contribute to the project, please reach out on
          {' '}
          <Link href="https://github.com/clearviction-devs" target="_blank" rel="noopener noreferrer">Github</Link>
          .
        </Typography>

        <Divider sx={{ borderBottom: `1px solid ${theme.palette.primary.main}`, my: 3 }} />
        <Typography className="warning" variant="footerDisclaimers" display="block" gutterBottom>LEGAL DISCLAIMER</Typography>
        <Typography className="warning" variant="footerDisclaimers" display="block" gutterBottom>PRIVACY NOTICE</Typography>

      </Stack>

    </Box>
  );
}

export default Footer;
