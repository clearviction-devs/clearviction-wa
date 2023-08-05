import '../styles/global.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import Footer from '../components/layout/Footer.tsx';
import Header from '../components/layout/Header.tsx';
import theme from '../styles/themes/theme.tsx';
import createEmotionCache from '../utils/createEmotionCache.ts';

const clientSideEmotionCache = createEmotionCache();
const gtmId = String(process.env.NEXT_PUBLIC_GTM_ID);

interface AppProps {
  Component: React.ComponentType;
  emotionCache?: EmotionCache;
  pageProps: any;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps) {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
