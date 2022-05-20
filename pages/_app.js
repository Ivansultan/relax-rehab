import "../styles/global.css";
import "../styles/HomePage.css";
import "../styles/MasonryLayout.css";
import "../styles/MenuMobile.css";
import "../styles/AboutYumeiho.css";
import "../styles/WorkResultsMob.css";
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
import "../styles/Carousel.css";
import Head from "next/head";
import English from "../content/compiled-locales/en.json";
import Ukrainian from "../content/compiled-locales/ua.json";
import Russian from "../content/compiled-locales/ru.json";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

export default function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split(" ") : ["en"];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "en":
        return English;
      case "ua":
        return Ukrainian;
      case "ru":
        return Russian;

      default:
        Ukrainian;
        return;
    }
  }, [shortLocale]);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <IntlProvider
        locale={shortLocale}
        messages={messages}
        onError={() => null}
      >
        {/* <FormattedMessage defaultMessage="текст" /> */}
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}
