import {
  Box,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

interface FooterProps {
  isCalc: boolean;
}

function Footer({ isCalc }: FooterProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

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
      ) : (
        <Stack
          className="footer-bottom"
          direction="row"
          sx={{
            pt: 4,
            pr: 41.5,
            pb: 4,
            pl: 41.5,
            justifyContent: 'space-between',
          }}
        >
          <Stack
            sx={{
              flex: 1,
              mr: 2,
            }}
            spacing={2}
          >
            <Typography className="warning" variant="footerTitle">
              Conviction Vacation Initiative is an open source project
            </Typography>
            <Typography className="warning" variant="footerCaption">
              {/* eslint-disable-next-line max-len */}
              We are an open source initiative that emerged following Washington State's New Hope Act.
            </Typography>
            <Typography className="warning" variant="footerCaption">
              {/* eslint-disable-next-line max-len */}
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
          <Stack
            sx={{
              flex: 1,
              ml: 2,
            }}
            spacing={2}
          >
            <Divider sx={{ borderBottom: `1px solid ${theme.palette.primary.main}` }} />
            <Typography className="warning" variant="footerDisclaimers" display="block">
              LEGAL DISCLAIMER
            </Typography>
            <Typography className="warning" variant="footerDisclaimers" display="block">
              PRIVACY NOTICE
            </Typography>
          </Stack>
        </Stack>
      )}

    </Box>
  );
}

export default Footer;
