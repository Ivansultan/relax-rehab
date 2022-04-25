import "../styles/global.css";
import "../styles/HomePage.css";
import "../styles/MasonryLayout.css";
import "../styles/MenuPageMobile.css";
import "../styles/MenuMobile.css";
import "../styles/AboutYumeiho.css";
import "../styles/WorkResultsMob.css";
import "../styles/WorkResultsWeb.css";
import "../styles/FAQWeb.css";
import "../styles/AboutMeWeb.css";
import "../styles/ReviewsWeb.css";
import "../styles/FooterMob.css";
import "../styles/FooterWeb.css";
import "../styles/ReviewsWeb.css";
import "../styles/ContactsMob.css";
import "../styles/ReviewsMob.css";
import "../styles/AboutMeMob.css";
import "../styles/FAQMob.css";
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
