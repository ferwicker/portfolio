import Head from 'next/head';

import '../styles/global.scss'
import Main from '../components/Main/Main';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8" />
          <title>Fernanda Gilbert</title>
          <link rel="icon" href="/favicon.svg" />
          <link rel="stylesheet" href="https://use.typekit.net/dlz3xmj.css"></link>
        </Head>
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default MyApp
