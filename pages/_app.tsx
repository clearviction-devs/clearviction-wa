import '../styles/global.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React from 'react';

import InterceptSurveyForm from '../components/functional/InterceptSurveyForm.tsx';
import Footer from '../components/layout/Footer.tsx';
import Header from '../components/layout/Header.tsx';
import theme from '../styles/themes/theme.tsx';
import createEmotionCache from '../utils/createEmotionCache.ts';

const clientSideEmotionCache = createEmotionCache();

interface AppProps {
  Component: React.ComponentType
  emotionCache?: EmotionCache
  pageProps: any
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <InterceptSurveyForm>
          <>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        </InterceptSurveyForm>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
