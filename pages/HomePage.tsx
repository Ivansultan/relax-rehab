import Link from "next/link";
import PopoverContacts from "./PopoverContacts";
import Button from "@material-ui/core/Button";
import logoPic from "../public/logo2.png";
import Languages from "./Languages";
import TitleContacts from "./TitleContacts";
import Image from "next/image";
import Massages from "./Massages";
import { languages } from "./index";
import PopoverSign from "./PopoverSign";
import AboutYumeiho from "./AboutYumeiho";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

const HomePage = () => {
  const { locale } = useRouter();

  return (
    <>
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
                      <Link href="/" key={index} locale={language.locale}>
                        <a
                          className="languages-mobile"
                          key={index}
                          style={{
                            paddingLeft: 10,
                            color: isActiveLocale ? "lightgreen" : "whitesmoke",
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
                <Link href={"/WorkResults"}>
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
                <Link href={"/FAQ"}>
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
                <Link href={"/AboutMe"}>
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
                <Link href={"/ReviewsWeb"}>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      opacity: 1,
                      color: "whitesmoke",
                      border: "1px solid white",
                    }}
                  >
                    <span style={{ fontSize: "medium" }}>
                      <FormattedMessage id="Reviews" defaultMessage="Reviews" />
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
    </>
  );
};

export default HomePage;
