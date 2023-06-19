import '../styles/global.css';

import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../components/layout/Footer.tsx';
import Header from '../components/layout/Header';
import theme from '../styles/themes/theme.tsx';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  emotionCache: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.any,
};

export default MyApp;
