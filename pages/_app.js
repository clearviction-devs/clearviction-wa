import '../styles/global.css';
import TagManager from 'react-gtm-module';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
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
  
 
   useEffect(() => {
     TagManager.initialize({ gtmId:gtmId });

 }, [])
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
