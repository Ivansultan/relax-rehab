import "../../styles/global.css";
import "../../styles/HomePage.css";
import "../../styles/MasonryLayout.css";
import "../../styles/MenuMobile.css";
import "../../styles/AboutYumeiho.css";
import "../../styles/WorkResults.css";
import "../../styles/FAQ.css";
import "../../styles/AboutMe.css";
import "../../styles/Reviews.css";
import "../../styles/Footer.css";
import "../../styles/ContactsMob.css";
import Head from "next/head";
import English from "../../content/compiled-locales/en.json";
import Ukrainian from "../../content/compiled-locales/ua.json";
import Russian from "../../content/compiled-locales/ru.json";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split(" ") : ["en"];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "en":
        console.log(English);
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
        <meta
          name="description"
          content="Yumeiho therapy, Юмейхо терапія, Юмейхо терапия "
        />
        <meta
          name="keywords"
          content="реабилитационный и расслабляющий массаж Киев, восстановление после травмы, снятие напряжения и боли, выравнивание спины и таза, лечение сколиоза, Юмейхо терапия, лимфодренаж "
        />
        <meta name="author" content="Ivan Soltynchuk" />
      </Head>
      <IntlProvider
        locale={shortLocale}
        messages={messages}
        onError={() => null}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}

export default MyApp;
