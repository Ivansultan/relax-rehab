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
        <title>Юмейхо терапия, реабилитационный и расслабляющий массаж</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Юмейхо терапия с японского языка, переводится как - (восстановление жизненных сил), эта система имеет холистический (целостный) подход к восстановлению организма человека. Под понятием (жизненные силы) подразумевается, что при коррекции костей таза, позвоночника, конечностей и гипертонуса мышц, полноценно восстанавливается движение крови, лимфы, иннервация (нервная связь), энергетика человека. Юмейхо терапия помогает привести в равновесие и баланс весь опорно-двигательный аппарат, улучшить работу внутренних органов, что в свою очередь стимулирует организм бороться с патологическими отклонениями и восстановить жизненные силы, для полноценной счастливой жизни без боли."
        />
        <meta
          name="keywords"
          content="реабилитационный и расслабляющий массаж, Киев, восстановление после травмы, снятие напряжения и боли, коррекция спины и таза, лечение сколиоза "
        />
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
