import createEmotionServer from '@emotion/server/create-instance';
import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import Script from 'next/script';
import React from 'react';

import theme from '../styles/themes/theme.tsx';
import createEmotionCache from '../utils/createEmotionCache.ts';

export default class MyDocument extends Document {
  render() {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

    return (
      <Html lang="en-US">
        <Head>
          {/* Google Analytics */}
          <Script src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
          </Script>
          {/* gitEnd Google Analytics */}
          <meta property="og:url" content="https://www.clearviction.org/donate" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Clearviction.org: A fresh start for people with Washington State Convictions"
          />
          <meta
            property="og:description"
            content="Nonprofit Clearviction provides tools and guidance for people with Washington State convictions to clear their criminal records and begin a path to a fresh start."
          />
          <meta
            name="image"
            property="og:image"
            content="https://cvp-team-photos.s3.us-west-2.amazonaws.com/Calculator_Two+Color+2..svg"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Nonprofit Clearviction provides tools and guidance for people with Washington State convictions to clear their criminal records and begin a path to a fresh start."
            key="description"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=League+Gothic&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="emotion-insertion-point" content="" />
          <meta name="google-site-verification" content="KCnoZn7O-gYJ4Loa2Wzn7iosA1gxamx9iOOMVLCkaVA" />

          {(this.props as any).emotionStyleTags}
          <script async src="https://tally.so/widgets/embed.js" />
        </Head>
        <body>
          <noscript
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Sets up SSR alongside SSG. Refer to the following example -
// https://github.com/mui/material-ui/blob/39f5143ef86be8ff076d4ebdb0d39931ad4885c6/examples/nextjs/pages/_document.js

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App: any) => function EnhanceApp(props) {
      return <App emotionCache={cache} {...props} />;
    },
  });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
