import MainLayout from "src/components/MainLayout";
import React, { useState } from "react";
import BottomNavPanel from "src/components/BottomNavPanel";
import AboutYumeiho from "src/components/AboutYumeiho";
import PopoverContacts from "src/components/PopoverContacts";
import paths from "src/paths";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import logoPic from "public/logo2.png";
import TitleContacts from "src/components/TitleContacts";
import Image from "next/image";
import Massages from "src/components/Massages";
import PopoverSign from "src/components/PopoverSign";
import { FormattedMessage } from "react-intl";
import Languages from "src/components/Languages";
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
  const { locale } = useRouter();
  return (
    <>
      <MainLayout title={"Юмейхо терапия"}>
        <div>
          <div className="home-page-container">
            <div className="header">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div className="title-container">
                  <Languages />
                  <div className="main-title">
                    <h1>
                      <FormattedMessage id="Massage" defaultMessage="Massage" />
                    </h1>
                    <h1>
                      <FormattedMessage
                        id="Yumeiho therapy"
                        defaultMessage="Yumeiho therapy"
                      />
                    </h1>
                    <div className="languages-container-mobile">
                      {languages.map((language, index) => {
                        const isActiveLocale = language.locale === locale;
                        return (
                          <Link href={`/${language.locale}`} key={index}>
                            <a
                              className="languages-mobile"
                              key={index}
                              style={{
                                paddingLeft: 10,
                                color: isActiveLocale
                                  ? "lightgreen"
                                  : "whitesmoke",
                                cursor: isActiveLocale ? "default" : "pointer",
                                textDecoration: isActiveLocale ? "" : "none",
                              }}
                            >
                              {language.name}
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <TitleContacts />
                </div>
              </div>

              <div className="nav-panel">
                <div className="left-section">
                  <div className="massages">
                    <a style={{ textDecoration: "none" }} href="#massages">
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          opacity: 1,
                          color: "whitesmoke",
                          border: "1px solid whitesmoke",
                        }}
                      >
                        <span style={{ fontSize: "medium" }}>
                          <FormattedMessage
                            id="Massages"
                            defaultMessage="Massages"
                          />
                        </span>
                      </Button>
                    </a>
                  </div>

                  <div className="results">
                    <Link href={paths.results}>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          opacity: 1,
                          color: "whitesmoke",
                          border: "1px solid white",
                        }}
                      >
                        <span style={{ fontSize: "medium" }}>
                          <FormattedMessage
                            id="Work results"
                            defaultMessage="Work results"
                          />
                        </span>
                      </Button>
                    </Link>
                  </div>

                  <div className="faq">
                    <Link href={paths.faq}>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          opacity: 1,
                          color: "whitesmoke",
                          border: "1px solid white",
                        }}
                      >
                        <span style={{ fontSize: "medium" }}>FAQ</span>
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="right-section">
                  <div className="about-me">
                    <Link href={paths.about_me}>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          opacity: 1,
                          color: "whitesmoke",
                          border: "1px solid white",
                        }}
                      >
                        <span style={{ fontSize: "medium" }}>
                          <FormattedMessage
                            id="About me"
                            defaultMessage="About me"
                          />
                        </span>
                      </Button>
                    </Link>
                  </div>

                  <div className="reviews">
                    <Link href={paths.reviews}>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          opacity: 1,
                          color: "whitesmoke",
                          border: "1px solid white",
                        }}
                      >
                        <span style={{ fontSize: "medium" }}>
                          <FormattedMessage
                            id="Reviews"
                            defaultMessage="Reviews"
                          />
                        </span>
                      </Button>
                    </Link>
                  </div>
                  <PopoverContacts />
                </div>
              </div>
            </div>
            <div className="logo-image">
              <div
                className="logo-title"
                style={{
                  padding: "245px 0 0 0 ",
                  width: "30%",
                }}
              >
                <h1
                  style={{
                    color: "whitesmoke",
                    fontStyle: "normal",
                    display: "flex",
                    justifyContent: "flex-end",
                    fontWeight: "lighter",
                  }}
                >
                  <FormattedMessage
                    id="Rehabilitation"
                    defaultMessage="Rehabilitation"
                  />
                </h1>
              </div>
              <div className="logo">
                <Image src={logoPic} />
              </div>
              <div
                className="logo-title"
                style={{
                  padding: "75px 0 0 0 ",
                  width: "30%",
                }}
              >
                <h1
                  style={{
                    color: "whitesmoke",
                    fontStyle: "normal",
                    fontWeight: "lighter",
                  }}
                >
                  <FormattedMessage id="Relaxing" defaultMessage="Relaxing" />
                </h1>
              </div>
            </div>
            <div className="sign-up-button">
              <PopoverSign />
            </div>

            <div className="languages-container-mobile"></div>
          </div>
          <hr className="home-page-line-web" />
          <hr className="home-page-line-mob" />
          <Massages />
          <AboutYumeiho />
        </div>
        <BottomNavPanel />
      </MainLayout>
    </>
  );
}

export default App;
