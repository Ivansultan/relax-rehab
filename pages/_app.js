import '../styles/global.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>   
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" width="16px" height="16px"/>
        </Head>
        <Component {...pageProps} />
        <style jsx global>{``}</style>
    </>
  )
}

