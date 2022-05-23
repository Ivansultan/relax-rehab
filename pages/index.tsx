import HomePage from "./HomePage";
import MainLayout from "./MainLayout";
import React, { useState } from "react";
import BottomNavPanel from "./BottomNavPanel";

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
