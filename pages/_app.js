import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import '../styles/global.css';

import createEmotionCache from '../utils/createEmotionCache';
import lightTheme from '../styles/themes/light-theme';

import Head from 'next/head';
import Header from '../components/Header';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
