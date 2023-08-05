import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  SxProps,
  Typography,
} from '@mui/material';
import React from 'react';

import navItems from '../../content/navItems.ts';
import ImageContainer from './ImageContainer.tsx';
import NavigationLogo from './NavigationLogo.tsx';

const sectionContainerStyles: SxProps = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const sectionHeaderStyles: SxProps = {
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Footer() {
  return (
    <Box
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
        sx={{
          display: 'flex',
          textAlign: 'center',
          padding: 2,
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
        }}
      >
        <Box sx={sectionContainerStyles}>
          <Box sx={sectionHeaderStyles}>
            <NavigationLogo fullSize />
          </Box>
          <Typography variant="caption" gutterBottom>
            Clearviction is reducing barriers faced by formerly incarcerated
            individuals by streamlining the process of vacating eligible
            convictions in Washington state.
          </Typography>
          <Typography variant="caption">
            Clearviction is a registered 501(c)3 nonprofit organization,
            EIN#88-3187952. All donations are tax deductible in full or in part.
          </Typography>
        </Box>

        <Divider />

        <Box sx={sectionContainerStyles}>
          <Box sx={sectionHeaderStyles}>
            <Typography variant="h4">Links</Typography>
          </Box>
          <Grid container spacing={1} maxWidth={300}>
            {navItems
              .filter(
                (item) => item.text !== 'Home' && item.text !== 'Access Calculator',
              )
              .map((item) => (
                <Grid key={item.text} item xs={6}>
                  <Link
                    href={item.href}
                    color="primary.contrastText"
                    underline="hover"
                    fontSize={18}
                    noWrap
                  >
                    {item.text}
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Box>

        <Divider />

        <Box sx={sectionContainerStyles}>
          <Box sx={sectionHeaderStyles}>
            <Typography variant="h4">Partners</Typography>
          </Box>
          <Stack
            height="100%"
            alignItems="center"
            justifyContent="center"
            sx={{ flex: 1 }}
          >
            <Box>
              <ImageContainer
                alt=""
                src="/democracylab-logo.png"
                width={412}
                height={122}
                useImageDimensions
                style={{
                  maxWidth: '200px',
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Box>
              <ImageContainer
                alt=""
                src="/openseattle-logo.png"
                width={130}
                height={102}
                useImageDimensions
                style={{
                  maxWidth: '200px',
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
