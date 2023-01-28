import { Box, Button, Container, SxProps, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';

import Footer from '../components/layout/Footer';

const heroStyles: SxProps = {
  backgroundColor: 'primary.dark',
  color: 'text.secondary',
  py: 8,
};

export default function Home() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>Clearviction</title>
        <meta name='description' content='Helping clear convictions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Box sx={heroStyles} textAlign={{ xs: 'center', md: 'left' }}>
          <Container maxWidth='lg'>
            <Typography variant='h1' gutterBottom>
              {matchesXS ? `WA's` : `Washington's`} Vacation Eligibility
              Calculator
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant='subtitle1' sx={{ mb: 4 }}>
                  If you have convictions in Washington, you can check your
                  eligibility to vacate your conviction for free in less than 10
                  minutes!
                </Typography>
                <Button
                  variant='contained'
                  color='neutral'
                  href='/calculator/landing-0'
                >
                  Access Calculator
                </Button>
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <img src='/illustrations/washington.svg' alt='' />
              </Box>
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  );
}
