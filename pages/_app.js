import '../styles/global.css'
import '../styles/HomePage.css'
import '../styles/MasonryLayout.css'
import Head from 'next/head'


export default function MyApp({ Component, pageProps }) {
  return (
    <>   
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" width="16px" height="16px"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
    </>
  )
}

