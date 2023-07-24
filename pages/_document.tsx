// import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import createEmotionServer from '@emotion/server/create-instance';
import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import React from 'react';

import SocialMetaLinks from '../components/helper/SocialMetaLinks.tsx';
import theme from '../styles/themes/theme.tsx';
import createEmotionCache from '../utils/createEmotionCache.ts';

interface DocProps {
  emotionStyleTags: any[];
}

export default function CustomDocument({ emotionStyleTags }: DocProps) {
  return (
    <Html lang="en-US">
      <Head>
        <SocialMetaLinks />
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
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Sets up SSR alongside SSG. Refer to the following example -
// https://github.com/mui/material-ui/blob/39f5143ef86be8ff076d4ebdb0d39931ad4885c6/examples/nextjs/pages/_document.js

// use of any
export async function getStaticProps(ctx: any) {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () => originalRenderPage({
    // use of any
    enhanceApp: (App: any) => function EnhanceApp(props: any) {
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
    props: {
      ...initialProps,
      emotionStyleTags,
    },
  };
}
