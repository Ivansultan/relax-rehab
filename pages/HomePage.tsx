import Link from "next/link";
import PopoverContacts from "./PopoverContacts";
import Button from "@material-ui/core/Button";
// import Menu from "./Menu";
import logoPic from "./Images/logo2.png";
import Languages from "./Languages";
import TitleContacts from "./TitleContacts";
import Image from "next/image";
import Massages from "./Massages";
import { languages } from "./index";
import PopoverSign from "./PopoverSign";
import AboutYumeiho from "./AboutYumeiho";
// import Link from "react-scroll";
import Background from "../public/background.jpeg";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import LogoPic from "./Images/logo2.png";

const HomePage = () => {
  const { locale } = useRouter();

  return (
    <>
      <div className="home-page-container">
        {/* <Image
          className="background"
          src={Background}
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        /> */}
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
                  {/* <big> */}
                  <FormattedMessage id="Massage" defaultMessage="Massage" />
                  {/* </big> */}
                </h1>
                <h1>
                  {/* <big> */}
                  <FormattedMessage
                    id="Yumeiho therapy"
                    defaultMessage="Yumeiho therapy"
                  />
                  {/* </big> */}
                </h1>
                {/* <div style={{ marginTop: "10px" }}> */}
                <div className="languages-container-mobile">
                  {languages.map((language, index) => {
                    const isActiveLocale = language.locale === locale;
                    return (
                      <Link href="/" locale={language.locale}>
                        <a
                          className="languages-mobile"
                          key={index}
                          style={{
                            paddingLeft: 10,
                            color: isActiveLocale ? "lightgreen" : "whitesmoke",
                            cursor: isActiveLocale ? "default" : "pointer",
                            // fontWeight: isActiveLocale ? "bold" : "normal",
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
                {/* <Link href={"/"}> */}

                <a style={{ textDecoration: "none" }} href="#massages">
                  <Button
                    style={{
                      // scrollBehavior: "smooth",
                      backgroundColor: "transparent",
                      opacity: 1,
                      color: "whitesmoke",
                      border: "1px solid whitesmoke",
                      // transition: "all 0.6s ease-in-out",
                    }}
                    // variant="contained"
                  >
                    <span style={{ fontSize: "medium" }}>Массажи</span>
                  </Button>
                </a>
              </div>

              <div className="results">
                <Link href={"/WorkResultsWeb"}>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      opacity: 1,
                      color: "whitesmoke",
                      border: "1px solid white",
                    }}
                  >
                    <span style={{ fontSize: "medium" }}>Результаты работ</span>
                  </Button>
                </Link>
              </div>

              <div className="faq">
                <Link href={"/FAQWeb"}>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      opacity: 1,
                      color: "whitesmoke",
                      border: "1px solid white",
                    }}
                    // variant="contained"
                  >
                    <span style={{ fontSize: "medium" }}>FAQ</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="right-section">
              <div className="about-me">
                <Link href={"/AboutMeWeb"}>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      opacity: 1,
                      color: "whitesmoke",
                      border: "1px solid white",
                    }}
                    // variant="contained"
                  >
                    <span style={{ fontSize: "medium" }}>Обо мне</span>
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
                    // variant="contained"
                  >
                    <span style={{ fontSize: "medium" }}>Отзывы</span>
                  </Button>
                </Link>
              </div>
              <PopoverContacts />
            </div>
          </div>
        </div>
        {/* <div className="background-for-logo"> */}
        <div className="logo-image">
          <div className="logo-title" style={{ padding: "235px 0 0 0 " }}>
            <h1
              style={{
                color: "whitesmoke",
                fontStyle: "normal",
                fontWeight: "lighter",
              }}
            >
              Реабилитационный
            </h1>
          </div>
          <div className="logo">
            <Image src={logoPic} />
          </div>
          <div className="logo-title" style={{ padding: "65px 0 0 0 " }}>
            <h1
              style={{
                color: "whitesmoke",
                fontStyle: "normal",
                fontWeight: "lighter",
              }}
            >
              Расслабляющий
            </h1>
          </div>
        </div>
        <div className="sign-up-button">
          <PopoverSign />
        </div>

        <div className="languages-container-mobile"></div>
      </div>
      <div className="background-massages">
        <Massages />
      </div>

      <AboutYumeiho />
    </>
  );
};

export default HomePage;
