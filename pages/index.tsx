import HomePage from "./HomePage";
import MainLayout from "./MainLayout";
import React, { useReducer, useState } from "react";
import Background from "../public/background.jpeg";
import Image from "next/image";
import Massages from "./Massages";
import { IntlProvider } from "react-intl";
import Russian from "../translations/ru.json";
import English from "../translations/en.json";
import Ukrainian from "../translations/ua.json";
import BottomNavPanel from "./BottomNavPanel";
import Footer from "./Footer";
// import MenuMobile from "./MenuMobile";

type Locale = "en" | "ru" | "ua";

type State = {
  locale: Locale;
};

type Action = State & {
  type: "setLocale";
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setLocale":
      return { locale: action.locale };
    default:
      throw new Error();
  }
};

const messages = {
  en: English,
  ru: Russian,
  ua: Ukrainian,
};

type Language = {
  name: string;
  locale: Locale;
};

export const languages: Language[] = [
  { name: "EN", locale: "en" },
  { name: "RU", locale: "ru" },
  { name: "UA", locale: "ua" },
];

function App() {
  const [state, dispatch] = useReducer(reducer, { locale: "ru" });
  const { locale } = state;
  const [_window, setSize] = useState(undefined);

  React.useEffect(() => {
    setSize(window);
  }, []);

  if (!_window) {
    return (
      <div className="loading">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  const { innerHeight, innerWidth } = _window;
  console.log("locale", locale);

  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <MainLayout title={"Юмейхо терапия"}>
          <div
          // style={{
          //   width: innerWidth,
          //   height: innerHeight,
          // }}
          >
            {/* <Image
              className="background"
              src={Background}
              layout="fill"
              objectFit="cover"
              objectPosition="left"
            /> */}
            <HomePage locale={locale} dispatch={dispatch} />
          </div>

          <BottomNavPanel />
          <Footer />
        </MainLayout>
      </IntlProvider>
    </>
  );
}

export default App;
