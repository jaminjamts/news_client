// pages/_app.tsx
import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import createEmotionCache from '../../createEmotionCache';
import theme from '../../theme';

// Client-side cache, shared for the whole session
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
