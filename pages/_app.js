import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import '../styles/global.css';

import createEmotionCache from '../utils/createEmotionCache';
import theme from '../styles/themes/theme';

import Head from 'next/head';
import Header from '../components/layout/Header';

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
