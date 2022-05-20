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
import { useRouter } from "next/router";

type Locale = "en" | "ua" | "ru";

type Language = {
  name: string;
  locale: Locale;
};

export const languages: Language[] = [
  { name: "EN", locale: "en" },
  { name: "UA", locale: "ua" },
  { name: "RU", locale: "ru" },
];

function App() {
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

  return (
    <>
      <MainLayout title={"Юмейхо терапия"}>
        <div>
          <HomePage />
        </div>
        <BottomNavPanel />
      </MainLayout>
    </>
  );
}

export default App;
