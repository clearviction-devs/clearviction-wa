import '../styles/global.css';

import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import Footer from '../components/layout/Footer.tsx';
import Header from '../components/layout/Header';
import theme from '../styles/themes/theme.tsx';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,

}) {
  const router = useRouter();

  useEffect(() => {
    // initializing google tag
    TagManager.initialize({ gtmId });

    // tracking every page via event listener when a route change is completed
    const handleRouteChangeComplete = () => {
      TagManager.initialize({ gtmId });
    };
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

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
