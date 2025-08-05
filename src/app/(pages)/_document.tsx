/* eslint-disable @next/next/no-document-import-in-page */

import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

import theme from '../../theme';
import createEmotionCache from '../../createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="mn">
        <Head>
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+Mongolian&family=Roboto&display=swap"
            rel="stylesheet"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration */}
          {/*eslint-disable*/}
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// SSR logic
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      key={style.key}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
