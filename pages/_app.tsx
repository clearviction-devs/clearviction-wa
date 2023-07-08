import '../styles/global.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

// import TagManager from 'react-gtm-module';
import Footer from '../components/layout/Footer.tsx';
import Header from '../components/layout/Header.tsx';
import theme from '../styles/themes/theme.tsx';
import createEmotionCache from '../utils/createEmotionCache.ts';

const clientSideEmotionCache = createEmotionCache();

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
// const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function MyApp(
  { Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps,
) {
  const router = useRouter();
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

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
