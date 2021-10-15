import Link from "next/link";
import Popover from "./Popover";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import logoPic from "./Images/logo.png";
import Languages from "./Languages";
import TitleContacts from "./TitleContacts";
import Image from "next/image";
import { languages } from "./index";

function HomePage(props) {
  const { locale, dispatch } = props;
  return (
    <div className="container">
      <div className="header">
        <div className="title-container">
          <Languages locale={locale} dispatch={dispatch} />
          <div className="title">
            <h1 className="title-first-line">Массаж </h1>
            <h1 className="title-second-line">Юмейхо терапия</h1>
            {/* <h1 className="title-second-line">расслабляющий и</h1> */}
            {/* <h1 className="title-second-line">реабилитационный</h1> */}
          </div>
          <TitleContacts />
        </div>
        {/* <div className="nav-panel">
          <div className="left-section">
            <Link href={"/Massages"}>
              <Button
                style={{
                  backgroundColor: "transparent",
                  opacity: 1,
                  color: "whitesmoke",
                }}
                variant="contained"
              >
                Массажи
              </Button>
            </Link>
            <Link href={"/WorkResults"}>
              <Button
                style={{
                  backgroundColor: "transparent",
                  opacity: 1,
                  color: "whitesmoke",
                }}
                variant="contained"
              >
                Результаты работ
              </Button>
            </Link>
            <Link href={"/FAQ"}>
              <Button
                style={{
                  backgroundColor: "transparent",
                  opacity: 1,
                  color: "whitesmoke",
                }}
                variant="contained"
              >
                FAQ
              </Button>
            </Link>
          </div>

          <div className="right-section">
            <Link href={"/AboutMe"}>
              <Button
                style={{
                  backgroundColor: "transparent",
                  opacity: 1,
                  color: "whitesmoke",
                }}
                variant="contained"
              >
                Обо мне
              </Button>
            </Link>

            <Link href={"/Reviews"}>
              <Button
                style={{
                  backgroundColor: "transparent",
                  opacity: 1,
                  color: "whitesmoke",
                }}
                variant="contained"
              >
                Отзывы
              </Button>
            </Link>

            <Popover />
          </div>
        </div> */}
      </div>
      {/* <div className="logo-image">
        <div className="logo">
          <Image src={logoPic} />
        </div>
      </div> */}
      {/* <div className="sign-up-button">
        <Link href={"/MassageSignUp"}>
          <Button
            style={{
              backgroundColor: "transparent",
              opacity: 1,
              color: "whitesmoke",
            }}
            variant="contained"
          >
            Записаться на массаж
          </Button>
        </Link>
      </div> */}

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

      {/* <div className="sign-up-button-mobile">
        <Link href={"/MassageSignUp"}>
          <Button
            style={{
              backgroundColor: "transparent",
              opacity: 1,
              color: "whitesmoke",
            }}
            variant="contained"
          >
            Записаться на массаж
          </Button>
        </Link>
      </div> */}
    </div>
  );
}

export default HomePage;
