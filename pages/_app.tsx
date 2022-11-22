import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Provider from 'store';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import MainTheme from '@styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={MainTheme}>
      <Provider>
        <Component {...pageProps} />  
      </Provider>
    </ThemeProvider>
    );
}
