import "../styles/global.css";
import "../styles/HomePage.css";
import "../styles/MasonryLayout.css";
import "../styles/MenuPageMobile.css";
import "../styles/MenuMobile.css";
import "../styles/AboutYumeiho.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
