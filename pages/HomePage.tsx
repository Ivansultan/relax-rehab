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
import Background from "./Images/background.jpeg";

function HomePage(props) {
  const { locale, dispatch } = props;
  return (
    <>
      <div className="home-page-container">
        <div className="header">
          <div className="title-container">
            <Languages locale={locale} dispatch={dispatch} />
            <div className="title">
              <h1>Массаж </h1>
              <h1>Юмейхо терапия</h1>
            </div>
            <TitleContacts />
          </div>
          <div className="nav-panel">
            <div className="left-section">
              <div className="massages">
                <Link href={"/Massages"}>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      opacity: 1,
                      color: "whitesmoke",
                      border: "1px solid whitesmoke",
                    }}
                    // variant="contained"
                  >
                    <span style={{ fontSize: "medium" }}>Массажи</span>
                  </Button>
                </Link>
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
                    // variant="contained"
                  >
                    <span style={{ fontSize: "medium" }}>Результаты работ</span>
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
                    // variant="contained"
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
                    // variant="contained"
                  >
                    <span style={{ fontSize: "medium" }}>Обо мне</span>
                  </Button>
                </Link>
              </div>

              <div className="reviews">
                <Link href={"/Reviews"}>
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
        <div className="logo-image">
          <div className="logo-title" style={{ padding: "265px 0 0 0 " }}>
            <h2
              style={{
                color: "whitesmoke",
                fontStyle: "normal",
                fontWeight: "lighter",
              }}
            >
              Реабилитационный
            </h2>
          </div>
          <div className="logo">
            <Image src={logoPic} />
          </div>
          <div className="logo-title" style={{ padding: "95px 0 0 0 " }}>
            <h2
              style={{
                color: "whitesmoke",
                fontStyle: "normal",
                fontWeight: "lighter",
              }}
            >
              Расслабляющий
            </h2>
          </div>
        </div>
        <div className="sign-up-button">
          <PopoverSign />
          {/* <DropUpMenu /> */}
          {/* <Link href={"/MassageSignUp"}>
            <Button
              style={{
                backgroundColor: "transparent",
                opacity: 1,
                color: "whitesmoke",
                border: "1px solid white",
              }}
              // variant="contained"
            >
              <span style={{ fontSize: "medium" }}>Записаться на массаж</span>
            </Button>
          </Link> */}
        </div>

        <div className="languages-container-mobile">
          {languages.map((language, index) => {
            const isActiveLocale = language.locale === locale;
            return (
              <div
                className="languages-mobile"
                key={index}
                style={{
                  paddingLeft: 10,
                  cursor: isActiveLocale ? "default" : "pointer",
                  fontWeight: isActiveLocale ? "bold" : "normal",
                  textDecoration: isActiveLocale ? "underLine" : "",
                }}
                onClick={() => {
                  if (!isActiveLocale) {
                    dispatch({
                      type: "setLocale",
                      locale: language.locale,
                    });
                  }
                }}
              >
                {language.name}
              </div>
            );
          })}
        </div>
      </div>
      <Massages />
      <AboutYumeiho />
    </>
  );
}

export default HomePage;
