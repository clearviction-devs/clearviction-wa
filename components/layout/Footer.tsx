import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
} from '@mui/material';
import React from 'react';

import { footerContent, footerNavItems } from '../../content/footer.ts';

type FooterSectionProps = {
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
}

const sectionContainerStyles: SxProps = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: {
    xs: 'center',
    md: 'start',
  },
};

const sectionHeaderStyles: SxProps = {
  height: { xs: 40, md: 64 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  pb: { xs: 0, md: 4 },
};

const getFooterMainStyles = (theme: Theme) => ({
  display: 'flex',
  textAlign: { xs: 'center', md: 'left' },
  flexDirection: { xs: 'column', md: 'row' },
  p: { xs: theme.spacing(4, 9, 0, 9), md: theme.spacing(10, 9, 0, 9) },
  gap: { xs: 1, md: 4 },
});

function FullAddress(props?: TypographyProps) {
  return (
    <Typography className="address" variant="caption" {...props}>
      {footerContent.address.name}
      <br />
      {footerContent.address.street}
      <br />
      {footerContent.address.city}
    </Typography>
  );
}

function FooterSection({ title, children, sx }: FooterSectionProps) {
  const footerSectionSx = { ...sectionContainerStyles, ...sx };
  const transformTextInKebabCase = (text: string) => text.replace(/\s+/g, '-').toLowerCase();
  const titleInKebabCase = transformTextInKebabCase(title);

  return (
    <Box className={`${titleInKebabCase}-section`} sx={footerSectionSx}>
      <Box className={`${titleInKebabCase}-header`} sx={sectionHeaderStyles}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      {children}
    </Box>
  );
}

function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      color="primary"
      sx={{
        mt: 'auto',
        backgroundColor: 'primary.dark',
        color: 'primary.contrastText',
      }}
    >
      <Container
        maxWidth="xl"
        sx={getFooterMainStyles}
        className="footer-main"
      >
        <FooterSection title="Welcome!" sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box className="welcome-details" maxWidth="540px">
            <Typography className="our-mission" variant="caption" paragraph>
              {footerContent.mission}
            </Typography>
            <FullAddress paragraph />
          </Box>
        </FooterSection>

        <FooterSection title="Explore">
          <Grid
            className="explore-grid"
            container
            rowSpacing={{ xs: 0, md: 5 }}
            columnSpacing={5}
            maxWidth={400}
          >
            {footerNavItems
              .map((item) => (
                <Grid key={item.text} item xs={12} md={6}>
                  <Link
                    href={item.href}
                    color="primary.contrastText"
                    underline="hover"
                    fontSize={18}
                    noWrap
                    className="explore-link"
                  >
                    <Box
                      display="flex"
                      sx={{
                        justifyContent: {
                          xs: 'center',
                          md: 'space-between',
                        },
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="subtitle2" margin="0">
                        {item.text}
                      </Typography>
                      <Box
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                      >
                        <ArrowRightIcon />
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
          </Grid>
        </FooterSection>

        <Box sx={{ display: { md: 'none', xs: 'block' } }}>
          <Divider sx={{ borderBottom: '1px solid currentColor' }} />
          <FullAddress />
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
            {footerContent.warning}
          </Typography>
          <Typography className="information" variant="caption" paragraph>
            {footerContent.information}
          </Typography>
        </Box>
      </Container>

    </Box>
  );
}

export default Footer;
